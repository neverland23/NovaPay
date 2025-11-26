import Image from "next/image";

const NovapayTwo: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6'>
            <div data-aos='zoom-in' data-aos-duration={1500}>
              <Image
                width={526}
                height={488}
                src='/assets/images/thumbs/novapay-two-img1.png'
                alt='Image'
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className=''>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <span className=''>
                  <Image
                    width={27}
                    height={27}
                    src='/assets/images/icon/star-icon2.png'
                    alt='Image'
                    className=''
                  />
                </span>
                <h5 className='text-primary-600 fw-normal'>
                  Welcome To Our NovaPay
                </h5>
              </div>
              <h2
                className='fw-normal cursor-big tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Instant Money Transfers, Anytime, Anywhere
              </h2>
              <p
                className='fw-normal text-dark-500 tw-text-lg tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Send and receive money instantly, no matter where you are. Enjoy
                anytime, anywhere, with just a few simple clicks.
              </p>
              <div className='tw-mb-12'>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1100}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-semibold tw-text-lg'>
                    Reliable Online Payment Platform
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-semibold tw-text-lg'>
                    Best Networking &amp; Low Cost and Fast transfer
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1300}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-semibold tw-text-lg'>
                    Best Networking &amp; Low Transaction Fee
                  </span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-2 tw-mb-4'
                  data-aos='fade-up'
                  data-aos-duration={1400}
                >
                  <span className='tw-text-xl text-dark-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='text-dark-600 fw-semibold tw-text-lg'>
                    Best Networking &amp; Low Transaction Fee
                  </span>
                </div>
              </div>
              <div
                className='position-relative max-w-145-px w-100'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <a
                  href='#'
                  className='novapay-two-link bg-main-600 text-dark-600 w-100 text-center tw-py-205 rounded-3 tw-text-lg fw-semibold border-two-px-solid hover-text-dark-600'
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovapayTwo;
