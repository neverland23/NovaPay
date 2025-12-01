import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  containerClassName?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
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
      <select
        className={`text-dark-500 fw-normal tw-text-4 tw-px-3 tw-py-3 rounded-3 border-neutral-50 border w-100 focus-visible-border-main-600 ${
          error ? 'border-danger' : ''
        } ${className}`}
        {...props}
      >
        <option value=''>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className='text-danger tw-text-sm tw-mt-1 d-block'>{error}</span>
      )}
    </div>
  );
};

export default Select;



