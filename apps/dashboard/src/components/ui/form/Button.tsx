'use client';

import LoadingDots from '@/components/ui/feedback/LoadingDots';
import { SquareCheckBig, XSquare } from 'lucide-react';
import React from 'react';

type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost';
type ButtonIntent = 'primary' | 'success' | 'warning' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonState = 'idle' | 'loading' | 'success' | 'error';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  intent?: ButtonIntent;
  size?: ButtonSize;
  state?: ButtonState;

  loadingText?: string;
  successText?: string;
  errorText?: string;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
};

const intentStyles: Record<ButtonIntent, Record<ButtonVariant, string>> = {
  primary: {
    solid: 'bg-accent text-white hover:bg-accent/80 focus:ring-accent/50',
    outline:
      'border border-accent text-accent hover:bg-accent/10 focus:ring-accent/50',
    soft: 'bg-accent/10 text-accent hover:bg-accent/20 focus:ring-accent/50',
    ghost:
      'text-accent hover:bg-accent/10 focus:ring-accent/50 py-0! w-fit! px-1!',
  },
  success: {
    solid: 'bg-success text-white hover:bg-success/80 focus:ring-success/50',
    outline:
      'border border-success text-success hover:bg-success/10 focus:ring-success/50',
    soft: 'bg-success/10 text-success hover:bg-success/20 focus:ring-success/50',
    ghost:
      'text-success hover:bg-success/10 focus:ring-success/50 py-0! w-fit! px-1!',
  },
  warning: {
    solid: 'bg-warning text-white hover:bg-warning/80 focus:ring-warning/50',
    outline:
      'border border-warning text-warning hover:bg-warning/10 focus:ring-warning/50',
    soft: 'bg-warning/10 text-warning hover:bg-warning/20 focus:ring-warning/50',
    ghost:
      'text-warning hover:bg-warning/10 focus:ring-warning/50 py-0! w-fit! px-1!',
  },
  danger: {
    solid: 'bg-danger text-white hover:bg-danger/80 focus:ring-danger/50',
    outline:
      'border border-danger text-danger hover:bg-danger/10 focus:ring-danger/50',
    soft: 'bg-danger/10 text-danger hover:bg-danger/20 focus:ring-danger/50',
    ghost:
      'text-danger hover:bg-danger/10 focus:ring-danger/50 py-0! w-fit! px-1!',
  },
};

const sizes = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
};

export default function Button({
  children,
  type = 'button',
  variant = 'solid',
  intent = 'primary',
  size = 'md',
  state = 'idle',

  loadingText = 'Loading',
  successText = 'Success',
  errorText = 'Error',

  disabled,
  leftIcon,
  rightIcon,
  fullWidth = true,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || state !== 'idle';

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={state === 'loading'}
      aria-live={state !== 'idle' ? 'polite' : undefined}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition enabled:cursor-pointer',
        'focus:outline-none focus-visible:ring-2 focus:ring-offset-2 focus:ring-offset-background',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        sizes[size],
        intentStyles[intent][variant],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...props}
    >
      {state === 'loading' ? (
        <span className="inline-flex items-center gap-2">
          <span>{loadingText}</span>
          <LoadingDots />
        </span>
      ) : state === 'success' ? (
        <span className="inline-flex items-center gap-1 transition">
          <span>{successText}</span>
          <SquareCheckBig size={14} />
        </span>
      ) : state === 'error' ? (
        <span className="inline-flex items-center gap-1 transition">
          <span>{errorText}</span>
          <XSquare size={14} />
        </span>
      ) : (
        <>
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
