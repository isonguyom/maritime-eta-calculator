'use client';

import { defaultSettings } from '@/lib/constants/settings';
import { SettingsType } from '@/types/settings';
import { useState } from 'react';

const STORAGE_KEY = 'naviscope-settings';

export default function useSettings() {
  const [settings, setSettings] = useState<SettingsType>(() => {
    if (typeof window === 'undefined') {
      return defaultSettings;
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored) as SettingsType;
      }
    } catch {
      // ignore
    }

    return defaultSettings;
  });

  const save = (value: SettingsType) => {
    setSettings(value);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  };

  const reset = () => {
    save(defaultSettings);
  };

  return {
    settings,
    save,
    reset,
  };
}
