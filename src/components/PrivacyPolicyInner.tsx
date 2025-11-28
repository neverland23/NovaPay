import Image from "next/image";
import Link from "next/link";

const PrivacyPolicyInner: React.FC = () => {
  return (
    <section className='py-140 bg-neutral-10 z-1 overflow-hidden'>
      <div className='container'>
        <Image
          width={1296}
          height={600}
          src='/assets/images/thumbs/our-features-two-img1.png'
          alt='Image'
          className='bg-img tw-mb-10'
          data-aos='zoom-in'
          data-aos-duration={1500}
        />
        <div className='d-flex tw-gap-10 w-100 flex-wrap tw-mb-5'>
          <div className='w-100'>
            <div className='tw-mb-12'>
              <h2
                className='fw-normal text-dark-600 tw-mb-3 cursor-big'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                NovaPay — Privacy Policy
              </h2>
              <p
                className='fw-semibold tw-text-xl text-white bg-base-two-600 tw-px-8 tw-py-8 tw-rounded-md text-center'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                Last Updated: November 27, 2025
              </p>
            </div>
            <div className='tw-mb-12'>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  1. Introduction
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  NovaPay (“we,” “us,” or “our”) is committed to protecting your privacy and securing your personal and financial information. This Privacy Policy outlines how we collect, use, and protect your data when using our financial services. 
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  2. Information We Collect
                </span>
                <br></br>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  2.1 Personal Information
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We may collect the following information:
                  <br></br>
                  <span className="dot-item">Name, email, phone number</span>
                  <span className="dot-item">Residential address and country</span>
                  <span className="dot-item">Payment methods and bank details</span>
                  <span className="dot-item">Government-issued identification and verification documents</span>
                  <span className="dot-item">Financial, transactional, and account activity data</span>
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  2.2 Automatically Collected Information
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We automatically collect:
                  <br></br>
                  <span className="dot-item">Device details and IP address</span>
                  <span className="dot-item">Browser type, operating system, and version</span>
                  <span className="dot-item">Usage behavior and interaction logs</span>
                  <span className="dot-item">Cookies and tracking technologies</span>
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3. How We Use Your Information
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We use personal information to:
                  <br></br>
                  <span className="dot-item">Deliver and improve our financial services</span>
                  <span className="dot-item">Process payments and manage your account</span>
                  <span className="dot-item">Verify identity and comply with KYC/AML laws</span>
                  <span className="dot-item">Detect fraud and protect platform security</span>
                  <span className="dot-item">Provide customer support and notifications</span>
                  <span className="dot-item">Personalize user experience</span>
                  <span className="dot-item">Communicate service-related updates</span>
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  4. Information Sharing & Disclosure
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We do not sell your information. We share data only when necessary:
                  <br></br>
                  <span className="dot-item">Service Providers: Payment processors, banks, hosting partners, identity verification services</span>
                  <span className="dot-item">Compliance & Legal: As required by regulators, law enforcement, or court orders</span>
                  <span className="dot-item">Business Transfers: During mergers, acquisitions, or corporate restructuring</span>
                  <span className="dot-item">With Your Consent: When you authorize sharing</span>
                  <span className="dot-item">Security: To prevent fraud or protect NovaPay and its users</span>
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  5. Data Security
                </span>
                <br></br>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We use advanced security measures including encryption, secure API protocols, tokenization, and access controls. While we strive for maximum security, no digital system is completely risk-free.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  6. Your Rights & Choices
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  You may:
                  <br></br>
                  <span className="dot-item">Access or update your personal information</span>
                  <span className="dot-item">Request corrections or deletion</span>
                  <span className="dot-item">Close your account and request data removal</span>
                  <span className="dot-item">Opt out of marketing communications</span>
                  <span className="dot-item">Request data portability</span>
                  <span className="dot-item">Withdraw consent where applicable</span>
                </p>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  To exercise your rights, contact us via support.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  7. Cookies & Tracking Technologies
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  NovaPay uses cookies to improve performance, enhance user experience, and analyze usage. You may disable cookies, but some features may not function properly.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  8. Children’s Privacy
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  NovaPay is not intended for individuals under 18. We do not knowingly collect data from minors.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  9. International Data Transfers
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Your information may be stored or processed in countries outside your residence. We ensure that adequate legal and security safeguards are applied.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  10. Changes to Privacy Policy
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We may update this Privacy Policy at any time. Continued use of NovaPay after updates indicates acceptance of the revised policy.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  11. Contact Us
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  For privacy-related questions or requests, contact us at: <br></br>
                  support@novapay.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyInner;
