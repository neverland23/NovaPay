# Email Verification Flow - Step-by-Step Guide

## Overview

This guide explains how the email verification flow works in NovaPay and how to configure it.

## ✅ What Has Been Implemented

### 1. **Database Changes**
- Added `emailVerified` field (boolean, default: false) to User model
- Added `emailVerificationToken` field (string, stored securely)
- Added `emailVerificationExpires` field (Date, 24 hours expiration)

### 2. **Registration Flow**
- When a user registers, they receive a verification email
- **No authentication cookies are set** until email is verified
- User is redirected to `/verify-email` page after registration
- Verification token expires after 24 hours

### 3. **Email Verification Page** (`/verify-email`)
- Automatically verifies email if token is in URL
- Shows success/error messages
- Allows resending verification email
- Redirects to dashboard after successful verification

### 4. **Middleware Protection**
- Protected routes (dashboard, profile, etc.) check email verification
- Unverified users are redirected to `/verify-email`
- Verified users can access all protected routes

### 5. **Login Flow**
- Users can login even if email is not verified
- After login, unverified users are redirected to `/verify-email`
- Verified users go to dashboard

### 6. **Google OAuth**
- Google OAuth users are automatically marked as verified (Google already verified their email)

## 📧 Email Configuration

### Development Mode (Default)
By default, the app runs in development mode where emails are logged to the console instead of being sent. You'll see output like:

```
============================================================
📧 EMAIL VERIFICATION (Development Mode)
============================================================
To: user@example.com
Subject: Verify Your NovaPay Account
Verification Link: http://localhost:3000/verify-email?token=...
============================================================
```

### Production Mode - Configure Resend

This application uses **Resend** for sending emails. Resend is a modern, developer-friendly email API service.

#### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

#### Step 2: Get Your API Key

1. Go to [Resend API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "NovaPay Production")
4. Copy the API key (starts with `re_`)

#### Step 3: Add Domain (Optional but Recommended)

For production, you should add your own domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Follow the DNS configuration instructions
4. Wait for domain verification (usually takes a few minutes)

**Note:** For testing, you can use the default `onboarding@resend.dev` email, but it's limited and not recommended for production.

#### Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```env
# Required: Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Optional: Custom "from" email (must be verified domain)
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Optional: Custom "from" name
EMAIL_FROM="NovaPay" <noreply@yourdomain.com>

# Required: Your app URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Example `.env.local`:**
```env
RESEND_API_KEY=re_abc123xyz789
RESEND_FROM_EMAIL=noreply@novapay.com
EMAIL_FROM="NovaPay" <noreply@novapay.com>
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Resend Pricing

- **Free Tier**: 3,000 emails/month, 100 emails/day
- **Pro Tier**: $20/month for 50,000 emails
- **Enterprise**: Custom pricing

Perfect for development and small to medium applications!

## 🔄 How the Flow Works

### Step 1: User Registration
1. User fills out registration form
2. System creates user account with `emailVerified: false`
3. System generates verification token (expires in 24 hours)
4. System sends verification email
5. **No auth cookies are set** - user is not logged in
6. User is redirected to `/verify-email?email=user@example.com`

### Step 2: Email Verification
1. User clicks link in email: `/verify-email?token=abc123...`
2. System verifies token:
   - Checks if token is valid
   - Checks if token hasn't expired
   - Checks if user exists
3. If valid:
   - Sets `emailVerified: true`
   - Clears verification token
   - **Sets authentication cookies**
   - Redirects to dashboard
4. If invalid:
   - Shows error message
   - Allows user to request new verification email

### Step 3: Accessing Protected Routes
1. User tries to access `/dashboard` or other protected route
2. Middleware checks:
   - Is user authenticated? → If no, redirect to login
   - Is email verified? → If no, redirect to `/verify-email`
3. If both pass, user can access the route

### Step 4: Resending Verification Email
1. User goes to `/verify-email` page
2. Enters their email address
3. System generates new token
4. Sends new verification email
5. Old token is invalidated

## 🛠️ API Endpoints

### POST `/api/auth/register`
- Creates user account
- Generates verification token
- Sends verification email
- **Does NOT set auth cookies**
- Returns: `{ success: true, message: "...", email: "...", emailVerified: false }`

### GET/POST `/api/auth/verify-email?token=...`
- Verifies email using token
- Sets `emailVerified: true`
- **Sets auth cookies**
- Redirects to dashboard (GET) or returns success (POST)

### POST `/api/auth/resend-verification`
- Body: `{ email: "user@example.com" }`
- Generates new verification token
- Sends new verification email
- Returns: `{ success: true, message: "..." }`

## 📝 Testing the Flow

### 1. Test Registration
```bash
# Start the app
npm run dev

