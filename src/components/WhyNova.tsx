import Image from "next/image";

const WhyNova: React.FC = () => {
  return (
    <section className='z-1 bg-neutral-10 py-140 position-relative overflow-hidden'>
      <div className='container'>
        <div className='paynone-item margin-block-start-60px'>
          <div className='text-center justify-content-center align-items-center'>
            <h2
              className='paynone-title tw-text-80-px fw-normal text-dark-600 tw-mb-3 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              WHY NOVAPAY
            </h2>
            <p
              className='max-w-322 text-dark-500 tw-text-lg fw-normal mx-auto'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              NovaPay is constantly growing for a World without high fees.
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-one max-w-307 novapay-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start--120px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Zero Cost to Start
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Your USD, EUR, and global currency accounts are completely free — no monthly fees to worry about.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-two max-w-307 novapay-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start--45px margin-block-start-200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <Image
                  width={78}
                  height={78}
                  src='/assets/images/icon/novapay-img2.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Smart Crypto Withdrawals
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                  Send your balance directly to trusted exchanges, unlock stablecoins instantly, and access P2P channels for optimal pricing.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-three max-w-307 novapay-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-block-start--200px margin-inline-start-100px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <Image
                  width={80}
                  height={80}
                  src='/assets/images/icon/novapay-img1.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Speed You Can Trust
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                  We process settlements the same day, so your funds land in your account without delay.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-four max-w-307 novapay-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start-70px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Smart Payment Management for Organizations
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Bring your team into one secure dashboard—monitor spending, assign roles, and streamline all company transactions.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-five max-w-307 novapay-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start-107px margin-block-start-176px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <Image
                  width={80}
                  height={80}
                  src='/assets/images/icon/novapay-img3.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Your Secure Digital Wallet
                </h5>
                <p className='fw-normal tw-text-xl text-white line-clamp-3'>
                  Protected by bank-grade security to keep your assets safe at all times.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-six max-w-307 novapay-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-inline-start-100px margin-block-start--200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Worldwide Payment Connectivity
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Access global banking rails and crypto networks to move money across borders instantly and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNova;
