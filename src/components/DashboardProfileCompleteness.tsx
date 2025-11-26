const DashboardProfileCompleteness: React.FC = () => {
  return (
    <div className='flex-grow-1 position-relative z-1'>
      <div className='bg-white tw-px-10 rounded-3 tw-py-8 w-100 tw-mb-6'>
        <div className='row gy-4'>
          <div className='col-lg-6'>
            <div className='bg-neutral-10 tw-pt-11 rounded-3 w-100 h-100'>
              <div className=' w-100 h-100'>
                <div className='text-center '>
                  <span className='text-base-two-600 tw-text-15 tw-mb-5'>
                    <i className='ph-fill ph-wallet' />
                  </span>
                  <div>
                    <h2 className='fw-normal text-dark-600'>$8,756.00</h2>
                    <span className='text-dark-500 fw-normal tw-text-lg'>
                      Available Balance
                    </span>
                  </div>
                </div>
                <span className='border-bottom-neutral-05 w-100 tw-mb-8 tw-mt-8' />
                <div className='tw-px-3 tw-pb-3 d-flex align-items-center flex-wrap'>
                  <a
                    href='#'
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center'
                  >
                    Total Withdraw
                  </a>
                  <a
                    href='#'
                    className='tw-px-10 tw-py-3 fw-semibold text-primary-600 hover-bg-white rounded-3 text-center'
                  >
                    Total Deposit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='bg-neutral-10 tw-pt-11 w-100 rounded-3 w-100 h-100'>
              <div>
                <div className='text-center '>
                  <span className='text-base-two-600 tw-text-15 tw-mb-5'>
                    <i className='ph-fill ph-headset' />
                  </span>
                  <div>
                    <h4 className='fw-normal text-dark-600 tw-mb-2'>
                      Need Help?
                    </h4>
                    <p className='text-dark-500 fw-normal tw-text-lg'>
                      Need help with your account? <br /> Our experts are ready
                      to assist you!
                    </p>
                  </div>
                </div>
                <span className='border-bottom-neutral-05 w-100 tw-mb-6 tw-mt-6' />
                <div className='tw-px-3 tw-pb-3 d-flex align-items-center'>
                  <a
                    href='#'
                    className='tw-py-3 fw-semibold text-white bg-base-two-600 rounded-3 w-100 text-center'
                  >
                    Chate With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white tw-px-5 tw-py-5 rounded-3 tw-mb-6 '>
        <h4 className='fw-normal text-dark-600'>Profile Completeness</h4>
        <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
        <div className='row gy-4'>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-primary-500 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                  <span className='tw-w-205 tw-h-205 bg-white rounded-circle' />
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-device-mobile' />
              </span>
              <span className='fw-normal tw-text-xl text-white d-block'>
                Mobile Added
              </span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-primary-100 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle'></span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-envelope' />
              </span>
              <span className='fw-normal tw-text-xl text-white'>
                Email Added
              </span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-dark-700 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-white border rounded-circle d-flex align-items-center justify-content-center'>
                  <span className='tw-w-205 tw-h-205 bg-white rounded-circle' />
                </span>
              </div>
              <span className='text-white tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-cardholder' />
              </span>
              <span className='fw-normal tw-text-xl text-white'>Add Card</span>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className='bg-warning-200 tw-px-6 tw-py-8 rounded-3 text-center position-relative'>
              <div className='position-absolute tw-end-22-px tw-block-start-22-px'>
                <span className='tw-w-5 tw-h-5 border-dark-600 border rounded-circle'></span>
              </div>
              <span className='text-dark-600 tw-text-11 tw-mb-4 d-block'>
                <i className='ph ph-bank' />
              </span>
              <span className='fw-normal tw-text-xl text-dark-600'>
                Add Bank Account
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white tw-px-8 tw-py-8 rounded-3 '>
        <h4 className='fw-normal text-dark-600'>Profile Completeness</h4>
        <span className='border-neutral-200 border-bottom tw-border-dashed w-100 tw-mt-6 tw-mb-6' />
        <div className='table-responsive'>
          <table className='table tw-mb-15 min-w-max'>
            <thead>
              <tr className='tw-mb-3'>
                <th
                  scope='col'
                  className='bg-base-two-10 fw-semibold tw-text-xl'
                >
                  <span className='tw-px-6 tw-py-4'>Description</span>
                </th>
                <th
                  scope='col'
                  className='bg-base-two-10 fw-semibold tw-text-xl'
                >
                  <span className='tw-px-6 tw-py-4'>Date</span>
                </th>
                <th
                  scope='col'
                  className='bg-base-two-10 fw-semibold tw-text-xl'
                >
                  <span className='tw-px-6 tw-py-4 text-center justify-content-center d-flex'>
                    Status
                  </span>
                </th>
                <th
                  scope='col'
                  className='bg-base-two-10 fw-semibold tw-text-xl'
                >
                  <span className='tw-px-6 tw-py-4'>Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      CostcoC
                    </span>
                    <span className='fw-medium tw-text-sm'>Payment Refund</span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      29 March 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>1:30 am</span>
                  </div>
                </td>
                <td>
                  <button
                    type='button'
                    className='bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $88.96{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>No Fees</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      ACL Conferences
                    </span>
                    <span className='fw-medium tw-text-sm'>Payment Refund</span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      24 October 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>5:30 pm</span>
                  </div>
                </td>
                <td className='bg-neutral-10'>
                  <div className=''>
                    <button
                      type='button'
                      className='bg-base-two-200 text-base-two-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                    >
                      In Progress
                    </button>
                  </div>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $44.93{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>No Fees</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      ACL Conferences
                    </span>
                    <span className='fw-medium tw-text-sm'>
                      Withdraw to Bank account
                    </span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      15 May 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>2:54 am</span>
                  </div>
                </td>
                <td>
                  <button
                    type='button'
                    className='bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $56.16{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>No Fees</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      Withdraw to Square
                    </span>
                    <span className='fw-medium tw-text-sm'>
                      Withdraw to Bank account
                    </span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      16 October 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>5:37 pm</span>
                  </div>
                </td>
                <td className='bg-neutral-10'>
                  <div className=''>
                    <button
                      type='button'
                      className='bg-danger-05 text-danger-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                    >
                      Cancel
                    </button>
                  </div>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $73.44{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>No Fees</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      Ridgeway University
                    </span>
                    <span className='fw-medium tw-text-sm'>Payment Refund</span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      12 March 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>9:30 pm</span>
                  </div>
                </td>
                <td>
                  <button
                    type='button'
                    className='bg-primary-05 text-primary-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                  >
                    Complete
                  </button>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2 '>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $94.42{" "}
                    </span>
                    <span className='fw-medium tw-text-sm text-dark-500'>
                      $.9
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      Check 1236
                    </span>
                    <span className='fw-medium tw-text-sm'>Payment Refund</span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      02 October 2025
                    </span>
                    <span className='fw-medium tw-text-sm'>3:52 am</span>
                  </div>
                </td>
                <td className='bg-neutral-10'>
                  <div className=''>
                    <button
                      type='button'
                      className='bg-base-two-200 text-base-two-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                    >
                      In Progress
                    </button>
                  </div>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2 bg-neutral-10'>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $23.17{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>$.7</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='tw-px-6 tw-py-2 '>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      Starbucks
                    </span>
                    <span className='fw-medium tw-text-sm'>
                      Withdraw to Bank account
                    </span>
                  </div>
                </th>
                <td>
                  <div className='tw-px-6 tw-py-2 '>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      09 March 2025{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>7:55 pm</span>
                  </div>
                </td>
                <td className=''>
                  <div className=''>
                    <button
                      type='button'
                      className='bg-danger-05 text-danger-600 tw-px-6 tw-py-205 rounded-pill fw-semibold tw-text-sm mx-auto justify-content-center d-flex'
                    >
                      Cancel
                    </button>
                  </div>
                </td>
                <td>
                  <div className='tw-px-6 tw-py-2 '>
                    <span className='fw-semibold tw-text-4 text-dark-600 tw-mb-1 d-block'>
                      $30.22{" "}
                    </span>
                    <span className='fw-medium tw-text-sm'>No Fees</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className='d-flex align-items-center tw-gap-1 justify-content-center flex-wrap'>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              <i className='ph ph-caret-double-left' />
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              1
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              2
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              3
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              4
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              5
            </button>
          </li>
          <li>
            <button
              type='button'
              className='tw-w-10 tw-h-10 rounded-circle tw-text-lg hover-bg-base-two-600 hover-text-white tw-duration-500 text-dark-600 d-flex align-items-center justify-content-center'
            >
              <i className='ph ph-caret-double-right' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardProfileCompleteness;
