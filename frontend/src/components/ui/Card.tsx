import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
} = ({ children, className = '', variant = 'default' }) => {
  const baseStyles = `
    rounded-lg
    bg-white
    overflow-hidden
  `;

  const variants = {
    default: '',
    bordered: 'border border-[var(--color-gray-light)]',
    elevated: 'shadow-[var(--shadow-md)]',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-b border-[var(--color-gray-light)] ${className}`}>
      {children}
    </div>
  );
};

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 py-4 border-t border-[var(--color-gray-light)] ${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card; 