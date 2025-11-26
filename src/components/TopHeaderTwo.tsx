const TopHeaderTwo: React.FC = () => {
  return (
    <div className='bg-warning-500 py-3 z-1'>
      <div className='container max-w-1640'>
        <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap'>
          <div className='d-md-block d-none'>
            <div className='d-flex align-items-center tw-gap-6 flex-wrap'>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-medium'>
                  <i className='ph-bold ph-headset' />
                </span>
                <span className='text-dark-600 fw-semibold tw-text-lg'>
                  24/7 hours support
                </span>
              </div>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-medium d-flex'>
                  <i className='ph-bold ph-envelope-simple' />
                </span>
                <span className='text-dark-600 fw-semibold'>
                  paynone@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className='top-header-item d-flex align-items-center tw-gap-15 flex-wrap'>
            <div>
              <ul className='d-flex align-items-center tw-gap-5 flex-wrap'>
                <li>
                  <a
                    href='https://twitter-cl.vercel.app/login'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-fill ph-twitter-logo' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-facebook-logo' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/login'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-linkedin-logo' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.behance.net'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-behance-logo' />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <select className='text-dark-600 bg-transparent border-0 fw-semibold text-4 focus-visible-border-main-600'>
                <option value={1}>ENG</option>
                <option value={2}>SPA</option>
                <option value={3}>BAN</option>
                <option value={4}>FRA</option>
                <option value={5}>PAK</option>
                <option value={6}>AUS</option>
                <option value={7}>CAN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
