import { Dispatch } from 'react';

import { StateAction } from '@hooks/useStateReducer/types';
import { Country } from '@common/types/api/all';

export type FormContextSteps = 0 | 1 | 2;

export interface FormFields {
  first_name: string;
  last_name: string;
  birthdate: string;
  holiday_allowance: number | null;
  [key: string]: string | number | null;
}

export type FormStepsContextState = {
  currentStep: FormContextSteps;
  selectedCountry: Country;
};

export interface FormStepsContextData extends FormStepsContextState {
  updateFormSteps: Dispatch<StateAction<FormStepsContextState>>;
  submitForm: (data: FormFields) => void;
  resetForm: () => void;
}
