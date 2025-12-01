import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg',
  };

  const spinner = (
    <div className={`spinner-border ${sizeClasses[size]} ${className}`} role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;



