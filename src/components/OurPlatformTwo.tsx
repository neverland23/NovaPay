"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OurPlatformTwo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className='bg-base-two-600 py-140 position-relative z-1 overflow-hidden'>
      <Image
        width={78}
        height={78}
        src='/assets/images/shape/banner-two-shape3.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-100px inset-inline-start-100px d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={78}
        height={78}
        src='/assets/images/shape/banner-shape2.png'
        alt='Image'
        className='position-absolute z-n1 inset-inline-end-100px inset-block-start-194px d-lg-block d-none animation-rotation__two'
      />
      <Image
        width={109}
        height={62}
        src='/assets/images/shape/banner-two-shape5.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-89px inset-inline-end-95px d-lg-block d-none animation-Updowm__two'
      />
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-500'>
            <div className='d-flex align-items-center tw-gap-1 tw-mb-3'>
              <Image
                width={27}
                height={28}
                src='/assets/images/icon/star-icon4.png'
                alt='Image'
              />
              <h5 className='text-white fw-normal'>One Platform</h5>
            </div>
            <h2 className='text-white fw-normal cursor-big'>
              Payment Solutions For Everyone.
            </h2>
          </div>
          <div className='max-w-416'>
            <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-6'>
              Our inclusive payment solutions cater to businesses and
              convenience for everyone.
            </p>
            <div className='max-w-226 position-relative z-1'>
              <a
                href='#'
                className='platform-two-link bg-main-600 tw-px-5 tw-py-205 text-dark-700 rounded-3 border-two-px-solid w-100 fw-semibold hover-text-dark-600'
              >
                FIND MORE SOLUTION
              </a>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-5'>
            <div className='position-relative'>
              <Image
                width={526}
                height={381}
                src='/assets/images/thumbs/one-platform-img1.png'
                alt='h-100 w-100'
              />
              <div className='platform-item max-w-370-px w-100 position-absolute bottom-0 tw-start-0 tw-mb-10 tw-ms-10'>
                <h4 className='fw-normal text-white tw-mb-3 cursor-big'>
                  Online Sellers 1
                </h4>
                <p className='fw-semibold tw-text-405 text-white '>
                  Secure and seamless payment solutions designed specifically
                  for online sellers worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-7'>
            <div className='one-platform__title d-flex align-items-center tw-gap-4'>
              <div
                className={`payment-solutions__item cursor-pointer tw-duration-500 ${
                  activeTab === 1 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActiveTab(1)}
                  className='payment-solutions__button bg-white tw-w-86-px tw-h-380-px tw-rounded-md tw-py-6'
                >
                  <h4 className='one-platform__text fw-normal text-dark-600 tw-transform-rotate-90deg tw-w-250-px cursor-big'>
                    Freelancer 2
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-370-px tw-h-380-px position-relative w-100'>
                  <Image
                    width={416}
                    height={381}
                    src='/assets/images/thumbs/one-platform-img2.png'
                    alt='Image'
                    className='h-100 w-100'
                  />
                  <div className='max-w-346-px position-absolute top-0 tw-start-0 tw-mt-8 tw-ms-8'>
                    <h4 className='fw-normal text-white cursor-big tw-mb-3'>
                      Online Sellers
                    </h4>
                    <p className='fw-semibold tw-text-405 text-white'>
                      Secure and seamless payment solutions designed
                      specifically for online sellers worldwide.
                    </p>
                  </div>
                  <Link
                    href='/about-us'
                    className='one-platform__link fw-semibold tw-text-405 max-w-310-px w-100 text-dark-600 bg-main-600 tw-py-3 tw-px-5 text-center tw-rounded-md position-absolute bottom-0 tw-start-0 tw-ms-50-persent tw-translate-x-50 tw-mb-8'
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer tw-duration-500 ${
                  activeTab === 2 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActiveTab(2)}
                  className='payment-solutions__button bg-white tw-w-86-px tw-h-380-px tw-rounded-md tw-py-6'
                >
                  <h4 className='one-platform__text fw-normal text-dark-600 tw-transform-rotate-90deg tw-w-250-px cursor-big'>
                    Online Sellers
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-370-px tw-h-380-px position-relative w-100'>
                  <Image
                    width={416}
                    height={381}
                    src='/assets/images/thumbs/one-platform-img2.png'
                    alt='Image'
                    className='h-100 w-100'
                  />
                  <div className='max-w-346-px position-absolute top-0 tw-start-0 tw-mt-8 tw-ms-8'>
                    <h4 className='fw-normal text-white cursor-big tw-mb-3'>
                      Online Sellers
                    </h4>
                    <p className='fw-semibold tw-text-405 text-white'>
                      Secure and seamless payment solutions designed
                      specifically for online sellers worldwide.
                    </p>
                  </div>
                  <Link
                    href='/about-us'
                    className='one-platform__link fw-semibold tw-text-405 max-w-310-px w-100 text-dark-600 bg-main-600 tw-py-3 tw-px-5 text-center tw-rounded-md position-absolute bottom-0 tw-start-0 tw-ms-50-persent tw-translate-x-50 tw-mb-8'
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer tw-duration-500 ${
                  activeTab === 3 ? "active" : ""
                }`}
                data-aos-duration={1200}
              >
                <div
                  onClick={() => setActiveTab(3)}
                  className='payment-solutions__button bg-white tw-w-86-px tw-h-380-px tw-rounded-md tw-py-6'
                >
                  <h4 className='one-platform__text fw-normal text-dark-600 tw-transform-rotate-90deg tw-w-250-px cursor-big'>
                    Affiliate Marketing
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-370-px tw-h-380-px position-relative w-100'>
                  <Image
                    width={416}
                    height={381}
                    src='/assets/images/thumbs/one-platform-img2.png'
                    alt='Image'
                    className='h-100 w-100'
                  />
                  <div className='max-w-346-px position-absolute top-0 tw-start-0 tw-mt-8 tw-ms-8'>
                    <h4 className='fw-normal text-white cursor-big tw-mb-3'>
                      Online Sellers
                    </h4>
                    <p className='fw-semibold tw-text-405 text-white'>
                      Secure and seamless payment solutions designed
                      specifically for online sellers worldwide.
                    </p>
                  </div>
                  <Link
                    href='/about-us'
                    className='one-platform__link fw-semibold tw-text-405 max-w-310-px w-100 text-dark-600 bg-main-600 tw-py-3 tw-px-5 text-center tw-rounded-md position-absolute bottom-0 tw-start-0 tw-ms-50-persent tw-translate-x-50 tw-mb-8'
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer tw-duration-500 ${
                  activeTab === 4 ? "active" : ""
                }`}
                data-aos-duration={1300}
              >
                <div
                  onClick={() => setActiveTab(4)}
                  className='payment-solutions__button bg-white tw-w-86-px tw-h-380-px tw-rounded-md tw-py-6'
                >
                  <h4 className='one-platform__text fw-normal text-dark-600 tw-transform-rotate-90deg tw-w-250-px cursor-big'>
                    Online Shopping
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-370-px tw-h-380-px position-relative w-100'>
                  <Image
                    width={416}
                    height={381}
                    src='/assets/images/thumbs/one-platform-img2.png'
                    alt='Image'
                    className='h-100 w-100'
                  />
                  <div className='max-w-346-px position-absolute top-0 tw-start-0 tw-mt-8 tw-ms-8'>
                    <h4 className='fw-normal text-white cursor-big tw-mb-3'>
                      Online Sellers
                    </h4>
                    <p className='fw-semibold tw-text-405 text-white'>
                      Secure and seamless payment solutions designed
                      specifically for online sellers worldwide.
                    </p>
                  </div>
                  <Link
                    href='/about-us'
                    className='one-platform__link fw-semibold tw-text-405 max-w-310-px w-100 text-dark-600 bg-main-600 tw-py-3 tw-px-5 text-center tw-rounded-md position-absolute bottom-0 tw-start-0 tw-ms-50-persent tw-translate-x-50 tw-mb-8'
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlatformTwo;
