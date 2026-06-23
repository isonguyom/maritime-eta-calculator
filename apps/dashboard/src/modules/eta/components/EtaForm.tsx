'use client';

import { useState } from 'react';
import Button from '@/components/ui/form/Button';
import Input from '@/components/ui/form/Input';
import Select from '@/components/ui/form/Select';
import type { EtaInputType } from '@/types/eta';
import { etaSchema } from '@/lib/validations/eta';

type EtaFormProps = {
  onCalculate: (data: EtaInputType) => void;
};

const vessels = [
  { label: 'Container Ship', value: 'container', speed: 20, fuelPerDay: 35 },
  { label: 'Bulk Carrier', value: 'bulk', speed: 14, fuelPerDay: 22 },
  { label: 'Oil Tanker', value: 'oil_tanker', speed: 15, fuelPerDay: 28 },
  { label: 'General Cargo', value: 'general_cargo', speed: 13, fuelPerDay: 18 },
];

export default function EtaForm({ onCalculate }: EtaFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const vesselOptions = vessels.map((v) => ({
    label: v.label,
    value: v.value,
  }));

  const handleSubmit = (formData: FormData) => {
    const rawData = {
      vessel: formData.get('vessel'),
      distance: Number(formData.get('distance')),
      speed: Number(formData.get('speed')),
      departure: formData.get('departure'),
    };

    const result = etaSchema.safeParse(rawData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        formattedErrors[field] = err.message;
      });

      setErrors(formattedErrors);
      return;
    }

    setErrors({});

    const vessel = vessels.find((v) => v.value === result.data.vessel);

    if (!vessel) return;

    const payload: EtaInputType = {
      vessel: vessel.label,
      distance: result.data.distance,
      speed: result.data.speed,
      departureDate: new Date(result.data.departure),
    };

    onCalculate(payload);
  };

  return (
    <form
      action={handleSubmit}
      className="rounded-xl border border-border p-5 space-y-4 max-h-fit"
    >
      {/* Vessel */}
      <Select
        name="vessel"
        label="Vessel Type"
        options={vesselOptions}
        placeholder="Select vessel type"
        defaultValue=""
        error={errors.vessel}
      />

      {/* Distance */}
      <Input
        label="Distance"
        tip="(NM)"
        name="distance"
        inputMode="decimal"
        min={0}
        placeholder="Enter distance in NM"
        error={errors.distance}
      />

      {/* Speed */}
      <Input
        label="Speed"
        tip="(Knots)"
        name="speed"
        inputMode="decimal"
        min={0}
        placeholder="Enter speed in knots"
        error={errors.speed}
      />

      {/* Departure */}
      <Input
        label="Departure Date & Time"
        name="departure"
        type="datetime-local"
        placeholder="Enter Departure time"
        error={errors.departure}
      />
      {errors.departure && (
        <p className="text-sm text-red-400">{errors.departure}</p>
      )}

      <Button type="submit" state="idle">
        Calculate ETA
      </Button>
    </form>
  );
}
