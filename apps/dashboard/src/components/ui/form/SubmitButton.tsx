'use client';

import { useFormContext } from 'react-hook-form';

import Button from '@/components/ui/Button';

type SubmitButtonProps = {
  children: React.ReactNode;
  loadingText?: string;
} & React.ComponentProps<typeof Button>;

export default function SubmitButton({
  children,
  state,
  loadingText,
  ...props
}: SubmitButtonProps) {
  const {
    formState: { isSubmitting, isValidating },
  } = useFormContext();

  const loading = isSubmitting || isValidating;

  return (
    <Button
      type="submit"
      state={loading ? 'loading' : state}
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
}
