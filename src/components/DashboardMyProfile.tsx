"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserSession, setUser } from "@/redux/features/authSlice";
import {
  updateAccount,
  changePassword,
  updateSecurityQuestions,
  toggleTwoFactor,
  updateWallet,
} from "@/redux/features/profileSlice";
import { toast } from "react-toastify";
import useAuthGuard from "@/hooks/useAuthGuard";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Select from "./ui/Select";
import LoadingSpinner from "./ui/LoadingSpinner";

const DashboardMyProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user: authUser, isLoading: authLoading } = useAppSelector((state) => state.auth);
  const { user: profileUser, isLoading: profileLoading } = useAppSelector((state) => state.profile);
  
  useAuthGuard();
  
  const user = profileUser || authUser;
  const isLoading = authLoading || profileLoading;

  // Fetch user session on mount
  useEffect(() => {
    if (!user && !authLoading) {
      dispatch(fetchUserSession());
    }
  }, [dispatch, user, authLoading]);

  // Account Tab State
  const [accountForm, setAccountForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    accountType: "individual" as "individual" | "team",
  });

  // Section Edit States
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingSecurityQuestions, setIsEditingSecurityQuestions] = useState(false);
  const [isEditingTwoFactor, setIsEditingTwoFactor] = useState(false);

  // Password Form State
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordErrors, setPasswordErrors] = useState<{ [key: string]: string }>({});

  // Security Questions Form State
  const [securityQuestions, setSecurityQuestions] = useState<
    Array<{ question: string; answer: string }>
  >([
    { question: "", answer: "" },
    { question: "", answer: "" },
    { question: "", answer: "" },
  ]);
  const [securityQuestionsErrors, setSecurityQuestionsErrors] = useState<{ [key: string]: string }>({});

  // Two-Factor Form State
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Wallet Form State
  const [walletForm, setWalletForm] = useState({
    network: "",
    address: "",
  });

  // Bank Data State
  const [bankData, setBankData] = useState<any>(null);
  const [bankLoading, setBankLoading] = useState(false);


  // Load user data into form
  useEffect(() => {
    if (user) {
      setAccountForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        accountType: user.accountType || "individual",
      });
      setTwoFactorEnabled(user.twoFactorEnabled || false);
      if (user.securityQuestions && user.securityQuestions.length > 0) {
        // Create deep copies of the objects to avoid read-only issues
        const questions = user.securityQuestions.map(q => ({ 
          question: q.question || "", 
          answer: q.answer || "" 
        }));
        while (questions.length < 3) {
          questions.push({ question: "", answer: "" });
        }
        setSecurityQuestions(questions.slice(0, 3));
      }
      // Load wallet data
      if (user.wallet) {
        setWalletForm({
          network: user.wallet.network || "",
          address: user.wallet.address || "",
        });
      }
    }
  }, [user]);

  // Fetch bank data
  useEffect(() => {
    const fetchBankData = async () => {
      setBankLoading(true);
      try {
        const response = await fetch('/api/profile/bank');
        if (response.ok) {
          const data = await response.json();
          setBankData(data.bank);
        }
      } catch (error) {
        console.error('Error fetching bank data:', error);
      } finally {
        setBankLoading(false);
      }
    };
    fetchBankData();
  }, []);

  // Account Tab Handlers
  const handleAccountSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const updatedUser = await dispatch(updateAccount(accountForm)).unwrap();
      toast.success("Profile updated successfully!");
      
      // Sync auth slice with updated user data
      dispatch(setUser(updatedUser));
    } catch (error: any) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  const handleAccountCancel = () => {
    if (user) {
      setAccountForm({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        accountType: user.accountType || "individual",
      });
    }
  };

  // Password Form Handlers
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!passwordForm.currentPassword) {
      errors.currentPassword = "Current password is required";
    }
    if (!passwordForm.newPassword) {
      errors.newPassword = "New password is required";
    } else if (passwordForm.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    if (!passwordForm.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setPasswordErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const result = await dispatch(
        changePassword({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        })
      ).unwrap();
      toast.success("Password changed successfully!");
      setIsEditingPassword(false);
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordErrors({});
      // Refresh user session to get updated passwordLastChanged
      await dispatch(fetchUserSession());
    } catch (error: any) {
      toast.error(error.message || "Failed to change password");
    }
  };

  // Security Questions Form Handlers
  const handleSecurityQuestionsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    securityQuestions.forEach((q, index) => {
      if (!q.question.trim()) {
        errors[`question${index}`] = "Question is required";
      }
      if (!q.answer.trim()) {
        errors[`answer${index}`] = "Answer is required";
      }
    });

    setSecurityQuestionsErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const validQuestions = securityQuestions.filter(
      (q) => q.question.trim() && q.answer.trim()
    );

    if (validQuestions.length < 3) {
      toast.error("Please provide all 3 security questions");
      return;
    }

    try {
      const updatedUser = await dispatch(updateSecurityQuestions(validQuestions)).unwrap();
      toast.success("Security questions updated successfully!");
      setIsEditingSecurityQuestions(false);
      setSecurityQuestionsErrors({});
      // Sync auth slice
      dispatch(setUser(updatedUser));
    } catch (error: any) {
      toast.error(error.message || "Failed to update security questions");
    }
  };

  // Wallet Form Handlers
  const handleWalletSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!walletForm.network || !walletForm.address) {
      toast.error("Please fill in both Network Type and Address");
      return;
    }

    try {
      const updatedUser = await dispatch(updateWallet(walletForm)).unwrap();
      toast.success("Wallet updated successfully!");
      dispatch(setUser(updatedUser));
    } catch (error: any) {
      toast.error(error.message || "Failed to update wallet");
    }
  };

  // Two-Factor Form Handlers
  const handleTwoFactorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedUser = await dispatch(toggleTwoFactor(twoFactorEnabled)).unwrap();
      toast.success(
        `Two-factor authentication ${twoFactorEnabled ? "enabled" : "disabled"} successfully!`
      );
      setIsEditingTwoFactor(false);
      // Sync auth slice
      dispatch(setUser(updatedUser));
    } catch (error: any) {
      toast.error(error.message || "Failed to update two-factor authentication");
    }
  };

  if (isLoading && !user) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='bg-white tw-px-5 tw-py-5 rounded-3 tw-mb-6'>
        <ul
          className='nav nav-pills d-flex align-items-center tw-gap-3'
          id='pills-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active px-80 tw-py-3 max-w-222-px w-100'
              id='pills-account-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-account'
              type='button'
              role='tab'
              aria-controls='pills-account'
              aria-selected='true'
            >
              Account
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link px-80 tw-py-3'
              id='pills-security-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-security'
              type='button'
              role='tab'
              aria-controls='pills-security'
              aria-selected='true'
            >
              Security
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link tw-px-12 tw-py-3'
              id='pills-payment-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-payment'
              type='button'
              role='tab'
              aria-controls='pills-payment'
              aria-selected='true'
            >
              Wallet
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link tw-px-72-px tw-py-3'
              id='pills-notifications-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-notifications'
              type='button'
              role='tab'
              aria-controls='pills-notifications'
              aria-selected='true'
            >
              Bank
            </button>
          </li>
        </ul>
      </div>
      <div className='bg-white rounded-3'>
        <div className='tab-content' id='pills-tabContent'>
          {/* Account Tab */}
          <div
            className='tab-pane fade show active'
            id='pills-account'
            role='tabpanel'
            aria-labelledby='pills-account-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <h4 className='fw-normal text-dark-600 tw-mb-8'>
                Personal Details
              </h4>
              <form onSubmit={handleAccountSave}>
                <div className='row gy-4'>
                  <div className='col-lg-6'>
                    <Input
                      label='First Name*'
                      name='firstName'
                      type='text'
                      placeholder='First Name'
                      value={accountForm.firstName}
                      onChange={(e) =>
                        setAccountForm({ ...accountForm, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='col-lg-6'>
                    <Input
                      label='Last Name*'
                      name='lastName'
                      type='text'
                      placeholder='Last Name'
                      value={accountForm.lastName}
                      onChange={(e) =>
                        setAccountForm({ ...accountForm, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='col-lg-6'>
                    <Input
                      label='Phone Number*'
                      name='phone'
                      type='text'
                      placeholder='Phone Number'
                      value={accountForm.phone}
                      onChange={(e) =>
                        setAccountForm({ ...accountForm, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className='col-lg-6'>
                    <Input
                      label='Email Address*'
                      name='email'
                      type='email'
                      placeholder='Email'
                      value={user?.email || ""}
                      disabled={true}
                      containerClassName="opacity-75"
                    />
                    <small className="text-muted d-block tw-mt-1">Email cannot be changed</small>
                  </div>
                  <div className='col-lg-6'>
                    <Select
                      label='Account Type*'
                      name='accountType'
                      value={accountForm.accountType}
                      onChange={(e) =>
                        setAccountForm({
                          ...accountForm,
                          accountType: e.target.value as "individual" | "team",
                        })
                      }
                      options={[
                        { value: "individual", label: "Individual" },
                        { value: "team", label: "Team" },
                      ]}
                    />
                  </div>
                </div>
                <div className='d-flex tw-gap-3 tw-mt-6'>
                  <Button
                    type="submit"
                    className="bg-main-gradient"
                    isLoading={profileLoading}
                  >
                    Update Profile
                  </Button>
                  <Button
                    type="button"
                    variant='outline'
                    onClick={handleAccountCancel}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {/* Security Tab */}
          <div
            className='tab-pane fade'
            id='pills-security'
            role='tabpanel'
            aria-labelledby='pills-security-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <div className='row gy-4'>
                {/* Password Section */}
                <div className='col-xl-6'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      {!isEditingPassword ? (
                        <button
                          type="button"
                          onClick={() => setIsEditingPassword(true)}
                          className='d-flex align-items-center tw-gap-2 text-primary-600 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='tw-text-xl text-primary-600'>
                            <i className='ph-bold ph-pencil-simple-line' />
                          </span>
                          <span className='fw-normal tw-text-4 text-primary-600'>
                            EDIT
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingPassword(false);
                            setPasswordForm({
                              currentPassword: "",
                              newPassword: "",
                              confirmPassword: "",
                            });
                            setPasswordErrors({});
                          }}
                          className='d-flex align-items-center tw-gap-2 text-dark-500 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='fw-normal tw-text-4'>
                            Cancel
                          </span>
                        </button>
                      )}
                    </div>
                    {!isEditingPassword ? (
                      <div className='text-center'>
                        <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                          Password
                        </h4>
                        <p className='fw-semibold tw-text-lg text-dark-500 tw-mb-105'>
                          Create or update your password
                        </p>
                        <span className='fw-normal tw-text-lg text-dark-500'>
                          -&nbsp;Last changed: {(() => {
                            const passwordDate = user?.passwordLastChanged ?? user?.createdAt;
                            if (passwordDate) {
                              try {
                                const date = new Date(passwordDate);
                                if (!isNaN(date.getTime())) {
                                  return date.toLocaleDateString('en-US', { 
                                    day: 'numeric', 
                                    month: 'short', 
                                    year: 'numeric' 
                                  });
                                }
                              } catch (e) {
                                // Invalid date, fall through to "Never"
                              }
                            }
                            return 'Never';
                          })()}
                        </span>
                      </div>
                    ) : (
                      <form onSubmit={handlePasswordSubmit}>
                        <h4 className='fw-normal text-dark-600 tw-mb-4'>Change Password</h4>
                        <div className='tw-mb-4'>
                          <Input
                            label='Current Password*'
                            type='password'
                            placeholder='Enter current password'
                            value={passwordForm.currentPassword}
                            onChange={(e) =>
                              setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                            }
                            error={passwordErrors.currentPassword}
                            required
                          />
                        </div>
                        <div className='tw-mb-4'>
                          <Input
                            label='New Password*'
                            type='password'
                            placeholder='Enter new password'
                            value={passwordForm.newPassword}
                            onChange={(e) =>
                              setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                            }
                            error={passwordErrors.newPassword}
                            required
                          />
                        </div>
                        <div className='tw-mb-4'>
                          <Input
                            label='Confirm Password*'
                            type='password'
                            placeholder='Confirm new password'
                            value={passwordForm.confirmPassword}
                            onChange={(e) =>
                              setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                            }
                            error={passwordErrors.confirmPassword}
                            required
                          />
                        </div>
                        <div className='d-flex tw-gap-3'>
                          <Button
                            type='button'
                            variant='outline'
                            onClick={() => {
                              setIsEditingPassword(false);
                              setPasswordForm({
                                currentPassword: "",
                                newPassword: "",
                                confirmPassword: "",
                              });
                              setPasswordErrors({});
                            }}
                          >
                            Cancel
                          </Button>
                          <Button className='bg-main-gradient' type='submit' isLoading={profileLoading}>
                            Change Password
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                {/* Security Questions Section */}
                <div className='col-xl-6'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      {!isEditingSecurityQuestions ? (
                        <button
                          type="button"
                          onClick={() => setIsEditingSecurityQuestions(true)}
                          className='d-flex align-items-center tw-gap-2 text-primary-600 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='tw-text-xl text-primary-600'>
                            <i className='ph-bold ph-pencil-simple-line' />
                          </span>
                          <span className='fw-normal tw-text-4 text-primary-600'>
                            EDIT
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingSecurityQuestions(false);
                            setSecurityQuestionsErrors({});
                            // Reset to original user data
                            if (user && user.securityQuestions && user.securityQuestions.length > 0) {
                              // Create deep copies of the objects
                              const questions = user.securityQuestions.map(q => ({ 
                                question: q.question || "", 
                                answer: q.answer || "" 
                              }));
                              while (questions.length < 3) {
                                questions.push({ question: "", answer: "" });
                              }
                              setSecurityQuestions(questions.slice(0, 3));
                            } else {
                              setSecurityQuestions([
                                { question: "", answer: "" },
                                { question: "", answer: "" },
                                { question: "", answer: "" },
                              ]);
                            }
                          }}
                          className='d-flex align-items-center tw-gap-2 text-dark-500 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='fw-normal tw-text-4'>
                            Cancel
                          </span>
                        </button>
                      )}
                    </div>
                    {!isEditingSecurityQuestions ? (
                      <div className='text-center'>
                        <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                          Security Questions
                        </h4>
                        <span className='fw-normal tw-text-lg text-dark-500'>
                          For your security, select 3 verification questions to
                          help confirm your identity when needed.
                        </span>
                      </div>
                    ) : (
                      <form onSubmit={handleSecurityQuestionsSubmit}>
                        <h4 className='fw-normal text-dark-600 tw-mb-4'>Security Questions</h4>
                        {securityQuestions.map((q, index) => (
                          <div key={index} className='tw-mb-4'>
                            <div className='tw-mb-3'>
                              <Input
                                label={`Question ${index + 1}*`}
                                type='text'
                                placeholder='Enter security question'
                                value={q.question}
                                onChange={(e) => {
                                  const updated = securityQuestions.map((q, i) => 
                                    i === index 
                                      ? { ...q, question: e.target.value }
                                      : { ...q }
                                  );
                                  setSecurityQuestions(updated);
                                }}
                                error={securityQuestionsErrors[`question${index}`]}
                                required
                              />
                            </div>
                            <div>
                              <Input
                                label={`Answer ${index + 1}*`}
                                type='text'
                                placeholder='Enter answer'
                                value={q.answer}
                                onChange={(e) => {
                                  const updated = securityQuestions.map((q, i) => 
                                    i === index 
                                      ? { ...q, answer: e.target.value }
                                      : { ...q }
                                  );
                                  setSecurityQuestions(updated);
                                }}
                                error={securityQuestionsErrors[`answer${index}`]}
                                required
                              />
                            </div>
                          </div>
                        ))}
                        <div className='d-flex tw-gap-3'>
                          <Button
                            type='button'
                            variant='outline'
                            onClick={() => {
                              setIsEditingSecurityQuestions(false);
                              setSecurityQuestionsErrors({});
                              // Reset to original user data
                              if (user && user.securityQuestions && user.securityQuestions.length > 0) {
                                const questions = [...user.securityQuestions];
                                while (questions.length < 3) {
                                  questions.push({ question: "", answer: "" });
                                }
                                setSecurityQuestions(questions.slice(0, 3));
                              } else {
                                setSecurityQuestions([
                                  { question: "", answer: "" },
                                  { question: "", answer: "" },
                                  { question: "", answer: "" },
                                ]);
                              }
                            }}
                          >
                            Cancel
                          </Button>
                          <Button className='bg-main-gradient' type='submit' isLoading={profileLoading}>
                            Save Questions
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
                {/* Two-Factor Section */}
                <div className='col-12'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      {!isEditingTwoFactor ? (
                        <button
                          type="button"
                          onClick={() => setIsEditingTwoFactor(true)}
                          className='d-flex align-items-center tw-gap-2 text-primary-600 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='tw-text-xl text-primary-600'>
                            <i className='ph-bold ph-wrench' />
                          </span>
                          <span className='fw-normal tw-text-4 text-primary-600'>
                            SETUP
                          </span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingTwoFactor(false);
                          }}
                          className='d-flex align-items-center tw-gap-2 text-dark-500 border-0 bg-transparent cursor-pointer'
                        >
                          <span className='fw-normal tw-text-4'>
                            Cancel
                          </span>
                        </button>
                      )}
                    </div>
                    {!isEditingTwoFactor ? (
                      <div className='text-center'>
                        <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                          2-Step Verification
                        </h4>
                        <span className='fw-normal tw-text-lg text-dark-500'>
                          Enhance your account security with a one-time code
                          alongside your password for every login attempt.
                        </span>
                      </div>
                    ) : (
                      <form onSubmit={handleTwoFactorSubmit}>
                        <h4 className='fw-normal text-dark-600 tw-mb-4'>2-Step Verification</h4>
                        <p className='text-muted tw-mb-4'>
                          Enable two-factor authentication to add an extra layer of security to your account.
                          You'll need to enter a verification code in addition to your password when signing in.
                        </p>
                        <div className='form-check form-switch d-flex align-items-center tw-mb-4'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='twoFactorToggle'
                            checked={twoFactorEnabled}
                            onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                            style={{ width: '3rem', height: '1.5rem' }}
                          />
                          <label className='form-check-label ms-3 fw-semibold' htmlFor='twoFactorToggle'>
                            {twoFactorEnabled ? "Enabled" : "Disabled"}
                          </label>
                        </div>
                        {twoFactorEnabled && (
                          <div className='alert alert-info tw-mb-4'>
                            <i className='ph ph-info' /> Two-factor authentication will be enabled for your account.
                          </div>
                        )}
                        <div className='d-flex tw-gap-3'>
                          <Button
                            type='button'
                            variant='outline'
                            onClick={() => {
                              setIsEditingTwoFactor(false);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button className='bg-main-gradient' type='submit' isLoading={profileLoading}>
                            {twoFactorEnabled ? "Enable" : "Disable"} 2FA
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Wallet Tab */}
          <div
            className='tab-pane fade'
            id='pills-payment'
            role='tabpanel'
            aria-labelledby='pills-payment-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <h4 className='text-dark-600 fw-normal tw-mb-8'>
                Wallet
                <span className='text-base-two-100'>(for payments)</span>
              </h4>
              <form onSubmit={handleWalletSubmit}>
                <div className='row gy-4'>
                  <div className='col-lg-6'>
                    <Select
                      label='Network Type*'
                      name='network'
                      value={walletForm.network}
                      onChange={(e) =>
                        setWalletForm({ ...walletForm, network: e.target.value })
                      }
                      options={[
                        { value: '', label: 'Select Network' },
                        { value: 'Ethereum', label: 'Ethereum' },
                        { value: 'BSC', label: 'BSC (Binance Smart Chain)' },
                        { value: 'Polygon', label: 'Polygon' },
                        { value: 'Solana', label: 'Solana' },
                        { value: 'Tron', label: 'Tron' },
                      ]}
                      required
                    />
                  </div>
                  <div className='col-lg-6'>
                    <Input
                      label='Wallet Address*'
                      name='address'
                      type='text'
                      placeholder='Enter wallet address'
                      value={walletForm.address}
                      onChange={(e) =>
                        setWalletForm({ ...walletForm, address: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className='d-flex tw-gap-3 tw-mt-6'>
                  <Button
                    type="submit"
                    className="bg-main-gradient"
                    isLoading={profileLoading}
                  >
                    Update Wallet
                  </Button>
                  <Button
                    type="button"
                    variant='outline'
                    onClick={() => {
                      if (user?.wallet) {
                        setWalletForm({
                          network: user.wallet.network || "",
                          address: user.wallet.address || "",
                        });
                      } else {
                        setWalletForm({
                          network: "",
                          address: "",
                        });
                      }
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </div>
          </div>
          {/* Bank Tab */}
          <div
            className='tab-pane fade'
            id='pills-notifications'
            role='tabpanel'
            aria-labelledby='pills-notifications-tab'
            tabIndex={0}
          >
            <div className='bg-white tw-rounded-xl w-100 tw-px-15 tw-py-15 h-100'>
              <div className='tw-mb-15'>
                <h4 className='fw-normal text-dark-600 tw-mb-3'>
                  Bank Information
                </h4>
                <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
                <div className='row gy-4'>
                  <div className='col-12'>
                    {bankLoading ? (
                      <LoadingSpinner />
                    ) : bankData ? (
                      <div className='tw-mb-8'>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Account Number
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.accountNumber || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Routing Number
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.routingNumber || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Bank Name
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.bankName || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Bank Address
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.bankAddress || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Beneficiary Name
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.beneficiaryName || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Destination Wallet Address
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {user?.wallet?.address || bankData.destinationWalletAddress || 'Not set'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Wallet Type
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {user?.wallet?.network || bankData.walletType || 'Not set'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Account Type
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.accountType || 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Payment Methods
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.paymentMethods && bankData.paymentMethods.length > 0 ? (
                              bankData.paymentMethods.map((method: string, idx: number) => (
                                <span key={idx} className="bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto">
                                  {method}
                                  {idx < bankData.paymentMethods.length - 1 && ' '}
                                </span>
                              ))
                            ) : 'N/A'}
                          </p>
                        </div>
                        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                          <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                            Currency
                          </span>
                          <p className='fw-medium tw-text-4 text-dark-500'>
                            {bankData.currency || 'N/A'}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className='text-muted'>No bank information available</p>
                    )}
                  </div>
                </div>
              </div>
              <div className='tw-mb-8'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyProfile;
