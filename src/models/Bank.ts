import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBank extends Document {
  userId: mongoose.Types.ObjectId;
  accountNumber: string;
  routingNumber: string;
  bankName: string;
  bankAddress: string;
  beneficiaryName: string;
  destinationWalletAddress?: string;
  walletType?: string;
  accountType: string;
  paymentMethods: string[];
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

const BankSchema = new Schema<IBank>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    routingNumber: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    bankAddress: {
      type: String,
      required: true,
    },
    beneficiaryName: {
      type: String,
      required: true,
    },
    destinationWalletAddress: {
      type: String,
      default: '',
      required: false,
    },
    walletType: {
      type: String,
      default: '',
      required: false,
    },
    accountType: {
      type: String,
      required: true,
    },
    paymentMethods: {
      type: [String],
      default: [],
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
BankSchema.index({ userId: 1 });

const Bank: Model<IBank> = mongoose.models.Bank || mongoose.model<IBank>('Bank', BankSchema);

export default Bank;

