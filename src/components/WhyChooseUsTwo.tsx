"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const WhyChooseUsTwo: React.FC = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-526'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600'>Why Choose Us</h5>
            </div>
            <h2
              className='fw-normal text-dark-700 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Why Choose NovaPay Online Platform
            </h2>
          </div>
          <div className='max-w-426'>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Help agencies to define their new business objectives and then
              create professional software.
            </p>
            <div
              className='position-relative z-1 max-w-186-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/about-us'
                className='choose-us-three-link text-dark-700 fw-semibold tw-text-lg bg-main-600 w-100 text-center tw-py-205 rounded-3 border-two-px-solid hover-text-dark-600'
              >
                MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-5' data-aos='fade-up' data-aos-duration={600}>
            <Image
              width={406}
              height={380}
              src='/assets/images/thumbs/blog-details-img2.png'
              alt='Image'
              className='bg-img tw-h-420-px'
            />
          </div>
          <div className='col-xl-7'>
            <div className='one-platform__title d-flex align-items-center tw-gap-4'>
              <div
                className={`payment-solutions__item cursor-pointer ${
                  active === 0 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActive(0)}
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7'>
                    <i className='ph-fill ph-thumbs-up' />
                  </span>
                  <h4 className='choose-us__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-translate-72px tw-w-406-px'>
                    Professional Services
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-base-two-600 tw-rounded-xl tw-px-8 tw-py-8'>
                  <span className='tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icon/why-choose-therr-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <h4 className='fw-normal cursor-big text-white tw-mb-3'>
                    Low Costing
                  </h4>
                  <p className='fw-normal tw-text-405 text-white tw-mb-17'>
                    Replacing a maintains the amount of lines. When replacing a
                    selection. help agencies to define their new business
                    objectives and then create.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-dark-600 bg-white tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer ${
                  active === 1 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActive(1)}
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icon/why-choose-therr-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <h4 className='choose-us__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-translate-72px tw-w-406-px'>
                    Low Costing
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-base-two-600 tw-rounded-xl tw-px-8 tw-py-8'>
                  <span className='tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icon/why-choose-therr-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <h4 className='fw-normal cursor-big text-white tw-mb-3'>
                    Low Costing
                  </h4>
                  <p className='fw-normal tw-text-405 text-white tw-mb-17'>
                    Replacing a maintains the amount of lines. When replacing a
                    selection. help agencies to define their new business
                    objectives and then create.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-dark-600 bg-white tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer ${
                  active === 2 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActive(2)}
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7'>
                    <i className='ph-fill ph-headset' />
                  </span>
                  <h4 className='choose-us__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-translate-72px tw-w-406-px'>
                    Live Support
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-base-two-600 tw-rounded-xl tw-px-8 tw-py-8'>
                  <span className='tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icon/why-choose-therr-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <h4 className='fw-normal cursor-big text-white tw-mb-3'>
                    Low Costing
                  </h4>
                  <p className='fw-normal tw-text-405 text-white tw-mb-17'>
                    Replacing a maintains the amount of lines. When replacing a
                    selection. help agencies to define their new business
                    objectives and then create.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-dark-600 bg-white tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer ${
                  active === 3 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActive(3)}
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-420-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='choose-us__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-base-two-600 tw-text-7 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7'>
                    <i className='ph-fill ph-shield-check' />
                  </span>
                  <h4 className='choose-us__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-translate-72px tw-w-406-px'>
                    Safe &amp; Security
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-418-px tw-w-406-px w-100 bg-base-two-600 tw-rounded-xl tw-px-8 tw-py-8'>
                  <span className='tw-w-15 tw-h-15 bg-white tw-rounded-md d-flex align-items-center justify-content-center tw-mb-8'>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icon/why-choose-therr-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <h4 className='fw-normal cursor-big text-white tw-mb-3'>
                    Low Costing
                  </h4>
                  <p className='fw-normal tw-text-405 text-white tw-mb-17'>
                    Replacing a maintains the amount of lines. When replacing a
                    selection. help agencies to define their new business
                    objectives and then create.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-dark-600 bg-white tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
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

export default WhyChooseUsTwo;
