const DashboardProfileCompleteness: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='bg-white tw-px-10 rounded-3 tw-py-8 w-100 tw-mb-6'>
        <div className='row gy-4'>
          <div className='col-lg-6'>
            <div className='bg-neutral-10 tw-py-11 rounded-3 w-100 h-100'>
              <div className=' w-100 h-100'>
                <div className='text-center '>
                  <span className='text-base-two-600 tw-text-15 tw-mb-5'>
                    <i className='ph-fill ph-wallet' />
                  </span>
                  <div>
                    <h2 className='fw-normal text-dark-600'>$8,756.00</h2>
                    <span className='text-dark-500 fw-normal tw-text-lg'>
                      Available Balance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='bg-neutral-10 tw-pt-11 w-100 rounded-3 w-100 h-100'>
              <div>
                <div className='text-center '>
                  <span className='text-base-two-600 tw-text-15 tw-mb-5'>
                    <i className='ph-fill ph-headset' />
                  </span>
                  <div>
                    <h4 className='fw-normal text-dark-600 tw-mb-2'>
                      Need Help?
                    </h4>
                    <p className='text-dark-500 fw-normal tw-text-lg'>
                      Need help with your account? <br /> Our experts are ready
                      to assist you!
                    </p>
                  </div>
                </div>
                <span className='border-bottom-neutral-05 w-100 tw-mb-6 tw-mt-6' />
                <div className='tw-px-3 tw-pb-3 d-flex align-items-center'>
                  <a
                    href='/dashboard-contact'
                    className='tw-py-3 fw-semibold text-white bg-main-gradient rounded-3 w-100 text-center'
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white tw-px-5 tw-py-5 rounded-3 tw-mb-6 '>
        <h4 className='fw-normal text-dark-600'>Profile Completeness</h4>
        <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
        <div className='row gy-4'>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-main tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                  <span className='tw-w-205 tw-h-205 bg-white rounded-circle' />
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-user-gear' />
              </span>
              <span className='fw-normal tw-text-xl text-white d-block'>
                Account Setup
              </span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-main2 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                  <span className='tw-w-205 tw-h-205 bg-white rounded-circle' />
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-identification-card' />
              </span>
              <span className='fw-normal tw-text-xl text-white'>
                KYC Verification
              </span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-main3 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                  <span className='tw-w-205 tw-h-205 bg-white rounded-circle' />
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-bank' />
              </span>
              <span className='fw-normal tw-text-xl text-white'>
                Bank Account Setup
              </span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-main-gradient tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-cardholder' />
              </span>
              <span className='fw-normal tw-text-xl text-white'>Card Setup</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white tw-px-5 tw-py-5 rounded-3 tw-mb-6 '>
        <h4 className='fw-normal text-dark-600'>Bank Details</h4>
        <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
        <div className='row gy-4'>
          <div className='col-12'>
            <div className='tw-mb-8'>
              <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                  Account Number
                </span>
                <p className='fw-medium tw-text-4 text-dark-500'>
                  211501467679
                </p>
              </div>
              <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                  Routing Number
                </span>
                <p className='fw-medium tw-text-4 text-dark-500'>
                  101019644
                </p>
              </div>
              <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                  Bank Name
                </span>
                <p className='fw-medium tw-text-4 text-dark-500'>
                  Lead Bank
                </p>
              </div>
              <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                  Account Type
                </span>
                <p className='fw-medium tw-text-4 text-dark-500'>
                  Checking
                </p>
              </div>
              <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                  Payment Methods
                </span>
                <p className='fw-medium tw-text-4 text-dark-500'>
                  <span className="bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto">ACH_PUSH</span>
                  &nbsp;
                  <span className="bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto">WIRE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileCompleteness;
