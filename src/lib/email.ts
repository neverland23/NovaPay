import { Resend } from 'resend';

// Initialize Resend client
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  try {
    return new Resend(apiKey);
  } catch (error) {
    console.error('Failed to initialize Resend client:', error);
    return null;
  }
};

const resend = getResendClient();

/**
 * Validates email service configuration
 * @returns Object with validation status and message
 */
export const validateEmailConfig = () => {
  const hasApiKey = !!process.env.RESEND_API_KEY;
  const hasAppUrl = !!process.env.NEXT_PUBLIC_APP_URL;
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  const issues: string[] = [];
  
  if (!hasApiKey) {
    issues.push('RESEND_API_KEY is not set');
  } else if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith('re_')) {
    issues.push('RESEND_API_KEY appears to be invalid (should start with "re_")');
  }
  
  if (!hasAppUrl) {
    issues.push('NEXT_PUBLIC_APP_URL is not set (defaults to http://localhost:3000)');
  }
  
  return {
    isValid: issues.length === 0,
    isConfigured: hasApiKey,
    issues,
    nodeEnv,
    message: issues.length === 0 
      ? 'Email service is properly configured'
      : `Email configuration issues: ${issues.join(', ')}`,
  };
};

export const sendVerificationEmail = async (
  email: string,
  name: string,
  verificationToken: string
): Promise<void> => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const verificationUrl = `${appUrl}/verify-email?token=${verificationToken}`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Validate email configuration
  const configValidation = validateEmailConfig();
  if (!configValidation.isConfigured) {
    console.warn('[Email Service] ⚠️  Email configuration issue:', configValidation.message);
  }

  // Check if Resend is configured
  if (!resend || !process.env.RESEND_API_KEY) {
    const logMessage = `
${'='.repeat(60)}
📧 EMAIL VERIFICATION (Development Mode - No API Key)
${'='.repeat(60)}
To: ${email}
Subject: Verify Your NovaPays Account
Verification Link: ${verificationUrl}
${'='.repeat(60)}
⚠️  To send real emails, configure RESEND_API_KEY in .env.local
    `.trim();
    
    console.log(logMessage);
    
    // In development, just log. In production, throw error
    if (!isDevelopment) {
      throw new Error('RESEND_API_KEY is not configured. Cannot send verification email.');
    }
    return;
  }

  try {
    const emailFrom = process.env.EMAIL_FROM || `NovaPays <${fromEmail}>`;
    
    console.log(`[Email Service] Attempting to send verification email to: ${email}`);
    console.log(`[Email Service] From: ${emailFrom}`);
    console.log(`[Email Service] App URL: ${appUrl}`);

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: 'Verify Your NovaPays Account',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">NovaPays</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Welcome to NovaPays, ${name}!</h2>
            <p>Thank you for registering with NovaPays. To complete your registration and start using your account, please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Verify Email Address</a>
            </div>
            <p style="color: #666; font-size: 14px;">Or copy and paste this link into your browser:</p>
            <p style="color: #667eea; font-size: 12px; word-break: break-all;">${verificationUrl}</p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">This link will expire in 24 hours.</p>
            <p style="color: #666; font-size: 14px;">If you didn't create an account with NovaPays, please ignore this email.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} NovaPays. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome to NovaPays, ${name}!
        
        Thank you for registering with NovaPays. To complete your registration, please verify your email address by visiting the following link:
        
        ${verificationUrl}
        
        This link will expire in 24 hours.
        
        If you didn't create an account with NovaPays, please ignore this email.
      `,
    });

    if (error) {
      console.error('[Email Service] Resend API error:', JSON.stringify(error, null, 2));
      const errorMessage = error.message || 'Unknown error from Resend API';
      throw new Error(`Failed to send verification email: ${errorMessage}`);
    }

    if (!data || !data.id) {
      console.error('[Email Service] No email ID returned from Resend');
      throw new Error('Failed to send verification email: No email ID returned');
    }

    console.log(`[Email Service] ✅ Verification email sent successfully! Email ID: ${data.id}`);
    console.log(`[Email Service] Recipient: ${email}`);
  } catch (error: any) {
    console.error('[Email Service] ❌ Error sending verification email:', error);
    console.error('[Email Service] Error details:', {
      message: error.message,
      stack: error.stack,
      email,
      hasApiKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV,
    });
    
    // Always throw error - let the calling code decide how to handle it
    throw new Error(error.message || 'Failed to send verification email');
  }
};

export const sendResendVerificationEmail = async (
  email: string,
  name: string,
  verificationToken: string
): Promise<void> => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const verificationUrl = `${appUrl}/verify-email?token=${verificationToken}`;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Validate email configuration
  const configValidation = validateEmailConfig();
  if (!configValidation.isConfigured) {
    console.warn('[Email Service] ⚠️  Email configuration issue:', configValidation.message);
  }

  // Check if Resend is configured
  if (!resend || !process.env.RESEND_API_KEY) {
    const logMessage = `
${'='.repeat(60)}
📧 RESEND VERIFICATION EMAIL (Development Mode - No API Key)
${'='.repeat(60)}
To: ${email}
Verification Link: ${verificationUrl}
${'='.repeat(60)}
⚠️  To send real emails, configure RESEND_API_KEY in .env.local
    `.trim();
    
    console.log(logMessage);
    
    // In development, just log. In production, throw error
    if (!isDevelopment) {
      throw new Error('RESEND_API_KEY is not configured. Cannot send verification email.');
    }
    return;
  }

  try {
    const emailFrom = process.env.EMAIL_FROM || `NovaPays <${fromEmail}>`;
    
    console.log(`[Email Service] Attempting to resend verification email to: ${email}`);
    console.log(`[Email Service] From: ${emailFrom}`);

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: 'Verify Your NovaPays Account - New Verification Link',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">NovaPays</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">New Verification Link</h2>
            <p>Hi ${name},</p>
            <p>You requested a new email verification link. Click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Verify Email Address</a>
            </div>
            <p style="color: #666; font-size: 14px;">Or copy and paste this link into your browser:</p>
            <p style="color: #667eea; font-size: 12px; word-break: break-all;">${verificationUrl}</p>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">This link will expire in 24 hours.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>&copy; ${new Date().getFullYear()} NovaPays. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
      text: `
        Hi ${name},
        
        You requested a new email verification link. Please visit the following link to verify your email address:
        
        ${verificationUrl}
        
        This link will expire in 24 hours.
      `,
    });

    if (error) {
      console.error('[Email Service] Resend API error:', JSON.stringify(error, null, 2));
      const errorMessage = error.message || 'Unknown error from Resend API';
      throw new Error(`Failed to send verification email: ${errorMessage}`);
    }

    if (!data || !data.id) {
      console.error('[Email Service] No email ID returned from Resend');
      throw new Error('Failed to send verification email: No email ID returned');
    }

    console.log(`[Email Service] ✅ Resend verification email sent successfully! Email ID: ${data.id}`);
    console.log(`[Email Service] Recipient: ${email}`);
  } catch (error: any) {
    console.error('[Email Service] ❌ Error sending resend verification email:', error);
    console.error('[Email Service] Error details:', {
      message: error.message,
      stack: error.stack,
      email,
      hasApiKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV,
    });
    
    // Always throw error - let the calling code decide how to handle it
    throw new Error(error.message || 'Failed to send verification email');
  }
};
