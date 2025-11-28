import Image from "next/image";
import Link from "next/link";

const LoginInInner: React.FC = () => {
  return (
    <section className='position-relative'>
      <div className='d-flex tw-h-screen'>
        <div className='flex-grow-1'>
          <div className='max-w-526-px w-100 log-in-card tw-px-6 tw-py-12 mx-auto'>
            <Link href='/' className='tw-mb-17'>
              <Image
                src='/assets/images/logo/logo.png'
                alt='img'
                className='tw-h-13'
                width={171}
                height={52}
              />
            </Link>
            <h4 className='fw-medium text-primary-50 tw-mb-8'>
              Welcome back to NovaPay
            </h4>
            <div>
              <a
                href='#'
                className='d-flex align-items-center tw-gap-205 tw-py-3 w-100 border-neutral-05 border rounded-3 text-center justify-content-center tw-mb-6 flex-wrap hover-bg-neutral-20'
              >
                <Image
                  width={24}
                  height={24}
                  src='/assets/images/icon/google-icon1.png'
                  alt='Image'
                />
                <span className='text-dark-500 fw-semibold tw-text-4'>
                  Continue With Google
                </span>
              </a>
              <div className='tw-mb-6 flex-wrap border-before position-relative text-center z-1'>
                <span className='fw-semibold text-dark-500 tw-text-4 bg-white tw-px-4'>
                  Or sign up with
                </span>
                <span className='position-absolute w-100 border-bottom border-neutral-50 tw-start-0 top-50 translate-middle-y z-n1' />
              </div>
              <div className='tw-mb-6'>
                <label
                  htmlFor='Email'
                  className='fw-semibold tw-text-4 text-primary-50 tw-mb-3'
                >
                  Email Address*
                </label>
                <input
                  name='email'
                  type='email'
                  id='Email'
                  placeholder='Type Email'
                  className='fw-semibold tw-text-4 text-dark-500 tw-px-4 tw-py-3 border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600'
                />
              </div>
              <div className='tw-mb-3'>
                <label
                  htmlFor='createPassword'
                  className='fw-semibold tw-text-4 text-primary-50 tw-mb-3'
                >
                  Password*
                </label>
                <div className='position-relative'>
                  <input
                    name='password'
                    type='password'
                    className='form-control border-neutral-05 border rounded-3 w-100 focus-visible-border-main-600 fw-semibold text-dark-500 tw-px-4 tw-py-3 tw-rounded-lg shadow-none'
                    id='createPassword'
                    placeholder='Password'
                  />
                  <span
                    className='toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw-text-xl text-neutral-600 tw--translate-y-50 ph-bold ph-eye-slash'
                    id='#createPassword'
                  />
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-8'>
                <div className='form-check'>
                  <input
                    name='rememberMe'
                    className='form-check-input'
                    type='checkbox'
                    id='defaultCheck1'
                  />
                  <label
                    className='form-check-label fw-semibold'
                    htmlFor='defaultCheck1'
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href='#'
                  className='fw-semibold tw-text-4 text-primary-600 hover-underline'
                >
                  Forgot Password?
                </a>
              </div>
              <button className='text-white bg-main-gradient w-100 tw-py-3 rounded-3 text-center tw-mb-3'>
                Sign In
              </button>
              <span className='fw-semibold tw-text-4 text-primary-50 text-center justify-content-center d-flex'>
                Don&apos;t have an account?
                <Link href='/sign-up' className='fw-semibold text-primary-600'>
                  {" "}
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className='w-50 d-lg-block d-none '>
          <Image
            width={948}
            height={1080}
            src='/assets/images/thumbs/long-in-img-1.png'
            alt='Image'
            className='w-100 h-100 object-fit-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default LoginInInner;
