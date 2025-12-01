import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  containerClassName = '',
  className = '',
  ...props
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className='fw-normal tw-text-4 text-dark-600 tw-mb-3 d-block'>
          {label}
        </label>
      )}
      <input
        className={`text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600 ${
          error ? 'border-danger' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <span className='text-danger tw-text-sm tw-mt-1 d-block'>{error}</span>
      )}
    </div>
  );
};

export default Input;



