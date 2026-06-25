'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { get, useFormContext } from 'react-hook-form';

import LoadingDots from '@/components/ui/feedback/LoadingDots';

type SelectSize = 'sm' | 'md' | 'lg';

type SelectOptionType = {
  label: string;
  value: string;
};

type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> & {
  name: string;

  label?: string;
  tip?: string;
  primaryTip?: boolean;

  placeholder?: string;

  options: SelectOptionType[];

  selectSize?: SelectSize;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  loading?: boolean;
};

const sizes: Record<SelectSize, string> = {
  sm: 'px-2.5 py-2 text-xs',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

export default function Select({
  name,
  label,
  tip,
  primaryTip,
  placeholder,
  options,
  selectSize = 'md',
  leftIcon,
  rightIcon,
  loading,
  id,
  className = '',
  ...props
}: SelectProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectId = id || name;

  const error = get(errors, name)?.message?.toString();

  const value = watch(name, '');
  const isPlaceholderSelected = value === '';

  const describedBy =
    [tip ? `${selectId}-tip` : null, error ? `${selectId}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label htmlFor={selectId} className="block text-sm text-foreground">
          <span>{label}</span>

          {tip && (
            <span
              id={`${selectId}-tip`}
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
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
            {leftIcon}
          </span>
        )}

        <select
          id={selectId}
          {...register(name)}
          {...props}
          disabled={loading || props.disabled}
          aria-invalid={!!error}
          aria-required={props.required}
          aria-busy={loading}
          aria-describedby={describedBy}
          className={[
            'w-full rounded-lg border border-border bg-surface-2 outline-none appearance-none',
            'focus:border-accent focus:ring-1 focus:ring-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isPlaceholderSelected ? 'text-muted/70' : 'text-foreground',
            error ? 'border-danger focus:border-danger focus:ring-danger' : '',
            leftIcon ? 'pl-10' : '',
            'pr-10',
            sizes[selectSize],
            className,
          ].join(' ')}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}

          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="text-foreground"
            >
              {opt.label}
            </option>
          ))}
        </select>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
          {loading ? (
            <LoadingDots />
          ) : rightIcon ? (
            rightIcon
          ) : (
            <ChevronDown size={14} />
          )}
        </span>
      </div>

      {error && (
        <p
          id={`${selectId}-error`}
          role="alert"
          className="text-xs text-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
}
