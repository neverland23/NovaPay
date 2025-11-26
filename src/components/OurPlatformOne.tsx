import Image from "next/image";

const OurPlatformOne: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='max-w-636 text-center justify-content-center align-items-center mx-auto tw-mb-80-px'>
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
            <h5 className='fw-normal text-primary-600'>Our Platforms</h5>
          </div>
          <h2
            className='fw-normal tw-mb-3 cursor-big'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Swift, Secure Money Transfers
          </h2>
          <p
            className='fw-normal tw-text-lg text-dark-500'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            Swift, secure transfers with our advanced real-time platform.
          </p>
        </div>
        <div className='bg-neutral-10 rounded-4 px-80 py-80'>
          <div className='row gy-4 align-items-center'>
            <div className='col-lg-6'>
              <Image
                width={577}
                height={592}
                src='/assets/images/thumbs/our-platforms-two-img1.png'
                alt='Image'
                data-aos='zoom-in'
                data-aos-duration={1500}
              />
            </div>
            <div className='col-lg-6'>
              <div className='platform-two-item margin-left-133px max-w-426'>
                <ul
                  className='nav nav-pills platform-tabs tw-mb-15 bg-white tw-px-4 tw-py-4 rounded-4 d-flex align-items-center tw-gap-3 max-w-360'
                  id='pills-tab'
                  role='tablist'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active d-flex align-items-center tw-gap-1'
                      id='pills-home-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-home'
                      type='button'
                      role='tab'
                      aria-controls='pills-home'
                      aria-selected='true'
                    >
                      <span className=' tw-text-6'>
                        <i className='ph ph-device-mobile' />
                      </span>
                      <span className=' tw-text-lg fw-normal'>APP</span>
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link d-flex align-items-center tw-gap-1'
                      id='pills-ussd-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-ussd'
                      type='button'
                      role='tab'
                      aria-controls='pills-ussd'
                      aria-selected='false'
                    >
                      <span className='tw-text-6'>
                        <i className='ph ph-device-mobile' />
                      </span>
                      <span className='tw-text-lg fw-normal'>USSD</span>
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link d-flex align-items-center tw-gap-1'
                      id='pills-web-tab'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-web'
                      type='button'
                      role='tab'
                      aria-controls='pills-web'
                      aria-selected='false'
                    >
                      <span className='tw-text-6'>
                        <i className='ph ph-globe' />
                      </span>
                      <span className='tw-text-lg fw-normal'>WEB</span>
                    </button>
                  </li>
                </ul>
                <div className='tab-content' id='pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='pills-home'
                    role='tabpanel'
                    aria-labelledby='pills-home-tab'
                    tabIndex={0}
                  >
                    <div>
                      <h3
                        className='fw-normal text-dark-600 cursor-big tw-mb-3'
                        data-aos='fade-up'
                        data-aos-duration={700}
                      >
                        Download App
                      </h3>
                      <p
                        className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
                        data-aos='fade-up'
                        data-aos-duration={800}
                      >
                        Bank On-The-Go: Access Your Account, Check Your Balance,
                        Transfer Funds &amp; View Transactions Anywhere
                      </p>
                      <div className='tw-mb-15'>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={900}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Instant Online Account Opening
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={1000}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Real-Time Transaction Notifications
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2'
                          data-aos='fade-up'
                          data-aos-duration={1100}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            24/7 Customer Service Support
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center tw-gap-3 flex-wrap'>
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img1.png'
                          alt='Image'
                          data-aos='fade-right'
                          data-aos-duration={1200}
                        />
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img2.png'
                          alt='Image'
                          data-aos='fade-left'
                          data-aos-duration={1200}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='pills-ussd'
                    role='tabpanel'
                    aria-labelledby='pills-ussd-tab'
                    tabIndex={0}
                  >
                    <div>
                      <h3
                        className='fw-normal text-dark-600 cursor-big tw-mb-3'
                        data-aos='fade-up'
                        data-aos-duration={700}
                      >
                        Download App
                      </h3>
                      <p
                        className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
                        data-aos='fade-up'
                        data-aos-duration={800}
                      >
                        Bank On-The-Go: Access Your Account, Check Your Balance,
                        Transfer Funds &amp; View Transactions Anywhere
                      </p>
                      <div className='tw-mb-15'>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={900}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Instant Online Account Opening
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={1000}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Real-Time Transaction Notifications
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2'
                          data-aos='fade-up'
                          data-aos-duration={1100}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            24/7 Customer Service Support
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center tw-gap-3 flex-wrap'>
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img1.png'
                          alt='Image'
                          data-aos='fade-right'
                          data-aos-duration={1200}
                        />
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img2.png'
                          alt='Image'
                          data-aos='fade-left'
                          data-aos-duration={1200}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='pills-web'
                    role='tabpanel'
                    aria-labelledby='pills-web-tab'
                    tabIndex={0}
                  >
                    <div>
                      <h3
                        className='fw-normal text-dark-600 cursor-big tw-mb-3'
                        data-aos='fade-up'
                        data-aos-duration={700}
                      >
                        Download App
                      </h3>
                      <p
                        className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
                        data-aos='fade-up'
                        data-aos-duration={800}
                      >
                        Bank On-The-Go: Access Your Account, Check Your Balance,
                        Transfer Funds &amp; View Transactions Anywhere
                      </p>
                      <div className='tw-mb-15'>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={900}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Instant Online Account Opening
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2 tw-mb-4'
                          data-aos='fade-up'
                          data-aos-duration={1000}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            Real-Time Transaction Notifications
                          </span>
                        </div>
                        <div
                          className='d-flex align-items-center tw-gap-2'
                          data-aos='fade-up'
                          data-aos-duration={1100}
                        >
                          <span className='tw-text-xl text-base-two-600'>
                            <i className='ph ph-check-circle' />
                          </span>
                          <span className='text-dark-600 fw-semibold tw-text-lg'>
                            24/7 Customer Service Support
                          </span>
                        </div>
                      </div>
                      <div className='d-flex align-items-center tw-gap-3 flex-wrap'>
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img1.png'
                          alt='Image'
                          data-aos='fade-right'
                          data-aos-duration={1200}
                        />
                        <Image
                          width={135}
                          height={44}
                          src='/assets/images/logo/mobile-img2.png'
                          alt='Image'
                          data-aos='fade-left'
                          data-aos-duration={1200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlatformOne;
