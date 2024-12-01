import React from 'react';

const Button2 = ({
  children = 'Click Me',
  variant = 'default',
  className = '',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  const baseStyles = `
    rounded-full font-semibold 
    transition-all duration-300 
    transform hover:-translate-y-1
    text-white
  `;

  const variants = {
    default: 'bg-[#ff1cf7] hover:shadow-lg hover:bg-[#ff1cf7]/90',
    outlined: 'bg-transparent border border-[#ff1cf7] text-[#ff1cf7] hover:bg-[#ff1cf7] hover:text-white',
    ghost: 'bg-transparent text-[#ff1cf7] hover:bg-[#ff1cf7]/10',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const isDisabled = disabled
    ? 'opacity-50 cursor-not-allowed transform-none'
    : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${isDisabled} ${className}`}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button2;


////////////////////////////////////////////////////////////////////

/// Default 
<Button2>Purchase Now</Button2>

/// Outlined 
<Button2 variant="outlined">Purchase Now</Button2>

/// Ghost
<Button2 variant="ghost">Purchase Now</Button2>

/// Small Button
<Button2 size="small">Small Button</Button2>

/// Large Button
<Button2 size="large">Large Button</Button2>

/// Disabled Button
<Button2 disabled>Disabled Button</Button2>

/// Full-Width
<Button2 className="w-full">Full Width Button</Button2>

