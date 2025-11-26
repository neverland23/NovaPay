import Image from "next/image";

const GlobalPaymentsOne: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 overflow-hidden'>
      <div className='container'>
        <div className='text-center tw-mb-80-px'>
          <div
            className='d-flex align-items-center justify-content-center tw-gap-1 tw-mb-3'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <Image
              width={27}
              height={27}
              src='/assets/images/icon/star-icon2.png'
              alt='Image'
            />
            <h5 className='fw-normal text-primary-600'>What we do</h5>
          </div>
          <h2
            className='fw-normal text-dark-600 tw-mb-3 cursor-big'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Powerful solutions engineered <br /> for global payments
          </h2>
          <p
            className='fw-normal tw-text-lg text-dark-500'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            The way we handle money is evolving, and we’re here to lead the
            change.
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-3 col-md-5'>
            <div
              className='group group-item tw-mb-10 animation-item'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={36}
                    height={36}
                    src='/assets/images/icon/global-payments-icon1.png'
                    alt='Image'
                    className='animate__wobble group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  For Personal
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Say goodbye to delays. Enjoy real-time transfers and instant
                  payments with just a tap.
                </p>
              </div>
            </div>
            <div
              className='group group-item animation-item'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/global-payments-icon2.png'
                    alt='Image'
                    className='animate__wobble group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  Education Loan
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Pay in multiple currencies and send money worldwide with ease.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-7'>
            <div
              className='d-flex justify-content-center w-100 h-100 object-fit-cover'
              data-aos='zoom-in'
              data-aos-duration={1500}
            >
              <Image
                width={636}
                height={554}
                src='/assets/images/thumbs/global-payments-img1.png'
                alt='Image'
              />
            </div>
          </div>
          <div className='col-lg-3'>
            <div
              className='group group-item tw-mb-10 animation-item'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/global-payments-icon3.png'
                    alt='Image'
                    className='animate__wobble group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  For Business
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Advanced encryption and fraud protection keep your funds and
                  data safe at all times.
                </p>
              </div>
            </div>
            <div
              className='group group-item animation-item'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/global-payments-icon4.png'
                    alt='Image'
                    className='animate__wobble group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  Private Loan
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Track expenses, set budgets, &amp; manage your money
                  effortlessly within the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPaymentsOne;
