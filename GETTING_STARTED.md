# 🎯 Getting Started - Step by Step

This is a simplified guide to get you up and running quickly!

## 📍 Current Status

You are currently in: `/home/neverland/Documents/bank/novapay/novapay`

---

## 🚀 Quick Start (Choose Your Path)

### Path 1: I want detailed instructions
👉 **Read [SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete step-by-step guide

### Path 2: I want to get started fast
👉 **Read [QUICKSTART.md](./QUICKSTART.md)** - 10-minute quick setup

### Path 3: I just want a checklist
👉 **Open [QUICK_START_CHECKLIST.txt](./QUICK_START_CHECKLIST.txt)** - Print and check off items

---

## ⚡ Super Quick Start (5 Minutes)

### Step 1: Generate Secrets (30 seconds)

```bash
npm run generate-secrets
```

Copy the output and save it somewhere temporarily.

### Step 2: Create .env.local (1 minute)

```bash
cat > .env.local << 'EOF'
# MongoDB - Use local MongoDB
MONGODB_URI=mongodb://localhost:27017/novapay

# JWT Secrets - Paste from Step 1
JWT_SECRET=
JWT_REFRESH_SECRET=
AUTH_SECRET=
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Google OAuth - You'll get these from Google Cloud Console
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
```

**Then paste your secrets from Step 1 into the file.**

### Step 3: Setup MongoDB (2 minutes)

**Option A: Local (Easiest)**
```bash
# Install MongoDB
sudo apt-get install -y mongodb-org  # Ubuntu/Debian
# OR
brew install mongodb-community      # macOS

# Start MongoDB
sudo systemctl start mongod         # Linux
# OR
brew services start mongodb-community  # macOS
```

**Option B: Cloud (MongoDB Atlas)**
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free account
3. Create cluster (FREE tier)
4. Get connection string
5. Replace `MONGODB_URI` in `.env.local`

### Step 4: Setup Google OAuth (1 minute)

1. Go to https://console.cloud.google.com/
2. Create new project
3. Enable "People API"
4. Create OAuth credentials
5. Add redirect URI: `http://localhost:3000/api/auth/google`
6. Copy Client ID and Secret to `.env.local`

### Step 5: Start the App (30 seconds)

```bash
# Check environment variables
npm run check-env

# Start development server
npm run dev
```

Open http://localhost:3000 🎉

---

## ✅ Verify Everything Works

### Test 1: Registration
1. Go to http://localhost:3000/sign-up
2. Fill form and submit
3. Should redirect to `/my-profile` ✅

### Test 2: Login
1. Go to http://localhost:3000/log-in
2. Login with your credentials
3. Should redirect to `/my-profile` ✅

### Test 3: Profile
1. Go to `/my-profile`
2. Edit account info
3. Save successfully ✅

---

## 🆘 Need Help?

### Check Environment Variables
```bash
npm run check-env
```

### Common Issues

**MongoDB not running?**
```bash
sudo systemctl status mongod  # Check status
sudo systemctl start mongod   # Start it
```

**Port 3000 in use?**
```bash
kill -9 $(lsof -ti:3000)      # Kill process
```

**Missing dependencies?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation Files

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Comprehensive setup guide with all details
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick 10-minute setup
- **[README.md](./README.md)** - Project documentation and API reference
- **[QUICK_START_CHECKLIST.txt](./QUICK_START_CHECKLIST.txt)** - Printable checklist

---

## 🎯 Next Steps After Setup

1. ✅ Test registration and login
2. ✅ Explore the profile page
3. ✅ Try updating account information
4. ✅ Test password change
5. ✅ Add wallet information
6. ✅ Read API documentation in README.md
7. ✅ Deploy to Vercel (see SETUP_GUIDE.md)

---

**Ready to start?** Run `npm run generate-secrets` and follow the steps above! 🚀



