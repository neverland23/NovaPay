import Image from "next/image";
import Link from "next/link";

const BlogThree: React.FC = () => {
  return (
    <section className='py-140 z-1'>
      <div className='container'>
        <div className='d-flex tw-gap-5 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-768'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon3.png'
                alt='Image'
              />
              <h5 className='fw-normal text-dark-600 cursor-big'>Articles</h5>
            </div>
            <h2
              className='fw-normal h1 text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Our Latest
              <br />
              Blog
            </h2>
          </div>
          <div className='max-w-350'>
            <p
              className='text-dark-500 fw-normal tw-text-lg tw-mb-8'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              Discover Our Latest Expert Insights, Tips, and Trends on the Blog
              Today
            </p>
            <div
              className='position-relative max-w-140-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/blog-list'
                className='articles-link w-100 text-center tw-py-205 bg-main-600 rounded-3 tw-text-lg text-dark-700 border-two-px-solid fw-semibold hover-text-dark-600'
              >
                ALL BLOGS
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-4 col-md-6'>
            <div
              className='position-relative z-1'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <Image
                width={416}
                height={360}
                src='/assets/images/thumbs/articles-two-img1.png'
                alt='Image'
                className='w-100 h-100'
              />
              <span className='tw-px-3 tw-py-2 bg-main-600 tw-rounded-md fw-normal tw-text-4 text-dark-600 position-absolute inset-inline-start-24px inset-block-start-24px'>
                Finance
              </span>
              <div className='position-relative z-1 margin-block-start--87px'>
                <div className='articles-bank-card tw-px-6 tw-py-6 bg-white tw-rounded-xl text-center justify-content-center max-w-368 border-bottom-base-two-600 mx-auto'>
                  <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big line-clamp-2'>
                    How to Identify and Avoid Online Banking{" "}
                  </h4>
                  <Link
                    href='/blog-details'
                    className='bg-neutral-10 tw-px-6 tw-py-205 fw-bold tw-text-4 text-dark-600 w-100 d-flex align-items-center justify-content-center hover-text-white hover-bg-base-two-600 tw-transition-04-secend tw-rounded-xl'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='position-relative z-1'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Image
                width={416}
                height={360}
                src='/assets/images/thumbs/articles-two-img2.png'
                alt='Image'
                className='w-100 h-100'
              />
              <span className='tw-px-3 tw-py-2 bg-main-600 tw-rounded-md fw-normal tw-text-4 text-dark-600 position-absolute inset-inline-start-24px inset-block-start-24px'>
                Finance
              </span>
              <div className='position-relative z-1 margin-block-start--87px'>
                <div className='articles-bank-card tw-px-6 tw-py-6 bg-white tw-rounded-xl text-center justify-content-center max-w-368 border-bottom-base-two-600 mx-auto'>
                  <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big line-clamp-2'>
                    How to Apply for a Online Banking Services
                  </h4>
                  <Link
                    href='/blog-details'
                    className='bg-neutral-10 tw-px-6 tw-py-205 fw-bold tw-text-4 text-dark-600 w-100 d-flex align-items-center justify-content-center hover-text-white hover-bg-base-two-600 tw-transition-04-secend tw-rounded-xl'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div
              className='position-relative z-1'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <Image
                width={416}
                height={360}
                src='/assets/images/thumbs/articles-two-img3.png'
                alt='Image'
                className='w-100 h-100'
              />
              <span className='tw-px-3 tw-py-2 bg-main-600 tw-rounded-md fw-normal tw-text-4 text-dark-600 position-absolute inset-inline-start-24px inset-block-start-24px'>
                Finance
              </span>
              <div className='position-relative z-1 margin-block-start--87px'>
                <div className='articles-bank-card tw-px-6 tw-py-6 bg-white tw-rounded-xl text-center justify-content-center max-w-368 border-bottom-base-two-600 mx-auto'>
                  <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big line-clamp-2'>
                    How to Pay Bills Online: A Beginner’s Guide
                  </h4>
                  <Link
                    href='/blog-details'
                    className='bg-neutral-10 tw-px-6 tw-py-205 fw-bold tw-text-4 text-dark-600 w-100 d-flex align-items-center justify-content-center hover-text-white hover-bg-base-two-600 tw-transition-04-secend tw-rounded-xl'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogThree;
