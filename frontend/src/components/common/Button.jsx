import React from 'react';
import Spinner from './Spinner';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-sm border border-transparent focus:ring-orange-500',
    secondary: 'bg-stone-850 hover:bg-stone-900 text-white shadow-sm border border-transparent focus:ring-stone-700',
    outline: 'border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 focus:ring-orange-500',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm border border-transparent focus:ring-rose-500',
    ghost: 'text-stone-600 hover:bg-stone-100 focus:ring-stone-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Spinner size="sm" className="mr-2" />
      ) : Icon ? (
        <Icon className="h-4 w-4 mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
