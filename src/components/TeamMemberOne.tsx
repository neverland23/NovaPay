import Image from "next/image";
import Link from "next/link";

const TeamMemberOne: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-80-px'>
          <div className='max-w-526-px w-100'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600 '>Team Members</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              Experts Team Member For Your Support
            </h2>
          </div>
          <div className='max-w-360-px w-100 '>
            <p
              className='fw-normal tw-text-lg text-dark-500 tw-mb-6'
              data-aos='fade-up'
              data-aos-duration={900}
            >
              We are all passionate and committed to deliver high quality
              services to our clients.
            </p>
            <div
              className='position-relative z-1 max-w-145-px w-100'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <Link
                href='/about-us'
                className='team-members-link w-100 text-center tw-py-205 tw-rounded-md bg-main-600 text-dark-700 tw-text-lg fw-semibold border-two-px-solid'
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </section>
  );
};

export default TeamMemberOne;
