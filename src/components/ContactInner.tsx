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
                    (872) 217-3342
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
                    support@novapay.co
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
                    3891 Ranch view Dr. Richard, California 62639
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
            <button className='tw-px-4 tw-py-3 bg-main-gradient text-white fw-semibold tw-text-lg  w-100 tw-rounded-md text-center'>
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInner;
