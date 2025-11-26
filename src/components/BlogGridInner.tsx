import Image from "next/image";
import Link from "next/link";
const BlogGridInner: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 z-1 overflow-hidden'>
      <div className='container'>
        <div className='d-flex tw-gap-10 w-100 flex-wrap'>
          <div className='max-w-850-px w-100'>
            <div className='tw-mb-80-px'>
              <div className='row gy-4'>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={600}
                  >
                    <Image
                      width={416}
                      height={361}
                      src='/assets/images/thumbs/blog-grid-img1.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big  line-clamp-2'>
                          The Role of AI in Securing Digital Transactions
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <Image
                      width={416}
                      height={360}
                      src='/assets/images/thumbs/blog-grid-img2.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big  line-clamp-2'>
                          Transfer Money Abroad Without High Fees
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={600}
                  >
                    <Image
                      width={416}
                      height={360}
                      src='/assets/images/thumbs/blog-grid-img3.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big line-clamp-2'>
                          How They Work &amp; Why You Need Them
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <Image
                      width={406}
                      height={360}
                      src='/assets/images/thumbs/blog-grid-img4.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big line-clamp-2'>
                          How to Keep Your Online Transactions Safe
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={600}
                  >
                    <Image
                      width={416}
                      height={360}
                      src='/assets/images/thumbs/blog-grid-img5.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big line-clamp-2'>
                          Traditional Banking: The Future of Finance
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div
                    className='position-relative w-100'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <Image
                      width={416}
                      height={361}
                      src='/assets/images/thumbs/blog-grid-img1.png'
                      alt='Image'
                      className='bg-img'
                    />
                    <span className='bg-main-600 text-dark-600 fw-normal tw-text-4 tw-px-3 tw-py-2 tw-rounded-md position-absolute tw-block-start-0 tw-mt-6 tw-start-0 tw-ms-6'>
                      Finance
                    </span>
                    <div className='position-relative z-1 tw-mt--88-px'>
                      <div className='blog-grid__pinance bg-white tw-px-6 tw-py-6 tw-rounded-xl max-w-360-px border-base-two-600 border-bottom w-100 border-0 mx-auto'>
                        <h4 className='fw-normal text-dark-600 tw-mb-6 text-center cursor-big line-clamp-2'>
                          How to Identify and Avoid Online Banking{" "}
                        </h4>
                        <Link
                          href='/blog-details'
                          className='bg-neutral-10 tw-rounded-md tw-px-6 tw-py-205 w-100 text-dark-600 text-center hover-bg-base-two-600 hover-text-white tw-duration-500'
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center tw-gap-1 justify-content-center'>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                <i className='ph ph-caret-double-left' />
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                1
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                2
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                3
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                4
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                5
              </button>
              <button
                type='button'
                className='bg-white tw-w-10 tw-h-10 rounded-circle tw-text-xl text-dark-600 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-semibold'
              >
                <i className='ph ph-caret-double-right' />
              </button>
            </div>
          </div>
          <div className='max-w-400-px w-100'>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>Search</h4>
              </div>

              <div className='position-relative'>
                <input
                  name='search'
                  type='text'
                  placeholder='Search'
                  className='bg-base-two-10 tw-py-305 tw-px-3 tw-rounded-xl w-100 text-dark-500 border-neutral-10 border focus-visible-border-main-600'
                />
                <button className='tw-text-xl tw-w-8 tw-h-8 tw-rounded-md text-white bg-base-two-600 position-absolute tw-end-0 top-50 translate-middle-y tw-me-205'>
                  <i className='ph ph-magnifying-glass' />
                </button>
              </div>
            </div>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-8'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  Top Category
                </h4>
              </div>
              <div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9 tw-mb-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck1'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck1'
                  >
                    Industry Tips_(10)
                  </label>
                </div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9 tw-mb-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck2'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck2'
                  >
                    Sales &amp; Marketing_(16)
                  </label>
                </div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9 tw-mb-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck3'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck3'
                  >
                    Enterprise Hub_(26)
                  </label>
                </div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9 tw-mb-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck4'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck4'
                  >
                    Design &amp; Photography_(02)
                  </label>
                </div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9 tw-mb-4'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck5'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck5'
                  >
                    IT &amp; Programming_(10)
                  </label>
                </div>
                <div className='form-check border-neutral-05 border-bottom w-100 tw-h-px tw-pb-9'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                    id='defaultCheck6'
                  />
                  <label
                    className='form-check-label text-dark-500 tw-text-4'
                    htmlFor='defaultCheck6'
                  >
                    Finance &amp; Management_(45)
                  </label>
                </div>
              </div>
            </div>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-8'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  Recent Posts
                </h4>
              </div>
              <div>
                <div className='d-flex align-items-center tw-gap-4 flex-wrap'>
                  <span className='max-w-110-px w-100'>
                    <Image
                      width={416}
                      height={360}
                      src='/assets/images/thumbs/articles-two-img1.png'
                      alt='Image'
                      className='tw-rounded-md'
                    />
                  </span>
                  <div className='max-w-222-px w-100'>
                    <span className='fw-normal tw-text-4 text-dark-500 tw-mb-2'>
                      Sep 15, 2024
                    </span>
                    <h5 className='fw-normal text-dark-600'>
                      <Link href='/blog-details'>
                        Benefits Online Money Transfers
                      </Link>
                    </h5>
                  </div>
                </div>
                <span className='bg-neutral-05 w-100 tw-h-px tw-mb-5 tw-mt-5' />
                <div className='d-flex align-items-center tw-gap-4 flex-wrap'>
                  <span className='max-w-110-px w-100'>
                    <Image
                      width={110}
                      height={90}
                      src='/assets/images/thumbs/blog-grid-img7.png'
                      alt='Image'
                      className='tw-rounded-md'
                    />
                  </span>
                  <div className='max-w-222-px w-100'>
                    <span className='fw-normal tw-text-4 text-dark-500 tw-mb-2'>
                      Sep 15, 2024
                    </span>
                    <h5 className='fw-normal text-dark-600'>
                      <Link href='/blog-details'>
                        Online Payment Safety Tips
                      </Link>
                    </h5>
                  </div>
                </div>
                <span className='bg-neutral-05 w-100 tw-h-px tw-mb-5 tw-mt-5' />
                <div className='d-flex align-items-center tw-gap-4 flex-wrap'>
                  <span className='max-w-110-px w-100'>
                    <Image
                      width={110}
                      height={90}
                      src='/assets/images/thumbs/blog-grid-img8.png'
                      alt='Image'
                      className='tw-rounded-md'
                    />
                  </span>
                  <div className='max-w-222-px w-100'>
                    <span className='fw-normal tw-text-4 text-dark-500 tw-mb-2'>
                      Sep 15, 2024
                    </span>
                    <h5 className='fw-normal text-dark-600'>
                      <Link href='/blog-details'>
                        How to Save More on Transfers
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'>
              <div className='d-flex align-items-center tw-gap-2 tw-mb-8'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>
                  Popular Tags
                </h4>
              </div>
              <div className='d-flex align-items-center tw-gap-2 flex-wrap'>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Business
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Development
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  AI
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Wordpress
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Machine Learning
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  AI
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Laravel
                </button>
                <button
                  type='button'
                  className='tw-px-5 tw-py-205 border-neutral-502 border rounded-pill text-dark-500 hover-bg-base-two-600 hover-text-white tw-duration-500 fw-normal tw-text-4'
                >
                  Python
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGridInner;
