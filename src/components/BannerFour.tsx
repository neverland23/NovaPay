import CounterView from "@/helper/CounterView";
import Image from "next/image";
import Link from "next/link";

const BannerFour: React.FC = () => {
  return (
    <>
      <section className='pt-140 position-relative'>
        <Image
          width={289}
          height={247}
          src='/assets/images/shape/my-profile-shape-2.png'
          alt=''
          className='banner-four-shape-one position-absolute bottom-0 tw-end-0 z-1'
        />
        <div className='container max-w-1640'>
          <div className='d-flex tw-gap-5'>
            <div className='max-w-667 w-100'>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon3.png'
                  alt=''
                />
                <h5 className='text-base-two-600 fw-normal '>
                  Banking Platform
                </h5>
              </div>
              <h2
                className='fw-normal tw-text-52-px tw-mb-2 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Secure &amp; Seamless Global Money Transfers
              </h2>
              <p
                className='fw-normal text-dark-500 tw-text-405 tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                A modern payment platform built to handle secure, fast, and
                reliable digital transactions worldwide with ease.
              </p>
              <div
                className='d-flex align-items-center tw-gap-6 tw-mb-8 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='position-relative max-w-160-px w-100'>
                  <a
                    href='#'
                    className='banner-four-link text-dark-700 tw-py-205 bg-main-600 border-two-px-solid w-100 text-center tw-rounded-md fw-semibold tw-text-405 hover-text-dark-700'
                  >
                    GET STARTED
                  </a>
                </div>
                <div className='position-relative max-w-130-px w-100'>
                  <Link
                    href='/about-us'
                    className='banner-four-link text-dark-700 tw-py-205 bg-warning-500 border-two-px-solid w-100 text-center tw-rounded-md fw-semibold tw-text-405 hover-text-dark-700'
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
              <div
                className='d-flex align-items-center tw-gap-4 flex-wrap tw-mb-12'
                data-aos='fade-up'
                data-aos-duration={1100}
              >
                <div className='d-flex align-items-center tw-gap-1'>
                  <span className='text-dark-600 tw-text-4'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='tw-text-4 text-dark-600'>
                    No credit card required
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-1'>
                  <span className='text-dark-600 tw-text-4'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='tw-text-4 text-dark-600'>
                    Trusted 100+ Countries
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-1'>
                  <span className='text-dark-600 tw-text-4'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='tw-text-4 text-dark-600'>
                    24/7 Online Support
                  </span>
                </div>
              </div>
              <div
                className='banner-four__img d-flex align-items-center tw-gap-3 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='d-flex '>
                  <Image
                    width={48}
                    height={49}
                    src='/assets/images/thumbs/banner-img4.png'
                    alt='img'
                    className=''
                  />
                  <Image
                    width={48}
                    height={49}
                    src='/assets/images/thumbs/banner-img3.png'
                    alt='img'
                    className='tw-ml--14-px'
                  />
                  <Image
                    width={48}
                    height={49}
                    src='/assets/images/thumbs/banner-img2.png'
                    alt='img'
                    className='tw-ml--14-px'
                  />
                </div>
                <div>
                  <h5 className='fw-normal counter'>
                    {/* CounterView */}
                    <CounterView start={0} end={25} title='K+' />
                  </h5>
                  <span className='fw-normal tw-text-5 text-dark-600'>
                    Over Review
                  </span>
                </div>
              </div>
            </div>
            <div
              className='z-1 d-lg-block d-none'
              data-aos='fade-up'
              data-aos-duration={1500}
            >
              <Image
                width={932}
                height={680}
                src='/assets/images/thumbs/banner-four-img1.png'
                alt='img'
              />
            </div>
          </div>
        </div>
        <div className='banner-four-clip-path bg-base-two-600 tw-h-558-px tw-mt--352px' />
      </section>

      <section className='tw-mt--138px z-1 tw-mb-15 position-relative'>
        <div className='container'>
          <div className='bg-white tw-rounded-lg tw-px-8 tw-py-8 tw-box-shadow-banner-four'>
            <div className='banner-four__text tw-gap-5'>
              <div className='w-100 h-100'>
                <div className='tw-py-12 tw-px-4 tw-rounded-lg bg-neutral-10 text-center hover-bg-main-600 tw-duration-300'>
                  <h2 className='h1 tw-mb-3 counter'>140 K</h2>
                  <span className='fw-normal tw-text-5 text-dark-600'>
                    Active Users
                  </span>
                </div>
              </div>
              <div className='w-100 h-100'>
                <div className='tw-py-12 tw-px-4 tw-rounded-lg bg-neutral-10 text-center hover-bg-main-600 tw-duration-300'>
                  <h2 className='h1 tw-mb-3 counter'>15 +</h2>
                  <span className='fw-normal tw-text-5 text-dark-600'>
                    Years Of Experience
                  </span>
                </div>
              </div>
              <div className='w-100 h-100'>
                <div className='tw-py-12 tw-px-4 tw-rounded-lg bg-neutral-10 text-center hover-bg-main-600 tw-duration-300'>
                  <h2 className='h1 tw-mb-3 counter'>14 K</h2>
                  <span className='fw-normal tw-text-5 text-dark-600'>
                    User Downloads
                  </span>
                </div>
              </div>
              <div className='w-100 h-100'>
                <div className='tw-py-12 tw-px-4 tw-rounded-lg bg-neutral-10 text-center hover-bg-main-600 tw-duration-300'>
                  <h2 className='h1 tw-mb-3 counter'>18 K+</h2>
                  <span className='fw-normal tw-text-5 text-dark-600'>
                    User Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerFour;
