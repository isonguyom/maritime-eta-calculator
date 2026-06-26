'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider from '@/components/ui/form/FormProvider';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import SubmitButton from '@/components/ui/form/SubmitButton';

import {
  fuelEstimatorSchema,
  type FuelEstimatorSchemaType,
} from '@/lib/validations/fuelEstimator';

import useButtonState from '@/hooks/useButtonState';
import { FuelEstimatorInputType } from '@/types/fuelEstimator';

type Props = {
  onCalculate: (data: FuelEstimatorInputType) => void;
};

const vessels = [
  { label: 'Container Ship', value: 'container' },
  { label: 'Bulk Carrier', value: 'bulk' },
  { label: 'Oil Tanker', value: 'oil_tanker' },
  { label: 'General Cargo', value: 'general_cargo' },
];

export default function FuelEstimatorForm({ onCalculate }: Props) {
  const methods = useForm<FuelEstimatorSchemaType>({
    resolver: zodResolver(fuelEstimatorSchema),
    mode: 'onChange',
    defaultValues: {
      vessel: '',
      distance: '',
      speed: '',
      fuelPrice: '',
    },
  });

  const { handleSubmit } = methods;

  const { state, setLoading, setSuccess, setError } = useButtonState();

  const onSubmit = async (data: FuelEstimatorSchemaType) => {
    try {
      setLoading();

      await new Promise((resolve) => setTimeout(resolve, 1500));

      const vessel = vessels.find((v) => v.value === data.vessel);

      if (!vessel) {
        throw new Error();
      }
      onCalculate({
        vessel: vessel.value,
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
        className="rounded-xl border border-border p-5 space-y-4 max-h-fit"
        noValidate
      >
        <Select
          name="vessel"
          label="Vessel Type"
          placeholder="Select vessel"
          options={vessels}
          required
        />

        <Input
          name="distance"
          label="Distance"
          tip="(NM)"
          placeholder="Enter distance"
          inputMode="decimal"
          numeric
          required
        />

        <Input
          name="speed"
          label="Speed"
          tip="(Knots)"
          placeholder="Enter speed"
          inputMode="decimal"
          numeric
          required
        />

        <Input
          name="fuelPrice"
          label="Fuel Price"
          tip="(USD/MT)"
          placeholder="Fuel price"
          inputMode="decimal"
          numeric
          required
        />

        <SubmitButton
          state={state}
          loadingText="Estimating"
          successText="Completed"
          errorText="Failed"
        >
          Estimate Fuel
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
