"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, fetchUserSession, setUser } from "@/redux/features/authSlice";
import { toast } from "react-toastify";

interface DashboardProfileProps {
  children: ReactNode;
}

const DashboardProfileSection: React.FC<DashboardProfileProps> = ({
  children,
}) => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const hasFetchedSessionRef = useRef<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const handleRedirectToMyProfile = () => {
    router.push("/my-profile");
  };

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

  return (
    <section className='bg-neutral-10 z-1 '>
      <div className='container'>
        <div className='dashboard-item tw-pb-8 d-xl-flex tw-gap-6 w-100 tw-mt--193px'>
          <div
            className={`dashboard-slidebar tw-w-306-px bg-white tw-rounded-xl  z-2 xl-position-relative ${
              active ? "active" : ""
            }`}
          >
            <div className='tw-pt-12 tw-px-12 position-relative '>
              <button
                type='button'
                className='tw-text-7 text-dark-600 position-absolute tw-block-start-22-px tw-end-22-px'
                onClick={handleRedirectToMyProfile}
              >
                <i className='ph ph-pencil-simple-line' />
              </button>
              <div className='position-relative tw-mb-8'>
                <div className='avatar-upload'>
                  
                  <div className='avatar-preview border-base-two-600 border rounded-circle fw-normal text-dark-600 text-center'>
                    <span className='tw-text-123px'>
                      <i className='ph ph-user' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='text-center justify-content-center'>
                <h4 className='fw-normal text-dark-600 tw-mb-2'>
                  {user?.name || "User"}
                </h4>
                <span className='fw-normal tw-text-4 text-dark-500 '>
                  {user?.email || "user@example.com"}
                </span>
              </div>
            </div>
            <div className='tw-px-6 tw-pb-6'>
              <span className='border-bottom-neutral-05 w-100 tw-mb-8 tw-mt-8' />
              <ul className='header-nav-menu__item'>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/dashboard" ? "activePage" : ""
                  }`}
                >
                  <Link
                    href='/dashboard'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-house' />
                    </span>
                    Dashboard
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/transactions" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/transactions'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-arrows-left-right' />
                    </span>
                    Transaction
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/request-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/request-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-currency-circle-dollar' />
                    </span>
                    Request Money
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/withdraw-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/withdraw-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-bank' />
                    </span>
                    Withdraw Money
                  </Link>
                </li>
                <li className='border-bottom-neutral-05 w-100 tw-mb-8 tw-mt-8' />
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/my-profile" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/my-profile'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-user' />
                    </span>
                    Account
                  </Link>
                </li>
                <li className='header-nav-submenu__item'>
                  <button
                    onClick={handleLogout}
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-main-gradient tw-duration-400 w-100 border-0 bg-transparent text-start'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-sign-out' />
                    </span>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setActive(true)}
            type='button'
            className='dashboard-toggle-button text-base-two-600 tw-text-8 tw-mb-6 d-xl-none d-block pb-2 pt-4'
          >
            <i className='ph-bold ph-list' />
          </button>

          {/* children */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default DashboardProfileSection;
