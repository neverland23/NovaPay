"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
const TestimonialsTwo: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-522'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <span className=''>
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt='Image'
                  className=''
                />
              </span>
              <h5 className='text-primary-600 fw-normal'>Testimonials</h5>
            </div>
            <h2
              className='fw-normal h1 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              What Our Clients Say About us
            </h2>
          </div>
          <div className='max-w-340'>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              245m+ happy clients all around the world. Don’t just take our word
              for it
            </p>
            <div className='d-flex align-items-center tw-gap-1'>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                type='button'
                className='testimonial-button-prev w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-base-two-600 tw-duration-400 hover-text-white'
                data-aos='fade-right'
                data-aos-duration={800}
              >
                <i className='ph ph-caret-left' />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                type='button'
                className='testimonial-button-next w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-base-two-600 tw-duration-400 hover-text-white'
                data-aos='fade-left'
                data-aos-duration={800}
              >
                <i className='ph ph-caret-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='swiper testimonial-two-slider'>
          <Slider
            ref={sliderRef}
            {...settings}
            className='swiper-wrapper d-flex'
          >
            <div className='swiper-slide'>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <div className='d-flex align-items-center tw-gap-3'>
                      <Image
                        width={60}
                        height={60}
                        src='/assets/images/thumbs/testimonial-two-img1.png'
                        alt='Darlene Robertson'
                      />
                      <div className=''>
                        <h5 className='fw-medium text-dark-600 tw-mb-05'>
                          Darlene Robertson
                        </h5>
                        <span className='fw-normal text-dark-500 tw-text-lg'>
                          Software Tester
                        </span>
                      </div>
                    </div>
                    <Image
                      width={48}
                      height={33}
                      src='/assets/images/icon/testimonial-icon1.png'
                      alt='Quote Icon'
                    />
                  </div>
                </div>
                <p className='fw-normal text-dark-500 tw-text-lg tw-mb-6'>
                  This online banking platform is incredibly user-friendly! I
                  can manage my finances effortlessly with just a few clicks. I
                  feel safe knowing that my transactions are secured with
                  top-notch encryption.
                </p>
                <span className='w-100 bg-neutral-05 h-005 d-block' />
                <div className='d-flex align-items-center tw-gap-5 justify-content-between flex-wrap tw-mt-8'>
                  <h4 className='fw-medium text-dark-600'>4.5 - Excellent</h4>
                  <ul className='d-flex align-items-center tw-gap-1'>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <div className='d-flex align-items-center tw-gap-3'>
                      <Image
                        width={60}
                        height={60}
                        src='/assets/images/thumbs/testimonial-two-img2.png'
                        alt='Darlene Robertson'
                      />
                      <div className=''>
                        <h5 className='fw-medium text-dark-600 tw-mb-05'>
                          Marvin McKinney
                        </h5>
                        <span className='fw-normal text-dark-500 tw-text-lg'>
                          Ethical Hacker
                        </span>
                      </div>
                    </div>
                    <Image
                      width={48}
                      height={33}
                      src='/assets/images/icon/testimonial-icon1.png'
                      alt='Quote Icon'
                    />
                  </div>
                </div>
                <p className='fw-normal text-dark-500 tw-text-lg tw-mb-6'>
                  The mobile app is a game-changer. I can check my balance,
                  transfer funds, and even deposit checks—all from my
                  phone.Everything works seamlessly, from transfers to bill
                  payments.
                </p>
                <span className='w-100 bg-neutral-05 h-005 d-block' />
                <div className='d-flex align-items-center tw-gap-5 justify-content-between flex-wrap tw-mt-8'>
                  <h4 className='fw-medium text-dark-600'>4.5 - Excellent</h4>
                  <ul className='d-flex align-items-center tw-gap-1'>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <div className='d-flex align-items-center tw-gap-3'>
                      <Image
                        width={60}
                        height={60}
                        src='/assets/images/thumbs/testimonial-two-img1.png'
                        alt='Darlene Robertson'
                      />
                      <div className=''>
                        <h5 className='fw-medium text-dark-600 tw-mb-05'>
                          Darlene Robertson
                        </h5>
                        <span className='fw-normal text-dark-500 tw-text-lg'>
                          Software Tester
                        </span>
                      </div>
                    </div>
                    <Image
                      width={48}
                      height={33}
                      src='/assets/images/icon/testimonial-icon1.png'
                      alt='Quote Icon'
                    />
                  </div>
                </div>
                <p className='fw-normal text-dark-500 tw-text-lg tw-mb-6'>
                  This online banking platform is incredibly user-friendly! I
                  can manage my finances effortlessly with just a few clicks. I
                  feel safe knowing that my transactions are secured with
                  top-notch encryption.
                </p>
                <span className='w-100 bg-neutral-05 h-005 d-block' />
                <div className='d-flex align-items-center tw-gap-5 justify-content-between flex-wrap tw-mt-8'>
                  <h4 className='fw-medium text-dark-600'>4.5 - Excellent</h4>
                  <ul className='d-flex align-items-center tw-gap-1'>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='tw-text-6 text-warning-500'>
                      <i className='ph-fill ph-star-half' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;
