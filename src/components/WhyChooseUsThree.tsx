import Image from "next/image";

const WhyChooseUsThree: React.FC = () => {
  return (
    <section className='py-140 '>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-730-px w-100'>
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
              <h5 className='fw-normal text-primary-600'>Why Choose Us</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              What Makes Our Online Banking Services Stand Out?
            </h2>
          </div>
          <p
            className='max-w-470-px w-100 fw-normal tw-text-lg text-dark-500'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            What Makes Our Online Banking Services Stand Out from Competitors
            and Why You Should Choose Us for a Secure, Seamless Experience?
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-4 col-md-6'>
            <div
              className='bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <span className='tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto'>
                <span className='tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/why-choose-us-other-icon1.png'
                    alt='Image'
                  />
                </span>
              </span>
              <div>
                <h4 className='fw-normal text-dark-60 tw-mb-3 cursor-big'>
                  Funding &amp; Investment
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  At NovaPay we excel funding &amp; investing, guiding strategic
                  decisions.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <span className='tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto'>
                <span className='tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/why-choose-us-other-icon2.png'
                    alt='Image'
                  />
                </span>
              </span>
              <div>
                <h4 className='fw-normal text-dark-60 tw-mb-3 cursor-big'>
                  Capital Transparency
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We prioritize capital transparency Our commitment ensures
                  clarity.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='bg-neutral-10 tw-rounded-xl tw-px-10 tw-py-10 text-center tw-hover-border-bottom-base-two-600 tw-duration-400'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='tw-w-72-px tw-h-72-px border-base-two-600 border tw-border-dashed tw-rounded-md d-flex align-items-center justify-content-center tw-mb-10 mx-auto'>
                <span className='tw-w-15 tw-h-15 tw-rounded-md bg-base-two-600 d-flex align-items-center justify-content-center'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/why-choose-us-other-icon3.png'
                    alt='Image'
                  />
                </span>
              </span>
              <div>
                <h4 className='fw-normal text-dark-60 tw-mb-3 cursor-big'>
                  Secure Investment Plan
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Our Secure Investment Plan at NovaPay ensures stability and
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsThree;
