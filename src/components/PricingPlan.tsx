"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserSession, setUser } from "@/redux/features/authSlice";
import { updateAccount } from "@/redux/features/profileSlice";
import { toast } from "react-toastify";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

interface PricingPlanProps {
  isDashboard?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ isDashboard = false }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading: authLoading } = useAppSelector((state) => state.auth);
  const { isLoading: profileLoading } = useAppSelector((state) => state.profile);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (isDashboard && isAuthenticated && !user) {
      dispatch(fetchUserSession());
    }
  }, [isDashboard, isAuthenticated, user, dispatch]);

  const handleChoose = async (accountType: 'individual' | 'team') => {
    if (!isAuthenticated) {
      router.push(`/sign-up?accountType=${accountType}`);
      return;
    }

    if (user?.accountType === accountType) {
      toast.info(`You are already on the ${accountType} plan`);
      return;
    }

    setIsUpdating(true);
    try {
      const updatedUser = await dispatch(updateAccount({ accountType })).unwrap();
      toast.success(`Account type updated to ${accountType}`);
      // Update auth state with new user data
      if (updatedUser) {
        dispatch(setUser(updatedUser));
      } else {
        // Fallback: refresh user session
        await dispatch(fetchUserSession());
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to update account type');
    } finally {
      setIsUpdating(false);
    }
  };

  const isLoading = authLoading || profileLoading || isUpdating;
  const currentAccountType = user?.accountType;

  return (
    <section className={`overflow-hidden ${isDashboard ? 'bg-white tw-px-8 tw-py-8 rounded-3' : 'py-140'}`}>
      <div className='container'>
        {!isDashboard && (
          <div className='d-flex align-items-center tw-gap-9  justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-616'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-4'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600'>Our Pricing Plan</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              We Charge As Little As Possible. No Subscription Fee
            </h2>
          </div>
          </div>
        )}
        {isDashboard && (
          <div>
            <h5 className='fw-normal text-dark-600'>Our Pricing Plan</h5>
            <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
          </div>
        )}
        <div className='row gy-4'>
          <div className='col-lg-6 col-md-12'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h3 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Individual
                  </h3>
                  {isAuthenticated && currentAccountType === 'individual' && (
                    <div className='tw-mb-2'>
                      <span className='badge bg-success text-white tw-px-3 tw-py-1 tw-rounded-lg'>
                        Selected
                      </span>
                    </div>
                  )}
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h5 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      An individual account provides one personal bank account for your own transactions.
                    </h5>
                  </div>
                </div>
                <span className='bg-neutral-100 w-100 tw-h-px tw-mt-8 tw-mb-8' />
                <div className='tw-px-12 tw-pb-12'>
                  <div className='bg-neutral-10 tw-rounded-xl tw-px-6 tw-py-6 group-hover-bg-neutral-200 tw-duration-500'>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        ACH Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Wire Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        A one-time $150 registration fee is required.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        No transaction limits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Service Fee: 4%
                      </span>
                    </div>
                  </div>
                  <div className='tw-mt-6'>
                    <Button
                      fullWidth
                      onClick={() => handleChoose('individual')}
                      disabled={isLoading}
                      isLoading={isLoading && currentAccountType !== 'individual'}
                      className='group-hover:bg-white group-hover:text-base-two-600 tw-duration-500'
                    >
                      Choose
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='group' data-aos='fade-up' data-aos-duration={1200}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h3 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Team - Plus
                  </h3>
                  {isAuthenticated && currentAccountType === 'team' && (
                    <div className='tw-mb-2'>
                      <span className='badge bg-success text-white tw-px-3 tw-py-1 tw-rounded-lg'>
                        Selected
                      </span>
                    </div>
                  )}
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h5 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      A team account lets you add unlimited sub-accounts and manage all transactions centrally with built-in analytics.
                    </h5>
                  </div>
                </div>
                <span className='bg-neutral-100 w-100 tw-h-px tw-mt-8 tw-mb-8' />
                <div className='tw-px-12 tw-pb-12'>
                  <div className='bg-neutral-10 tw-rounded-xl tw-px-6 tw-py-6 group-hover-bg-neutral-200 tw-duration-500'>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        ACH Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Wire Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        A one-time $300 registration fee is required.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        No transaction limits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Add unlimited sub-accounts.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Manage team transactions with advanced insights.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Service Fee: 3.5%
                      </span>
                    </div>
                  </div>
                  <div className='tw-mt-6'>
                    <Button
                      fullWidth
                      onClick={() => handleChoose('team')}
                      disabled={isLoading}
                      isLoading={isLoading && currentAccountType !== 'team'}
                      className='group-hover:bg-white group-hover:text-base-two-600 tw-duration-500'
                    >
                      Choose
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
