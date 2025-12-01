import Link from "next/link";

const TopHeader: React.FC = () => {
  return (
    <div className='bg-main-600 tw-py-205 z-1 '>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap'>
          <div className='d-md-block d-none'>
            <div className='d-flex align-items-center tw-gap-6 flex-wrap '>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-semibold'>
                  <i className='ph-bold ph-headset' />
                </span>
                <span className='text-dark-600 fw-semibold tw-text-lg'>
                  24/7 hours support
                </span>
              </div>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-semibold'>
                  <i className='ph-bold ph-envelope-simple' />
                </span>
                <span className='text-dark-600 fw-semibold'>
                  support@novapay.co
                </span>
              </div>
            </div>
          </div>
          {/* <div className='top-header-item d-flex align-items-center tw-gap-15 flex-wrap'>
            <div>
              <ul className='d-flex align-items-center tw-gap-5 flex-wrap'>
                <li>
                  <Link
                    href='https://twitter-cl.vercel.app/login'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-fill ph-twitter-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.facebook.com'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-facebook-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.linkedin.com/login'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-linkedin-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.behance.net'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-behance-logo' />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <select className='text-dark-600 bg-transparent border-0 fw-semibold text-4 focus-visible-border-main-600'>
                <option value={1}>ENG</option>
                <option value={1}>SPA</option>
                <option value={1}>BAN</option>
                <option value={1}>FRA</option>
                <option value={1}>PAK</option>
                <option value={1}>AUS</option>
                <option value={1}>CAN</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
