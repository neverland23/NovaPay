"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
const TestimonialsThree: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
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
    <section className='bg-neutral-10 py-140 z-1 overflow-hidden'>
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
              data-aos-duration={800}
            >
              245m+ happy clients all around the world. Don’t just take our word
              for it
            </p>
            <div
              className='d-flex align-items-center tw-gap-1'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                type='button'
                className='testimonial-button-prev w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-base-two-600 tw-transition-04-secend hover-text-white'
              >
                <i className='ph ph-caret-left' />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                type='button'
                className='testimonial-button-next w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-base-two-600 tw-transition-04-secend hover-text-white'
              >
                <i className='ph ph-caret-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='swiper testimonial-slider'>
          <Slider
            ref={sliderRef}
            {...settings}
            className='swiper-wrapper d-flex'
          >
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='bg-white tw-px-8 tw-py-8 tw-rounded-xl w-100 h-100'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/testimonial-img1.png'
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
                    <Image
                      width={48}
                      height={33}
                      src='/assets/images/icon/testimonial-icon1.png'
                      alt='Quote Icon'
                    />
                  </div>
                </div>
                <p className='fw-normal text-dark-500 tw-text-lg tw-mb-6'>
                  Our customers love the seamless, Reliable service, and 24/7
                  support make transferring money Trust us for your global
                  payment needs!
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
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='bg-white tw-px-8 tw-py-8 tw-rounded-xl w-100 h-100'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/testimonial-img2.png'
                      alt='Darlene Robertson'
                    />
                    <div className=''>
                      <h5 className='fw-medium text-dark-600 tw-mb-05'>
                        Jenny Wilson
                      </h5>
                      <span className='fw-normal text-dark-500 tw-text-lg'>
                        Software Tester
                      </span>
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
                  Our customers love the seamless, Reliable service, and 24/7
                  support make transferring money Trust us for your global
                  payment needs!
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
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='bg-white tw-px-8 tw-py-8 tw-rounded-xl w-100 h-100'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/testimonial-img3.png'
                      alt='Darlene Robertson'
                    />
                    <div className=''>
                      <h5 className='fw-medium text-dark-600 tw-mb-05'>
                        Kathryn Murphy
                      </h5>
                      <span className='fw-normal text-dark-500 tw-text-lg'>
                        Software Tester
                      </span>
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
                  Our customers love the seamless, Reliable service, and 24/7
                  support make transferring money Trust us for your global
                  payment needs!
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
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div className='bg-white tw-px-8 tw-py-8 tw-rounded-xl w-100 h-100'>
                <div className=''>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/testimonial-img2.png'
                      alt='Darlene Robertson'
                    />
                    <div className=''>
                      <h5 className='fw-medium text-dark-600 tw-mb-05'>
                        Jenny Wilson
                      </h5>
                      <span className='fw-normal text-dark-500 tw-text-lg'>
                        Software Tester
                      </span>
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
                  Our customers love the seamless, Reliable service, and 24/7
                  support make transferring money Trust us for your global
                  payment needs!
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

export default TestimonialsThree;
