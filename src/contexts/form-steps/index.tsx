/* eslint-disable no-console */
import { useMemo, createContext, useCallback } from 'react';

import { PropsWithRequiredChildren } from '@common/types/app';
import { useStateReducer } from '@hooks/useStateReducer';

import { FormStepsContextData, FormStepsContextState } from './types';
import { INITIAL_STATE } from './constants';

export const FormStepsContext =
  createContext<FormStepsContextData | null>(null);
FormStepsContext.displayName = 'FormStepsContext';

export const FormStepsProvider = ({ children }: PropsWithRequiredChildren) => {
  const [state, setState] =
    useStateReducer<FormStepsContextState>(INITIAL_STATE);

  const { currentStep, form, selectedCountry } = state;

  const handleFormReset = useCallback(
    () => setState(INITIAL_STATE),
    [setState],
  );

  const handleFormSubmit = useCallback(() => {
    setState({ currentStep: 2 });

    const request = {
      country: selectedCountry,
      ...form,
    };

    console.table(request);
    console.info(JSON.stringify(request, null, 2));
  }, [form, selectedCountry, setState]);

  const value = useMemo<FormStepsContextData>(
    () => ({
      currentStep,
      form,
      selectedCountry,
      submitForm: handleFormSubmit,
      resetForm: handleFormReset,
      updateFormSteps: setState,
    }),
    [
      currentStep,
      form,
      selectedCountry,
      handleFormSubmit,
      handleFormReset,
      setState,
    ],
  );

  return (
    <FormStepsContext.Provider value={value}>
      {children}
    </FormStepsContext.Provider>
  );
};
