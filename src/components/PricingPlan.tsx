import Image from "next/image";
import Link from "next/link";

const PricingPlan: React.FC = () => {
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
        </div>
        <div className='row gy-4'>
          <div className='col-lg-6 col-md-12'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h3 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Individual
                  </h3>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h5 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      An individual account provides one personal bank account for your own transactions.
                    </h5>
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
                        ACH Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Wire Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        A one-time $150 registration fee is required.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        No transaction limits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Service Fee: 4%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='group' data-aos='fade-up' data-aos-duration={1200}>
              <div className='our-pricing-plan-card border-neutral-100 border tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <div className='tw-px-12 tw-pt-12'>
                  <h3 className='fw-normal text-dark-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    Team - Plus
                  </h3>
                  <div className='d-flex align-items-center tw-gap-1 tw-mb-8 '>
                    <h5 className='fw-normal cursor-big group-hover-text-white tw-duration-500'>
                      A team account lets you add unlimited sub-accounts and manage all transactions centrally with built-in analytics.
                    </h5>
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
                        ACH Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Wire Deposits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        A one-time $300 registration fee is required.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        No transaction limits
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Add unlimited sub-accounts.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Manage team transactions with advanced insights.
                      </span>
                    </div>
                    <span className='bg-neutral-100 w-100 tw-h-px tw-mt-4 tw-mb-4' />
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-w-6 tw-h-6 bg-base-two-600 text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 group-hover-bg-neutral-30 tw-duration-500 tw-text-sm'>
                        <i className='ph ph-check' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-500 group-hover-text-white tw-duration-500'>
                        Service Fee: 3.5%
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

export default PricingPlan;
