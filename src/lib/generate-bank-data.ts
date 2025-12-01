import mongoose from 'mongoose';

// Helper function to generate dummy bank data
export function generateBankData(userId: string | mongoose.Types.ObjectId, userName: string) {
  // Generate random account number (12 digits)
  const accountNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();
  
  // Generate random routing number (9 digits)
  const routingNumber = Math.floor(100000000 + Math.random() * 900000000).toString();
  
  // Random bank names
  const bankNames = ['Lead Bank', 'First National Bank', 'Community Bank', 'Regional Bank', 'Union Bank'];
  const bankName = bankNames[Math.floor(Math.random() * bankNames.length)];
  
  // Random bank addresses
  const addresses = [
    '123 Main Street, New York, NY 10001',
    '456 Oak Avenue, Los Angeles, CA 90001',
    '789 Pine Road, Chicago, IL 60601',
    '321 Elm Street, Houston, TX 77001',
    '654 Maple Drive, Phoenix, AZ 85001',
  ];
  const bankAddress = addresses[Math.floor(Math.random() * addresses.length)];
  
  // Random account types
  const accountTypes = ['Checking'];
  const accountType = accountTypes[Math.floor(Math.random() * accountTypes.length)];
  
  // Random payment methods
  const allPaymentMethods = ['ACH_PUSH', 'WIRE'];
  const paymentMethodsCount = 2; // 1-2 methods
  const paymentMethods = allPaymentMethods
    .sort(() => 0.5 - Math.random())
    .slice(0, paymentMethodsCount);
  
  // Currency
  const currency = 'USD';

  // Wallet address and type are blank initially - user will set them in Wallet tab
  return {
    userId,
    accountNumber,
    routingNumber,
    bankName,
    bankAddress,
    beneficiaryName: userName,
    destinationWalletAddress: '', // Blank initially
    walletType: '', // Blank initially
    accountType,
    paymentMethods,
    currency,
  };
}

