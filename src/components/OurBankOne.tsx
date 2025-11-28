import CounterView from "@/helper/CounterView";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";

const OurBankOne: React.FC = () => {
  return (
    <div className='position-relative overflow-hidden'>
      <section className='our-services-three position-relative overflow-hidden z-1'>
        <Image
          width={49}
          height={54}
          src='/assets/images/shape/our-services-three-shape2.png'
          alt='Image'
          className='position-absolute tw-end-100-px tw-mt-104-px d-lg-block d-none animation-pulse__two'
        />
        <Image
          width={78}
          height={78}
          src='/assets/images/shape/banner-shape2.png'
          alt='Image'
          className='position-absolute inset-inline-start-130px inset-block-start-130px z-n1 d-lg-block d-none animation-rotation__two'
        />
        <Image
          width={170}
          height={178}
          src='/assets/images/shape/our-services-three-shape1.png'
          alt='Image'
          className='position-absolute inset-inline-start-0 inset-block-end-0 d-lg-block d-none animation-Updowm__two'
        />
        <div className='container'>
          <div className='our-services-item d-flex align-items-center tw-gap-268-px justify-content-end '>
            <div className=' tw-pt-100-px'>
              <h2
                className='banner-item-title h1 tw-text-15 text-white fw-normal tw-mb-2 cursor-big counter'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                11.5k
              </h2>
              <span
                className='fw-medium tw-text-6 text-white'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Banking Card available
              </span>
            </div>
            <div className='py-80 d-flex align-items-center tw-gap-6 justify-content-end flex-wrap w-100'>
              <div
                className='tw-px-3'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <h2 className='fw-normal cursor-big tw-w-100px tw-h-100-px border-primary-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-8 counter'>
                  {/* CounterView */}
                  <CounterView start={0} end={12} title='+' />
                </h2>
                <h4 className='fw-normal tw-mb-2 '>Years of Excellent</h4>
                <span className='fw-normal tw-text-lg text-dark-500'>
                  Decades of Unmatched Excellence
                </span>
              </div>
              <div
                className='tw-px-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <h2 className='fw-normal cursor-big tw-w-100px tw-h-100-px border-primary-600 rounded-circle d-flex align-items-center justify-content-center tw-mb-8 counter'>
                  {/* CounterView */}
                  <CounterView start={0} end={75} title='+' />
                </h2>
                <h4 className='fw-normal tw-mb-2 '>Expert Members</h4>
                <span className='fw-normal tw-text-lg text-dark-500'>
                  Decades of Unmatched Excellence
                </span>
              </div>
            </div>
          </div>
          <div className='our-serbices-card  bg-neutral-10 overflow-hidden tw-w-100vw '>
            {/* WhyChooseUsOne */}
            <WhyChooseUsOne />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurBankOne;
