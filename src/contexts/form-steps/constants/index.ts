import { FormFields, FormStepsContextState } from '../types';

export const INITIAL_STATE: FormStepsContextState = {
  currentStep: 0,
  form: {} as FormFields,
  selectedCountry: '',
};
