const DashboardNotifications: React.FC = () => {
  return (
    <div className='bg-white tw-rounded-xl w-100 tw-px-15 tw-py-15 h-100 position-relative z-1'>
      <div className='tw-mb-15'>
        <h4 className='fw-normal text-dark-600 tw-mb-3'>Notifications</h4>
        <p className='fw-normal tw-text-lg text-dark-500'>
          Select subscriptions to be delivered to
          <span className='fw-semibold text-dark-600'>
            kenzi.lawson@example.com
          </span>
        </p>
      </div>
      <div className='tw-mb-8'>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-top border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Announcements
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Stay updated with the latest features, announcements, and exciting
              news firsthand.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckChecked'
              defaultChecked={false}
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Send payment
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Receive an email notification whenever you make a payment.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckCheckedd'
              defaultChecked={false}
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Receive a payment
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Send me an email when I receive a payment.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckDefault'
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Request payment
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Notify me via email whenever I initiate a payment request.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckCheckeddd'
              defaultChecked={false}
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Have a problem with a payment
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Notify me via email if there&apos;s an issue with a payment.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckDefaultt'
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Special Offers
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Get exclusive last-minute deals directly from us.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckCheckedddd'
              defaultChecked={false}
            />
          </div>
        </div>
        <div className='d-flex align-items-center tw-gap-10 flex-wrap justify-content-between border-top-neutral-10 border-bottom tw-pt-3 tw-pb-5'>
          <div className=''>
            <span className='fw-semibold tw-text-lg text-dark-600 tw-mb-1 '>
              Review Surveys
            </span>
            <p className='fw-medium tw-text-4 text-dark-500'>
              Tell us about your payment experience to help guide other users.
            </p>
          </div>
          <div className='form-check form-switch'>
            <input
              className='form-check-input w-10 h-6'
              type='checkbox'
              role='switch'
              id='switchCheckDefaulttt'
            />
          </div>
        </div>
      </div>
      <div className=''>
        <button
          type='button'
          className='bg-base-two-600 text-white tw-px-6 tw-py-3 rounded-3'
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default DashboardNotifications;
