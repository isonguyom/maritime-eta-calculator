'use client';

import React from 'react';
import {
  FormProvider as RHFFormProvider,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';

type FormProviderProps<T extends FieldValues> = {
  methods: UseFormReturn<T>;
  children: React.ReactNode;
};

export default function FormProvider<T extends FieldValues>({
  methods,
  children,
}: FormProviderProps<T>) {
  return <RHFFormProvider {...methods}>{children}</RHFFormProvider>;
}
