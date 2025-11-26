"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

const PaymentMethodOne: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 500,
    // grabCursor: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className='bg-neutral-10 py-140 z-1 overflow-hidden'>
      <div className='container'>
        <h2
          className='fw-normal text-dark-600 tw-mb-80-px h1 text-center'
          data-aos='fade-up'
          data-aos-duration={800}
        >
          Payment Method
        </h2>
        <div className=''>
          <div className='swiper payment-mathod-slider overflow-hidden tw-h-180-px'>
            <Slider ref={sliderRef} {...settings} className='swiper-wrapper '>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/logo/payment-method-img1.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img2.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img3.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={161}
                    height={107}
                    src='/assets/images/logo/payment-mathod-img4.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img5.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={163}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img6.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={162}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img7.png'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='single'>
                  <Image
                    width={162}
                    height={108}
                    src='/assets/images/logo/payment-mathod-img4.png'
                    alt='Image'
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='d-flex gap-2 align-items-center justify-content-center'>
          <button
            type='button'
            onClick={() => sliderRef.current?.slickNext()}
            className='payment-method-button-next w-12 h-12 border-base-two-600 border rounded-circle tw-text-6 text-base-two-600 d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-400'
            data-aos='fade-right'
            data-aos-duration={800}
          >
            <i className='ph ph-caret-left' />
          </button>
          <button
            type='button'
            onClick={() => sliderRef.current?.slickPrev()}
            className='payment-method-button-prev w-12 h-12 border-base-two-600 border rounded-circle tw-text-6 text-base-two-600 d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-400'
            data-aos='fade-left'
            data-aos-duration={800}
          >
            <i className='ph ph-caret-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodOne;
