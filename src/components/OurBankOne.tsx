import CounterView from "@/helper/CounterView";
import Image from "next/image";
import Link from "next/link";

const OurBankOne: React.FC = () => {
  return (
    <div className='position-relative overflow-hidden'>
      <section className='our-services-three position-relative overflow-hidden z-1'>
        <Image
          width={49}
          height={54}
          src='/assets/images/shape/our-services-three-shape2.png'
          alt='Image'
          className='position-absolute tw-end-100-px tw-mt-104-px d-lg-block d-none animation-pulse__two'
        />
        <Image
          width={78}
          height={78}
          src='/assets/images/shape/banner-shape2.png'
          alt='Image'
          className='position-absolute inset-inline-start-130px inset-block-start-130px z-n1 d-lg-block d-none animation-rotation__two'
        />
        <Image
          width={170}
          height={178}
          src='/assets/images/shape/our-services-three-shape1.png'
          alt='Image'
          className='position-absolute inset-inline-start-0 inset-block-end-0 d-lg-block d-none animation-Updowm__two'
        />
        <div className='container'>
          <div className='our-services-item d-flex align-items-center tw-gap-268-px justify-content-end '>
            <div className=' tw-pt-100-px'>
              <h2
                className='banner-item-title h1 tw-text-15 text-white fw-normal tw-mb-2 cursor-big counter'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                11.5k
              </h2>
              <span
                className='fw-medium tw-text-6 text-white'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Banking Card available
              </span>
            </div>
            <div className='py-80 d-flex align-items-center tw-gap-6 justify-content-end flex-wrap w-100'>
              <div
                className='tw-px-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <h2 className='fw-normal cursor-big tw-w-100px tw-h-100-px border-primary-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-8 counter'>
                  {/* CounterView */}
                  <CounterView start={0} end={12} title='+' />
                </h2>
                <h4 className='fw-normal tw-mb-2 '>Years of Excellent</h4>
                <span className='fw-normal tw-text-lg text-dark-500'>
                  Decades of Unmatched Excellence
                </span>
              </div>
              <div
                className='tw-px-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <h2 className='fw-normal cursor-big tw-w-100px tw-h-100-px border-primary-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-8 counter'>
                  {/* CounterView */}
                  <CounterView start={0} end={75} title='+' />
                </h2>
                <h4 className='fw-normal tw-mb-2 '>Expert Members</h4>
                <span className='fw-normal tw-text-lg text-dark-500'>
                  Decades of Unmatched Excellence
                </span>
              </div>
            </div>
          </div>
          <div className='our-serbices-card  bg-neutral-10 overflow-hidden tw-w-100vw '>
            <div className=' our-services-three-slider tw-pt-140px tw-p-left-120-px d-flex tw-gap-94-px tw-pb-140px'>
              <div className='our-services-text max-w-446'>
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
                  <h5 className='fw-normal text-primary-600'>Our Services</h5>
                </div>
                <h2
                  className='fw-normal text-dark-600 tw-mb-3 cursor-big'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  Get Your paynone online Banking
                </h2>
                <p
                  className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  Our services include secure online banking, mobile app access,
                  bill payments, fund transfers,
                </p>
                <div
                  className='position-relative z-1 max-w-152-px w-100'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <Link
                    href='/services-details'
                    className='our-services-three-link w-100 text-center tw-py-205 border-two-px-solid rounded-3 bg-main-600 text-dark-600 fw-semibold'
                  >
                    ALL SERVICES
                  </Link>
                </div>
              </div>
              {/* ================= Our Services section start==================== */}
              <div className='swiper servics-slider overflow-hidden'>
                <div className='swiper-wrapper d-flex'>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-duration={600}
                  >
                    <div className='our-services-card-three position-relative group group-item'>
                      <div className='bg-white rounded-4 w-100 group-hover-border-dark-600 tw-duration-400'>
                        <span className='circle-shape-three position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-neutral-10 rounded-circle' />
                        <button
                          type='button'
                          className='group-hover-bg-main-600 tw-duration-400 our-services-button w-16 h-16 bg-white rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                        >
                          <i className='ph-bold ph-arrow-up-right' />
                        </button>
                        <span className='tw-pt-605 tw-ps-605'>
                          <span className='tw-w-72px tw-h-72-px border-base-two-100 rounded-3 d-flex align-items-center justify-content-center tw-mb-805'>
                            <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-duration-400 group-hover-text-main-600 tw-text-10 text-base-two-600'>
                              <i className='ph ph-device-mobile' />
                            </span>
                          </span>
                        </span>
                        <div className='tw-px-8 tw-pb-10'>
                          <h4 className='fw-normal tw-mb-3 text-dark-600 line-clamp-2'>
                            Mobile Banking
                          </h4>
                          <p className='fw-normal tw-text-4 text-dark-500 line-clamp-4'>
                            Access your accounts, monitor transactions securely
                            from your mobile device.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <div className='our-services-card-three position-relative group group-item'>
                      <div className='bg-white rounded-4 w-100 group-hover-border-dark-600 tw-duration-400'>
                        <span className='circle-shape-three position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-neutral-10 rounded-circle' />
                        <button
                          type='button'
                          className='group-hover-bg-main-600 tw-duration-400 our-services-button w-16 h-16 bg-white rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                        >
                          <i className='ph-bold ph-arrow-up-right' />
                        </button>
                        <span className='tw-pt-605 tw-ps-605'>
                          <span className='tw-w-72px tw-h-72-px border-base-two-100 rounded-3 d-flex align-items-center justify-content-center tw-mb-805'>
                            <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-duration-400 group-hover-text-main-600 tw-text-10 text-base-two-600'>
                              <i className='ph ph-shield-check' />
                            </span>
                          </span>
                        </span>
                        <div className='tw-px-8 tw-pb-10'>
                          <h4 className='fw-normal tw-mb-3 text-dark-600 line-clamp-2'>
                            Secure Payment
                          </h4>
                          <p className='fw-normal tw-text-4 text-dark-500 line-clamp-4'>
                            Ensuring secure payments is our top priority. We
                            employ advanced encryption, multi-factor{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                  >
                    <div className='our-services-card-three position-relative group group-item'>
                      <div className='bg-white rounded-4 w-100 group-hover-border-dark-600 tw-duration-400'>
                        <span className='circle-shape-three position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-neutral-10 rounded-circle' />
                        <button
                          type='button'
                          className='group-hover-bg-main-600 tw-duration-400 our-services-button w-16 h-16 bg-white rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                        >
                          <i className='ph-bold ph-arrow-up-right' />
                        </button>
                        <span className='tw-pt-605 tw-ps-605'>
                          <span className='tw-w-72px tw-h-72-px border-base-two-100 rounded-3 d-flex align-items-center justify-content-center tw-mb-805'>
                            <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-duration-400 group-hover-text-main-600 tw-text-10 text-base-two-600'>
                              <i className='ph ph-piggy-bank' />
                            </span>
                          </span>
                        </span>
                        <div className='tw-px-8 tw-pb-10'>
                          <h4 className='fw-normal tw-mb-3 text-dark-600 line-clamp-2'>
                            Saving Account
                          </h4>
                          <p className='fw-normal tw-text-4 text-dark-500 line-clamp-4'>
                            Savings accounts are designed for individuals
                            securely while earning interest over time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-duration={1200}
                  >
                    <div className='our-services-card-three position-relative group group-item'>
                      <div className='bg-white rounded-4 w-100 group-hover-border-dark-600 tw-duration-400'>
                        <span className='circle-shape-three position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-neutral-10 rounded-circle' />
                        <button
                          type='button'
                          className='group-hover-bg-main-600 tw-duration-400 our-services-button w-16 h-16 bg-white rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                        >
                          <i className='ph-bold ph-arrow-up-right' />
                        </button>
                        <span className='tw-pt-605 tw-ps-605'>
                          <span className='tw-w-72px tw-h-72-px border-base-two-100 rounded-3 d-flex align-items-center justify-content-center tw-mb-805'>
                            <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center group-hover-bg-base-two-600 tw-duration-400 group-hover-text-main-600 tw-text-10 text-base-two-600'>
                              <i className='ph ph-shield-check' />
                            </span>
                          </span>
                        </span>
                        <div className='tw-px-8 tw-pb-10'>
                          <h4 className='fw-normal tw-mb-3 text-dark-600 line-clamp-2'>
                            Secure Payment
                          </h4>
                          <p className='fw-normal tw-text-4 text-dark-500 line-clamp-4'>
                            Ensuring secure payments is our top priority. We
                            employ advanced encryption, multi-factor{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================= Our Services section end==================== */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBankOne;
