import Image from "next/image";
const DashboardMyProfile: React.FC = () => {
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
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center'
                  >
                    Total Withdraw
                  </a>
                  <a
                    href='#'
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center'
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
                    Chat With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              Payment Methods
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
              Notifications
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
                Credit or Debit Cards
                <span className='text-base-two-100'>(for payments)</span>
              </h4>
              <div className='row gy-4'>
                <div className='col-xl-4 col-lg-6'>
                  <span>
                    <Image
                      width={280}
                      height={176}
                      src='/assets/images/thumbs/payment-methods-img1.png'
                      alt='Image'
                    />
                  </span>
                </div>
                <div className='col-xl-4 col-lg-6'>
                  <span>
                    <Image
                      width={280}
                      height={176}
                      src='/assets/images/thumbs/payment-methods-img2.png'
                      alt='Image'
                    />
                  </span>
                </div>
                <div className='col-xl-4 col-lg-6'>
                  <span>
                    <Image
                      width={280}
                      height={176}
                      src='/assets/images/thumbs/payment-methods-img3.png'
                      alt='Image'
                    />
                  </span>
                </div>
                <div className='col-xl-4 col-lg-6'>
                  <span>
                    <Image
                      width={280}
                      height={176}
                      src='/assets/images/thumbs/payment-methods-img4.png'
                      alt='Image'
                    />
                  </span>
                </div>
                <div className='col-xl-4 col-lg-6'>
                  <div className='bg-neutral-10 rounded-3 tw-px-705 tw-py-10 text-center w-100 h-100'>
                    <span className='tw-text-6 text-dark-600 d-block tw-mb-5'>
                      +
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-600'>
                      Add New Card
                    </span>
                  </div>
                </div>
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
                  Notifications
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Select subscriptions to be delivered to
                  <span className='fw-semibold text-dark-600'>
                    kenzi.lawson@example.com
                  </span>
                </p>
              </div>
              <div className='tw-mb-8'>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Announcements
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Stay updated with the latest features, announcements, and
                      exciting news firsthand.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_5'
                      defaultChecked={false}
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Send payment
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Receive an email notification whenever you make a payment.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_4'
                      defaultChecked={false}
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Receive a payment
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Send me an email when I receive a payment.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_0'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Request payment
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Notify me via email whenever I initiate a payment request.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_1'
                      defaultChecked={false}
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Have a problem with a payment
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Notify me via email if there&apos;s an issue with a
                      payment.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_2'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Special Offers
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Get exclusive last-minute deals directly from us.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheck_3'
                      defaultChecked={false}
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
                  <div className=''>
                    <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
                      Review Surveys
                    </span>
                    <p className='fw-medium tw-text-4 text-dark-500'>
                      Tell us about your payment experience to help guide other
                      users.
                    </p>
                  </div>
                  <div className='form-check form-switch'>
                    <input
                      className='form-check-input w-10 h-6'
                      type='checkbox'
                      role='switch'
                      id='switchCheckDefaultttt'
                    />
                  </div>
                </div>
              </div>
              <div className=''>
                <button
                  type='button'
                  className='bg-base-two-600 text-white tw-px-6 tw-py-3 rounded-3'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMyProfile;
