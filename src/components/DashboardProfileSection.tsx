"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ReactNode } from "react";

interface DashboardProfileProps {
  children: ReactNode;
}

const DashboardProfileSection: React.FC<DashboardProfileProps> = ({
  children,
}) => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);

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
              >
                <i className='ph ph-pencil-simple-line' />
              </button>
              <button
                onClick={() => setActive(false)}
                type='button'
                className='dashboard-close-button tw-text-xl tw-w-8 tw-h-8 border-neutral-200 rounded-circle hover-bg-base-two-600 hover-text-white tw-duration-500 d-flex align-items-center justify-content-center position-absolute z-1 tw-block-start-0 tw-mt-5 tw-start-24-px d-xl-none d-block'
              >
                <i className='ph-bold ph-x' />
              </button>
              <div className='position-relative tw-mb-8'>
                <div className='avatar-upload'>
                  <div className='avatar-edit tw-end-8 tw-block-end-6'>
                    <input
                      type='file'
                      id='imageUpload'
                      accept='.png, .jpg, .jpeg'
                    />
                    <label
                      htmlFor='imageUpload'
                      className='w-12 h-12 bg-base-two-600 rounded-circle tw-text-6 text-white d-flex align-items-center justify-content-center '
                    >
                      <i className='ph ph-camera' />
                    </label>
                  </div>
                  <div className='avatar-preview border-base-two-600 border rounded-circle tw-px-2 tw-py-2'>
                    <div
                      id='imagePreview'
                      style={{
                        backgroundImage:
                          "url(assets/images/thumbs/my-profile-img-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='text-center justify-content-center'>
                <h4 className='fw-normal text-dark-600 tw-mb-2'>
                  Leslie Alexander
                </h4>
                <span className='fw-normal tw-text-4 text-dark-500 '>
                  Brooklyn, NY, USA
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
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
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
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-arrows-left-right' />
                    </span>
                    Transaction
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/send-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/send-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-paper-plane-tilt' />
                    </span>
                    Send Money
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/request-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/request-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-currency-circle-dollar' />
                    </span>
                    Request Money
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/deposit-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/deposit-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-hand-coins'></i>
                    </span>
                    Deposit Money
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/withdraw-money" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/withdraw-money'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-bank' />
                    </span>
                    Withdraw Money
                  </Link>
                </li>
                <li
                  className={`header-nav-submenu__item tw-mb-4 ${
                    pathname === "/notifications" ? "activePage" : ""
                  } `}
                >
                  <Link
                    href='/notifications'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-bell-ringing' />
                    </span>
                    Notifications
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
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-user' />
                    </span>
                    Account
                  </Link>
                </li>
                <li className='header-nav-submenu__item'>
                  <Link
                    href='/log-in'
                    className='header-nav-submenu__link fw-normal tw-text-lg text-dark-600 d-flex align-items-center tw-gap-2 hover-text-white bg-neutral-10 tw-px-3 tw-py-3 rounded-3 hover-bg-base-two-600 tw-duration-400'
                  >
                    <span className='tw-text-6'>
                      <i className='ph ph-sign-out' />
                    </span>
                    Log Out
                  </Link>
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
