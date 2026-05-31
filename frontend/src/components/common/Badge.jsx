import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyle = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold select-none';

  const variants = {
    default: 'bg-stone-100 text-stone-700 border border-stone-200',
    primary: 'bg-orange-50 text-orange-700 border border-orange-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    warning: 'bg-amber-55 text-amber-900 border border-amber-200',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200',
    info: 'bg-amber-50 text-amber-700 border border-amber-200',
  };

  return (
    <span className={`${baseStyle} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
