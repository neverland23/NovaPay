import Image from "next/image";
const DashboardMyProfile: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='bg-white tw-px-5 tw-py-5 rounded-3 tw-mb-6'>
        <ul
          className='nav nav-pills d-flex align-items-center tw-gap-3'
          id='pills-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active px-80 tw-py-3 max-w-222-px w-100'
              id='pills-account-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-account'
              type='button'
              role='tab'
              aria-controls='pills-account'
              aria-selected='true'
            >
              Account
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link px-80 tw-py-3'
              id='pills-security-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-security'
              type='button'
              role='tab'
              aria-controls='pills-security'
              aria-selected='true'
            >
              Security
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link tw-px-12 tw-py-3'
              id='pills-payment-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-payment'
              type='button'
              role='tab'
              aria-controls='pills-payment'
              aria-selected='true'
            >
              Wallet
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link tw-px-72-px tw-py-3'
              id='pills-notifications-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-notifications'
              type='button'
              role='tab'
              aria-controls='pills-notifications'
              aria-selected='true'
            >
              Bank
            </button>
          </li>
        </ul>
      </div>
      <div className='bg-white rounded-3'>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-account'
            role='tabpanel'
            aria-labelledby='pills-account-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <h4 className='fw-normal text-dark-600 tw-mb-8'>
                Personal Details
              </h4>
              <div>
                <div className='row gy-4'>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        First Name*
                      </span>
                      <input
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Last Name*
                      </span>
                      <input
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Phone Number*
                      </span>
                      <input
                        name='phoneNumber'
                        type='text'
                        placeholder='Number'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Email Address*
                      </span>
                      <input
                        name='email'
                        type='text'
                        placeholder='Email'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        City*
                      </span>
                      <input
                        name='city'
                        type='text'
                        placeholder='Bridgeport'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        State/Country*
                      </span>
                      <input
                        name='state'
                        type='text'
                        placeholder='WA'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Postcode*
                      </span>
                      <input
                        name='postcode'
                        type='text'
                        placeholder={"310005"}
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <span className='fw-normal tw-text-4 text-dark-600 tw-mb-3'>
                        Country*
                      </span>
                      <input
                        name='country'
                        type='text'
                        placeholder='United States'
                        className='text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600'
                      />
                    </div>
                  </div>
                </div>
                <button className='bg-base-two-600 text-white fw-semibold tw-text-lg tw-px-6 tw-py-3 tw-rounded-xl tw-mt-6'>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-security'
            role='tabpanel'
            aria-labelledby='pills-security-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <div className='row gy-4'>
                <div className='col-xl-6'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      <span className='tw-text-xl text-primary-600'>
                        <i className='ph-bold ph-pencil-simple-line' />
                      </span>
                      <span className='fw-normal tw-text-4 text-primary-600'>
                        EDIT
                      </span>
                    </div>
                    <div className='text-center'>
                      <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                        Password
                      </h4>
                      <p className='fw-semibold tw-text-lg text-dark-500 tw-mb-105'>
                        Create or update your password
                      </p>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        -&nbsp;Last changed: 15 May, 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      <span className='tw-text-xl text-primary-600'>
                        <i className='ph-bold ph-pencil-simple-line' />
                      </span>
                      <span className='fw-normal tw-text-4 text-primary-600'>
                        EDIT
                      </span>
                    </div>
                    <div className='text-center'>
                      <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                        Security Questions
                      </h4>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        For your security, select 3 verification questions to
                        help confirm your identity when needed.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='bg-neutral-10 w-100 rounded-3 tw-px-6 tw-pt-6 tw-pb-8'>
                    <div className='d-flex align-items-center tw-gap-2 text-end justify-content-end tw-mb-8'>
                      <span className='tw-text-xl text-primary-600'>
                        <i className='ph-bold ph-wrench' />
                      </span>
                      <span className='fw-normal tw-text-4 text-primary-600'>
                        SETUP
                      </span>
                    </div>
                    <div className='text-center'>
                      <h4 className='fw-normal text-dark-600 tw-mb-3 '>
                        2-Step Verification
                      </h4>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        Enhance your account security with a one-time code
                        alongside your password for every login attempt.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-payment'
            role='tabpanel'
            aria-labelledby='pills-payment-tab'
            tabIndex={0}
          >
            <div className='tw-px-10 tw-py-8'>
              <h4 className='text-dark-600 fw-normal tw-mb-8'>
                Wallet
                <span className='text-base-two-100'>(for payments)</span>
              </h4>
              <div className='row gy-4'>
                {/* here please create editable form section */}
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-notifications'
            role='tabpanel'
            aria-labelledby='pills-notifications-tab'
            tabIndex={0}
          >
            <div className='bg-white tw-rounded-xl w-100 tw-px-15 tw-py-15 h-100'>
              <div className='tw-mb-15'>
                <h4 className='fw-normal text-dark-600 tw-mb-3'>
                  Bank Information
                </h4>
              </div>
              <div className='tw-mb-8'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyProfile;
