import Image from "next/image";
import CountryDropdown from "@/helper/CountryDropdown";

const DashboardRequestMoney: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
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
                <h4 className='fw-normal text-dark-600 tw-mb-2'>
                  Request Money
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Receive payments anytime, with ease &amp; security worldwide.
                </p>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
                  Payer Details
                </span>
                <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
                <div>
                  <div className='tw-mb-4'>
                    <label
                      htmlFor='Name'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
                    >
                      Name*
                    </label>
                    <input
                      name='name'
                      type='text'
                      id='Name'
                      placeholder='Enter Name'
                      className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
                    />
                  </div>
                  <div className='tw-mb-4'>
                    <label
                      htmlFor='Email'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
                    >
                      Email*
                    </label>
                    <input
                      name='email'
                      type='text'
                      id='Email'
                      placeholder='Your Emial'
                      className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
                    />
                  </div>
                  <div className='tw-mb-4'>
                    <label
                      htmlFor='Country'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
                    >
                      Country*
                    </label>
                    <select
                      name='country'
                      id='Country'
                      className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-ps-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 border-neutral-10 border'
                    >
                      <option value={1}>Bangladesh</option>
                      <option value={6}>Bhutan</option>
                      <option value={7}>Maldives</option>
                      <option value={8}>Afghanistan</option>
                      <option value={9}>China</option>
                    </select>
                  </div>
                  <div className='tw-mb-4'>
                    <label
                      htmlFor='amount'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                    >
                      You Send*
                    </label>
                    <div className='position-relative'>
                      <input
                        name='amount'
                        type='text'
                        placeholder='2.00.000'
                        id='amount'
                        className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                      />
                      {/* CountryDropdown */}
                      <CountryDropdown />
                    </div>
                  </div>
                  <div className='tw-mb-4'>
                    <label
                      htmlFor='Description'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-3'
                    >
                      Description*
                    </label>
                    <textarea
                      name='description'
                      id='Description'
                      placeholder='Payment Description'
                      className='fw-normal tw-text-4 text-dark-500 tw-py-3 tw-ps-4 tw-pe-1 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 tw-h-100-px border-neutral-10 border'
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <input
                      name='date'
                      type='date'
                      className='bg-white tw-px-4 tw-py-3 bg-white w-100 rounded-3 border-neutral-10 border focus-visible-border-main-600'
                    />
                  </div>
                  <div className='position-relative w-100 z-1 h-100 tw-mt-6'>
                    <button className='send-details-button text-center fw-semibold tw-text-lg text-white bg-main-gradient rounded-3 w-100 tw-py-3'>
                      CONTINUE
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
                <h4 className='fw-normal text-dark-600 tw-mb-2'>
                  Request Money
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  You are sending money to
                  <span className='text-dark-700 fw-semibold'>
                    kenzi.@example.com
                  </span>
                </p>
              </div>
              <div className='bg-neutral-10 tw-px-8 tw-py-8 rounded-3'>
                <span className='fw-semibold tw-text-xl text-dark-600 justify-content-center d-flex'>
                  Confirm Details
                </span>
                <span className='bg-base-two-10 w-100 tw-h-px tw-mb-6 tw-mt-6' />
                <div className='tw-mb-6'>
                  <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-normal tw-text-lg text-dark-500 max-w-152-px w-100'>
                      Name:
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      Leslie Alexander
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-normal tw-text-lg text-dark-500 max-w-152-px w-100'>
                      Email:
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      kenzi.@example.com
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-normal tw-text-lg text-dark-500 max-w-152-px w-100'>
                      Country:
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      France
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-3 flex-wrap tw-mb-6'>
                    <span className='fw-normal tw-text-lg text-dark-500 max-w-152-px w-100'>
                      Payment due by:
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      5,000.00 USD
                    </span>
                  </div>
                  <div className='d-flex tw-gap-3 tw-mb-6'>
                    <span className='fw-normal tw-text-lg text-dark-500 max-w-152-px w-100'>
                      Description:
                    </span>
                    <p className='fw-normal tw-text-lg text-dark-500 max-w-282-px w-100 flex-wrap '>
                      Effortlessly request money from friends, family, or
                      clients anytime, anywhere. Secure, fast, and hassle-free
                      transactions.
                    </p>
                  </div>
                </div>
                <div className='position-relative w-100 z-1 h-100'>
                  <button
                    type='button'
                    className='send-details-button text-center fw-semibold tw-text-lg text-white bg-main-gradient rounded-3 w-100 tw-py-3'
                  >
                    REQUEST MONEY
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
                    REQUEST MONEY AGAIN
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

export default DashboardRequestMoney;