# Go to http://localhost:3000/sign-up
# Register a new account
# Check console for verification link (development mode)
```

### 2. Test Email Verification
```bash
# Copy the verification link from console
# Open it in browser
# Should redirect to dashboard after verification
```

### 3. Test Protected Route Access
```bash
# Try to access /dashboard without verifying email
# Should redirect to /verify-email
```

### 4. Test Resend Verification
```bash
# Go to /verify-email
# Enter email and click "Resend Verification Email"
# Check console for new link
```

## 🔒 Security Features

1. **Token Expiration**: Verification tokens expire after 24 hours
2. **One-time Use**: Tokens are cleared after verification
3. **Secure Storage**: Tokens are stored with `select: false` (not returned by default)
4. **Rate Limiting**: Registration is rate-limited (5 attempts per 15 minutes)
5. **Email Validation**: Email format is validated before sending

## 🐛 Troubleshooting

### Emails Not Sending
1. Check `.env.local` configuration - ensure `RESEND_API_KEY` is set
2. Check console logs for errors
3. In development, emails are logged to console (not sent) if `RESEND_API_KEY` is missing
4. Verify your Resend API key is correct and active
5. Check Resend dashboard for any account issues
6. If using custom domain, ensure it's verified in Resend dashboard
7. Check Resend API rate limits (free tier: 100 emails/day)

### Verification Link Not Working
1. Check if token has expired (24 hours)
2. Check if email was already verified
3. Check if user exists in database
4. Check server logs for errors

### Users Can't Access Dashboard
1. Check if email is verified: `user.emailVerified === true`
2. Check middleware logs
3. Verify user has valid auth cookies
4. Check if user is being redirected to `/verify-email`

## 📋 Environment Variables Checklist

Add these to your `.env.local`:

```env
# Required
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Required: Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# Optional: Custom "from" email (must be verified domain in Resend)
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Optional: Custom "from" name and email
EMAIL_FROM="NovaPay" <noreply@yourdomain.com>
```

**Quick Setup:**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Add `RESEND_API_KEY` to `.env.local`
4. (Optional) Add your domain in Resend dashboard for custom "from" email

## 🎯 Next Steps

1. **Configure Resend**: 
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
   - Add `RESEND_API_KEY` to `.env.local`
   - (Optional) Add and verify your domain for custom "from" email
2. **Test Registration**: Register a new account and verify email
3. **Test Protected Routes**: Try accessing dashboard without verification
4. **Customize Email Template**: Edit `src/lib/email.ts` to customize email design
5. **Monitor Email Delivery**: Check Resend dashboard for delivery stats and logs

## 📚 Files Modified/Created

### Created Files:
- `src/lib/email.ts` - Email service utility
- `src/app/api/auth/verify-email/route.ts` - Verification endpoint
- `src/app/api/auth/resend-verification/route.ts` - Resend endpoint
- `src/app/verify-email/page.tsx` - Verification page

### Modified Files:
- `src/models/User.ts` - Added email verification fields
- `src/lib/jwt.ts` - Added verification token functions
- `src/app/api/auth/register/route.ts` - Modified to send verification email
- `src/app/api/auth/login/route.ts` - Added emailVerified to response
- `src/app/api/auth/google/route.ts` - Auto-verify Google OAuth users
- `src/app/api/auth/session/route.ts` - Added emailVerified to response
- `src/lib/auth-middleware.ts` - Added email verification check
- `middleware.ts` - Added email verification redirect
- `src/components/SignUpInner.tsx` - Redirect to verify-email page
- `src/components/LoginInInner.tsx` - Check email verification on login
- `src/redux/features/authSlice.ts` - Added emailVerified to User interface

## ✨ Summary

The email verification flow is now fully implemented:

1. ✅ Users must verify email before accessing dashboard
2. ✅ Registration sends verification email (no auto-login)
3. ✅ Verification page with resend functionality
4. ✅ Middleware protects routes based on verification status
5. ✅ Login checks verification status
6. ✅ Google OAuth users auto-verified
7. ✅ Development mode logs emails to console
8. ✅ Production-ready email configuration

The system is ready to use! Just configure your email service in `.env.local` and you're good to go! 🚀

