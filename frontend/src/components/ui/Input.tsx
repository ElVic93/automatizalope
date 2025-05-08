import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = `
    block w-full
    px-4 py-2
    text-base
    border rounded-md
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const inputStyles = `
    ${baseStyles}
    ${error
      ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
      : 'border-[var(--color-gray-light)] focus:ring-[var(--color-primary)]'
    }
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  return (
    <div className={`${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-[var(--color-text)]">
          {label}
        </label>
      )}
      <input className={inputStyles} {...props} />
      {(error || helperText) && (
        <p className={`mt-1 text-sm ${error ? 'text-[var(--color-error)]' : 'text-[var(--color-text-light)]'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 