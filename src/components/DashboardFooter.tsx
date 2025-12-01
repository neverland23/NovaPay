import Link from "next/link";

const DashboardFooter: React.FC = () => {
  return (
    <div className='tw-py-6'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-6 justify-content-between flex-wrap'>
          <p className='text-dark-600 fw-normal tw-text-lg '>
            Copyright @ {new Date().getFullYear()} NovaPay
          </p>
          {/* <ul className='d-flex align-items-center tw-gap-2 flex-wrap'>
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
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;
