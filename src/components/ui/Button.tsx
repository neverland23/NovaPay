import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'fw-semibold tw-text-lg tw-px-6 tw-py-3 tw-rounded-xl tw-transition-all';
  
  const variantClasses = {
    primary: 'bg-base-two-600 text-white hover:bg-base-two-700',
    secondary: 'bg-primary-600 text-white hover:bg-primary-700',
    danger: 'bg-danger text-white hover:bg-danger-dark',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  const widthClass = fullWidth ? 'w-100' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className='d-flex align-items-center justify-content-center tw-gap-2'>
          <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;




