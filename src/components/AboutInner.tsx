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
                At NovaPays, our journey began with a clear mission: to redefine how people send, receive, and manage money across the world.
                We are transforming traditional finance by delivering a modern, digital-first banking experience designed for today’s global users.
              </p>
              <div className='tw-mb-8'>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Security First
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Transparency
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Innovation
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                    Customer Focus
                  </span>
                </div>
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
                <div className='accordion-item tw-mb-6 rounded-3 bg-main'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three bg-main rounded-3 tw-text-xl text-white w-100 tw-px-6 tw-py-6 text-start'
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
                      <p className='fw-normal tw-text-lg text-white'>
                        NovaPays was created to modernize global money movement by making fast, secure, and borderless payments accessible to everyone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item tw-mb-6 rounded-3 bg-main2'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-main2 rounded-3 tw-text-xl text-white w-100 tw-px-6 tw-py-6 text-start'
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
                        NovaPays is a global financial technology platform built to make international payments simple, fast, and secure for everyone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item rounded-3 bg-main3'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-main3 rounded-3 text-white tw-text-xl w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSeven'
                      aria-expanded='false'
                      aria-controls='collapseSeven'
                    >
                      Why Choose NovaPays
                    </button>
                  </h2>
                  <div
                    id='collapseSeven'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-white'>
                        Choose NovaPays for fast, secure, and transparent global payments designed to simplify your financial life.
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
