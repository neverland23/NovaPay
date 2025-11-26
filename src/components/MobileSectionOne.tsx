import Image from "next/image";

const MobileSectionOne: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-6'>
            <Image
              width={636}
              height={562}
              src='/assets/images/thumbs/mobile-app-img-1.png'
              alt='Image'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
          </div>
          <div className='col-lg-6'>
            <div className='max-w-480'>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={800}
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
                <h5 className='text-primary-600 fw-normal'>
                  Mobile App 2.0 NEW
                </h5>
              </div>
              <h2
                className='fw-normal cursor-big h1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Download and enjoy the experience
              </h2>
              <p
                className='fw-normal text-dark-500 tw-text-lg tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                Don&apos;t miss out! Download now for seamless functionalities
                and endless possibilities.
              </p>
              <div className='tw-mb-12'>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1400}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Instant Mobile Access
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1500}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Effortless Transactions
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1600}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-medium tw-text-lg'>
                    Personalized Insights
                  </span>
                </div>
              </div>
              <div className='d-flex align-items-center tw-gap-3 flex-wrap'>
                <Image
                  width={135}
                  height={44}
                  src='/assets/images/logo/mobile-img1.png'
                  alt='Image'
                  data-aos='zoom-out-right'
                  data-aos-duration={800}
                />
                <Image
                  width={135}
                  height={44}
                  src='/assets/images/logo/mobile-img2.png'
                  alt='Image'
                  data-aos='zoom-out-left'
                  data-aos-duration={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSectionOne;
