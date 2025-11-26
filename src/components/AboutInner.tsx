import Image from "next/image";
import Link from "next/link";

const AboutInner: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-703'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600 '>About Us</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Transfer &amp; Deposite Money Anytime, Anywhere In The World
            </h2>
          </div>
          <div className='max-w-306'>
            <p
              className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              Help agencies to define their business objectives and then create{" "}
            </p>
            <div
              className='max-w-181 position-relative'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <Link
                href='/about-us'
                className='about-us-three-link bg-main-600 tw-px-5 tw-py-205 w-100 rounded-3 border-two-px-solid text-dark-600 fw-semibold hover-text-dark-600 '
              >
                MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-5'>
            <div
              className='tw-px-8 tw-py-8 border-neutral-05 border rounded-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <h4 className='fw-normal text-dark-600 tw-mb-3'>
                Our Mission &amp; Values
              </h4>
              <p className='fw-normal tw-text-lg text-dark-500 tw-mb-8'>
                paynone our journey began with a vision to revolutionize banking
                by embracing the digital age. banking experience tailored to the
                evolving needs of our customers.
              </p>
              <div className='tw-mb-8'>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    User-Friendly Mobile App
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Secure Online Banking
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Personalized Financial Solutions
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Assistance with Technical Issues
                  </span>
                </div>
              </div>
              <div className='position-relative max-w-155'>
                <Link
                  href='/our-team'
                  className='about-us-three-link tw-px-5 tw-py-205 bg-main-600 fw-semibold tw-text-lg text-base-two-600 rounded-3 border-two-px-solid'
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <Image
              width={306}
              height={444}
              src='/assets/images/thumbs/about-us-three-img1.png'
              alt='Image'
              className='w-100 h-100'
              data-aos='fade-up'
              data-aos-duration={800}
            />
          </div>
          <div className='col-xl-4'>
            <div data-aos='fade-up' data-aos-duration={1000}>
              <div className='accordion' id='accordionExampleTwo'>
                <div className='accordion-item tw-mb-6 rounded-3 bg-main-600'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three bg-main-600 rounded-3 tw-text-xl text-dark-700 w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='true'
                      aria-controls='collapseFive'
                    >
                      Our Story
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-700'>
                        paynone we are a dedicated team of financial experts
                        committed to providing innovative, and user-friendly
                        online banking solutions to your unique financial needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item tw-mb-6 rounded-3 bg-base-two-600'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-base-two-600 rounded-3 tw-text-xl text-white w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      Who We Are
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-white'>
                        paynone we are a dedicated team of financial experts
                        committed to providing innovative, and user-friendly
                        online banking solutions to your unique financial needs.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item rounded-3 bg-warning-500'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-warning-500 rounded-3 text-dark-700 tw-text-xl w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSeven'
                      aria-expanded='false'
                      aria-controls='collapseSeven'
                    >
                      Why Choose paynone
                    </button>
                  </h2>
                  <div
                    id='collapseSeven'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-700'>
                        paynone we are a dedicated team of financial experts
                        committed to providing innovative, and user-friendly
                        online banking solutions to your unique financial needs.{" "}
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

export default AboutInner;
