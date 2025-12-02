import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
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
    network?: string;
    address?: string;
  };
  accountType: 'individual' | 'team';
  refreshToken?: string;
  passwordLastChanged?: Date;
  emailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const SecurityQuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
}, { _id: false });

const WalletSchema = new Schema({
  network: {
    type: String,
    enum: ['Ethereum', 'BSC', 'Polygon', 'Solana', 'Tron'],
  },
  address: {
    type: String,
  },
}, { _id: false });

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true, // unique: true automatically creates an index
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      minlength: [6, 'Password must be at least 6 characters'],
      select: false, // Don't return password by default
    },
    googleId: {
      type: String,
      sparse: true,
      unique: true, // unique: true automatically creates an index
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
    },
    securityQuestions: {
      type: [SecurityQuestionSchema],
      default: [],
    },
    twoFactorEnabled: {
      type: Boolean,
      default: false,
    },
    wallet: {
      type: WalletSchema,
      default: {},
    },
    accountType: {
      type: String,
      enum: ['individual', 'team'],
      default: 'individual',
    },
    refreshToken: {
      type: String,
      select: false,
    },
    passwordLastChanged: {
      type: Date,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: {
      type: String,
      select: false,
    },
    emailVerificationExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving and update passwordLastChanged
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    if (this.password) {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
      // Set passwordLastChanged when password is modified
      this.passwordLastChanged = new Date();
    }
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  if (!this.password) {
    return false;
  }
  return bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;



