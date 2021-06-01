import { Country } from '@common/types/api/all';

import { FormFields, FormStepsContextState } from '../types';

export const INITIAL_STATE: FormStepsContextState = {
  currentStep: 0,
  form: {} as FormFields,
  selectedCountry: {} as Country,
};
