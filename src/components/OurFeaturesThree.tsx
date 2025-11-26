import Image from "next/image";

const OurFeaturesThree: React.FC = () => {
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
            <h5 className='fw-normal text-primary-600'>Our Features</h5>
          </div>
          <h2
            className='fw-normal text-dark-600 tw-mb-3 cursor-big'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Our Main Features
          </h2>
          <p
            className='fw-normal tw-text-lg text-dark-500'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            Our online banking platform offers these main features
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-3 col-md-5'>
            <div
              className='group group-item tw-mb-10'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/our-features-three-img1.png'
                    alt='Image'
                    className='group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  Secure Transactions
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  We prioritize your financial safety with advanced encryption
                  &amp; multi-factor authentication.
                </p>
              </div>
            </div>
            <div
              className='group group-item'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={36}
                    height={36}
                    src='/assets/images/icon/our-features-three-img2.png'
                    alt='Image'
                    className='group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  Real-Time Alerts
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Stay informed with instant notifications &amp; account
                  activities and balance updates.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-7'>
            <div
              className='d-flex justify-content-center w-100 h-100'
              data-aos='zoom-in'
              data-aos-duration={1500}
            >
              <Image
                width={540}
                height={554}
                src='/assets/images/thumbs/our-features-three-img1.png'
                alt='Image'
              />
            </div>
          </div>
          <div className='col-lg-3 '>
            <div
              className='group group-item tw-mb-10'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/our-features-three-img3.png'
                    alt='Image'
                    className='group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  24/7 Account Access
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Manage your finances anytime, anywhere, with our user-friendly
                  mobile and web interfaces.
                </p>
              </div>
            </div>
            <div
              className='group group-item'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div className='tw-px-6 tw-py-6 rounded-3 border-bottom-black-2px group-hover-bg-base-two-600 tw-duration-400'>
                <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-10 group-hover-bg-main-600 tw-duration-400'>
                  <Image
                    width={40}
                    height={40}
                    src='/assets/images/icon/our-features-three-img4.png'
                    alt='Image'
                    className='group-hover-item-text-invert-black tw-duration-400'
                  />
                </span>
                <h5 className='fw-normal text-dark-600 tw-mb-2 group-hover-text-white tw-duration-400'>
                  Customer Support
                </h5>
                <p className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-400'>
                  Access dedicated assistance through multiple channe address
                  your banking needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeaturesThree;
