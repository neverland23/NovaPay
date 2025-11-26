import Link from "next/link";

const DashboardFooter: React.FC = () => {
  return (
    <div className='tw-py-6'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-6 justify-content-between flex-wrap'>
          <p className='text-dark-600 fw-normal tw-text-lg '>
            Copyright @ {new Date().getFullYear()} paynone Designed By
            <span className='text-primary-600'>wowtheme7</span>
          </p>
          <ul className='d-flex align-items-center tw-gap-2 flex-wrap'>
            <li>
              <Link
                href='https://www.facebook.com'
                className='w-11 h-11 bg-base-two-10 tw-text-xl text-dark-600 rounded-circle hover-bg-base-two-600 hover-text-white tw-duration-400 d-flex align-items-center justify-content-center'
              >
                <i className='ph ph-facebook-logo' />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.instagram.com/accounts/login'
                className='w-11 h-11 bg-base-two-10 tw-text-xl text-dark-600 rounded-circle hover-bg-base-two-600 hover-text-white tw-duration-400 d-flex align-items-center justify-content-center'
              >
                <i className='ph ph-instagram-logo' />
              </Link>
            </li>
            <li>
              <Link
                href='https://twitter-cl.vercel.app/login'
                className='w-11 h-11 bg-base-two-10 tw-text-xl text-dark-600 rounded-circle hover-bg-base-two-600 hover-text-white tw-duration-400 d-flex align-items-center justify-content-center'
              >
                <i className='ph ph-twitter-logo' />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.linkedin.com'
                className='w-11 h-11 bg-base-two-10 tw-text-xl text-dark-600 rounded-circle hover-bg-base-two-600 hover-text-white tw-duration-400 d-flex align-items-center justify-content-center'
              >
                <i className='ph ph-linkedin-logo' />
              </Link>
            </li>
          </ul>
          <div className='d-flex align-items-center tw-gap-6 flex-wrap'>
            <Link href='#' className='fw-normal tw-text-lg text-dark-500'>
              Privacy policy
            </Link>
            <Link href='#' className='fw-normal tw-text-lg text-dark-500'>
              Terms of condition
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
