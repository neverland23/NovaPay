import Image from "next/image";

const FAQThree: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='max-w-856 justify-content-center mx-auto'>
          <div className='tw-mb-12'>
            <div
              className='d-flex align-items-center justify-content-center text-center tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <span>
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt='Image'
                />
              </span>
              <h5 className='text-primary-600 fw-normal cursor-big'>Faq</h5>
            </div>
            <div className='max-w-560 text-center justify-content-center align-items-center mx-auto'>
              <h2
                className='fw-normal text-dark-600 tw-mb-4 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Frequently Asked Questions
              </h2>
              <p
                className='fw-normal tw-text-lg text-dark-500'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Browse our comprehensive FAQ section for clear, concise answers
                to your most common banking queries.
              </p>
            </div>
          </div>
          <div className='tw-mb-80-px'>
            <ul
              className='nav nav-pills nav-faq mb-3 align-items-center tw-gap-6'
              id='pills-tab-two'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3 active'
                  id='pills-homeeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-homeeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-homeeee'
                  aria-selected='true'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img1.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    General Questions
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-mobileeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-mobileeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-mobileeee'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img2.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Mobile Banking
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-transferrrr-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-transferrrr'
                  type='button'
                  role='tab'
                  aria-controls='pills-transferrrr'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img3.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Money Transfer
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-feessss-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-feessss'
                  type='button'
                  role='tab'
                  aria-controls='pills-feessss'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img4.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Fees and Charges
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent-two'>
            <div
              className='tab-pane fade show active'
              id='pills-homeeee'
              role='tabpanel'
              aria-labelledby='pills-homeeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-one'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo1'
                      aria-expanded='false'
                      aria-controls='collapseTwo1'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree1'
                      aria-expanded='false'
                      aria-controls='collapseThree1'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour1'
                      aria-expanded='false'
                      aria-controls='collapseFour1'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-mobileeee'
              role='tabpanel'
              aria-labelledby='pills-mobileeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-two'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOnee'
                      aria-expanded='true'
                      aria-controls='collapseOnee'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOnee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoo'
                      aria-expanded='false'
                      aria-controls='collapseTwoo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwoo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree2'
                      aria-expanded='false'
                      aria-controls='collapseThree2'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree2'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour2'
                      aria-expanded='false'
                      aria-controls='collapseFour2'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour2'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-transferrrr'
              role='tabpanel'
              aria-labelledby='pills-transferrrr-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-three'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneee'
                      aria-expanded='true'
                      aria-controls='collapseOneee'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOneee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwooo'
                      aria-expanded='false'
                      aria-controls='collapseTwooo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree3'
                      aria-expanded='false'
                      aria-controls='collapseThree3'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour3'
                      aria-expanded='false'
                      aria-controls='collapseFour3'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-feessss'
              role='tabpanel'
              aria-labelledby='pills-feessss-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-four'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneeee'
                      aria-expanded='true'
                      aria-controls='collapseOneeee'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOneeee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoooo'
                      aria-expanded='false'
                      aria-controls='collapseTwooooo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwooooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree4'
                      aria-expanded='false'
                      aria-controls='collapseThree4'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree4'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour4'
                      aria-expanded='false'
                      aria-controls='collapseFour4'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour4'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To access online and mobile banking, simply log in using
                        your registered email or phone number along with your
                        secure password. You can use our website via any browser
                        or download our mobile app from the App Store or Google
                        Play.
                      </p>
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

export default FAQThree;
