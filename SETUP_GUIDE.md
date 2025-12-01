# 🚀 NovaPay - Complete Setup Guide

This guide will walk you through setting up the NovaPay project from scratch.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Clone and Install](#step-1-clone-and-install)
3. [Step 2: MongoDB Setup](#step-2-mongodb-setup)
4. [Step 3: Environment Variables](#step-3-environment-variables)
5. [Step 4: Google OAuth Setup](#step-4-google-oauth-setup)
6. [Step 5: Run the Application](#step-5-run-the-application)
7. [Step 6: Verify Installation](#step-6-verify-installation)
8. [Step 7: Production Deployment](#step-7-production-deployment)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **MongoDB** (local installation) OR **MongoDB Atlas account** (cloud)
- **Google Cloud account** (for OAuth)

Verify installations:

```bash
node --version  # Should show v20.x.x or higher
npm --version   # Should show 9.x.x or higher
git --version   # Any version is fine
```

---

## Step 1: Clone and Install

### 1.1 Navigate to Your Project Directory

```bash
cd /home/neverland/Documents/bank/novapay/novapay
```

### 1.2 Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js, React, TypeScript
- MongoDB/Mongoose
- Redux Toolkit
- JWT libraries
- And all other dependencies

**Expected time:** 2-3 minutes

### 1.3 Verify Installation

```bash
npm list --depth=0
```

You should see all packages listed without errors.

---

## Step 2: MongoDB Setup

You have two options: **Local MongoDB** or **MongoDB Atlas (Cloud)**. Choose one:

### Option A: Local MongoDB (Recommended for Development)

#### A1. Install MongoDB Locally

**On Linux (Ubuntu/Debian):**
```bash
# Import MongoDB GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB service
sudo systemctl start mongod
sudo systemctl enable mongod
```

**On macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**On Windows:**
1. Download MongoDB from [mongodb.com/download](https://www.mongodb.com/try/download/community)
2. Run the installer
3. MongoDB will start automatically as a service

#### A2. Verify MongoDB is Running

```bash
# Linux/macOS
sudo systemctl status mongod  # Linux
brew services list             # macOS

# Or check if MongoDB is listening
mongosh --eval "db.adminCommand('ping')"
```

**Connection String:**
```
mongodb://localhost:27017/novapay
```

### Option B: MongoDB Atlas (Cloud - Recommended for Production)

#### B1. Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email

#### B2. Create a Cluster

1. Click **"Build a Database"**
2. Choose **FREE (M0)** tier
3. Select a cloud provider and region (choose closest to you)
4. Click **"Create"**
5. Wait 3-5 minutes for cluster to be created

#### B3. Create Database User

1. Click **"Database Access"** in left sidebar
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter username and generate a secure password
5. **Save the password** - you'll need it!
6. Set user privileges to **"Atlas admin"** or **"Read and write to any database"**
7. Click **"Add User"**

#### B4. Whitelist Your IP Address

1. Click **"Network Access"** in left sidebar
2. Click **"Add IP Address"**
3. For development, click **"Allow Access from Anywhere"** (adds `0.0.0.0/0`)
   - ⚠️ For production, use specific IPs only
4. Click **"Confirm"**

#### B5. Get Connection String

1. Click **"Database"** in left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your database user credentials
6. Add database name at the end:
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/novapay?retryWrites=true&w=majority
   ```

**Save this connection string** - you'll use it in Step 3!

---

## Step 3: Environment Variables

### 3.1 Create Environment File

```bash
# In the project root directory
cp .env.local.example .env.local
```

Or create `.env.local` manually:

```bash
touch .env.local
```

### 3.2 Configure Environment Variables

Open `.env.local` and add the following:

```env
# MongoDB Connection
# For Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/novapay

# For MongoDB Atlas, use your connection string:
# MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/novapay?retryWrites=true&w=majority

# JWT Secrets - Generate secure random strings (at least 32 characters)

node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

JWT_SECRET=your-super-secret-jwt-key-change-in-production-min-32-chars
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production-min-32-chars
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Auth Secret - Generate secure random string
AUTH_SECRET=your-auth-secret-key-change-in-production-min-32-chars

# Google OAuth (we'll configure these in Step 4)
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3.3 Generate Secure Secrets

Use one of these methods to generate secure random strings:

**Option 1: Using Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Run this 3 times to generate:
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `AUTH_SECRET`

**Option 2: Using OpenSSL**
```bash
openssl rand -hex 32
```

**Option 3: Online Generator**
Visit [randomkeygen.com](https://randomkeygen.com/) and use "CodeIgniter Encryption Keys"

### 3.4 Update MongoDB URI

Replace `MONGODB_URI` with your actual connection string from Step 2.

---

## Step 4: Google OAuth Setup

### 4.1 Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown at the top
3. Click **"New Project"**
4. Enter project name: `NovaPay` (or any name)
5. Click **"Create"**
6. Wait for project creation, then select it

### 4.2 Enable Google+ API

1. In the search bar, type **"Google+ API"** or **"OAuth consent screen"**
2. Click **"APIs & Services" > "Library"**
3. Search for **"Google+ API"**
4. Click on it and click **"Enable"**
   - Note: Google+ API is deprecated, but we'll use it for basic profile info

**Alternative (Recommended):**
1. Go to **"APIs & Services" > "Library"**
2. Search for **"People API"**
3. Enable it (this is the modern alternative)

### 4.3 Configure OAuth Consent Screen

1. Go to **"APIs & Services" > "OAuth consent screen"**
2. Choose **"External"** user type (unless you have Google Workspace)
3. Click **"Create"**
4. Fill in the required information:
   - **App name**: NovaPay
   - **User support email**: Your email
   - **Developer contact email**: Your email
5. Click **"Save and Continue"**
6. On **"Scopes"** page, click **"Save and Continue"**
7. On **"Test users"** (if external), add your email as a test user
8. Click **"Save and Continue"**
9. Review and click **"Back to Dashboard"**

### 4.4 Create OAuth 2.0 Credentials

1. Go to **"APIs & Services" > "Credentials"**
2. Click **"+ CREATE CREDENTIALS"**
3. Select **"OAuth client ID"**
4. Choose application type: **"Web application"**
5. Enter a name: `NovaPay Web Client`
6. Add **Authorized redirect URIs**:
   - For development: `http://localhost:3000/api/auth/google`
   - For production: `https://yourdomain.com/api/auth/google`
7. Click **"Create"**
8. **IMPORTANT:** Copy the **Client ID** and **Client Secret**
   - ⚠️ Client Secret is shown only once! Save it immediately.

### 4.5 Update Environment Variables

Update your `.env.local` with Google OAuth credentials:

```env
GOOGLE_CLIENT_ID=paste-your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=paste-your-client-secret-here
```

---

## Step 5: Run the Application

### 5.1 Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Compiling / ...
✓ Compiled successfully
  Local:        http://localhost:3000
```

### 5.2 Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser.

**If you see errors**, check the troubleshooting section below.

---

## Step 6: Verify Installation

### 6.1 Test Registration

1. Go to `http://localhost:3000/sign-up`
2. Fill in the registration form:
   - Name: Test User
   - Email: test@example.com
   - Password: test123456
   - Account Type: Basic
   - Accept terms
3. Click **"Sign Up"**
4. You should be redirected to `/my-profile`

### 6.2 Test Login

1. Go to `http://localhost:3000/log-in`
2. Enter your credentials
3. Click **"Sign In"**
4. Should redirect to `/my-profile`

### 6.3 Test Profile Features

1. Go to `/my-profile`
2. Click **"Account"** tab - try editing your name
3. Click **"Security"** tab - try changing password
4. Click **"Wallet"** tab - try adding a wallet address

### 6.4 Test Google OAuth (Optional)

1. Go to `/log-in`
2. Click **"Continue With Google"**
3. Sign in with Google
4. Should redirect and log you in

### 6.5 Verify MongoDB Connection

Check if data is being saved:

**If using local MongoDB:**
```bash
mongosh novapay
> db.users.find().pretty()
```

You should see your registered user.

**If using MongoDB Atlas:**
1. Go to MongoDB Atlas dashboard
2. Click **"Browse Collections"**
3. You should see `novapay` database with `users` collection

---

## Step 7: Production Deployment

### 7.1 Build for Production

```bash
npm run build
```

This should complete without errors.

### 7.2 Deploy to Vercel

#### Option A: GitHub Actions (Automated)

1. Push your code to GitHub
2. Add secrets to GitHub repository:
   - Go to your repo > **Settings** > **Secrets and variables** > **Actions**
   - Add all secrets from `.env.local`:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID`
     - `VERCEL_PROJECT_ID`
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `JWT_REFRESH_SECRET`
     - `AUTH_SECRET`
     - `GOOGLE_CLIENT_ID`
     - `GOOGLE_CLIENT_SECRET`
     - `NEXT_PUBLIC_APP_URL`

3. The workflow will automatically deploy on push to `main`

#### Option B: Vercel CLI (Manual)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables in Vercel dashboard:
   - Go to your project > **Settings** > **Environment Variables**
   - Add all variables from `.env.local`

5. Deploy to production:
   ```bash
   vercel --prod
   ```

### 7.3 Update Google OAuth Redirect URI

After deploying, add your production URL to Google OAuth:
1. Go to Google Cloud Console
2. **APIs & Services** > **Credentials**
3. Edit your OAuth client
4. Add production redirect URI: `https://yourdomain.com/api/auth/google`

---

## Troubleshooting

### ❌ MongoDB Connection Error

**Error:** `MongooseError: connect ECONNREFUSED`

**Solution:**
- Check if MongoDB is running:
  ```bash
  sudo systemctl status mongod  # Linux
  brew services list             # macOS
  ```
- Verify connection string in `.env.local`
- For Atlas: Check if IP is whitelisted

### ❌ JWT Secret Error

**Error:** `JWT secret is required`

**Solution:**
- Ensure all JWT secrets are in `.env.local`
- Restart the dev server after adding secrets
- Secrets must be at least 32 characters

### ❌ Google OAuth Error

**Error:** `redirect_uri_mismatch`

**Solution:**
- Check redirect URI in Google Cloud Console matches exactly
- For dev: `http://localhost:3000/api/auth/google`
- Ensure no trailing slashes

### ❌ Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Find process using port 3000
lsof -ti:3000

# Kill the process
kill -9 $(lsof -ti:3000)

# Or use a different port
npm run dev -- -p 3001
```

### ❌ Module Not Found Errors

**Error:** `Cannot find module '...'`

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### ❌ Build Errors

**Error:** Build fails in production

**Solution:**
- Check all environment variables are set in Vercel
- Ensure TypeScript errors are fixed:
  ```bash
  npm run build
  ```
- Check console for specific error messages

### ❌ Cookie Not Set

**Error:** Login works but session not persisting

**Solution:**
- Ensure cookies are enabled in browser
- Check browser console for cookie errors
- Verify `NEXT_PUBLIC_APP_URL` matches your actual URL

### ❌ Redux Store Errors

**Error:** `Cannot read property of undefined`

**Solution:**
- Ensure ReduxProvider is in layout.tsx
- Check if store is properly configured
- Clear browser cache and reload

---

## 🎉 Success Checklist

- [ ] Dependencies installed successfully
- [ ] MongoDB connected and working
- [ ] Environment variables configured
- [ ] Google OAuth credentials added
- [ ] Development server runs without errors
- [ ] Can register a new user
- [ ] Can login with credentials
- [ ] Profile page loads and works
- [ ] Can update account information
- [ ] Can change password
- [ ] Can add wallet information
- [ ] Google OAuth works (optional)

---

## 📞 Need Help?

If you encounter issues:

1. Check the error message in the terminal
2. Check browser console for client-side errors
3. Review the troubleshooting section above
4. Check MongoDB connection with `mongosh`
5. Verify all environment variables are set correctly

---

## 🔐 Security Reminders

- ⚠️ **Never commit `.env.local` to Git**
- ⚠️ Use strong, random secrets (32+ characters)
- ⚠️ Don't share your JWT secrets
- ⚠️ Use HTTPS in production
- ⚠️ Limit MongoDB Atlas IP whitelist in production
- ⚠️ Regularly update dependencies

---

**You're all set! Happy coding! 🚀**




