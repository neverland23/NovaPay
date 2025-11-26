import Image from "next/image";
import Link from "next/link";

const PricingPlanOne: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-9  justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-616'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-4'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600'>Our Pricing Plan</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              We Charge As Little As Possible. No Subscription Fee
            </h2>
          </div>
          <div className='text-end'>
            <div
              className='d-flex align-items-center tw-gap-3 tw-mb-5'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='fw-medium tw-text-lg text-dark-600'>
                Billed monthly
              </span>
              <div className='form-check form-switch'>
                <input
                  className='form-check-input bg-base-two-600 w-10 h-6'
                  type='checkbox'
                  role='switch'
                  id='switchCheckChecked'
                  defaultChecked={false}
                />
              </div>
              <span className='fw-medium tw-text-lg text-dark-600'>
                Billed yearly
              </span>
            </div>
            <span
              className='fw-normal tw-text-lg text-dark-500'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              (Save up to 20%)
            </span>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h6 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Subscription
                  </h6>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h2 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      $39
                    </h2>
                    <span className='tw-text-4 text-dark-600 group-hover-text-white tw-duration-500'>
                      / PER MONTH
                    </span>
                  </div>
                  <div className='position-relative z-2'>
                    <Link
                      href='/pricing-plan'
                      className='our-pricing-plan-other-link fw-semibold tw-text-lg text-dark-700 tw-py-3 bg-main-600 border-two-px-solid w-100 text-center tw-rounded-md hover-text-dark-600'
                    >
                      CHOOSE THIS PLAN
                    </Link>
                  </div>
                </div>
                <span className='bg-neutral-100 w-100 tw-h-px tw-mt-8 tw-mb-8' />
                <div className='tw-px-12 tw-pb-12'>
                  <div className='bg-neutral-10 tw-rounded-xl tw-px-6 tw-py-6 group-hover-bg-neutral-200 tw-duration-500'>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        1% fee per transaction
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Access to business features
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        50+ integrations
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Advanced reporting
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Up to 10 individual users
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={1000}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h6 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Tiered-Based
                  </h6>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h2 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      $59
                    </h2>
                    <span className='tw-text-4 text-dark-600 group-hover-text-white tw-duration-500'>
                      {" "}
                      / PER MONTH
                    </span>
                  </div>
                  <div className='position-relative z-2'>
                    <Link
                      href='/pricing-plan'
                      className='our-pricing-plan-other-link fw-semibold tw-text-lg text-dark-700 tw-py-3 bg-main-600 border-two-px-solid w-100 text-center tw-rounded-md hover-text-dark-600'
                    >
                      CHOOSE THIS PLAN
                    </Link>
                  </div>
                </div>
                <span className='bg-neutral-100 w-100 tw-h-px tw-mt-8 tw-mb-8' />
                <div className='tw-px-12 tw-pb-12'>
                  <div className='bg-neutral-10 tw-rounded-xl tw-px-6 tw-py-6 group-hover-bg-neutral-200 tw-duration-500'>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        1% fee per transaction
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Access to business features
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        50+ integrations
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Advanced reporting
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Up to 10 individual users
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={1200}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h6 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Interchange-Plus
                  </h6>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h2 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      $69
                    </h2>
                    <span className='tw-text-4 text-dark-600 group-hover-text-white tw-duration-500'>
                      {" "}
                      / PER MONTH
                    </span>
                  </div>
                  <div className='position-relative z-2'>
                    <Link
                      href='/pricing-plan'
                      className='our-pricing-plan-other-link fw-semibold tw-text-lg text-dark-700 tw-py-3 bg-main-600 border-two-px-solid w-100 text-center tw-rounded-md hover-text-dark-600'
                    >
                      CHOOSE THIS PLAN
                    </Link>
                  </div>
                </div>
                <span className='bg-neutral-100 w-100 tw-h-px tw-mt-8 tw-mb-8' />
                <div className='tw-px-12 tw-pb-12'>
                  <div className='bg-neutral-10 tw-rounded-xl tw-px-6 tw-py-6 group-hover-bg-neutral-200 tw-duration-500'>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        1% fee per transaction
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Access to business features
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        50+ integrations
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Advanced reporting
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Up to 10 individual users
                      </span>
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

export default PricingPlanOne;
