import Image from "next/image";
import Link from "next/link";

const BlogDetailsInner: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 z-1 overflow-hidden'>
      <div className='container'>
        <Image
          width={1296}
          height={600}
          src='/assets/images/thumbs/blog-details-img1.png'
          alt='Image'
          className='bg-img tw-mb-10'
          data-aos='zoom-in'
          data-aos-duration={1500}
        />
        <div className='d-flex tw-gap-10 w-100 flex-wrap tw-mb-5'>
          <div className='max-w-850-px w-100'>
            <div className='tw-mb-12'>
              <h2
                className='fw-normal text-dark-600 tw-mb-3 cursor-big'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                The Future of Money Transfers: Fast, Secure, and Hassle-Free
              </h2>
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={700}
              >
                In today’s fast-paced digital world, transferring money online
                has become an essential part of our daily lives. Whether you are
                sending money to family, paying for services, or making business
                transactions, online payment solutions provide a seamless way to
                manage your finances. With the rapid advancements in fintech,
                money transfers are now faster, safer, and more convenient than
                ever before.
              </p>
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                With the rapid advancements in fintech, money transfers are now
                faster, safer, and more convenient than ever before. Most
                platforms offer multi-currency support,
              </p>
              <Image
                width={746}
                height={459}
                src='/assets/images/thumbs/our-features-two-img1.png'
                alt='Image'
                className='w-100 tw-mb-8'
                data-aos='zoom-in'
                data-aos-duration={1500}
              />
              <p
                className='fw-normal tw-text-lg text-dark-500'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                Gone are the days of standing in long queues at banks or waiting
                for checks to clear. Online money transfer services have
                revolutionized how we handle transactions, offering instant and
                secure ways to send and receive money across the globe.
              </p>
            </div>
            <div className='tw-mb-10'>
              <h3
                className='fw-normal text-dark-600 cursor-big tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Why Online Money Transfers Are Essential
              </h3>
              <p
                className='fw-normal tw-text-lg text-dark-500 tw-mb-10'
                data-aos='fade-up'
                data-aos-duration={1100}
              >
                With just a few clicks, users can send money to anyone,
                anywhere, without worrying about excessive fees or long
                processing times. Most platforms offer multi-currency support,
                making international transactions easier and more affordable
                than traditional banking methods.
              </p>
              <p
                className='fw-semibold tw-text-xl text-white bg-base-two-600 tw-px-8 tw-py-8 tw-rounded-md text-center'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                Many institutions now provide certifications recognized by
                industries, making it an economical pathway to career
                advancement.
              </p>
            </div>
            <div className='tw-mb-12'>
              <h4
                className='fw-normal text-dark-600 tw-mb-6 cursor-big tw-mb-6'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                Key Features of a Reliable Money Transfer Service
              </h4>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  1. Security &amp; Fraud Protection
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Ensuring your money is safe is a top priority. A reliable
                  platform should provide multi-layered security features,
                  including two-factor authentication (2FA), encryption, and
                  fraud detection systems to prevent unauthorized access.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  2. Speed &amp; Convenience
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Instant transfers allow users to send and receive money within
                  seconds. Whether its a local payment or an international
                  transaction, speed plays a significant role in customer
                  satisfaction.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3. Low Transaction Fees
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Many traditional banks charge high fees for money transfers.
                  Modern online platforms offer cost-effective solutions with
                  minimal fees, making it easier for users to manage their
                  finances.
                </p>
              </div>
            </div>
            <div>
              <h5
                className='fw-normal tw-text-dark-600 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                Benefits of Using an Online Payment Platform
              </h5>
              <p
                className='fw-normal tw-text-xl text-dark-500 tw-mb-8'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                Instant Transactions: Unlike traditional bank transfers, which
                can take days, online payments are processed within seconds.
                Global Accessibility: Send and receive money from anywhere in
                the without restrictions. make transactions hassle-free.
              </p>
              <div className='d-flex align-items-center tw-gap-6 flex-wrap tw-mb-8'>
                <Image
                  width={406}
                  height={380}
                  src='/assets/images/thumbs/blog-details-img3.png'
                  alt='Image'
                  data-aos='fade-up'
                  data-aos-duration={800}
                />
                <Image
                  width={406}
                  height={380}
                  src='/assets/images/thumbs/blog-details-img2.png'
                  alt='Image'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                />
              </div>
              <div className='border-neutral-50 border-end-0 border-start-0 tw-py-4 tw-mb-12'>
                <div className='d-flex align-items-center w-gap-3 justify-content-between flex-wrap'>
                  <div
                    className='d-flex align-items-center tw-gap-4 flex-wrap tw-mb-2'
                    data-aos='fade-up'
                    data-aos-duration={800}
                  >
                    <h5 className='fw-normal text-dark-600 tw-py-3 tw-ps-3'>
                      Tags:
                    </h5>
                    <div className='d-flex align-items-center tw-gap-2 flex-wrap'>
                      <button
                        type='button'
                        className='tw-px-6 tw-py-3 border-neutral-50 rounded-pill hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-500'
                      >
                        Wordpress
                      </button>
                      <button
                        type='button'
                        className='tw-px-6 tw-py-3 border-neutral-50 rounded-pill hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-500'
                      >
                        Machine Learning
                      </button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center tw-gap-4 flex-wrap'>
                    <h5 className='fw-normal text-dark-600 '>Follow Us :</h5>
                    <ul className='d-flex align-items-center tw-gap-2 flex-wrap'>
                      <li>
                        <a
                          href='https://www.facebook.com'
                          className='tw-w-11 tw-h-11 bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 tw-text-xl'
                        >
                          <i className='ph ph-facebook-logo' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.instagram.com/accounts/login/?hl=en'
                          className='tw-w-11 tw-h-11 bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 tw-text-xl'
                        >
                          <i className='ph ph-instagram-logo' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://x.com/i/flow/login'
                          className='tw-w-11 tw-h-11 bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 tw-text-xl'
                        >
                          <i className='ph ph-twitter-logo' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.linkedin.com/login'
                          className='tw-w-11 tw-h-11 bg-base-two-10 rounded-circle d-flex align-items-center justify-content-center hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 tw-text-xl'
                        >
                          <i className='ph ph-linkedin-logo' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='tw-mb-15'>
                <h4
                  className='fw-normal text-dark-600 tw-mb-8 cursor-big'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  (02) Reviews
                </h4>
                <div
                  className='tw-mb-8'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <div className='d-flex tw-gap-6 flex-wrap'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/blog-details-img4.png'
                      alt='Image'
                      className='tw-w-15 tw-h-15'
                    />
                    <div className='max-w-730-px w-100 '>
                      <span className='fw-normal tw-text-4 text-dark-500 tw-mb-1 d-block'>
                        March 21, 2025
                      </span>
                      <span className='fw-semibold tw-text-xl text-dark-900 tw-mb-2 '>
                        Marvin McKinney
                      </span>
                      <p className='fw-normal tw-text-lg text-dark-500 tw-mb-5'>
                        I have been using this platform for months, and I am
                        truly impressed! Transfers are instant, and the security
                        features give me peace of mind. Highly recommended!
                      </p>
                      <button
                        type='button'
                        className='fw-normal tw-text-4 text-base-two-600 d-flex align-items-center tw-gap-1'
                      >
                        Reply
                        <span>
                          <i className='ph ph-arrow-up-right' />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='' data-aos='fade-up' data-aos-duration={800}>
                  <div className='d-flex tw-gap-6 flex-wrap'>
                    <Image
                      width={60}
                      height={60}
                      src='/assets/images/thumbs/blog-details-img5.png'
                      alt='Image'
                      className='tw-w-15 tw-h-15'
                    />
                    <div className='max-w-730-px w-100 '>
                      <span className='fw-normal tw-text-4 text-dark-500 tw-mb-1 d-block'>
                        March 22, 2025
                      </span>
                      <span className='fw-semibold tw-text-xl text-dark-900 tw-mb-2 '>
                        Kristin Watson
                      </span>
                      <p className='fw-normal tw-text-lg text-dark-500 tw-mb-5'>
                        I frequently send money to my family overseas, and this
                        service has made it so easy. The fees are low, and the
                        exchange rates are great. No delays, no hassles!
                      </p>
                      <button
                        type='button'
                        className='fw-normal tw-text-4 text-base-two-600 d-flex align-items-center tw-gap-1'
                      >
                        Reply
                        <span>
                          <i className='ph ph-arrow-up-right' />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5
                  className='fw-normal text-dark-600 tw-mb-8'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  Submit Your Reviews
                </h5>
                <div className='tw-mb-8'>
                  <div className='row gy-4'>
                    <div className='col-lg-6'>
                      <div data-aos='fade-up' data-aos-duration={800}>
                        <label
                          htmlFor='name'
                          className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
                        >
                          Your Name*
                        </label>
                        <input
                          name='name'
                          type='text'
                          id='name'
                          placeholder='Enter your name'
                          className='fw-normal tw-text-4 text-dark-500 tw-px-4 tw-py-4 bg-white rounded-pill w-100 border-neutral-50 border focus-visible-border-main-600'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div data-aos='fade-up' data-aos-duration={1000}>
                        <label
                          htmlFor='email'
                          className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
                        >
                          Email Address*
                        </label>
                        <input
                          name='email'
                          type='text'
                          id='email'
                          placeholder='Enter email address'
                          className='fw-normal tw-text-4 text-dark-500 tw-px-4 tw-py-4 bg-white rounded-pill w-100 border-neutral-50 border focus-visible-border-main-600'
                        />
                      </div>
                    </div>
                    <div className='col-12'>
                      <label
                        htmlFor='message'
                        className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
                      >
                        Write your comment *
                      </label>
                      <textarea
                        name='message'
                        placeholder='Write your comment'
                        id='message'
                        className='tw-px-6 tw-py-4 w-100 border-neutral-50 border tw-rounded-xl tw-h-200-px focus-visible-border-main-600'
                        defaultValue={""}
                      />
                    </div>
                    <div className='col-12'>
                      <button
                        className='tw-px-5 tw-py-4 rounded-pill bg-base-two-600 text-white w-100 fw-semibold tw-text-lg '
                        data-aos='fade-up'
                        data-aos-duration={800}
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='max-w-400-px w-100'>
            <div
              className='bg-white tw-px-6 tw-py-6 tw-rounded-md tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='d-flex align-items-center tw-gap-2 tw-mb-6'>
                <span className='bg-base-two-600 tw-w-1 tw-h-7' />
                <h4 className='fw-normal text-dark-600 cursor-big'>Search</h4>
              </div>
              <div className='position-relative'>
                <input
                  name='name'
                  type='text'
                  placeholder='Search'
                  className='bg-base-two-10 tw-py-305 tw-px-3 tw-rounded-xl w-100 text-dark-500 border-neutral-10 border focus-visible-border-main-600'
                />
                <button
                  type='submit'
                  className='tw-text-xl tw-w-8 tw-h-8 tw-rounded-md text-white bg-base-two-600 position-absolute tw-end-0 top-50 translate-middle-y tw-me-205'
                >
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
          </div>
        </div>
        <div className='pt-140'>
          <div className='d-flex align-items-center tw-gap-3 justify-content-between tw-mb-80-px flex-wrap'>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Related Articles
            </h2>
            <div
              className='position-relative max-w-140-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/blog-details'
                className='blog-details-link w-100 text-center tw-py-205 bg-main-600 text-dark-700 fw-semibold tw-text-lg tw-rounded-md border-two-px-solid'
              >
                VIEW MORE
              </Link>
            </div>
          </div>
          <div className='row gy-4'>
            <div className='col-xxl-6'>
              <div
                className='bg-white tw-px-6 tw-py-6 tw-rounded-xl'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='position-relative tw-mb-6'>
                  <Image
                    width={588}
                    height={300}
                    src='/assets/images/thumbs/blog-digital-marketing-img1.png'
                    alt='Image'
                  />
                  <div className='digital-marketing'>
                    <span className='blog-details__marketing tw-px-3 tw-py-2 tw-rounded-md bg-base-two-600 text-white fw-semibold top-0 tw-start-0 position-absolute'>
                      Digital Marketing
                    </span>
                  </div>
                </div>
                <div>
                  <div className=' d-flex align-items-center justify-content-between tw-mb-6 tw-gap-3'>
                    <span className='fw-normal tw-text-lg text-dark-500'>
                      Aug 17, 2025
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-500 tw-px-3 tw-py-2 bg-neutral-10 tw-rounded-md'>
                      By Adam Smith
                    </span>
                  </div>
                  <h3 className='fw-normal cursor-big tw-mb-10'>
                    <a href='#' className='text-dark-600'>
                      Analytics-Driven Strategies for Business Success
                    </a>
                  </h3>
                  <a
                    href='#'
                    className='tw-px-6 tw-py-3 border-neutral-50 border tw-rounded-xl w-100 text-center fw-semibold tw-text-lg text-dark-600'
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xxl-6'>
              <div
                className='bg-white tw-px-6 tw-py-6 tw-rounded-xl'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='position-relative tw-mb-6'>
                  <Image
                    width={588}
                    height={300}
                    src='/assets/images/thumbs/blog-digital-marketing-img2.png'
                    alt='Image'
                  />
                  <div className='digital-marketing'>
                    <span className='blog-details__marketing tw-px-3 tw-py-2 tw-rounded-md bg-base-two-600 text-white fw-semibold top-0 tw-start-0 position-absolute'>
                      Digital Marketing
                    </span>
                  </div>
                </div>
                <div>
                  <div className=' d-flex align-items-center justify-content-between tw-mb-6 tw-gap-3'>
                    <span className='fw-normal tw-text-lg text-dark-500'>
                      Aug 17, 2025
                    </span>
                    <span className='fw-semibold tw-text-lg text-dark-500 tw-px-3 tw-py-2 bg-neutral-10 tw-rounded-md'>
                      By Adam Smith
                    </span>
                  </div>
                  <h3 className='fw-normal cursor-big tw-mb-10'>
                    <a href='#' className='text-dark-600'>
                      Analytics-Driven Strategies for Business Success
                    </a>
                  </h3>
                  <Link
                    href='/blog-details'
                    className='tw-px-6 tw-py-3 border-neutral-50 border tw-rounded-xl w-100 text-center fw-semibold tw-text-lg text-dark-600'
                  >
                    View Details
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

export default BlogDetailsInner;
