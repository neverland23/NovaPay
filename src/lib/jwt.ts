import jwt, { SignOptions } from 'jsonwebtoken';
import { Types } from 'mongoose';

const JWT_SECRET: string = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_REFRESH_SECRET: string = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key-change-in-production';
const JWT_EXPIRE: string = process.env.JWT_EXPIRE || '15m';
const JWT_REFRESH_EXPIRE: string = process.env.JWT_REFRESH_EXPIRE || '7d';

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateAccessToken = (payload: TokenPayload): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRE as string | number,
  };
  return jwt.sign(payload, JWT_SECRET, options);
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  const options: SignOptions = {
    expiresIn: JWT_REFRESH_EXPIRE as string | number,
  };
  return jwt.sign(payload, JWT_REFRESH_SECRET, options);
};

export const verifyAccessToken = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

export const generatePasswordResetToken = (): string => {
  const options: SignOptions = {
    expiresIn: '1h',
  };
  return jwt.sign({ type: 'password-reset' }, JWT_SECRET, options);
};

export const verifyPasswordResetToken = (token: string): boolean => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { type?: string };
    return decoded.type === 'password-reset';
  } catch (error) {
    return false;
  }
};




