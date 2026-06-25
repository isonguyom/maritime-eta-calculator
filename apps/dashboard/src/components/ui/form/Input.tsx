'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputSize = 'sm' | 'md' | 'lg';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & {
  name: string;
  label?: string;
  tip?: string;
  primaryTip?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: InputSize;
  numeric?: boolean;
};

const sizes: Record<InputSize, string> = {
  sm: 'px-2.5 py-2 text-xs',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

export default function Input({
  name,
  label,
  tip,
  primaryTip,
  leftIcon,
  rightIcon,
  inputSize = 'md',
  id,
  className = '',
  numeric,
  ...props
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputId = id || name;

  const error =
    typeof errors[name]?.message === 'string'
      ? errors[name]?.message
      : undefined;

  const describedBy =
    [tip ? `${inputId}-tip` : null, error ? `${inputId}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined;

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (!numeric) return;

    const target = e.currentTarget;

    target.value = target.value
      .replace(/[^\d.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };
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
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={[
            'w-full rounded-lg border border-border bg-surface-2 text-foreground',
            'placeholder:text-muted/70',
            'outline-none',
            'focus:border-accent focus:ring-1 focus:ring-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-danger focus:border-danger focus:ring-danger' : '',
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
            sizes[inputSize],
            className,
          ].join(' ')}
          {...register(name)}
          {...props}
          onInput={handleInput}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
