/* eslint-disable no-console */
import { useMemo, createContext, useCallback } from 'react';

import { PropsWithRequiredChildren } from '@common/types';
import { useStateReducer } from '@hooks/useStateReducer';

import { FormStepsContextData, FormStepsContextState } from './types';
import { INITIAL_STATE } from './constants';

export const FormStepsContext =
  createContext<FormStepsContextData | null>(null);
FormStepsContext.displayName = 'FormStepsContext';

export const FormStepsProvider = ({ children }: PropsWithRequiredChildren) => {
  const [{ step, form }, setState] =
    useStateReducer<FormStepsContextState>(INITIAL_STATE);

  const handleFormReset = useCallback(
    () => setState(INITIAL_STATE),
    [setState],
  );

  const handleFormSubmit = useCallback(() => {
    setState({ step: 2 });

    console.table(form);
    console.info(JSON.stringify(form, null, 2));
  }, [setState, form]);

  const value = useMemo<FormStepsContextData>(
    () => ({
      step,
      form,
      submitForm: handleFormSubmit,
      resetForm: handleFormReset,
      updateFormSteps: setState,
    }),
    [step, form, handleFormSubmit, handleFormReset, setState],
  );

  return (
    <FormStepsContext.Provider value={value}>
      {children}
    </FormStepsContext.Provider>
  );
};
