"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const Page: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send reset email");
      }

      setSubmitted(true);
      toast.success(data.message || "If an account exists with that email, a password reset link has been sent.");
    } catch (error: any) {
      toast.error(error.message || "Failed to process request");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
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
                Check your email
              </h4>
              <p className='text-dark-500 tw-mb-8'>
                If an account exists with that email, a password reset link has been sent.
                Please check your inbox and follow the instructions to reset your password.
              </p>
              <Link href="/log-in">
                <Button fullWidth variant="outline">
                  Back to Login
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
              Forgot Password
            </h4>
            <p className='text-dark-500 tw-mb-8'>
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
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
                className="tw-mb-3"
              >
                Send Reset Link
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




