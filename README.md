# NovaPay - Full Stack Payment Platform

A professional-grade full-stack web application built with Next.js 14 App Router, React 18, MongoDB, Redux Toolkit, and JWT authentication.

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Frontend**: React 19
- **Backend**: Next.js API Routes (Node.js)
- **Database**: MongoDB + Mongoose
- **State Management**: Redux Toolkit
- **Authentication**: JWT + Secure HTTP-only cookies
- **OAuth**: Google OAuth
- **Deployment**: Vercel + GitHub Actions
- **Language**: TypeScript

## 📋 Features

### ✅ Authentication System
- User registration with email, password, name, and account type
- User login with "Remember Me" functionality
- Forgot password with email token validation
- Password reset functionality
- Google OAuth integration
- Secure HTTP-only cookie-based session management
- JWT with refresh token rotation
- IP-based login rate limiting
- Email uniqueness validation
- Password hashing using bcrypt

### ✅ Profile Management
- **Account Tab**: Update firstName, lastName, phone, avatar, accountType
- **Security Tab**: 
  - Change password
  - Security questions (3 questions)
  - Two-factor authentication toggle
- **Wallet Tab**: Manage wallet with network (Ethereum, BSC, Polygon, Solana, Tron) and address

### ✅ Route Protection
- Middleware-based server-side route protection
- Client-side `useAuthGuard` hook for protected pages
- Automatic redirects for unauthorized access

## 📦 Project Setup

### Prerequisites

- Node.js 20+ installed
- MongoDB database (local or cloud like MongoDB Atlas)
- Google OAuth credentials (for Google login)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd novapay
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/novapay
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/novapay

# JWT Secrets
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_REFRESH_SECRET=your-super-secret-refresh-key-change-in-production
JWT_EXPIRE=15m
JWT_REFRESH_EXPIRE=7d

# Auth
AUTH_SECRET=your-auth-secret-key-change-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. MongoDB Setup

#### Local MongoDB:
1. Install MongoDB locally or use Docker:
   ```bash
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

#### MongoDB Atlas (Cloud):
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and add it to `.env.local`

### 5. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google` (development)
   - `https://yourdomain.com/api/auth/google` (production)
6. Copy Client ID and Client Secret to `.env.local`

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
novapay/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/          # Authentication endpoints
│   │   │   │   ├── register/
│   │   │   │   ├── login/
│   │   │   │   ├── logout/
│   │   │   │   ├── forgot-password/
│   │   │   │   ├── reset-password/
│   │   │   │   ├── google/
│   │   │   │   └── session/
│   │   │   └── profile/       # Profile endpoints
│   │   │       ├── update-account/
│   │   │       ├── change-password/
│   │   │       ├── update-security-questions/
│   │   │       ├── two-factor/
│   │   │       └── update-wallet/
│   │   ├── log-in/            # Login page
│   │   ├── sign-up/           # Registration page
│   │   ├── forgot-password/   # Forgot password page
│   │   ├── reset-password/    # Reset password page
│   │   ├── my-profile/        # Profile page
│   │   └── layout.tsx         # Root layout with Redux Provider
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── providers/         # Context providers
│   │   └── ...                # Other components
│   ├── hooks/
│   │   └── useAuthGuard.ts    # Auth guard hook
│   ├── lib/
│   │   ├── mongodb.ts         # MongoDB connection
│   │   ├── jwt.ts             # JWT utilities
│   │   ├── cookies.ts         # Cookie utilities
│   │   └── auth-middleware.ts # Auth middleware
│   ├── models/
│   │   ├── User.ts            # User model
│   │   └── PasswordResetToken.ts
│   └── redux/
│       ├── store.ts           # Redux store
│       ├── hooks.ts           # Typed Redux hooks
│       └── features/
│           ├── authSlice.ts   # Auth state management
│           └── profileSlice.ts # Profile state management
├── middleware.ts              # Route protection middleware
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment
└── package.json
```

## 🔐 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET /api/auth/google` - Google OAuth callback
- `GET /api/auth/session` - Get current user session

### Profile (Protected)

- `POST /api/profile/update-account` - Update account information
- `POST /api/profile/change-password` - Change password
- `POST /api/profile/update-security-questions` - Update security questions
- `POST /api/profile/two-factor` - Toggle two-factor authentication
- `POST /api/profile/update-wallet` - Update wallet information

## 🔒 Using Redux for Session Management

### Accessing Auth State

```typescript
import { useAppSelector } from '@/redux/hooks';

function MyComponent() {
  const { user, isAuthenticated, isLoading } = useAppSelector((state) => state.auth);
  
  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <LoginPrompt />;
  
  return <div>Welcome, {user?.name}!</div>;
}
```

### Dispatch Actions

```typescript
import { useAppDispatch } from '@/redux/hooks';
import { login, logout } from '@/redux/features/authSlice';

function LoginComponent() {
  const dispatch = useAppDispatch();
  
  const handleLogin = async () => {
    await dispatch(login({ email, password })).unwrap();
  };
}
```

### Profile Updates

```typescript
import { updateAccount } from '@/redux/features/profileSlice';

const dispatch = useAppDispatch();

await dispatch(updateAccount({
  firstName: 'John',
  lastName: 'Doe',
  phone: '+1234567890',
})).unwrap();
```

## 🚢 Building for Production

### Build the Application

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run Linter

```bash
npm run lint
```

## 📦 Deploying to Vercel

### Using GitHub Actions (Automated)

1. Push your code to GitHub
2. Add the following secrets to your GitHub repository:
   - `VERCEL_TOKEN` - Your Vercel access token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID
   - `MONGODB_URI` - MongoDB connection string
   - `JWT_SECRET` - JWT secret key
   - `JWT_REFRESH_SECRET` - JWT refresh secret key
   - `AUTH_SECRET` - Auth secret key
   - `GOOGLE_CLIENT_ID` - Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
   - `NEXT_PUBLIC_APP_URL` - Your production app URL

3. The GitHub Actions workflow will automatically:
   - Install dependencies
   - Run linter
   - Build the application
   - Deploy to Vercel

### Using Vercel CLI (Manual)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Environment Variables in Vercel

Add all environment variables from `.env.local` to your Vercel project settings:
1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable for Production, Preview, and Development environments

## 🎨 Color Palette

- Primary: `#1c80b5`
- Secondary: `#2bce5b`
- Tertiary: `#104042`

## 📝 User Model Schema

```typescript
{
  name: string;
  email: string;
  password?: string;
  googleId?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  avatar?: string;
  securityQuestions?: Array<{
    question: string;
    answer: string;
  }>;
  twoFactorEnabled: boolean;
  wallet: {
    network?: 'Ethereum' | 'BSC' | 'Polygon' | 'Solana' | 'Tron';
    address?: string;
  };
  accountType: 'individual' | 'team';
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🔧 Development Tips

### Session Management

The app uses HTTP-only cookies for secure token storage. Tokens are automatically sent with requests and refreshed when needed.

### Protected Routes

Routes are protected using:
1. **Server-side**: `middleware.ts` protects `/my-profile` and `/api/profile/*`
2. **Client-side**: `useAuthGuard()` hook redirects unauthenticated users

### State Sync

User state is synchronized between `authSlice` and `profileSlice`. When profile is updated, it updates the user in both slices.

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using Next.js, React, and MongoDB
