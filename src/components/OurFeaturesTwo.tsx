import Link from "next/link";
import CounterView from "@/helper/CounterView";
import Image from "next/image";
import FeaturesTwoPopup from "./popup/FeaturesTwoPopup";

const OurFeaturesTwo: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140 z- overflow-hidden'>
      <div className='container'>
        <div className='d-flex tw-gap-5 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-610'>
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
              <h5 className='fw-normal text-primary-600'>Our Features</h5>
            </div>
            <h2
              className='fw-normal h1 text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Why Rely on Us for Secure Money Transfers?
            </h2>
          </div>
          <div className='max-w-390'>
            <p
              className='text-dark-500 fw-normal tw-text-lg tw-mb-8'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Reliable, secure, fast, global, convenient, trusted, seamless,
              innovative.
            </p>
            <div
              className='position-relative max-w-145-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/blog-details'
                className='features-two-link bg-main-600 fw-semibold text-dark-700 w-100 text-center tw-py-205 rounded-3 border-two-px-solid hover-text-dark-600'
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
        <div className='tw-mb-80-px'>
          <div className='row gy-4'>
            <div className='col-xl-5'>
              <div className='tw-px-12 tw-py-1405 bg-base-two-600 rounded-4'>
                <div
                  className='feature-card d-flex align-items-center tw-gap-7 flex-wrap tw-mb-12'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <span className='tw-w-82px tw-h-82-px border-dashed-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center flex-shrink-0'>
                    <Image
                      width={40}
                      height={41}
                      src='/assets/images/icon/our-features-two-icon1.png'
                      alt='Image'
                    />
                  </span>
                  <div className='our-peature__item max-w-310'>
                    <h5 className='fw-normal text-white'>
                      Transparent &amp; Unbiased
                    </h5>
                    <p className='fw-medium tw-text-lg text-white'>
                      Honest comparisons with real-time rates for the best deal.
                    </p>
                  </div>
                </div>
                <div
                  className='feature-card d-flex align-items-center tw-gap-7 flex-wrap tw-mb-12'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <span className='tw-w-82px tw-h-82-px border-dashed-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center'>
                    <Image
                      width={40}
                      height={41}
                      src='/assets/images/icon/our-features-two-icon2.png'
                      alt='Image'
                    />
                  </span>
                  <div className='our-peature__item max-w-310'>
                    <h5 className='fw-normal text-white'>
                      Secure &amp; Reliable
                    </h5>
                    <p className='fw-medium tw-text-lg text-white'>
                      Trusted, regulated providers with a proven record of
                      safety
                    </p>
                  </div>
                </div>
                <div
                  className='feature-card d-flex align-items-center tw-gap-7 flex-wrap'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <span className='tw-w-82px tw-h-82-px border-dashed-white rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center'>
                    <Image
                      width={44}
                      height={45}
                      src='/assets/images/icon/our-features-two-icon3.png'
                      alt='Image'
                    />
                  </span>
                  <div className='our-peature__item max-w-310'>
                    <h5 className='fw-normal text-white'>
                      Save Time &amp; Money
                    </h5>
                    <p className='fw-medium tw-text-lg text-white'>
                      Compare services instantly and choose most cost-effective
                      option.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-7'>
              <div className='position-relative'>
                <Image
                  width={746}
                  height={459}
                  src='/assets/images/thumbs/our-features-two-img1.png'
                  alt='Image'
                  data-aos='zoom-in'
                  data-aos-duration={1500}
                />
                <div className='position-absolute top-0 tw-mt-30-persent inset-inline-start-45-persent'>
                  {/* FeaturesTwoPopup */}
                  <FeaturesTwoPopup />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-lg-6 col-md-6'>
            <div className='tw-pe-8' data-aos='fade-up' data-aos-duration={600}>
              <h4 className='fw-normal text-dark-600 tw-mb-3'>
                Delighted Global Customers
              </h4>
              <h2 className='banner-item-title tw-text-15 text-base-two-600 tw-mb-6 cursor-big counter'>
                {/* CounterView */}
                <CounterView start={0} end={5175} title='+' />
              </h2>
              <span className='border-solid-dark-500 w-100 tw-mb-6' />
              <p className='fw-normal tw-text-xl text-dark-500 '>
                Users experience transaction processing speeds that are 49%
                faster than those of traditional banks,
              </p>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-6'>
            <div className='tw-pe-8' data-aos='fade-up' data-aos-duration={800}>
              <h4 className='fw-normal text-dark-600 tw-mb-3'>Money Managed</h4>
              <h2 className='banner-item-title h1 tw-text-15 text-base-two-600 tw-mb-6 cursor-big counter'>
                {/* CounterView */}
                <CounterView start={0} end={612} title='B' />
              </h2>
              <span className='border-solid-dark-500 w-100 tw-mb-6' />
              <p className='fw-normal tw-text-xl text-dark-500 '>
                Our platform delivers end-to-end solutions, seamlessly
                integrating advanced data analytics with effortless payment,
              </p>
            </div>
          </div>
          <div className='col-xl-4 col-lg-6 col-md-6'>
            <div
              className='tw-pe-8'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <h4 className='fw-normal text-dark-600 tw-mb-3'>
                Boost Your Transaction Volume
              </h4>
              <h2 className='banner-item-title tw-text-15 h1 text-base-two-600 tw-mb-6 cursor-big counter'>
                {/* CounterView */}
                <CounterView start={0} end={88} title='%' />
              </h2>
              <span className='border-solid-dark-500 w-100 tw-mb-6' />
              <p className='fw-normal tw-text-xl text-dark-500 '>
                Boost your transaction volume with our innovative, secure, and
                efficient payment solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeaturesTwo;
