'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import { etaFormSchema, EtaFormSchemaType } from '@/lib/validations/eta';
import type { EtaInputType } from '@/types/eta';
import { useState } from 'react';
import type { ButtonState } from '@/components/ui/Button';

type EtaFormProps = {
  onCalculate: (data: EtaInputType) => void;
};

const vessels = [
  { label: 'Container Ship', value: 'container' },
  { label: 'Bulk Carrier', value: 'bulk' },
  { label: 'Oil Tanker', value: 'oil_tanker' },
  { label: 'General Cargo', value: 'general_cargo' },
];

export default function EtaForm({ onCalculate }: EtaFormProps) {
  const methods = useForm<EtaFormSchemaType>({
    resolver: zodResolver(etaFormSchema),
    mode: 'onChange',
    defaultValues: {
      vessel: '',
      distance: '',
      speed: '',
      departure: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, submitCount },
  } = methods;

  const [submitState, setSubmitState] = useState<ButtonState>('idle');

  const onSubmit = async (data: EtaFormSchemaType) => {
    try {
      setSubmitState('loading');

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const vessel = vessels.find((v) => v.value === data.vessel);

      if (!vessel) {
        throw new Error('Invalid vessel');
      }

      onCalculate({
        vessel: vessel.label,
        distance: parseFloat(data.distance),
        speed: parseFloat(data.speed),
        departureDate: new Date(data.departure),
      });

      setSubmitState('success');

      setTimeout(() => {
        setSubmitState('idle');
      }, 3000);
    } catch {
      setSubmitState('error');

      setTimeout(() => {
        setSubmitState('idle');
      }, 3000);
    }
  };

  return (
    <FormProvider methods={methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-xl border border-border p-5 space-y-4"
      >
        <Select
          name="vessel"
          label="Vessel Type"
          placeholder="Select vessel type"
          options={vessels}
          required
        />

        <Input
          name="distance"
          label="Distance"
          tip="(NM)"
          inputMode="decimal"
          numeric
          placeholder="Enter distance in NM"
          required
        />

        <Input
          name="speed"
          label="Speed"
          tip="(Knots)"
          inputMode="decimal"
          numeric
          placeholder="Enter speed in knots"
          required
        />

        <Input
          name="departure"
          label="Departure Date & Time"
          type="datetime-local"
          required
        />

        <SubmitButton
          state={submitState}
          loadingText="Calculating ETA"
          successText="ETA Ready"
          errorText="Calculation Failed"
        >
          Calculate ETA
        </SubmitButton>

        {submitCount > 0 && !isSubmitting && isSubmitSuccessful && (
          <p className="text-sm text-success">ETA calculated successfully.</p>
        )}
      </form>
    </FormProvider>
  );
}
