import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from './authSlice';

interface ProfileState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  isLoading: false,
  error: null,
};

export const updateAccount = createAsyncThunk(
  'profile/updateAccount',
  async (data: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
    accountType?: 'individual' | 'team';
  }) => {
    const response = await fetch('/api/profile/update-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Update failed');
    }

    return result.user;
  }
);

export const changePassword = createAsyncThunk(
  'profile/changePassword',
  async (data: { currentPassword: string; newPassword: string }) => {
    const response = await fetch('/api/profile/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Password change failed');
    }

    return result.user || result; // Return user if available, otherwise return result
  }
);

export const updateSecurityQuestions = createAsyncThunk(
  'profile/updateSecurityQuestions',
  async (questions: Array<{ question: string; answer: string }>) => {
    const response = await fetch('/api/profile/update-security-questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ securityQuestions: questions }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Security questions update failed');
    }

    return result.user;
  }
);

export const toggleTwoFactor = createAsyncThunk(
  'profile/toggleTwoFactor',
  async (enabled: boolean) => {
    const response = await fetch('/api/profile/two-factor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ twoFactorEnabled: enabled }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Two-factor update failed');
    }

    return result.user;
  }
);

export const updateWallet = createAsyncThunk(
  'profile/updateWallet',
  async (wallet: { network: string; address: string }) => {
    const response = await fetch('/api/profile/update-wallet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wallet),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Wallet update failed');
    }

    return result.user;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Update account
    builder
      .addCase(updateAccount.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Update failed';
      });

    // Change password
    builder
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // Update user state with the returned user data
        if (action.payload?.user) {
          state.user = { ...state.user, ...action.payload.user } as User;
        } else if (action.payload && typeof action.payload === 'object' && 'user' in action.payload) {
          state.user = { ...state.user, ...(action.payload as any).user } as User;
        }
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Password change failed';
      });

    // Update security questions
    builder
      .addCase(updateSecurityQuestions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateSecurityQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateSecurityQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Update failed';
      });

    // Toggle two-factor
    builder
      .addCase(toggleTwoFactor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(toggleTwoFactor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(toggleTwoFactor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Update failed';
      });

    // Update wallet
    builder
      .addCase(updateWallet.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Update failed';
      });
  },
});

export const { setProfileUser, clearError } = profileSlice.actions;
export default profileSlice.reducer;



