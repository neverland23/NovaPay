import Image from "next/image";

const ContactInner: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140 '>
      <div className='container'>
        <div className='row gy-4 tw-mb-15'>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={600}>
              <div className='bg-white tw-py-10 tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <span className='tw-w-72-px tw-h-72-px bg-base-two-600 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600'>
                  <i className='ph ph-phone-call' />
                </span>
                <div className='text-center'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white'>
                    Call US 24/7
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white '>
                    (205) 555-0100
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='bg-white tw-py-10 tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <span className='tw-w-72-px tw-h-72-px bg-base-two-600 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600'>
                  <i className='ph ph-envelope-simple-open' />
                </span>
                <div className='text-center'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white'>
                    Email Us Anytime
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white '>
                    zigor.amara@redviet.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={1000}>
              <div className='bg-white tw-py-10 tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <span className='tw-w-72-px tw-h-72-px bg-base-two-600 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600'>
                  <i className='ph ph-map-pin' />
                </span>
                <div className='text-center'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white'>
                    Our Location
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white '>
                    SPACEX Hawthorne, CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='bg-white tw-px-10 tw-py-10 tw-rounded-xl'
          data-aos='zoom-in'
          data-aos-duration={1500}
        >
          <div className='tw-mb-12 text-center'>
            <div className='d-flex align-items-center tw-gap-1 tw-mb-3 justify-content-center'>
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600'>Get In Touch</h5>
            </div>
            <h3 className='fw-normal text-dark-600 cursor-big'>
              Let’s Start A Conversation
            </h3>
          </div>

          <div>
            <div className='row gy-4 tw-mb-12'>
              <div className='col-lg-6'>
                <label
                  htmlFor='name'
                  className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
                >
                  Your Name*
                </label>
                <input
                  name='name'
                  id='name'
                  type='text'
                  placeholder='Name'
                  className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
                />
              </div>
              <div className='col-lg-6'>
                <label
                  htmlFor='email'
                  className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
                >
                  Email Address*
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
                />
              </div>
              <div className='col-lg-6'>
                <label
                  htmlFor='number'
                  className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
                >
                  Phone Number*
                </label>
                <input
                  name='number'
                  type='text'
                  id='number'
                  placeholder='Phone Neumber'
                  className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
                />
              </div>
              <div className='col-lg-6'>
                <label
                  htmlFor='subject'
                  className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
                >
                  Subject*
                </label>
                <input
                  name='subject'
                  type='text'
                  id='subject'
                  placeholder='Name'
                  className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 rounded-pill w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
                />
              </div>
              <div className='col-12'>
                <label
                  htmlFor='message'
                  className='fw-normal tw-text-lg tw-mb-3 text-dark-600'
                >
                  Describe your message*
                </label>
                <textarea
                  name='message'
                  placeholder='Message'
                  id='message'
                  className='fw-normal tw-text-4 text-dark-500 tw-px-5 tw-py-205 tw-rounded-md tw-h-156-px w-100 bg-neutral-10 border-neutral-10 border focus-visible-border-main-600'
                  defaultValue={""}
                />
              </div>
            </div>
            <button className='tw-px-4 tw-py-3 bg-base-two-600 text-white fw-semibold tw-text-lg  w-100 tw-rounded-md text-center'>
              Submit Now
            </button>
          </div>
        </div>
        <div className='pt-140'>
          <div className='tw-mb-15'>
            <div
              className='d-flex align-items-center tw-gap-1 justify-content-center tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon3.png'
                alt='Image'
              />
              <h5 className='fw-normal text-base-two-600'>FAQ</h5>
            </div>
            <h2
              className='fw-normal cursor-big h1 text-center'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className='accordion' id='accordionExample'>
            <div className='d-flex tw-gap-4 flex-wrap'>
              <div className='max-w-610-px w-100'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button bg-white rounded-3 tw-text-xl'
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
                    data-bs-parent='#accordionExample'
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
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
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
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
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
              <div className='max-w-610-px w-100'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={700}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
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
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={900}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
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
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1100}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
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

export default ContactInner;
