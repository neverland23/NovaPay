import Image from "next/image";

import Marquee from "react-fast-marquee";

const BrandSliderOne: React.FC = () => {
  return (
    <section className='pt-80 pb-140'>
      <div className='container'>
        <h4
          className='fw-normal text-center tw-mb-15'
          data-aos='fade-up'
          data-aos-duration={600}
        >
          Trusted by 152,000+ customers worldwide
        </h4>
        {/* Swiper */}
        <div className='swiper_ brand-four__slider_'>
          <Marquee>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
            <div className=' grayscale hover-grayscale tw-duration-300 px-5'>
              <Image
                width={200}
                height={33}
                src='/assets/images/thumbs/brand-four-img1.png'
                alt=''
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default BrandSliderOne;
