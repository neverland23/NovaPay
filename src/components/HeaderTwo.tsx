"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const HeaderTwo: React.FC = () => {
  const pathname = usePathname();
  const MENU = [
    {
      label: "HOME",
      children: [
        { label: "Home One", to: "/" },
        { label: "Home Two", to: "/demo-2" },
        { label: "Home Three", to: "/demo-3" },
        { label: "Home Four", to: "/demo-4" },
      ],
    },
    {
      label: "BLOG",
      children: [
        { label: "Blog Grid", to: "/blog-grid" },
        { label: "Blog List", to: "/blog-list" },
        { label: "Blog Standard", to: "/blog-standard" },
        { label: "Blog Details", to: "/blog-details" },
      ],
    },
    {
      label: "Dashboard",
      children: [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Transaction", to: "/transactions" },
        { label: "Send Money", to: "/send-money" },
        { label: "Request Money", to: "/request-money" },
        { label: "Deposit Money", to: "/deposit-money" },
        { label: "Withdraw Money", to: "/withdraw-money" },
        { label: "Notifications", to: "/notifications" },
        { label: "Account", to: "/my-profile" },
      ],
    },
    {
      label: "ABOUT",
      children: [{ label: "About Us", to: "/about-us" }],
    },
    {
      label: "PAGES",
      children: [
        { label: "Fees", to: "/fees-others" },
        { label: "Our Services", to: "/our-services" },
        { label: "Services Details", to: "/services-details" },
        { label: "Our Team", to: "/our-team" },
        { label: "Pricing Plan", to: "/pricing-plan" },
        { label: "FAQ", to: "/faq" },
      ],
    },
    { label: "CONTACT", to: "/contact" },
  ];

  const [scroll, setScroll] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

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

  const handleMobileMenu = (): void => {
    setMobileMenu((prev) => !prev);
  };

  const [openIndex, setOpenIndex] = useState<number>(-1);

  interface NavItem {
    to?: string;
    children?: NavItem[];
  }

  const isItemActive = (item: NavItem): boolean =>
    item.to
      ? item.to === pathname
      : item.children?.some((c) => c.to === pathname) ?? false;

  return (
    <>
      <div className='overlay'></div>
      <div className={`side-overlay ${mobileMenu ? "active" : ""}`}></div>
      <header
        className={`header transition-all header-three   tw-start-0 w-100 tw-z-9 ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className='container max-w-1640'>
          <nav className='d-flex align-items-center justify-content-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='/' className='link'>
                <Image
                  width={171}
                  height={40}
                  src='/assets/images/logo/logo2.png'
                  alt='img'
                  className='tw-h-10'
                />
              </Link>
            </div>

            {/* Logo End  */}
            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none'>
              {/* Nav menu Start */}
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-6'>
                {MENU.map((item) => {
                  const active = isItemActive(item);

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children
                          ? "nav-menu__item has-submenu__three position-relative"
                          : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <Link
                          href='#'
                          className='nav-menu__link tw-pe-5 text-heading tw-py-9 fw-semibold text-dark-600 w-100'
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <Link
                          href={item.to}
                          className='nav-menu__link tw-pe-5 tw-py-9 text-dark-600 fw-semibold text-dark-600 w-100'
                        >
                          {item.label}
                        </Link>
                      )}

                      {item.children && (
                        <ul className='nav-submenu scroll-sm position-absolute start-0 top-100 tw-w-max bg-white tw-rounded-md tw-p-2 tw-mt-4 tw-duration-200 tw-z-99'>
                          {item.children.map((sub) => (
                            <li
                              key={sub.to}
                              className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                                sub.to === pathname ? "activePage" : ""
                              }`}
                            >
                              <Link
                                href={sub.to}
                                className='nav-submenu__link hover-bg-neutral-100 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded hover-bg-main-100'
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* Nav menu End  */}
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className='d-flex align-items-center tw-gap-3'>
              <div className='d-sm-block d-none'>
                <div className='d-flex align-items-center tw-gap-605 flex-wrap '>
                  <Link
                    href='/log-in'
                    className='text-dark-600 fw-semibold tw-text-lg hover-text hover-text-main-600 tw-duration-500'
                  >
                    LOGIN
                  </Link>
                  <div className='position-relative z-1'>
                    <Link
                      href='/sign-up'
                      className='header-three-item-link text-dark-600 fw-semibold tw-text-lg tw-px-4 tw-py-2 bg-main-600 border-two-px-solid rounded-2 text-dark-600 '
                    >
                      SIGN IN
                    </Link>
                  </div>
                </div>
              </div>
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none ms-3 text-dark-600 tw-text-9'
              >
                <i className='ph ph-list' />
              </button>
            </div>

            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-base-two-600 tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ${
          mobileMenu ? "active" : ""
        }`}
      >
        <button
          onClick={handleMobileMenu}
          type='button'
          className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-white bg-neutral-200 hover-bg-neutral-900 hover-text-white'
        >
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo'>
            <Image
              width={171}
              height={40}
              src='/assets/images/logo/logo.png'
              alt='Logo'
            />
          </Link>
          <div className='mobile-menu__menu'>
            {/* Nav menu Start */}

            <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
              {MENU.map((item, idx) => {
                const active = isItemActive(item);
                const open = idx === openIndex || active;

                return (
                  <li
                    key={item.label}
                    className={`nav-menu__item ${
                      item.children ? "has-submenu position-relative" : ""
                    } ${active ? "activePage active" : ""}`}
                  >
                    {item.children ? (
                      <button
                        type='button'
                        onClick={() => setOpenIndex(open ? -1 : idx)}
                        className='nav-menu__link text-white tw-pe-5 text-heading tw-py-9 fw-semibold w-100 text-start bg-transparent border-0'
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.to}
                        className='nav-menu__link text-heading tw-py-9 fw-semibold w-100 text-white'
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* ----- Submenu ----- */}
                    {item.children && (
                      <ul
                        className={`nav-submenu scroll-sm position-absolute tw-start-0 top-100 tw-w-max bg-white tw-rounded-md overflow-y-auto tw-p-2 tw-mt-4 tw-duration-200 tw-z-99 ${
                          open ? "d-block" : "d-none"
                        }`}
                      >
                        {item.children.map((sub) => (
                          <li
                            key={sub.to}
                            className={`nav-submenu__item d-block tw-rounded tw-duration-200 position-relative ${
                              sub.to === pathname ? "activePage" : ""
                            }`}
                          >
                            <Link
                              href={sub.to}
                              className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* Nav menu End  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
