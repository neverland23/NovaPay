import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

const BannerThree: React.FC = () => {
  return (
    <section
      className='pt-120 z-1 position-relative overflow-hidden'
      style={{ backgroundImage: "url(assets/images/bg/banner-three-bg1.png)" }}
    >
      <div className='tw-mb-96px'>
        <Image
          width={54}
          height={219}
          src='/assets/images/shape/banner-three-scroll-shape1.png'
          alt='Image'
          className='position-absolute tw-end-0 bottom-0 tw-me-15 tw-mb-182-px z-n1 d-xl-block d-none animation-Updowm__two'
        />
        <Image
          width={55}
          height={53}
          src='/assets/images/shape/banner-three-circle-shape1.png'
          alt='Image'
          className='position-absolute z-n1 tw-end-23 tw-block-start-200-px  d-xl-block d-none animation-rotation__two'
        />
        <div className='d-xl-block d-none'>
          <a
            href='#'
            className='tw-w-140px tw-h-140-px border-neutral-35-6px bg-neutral-40 rounded-circle d-flex align-items-center justify-content-center z-n1 position-absolute tw-end-0 bottom-0 tw-mb-214-px tw-me-290-px'
          >
            <span className='tw-w-80-px tw-h-80-px bg-base-two-600 rounded-circle tw-text-6 text-white d-flex align-items-center justify-content-center'>
              <i className='ph-fill ph-play' />
            </span>
          </a>
        </div>
        <div className='container max-w-1640'>
          <div className='position-relative'>
            <div className='row flex-wrap gy-4'>
              <div className='col-xl-6'>
                <div className='max-w-667'>
                  <div className='tw-mb-120-px position-relative'>
                    <div>
                      <div className='tw-mb-10'>
                        <div
                          className='d-flex align-items-center gap-1 tw-mb-3'
                          data-aos='fade-up'
                          data-aos-duration={600}
                        >
                          <Image
                            width={27}
                            height={27}
                            src='/assets/images/icon/star-icon3.png'
                            alt='star'
                          />
                          <h5 className='fw-normal text-base-two-600 cursor-big'>
                            Banking Platform
                          </h5>
                        </div>
                        <div
                          className='position-relative'
                          data-aos='fade-up'
                          data-aos-duration={800}
                        >
                          <h2 className='banner-item-title h1 text-dark-600 fw-normal tw-mb-3 tw-text-15 cursor-big'>
                            Revolutionize Your Banking with
                            <span className='text-base-two-600'>Next-Gen</span>
                            Digital Solutions
                          </h2>
                          <Image
                            width={276}
                            height={17}
                            src='/assets/images/shape/banner-three-shape1.png'
                            alt='Image'
                            className='banner-shape-three-one position-absolute z-n1 tw-block-start-130-px tw-start-58 d-lg-block d-none'
                          />
                        </div>
                        <p
                          className='banner-item-text text-dark-500 fw-normal tw-text-xl line-clamp-2'
                          data-aos='fade-up'
                          data-aos-duration={1000}
                        >
                          Transform your banking experience with our innovative,
                          next-generation digital solutions that empower secure,
                          smart financial transactions.
                        </p>
                      </div>
                      <div
                        className='d-flex align-items-center tw-gap-6 flex-wrap'
                        data-aos='fade-up'
                        data-aos-duration={1200}
                      >
                        <div className='position-relative'>
                          <Link
                            href='/blog-details'
                            className='banner-three-item-link bg-main-600 text-dark-600 fw-semibold tw-text-lg tw-px-5 tw-py-3 border-two-px-solid rounded-3 hover-text-dark-600'
                          >
                            GET STARTED
                          </Link>
                        </div>
                        <div className='position-relative'>
                          <Link
                            href='/about-us'
                            className='banner-three-item-2-link bg-warning-500 text-dark-600 fw-semibold tw-text-lg tw-px-5 tw-py-3 border-two-px-solid rounded-3 hover-text-dark-600'
                          >
                            ABOUT US
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Image
                      width={62}
                      height={62}
                      src='/assets/images/shape/banner-three-start-shape1.png'
                      alt='Image'
                      className='position-absolute bottom-0 tw-end-100-px tw-mb--30px z-n1 d-xl-block d-none animation-rotation__two'
                    />
                    <Image
                      width={213}
                      height={69}
                      src='/assets/images/shape/banne-three-arrow-shape1.png'
                      alt='Image'
                      className='position-absolute z-n1 tw-end--110-px tw-block-start--9 tw-rotate--7deg d-xl-block d-none animate-wobble__two'
                    />
                  </div>
                  <div className='d-flex align-items-center tw-gap-12 tw-mb-15 flex-wrap'>
                    <div
                      className='d-flex align-items-center tw-gap-5 flex-wrap'
                      data-aos='fade-up'
                      data-aos-duration={1300}
                    >
                      <Image
                        width={70}
                        height={67}
                        src='/assets/images/thumbs/banner-three-img2.png'
                        alt='Image'
                      />
                      <div className=''>
                        <span className='fw-normal tw-text-lg text-dark-500 tw-mb-205 d-block'>
                          Award Winning Bank
                        </span>
                        <span className='fw-normal tw-text-lg text-dark-500 d-flex align-items-center'>
                          <span className='fw-bold tw-text-2xl text-base-two-600'>
                            14M+
                          </span>
                          Active Clients
                        </span>
                      </div>
                    </div>
                    <div data-aos='fade-up' data-aos-duration={1400}>
                      <div className='d-flex align-items-center tw-mb-2'>
                        <Image
                          width={48}
                          height={49}
                          src='/assets/images/thumbs/banner-img4.png'
                          alt='Image'
                          className='tw-hover-z-2 tw-duration-400'
                        />
                        <Image
                          width={48}
                          height={49}
                          src='/assets/images/thumbs/banner-img3.png'
                          alt='Image'
                          className='margin-left--12px tw-hover-z-2 tw-duration-400'
                        />
                        <Image
                          width={48}
                          height={49}
                          src='/assets/images/thumbs/banner-img2.png'
                          alt='Image'
                          className='margin-left--12px tw-hover-z-2 tw-duration-400'
                        />
                        <Image
                          width={48}
                          height={48}
                          src='/assets/images/thumbs/banner-three-img3.png'
                          alt='Image'
                          className='margin-left--12px'
                        />
                      </div>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        OVER 20.8k+
                        <span className='fw-semibold border-bottom-dark-500'>
                          Reviews
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-6'>
                <div className='d-xl-block d-none text-end'>
                  <Image
                    width={350}
                    height={694}
                    src='/assets/images/thumbs/banner-three-img1.png'
                    alt='img'
                    className='margin-top--40px'
                    data-aos='zoom-in'
                    data-aos-duration={1500}
                  />
                </div>
              </div>
              <div className='col-xl-3 col-lg-6'>
                <div className='banner-three-item margin-left-200px d-xl-block d-none'>
                  <div className='max-w-185 tw-mb-12'>
                    <h2 className='fw-normal h1 cursor-big tw-mb-1 counter'>
                      7M+
                    </h2>
                    <span className='fw-normal tw-text-lg text-dark-500'>
                      Active users around the world
                    </span>
                  </div>
                  <div className='max-w-185'>
                    <h2 className='fw-normal h1 cursor-big tw-mb-1 counter'>
                      35+
                    </h2>
                    <span className='fw-normal tw-text-lg text-dark-500'>
                      Total dolly transactions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================= Marquee Section Start =============================== */}
        <div className='slider__marquee style2 bg-base-two-600 tw-py-8'>
          <Marquee className='marquee_mode'>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                {" "}
                Digital Banking
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                Instant Online Debit
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                {" "}
                Cash Back &amp; Perks
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                Instant Online Debit
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                {" "}
                Digital Banking
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                Instant Online Debit
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                {" "}
                Cash Back &amp; Perks
              </h3>
            </div>
            <div className='item tw-gap-10'>
              <Image
                width={38}
                height={38}
                src='/assets/images/icon/banner-three-marque-icon1.png'
                alt='img'
              />
              <h3 className='fw-normal text-white hover-text-main-600 tw-duration-500'>
                Instant Online Debit
              </h3>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
