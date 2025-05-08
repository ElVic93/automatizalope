import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  'aria-describedby': ariaDescribedBy,
  ...props
}, ref) => {
  // Generate unique IDs for accessibility
  const uniqueId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
  const errorId = `error-${uniqueId}`;
  const helperId = `helper-${uniqueId}`;
  const descriptionId = error ? errorId : helperText ? helperId : ariaDescribedBy;

  const baseStyles = `
    block w-full
    px-4 py-2
    text-base
    border rounded-md
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    min-h-[120px] resize-y
  `;

  const textareaStyles = `
    ${baseStyles}
    ${error
      ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
      : 'border-[var(--color-gray-light)] focus:ring-[var(--color-primary)]'
    }
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && (
        <label 
          htmlFor={uniqueId}
          className="block mb-2 text-sm font-medium text-[var(--color-text)]"
        >
          {label}
          {props.required && <span className="text-[var(--color-error)] ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea 
        ref={ref}
        id={uniqueId}
        className={textareaStyles}
        aria-invalid={!!error}
        aria-describedby={descriptionId}
        {...props}
      />
      {(error || helperText) && (
        <p 
          id={error ? errorId : helperId}
          className={`mt-1 text-sm ${error ? 'text-[var(--color-error)]' : 'text-[var(--color-text-light)]'}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea; 