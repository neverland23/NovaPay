import Image from "next/image";
import Link from "next/link";

const HowItWorksOne: React.FC = () => {
  return (
    <section className='py-140 z-1 bg-neutral-10 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between tw-mb-80-px flex-wrap'>
          <div className='max-w-330'>
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
              <h5 className='text-primary-600 fw-normal'>How it Works</h5>
            </div>
            <h2
              className='fw-normal cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Just Few Steps To Start
            </h2>
          </div>
          <div className='max-w-416'>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Simple and hassle-free! Just follow three easy steps to get
              started effortlessly today.
            </p>
            <div
              className='position-relative max-w-222-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/log-in'
                className='works-two-link bg-main-600 rounded-3 w-100 text-center tw-py-205 border-two-px-solid text-dark-700 fw-semibold hover-text-dark-600'
              >
                OPEN A FREE ACCOUNT
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={1000}>
              <div className='how-it-work-two-item-one group-hover-bg-white tw-transition-04-secend tw-px-10 tw-py-10 rounded-4 position-relative margin-block-start-100px'>
                <span className='tw-w-84px tw-h-84-px bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center tw-mb-12'>
                  <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle tw-text-8 text-white d-flex align-items-center justify-content-center'>
                    <i className='ph ph-user-check' />
                  </span>
                </span>
                <h4 className='fw-normal text-dark-600 tw-mb-3'>
                  Enter Transfer Details
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Input your recipient’s information and the amount you wish to
                  send.
                </p>
                <h2 className='fw-normal h1 gradient-text tw-text-140-px position-absolute tw-end-0 top-0 tw-me-10 tw-mt-15 cursor-big'>
                  1
                </h2>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='how-it-work-two-item-two group-hover-bg-white tw-transition-04-secend tw-px-10 tw-py-10 rounded-4 position-relative margin-block-start-50px'>
                <span className='tw-w-84px tw-h-84-px bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center tw-mb-12'>
                  <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle tw-text-8 text-white d-flex align-items-center justify-content-center'>
                    <i className='ph ph-wallet' />
                  </span>
                </span>
                <h4 className='fw-normal text-dark-600 tw-mb-3'>
                  Verify &amp; Confirm
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Review transaction details, fees, &amp; exchange rates to
                  ensure accuracy.
                </p>
                <h2 className='fw-normal gradient-text h1 tw-text-140-px position-absolute tw-end-0 top-0 tw-me-10 tw-mt-15 cursor-big'>
                  2
                </h2>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={600}>
              <div className='how-it-work-two-item-three group-hover-bg-white tw-transition-04-secend tw-px-10 tw-py-10 rounded-4 position-relative'>
                <span className='tw-w-84px tw-h-84-px bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center tw-mb-12'>
                  <span className='tw-w-72px tw-h-72-px bg-base-two-600 rounded-circle tw-text-8 text-white d-flex align-items-center justify-content-center'>
                    <i className='ph ph-paper-plane-tilt' />
                  </span>
                </span>
                <h4 className='fw-normal text-dark-600 tw-mb-3'>
                  Authenticate &amp; Send
                </h4>
                <p className='fw-normal tw-text-lg text-dark-500'>
                  Securely authenticate your payment and complete the transfer
                  in real time.
                </p>
                <h2 className='fw-normal gradient-text h1 tw-text-140-px position-absolute tw-end-0 top-0 tw-me-10 tw-mt-15 cursor-big'>
                  3
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOne;
