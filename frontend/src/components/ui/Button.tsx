import React from 'react';
import { Link } from 'gatsby';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    ghost: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? disabledStyles : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonStyles} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button; 