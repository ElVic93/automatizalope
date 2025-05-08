import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-0.5 active:translate-y-0
    shadow-sm hover:shadow
  `;

  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-primary-dark)]
      focus:ring-[var(--color-primary)]
      border border-[var(--color-primary-dark)]
    `,
    secondary: `
      bg-[var(--color-secondary)]
      text-white
      hover:bg-[var(--color-secondary-dark)]
      focus:ring-[var(--color-secondary)]
      border border-[var(--color-secondary-dark)]
    `,
    outline: `
      bg-transparent
      border border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
      focus:ring-[var(--color-primary)]
    `,
    ghost: `
      bg-transparent
      text-[var(--color-primary)]
      hover:bg-[var(--color-gray-light)]
      hover:text-[var(--color-primary-dark)]
      focus:ring-[var(--color-primary)]
    `,
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm font-medium',
    md: 'px-5 py-2 text-base font-medium',
    lg: 'px-7 py-2.5 text-lg font-medium',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${width}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 