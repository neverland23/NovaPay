import Image from "next/image";
import Link from "next/link";

interface ServicesProps {
  moreBtnHidden?: boolean | false;
}

const Services: React.FC<ServicesProps> = ({ moreBtnHidden }) => {
  return (
    <>
      <section className='py-140 z-1 overflow-hidden'>
        <div className='container'>
          <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap tw-mb-80-px'>
            <div className='max-w-570'>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
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
                <h5 className='text-primary-600 fw-normal'>Our Services</h5>
              </div>
              <h2
                className='fw-normal h1 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Innovative Services For Financial Success
              </h2>
            </div>
            {
              moreBtnHidden
              ? null
              : (
                <div className='max-w-370'>
                  <p
                    className='fw-normal text-dark-500 tw-text-lg tw-mb-8'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                  >
                    Experience cutting-edge financial maximize growth, &amp; ensure
                    long-term stability.
                  </p>
                  <div
                    className='position-relative max-w-160-px w-100'
                    data-aos='fade-up'
                    data-aos-duration={1200}
                  >
                    <Link
                      href='/our-services'
                      className='our-serbices-item-link fw-semibold tw-text-lg text-white tw-py-205 bg-main-gradient w-100 text-center rounded-3 hover-text-white tw-duration-500'
                    >
                      ALL SERVICES
                    </Link>
                  </div>
                </div>
                )
            }
            
          </div>
          <div className='row gy-4'>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='our-services-card position-relative group'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <span className='circle-shape position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-white rounded-circle' />
                <button
                  type='button'
                  className='group-hover-bg-main-600 tw-transition-03-secend our-services-button w-16 h-16 bg-neutral-10 rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </button>
                <div className='tw-px-8 tw-py-8 group-hover-bg-base-two-600 tw-transition-03-secend rounded-3'>
                  <span className='group-hover-bg-main-600 tw-transition-03-secend group-hover-text-dark-600 our-services-bank w-15 h-15 bg-base-two-600 rounded-3 tw-text-805 text-white align-items-center justify-content-center d-flex tw-mb-10'>
                    <Image
                      width={34}
                      height={34}
                      src='/assets/images/icon/services-icon-img4.png'
                      alt='Image'
                      className='text-white'
                    />
                  </span>
                  <div className='max-w-242'>
                    <h4 className='group-hover-text-white tw-transition-03-secend our-services-title fw-normal text-dark-700 tw-mb-3 cursor-big'>
                      Virtual Cards for Global Fiat & Crypto Spending
                    </h4>
                    <p className='group-hover-text-white tw-transition-03-secend our-services-text text-dark-500 fw-normal tw-text-4'>
                      Spend your balance anywhere online with instantly generated virtual cards ready for global platforms and marketplaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='our-services-card position-relative group'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='circle-shape position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-white rounded-circle' />
                <button
                  type='button'
                  className='group-hover-bg-main-600 tw-transition-03-secend our-services-button w-16 h-16 bg-neutral-10 rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </button>
                <div className='tw-px-8 tw-py-8 group-hover-bg-base-two-600 tw-transition-03-secend rounded-3'>
                  <span className='group-hover-bg-main-600 tw-transition-03-secend group-hover-text-dark-600 our-services-bank w-15 h-15 bg-base-two-600 rounded-3 tw-text-805 text-white align-items-center justify-content-center d-flex tw-mb-10'>
                    <Image
                      width={32}
                      height={39}
                      src='/assets/images/icon/services-icon-img1.png'
                      alt='Image'
                      className='text-white'
                    />
                  </span>
                  <div className='max-w-242'>
                    <h4 className='group-hover-text-white tw-transition-03-secend our-services-title fw-normal text-dark-700 tw-mb-3 cursor-big'>
                      Earn High-Yield Returns on Your Balance
                    </h4>
                    <p className='group-hover-text-white tw-transition-03-secend our-services-text text-dark-500 fw-normal tw-text-4'>
                      Let your funds grow effortlessly. Earn up to 10% annual interest simply by holding money in your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='our-services-card position-relative group'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <span className='circle-shape position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-white rounded-circle' />
                <button
                  type='button'
                  className='group-hover-bg-main-600 tw-transition-03-secend our-services-button w-16 h-16 bg-neutral-10 rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </button>
                <div className='tw-px-8 tw-py-8 group-hover-bg-base-two-600 tw-transition-03-secend rounded-3'>
                  <span className='group-hover-bg-main-600 tw-transition-03-secend group-hover-text-dark-600 our-services-bank w-15 h-15 bg-base-two-600 rounded-3 tw-text-805 text-white align-items-center justify-content-center d-flex tw-mb-10'>
                    <Image
                      width={34}
                      height={31}
                      src='/assets/images/icon/services-icon-img2.png'
                      alt='Image'
                      className='text-white'
                    />
                  </span>
                  <div className='max-w-242'>
                    <h4 className='group-hover-text-white tw-transition-03-secend our-services-title fw-normal text-dark-700 tw-mb-3 cursor-big'>
                      Scale Your Business with Bulk Payments
                    </h4>
                    <p className='group-hover-text-white tw-transition-03-secend our-services-text text-dark-500 fw-normal tw-text-4'>
                      Simplify payouts with USD and EUR accounts designed for high-volume, multi-recipient transfers—perfect for global organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='our-services-card position-relative group'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='circle-shape position-absolute tw-transition-03-secend inset-inline-end-0px inset-block-start-0px tw-w-72px tw-h-72-px bg-white rounded-circle' />
                <button
                  type='button'
                  className='group-hover-bg-main-600 tw-transition-03-secend our-services-button w-16 h-16 bg-neutral-10 rounded-circle tw-text-8 text-dark-600 d-flex align-items-center justify-content-center position-absolute inset-block-start-0px inset-inline-end-0px'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </button>
                <div className='tw-px-8 tw-py-8 group-hover-bg-base-two-600 tw-transition-03-secend rounded-3'>
                  <span className='group-hover-bg-main-600 tw-transition-03-secend group-hover-text-dark-600 our-services-bank w-15 h-15 bg-base-two-600 rounded-3 tw-text-805 text-white align-items-center justify-content-center d-flex tw-mb-10'>
                    <Image
                      width={38}
                      height={38}
                      src='/assets/images/icon/services-icon-img3.png'
                      alt='Image'
                      className='text-white'
                    />
                  </span>
                  <div className='max-w-242'>
                    <h4 className='group-hover-text-white tw-transition-03-secend our-services-title fw-normal text-dark-700 tw-mb-3 cursor-big'>
                      Multi-Currency Foreign Accounts
                    </h4>
                    <p className='group-hover-text-white tw-transition-03-secend our-services-text text-dark-500 fw-normal tw-text-4'>
                      Open dedicated USD, EUR, and GBP accounts to send and receive global payments through ACH, Wire, or SEPA with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
