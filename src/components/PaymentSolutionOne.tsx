import Image from "next/image";

const PaymentSolutionOne: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10'>
      <div className='container'>
        <div className='row gy-5 align-items-center'>
          <div className='col-lg-6'>
            <Image
              width={577}
              height={593}
              src='/assets/images/thumbs/payment-solutions-four-img1.png'
              alt='img'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
          </div>
          <div className='col-lg-6'>
            <div>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt=''
                />
                <h5 className='fw-normal text-primary-600'>
                  Quick &amp; Trusted Payments
                </h5>
              </div>
              <h2
                className='tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Secure, Fast, and Reliable <br />
                payment solutions
              </h2>
              <p
                className='fw-normal tw-text-405 text-dark-500 max-w-554-px tw-mb-8 '
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Experience secure, fast, and reliable payment solutions designed
                to simplify transactions, ensuring safety and efficiency for
                businesses and individuals alike
              </p>
              <div className='d-flex align-items-center tw-gap-2 justify-content-between flex-wrap tw-mb-12'>
                <div
                  className='max-w-306-px'
                  data-aos='fade-up'
                  data-aos-duration={1100}
                >
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      Fast and seamless transactions
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      Zero hidden fees
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      Instant payment notifications
                    </span>
                  </div>
                </div>
                <div
                  className='max-w-306-px'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      Multi-currency support
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      Global payment accessibility
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-4'>
                    <span className='tw-text-5 text-base-two-600'>
                      <i className='ph ph-check-circle' />
                    </span>
                    <span className='fw-semibold tw-text-405 text-dark-600'>
                      24/7 customer support
                    </span>
                  </div>
                </div>
              </div>
              <div
                className='position-relative z-1 max-w-180-px w-100'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <a
                  href='#'
                  className='payment-solution__link bg-main-600 border-two-px-solid tw-py-205 text-dark-700 fw-semibold tw-text-405 tw-rounded-md text-center w-100 hover-text-dark-600'
                >
                  DOWNLOAD APP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutionOne;
