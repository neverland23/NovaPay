import Image from "next/image";
import CountryDropdown from "@/helper/CountryDropdown";

const DashboardSendMoney: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='bg-white tw-px-10 rounded-3 tw-py-8 w-100 tw-mb-6'>
        <div className='row gy-4'>
          <div className='col-lg-6'>
            <div className='bg-neutral-10 tw-pt-11 rounded-3 w-100 h-100'>
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
                <span className='border-bottom-neutral-05 w-100 tw-mb-8 tw-mt-8' />
                <div className='tw-px-3 tw-pb-3 d-flex align-items-center flex-wrap'>
                  <a
                    href='#'
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center hover-text-primary-600'
                  >
                    Total Withdraw
                  </a>
                  <a
                    href='#'
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center hover-text-primary-600'
                  >
                    Total Deposit
                  </a>
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
                    href='#'
                    className='tw-py-3 fw-semibold text-white bg-base-two-600 rounded-3 w-100 text-center'
                  >
                    Chate With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white tw-px-15 tw-py-15 rounded-3 tw-mb-6'>
        <ul
          className='nav nav-pills d-flex align-items-center tw-mb-15 tw-gap-3'
          id='pills-tab'
          role='tablist'
        >
          <li
            className='nav-item send-money-item max-w-270-px w-100 text-center'
            role='presentation'
          >
            <button
              className='nav-link active tw-text-4 tw-w-12 tw-h-12 rounded-circle tw-mb-3 mx-auto'
              id='pills-details-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-details'
              type='button'
              role='tab'
              aria-controls='pills-details'
              aria-selected='true'
            >
              1
            </button>
            <span className='text-dark-500 fw-normal tw-text-4'>Details</span>
          </li>
          <li
            className='nav-item send-money-item max-w-270-px w-100 text-center'
            role='presentation'
          >
            <button
              className='nav-link tw-text-4 tw-w-12 tw-h-12 rounded-circle tw-mb-3 mx-auto'
              id='pills-confirm-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-confirm'
              type='button'
              role='tab'
              aria-controls='pills-confirm'
              aria-selected='true'
            >
              2
            </button>
            <span className='text-dark-500 fw-normal tw-text-4'>Confirm</span>
          </li>
          <li
            className='nav-item send-money-item max-w-270-px w-100 text-center'
            role='presentation'
          >
            <button
              className='nav-link tw-text-4 tw-w-12 tw-h-12 rounded-circle tw-mb-3 mx-auto'
              id='pills-success-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-success'
              type='button'
              role='tab'
              aria-controls='pills-success'
              aria-selected='true'
            >
              3
            </button>
            <span className='text-dark-500 fw-normal tw-text-4'>Success</span>
          </li>
        </ul>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-details'
            role='tabpanel'
            aria-labelledby='pills-tabContent'
            tabIndex={0}
          >
            <div className='max-w-526-px w-100 mx-auto'>
              <div className='tw-mb-10 text-center'>
                <h4 className='fw-normal text-dark-600 tw-mb-2'>Send Money</h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Send your money on anytime, anywhere in the world.
                </p>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
                  Personal Details
                </span>
                <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />

                <div>
                  <div className='tw-mb-6'>
                    <div className='tw-mb-4'>
                      <label
                        htmlFor='Recipient'
                        className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
                      >
                        Recipient*
                      </label>
                      <input
                        name='address'
                        type='text'
                        id='Recipient'
                        placeholder='Your Address'
                        className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                      />
                    </div>

                    <div className='t-mb-4'>
                      <label
                        htmlFor='amount'
                        className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                      >
                        You Send*
                      </label>
                      <div className='position-relative'>
                        <input
                          name='send_amount'
                          placeholder='2.00.000'
                          id='amount'
                          className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                        />

                        {/* CountryDropdown */}
                        <CountryDropdown />
                      </div>
                    </div>
                    <div className='t-mb-4'>
                      <label
                        htmlFor='Gets'
                        className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                      >
                        Recipient Gets*
                      </label>
                      <div className='position-relative'>
                        <input
                          name='recipient_amount'
                          placeholder='2.00.000'
                          id='Gets'
                          className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                        />
                        {/* CountryDropdown */}
                        <CountryDropdown />
                      </div>
                    </div>

                    <p className='fw-normal tw-text-4 text-dark-500 text-center'>
                      The current exchange rate is
                      <span className='text-dark-700 fw-medium'>
                        1 USD = 1.42030 AUD
                      </span>
                    </p>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
                    <span className='fw-normal tw-text-4 text-dark-500'>
                      Total Fees
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      7.21 USD
                    </span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      Total To Pay
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      1,000.00 USD
                    </span>
                  </div>
                  <div className='position-relative w-100 z-1 h-100'>
                    <button className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'>
                      COUNTINUE
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-confirm'
            role='tabpanel'
            aria-labelledby='pills-confirm-tab'
            tabIndex={0}
          >
            <div className='max-w-526-px w-100 mx-auto'>
              <div className='tw-mb-10 text-center'>
                <h4 className='fw-normal text-dark-600 tw-mb-2'>Send Money</h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  You are sending money to
                  <span className='text-dark-700 fw-semibold'>
                    kenzi.@example.com
                  </span>
                </p>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
                  Payment Description
                </span>
                <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />

                <div>
                  <div className='tw-mb-6'>
                    <div className='tw-mb-4'>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Description*
                      </span>
                      <textarea
                        name='description'
                        placeholder='Payment Description'
                        className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pe-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 tw-h-100-px'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <span className='border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6 fw-semibold tw-text-lg text-dark-600 w-100 text-center'>
                    Confirm Details
                  </span>
                  <div className='border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
                    <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-4'>
                      <span className='fw-normal tw-text-4 text-dark-500'>
                        Send Amount
                      </span>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        1,000.00 USD
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap '>
                      <span className='fw-normal tw-text-4 text-dark-500'>
                        Total Fees
                      </span>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        2.34 USD
                      </span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      Total To Pay
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      1,000.00 USD
                    </span>
                  </div>
                  <div className='position-relative w-100 z-1 h-100'>
                    <button className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'>
                      SEND MONEY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-success'
            role='tabpanel'
            aria-labelledby='pills-success-tab'
            tabIndex={0}
          >
            <div className='max-w-526-px w-100 mx-auto'>
              <div className='tw-mb-10 text-center'>
                <h4 className='fw-normal text-dark-600'>Send Money</h4>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='tw-mb-6 d-flex justify-content-center '>
                  <Image
                    width={60}
                    height={60}
                    src='/assets/images/icon/check-circle-icon1.png'
                    alt='Image'
                  />
                </span>
                <div className='text-center tw-mb-6'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2'>Success</h4>
                  <span className='fw-normal tw-text-lg text-dark-500'>
                    Transactions Complete
                  </span>
                </div>
                <p className='fw-normal tw-text-lg text-dark-500 tw-mb-6 text-center'>
                  You&apos;ve Succesfully sent
                  <span className='fw-semibold'>$1000</span>
                  to
                  <span className='fw-semibold'>kenzi.@example.com</span>
                  See transaction details under
                  <a
                    href='#'
                    className='text-primary-600 border-primary-600-1px border-top-0 border-start-0 border-end-0 hover-text-primary-600'
                  >
                    Activity.
                  </a>
                </p>
                <div className='position-relative w-100 z-1 h-100'>
                  <button
                    type='button'
                    className='send-details-button text-center fw-semibold tw-text-lg text-white bg-base-two-600 rounded-3 border-two-px-solid w-100 tw-py-3'
                  >
                    SEND MONEY AGAIN
                  </button>
                </div>
                <div className='d-flex align-items-center tw-gap-2 justify-content-center tw-mt-6'>
                  <span className='tw-text-6 text-primary-600 '>
                    <i className='ph ph-printer' />
                  </span>
                  <span className='text-primary-600 fw-semibold tw-text-lg'>
                    Print
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSendMoney;
