import CountryDropdown from "../helper/CountryDropdown";

const RequestSectionOne: React.FC = () => {
  return (
    <>
      <div className='h-455px bg-base-two-600' />
      <div
        className='z-2 margin-top--330px overflow-hidden'
        data-aos='zoom-in'
        data-aos-duration={1000}
      >
        <div className='container'>
          <div className='max-w-1076 bg-white justify-content-center align-items-center mx-auto'>
            <ul
              className='nav nav-pills bg-main-600 text-center d-flex align-items-center justify-content-center tw-mb-8'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link__one active rounded-0 tw-px-3 tw-py-3'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  Send
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link__one rounded-0 tw-px-3 tw-py-3 '
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                  role='tab'
                  aria-controls='pills-profile'
                  aria-selected='false'
                >
                  Request
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
                tabIndex={0}
              >
                <div className='tw-px-8 tw-pb-8 z-2'>
                  <div className='tw-mb-6 text-center'>
                    <h4 className='fw-normal tw-mb-2 cursor-big'>Send Money</h4>
                    <p className='fw-normal tw-text-lg text-dark-500'>
                      Send your payment on anytime, anywhere in the world.
                    </p>
                  </div>
                  <div className='tw-mb-6'>
                    <div className='row gy-4'>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='Name'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Name*
                        </label>
                        <input
                          name='name'
                          id='Name'
                          type='text'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                          placeholder='Enter Name'
                        />
                      </div>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='email*'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Email*
                        </label>
                        <input
                          name='email'
                          type='email'
                          id='email*'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 focus-border-main-600'
                          placeholder='Enter Email Address'
                        />
                      </div>
                      <div className='col-lg-6'>
                        <span className='fw-normal tw-text-4 text-dark-600 tw-mb-205'>
                          Country*
                        </span>
                        <select
                          name='country'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                        >
                          <option value={1}>Pakistan</option>
                          <option value={2}>Russia</option>
                          <option value={3}>South Africa</option>
                          <option value={4}>South Korea</option>
                          <option value={5}>Bangldesh</option>
                        </select>
                      </div>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='amount'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                        >
                          Amount*
                        </label>
                        <div className='position-relative'>
                          <input
                            name='amount'
                            placeholder='2.00.000'
                            id='amount'
                            className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                          />
                          {/* CountryDropdown */}
                          <CountryDropdown />
                        </div>
                      </div>
                      <div className='col-12'>
                        <label
                          htmlFor='Description'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Description*
                        </label>
                        <textarea
                          id='Description'
                          className='tw-px-3 tw-pt-3 tw-pb-17 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                          placeholder='Payment Description'
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className='position-relative z-1 tw-mt-6'>
                      <button className='request-button text-white tw-text-lg fw-semibold bg-base-two-600 tw-py-3 w-100 border-base-two-600 rounded-2'>
                        REQUEST PAYMENT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-profile'
                role='tabpanel'
                aria-labelledby='pills-profile-tab'
                tabIndex={0}
              >
                <div className='tw-px-8 tw-pb-8 z-2'>
                  <div className='tw-mb-6 text-center'>
                    <h4 className='fw-normal tw-mb-2 cursor-big'>
                      Request Money
                    </h4>
                    <p className='fw-normal tw-text-lg text-dark-500'>
                      Request your payment on anytime, anywhere in the world.
                    </p>
                  </div>
                  <div className='tw-mb-6'>
                    <div className='row gy-4'>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='Name'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Name*
                        </label>
                        <input
                          name='name'
                          id='Name'
                          type='text'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                          placeholder='Enter Name'
                        />
                      </div>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='email*'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Email*
                        </label>
                        <input
                          name='email'
                          type='email'
                          id='email*'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 focus-border-main-600'
                          placeholder='Enter Email Address'
                        />
                      </div>
                      <div className='col-lg-6'>
                        <span className='fw-normal tw-text-4 text-dark-600 tw-mb-205'>
                          Country*
                        </span>
                        <select
                          name='country'
                          className='tw-px-3 tw-py-3 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                        >
                          <option value={1}>Pakistan</option>
                          <option value={2}>Russia</option>
                          <option value={3}>South Africa</option>
                          <option value={4}>South Korea</option>
                          <option value={5}>Bangldesh</option>
                        </select>
                      </div>
                      <div className='col-lg-6'>
                        <label
                          htmlFor='amount'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                        >
                          Amount*
                        </label>
                        <div className='position-relative'>
                          <input
                            name='amount'
                            placeholder='2.00.000'
                            id='amount'
                            className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-05 border focus-visible-border-main-600'
                          />
                          {/* CountryDropdown */}
                          <CountryDropdown />
                        </div>
                      </div>
                      <div className='col-12'>
                        <label
                          htmlFor='Description'
                          className='fw-normal tw-text-4 text-dark-600 tw-mb-205'
                        >
                          Description*
                        </label>
                        <textarea
                          id='Description'
                          className='tw-px-3 tw-pt-3 tw-pb-17 tw-text-4 text-dark-500 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                          placeholder='Payment Description'
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className='position-relative z-1 tw-mt-6'>
                      <button className='request-button text-white tw-text-lg fw-semibold bg-base-two-600 tw-py-3 w-100 border-base-two-600 rounded-2'>
                        REQUEST PAYMENT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestSectionOne;
