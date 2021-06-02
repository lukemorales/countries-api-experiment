import { Country } from '@common/types/api/all';

import { FormStepsContextState } from '../types';

export const INITIAL_STATE: FormStepsContextState = {
  currentStep: 0,
  selectedCountry: {} as Country,
};
