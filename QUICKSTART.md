# ⚡ Quick Start Guide

Follow these steps to get NovaPay running in **10 minutes**!

## 🚀 Quick Setup (10 Minutes)

### 1️⃣ Install Dependencies (2 min)
```bash
cd /home/neverland/Documents/bank/novapay/novapay
npm install
```

### 2️⃣ Setup MongoDB (3 min)

**Option A: Local (Fastest for Development)**
```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb-org
sudo systemctl start mongod

# macOS
brew install mongodb-community
brew services start mongodb-community
```

**Option B: MongoDB Atlas (Free Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free cluster
3. Create database user
4. Whitelist IP (use `0.0.0.0/0` for development)
5. Copy connection string

### 3️⃣ Generate Secrets (1 min)
```bash
# Generate 3 random secrets (run 3 times)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4️⃣ Create .env.local (2 min)
```bash
cat > .env.local << 'EOF'
MONGODB_URI=mongodb://localhost:27017/novapay
JWT_SECRET=paste-generated-secret-1
JWT_REFRESH_SECRET=paste-generated-secret-2
AUTH_SECRET=paste-generated-secret-3
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF
```

**Update:**
- Replace `MONGODB_URI` with your MongoDB connection string
- Paste the 3 generated secrets
- Add Google OAuth credentials (see Step 5)

### 5️⃣ Setup Google OAuth (2 min)

1. Go to https://console.cloud.google.com/
2. Create new project
3. Enable "People API"
4. Create OAuth consent screen (External, use your email)
5. Create OAuth credentials (Web application)
6. Add redirect URI: `http://localhost:3000/api/auth/google`
7. Copy Client ID and Secret to `.env.local`

### 6️⃣ Start the App (30 sec)
```bash
npm run dev
```

Open http://localhost:3000 🎉

---

## ✅ Test Everything

### Test Registration
1. Go to http://localhost:3000/sign-up
2. Register with test credentials
3. Should redirect to `/my-profile`

### Test Login
1. Go to http://localhost:3000/log-in
2. Login with your credentials
3. Should redirect to `/my-profile`

### Test Profile
1. Go to `/my-profile`
2. Try updating account info
3. Try changing password
4. Try adding wallet

---

## 🔧 Common Issues

### MongoDB Not Running
```bash
# Check status
sudo systemctl status mongod  # Linux
brew services list             # macOS

# Start it
sudo systemctl start mongod   # Linux
brew services start mongodb-community  # macOS
```

### Port 3000 Already in Use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)

# Or use different port
npm run dev -- -p 3001
```

### Missing Environment Variables
- Ensure `.env.local` exists in project root
- Check all variables are set
- Restart dev server after changes

---

## 📚 Full Documentation

For detailed setup instructions, see:
- **SETUP_GUIDE.md** - Comprehensive setup guide
- **README.md** - Project documentation

---

**Need help?** Check SETUP_GUIDE.md for detailed troubleshooting!




