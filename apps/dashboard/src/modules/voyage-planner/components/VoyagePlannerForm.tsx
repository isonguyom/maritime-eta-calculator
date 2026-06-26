'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import useButtonState from '@/hooks/useButtonState';

import {
  voyagePlannerSchema,
  type VoyagePlannerSchemaType,
} from '@/lib/validations/voyagePlanner';

import type { VoyagePlannerInputType } from '@/types/voyagePlanner';

type Props = {
  onCalculate: (data: VoyagePlannerInputType) => void;
};

const vessels = [
  { label: 'Container Ship', value: 'container' },
  { label: 'Bulk Carrier', value: 'bulk' },
  { label: 'Oil Tanker', value: 'oil_tanker' },
  { label: 'General Cargo', value: 'general_cargo' },
];

export default function VoyagePlannerForm({ onCalculate }: Props) {
  const methods = useForm<VoyagePlannerSchemaType>({
    resolver: zodResolver(voyagePlannerSchema),
    mode: 'onChange',
    defaultValues: {
      vessel: '',
      origin: '',
      destination: '',
      departure: '',
      distance: '',
      speed: '',
      fuelPrice: '',
    },
  });

  const { handleSubmit } = methods;

  const { state, setLoading, setSuccess, setError } = useButtonState();

  const onSubmit = async (data: VoyagePlannerSchemaType) => {
    try {
      setLoading();

      await new Promise((resolve) => setTimeout(resolve, 1500));

      onCalculate({
        vessel: data.vessel,
        origin: data.origin,
        destination: data.destination,
        departure: new Date(data.departure),
        distance: parseFloat(data.distance),
        speed: parseFloat(data.speed),
        fuelPrice: parseFloat(data.fuelPrice),
      });

      setSuccess();
    } catch {
      setError();
    }
  };

  return (
    <FormProvider methods={methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-xl border border-border p-5 max-h-fit"
        noValidate
      >
        <Select
          name="vessel"
          label="Vessel"
          placeholder="Select vessel"
          options={vessels}
        />

        <Input name="origin" label="Origin Port" placeholder="e.g. Lagos" />

        <Input
          name="destination"
          label="Destination Port"
          placeholder="e.g. Rotterdam"
        />

        <Input
          name="distance"
          label="Distance"
          tip="(NM)"
          numeric
          inputMode="decimal"
          placeholder="Enter distance"
        />

        <Input
          name="speed"
          label="Speed"
          tip="(Knots)"
          numeric
          inputMode="decimal"
          placeholder="Enter speed"
        />

        <Input
          name="fuelPrice"
          label="Fuel Price"
          tip="(USD/MT)"
          numeric
          inputMode="decimal"
          placeholder="Fuel price"
        />

        <Input name="departure" label="Departure" type="datetime-local" />

        <SubmitButton
          state={state}
          loadingText="Planning Voyage"
          successText="Voyage Planned"
          errorText="Planning Failed"
        >
          Plan Voyage
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
