"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, fetchUserSession, setUser } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

const DashboardHeader: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const hasFetchedSessionRef = useRef<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch user session on mount if not already loaded
  // Only fetch once to prevent infinite loops
  useEffect(() => {
    if (!hasFetchedSessionRef.current && !user && !isLoggingOut) {
      hasFetchedSessionRef.current = true;
      dispatch(fetchUserSession()).catch(() => {
        // If session fetch fails, user is not authenticated - don't retry
        hasFetchedSessionRef.current = false; // Reset on error so we can try again later
      });
    }
  }, [dispatch, user, isLoggingOut]);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoggingOut(true);
    
    // Immediately clear user state to prevent session fetching
    dispatch(setUser(null));
    
    // Call logout API (fire and forget)
    dispatch(logout()).catch(() => {
      // Ignore errors - we're redirecting anyway
    });
    
    // Use window.location for immediate hard redirect to prevent any further execution
    window.location.href = "/log-in";
  };

  return (
    <>
      <div
        className={`header bg-white tw-py-505 ${scroll ? "fixed-header" : ""}`}
      >
        <div className='container'>
          <div className='d-flex align-items-center tw-gap-6 justify-content-between'>
            <div className='d-flex align-items-center w-100 tw-gap-6 max-w-885-px'>
              <Link href='/dashboard'>
                <Image
                  src='/assets/images/logo/logo.png'
                  alt='img'
                  className='tw-h-13'
                  width={171}
                  height={52}
                />
              </Link>
            </div>
            <div className='d-flex align-items-center tw-gap-6 '>
              {/* Notification Start */}
              <div className='dropdown'>
                <button
                  className='dropdown-btn shaking-animation text-gray-500 bg-neutral-10 hover-bg-neutral-10 transition-2 rounded-circle tw-text-7 flex-center tw-w-15 tw-h-15'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <span className='position-relative '>
                    <i className='ph ph-bell' />
                    <span className='alarm-notify position-absolute end-0' />
                  </span>
                </button>
                <div className='dropdown-menu tw-w-360-px border-0 bg-transparent p-0'>
                  <div className='card border border-gray-100 tw-rounded-xl box-shadow-custom p-0 overflow-hidden'>
                    <div className='card-body p-0'>
                      <div className='tw-py-2 tw-px-6 bg-primary-400'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <h5 className='text-xl fw-normal text-white mb-0'>
                            Notifications
                          </h5>
                          <div className='d-flex align-items-center tw-gap-3'>
                            <button
                              type='button'
                              className='bg-white tw-rounded-xl text-sm tw-px-2 tw-py-1 hover-text-primary-600'
                            >
                              New{" "}
                            </button>
                            <button
                              type='button'
                              className='close-dropdown hover-scale-1 text-xl text-white'
                            >
                              <i className='ph ph-x' />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='tw-px-5 tw-py-5 max-h-270 overflow-y-auto scroll-sm'>
                        <div className='d-flex align-items-start tw-gap-2'>
                          <Image
                            width={60}
                            height={60}
                            src='/assets/images/thumbs/newsletter-img1.png'
                            alt='Image'
                            className='tw-w-12 tw-h-12 rounded-circle object-fit-cover'
                          />
                          <div className='border-bottom border-neutral-300 tw-mb-6 tw-pb-6'>
                            <div className='d-flex align-items-center tw-gap-2'>
                              <a
                                href='#'
                                className='fw-semibold tw-text-4 mb-0 text-neutral-300 hover-text-main-600 line-clamp-2'
                              >
                                Ashwin Bose is requesting access to Design File
                                - Final Project.{" "}
                              </a>
                              {/* Three Dot Dropdown Start */}
                              <div className='dropdown flex-shrink-0'>
                                <button
                                  className='text-neutral-200 rounded-4'
                                  type='button'
                                  data-bs-toggle='dropdown'
                                  aria-expanded='false'
                                >
                                  <i className='ph-fill ph-dots-three-outline' />
                                </button>
                                <div className='dropdown-menu dropdown-menu--md border-0 bg-transparent p-0'>
                                  <div className='card border border-neutral-100 rounded-12 box-shadow-custom'>
                                    <div className='card-body p-12'>
                                      <div className='max-h-200 overflow-y-auto scroll-sm pe-8'>
                                        <ul>
                                          <li className='mb-0'>
                                            <a
                                              href='#'
                                              className='tw-py-2 tw-text-4 tw-px-205 hover-bg-neutral-50 text-neutral-300 tw-rounded-md fw-normal text-xs d-block'
                                            >
                                              <span className='text'>
                                                Mark as read
                                              </span>
                                            </a>
                                          </li>
                                          <li className='mb-0'>
                                            <a
                                              href='#'
                                              className='tw-py-2 tw-text-4 tw-px-205 hover-bg-neutral-50 text-neutral-300 tw-rounded-md fw-normal text-xs d-block'
                                            >
                                              <span className='text'>
                                                Delete Notification
                                              </span>
                                            </a>
                                          </li>
                                          <li className='mb-0'>
                                            <a
                                              href='#'
                                              className='tw-py-2 tw-text-4 tw-px-205 hover-bg-neutral-50 text-neutral-300 tw-rounded-md fw-normal text-xs d-block'
                                            >
                                              <span className='text'>
                                                Report
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Three Dot Dropdown End */}
                            </div>
                            <div className='d-flex align-items-center tw-gap-2 tw-mt-2'>
                              <Image
                                width={14}
                                height={14}
                                src='/assets/images/icon/google-drive.png'
                                alt='Image'
                              />
                              <div className='d-flex align-items-center gap-2'>
                                <p className='text-gray-900 text-sm text-line-1'>
                                  Design brief and ideas.txt
                                </p>
                                <span className='text-xs text-gray-200 flex-shrink-0'>
                                  2.2 MB
                                </span>
                              </div>
                            </div>
                            <div className='tw-mt-4 d-flex align-items-center tw-gap-2 h-100'>
                              <button
                                type='button'
                                className='btn btn-main tw-py-2 tw-text-4 fw-normal tw-px-3 h-100'
                              >
                                Accept
                              </button>
                              <button
                                type='button'
                                className='tw-py-1 border-neutral-05 border tw-text-4 fw-normal tw-px-2 tw-rounded-md hover-bg-neutral-300 tw-duration-500 hover-text-white'
                              >
                                Decline
                              </button>
                            </div>
                            <span className='text-gray-200 text-13 tw-mt-2'>
                              2 mins ago
                            </span>
                          </div>
                        </div>
                        <div className='d-flex align-items-start tw-gap-1'>
                          <Image
                            width={48}
                            height={48}
                            src='/assets/images/icon/notification-img2.png'
                            alt='Image'
                            className='tw-w-12 tw-h-12 rounded-circle object-fit-cover'
                          />
                          <div className=''>
                            <a
                              href='#'
                              className='fw-semibold tw-text-4 mb-0 text-neutral-300 hover-text-main-600 line-clamp-2'
                            >
                              Patrick added a comment on Design Assets - Smart
                              Tags file:
                            </a>
                            <span className='text-gray-200 tw-text-3'>
                              2 mins ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <a
                        href='#'
                        className='tw-py-3 tw-px-6 fw-bold text-center d-block text-primary-600 border-top border-neutral-100 hover-underline tw-duration-500'
                      >
                        View All{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notification Start */}
              {/* User Profile Start */}
              <div className='dropdown'>
                <button
                  className='position-relative'
                  type='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <span className='position-relative tw-w-15 tw-h-15 tw-text-10 flex-shrink-0 rounded-circle bg-main-gradient'>
                    <i className='ph ph-user' />
                  </span>
                </button>
                <div className='dropdown-menu dropdown-menu--lg border-0 bg-transparent p-0'>
                  <div className='card border border-gray-100 tw-rounded-xl box-shadow-custom'>
                    <div className='card-body'>
                      <div className='d-flex align-items-center tw-gap-2 tw-mb-5 tw-pb-5 border-bottom border-gray-100'>
                        <span className='tw-text-10'>
                          <i className='ph ph-user' />
                        </span>
                        <br/>
                        <div className=''>
                          <h4 className='mb-0 fw-normal '>{user?.name || "User"}</h4>
                          <p className='fw-medium tw-text-4 text-neutral-200 fw-semibold'>
                            {user?.email || "example@mail.com"}
                          </p>
                        </div>
                      </div>
                      <ul className='overflow-y-auto scroll-sm pe-4'>
                        <li className='tw-mb-1'>
                          <Link
                            href='/my-profile'
                            className='tw-py-3 tw-text-4 tw-px-5 hover-bg-gray-50 text-neutral-300 tw-rounded-lg d-flex align-items-center tw-gap-2 fw-semibold tw-text-4'
                          >
                            <span className='tw-text-2xl text-primary-600 d-flex'>
                              <i className='ph ph-gear' />
                            </span>
                            <span className='text'>Account Settings</span>
                          </Link>
                        </li>
                        <li className='tw-mb-1'>
                          <Link
                            href='/pricing-plan'
                            className='tw-py-3 tw-text-4 tw-px-5 hover-bg-gray-50 text-neutral-300 tw-rounded-lg d-flex align-items-center tw-gap-2 fw-semibold tw-text-4'
                          >
                            <span className='tw-text-2xl text-primary-600 d-flex'>
                              <i className='ph ph-chart-bar' />
                            </span>
                            <span className='text'>Upgrade Plan</span>
                          </Link>
                        </li>
                        <li className='tw-pt-2 border-top border-gray-100'>
                          <button
                            onClick={handleLogout}
                            className='tw-py-3 tw-text-4 tw-px-5 hover-bg-danger-50 text-neutral-300 hover-text-danger-600 tw-duration-500 tw-rounded-md d-flex align-items-center tw-gap-2 fw-semibold tw-text-4 w-100 border-0 bg-transparent text-start'
                          >
                            <span className='tw-text-2xl text-danger-600 d-flex'>
                              <i className='ph ph-sign-out' />
                            </span>
                            <span className='text'>Log Out</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* User Profile Start */}
            </div>
          </div>
        </div>
      </div>
      <div className='tw-h-333-px bg-base-two-600 position-relative z-1'>
        <Image
          width={289}
          height={247}
          src='/assets/images/shape/my-profile-shape-1.png'
          alt='Image'
          className='position-absolute z-n1 tw-block-end-0 tw-start-0'
        />
        <Image
          width={289}
          height={247}
          src='/assets/images/shape/my-profile-shape-2.png'
          alt='Image'
          className='position-absolute z-n1 tw-block-end-0 tw-end-0'
        />
        <Image
          width={55}
          height={53}
          src='/assets/images/shape/circle-shape-img1.png'
          alt='Image'
          className='position-absolute tw-start-100-px tw-block-start-100-px animation-rotation__two'
        />
        <Image
          width={109}
          height={62}
          src='/assets/images/shape/banner-two-shape5.png'
          alt='Image'
          className='position-absolute tw-end-60-px tw-block-end-75-px animation-Updowm__two'
        />
      </div>
    </>
  );
};

export default DashboardHeader;
