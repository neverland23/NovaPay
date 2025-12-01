#!/usr/bin/env node

/**
 * Check if all required environment variables are set
 * Usage: node scripts/check-env.js
 */

const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
const requiredVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'JWT_REFRESH_SECRET',
  'AUTH_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'NEXT_PUBLIC_APP_URL',
];

console.log('\n🔍 Checking environment variables...\n');

if (!fs.existsSync(envPath)) {
  console.error('❌ .env.local file not found!');
  console.log('\n📝 Create .env.local file in the project root.');
  console.log('   You can copy from .env.local.example\n');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};

envContent.split('\n').forEach((line) => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

console.log('═══════════════════════════════════════════════════\n');

let allSet = true;
const missing = [];
const empty = [];

requiredVars.forEach((varName) => {
  if (!envVars[varName]) {
    missing.push(varName);
    allSet = false;
    console.log(`❌ ${varName} - MISSING`);
  } else if (envVars[varName].includes('your-') || envVars[varName].includes('change-in-production')) {
    empty.push(varName);
    allSet = false;
    console.log(`⚠️  ${varName} - NOT CONFIGURED (still using placeholder)`);
  } else {
    // Mask sensitive values
    const value = envVars[varName];
    const masked = value.length > 10 
      ? `${value.substring(0, 6)}...${value.substring(value.length - 4)}`
      : '****';
    console.log(`✅ ${varName} - Set (${masked})`);
  }
});

console.log('\n═══════════════════════════════════════════════════\n');

if (allSet) {
  console.log('✅ All required environment variables are set!\n');
  process.exit(0);
} else {
  console.log('❌ Some environment variables are missing or not configured.\n');
  
  if (missing.length > 0) {
    console.log('Missing variables:');
    missing.forEach((v) => console.log(`  - ${v}`));
    console.log('');
  }
  
  if (empty.length > 0) {
    console.log('Variables using placeholder values:');
    empty.forEach((v) => console.log(`  - ${v}`));
    console.log('');
  }
  
  console.log('📝 Please update your .env.local file with the required values.');
  console.log('   See SETUP_GUIDE.md for detailed instructions.\n');
  
  process.exit(1);
}



