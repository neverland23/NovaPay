import Image from "next/image";
import Link from "next/link";

const NewsletterTwo: React.FC = () => {
  return (
    <div
      className='margin-block-end--162px z-2 overflow-hidden'
      data-aos='fade-up'
      data-aos-duration={1000}
    >
      <div className='container'>
        <div className='bg-base-two-600 px-80 py-80 rounded-2'>
          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
            <div className='max-w-500'>
              <h5 className='text-white tw-mb-5'>Newsletter</h5>
              <h1 className='text-white cursor-big fw-normal'>
                Subscribe To Our <br /> Newsletter
              </h1>
            </div>
            <div className='max-w-430 w-100'>
              <div className='tw-mb-8 position-relative w-100'>
                <input
                  name='email'
                  type='email'
                  className='form-control bg-neutral-800 shadow-none border border-neutral-700 text-dark-600 rounded-pill tw-ps-6 tw-pe-13 focus-border-main-600 tw-h-12 text-dark-600 tw-placeholder-text-neutral-300 focus-tw-placeholder-text-hidden tw-placeholder-transition-2 w-100'
                  placeholder='Enter Your Email'
                />
                <button className='tw-w-9 tw-h-9 flex-center rounded-circle bg-base-two-600 text--white hover-bg-main-800 position-absolute top-50 tw--translate-y-50 tw-end-0 tw-me-2 tw-transition-04-secend'>
                  <i className='ph ph-paper-plane-tilt' />
                </button>
              </div>
              <div className='d-flex align-items-center tw-gap-6 flex-wrap'>
                <div className='d-flex align-items-center'>
                  <Image
                    width={60}
                    height={60}
                    src='/assets/images/thumbs/newsletter-img1.png'
                    alt='Image'
                    className='flex-shrink-0'
                  />
                  <Image
                    width={60}
                    height={60}
                    src='/assets/images/thumbs/newsletter-img2.png'
                    alt='Image'
                    className='margin-inline-start--20px flex-shrink-0'
                  />
                  <span className='bg-main-600 w-15 h-15 rounded-circle text-dark-600 d-flex align-items-center justify-content-center border-white margin-inline-start--20px flex-shrink-0'>
                    +15K
                  </span>
                </div>
                <div>
                  <h5 className='fw-normal text-white tw-mb-2'>
                    More than 15k active users!
                  </h5>
                  <Link
                    href='/contact'
                    className='tw-text-lg fw-medium text-white d-flex align-items-center tw-gap-105'
                  >
                    Join them now
                    <span>
                      <i className='ph-bold ph-caret-right' />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterTwo;
