"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { login, clearError } from "@/redux/features/authSlice";
import { toast } from "react-toastify";
import Input from "./ui/Input";
import Button from "./ui/Button";

const LoginInInner: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { isLoading, error: authError, isAuthenticated } = useAppSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (isAuthenticated) {
      const redirect = searchParams.get("redirect") || "/dashboard";
      router.push(redirect);
    }
  }, [isAuthenticated, router, searchParams]);

  useEffect(() => {
    if (authError) {
      toast.error(authError);
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/google";
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await dispatch(login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      })).unwrap();

      toast.success("Login successful!");
      
      // Check if email is verified
      if (result.emailVerified === false) {
        // Redirect to verification page
        router.push(`/verify-email?email=${encodeURIComponent(formData.email)}`);
      } else {
        const redirect = searchParams.get("redirect") || "/dashboard";
        router.push(redirect);
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    }
  };

  const togglePasswordVisibility = (inputId: string) => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const icon = document.querySelector(`#${inputId} + .toggle-password`);
    
    if (input && icon) {
      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("ph-eye-slash");
        icon.classList.add("ph-eye");
      } else {
        input.type = "password";
        icon.classList.remove("ph-eye");
        icon.classList.add("ph-eye-slash");
      }
    }
  };

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
              Welcome back to NovaPay
            </h4>
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className='d-flex align-items-center tw-gap-205 tw-py-3 w-100 border-neutral-05 border rounded-3 text-center justify-content-center tw-mb-6 flex-wrap hover-bg-neutral-20'
              >
                <Image
                  width={24}
                  height={24}
                  src='/assets/images/icon/google-icon1.png'
                  alt='Image'
                />
                <span className='text-dark-500 fw-semibold tw-text-4'>
                  Continue With Google
                </span>
              </button>
              <div className='tw-mb-6 flex-wrap border-before position-relative text-center z-1'>
                <span className='fw-semibold text-dark-500 tw-text-4 bg-white tw-px-4'>
                  Or sign in with
                </span>
                <span className='position-absolute w-100 border-bottom border-neutral-50 tw-start-0 top-50 translate-middle-y z-n1' />
              </div>
              <div className='tw-mb-6'>
                <Input
                  label="Email Address*"
                  name="email"
                  type="email"
                  id="Email"
                  placeholder="Type Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  containerClassName=""
                />
              </div>
              <div className='tw-mb-3'>
                <label
                  htmlFor='createPassword'
                  className='fw-semibold tw-text-4 text-primary-50 tw-mb-3 d-block'
                >
                  Password*
                </label>
                <div className='position-relative'>
                  <input
                    name='password'
                    type='password'
                    className={`form-control border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 fw-semibold text-dark-500 tw-px-4 tw-py-3 tw-rounded-lg shadow-none ${
                      errors.password ? 'border-danger' : ''
                    }`}
                    id='createPassword'
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <span
                    className='toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw-text-xl text-neutral-600 tw--translate-y-50 ph-bold ph-eye-slash cursor-pointer'
                    onClick={() => togglePasswordVisibility('createPassword')}
                  />
                </div>
                {errors.password && (
                  <span className='text-danger tw-text-sm tw-mt-1 d-block'>{errors.password}</span>
                )}
              </div>
              <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-8'>
                <div className='form-check'>
                  <input
                    name='rememberMe'
                    className='form-check-input'
                    type='checkbox'
                    id='defaultCheck1'
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  />
                  <label
                    className='form-check-label fw-semibold'
                    htmlFor='defaultCheck1'
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href='/forgot-password'
                  className='fw-semibold tw-text-4 text-primary-600 hover-underline'
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                type="submit"
                fullWidth
                isLoading={isLoading}
                className="tw-mb-3 bg-main-gradient"
              >
                Sign In
              </Button>
              <span className='fw-semibold tw-text-4 text-primary-50 text-center justify-content-center d-flex'>
                Don&apos;t have an account?{" "}
                <Link href='/sign-up' className='fw-semibold text-primary-600 ms-1'>
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div className='w-50 d-lg-block d-none '>
          <Image
            width={948}
            height={1080}
            src='/assets/images/thumbs/long-in-img-1.png'
            alt='Image'
            className='w-100 h-100 object-fit-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default LoginInInner;
