import { Dispatch } from 'react';

import { StateAction } from '@hooks/useStateReducer/types';
import { Country } from '@common/types/api/all';

export type FormContextSteps = 0 | 1 | 2;

export interface FormFields {
  first_name: string;
  last_name: string;
  birth_date: string;
  holiday_allowance: number | null;
  [key: string]: string | number | null;
}

export type FormStepsContextState = {
  form: FormFields;
  currentStep: FormContextSteps;
  selectedCountry: Country;
};

export interface FormStepsContextData extends FormStepsContextState {
  updateFormSteps: Dispatch<StateAction<FormStepsContextState>>;
  submitForm: () => void;
  resetForm: () => void;
}
