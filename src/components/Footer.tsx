import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className='tw-pt-250px bg-dark-600 z-1 overflow-hidden'>
      <div className='container'>
        <div className='tw-mb-80-px'>
          <div className='row gy-5'>
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div
                className='max-w-306'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <Link href='/'>
                  <Image
                    width={171}
                    height={40}
                    src='/assets/images/logo/logo.png'
                    alt='Image'
                    className='tw-mb-6'
                  />
                </Link>
                <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-8'>
                  Next-level payment infrastructure for instant, secure, and global transactions.
                </p>
                {/* <ul className='d-flex align-items-center tw-gap-5'>
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
                </ul> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12'>
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
                    <a
                      href='/our-services'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Our Services
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='/pricing-plan'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Pricing Plan
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
            <div className='col-lg-4 col-md-4 col-sm-12'>
              <div
                className='max-w-306'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Contact Us
                </h4>
                <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-705'>
                  3891 Ranch view Dr. Richard, California 62639
                </p>
                <h5 className='fw-bold text-neutral-10 tw-mb-3 cursor-big'>
                  (872) 217-3342
                </h5>
                <span className='tw-text-lg fw-normal text-neutral-10'>
                  support@novapay.co
                </span>
              </div>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div
                className='d-flex align-items-center justify-content-center'
              >
                <Link
                  href={"/terms-of-service"}
                  className='text-white fw-semibold d-block tw-py-2 tw-px-305 tw-rounded'
                >
                  Terms of Service
                </Link>
                <span className='text-white fw-semibold d-block tw-py-2 tw-px-305 tw-rounded'>|</span>
                <Link
                  href={"/privacy-policy"}
                  className='text-white fw-semibold d-block tw-py-2 tw-px-305 tw-rounded'
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ================ botter footer section start ====================== */}
        <div className='tw-mb-10 border-top-dark-500 tw-pt-6'>
          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
            <p className='fw-semibold tw-text-lg text-white'>
              Copyright @ {new Date().getFullYear()} NovaPay
            </p>
          </div>
        </div>
        {/* ================ botter footer section end ====================== */}
      </div>
    </footer>
  );
};

export default Footer;
