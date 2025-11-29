import Image from "next/image";
import CountryDropdown from "@/helper/CountryDropdown";

const DashboardWithdrawMoney: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1   '>
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
            aria-labelledby='pills-details'
            tabIndex={0}
          >
            <div className='max-w-526-px w-100 mx-auto'>
              <div className='tw-mb-10 text-center'>
                <h4 className='fw-normal text-dark-600'>Withdraw Money</h4>
              </div>

              <div>
                <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                  <div className='bg-main-gradient rounded-3 tw-py-8 tw-px-6 text-center'>
                    <h3 className='fw-normal text-white tw-mb-1'>$3400.00</h3>
                    <span className='fw-normal tw-text-sm text-white tw-mb-4 d-block'>
                      Available Balance
                    </span>
                    <button
                      type='button'
                      className='tw-px-3 tw-py-2 border-white border rounded-pill text-white'
                    >
                      WITHDRAW FULL AMOUNT
                    </button>
                  </div>
                  <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
                  <div className='tw-mb-6'>
                    <div className='tw-mb-6'>
                      <label className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Withdraw to*
                      </label>
                      <select
                        name='payment'
                        className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pr-80-px border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                      >
                        <option value={1}>Sonar Bank _000-098-568-6598</option>
                        <option value={2}>
                          Oceanic Bank _123-456-789-0123
                        </option>
                        <option value={3}>Unity Trust _321-654-987-0321</option>
                        <option value={4}>
                          Metro Credit Union _555-333-222-1111
                        </option>
                        <option value={5}>
                          First National _009-876-543-2100
                        </option>
                      </select>
                    </div>
                    <div className='tw-mb-6'>
                      <label
                        htmlFor='amount'
                        className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                      >
                        Amount*
                      </label>
                      <div className='position-relative'>
                        <input
                          type='number'
                          name='amount'
                          placeholder='2.00.000'
                          id='amount'
                          className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                        />
                        {/* CountryDropdown */}
                        <CountryDropdown />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap border-neutral-50  border-start-0 border-end-0 tw-py-4 tw-mb-6'>
                    <span className='fw-normal tw-text-4 text-dark-500'>
                      Transactions fees
                    </span>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='fw-normal tw-text-4 text-dark-600 text-decoration-line-through'>
                        2.00 USD
                      </span>
                      <button
                        type='button'
                        className='fw-normal tw-text-sm text-white bg-base-two-600 tw-px-2 tw-py-105 rounded-2'
                      >
                        Free
                      </button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      Amount to Withdraw
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      2,000.00 USD
                    </span>
                  </div>
                  <div className='position-relative w-100 z-1 h-100'>
                    <button className='send-details-button text-center fw-semibold tw-text-lg text-white bg-main-gradient rounded-3 w-100 tw-py-3'>
                      COUNTINUE
                    </button>
                  </div>
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
                <h4 className='fw-normal text-dark-600'>Withdraw Money</h4>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
                <div className='tw-mb-6'>
                  <div className='bg-white tw-px-6 tw-py-6 rounded-3 tw-mb-6 text-center'>
                    <span className='fw-normal tw-text-lg text-dark-500 d-block tw-mb-3'>
                      You are Withdraw money
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600 d-block tw-mb-3'>
                      TO
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      Sonar Bank _000-098-568-6598
                    </span>
                  </div>
                  <div>
                    <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-4'>
                      <span className='fw-normal tw-text-4 text-dark-500'>
                        Amount to Withdraw
                      </span>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        2,000.00 USD
                      </span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap'>
                      <span className='fw-normal tw-text-4 text-dark-500'>
                        Transactions fees
                      </span>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        0.00 USD
                      </span>
                    </div>
                    <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
                    <div className='d-flex align-items-center justify-content-between tw-gap-3'>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        Total
                      </span>
                      <span className='fw-semibold tw-text-4 text-dark-600'>
                        2,000.00 USD
                      </span>
                    </div>
                  </div>
                </div>
                <div className='position-relative w-100 z-1 h-100'>
                  <button
                    type='button'
                    className='send-details-button text-center fw-semibold tw-text-lg text-white bg-main-gradient rounded-3 w-100 tw-py-3'
                  >
                    CONFIRM
                  </button>
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
                <h4 className='fw-normal text-dark-600'>Withdraw Money</h4>
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
                    className='text-primary-600 border-primary-600-1px border-top-0 border-start-0 border-end-0'
                  >
                    Activity.
                  </a>
                </p>
                <div className='position-relative w-100 z-1 h-100'>
                  <button
                    type='button'
                    className='send-details-button text-center fw-semibold tw-text-lg text-white bg-main-gradient rounded-3 w-100 tw-py-3'
                  >
                    WITHDRAW MONEY AGAIN
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

export default DashboardWithdrawMoney;
