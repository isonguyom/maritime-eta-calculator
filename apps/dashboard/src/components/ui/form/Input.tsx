'use client';

import React, { useState } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  tip?: string;
  primaryTip?: boolean;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: InputSize;
};

const sizes: Record<InputSize, string> = {
  sm: 'px-2.5 py-2 text-xs',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

export default function Input({
  label,
  tip,
  primaryTip,
  error,
  leftIcon,
  rightIcon,
  inputSize = 'md',
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id || props.name;

  const [value, setValue] = useState('');

  const describedBy =
    [tip ? `${inputId}-tip` : null, error ? `${inputId}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined;

  const isEmpty = value === '';
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm text-foreground">
          <span>{label}</span>

          {tip && (
            <span
              id={`${inputId}-tip`}
              className={[
                'ml-2 text-xs',
                primaryTip ? 'text-accent' : 'text-muted',
              ].join(' ')}
            >
              {tip}
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          className={[
            'w-full rounded-lg border border-border bg-surface-2 placeholder:text-muted/70 outline-none',
            'focus:border-accent focus:ring-1 focus:ring-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isEmpty ? 'text-muted/70' : 'text-foreground',
            error ? 'border-danger focus:border-danger focus:ring-danger' : '',
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
            sizes[inputSize],
            className,
          ].join(' ')}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="text-xs text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
