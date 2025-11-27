import Image from "next/image";

const FAQOne: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='max-w-856 justify-content-center mx-auto'>
          <div className='tw-mb-12'>
            <div
              className='d-flex align-items-center justify-content-center text-center tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <span>
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt='Image'
                />
              </span>
              <h5 className='text-primary-600 fw-normal cursor-big'>Faq</h5>
            </div>
            <div className='max-w-560 text-center justify-content-center align-items-center mx-auto'>
              <h2
                className='fw-normal text-dark-600 tw-mb-4 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Frequently Asked Questions
              </h2>
              <p
                className='fw-normal tw-text-lg text-dark-500'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Browse our comprehensive FAQ section for clear, concise answers
                to your most common banking queries.
              </p>
            </div>
          </div>
          <div className='tw-mb-80-px'>
            <ul
              className='nav nav-pills nav-faq mb-3 align-items-center tw-gap-6'
              id='pills-tab-two'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3 active'
                  id='pills-homeeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-homeeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-homeeee'
                  aria-selected='true'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img1.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    General Questions
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-mobileeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-mobileeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-mobileeee'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img2.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Benefit
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-transferrrr-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-transferrrr'
                  type='button'
                  role='tab'
                  aria-controls='pills-transferrrr'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img3.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Money Transfer
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-feessss-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-feessss'
                  type='button'
                  role='tab'
                  aria-controls='pills-feessss'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img4.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Fees and Charges
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent-two'>
            <div
              className='tab-pane fade show active'
              id='pills-homeeee'
              role='tabpanel'
              aria-labelledby='pills-homeeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-one'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What is NovaPay?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        NovaPay is a global banking and payment platform that provides users with their own USD and EUR accounts to send, receive, withdraw, and manage money across 100+ countries. We support traditional banking rails as well as modern digital payment channels like crypto withdrawals.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      Who can open a NovaPay account?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Anyone who needs global payment flexibility — freelancers, remote workers, businesses, and everyday individuals. Account creation is free, and there are no monthly maintenance fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree1'
                      aria-expanded='false'
                      aria-controls='collapseThree1'
                    >
                      How fast can I start using my account?
                    </button>
                  </h2>
                  <div
                    id='collapseThree1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Once you complete the simple verification process, your USD or EUR account becomes active immediately. You can start receiving payments the same day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-mobileeee'
              role='tabpanel'
              aria-labelledby='pills-mobileeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-two'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOnee'
                      aria-expanded='true'
                      aria-controls='collapseOnee'
                    >
                      What are the main benefits of using NovaPay?
                    </button>
                  </h2>
                  <div
                    id='collapseOnee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        You get free USD/EUR accounts, same-day settlements, global payment coverage, crypto withdrawal options, virtual cards, invoice generation, and multilingual customer support.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoo'
                      aria-expanded='false'
                      aria-controls='collapseTwoo'
                    >
                      Can I earn interest on my balance?
                    </button>
                  </h2>
                  <div
                    id='collapseTwoo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Yes. You can earn up to 8% annual interest on your savings by simply holding funds in your account.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree2'
                      aria-expanded='false'
                      aria-controls='collapseThree2'
                    >
                      Does NovaPay support business use?
                    </button>
                  </h2>
                  <div
                    id='collapseThree2'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Absolutely. Businesses can open USD/EUR accounts, send batch payments to global teams, receive funds from international clients, and manage large-scale transactions easily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-transferrrr'
              role='tabpanel'
              aria-labelledby='pills-transferrrr-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-three'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneee'
                      aria-expanded='true'
                      aria-controls='collapseOneee'
                    >
                      What types of payments can I receive?
                    </button>
                  </h2>
                  <div
                    id='collapseOneee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        You can receive ACH, Wire, SEPA, and SWIFT transfers from banks worldwide. You can also receive payments from platforms like PayPal, Wise, Revolut, Upwork, Deel, Payoneer, YouTube, and more.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwooo'
                      aria-expanded='false'
                      aria-controls='collapseTwooo'
                    >
                      How can I withdraw money from my NovaPay account?
                    </button>
                  </h2>
                  <div
                    id='collapseTwooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        You can withdraw via: <br/>

                        Bank transfers <br/>

                        Mobile money wallets <br/>

                        Crypto exchanges (Binance, Bybit, Coinbase, Coins.PH, etc.)
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree3'
                      aria-expanded='false'
                      aria-controls='collapseThree3'
                    >
                      Are money transfers instant?
                    </button>
                  </h2>
                  <div
                    id='collapseThree3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Incoming USD/EUR transfers are processed instantly whenever supported. For outgoing transfers, Same-Day Settlements are available on supported rails like ACH and SEPA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-feessss'
              role='tabpanel'
              aria-labelledby='pills-feessss-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-four'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneeee'
                      aria-expanded='true'
                      aria-controls='collapseOneeee'
                    >
                      Is it free to open and maintain an account?
                    </button>
                  </h2>
                  <div
                    id='collapseOneeee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Yes. Opening a USD or EUR account is completely free, and there are no monthly or hidden maintenance fees.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoooo'
                      aria-expanded='false'
                      aria-controls='collapseTwoooo'
                    >
                      Are there fees for sending or receiving money?
                    </button>
                  </h2>
                  <div
                    id='collapseTwoooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Receiving money is free in most cases. Sending funds (ACH, Wire, SEPA, or crypto withdrawals) may have small service fees depending on the transfer method and destination.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree4'
                      aria-expanded='false'
                      aria-controls='collapseThree4'
                    >
                      Are there currency conversion or FX fees?
                    </button>
                  </h2>
                  <div
                    id='collapseThree4'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Yes, FX conversions apply when switching between currencies (USD ⇄ EUR ⇄ GBP). We always provide competitive market-based rates with full transparency before you confirm the exchange.
                      </p>
                    </div>
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

export default FAQOne;
