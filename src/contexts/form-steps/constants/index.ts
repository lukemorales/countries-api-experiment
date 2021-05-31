import { FormFields, FormStepsContextState } from '../types';

export const INITIAL_STATE: FormStepsContextState = {
  step: 0,
  form: {} as FormFields,
};
