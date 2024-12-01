import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'default',
  disabled = false,
}) => {
  const baseStyles =
    'px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1';

  const variants = {
    default: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
  };

  const variantStyles = disabled ? variants.disabled : variants[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

/////////////////////////////////////////////////////////////////////

/// Default Button 
<Button onClick={() => alert('Clicked!')}>Get Started Now</Button>

/// Outline Button
<Button variant="outline" onClick={() => alert('Outline Button Clicked!')}>
  Learn More
</Button>

/// Secondary Button
<Button variant="secondary" onClick={() => console.log('Secondary Button')}>
  Contact Us
</Button>

/// Danger Button 
<Button variant="danger" onClick={() => console.log('Danger Action!')}>
  Delete
</Button>

/// Disabled Button
<Button variant="default" disabled>
  Disabled
</Button>

/// Ghost
<Button variant="ghost">Purchase Now</Button>

/// Small
<Button size="small">Small Button</Button>

/// Large 
<Button size="large">Large Button</Button>

/// Full-width
<Button className="w-full">Full Width Button</Button>


Props:
children: The content inside the button (e.g., text, icons).
onClick: Function to handle click events.
type: The type of button (button, submit, or reset).
className: Additional custom classes for the button.
variant: The style variant of the button (default, outline, secondary, danger).
disabled: Whether the button is disabled.
