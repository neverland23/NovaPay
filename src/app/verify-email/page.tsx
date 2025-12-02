"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Page: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  // Check if email is in URL query params
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  // Check if token is in URL and verify automatically
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      verifyEmail(token);
    }
  }, [searchParams]);

  const verifyEmail = async (token: string) => {
    setIsVerifying(true);
    setVerificationStatus('idle');
    setErrorMessage("");

    try {
      const response = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Verification failed");
      }

      setVerificationStatus('success');
      toast.success("Email verified successfully! Redirecting to dashboard...");
      
      // Update auth state and redirect
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error: any) {
      setVerificationStatus('error');
      setErrorMessage(error.message || "Verification failed");
      toast.error(error.message || "Verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to resend verification email");
      }

      toast.success(data.message || "Verification email sent! Please check your inbox.");
    } catch (error: any) {
      toast.error(error.message || "Failed to resend verification email");
    } finally {
      setIsLoading(false);
    }
  };

  // Show verification status
  if (verificationStatus === 'success') {
    return (
      <section className='position-relative'>
        <div className='d-flex tw-h-screen'>
          <div className='flex-grow-1'>
            <div className='max-w-526-px w-100 log-in-card tw-px-6 tw-py-12 mx-auto'>
              <Link href='/' className='tw-mb-17'>
                <Image
                  src='/assets/images/logo/logo.png'
                  alt='img'
                  className='tw-h-13'
                  width={171}
                  height={52}
                />
              </Link>
              <div className='text-center tw-mb-8'>
                <div className='tw-mb-4'>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}>
                    <span className='ph ph-check text-white' style={{ fontSize: '40px' }}></span>
                  </div>
                </div>
                <h4 className='fw-medium text-primary-50 tw-mb-4'>
                  Email Verified!
                </h4>
                <p className='text-dark-500'>
                  Your email has been successfully verified. You will be redirected to your dashboard shortly.
                </p>
              </div>
              <Link href="/dashboard">
                <Button fullWidth className="bg-main-gradient">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (verificationStatus === 'error') {
    return (
      <section className='position-relative'>
        <div className='d-flex tw-h-screen'>
          <div className='flex-grow-1'>
            <div className='max-w-526-px w-100 log-in-card tw-px-6 tw-py-12 mx-auto'>
              <Link href='/' className='tw-mb-17'>
                <Image
                  src='/assets/images/logo/logo.png'
                  alt='img'
                  className='tw-h-13'
                  width={171}
                  height={52}
                />
              </Link>
              <div className='text-center tw-mb-8'>
                <div className='tw-mb-4'>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                  }}>
                    <span className='ph ph-x text-danger' style={{ fontSize: '40px' }}></span>
                  </div>
                </div>
                <h4 className='fw-medium text-primary-50 tw-mb-4'>
                  Verification Failed
                </h4>
                <p className='text-dark-500 tw-mb-6'>
                  {errorMessage || "The verification link is invalid or has expired."}
                </p>
                <p className='text-dark-500 tw-mb-6'>
                  Please request a new verification email below.
                </p>
              </div>
              <form onSubmit={handleResend}>
                <div className='tw-mb-6'>
                  <Input
                    label="Email Address*"
                    name="email"
                    type="email"
                    placeholder="Type Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isLoading}
                  className="tw-mb-3 bg-main-gradient"
                >
                  Resend Verification Email
                </Button>
                <Link href="/log-in">
                  <Button type="button" fullWidth variant="outline">
                    Back to Login
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default: Show resend form or loading
  return (
    <section className='position-relative'>
      <div className='d-flex tw-h-screen'>
        <div className='flex-grow-1'>
          <div className='max-w-526-px w-100 log-in-card tw-px-6 tw-py-12 mx-auto'>
            <Link href='/' className='tw-mb-17'>
              <Image
                src='/assets/images/logo/logo.png'
                alt='img'
                className='tw-h-13'
                width={171}
                height={52}
              />
            </Link>
            {isVerifying ? (
              <>
                <h4 className='fw-medium text-primary-50 tw-mb-8 text-center'>
                  Verifying your email...
                </h4>
                <div className='text-center'>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h4 className='fw-medium text-primary-50 tw-mb-8'>
                  Verify Your Email
                </h4>
                <p className='text-dark-500 tw-mb-8'>
                  We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
                </p>
                <p className='text-dark-500 tw-mb-8'>
                  Didn't receive the email? Enter your email address below and we'll send you a new verification link.
                </p>
                <form onSubmit={handleResend}>
                  <div className='tw-mb-6'>
                    <Input
                      label="Email Address*"
                      name="email"
                      type="email"
                      placeholder="Type Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    isLoading={isLoading}
                    className="tw-mb-3 bg-main-gradient"
                  >
                    Resend Verification Email
                  </Button>
                  <Link href="/log-in">
                    <Button type="button" fullWidth variant="outline">
                      Back to Login
                    </Button>
                  </Link>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

