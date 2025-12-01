#!/usr/bin/env node

/**
 * Generate secure random secrets for NovaPay
 * Usage: node scripts/generate-secrets.js
 */

const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(32).toString('hex');
}

console.log('\n🔐 Generating secure secrets for NovaPay...\n');
console.log('═══════════════════════════════════════════════════\n');

const secrets = {
  JWT_SECRET: generateSecret(),
  JWT_REFRESH_SECRET: generateSecret(),
  AUTH_SECRET: generateSecret(),
};

console.log('Copy these to your .env.local file:\n');

Object.entries(secrets).forEach(([key, value]) => {
  console.log(`${key}=${value}`);
});

console.log('\n═══════════════════════════════════════════════════\n');
console.log('✅ Secrets generated successfully!');
console.log('\n📝 Next steps:');
console.log('1. Copy the secrets above');
console.log('2. Paste them into your .env.local file');
console.log('3. Never commit .env.local to Git!\n');




