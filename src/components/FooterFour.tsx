import Image from "next/image";
import Link from "next/link";

const FooterFour: React.FC = () => {
  return (
    <footer className='pt-120 bg-dark-600 z-1 overflow-hidden'>
      <div className='container'>
        <div className='tw-mb-80-px'>
          <div className='row gy-5'>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <div
                className='max-w-306'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='tw-mb-15'>
                  <Link href='/'>
                    <Image
                      width={306}
                      height={40}
                      src='/assets/images/logo/logo3.png'
                      alt='Image'
                      className='tw-mb-6'
                    />
                  </Link>
                  <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-8'>
                    We’ve got the perfect tools for your toward excellence.
                  </p>
                </div>
                <div>
                  <h4 className='text-white fw-normal tw-mb-6 cursor-big'>
                    Contact Us
                  </h4>
                  <ul>
                    <li className='d-flex align-items-center tw-gap-2 tw-mb-3 group'>
                      <span className='text-neutral-10 tw-text-6 group-hover-text-main-600 tw-duration-500'>
                        <i className='ph ph-phone-call' />
                      </span>
                      <span className='fw-normal tw-text-lg text-neutral-10 group-hover-text-main-600 tw-duration-500'>
                        (702) 555-0122
                      </span>
                    </li>
                    <li className='d-flex align-items-center tw-gap-2 group'>
                      <span className='text-neutral-10 tw-text-6 group-hover-text-main-600 tw-duration-500'>
                        <i className='ph ph-envelope-simple' />
                      </span>
                      <span className='fw-normal tw-text-lg text-neutral-10 group-hover-text-main-600 tw-duration-500'>
                        kenzi.lawson@example.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div data-aos='fade-up' data-aos-duration={800}>
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Quick Links
                </h4>
                <ul>
                  <li className='tw-mb-4'>
                    <Link
                      href='/about-us'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      About Us
                    </Link>
                  </li>
                  <li className='tw-mb-4'>
                    <Link
                      href='/blog-details'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Our Blog
                    </Link>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Payment
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <Link
                      href='/faq'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Faqs
                    </Link>
                  </li>
                  <li className='tw-mb-4'>
                    <Link
                      href='/contact'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div data-aos='fade-up' data-aos-duration={1000}>
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Our Services
                </h4>
                <ul>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Transfer Money
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Saving Account
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Online Shopping
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Our Services
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='#'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Pay Bills
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <div data-aos='fade-up' data-aos-duration={1200}>
                <h4 className='fw-normal text-white tw-mb-10 cursor-big'>
                  Subscribe Now
                </h4>
                <div className='d-flex align-items-center tw-gap-3 tw-mb-15'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    className='text-neutral-05 tw-px-4 tw-py-305 bg-transparent border-dark-500 border tw-rounded-xl w-100 focus-visible-border-main-600'
                  />
                  <button className='tw-w-13 tw-h-13 bg-main-600 tw-rounded-xl text-dark-600 tw-text-2xl d-flex align-items-center justify-content-center flex-shrink-0'>
                    <i className='ph ph-paper-plane-tilt' />
                  </button>
                </div>

                <ul className='d-flex align-items-center tw-gap-5'>
                  <li>
                    <a href='https://www.facebook.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-facebook-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://medium.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-medium-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://youtube.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-youtube-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://x.com/i/flow/login'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-twitter-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='tw-mb-10 border-top-dark-500 tw-pt-6'>
          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
            <p className='fw-medium tw-text-lg text-white'>
              Copyright @ {new Date().getFullYear()} NovaPay
            </p>
            <span className='fw-medium tw-text-lg text-white'>
              Designed By <span className='text-main-600'>wowtheme7</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
