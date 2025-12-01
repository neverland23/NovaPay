"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.error("Invalid reset token");
      router.push("/forgot-password");
    }
  }, [token, router]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !token) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password");
      }

      setSuccess(true);
      toast.success("Password reset successful!");
      
      setTimeout(() => {
        router.push("/log-in");
      }, 2000);
    } catch (error: any) {
      toast.error(error.message || "Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
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
              <h4 className='fw-medium text-primary-50 tw-mb-8'>
                Password Reset Successful
              </h4>
              <p className='text-dark-500 tw-mb-8'>
                Your password has been reset successfully. You will be redirected to the login page shortly.
              </p>
              <Link href="/log-in">
                <Button fullWidth>
                  Go to Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            <h4 className='fw-medium text-primary-50 tw-mb-8'>
              Reset Password
            </h4>
            <p className='text-dark-500 tw-mb-8'>
              Enter your new password below.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='tw-mb-6'>
                <Input
                  label="New Password*"
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  error={errors.newPassword}
                  required
                />
              </div>
              <div className='tw-mb-6'>
                <Input
                  label="Confirm Password*"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  error={errors.confirmPassword}
                  required
                />
              </div>
              <Button
                type="submit"
                fullWidth
                isLoading={isLoading}
                className="tw-mb-3"
              >
                Reset Password
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
};

export default Page;



