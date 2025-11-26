"use client";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

const OurServicesOne: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
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
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='tw-px-78-px d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-400'>
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
              <h5 className='fw-normal text-primary-600'>Our Services</h5>
            </div>
            <h2
              className='fw-normal'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Learn More About Our Services
            </h2>
          </div>
          <div className='max-w-416'>
            <p
              className='fw-normal tw-text-lg text-dark-400 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Discover our full suite of advanced services tailored to meet your
              needs.
            </p>
            <div
              className='max-w-140 position-relative'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/about-us'
                className='services-two-link fw-semibold tw-text-lg text-dark-700 bg-main-600 tw-px-5 tw-py-205 rounded-3 w-100 border-two-px-solid hover-text-dark-600'
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
        <div className='swiper our-services-two-slider overflow-hidden'>
          <Slider
            {...settings}
            className='swiper-wrapper d-flex align-items-center tw-gap-4 mx-auto tw-mb-15'
          >
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={61}
                      height={81}
                      src='/assets/images/icon/our-services-two-img1.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Mobile Recharge
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={60}
                      height={74}
                      src='/assets/images/icon/our-services-two-img2.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Payment
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={80}
                      height={80}
                      src='/assets/images/icon/our-services-two-img3.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Cash Out
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={81}
                      height={81}
                      src='/assets/images/icon/our-services-two-img4.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Pay Bill
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={81}
                      height={81}
                      src='/assets/images/icon/our-services-two-img5.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Add Money
                  </span>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-2'>
              <div className='single group max-w-246-px w-100 position-relative'>
                <div className='our-services-slider-card tw-px-8 tw-py-8 bg-white tw-rounded-xl border-base-two-600 border-bottom text-center group-hover-bg-main-600 tw-duration-500 tw-hover-border-black tw-transition-05-secend'>
                  <span className='tw-mb-6 d-block'>
                    <Image
                      width={80}
                      height={80}
                      src='/assets/images/icon/our-services-two-img3.png'
                      alt='Image'
                    />
                  </span>
                  <span className='fw-semibold tw-text-6 text-dark-600'>
                    Cash Out
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurServicesOne;
