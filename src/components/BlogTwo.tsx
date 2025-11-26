import Image from "next/image";
import Link from "next/link";

const BlogTwo: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='d-flex tw-gap-5 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-768'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={800}
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
              className='fw-normal text-dark-600 h1 cursor-big'
              data-aos='fade-up'
              data-aos-duration={1000}
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
              data-aos-duration={800}
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
          <div className='col-xxl-6'>
            <div
              className='tw-px-6 tw-py-6 bg-neutral-10 rounded-3'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              <span className='tw-mb-4 w-100 h-100'>
                <Image
                  width={588}
                  height={321}
                  src='/assets/images/thumbs/articles-img1.png'
                  alt='Image'
                  className='w-100 h-100'
                />
              </span>
              <div className='tw-px-4 tw-pb-2'>
                <div className='d-flex align-items-center tw-gap-4 flex-wrap justify-content-between tw-mb-6'>
                  <span className='d-flex align-items-center tw-gap-2'>
                    <span className='tw-text-6 text-dark-600'>
                      <i className='ph ph-user' />
                    </span>
                    <span className='fw-normal tw-text-lg text-dark-800'>
                      Admin
                    </span>
                  </span>
                  <span className='d-flex align-items-center tw-gap-2'>
                    <span className='tw-text-6 text-dark-600'>
                      <i className='ph ph-chat-text' />
                    </span>
                    <span className='fw-normal tw-text-lg text-dark-800'>
                      02 Comments
                    </span>
                  </span>
                </div>
                <h3 className='fw-normal tw-mb-3 text-dark-600 cursor-big'>
                  Analytics-Driven Strategies for Business Success
                </h3>
                <p className='fw-normal tw-text-lg text-dark-500 tw-mb-8'>
                  Discover how data and analytics transform your business
                  strategies and decision-making processes.{" "}
                </p>
                <div className='position-relative z-1 max-w-160-px w-100'>
                  <Link
                    href='/blog-details'
                    className='articles-view-link w-100 text-center tw-py-205 bg-main-600 rounded-3 text-dark-600 fw-semibold tw-text-lg hover-text-dark-600'
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xxl-6'>
            <div className=''>
              <div
                className='tw-px-3 tw-py-3 bg-neutral-10 rounded-3 d-flex align-items-center tw-gap-5 flex-wrap tw-mb-6'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <Image
                  width={264}
                  height={302}
                  src='/assets/images/thumbs/articles-img2.png'
                  alt='Image'
                  className='articles-img tw-mb-4 max-w-256 h-100 bg-img'
                />
                <div className='articles-text max-w-320 tw-px-3 tw-py-5'>
                  <div className='d-flex align-items-center tw-gap-4 flex-wrap justify-content-between tw-mb-6'>
                    <span className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-6 text-dark-600'>
                        <i className='ph ph-user' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-800'>
                        Admin
                      </span>
                    </span>
                    <span className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-6 text-dark-600'>
                        <i className='ph ph-chat-text' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-800'>
                        02 Comments
                      </span>
                    </span>
                  </div>
                  <h4 className='fw-normal tw-mb-3 text-dark-600 cursor-big line-clamp-2'>
                    How to Pay Bills Online: A Beginner’s Guide
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500 tw-mb-8'>
                    From understanding customer behavior to predicting market
                    trends,
                  </p>
                  <div className='position-relative z-1 max-w-160-px w-100'>
                    <Link
                      href='/blog-details'
                      className='articles-view-link w-100 text-center tw-py-205 bg-main-600 rounded-3 text-dark-600 fw-semibold tw-text-lg hover-text-dark-600'
                    >
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className='tw-px-3 tw-py-3 bg-neutral-10 rounded-3 d-flex align-items-center tw-gap-6 flex-wrap'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <Image
                  width={264}
                  height={302}
                  src='/assets/images/thumbs/articles-img3.png'
                  alt='Image'
                  className='articles-img tw-mb-4 max-w-256 h-100 bg-img'
                />
                <div className='articles-text max-w-320 tw-px-3 tw-py-5'>
                  <div className='d-flex align-items-center tw-gap-4 flex-wrap justify-content-between tw-mb-6'>
                    <span className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-6 text-dark-600'>
                        <i className='ph ph-user' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-800'>
                        Admin
                      </span>
                    </span>
                    <span className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-6 text-dark-600'>
                        <i className='ph ph-chat-text' />
                      </span>
                      <span className='fw-normal tw-text-lg text-dark-800'>
                        02 Comments
                      </span>
                    </span>
                  </div>
                  <h4 className='fw-normal tw-mb-3 text-dark-600 cursor-big line-clamp-2'>
                    How to Pay Bills Online: A Beginner’s Guide
                  </h4>
                  <p className='fw-normal tw-text-lg text-dark-500 tw-mb-8'>
                    From understanding customer behavior to predicting market
                    trends,
                  </p>
                  <div className='position-relative z-1 max-w-160-px w-100'>
                    <Link
                      href='/blog-details'
                      className='articles-view-link w-100 text-center tw-py-205 bg-main-600 rounded-3 text-dark-600 fw-semibold tw-text-lg hover-text-dark-600'
                    >
                      VIEW DETAILS
                    </Link>
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

export default BlogTwo;
