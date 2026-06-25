'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import { etaFormSchema, EtaFormSchemaType } from '@/lib/validations/eta';
import type { EtaInputType } from '@/types/eta';
import useButtonState from '@/hooks/useButtonState';

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

  const { handleSubmit } = methods;

  const {
    state: submitState,
    setLoading,
    setSuccess,
    setError,
  } = useButtonState();
  const isLoading = submitState === 'loading';

  const onSubmit = async (data: EtaFormSchemaType) => {
    try {
      setLoading();

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

      // reset();
      setSuccess();
    } catch {
      setError();
    }
  };

  return (
    <FormProvider methods={methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-xl border border-border p-5 space-y-4 max-h-fit"
      >
        <Select
          name="vessel"
          label="Vessel Type"
          placeholder="Select vessel type"
          options={vessels}
          required
          disabled={isLoading}
        />

        <Input
          name="distance"
          label="Distance"
          tip="(NM)"
          inputMode="decimal"
          numeric
          placeholder="Enter distance in NM"
          required
          disabled={isLoading}
        />

        <Input
          name="speed"
          label="Speed"
          tip="(Knots)"
          inputMode="decimal"
          numeric
          placeholder="Enter speed in knots"
          required
          disabled={isLoading}
        />

        <Input
          name="departure"
          label="Departure Date & Time"
          type="datetime-local"
          required
          disabled={isLoading}
        />

        <SubmitButton
          state={submitState}
          loadingText="Calculating ETA"
          successText="ETA Ready"
          errorText="Calculation Failed"
        >
          Calculate ETA
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
