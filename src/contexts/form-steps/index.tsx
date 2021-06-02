/* eslint-disable no-console */
import { useMemo, createContext, useCallback } from 'react';

import { PropsWithRequiredChildren } from '@common/types/app';
import { useStateReducer } from '@hooks/useStateReducer';

import {
  FormFields,
  FormStepsContextData,
  FormStepsContextState,
} from './types';
import { INITIAL_STATE } from './constants';

export const FormStepsContext =
  createContext<FormStepsContextData | null>(null);
FormStepsContext.displayName = 'FormStepsContext';

export const FormStepsProvider = ({ children }: PropsWithRequiredChildren) => {
  const [state, setState] =
    useStateReducer<FormStepsContextState>(INITIAL_STATE);

  const { currentStep, selectedCountry } = state;

  const handleFormReset = useCallback(
    () => setState(INITIAL_STATE),
    [setState],
  );

  const handleFormSubmit = useCallback(
    (data: FormFields) => {
      setState({ currentStep: 2 });

      const request = {
        ...data,
        country: {
          numericCode: selectedCountry.numericCode,
          name: selectedCountry.name,
        },
      };

      console.table(request);
      console.info(JSON.stringify(request, null, 2));
    },
    [selectedCountry, setState],
  );

  const value = useMemo<FormStepsContextData>(
    () => ({
      currentStep,

      selectedCountry,
      submitForm: handleFormSubmit,
      resetForm: handleFormReset,
      updateFormSteps: setState,
    }),
    [currentStep, selectedCountry, handleFormSubmit, handleFormReset, setState],
  );

  return (
    <FormStepsContext.Provider value={value}>
      {children}
    </FormStepsContext.Provider>
  );
};
