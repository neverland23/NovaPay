import Image from "next/image";
import Link from "next/link";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  return (
    <div className='tw-h-333-px bg-base-two-600 position-relative z-1 py-120'>
      <Image
        width={289}
        height={247}
        src='/assets/images/shape/my-profile-shape-1.png'
        alt='Image'
        className='shape__one position-absolute z-n1 tw-block-end-0 tw-start-0'
      />
      <Image
        width={289}
        height={247}
        src='/assets/images/shape/my-profile-shape-2.png'
        alt='Image'
        className='shape__two position-absolute z-n1 tw-block-end-0 tw-end-0'
      />
      <Image
        width={55}
        height={53}
        src='/assets/images/shape/circle-shape-img1.png'
        alt='Image'
        className='position-absolute tw-start-100-px tw-block-start-100-px d-lg-block d-none animation-rotation__two'
      />
      <Image
        width={109}
        height={62}
        src='/assets/images/shape/banner-two-shape5.png'
        alt='Image'
        className='position-absolute tw-end-60-px tw-block-end-75-px d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={56}
        height={56}
        src='/assets/images/shape/banner-two-shape2.png'
        alt='Image'
        className='shape__five position-absolute bottom-0 tw-mb-16 tw-start-0 tw-ml-496-px z-n1 d-lg-block d-none animation-pulse__two'
      />
      <div className='text-center'>
        <h1
          className='fw-normal text-white text-uppercase cursor-big'
          data-aos='fade-up'
          data-aos-duration={600}
        >
          {title}
        </h1>
        <div
          className='d-flex align-items-center tw-gap-105 justify-content-center'
          data-aos='fade-up'
          data-aos-duration={800}
        >
          <Link
            href='/'
            className='fw-semibold tw-text-xl text-white text-uppercase'
          >
            HOME
          </Link>
          <span className='tw-text-6 text-main-600'>
            <i className='ph ph-caret-double-right' />
          </span>
          <span className='fw-semibold tw-text-xl text-main-600 text-uppercase'>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
