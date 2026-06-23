'use client';

import React from 'react';

type TextareaSize = 'sm' | 'md' | 'lg';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  tip?: string;
  primaryTip?: boolean;
  error?: string;
  textareaSize?: TextareaSize;
};

const sizes: Record<TextareaSize, string> = {
  sm: 'px-2.5 py-2 text-xs',
  md: 'px-3 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

export default function Textarea({
  label,
  tip,
  primaryTip,
  error,
  textareaSize = 'md',
  id,
  className = '',
  ...props
}: TextareaProps) {
  const textareaId = id || props.name;

  const describedBy =
    [tip ? `${textareaId}-tip` : null, error ? `${textareaId}-error` : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className="space-y-2 w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm text-foreground">
          <span>{label}</span>

          {tip && (
            <span
              id={`${textareaId}-tip`}
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

      <textarea
        id={textareaId}
        className={[
          'w-full rounded-lg border border-border bg-surface-2 text-foreground outline-none',
          'focus:border-accent focus:ring-1 focus:ring-accent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          error ? 'border-danger focus:border-danger focus:ring-danger' : '',
          sizes[textareaSize],
          className,
        ].join(' ')}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
      />

      {error && (
        <p
          id={`${textareaId}-error`}
          className="text-xs text-danger"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
