import Image from "next/image";

const WhyChooseUsOne: React.FC = () => {
  return (
    <section className='py-140 z-1  overflow-hidden'>
      <div className='container'>
        <div className='text-center justify-content-center tw-mb-80-px'>
          <div
            className='d-flex align-items-center tw-gap-1 tw-mb-3 justify-content-center'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <Image
              width={27}
              height={27}
              src='/assets/images/icon/star-icon2.png'
              alt='Image'
            />
            <h5 className='fw-normal text-primary-600'>Why Choose Us</h5>
          </div>
          <h2
            className='fw-normal text-dark-700 tw-mb-3 cursor-big'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Why Trust paynone For Your Payments?
          </h2>
          <p
            className='fw-normal tw-text-lg text-dark-500'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            Help agencies to define their new business objectives and then
            create professional software.
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
            <div className='tw-px-8' data-aos='fade-up' data-aos-duration={600}>
              <span className='bg-base-two-600 w-15 h-15 rounded-3 d-flex align-items-center justify-content-center tw-mb-10'>
                <Image
                  width={40}
                  height={40}
                  src='/assets/images/icon/why-choose-us-two-icon1.png'
                  alt='Image'
                />
              </span>
              <div className='max-w-240-px'>
                <h5 className='fw-normal tw-text-600 tw-mb-3'>
                  Fast Transactions
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Enjoy instant, encrypted money transfers with top-tier
                  security protocols.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
            <div
              className='choose-us-two-card margin-block-start-110px'
              data-aos='fade-up'
              data-aos-duration={700}
            >
              <div className='tw-px-8'>
                <span className='bg-main-600 w-15 h-15 rounded-3 d-flex align-items-center justify-content-center tw-mb-10'>
                  <Image
                    width={36}
                    height={36}
                    src='/assets/images/icon/why-choose-us-two-icon2.png'
                    alt='Image'
                  />
                </span>
                <div className='max-w-240-px'>
                  <h5 className='fw-normal tw-text-600 tw-mb-3'>
                    Global Accessibility
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Send and receive payments anytime, anywhere, multi-currency
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
            <div className='tw-px-8' data-aos='fade-up' data-aos-duration={800}>
              <span className='bg-base-two-600 w-15 h-15 rounded-3 d-flex align-items-center justify-content-center tw-mb-10'>
                <Image
                  width={40}
                  height={40}
                  src='/assets/images/icon/why-choose-us-two-icon3.png'
                  alt='Image'
                />
              </span>
              <div className='max-w-240-px'>
                <h5 className='fw-normal tw-text-600 tw-mb-3'>
                  Transparent Pricing
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  No hidden charges affordable and transparent transaction you
                  with fees.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
            <div
              className='choose-us-two-card margin-block-start-110px'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              <div className='tw-px-8'>
                <span className='bg-main-600 w-15 h-15 rounded-3 d-flex align-items-center justify-content-center tw-mb-10'>
                  <Image
                    width={34}
                    height={34}
                    src='/assets/images/icon/why-choose-us-two-icon4.png'
                    alt='Image'
                  />
                </span>
                <div className='max-w-240-px'>
                  <h5 className='fw-normal tw-text-600 tw-mb-3'>
                    24/7 Customer Support
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Our expert support team is always available to assist you
                    with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsOne;
