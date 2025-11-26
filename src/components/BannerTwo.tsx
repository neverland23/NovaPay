import Image from "next/image";
import Link from "next/link";
import CountryDropdown from "@/helper/CountryDropdown";

const BannerTwo: React.FC = () => {
  return (
    <section className='bg-base-two-600 py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={224}
        height={221}
        src='/assets/images/shape/arrow-shape1.png'
        alt='Image'
        className='banner-two-shape-three position-absolute z-n1 inset-inline-start-42-persent inset-block-start-162px rotate--22deg d-lg-block d-none animate-wobble__two'
      />
      <Image
        width={78}
        height={78}
        src='/assets/images/shape/banner-two-shape3.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-start-100px inset-inline-start-157px d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={83}
        height={71}
        src='/assets/images/shape/banner-two-shape4.png'
        alt='Image'
        className='position-absolute z-n1 inset-inline-end-64px inset-block-start-164px  d-lg-block d-none animation-roatation-two__two'
      />
      <Image
        width={109}
        height={62}
        src='/assets/images/shape/banner-two-shape5.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-99px inset-inline-start-87px  d-lg-block d-none animation-Updowm__two'
      />
      <Image
        width={55}
        height={53}
        src='/assets/images/shape/circle-shape-img1.png'
        alt='Image'
        className='position-absolute z-n1 inset-block-end-103px inset-inline-end-103px  d-lg-block d-none animation-rotation__two'
      />
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-7'>
            <div className='position-relative z-1'>
              <div>
                <div
                  className='d-flex align-items-center tw-gap-1 tw-mb-3'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <Image
                    width={30}
                    height={30}
                    src='/assets/images/icon/star-icon1.png'
                    alt='Image'
                  />
                  <h5 className='fw-normal text-white'>
                    Trusted by over 3M customers
                  </h5>
                </div>
                <div
                  className='position-relative'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='banner-two-title tw-text-70-px text-white fw-normal tw-mb-3 cursor-big'>
                    Send Money
                    <span className='text-main-600'>Anytime,</span>
                    Anywhere
                  </h2>
                  <Image
                    width={305}
                    height={12}
                    src='/assets/images/shape/banner-two-shape1.png'
                    alt='Image'
                    className='banner-two-shape-one position-absolute z-n1 inset-block-start-82px inset-inline-end-26px d-lg-block d-none'
                  />
                </div>
                <p
                  className='fw-normal tw-text-xl text-neutral-10 max-w-570 tw-mb-10'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  Effortlessly send, receive, and request money online with
                  paynone. Get a tailored solution for your business needs.
                </p>
                <div
                  className='d-flex align-items-center tw-gap-805 flex-wrap'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <div className='position-relative z-1'>
                    <Link
                      href='/log-in'
                      className='banner-two-link bg-main-600 fw-semibold tw-text-lg text-dark-600 tw-px-10 tw-py-3 rounded-3 border-two-px-solid hover-text-dark-600'
                    >
                      OPEN A FREE ACCOUNT
                    </Link>
                  </div>
                  <Link
                    href='/our-services'
                    className='fw-semibold tw-text-lg text-white hover-text-main-600'
                  >
                    HOW IT WORKS
                  </Link>
                </div>
              </div>
              <Image
                width={56}
                height={56}
                src='/assets/images/shape/banner-two-shape2.png'
                alt='Image'
                className='banner-two-shape-two position-absolute inset-inline-end-68px inset-block-end-40px z-n1 d-lg-block d-none animation-pulse__two'
              />
            </div>
          </div>
          <div className='col-lg-5'>
            <div
              className='position-relative'
              data-aos='zoom-in'
              data-aos-duration={1500}
            >
              <div className='banner-two-card bg-white tw-px-6 tw-py-6 rounded-3 border-base-two-600'>
                <div className='text-center tw-mb-6'>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-mb-2'>
                    Exchange Rate
                  </span>
                  <h4 className='fw-normal text-dark-600 cursor-big'>
                    2GBP = 2.45975 USD
                  </h4>
                </div>
                <div className='tw-mb-5'>
                  <div className='tw-mb-3'>
                    <label
                      htmlFor='send'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                    >
                      You Send*
                    </label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        name='send'
                        placeholder='$25,000'
                        id='send'
                        className='tw-px-3 tw-py-3 w-100 fw-semibold tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
                      />

                      {/* CountryDropdown */}
                      <CountryDropdown />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor='gets'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                    >
                      Recipient Gets*
                    </label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        name='gets'
                        placeholder='$14,250.00'
                        id='gets'
                        className='tw-px-3 tw-py-3 w-100 fw-semibold tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
                      />
                      {/* CountryDropdown */}
                      <CountryDropdown />
                    </div>
                  </div>
                </div>
                <div className='tw-mb-5'>
                  <div className='tw-mb-3'>
                    <label
                      htmlFor='Deliver'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                    >
                      Deliver To*
                    </label>
                    <select
                      name='deliver'
                      id='Deliver'
                      className='tw-px-3 tw-py-3 w-100 fw-normal tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
                    >
                      <option value={1}>Bank</option>
                      <option value={2}>Insurance</option>
                      <option value={3}>Investment</option>
                      <option value={4}>Loan</option>
                      <option value={5}>Credit Card</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor='paywith'
                      className='fw-normal tw-text-4 text-dark-600 tw-mb-2'
                    >
                      Pay With*
                    </label>
                    <select
                      name='paywith'
                      id='paywith'
                      className='tw-px-3 tw-py-3 w-100 fw-medium tw-text-4 text-dark-600 rounded-3 border-neutral-50 focus-visible-border-main-600'
                    >
                      <option value={1}>Cash Pickup</option>
                      <option value={2}>Bank Transfer</option>
                      <option value={3}>Mobile Wallet</option>
                      <option value={4}>Home Delivery</option>
                    </select>
                  </div>
                </div>
                <div className='tw-mb-6'>
                  <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
                    <span className='fw-normal tw-text-4 text-dark-600'>
                      Should Arrive
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      Should Arrive
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
                    <span className='fw-normal tw-text-4 text-dark-600'>
                      Fee
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      GBP 0.00
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-3'>
                    <span className='fw-normal tw-text-4 text-dark-600'>
                      Total To Pay
                    </span>
                    <span className='fw-semibold tw-text-4 text-dark-600'>
                      GBP 750.00
                    </span>
                  </div>
                </div>
                <div className='position-relative z-1'>
                  <button className='banner-two-button bg-dark-600 w-100 tw-py-3 text-white rounded-3 border-warning-600-2px fw-semibold'>
                    CONTINUE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
