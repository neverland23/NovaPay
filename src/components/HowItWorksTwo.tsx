import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HowItWorksTwo: React.FC = () => {
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
              <h5 className='fw-normal text-primary-600'>How it Works</h5>
            </div>
            <h2
              className='fw-normal text-dark-700 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Easy Steps for Fast and Safe Transactions
            </h2>
          </div>
          <div className='max-w-426'>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Simple and hassle-free! Just follow three easy steps to get
              started effortlessly today.
            </p>
            <div
              className='position-relative z-1 max-w-242-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/log-in'
                className='how-it-work-four__link text-dark-700 fw-semibold tw-text-lg bg-main-600 text-center tw-py-205 rounded-3 border-two-px-solid hover-text-dark-600 w-100'
              >
                OPEN A FREE ACCOUNT
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-5' data-aos='fade-up' data-aos-duration={600}>
            <Image
              width={526}
              height={504}
              src='/assets/images/thumbs/how-it-work-four-img1.png'
              alt='Image'
              className='w-100 h-100'
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
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-504-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='work-four__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-black tw-text-8 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent translate-middle-x tw-mb-7'>
                    <i className='ph ph-globe-hemisphere-west' />
                  </span>
                  <h4 className='work-four__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-four tw-w-406-px'>
                    Download App / Visit Website
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-306-px w-100 bg-main-600 tw-rounded-xl tw-px-8 tw-py-8 tw-h-504-px'>
                  <span className='tw-w-15 tw-h-15 bg-dark-600 text-white tw-rounded-md tw-text-8 d-flex align-items-center justify-content-center tw-mb-8'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='fw-normal cursor-big tw-mb-3'>
                    Register your account
                  </h4>
                  <p className='how-it-work-text fw-normal tw-text-405 text-dark-500'>
                    Create your account fast and safely to begin receiving
                    payments. Easy and secure sign-up process awaits.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-white bg-dark-600  tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
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
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-504-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='work-four__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-black tw-text-8 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent  translate-middle-x tw-mb-7'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='work-four__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-four tw-w-406-px'>
                    Register your account
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-306-px w-100 bg-main-600 tw-rounded-xl tw-px-8 tw-py-8 tw-h-504-px'>
                  <span className='tw-w-15 tw-h-15 bg-dark-600 text-white tw-rounded-md tw-text-8 d-flex align-items-center justify-content-center tw-mb-8'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='fw-normal cursor-big tw-mb-3'>
                    Register your account
                  </h4>
                  <p className='how-it-work-text fw-normal tw-text-405 text-dark-500'>
                    Create your account fast and safely to begin receiving
                    payments. Easy and secure sign-up process awaits.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-white bg-dark-600  tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
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
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-504-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='work-four__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-black tw-text-8 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent translate-middle-x tw-mb-7 '>
                    <span className='tw-transform-x--1'>
                      <i className='ph ph-cursor-click' />
                    </span>
                  </span>
                  <h4 className='work-four__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-four tw-w-406-px'>
                    Choose your plan
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-306-px w-100 bg-main-600 tw-rounded-xl tw-px-8 tw-py-8 tw-h-504-px'>
                  <span className='tw-w-15 tw-h-15 bg-dark-600 text-white tw-rounded-md tw-text-8 d-flex align-items-center justify-content-center tw-mb-8'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='fw-normal cursor-big tw-mb-3'>
                    Register your account
                  </h4>
                  <p className='how-it-work-text fw-normal tw-text-405 text-dark-500'>
                    Create your account fast and safely to begin receiving
                    payments. Easy and secure sign-up process awaits.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-white bg-dark-600  tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
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
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-504-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='work-four__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-black tw-text-8 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent translate-middle-x tw-mb-7'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <h4 className='work-four__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-four tw-w-406-px'>
                    Enjoy your automate payment
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-306-px w-100 bg-main-600 tw-rounded-xl tw-px-8 tw-py-8 tw-h-504-px'>
                  <span className='tw-w-15 tw-h-15 bg-dark-600 text-white tw-rounded-md tw-text-8 d-flex align-items-center justify-content-center tw-mb-8'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='fw-normal cursor-big tw-mb-3'>
                    Register your account
                  </h4>
                  <p className='how-it-work-text fw-normal tw-text-405 text-dark-500'>
                    Create your account fast and safely to begin receiving
                    payments. Easy and secure sign-up process awaits.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-white bg-dark-600  tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
              <div
                className={`payment-solutions__item cursor-pointer ${
                  active === 4 ? "active" : ""
                }`}
              >
                <div
                  onClick={() => setActive(4)}
                  className='payment-solutions__button bg-base-two-10 tw-w-86-px tw-h-504-px tw-rounded-md tw-py-6 border-base-two-600 border-top border-bottom position-relative'
                >
                  <span className='work-four__icon tw-w-13 tw-h-13 bg-base-two-10 tw-rounded-md text-black tw-text-8 d-flex align-items-center justify-content-center position-absolute bottom-0 tw-start-0 tw-ms-50-persent translate-middle-x tw-mb-7'>
                    <i className='ph ph-paper-plane-tilt' />
                  </span>
                  <h4 className='work-four__title fw-normal text-dark-600 cursor-big tw-transform-rotate-90deg-four tw-w-406-px'>
                    Set and track payment
                  </h4>
                </div>
                <div className='payment-solutions__content max-w-306-px w-100 bg-main-600 tw-rounded-xl tw-px-8 tw-py-8 tw-h-504-px'>
                  <span className='tw-w-15 tw-h-15 bg-dark-600 text-white tw-rounded-md tw-text-8 d-flex align-items-center justify-content-center tw-mb-8'>
                    <i className='ph ph-pencil-simple' />
                  </span>
                  <h4 className='fw-normal cursor-big tw-mb-3'>
                    Register your account
                  </h4>
                  <p className='how-it-work-text fw-normal tw-text-405 text-dark-500'>
                    Create your account fast and safely to begin receiving
                    payments. Easy and secure sign-up process awaits.
                  </p>
                  <Link
                    href='/about-us'
                    className='fw-semibold tw-text-4 text-white bg-dark-600  tw-px-6 tw-py-3 tw-rounded-md w-100 text-center '
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

export default HowItWorksTwo;
