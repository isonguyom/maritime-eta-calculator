'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import LoadingDots from '@/components/ui/feedback/LoadingDots';

type SelectSize = 'sm' | 'md' | 'lg';

type SelectOptionType = {
  label: string;
  value: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  tip?: string;
  primaryTip?: boolean;
  error?: string;
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
  label,
  tip,
  primaryTip,
  error,
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
  const selectId = id || props.name;

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
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
            {leftIcon}
          </span>
        )}

        <select
          id={selectId}
          className={[
            'w-full rounded-lg border border-border bg-surface-2 outline-none appearance-none',
            'focus:border-accent focus:ring-1 focus:ring-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'text-foreground',
            'has-[option[value=""]:checked]:text-muted/70',
            error ? 'border-danger focus:border-danger focus:ring-danger' : '',
            leftIcon ? 'pl-10' : '',
            'pr-10',
            sizes[selectSize],
            className,
          ].join(' ')}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          disabled={loading || props.disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
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

        {/* RIGHT SLOT (always consistent positioning) */}
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
          className="text-xs text-danger"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
