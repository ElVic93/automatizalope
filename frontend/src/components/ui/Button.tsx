import React, { forwardRef, createElement, ElementType } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  loading?: boolean;
  ariaLabel?: string;
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  loading = false,
  disabled = false,
  ariaLabel,
  as = 'button',
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-md
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:translate-y-0
    transform hover:-translate-y-0.5 active:translate-y-0
    shadow-sm hover:shadow
  `;

  // Ensure contrast ratios meet WCAG AA standards (at least 4.5:1 for normal text, 3:1 for large text)
  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-primary-dark)]
      focus:ring-[var(--color-primary)]
      border border-[var(--color-primary-dark)]
      disabled:bg-[var(--color-primary)] disabled:bg-opacity-70
    `,
    secondary: `
      bg-[var(--color-secondary)]
      text-white
      hover:bg-[var(--color-secondary-dark)]
      focus:ring-[var(--color-secondary)]
      border border-[var(--color-secondary-dark)]
      disabled:bg-[var(--color-secondary)] disabled:bg-opacity-70
    `,
    outline: `
      bg-transparent
      border border-[var(--color-primary)]
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
      focus:ring-[var(--color-primary)]
      disabled:text-[var(--color-primary)] disabled:text-opacity-70 disabled:border-opacity-70
    `,
    ghost: `
      bg-transparent
      text-[var(--color-primary)]
      hover:bg-[var(--color-gray-light)]
      hover:text-[var(--color-primary-dark)]
      focus:ring-[var(--color-primary)]
      disabled:text-[var(--color-primary)] disabled:text-opacity-70
    `,
  };

  // Ensure touch targets are at least 44×44px on mobile
  const sizes = {
    sm: 'px-4 py-2 text-sm font-medium min-h-[38px]',
    md: 'px-5 py-2.5 text-base font-medium min-h-[44px]',
    lg: 'px-7 py-3 text-lg font-medium min-h-[48px]',
  };

  const width = fullWidth ? 'w-full' : '';

  // ARIA attributes
  const ariaProps = {
    'aria-disabled': isDisabled,
    ...(loading && { 'aria-busy': true }),
    ...(ariaLabel && { 'aria-label': ariaLabel }),
  };

  // Handle 'as' prop to render as different elements
  return createElement(
    as,
    {
      ref: as === 'button' ? ref : undefined,
      className: `
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${width}
        ${className}
      `,
      disabled: as === 'button' ? isDisabled : undefined,
      ...ariaProps,
      ...props,
    },
    <>
      {loading ? (
        <>
          <span className="sr-only">Cargando</span>
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </>
      ) : children}
    </>
  );
});

Button.displayName = 'Button';

export default Button; 