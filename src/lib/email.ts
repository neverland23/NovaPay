import { Resend } from 'resend';

// Initialize Resend client
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const sendVerificationEmail = async (
  email: string,
  name: string,
  verificationToken: string
): Promise<void> => {
  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const verificationUrl = `${appUrl}/verify-email?token=${verificationToken}`;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // In development, if no Resend API key is configured, log to console
    if (!resend || !process.env.RESEND_API_KEY) {
      console.log('='.repeat(60));
      console.log('📧 EMAIL VERIFICATION (Development Mode)');
      console.log('='.repeat(60));
      console.log(`To: ${email}`);
      console.log(`Subject: Verify Your NovaPays Account`);
      console.log(`Verification Link: ${verificationUrl}`);
      console.log('='.repeat(60));
      console.log('\n⚠️  To send real emails, configure RESEND_API_KEY in .env.local\n');
      return;
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || `NovaPays <${fromEmail}>`,
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
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Verification email sent:', data?.id);
  } catch (error: any) {
    console.error('Error sending verification email:', error);
    // In development, don't fail registration if email fails
    if (process.env.NODE_ENV === 'development') {
      console.log('Continuing registration despite email error (development mode)');
    } else {
      throw new Error('Failed to send verification email');
    }
  }
};

export const sendResendVerificationEmail = async (
  email: string,
  name: string,
  verificationToken: string
): Promise<void> => {
  try {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const verificationUrl = `${appUrl}/verify-email?token=${verificationToken}`;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // In development, if no Resend API key is configured, log to console
    if (!resend || !process.env.RESEND_API_KEY) {
      console.log('='.repeat(60));
      console.log('📧 RESEND VERIFICATION EMAIL (Development Mode)');
      console.log('='.repeat(60));
      console.log(`To: ${email}`);
      console.log(`Verification Link: ${verificationUrl}`);
      console.log('='.repeat(60));
      return;
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || `NovaPays <${fromEmail}>`,
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
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Resend verification email sent:', data?.id);
  } catch (error: any) {
    console.error('Error sending resend verification email:', error);
    if (process.env.NODE_ENV === 'development') {
      console.log('Continuing despite email error (development mode)');
    } else {
      throw new Error('Failed to send verification email');
    }
  }
};
