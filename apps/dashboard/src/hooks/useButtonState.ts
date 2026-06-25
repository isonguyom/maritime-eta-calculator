'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { ButtonState } from '@/components/ui/Button';

type UseTemporaryButtonStateOptions = {
  successDuration?: number;
  errorDuration?: number;
};

export default function useButtonState({
  successDuration = 3000,
  errorDuration = 3000,
}: UseTemporaryButtonStateOptions = {}) {
  const [state, setState] = useState<ButtonState>('idle');

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setLoading = useCallback(() => {
    clearTimer();
    setState('loading');
  }, [clearTimer]);

  const setIdle = useCallback(() => {
    clearTimer();
    setState('idle');
  }, [clearTimer]);

  const setSuccess = useCallback(() => {
    clearTimer();

    setState('success');

    timeoutRef.current = setTimeout(() => {
      setState('idle');
    }, successDuration);
  }, [clearTimer, successDuration]);

  const setError = useCallback(() => {
    clearTimer();

    setState('error');

    timeoutRef.current = setTimeout(() => {
      setState('idle');
    }, errorDuration);
  }, [clearTimer, errorDuration]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return {
    state,

    setState,

    setIdle,
    setLoading,
    setSuccess,
    setError,
  };
}
