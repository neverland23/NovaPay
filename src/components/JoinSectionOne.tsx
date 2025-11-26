import CounterView from "@/helper/CounterView";
import Image from "next/image";

import JoinSectionPopup from "./popup/JoinSectionPopup";

const JoinSectionOne: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='tw-mb-80-px'>
          <div className='text-center tw-mb-15'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3 justify-content-center'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600 '>Join 10,245+</h5>
            </div>
            <h2
              className='fw-normal text-dark-600'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Companies Who’ve Reached
            </h2>
          </div>
          {/* ============= brand silder sections start ================= */}
          <div
            className='swiper brand-siper overflow-hidden'
            data-aos='fade-up'
            data-aos-duration={1000}
          >
            <div className='swiper-wrapper d-flex align-items-center w-100'>
              <div className='swiper-slide'>
                <Image
                  width={146}
                  height={60}
                  src='/assets/images/logo/banner-slider-img1.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img2.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img4.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img5.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img6.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img7.png'
                  alt='Image'
                />
              </div>
              <div className='swiper-slide'>
                <Image
                  width={150}
                  height={60}
                  src='/assets/images/logo/banner-slider-img5.png'
                  alt='Image'
                />
              </div>
            </div>
          </div>
          {/* ============= brand silder sections end ================= */}
        </div>
        <div className=''>
          <div className='position-relative tw-mb-80-px'>
            <Image
              width={1296}
              height={600}
              src='/assets/images/thumbs/blog-details-img1.png'
              alt='Image'
              data-aos='zoom-in'
              data-aos-duration={1500}
            />
            <div className='position-absolute z-1 top-50 tw-start-0 tw-ms-50-persent'>
              {/* JoinSectionPopup */}
              <JoinSectionPopup />
            </div>
          </div>
          <div className='row gy-4'>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div className='group' data-aos='fade-up' data-aos-duration={600}>
                <div className='text-center border-neutral-50 border tw-rounded-xl tw-px-6 tw-py-12 group-hover-bg-base-two-600 tw-duration-500'>
                  <h2 className='banner-item-title text-base-two-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    {/* CounterView */}
                    <CounterView start={0} end={15} title='M' />
                  </h2>
                  <div>
                    <span className='fw-normal tw-text-lg text-dark-600 group-hover-text-white tw-duration-500'>
                      Satisfied Global
                      <br />
                      Customers
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div className='group' data-aos='fade-up' data-aos-duration={800}>
                <div className='text-center border-neutral-50 border tw-rounded-xl tw-px-6 tw-py-12 group-hover-bg-base-two-600 tw-duration-500'>
                  <h2 className='banner-item-title text-base-two-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    {/* CounterView */}
                    <CounterView start={0} end={745} title='+' />
                  </h2>
                  <div>
                    <span className='fw-normal tw-text-lg text-dark-600 group-hover-text-white tw-duration-500'>
                      Experts Team
                      <br />
                      Members
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='group'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='text-center border-neutral-50 border tw-rounded-xl tw-px-6 tw-py-12 group-hover-bg-base-two-600 tw-duration-500'>
                  <h2 className='banner-item-title text-base-two-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    {/* CounterView */}
                    <CounterView start={0} end={10} title='M' />
                  </h2>
                  <div>
                    <span className='fw-normal tw-text-lg text-dark-600 group-hover-text-white tw-duration-500'>
                      Credit &amp; Debit
                      <br />
                      Cards Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6'>
              <div
                className='group'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='text-center border-neutral-50 border tw-rounded-xl tw-px-6 tw-py-12 group-hover-bg-base-two-600 tw-duration-500'>
                  <h2 className='banner-item-title text-base-two-600 tw-mb-3 group-hover-text-white tw-duration-500'>
                    {/* CounterView */}
                    <CounterView start={0} end={178} title='+' />
                  </h2>
                  <div>
                    <span className='fw-normal tw-text-lg text-dark-600 group-hover-text-white tw-duration-500'>
                      Branches
                      <br />
                      Worldwide
                    </span>
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

export default JoinSectionOne;
