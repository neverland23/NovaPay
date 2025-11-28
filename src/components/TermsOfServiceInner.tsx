import Image from "next/image";
import Link from "next/link";

const TermsOfServiceInner: React.FC = () => {
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
          <div className='w-100'>
            <div className='tw-mb-12'>
              <h2
                className='fw-normal text-dark-600 tw-mb-3 cursor-big'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                NovaPay — Terms of Service
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
                  1. Acceptance of Terms
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  By accessing or using NovaPay (“the Service”), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, you must discontinue use immediately.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  2. Description of Service
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  NovaPay is a global financial technology platform providing secure digital payment and financial management solutions, including:
                  <br></br>
                  <span className="dot-item">Digital wallets and multi-currency payment processing</span>
                  <span className="dot-item">Bank account connectivity and virtual account creation</span>
                  <span className="dot-item">Card issuance and card-based payment services</span>
                  <span className="dot-item">Cryptocurrency payment acceptance and settlement</span>
                  <span className="dot-item">Transaction monitoring, analytics, and reporting tools</span>
                  We may enhance or modify these services at any time to improve security, compliance, user experience, or performance.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3. User Accounts & Registration
                </span>
                <br></br>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3.1 Account Creation
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  To access NovaPay services, you must create an account and provide complete, accurate, and up-to-date information. You are fully responsible for all activity conducted through your account credentials.
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3.2 Account Security
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  You must maintain strict confidentiality of your login credentials and notify us immediately of any unauthorized access. NovaPay is not liable for losses resulting from your failure to safeguard your account.
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  3.3 Eligibility
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  You must be at least 18 years old and legally able to enter binding agreements. By using NovaPay, you confirm that you meet these eligibility requirements.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1400}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  4. Use of the Service
                </span>
                <br></br>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  4.1 Permitted Use
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  You agree to use NovaPay only for lawful, compliant purposes. You must not:
                  <br></br>
                  <span className="dot-item">Violate any applicable laws or regulations</span>
                  <span className="dot-item">Infringe on any third-party rights</span>
                  <span className="dot-item">Upload or transmit harmful or malicious content</span>
                  <span className="dot-item">Attempt to bypass or compromise system security</span>
                  <span className="dot-item">Use the Service to engage in fraudulent, deceptive, or illegal activity</span>
                  <span className="dot-item">Interfere with or disrupt platform operations</span>
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  4.2 Prohibited Activities
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Using NovaPay for money laundering, terrorist financing, sanctions violations, or other illicit financial activity is strictly prohibited. We may suspend or terminate any account suspected of such activity.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  5. Financial Transactions
                </span>
                <br></br>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  5.1 Transaction Processing
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Transactions are processed through regulated financial institutions and secure third-party processors. NovaPay is not responsible for processing delays caused by banks, networks, or external service providers.
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  5.2 Fees & Charges
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Certain services include usage fees, which will always be disclosed prior to processing a transaction. By using the Service, you agree to all applicable fees.
                </p>
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  5.3 Refunds & Cancellations
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Refund eligibility varies by transaction type. Some transactions are final and non-refundable. Please review the service-specific terms before submitting any payment.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  6. KYC, AML & Compliance
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  To comply with global regulations, NovaPay requires identity verification (KYC). You agree to provide accurate documentation and authorize us to verify your identity. Accounts providing false, incomplete, or fraudulent information may be suspended or closed.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  7. Intellectual Property
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  All platform content, branding, software features, and design elements are exclusive property of NovaPay and protected by international IP laws. Reproduction, modification, or unauthorized distribution is prohibited.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  8. Limitation of Liability
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  To the fullest extent permitted by law, NovaPay is not liable for:
                  <br></br>
                  <span className="dot-item">Indirect, incidental, or consequential damages</span>
                  <span className="dot-item">Loss of revenue, data, or profits</span>
                  <span className="dot-item">Delays, system outages, or transaction failures outside our control</span>
                </p>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Your sole remedy for dissatisfaction with the Service is discontinuing use.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  9. Indemnification
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  You agree to indemnify and hold NovaPay, its affiliates, employees, and partners harmless from claims, damages, losses, or liabilities related to your use of the Service, violation of these Terms, or infringement of third-party rights.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  10. Service Modifications & Account Termination
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  We may modify, discontinue, or restrict the Service at any time. NovaPay may suspend or terminate user accounts without notice for violations of these Terms or any action deemed harmful to the platform or its users.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  11. Dispute Resolution
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  Disputes arising from these Terms shall be resolved through binding arbitration. You waive your right to participate in class-action lawsuits or collective arbitration.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  12. Governing Law
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  These Terms are governed by the laws of the jurisdiction in which NovaPay operates, without regard to conflict-of-law principles.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  13. Changes to Terms
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  NovaPay may update these Terms periodically. Continued use of the Service constitutes acceptance of the updated Terms.
                </p>
              </div>
              <div
                className='tw-mb-4'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <span className='fw-semibold tw-text-xl text-dark-600 tw-mb-2'>
                  14. Contact Information
                </span>
                <p className='fw-normal tw-text-lg text-dark-500 '>
                  For questions, support, or legal inquiries, contact us at: <br></br>
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

export default TermsOfServiceInner;
