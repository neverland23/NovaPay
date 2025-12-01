import Marquee from "react-fast-marquee";
import Image from "next/image";
import CounterView from "@/helper/CounterView";
import PopupVideo from "@/components/popup/PopupVideo";

const Banner: React.FC = () => {
  return (
    <>
      <section className='pt-120 bg-base-two-600 z-1 position-relative overflow-hidden'>
        <div className='container'>
          <div className='position-relative'>
            <div className='row flex-wrap gy-4'>
              <div className='col-lg-6'>
                <div className='max-w-571-px'>
                  <div className='tw-mb-10 position-relative'>
                    <div
                      className='d-flex align-items-center gap-1 tw-mb-3'
                      data-aos='fade-up'
                      data-aos-duration={800}
                    >
                      <Image
                        src='/assets/images/icon/star-icon1.png'
                        alt='star'
                        width={30}
                        height={30}
                      />
                      <span className='fw-normal tw-text-l text-neutral-10 cursor-big'>
                        Fund Your Account Worldwide. Cash Out in Crypto Effortlessly.
                      </span>
                    </div>
                    <div
                      className='position-relative'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                    >
                      <h2 className='banner-item-title text-neutral-10 fw-normal tw-mb-3 tw-text-15 cursor-big h1'>
                        Trusted by 20K+ global professionals.
                      </h2>
                      <Image
                        src='/assets/images/shape/line-shape1.png'
                        width={413}
                        height={20}
                        alt='Image'
                        className='banner-shape-one position-absolute max-w-411-px z-n1 inset-block-start-62px inset-inline-end--30px d-lg-block d-none'
                      />
                    </div>
                    <p
                      className='banner-item-text text-neutral-10 fw-normal tw-text-xl line-clamp-2'
                      data-aos='fade-up'
                      data-aos-duration={1100}
                    >
                      Access a true global banking experience with accounts that support multiple currencies, letting you get paid worldwide and manage international transactions effortlessly.
                    </p>
                  </div>
                  <div
                    className='d-flex align-items-center tw-gap-7 flex-wrap position-relative'
                    data-aos='fade-up'
                    data-aos-duration={1200}
                  >
                    <div className='max-w-248-px position-relative w-100'>
                      <a
                        href='#'
                        className='banner-item-link bg-main-gradient text-white fw-semibold w-100 tw-py-3 text-center tw-text-lg border-two-px-solid rounded-3 hover-text-white tw-duration-500'
                      >
                        MAKE AN APPOINTMENT
                      </a>
                    </div>
                    <div className='d-flex align-items-center tw-gap-10 flex-wrap'>
                      <span className='text-neutral-10 fw-semibold tw-text-lg'>
                        WATCH VIDEO
                      </span>
                      <div className='position-relative'>
                        {/* PopupVideo */}
                        <PopupVideo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div
                  className='d-lg-block d-none text-end'
                  data-aos='fade-up'
                  data-aos-duration={1500}
                >
                  <Image
                    width={544}
                    height={684}
                    src='/assets/images/thumbs/banner-img1.png'
                    alt='img'
                    className='margin-top--40px hero-banner'
                  />
                </div>
              </div>
            </div>
            <div className='banner-item'>
              <div className='bg-main-gradient tw-py-5 tw-px-5 rounded-3 d-inline-flex align-items-center tw-gap-3 position-absolute inset-block-start-70-persent inset-inline-start-42-persent z-1 max-w-263 animation-Updowm__two'>
                <div className='d-flex align-items-center '>
                  <Image
                    src='/assets/images/thumbs/banner-img4.png'
                    alt='img'
                    width={48}
                    height={49}
                  />
                  <Image
                    src='/assets/images/thumbs/banner-img3.png'
                    width={48}
                    height={49}
                    alt='img'
                    className='margin-left--16px'
                  />
                  <Image
                    src='/assets/images/thumbs/banner-img2.png'
                    width={48}
                    height={49}
                    alt='img'
                    className='margin-left--16px'
                  />
                </div>
                <div>
                  <h4 className='fw-normal tw-text-6 counter'>
                    {/* CounterView */}
                    <CounterView start={0} end={25} title='K+' />
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500'>
                    Active users{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='banner-brand-item bg-main-gradient tw-pt-15 tw-ps-15 tw-pb-8 tw-pe-7  tw-w-1662-px tw-w-100vw banner-slider-bg-clip-path banner-clip__path-rtl border-top-left-80-px'>
            <h3
              className=' fw-normal cursor-big tw-mb-2'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Join&nbsp;
              {/* CounterView */}
              <CounterView start={0} end={10245} title='' />
              +&nbsp;
            </h3>
            <h5
              className='fw-normal tw-mb-8'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              companies who’ve reached
            </h5>
            <div className='swiper banner-brand-swiper overflow-hidden z-1'>
              <div className='swiper-wrapper d-flex align-items-center w-100'>
                <Marquee>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img1.png'
                      width={146}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img2.png'
                      width={150}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img3.png'
                      width={168}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img4.png'
                      width={157}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img5.png'
                      width={148}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img6.png'
                      width={168}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img7.png'
                      width={168}
                      height={60}
                      alt='Image'
                    />
                  </div>
                  <div className='px-4'>
                    <Image
                      src='/assets/images/logo/banner-slider-img4.png'
                      width={157}
                      height={60}
                      alt='Image'
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
