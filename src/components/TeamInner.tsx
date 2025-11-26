import Image from "next/image";

const TeamInner: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140'>
      <div className='container'>
        <div className='max-w-526-px w-100 mx-auto tw-mb-80-px'>
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
            <h5 className='fw-normal text-primary-600'>Team Members</h5>
          </div>
          <h2
            className='fw-normal text-dark-600 text-center cursor-big'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            Experts Team Member For Your Support
          </h2>
        </div>
        <div className='tw-mb-80-px'>
          <div className='row gy-4'>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img1.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Jane Cooper
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Marketing Coordinator
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img2.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Darlene Robertson
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Medical Assistant
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img7.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Marvin McKinney
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Web Designer
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img3.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Theresa Webb
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Dog Trainer
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img4.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Darlene Robertson
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Software Tester
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img5.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Darlene Robertson
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Software Tester
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img6.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Darlene Robertson
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Software Tester
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div
                className='group-item group'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='tw-h-380-px position-relative'>
                  <div className='bg-white tw-rounded-xl position-absolute w-100 h-100 top-0 start-0 text-center tw-visible tw-opacity-1 group-hover-item-hiddem group-hover-item-opacity-0 tw-duration-500'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/images/thumbs/our-team-member-other-img7.png'
                      alt='Image'
                      className='tw-mt-10'
                    />
                  </div>
                  <div className='team-member__hover-img position-absolute top-0 start-0 w-100 h-100 tw-invisible tw-opacity-0 group-hover-item-visible group-hover-item-opacity-1 tw-duration-500 bg-img'>
                    <Image
                      width={306}
                      height={380}
                      src='/assets/images/thumbs/our-team-member-other-img8.png'
                      alt='Image'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='position-absolute tw-start-0 bottom-0 tw-mb-6 tw-ms-6'>
                    <span className='fw-semibold tw-mb-1 tw-text-lg text-dark-600 d-block group-hover-text-white tw-duration-500'>
                      Darlene Robertson
                    </span>
                    <span className='fw-normal tw-text-4 text-dark-500 group-hover-text-white tw-duration-500'>
                      Software Tester
                    </span>
                  </div>
                  <button
                    type='button'
                    className='tw-w-13 tw-h-13 bg-white tw-rounded-xl tw-text-6 position-absolute tw-end-0 bottom-0 z-1 group-hover-bg-base-two-600 tw-duration-500 group-hover-text-white'
                  >
                    <i className='ph ph-arrow-up-right' />
                  </button>
                  <span className='our-team-member tw-h-72-px tw-w-72-px bg-neutral-10 position-absolute tw-end-0 bottom-0 border-top-left-24-px' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul
          className='d-flex align-items-center justify-content-center tw-gap-1 flex-wrap'
          data-aos='fade-up'
          data-aos-duration={600}
        >
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              <i className='ph ph-caret-double-left' />
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='tw-w-10 tw-h-10 bg-white tw-text-xl text-dark-600 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 hover-bg-base-two-600 hover-text-white tw-duration-500'
            >
              <i className='ph ph-caret-double-right' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TeamInner;
