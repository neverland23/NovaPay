"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const PaymentOne: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='py-140 z-1 bg-neutral-10 overflow-hidden'>
      <div className='container'>
        <div className='tw-px-78-px d-flex align-items-center justify-content-between tw-gap-4 flex-wrap tw-mb-80-px'>
          <div className='max-w-500'>
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
              <h5 className='fw-normal text-primary-600'>More Features</h5>
            </div>
            <h2
              className='fw-normal text-dark-600'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              {" "}
              Card Features <br />
              &amp; Benefits
            </h2>
          </div>
          <div className='max-w-416'>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              Discover our full suite of advanced services tailored to meet your
              needs.
            </p>
            <div
              className='max-w-140 position-relative'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <Link
                href='/about-us'
                className='features-three-link fw-semibold tw-text-lg text-dark-700 border-two-px-solid bg-main-600 tw-px-5 tw-py-205 rounded-3 w-100 d-flex align-items-center justify-content-center hover-text-dark-600'
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
        <div className='swiper our-services-two-slider overflow-hidden'>
          <Slider
            ref={sliderRef}
            {...settings}
            className='swiper-wrapper d-flex align-items-center tw-gap-4 tw-mb-15'
          >
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={51}
                        height={51}
                        src='/assets/images/icon/more-features-three-img-1.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Rewards
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={51}
                        height={51}
                        src='/assets/images/icon/more-features-three-img-2.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Cash Back
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={48}
                        height={48}
                        src='/assets/images/icon/more-features-three-img-3.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600 line-clamp-1'>
                    Balance Transfer
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={51}
                        height={51}
                        src='/assets/images/icon/more-features-three-img-4.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600 line-clamp-1'>
                    Low Interest
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={47}
                        height={47}
                        src='/assets/images/icon/more-features-three-img-5.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600 line-clamp-1'>
                    Zero Percent
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='single group group-item max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-w-80-px tw-h-80-px tw-border-base-two-600-dashed d-block d-flex align-items-center justify-content-center tw-mb-6 tw-rounded-xl mx-auto'>
                    <span className='tw-w-17 tw-h-17 bg-base-two-10 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-rounded-md tw-duration-500'>
                      <Image
                        width={48}
                        height={48}
                        src='/assets/images/icon/more-features-three-img-3.png'
                        alt='Image'
                        className='group-hover-item-text-invert tw-duration-500'
                      />
                    </span>
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600 line-clamp-1'>
                    Balance Transfer
                  </span>
                </div>
              </div>
            </div>
          </Slider>
          <div className='swiper-pagination' />
        </div>
      </div>
    </section>
  );
};

export default PaymentOne;
