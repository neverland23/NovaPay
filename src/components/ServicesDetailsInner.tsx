import Image from "next/image";
const ServicesDetailsInner: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 '>
      <div className='container'>
        <div className='d-flex tw-gap-10 w-100 flex-wrap'>
          <div className='max-w-850-px w-100'>
            <div className='tw-mb-10'>
              <Image
                width={832}
                height={480}
                src='/assets/images/thumbs/services-details-other-two-img1.png'
                alt='Image'
                className='tw-mb-8'
              />
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                NovaPay we provide a seamless, secure, and efficient platform for
                money transfers and online payments. Whether you need to send
                funds to family members, make business transactions, or pay for
                services, our advanced technology ensures a smooth experience.
                We offer a range of services designed to meet your security, and
                affordability at the core of our operations.
              </p>
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-10'
                data-aos='fade-up'
                data-aos-duration={700}
              >
                Our platform allows you to send money instantly to your loved
                ones, both locally and internationally. With your money reaches
                the recipient safely and quickly.
              </p>
              <p
                className='tw-px-8 tw-py-8 bg-base-two-600 text-white fw-semibold tw-text-xl tw-rounded-md text-center'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                We make it easy for you to pay for goods and services online.
                Whether shopping from an e-commerce store, subscribing to a
                streaming service,
              </p>
            </div>
            <div className='tw-mb-10'>
              <h3
                className='fw-normal text-dark-600 cursor-big tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                Our Online Banking Solution
              </h3>
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Avoid the hassle of standing in long queues to pay your bills.
                Our bill payment service allows you to pay electricity, water,
                gas, internet, and other utility bills instantly. Additionally,
                you can recharge your mobile phone or top up data plans directly
                through our platform.
              </p>
              <div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <span className='tw-text-xl text-base-two-600 '>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Registration and Verification
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={700}
                >
                  <span className='tw-text-xl text-base-two-600 '>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Making Transactions
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <span className='tw-text-xl text-base-two-600 '>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Monitoring and Managing Accounts
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={900}
                >
                  <span className='tw-text-xl text-base-two-600 '>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Built for Global payments
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4
                className='fw-normal text-dark-600 tw-mb-6 cursor-big'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                More Asked Question
              </h4>
              <div className='accordion' id='accordionExample'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={700}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={900}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1100}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1300}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-400-px w-100'>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>Search</h4>
              </div>
              <div className='position-relative'>
                <input
                  name='search'
                  type='text'
                  placeholder='Search'
                  className='bg-base-two-10 tw-py-305 tw-px-3 tw-rounded-xl w-100 text-dark-500 border-neutral-10 border focus-visible-border-main-600'
                />
                <button className='tw-text-xl tw-w-8 tw-h-8 tw-rounded-md text-white bg-base-two-600 position-absolute tw-end-0 top-50 translate-middle-y tw-me-205'>
                  <i className='ph ph-magnifying-glass' />
                </button>
              </div>
            </div>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  All Services
                </h4>
              </div>
              <div>
                <a
                  href='#'
                  className='tw-px-4 tw-py-3 bg-neutral-10 tw-rounded-md tw-text-4 fw-normal text-dark-500 d-flex align-items-center tw-gap-3 justify-content-between hover-bg-base-two-600 hover-text-white tw-duration-500 tw-mb-4'
                >
                  Mobile Banking
                  <i className='ph ph-caret-double-right' />
                </a>
                <a
                  href='#'
                  className='tw-px-4 tw-py-3 bg-neutral-10 tw-rounded-md tw-text-4 fw-normal text-dark-500 d-flex align-items-center tw-gap-3 justify-content-between hover-bg-base-two-600 hover-text-white tw-duration-500 tw-mb-4'
                >
                  Personal Loans
                  <i className='ph ph-caret-double-right' />
                </a>
                <a
                  href='#'
                  className='tw-px-4 tw-py-3 bg-neutral-10 tw-rounded-md tw-text-4 fw-normal text-dark-500 d-flex align-items-center tw-gap-3 justify-content-between hover-bg-base-two-600 hover-text-white tw-duration-500 tw-mb-4'
                >
                  Merchant Banking
                  <i className='ph ph-caret-double-right' />
                </a>
                <a
                  href='#'
                  className='tw-px-4 tw-py-3 bg-neutral-10 tw-rounded-md tw-text-4 fw-normal text-dark-500 d-flex align-items-center tw-gap-3 justify-content-between hover-bg-base-two-600 hover-text-white tw-duration-500 tw-mb-4'
                >
                  Credit Cards
                  <i className='ph ph-caret-double-right' />
                </a>
                <a
                  href='#'
                  className='tw-px-4 tw-py-3 bg-neutral-10 tw-rounded-md tw-text-4 fw-normal text-dark-500 d-flex align-items-center tw-gap-3 justify-content-between hover-bg-base-two-600 hover-text-white tw-duration-500'
                >
                  Online Payment
                  <i className='ph ph-caret-double-right' />
                </a>
              </div>
            </div>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  Business Hours
                </h4>
              </div>
              <div>
                <div className='tw-px-4 tw-py-3 bg-neutral-10 d-flex align-items-center justify-content-between tw-gap-3 tw-rounded-md tw-mb-4'>
                  <span className='fw-semibold tw-text-4 text-dark-600'>
                    Mon-Thurs
                  </span>
                  <span className='fw-normal tw-text-4 text-dark-500'>
                    8:00 AM - 5:00 PM
                  </span>
                </div>
                <div className='tw-px-4 tw-py-3 bg-neutral-10 d-flex align-items-center justify-content-between tw-gap-3 tw-rounded-md tw-mb-4'>
                  <span className='fw-semibold tw-text-4 text-dark-600'>
                    Fri-Sat
                  </span>
                  <span className='fw-normal tw-text-4 text-dark-500'>
                    8:00 AM - 3:00 PM
                  </span>
                </div>
                <div className='tw-px-4 tw-py-3 bg-neutral-10 d-flex align-items-center justify-content-between tw-gap-3 tw-rounded-md'>
                  <span className='fw-semibold tw-text-4 text-dark-600'>
                    Sun
                  </span>
                  <span className='fw-normal tw-text-4 text-dark-500'>
                    Closed
                  </span>
                </div>
              </div>
            </div>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  Get In Touch
                </h4>
              </div>
              <div>
                <div>
                  <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-mb-4'
                  />
                  <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-mb-4'
                  />
                  <textarea
                    name='message'
                    placeholder='Your Message'
                    className='tw-px-4 tw-py-3 text-dark-600 tw-text-4 bg-neutral-10 tw-rounded-md w-100 border-0 focus-visible-border-main-600 tw-h-120-px'
                    defaultValue={""}
                  />
                  <button className='w-100 tw-px-4 tw-py-3 bg-base-two-600 tw-rounded-md text-white fw-normal tw-text-4 tw-mt-4'>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsInner;
