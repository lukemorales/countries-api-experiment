import { FormStepsContext } from '@contexts/form-steps';
import { createContextWithSelector } from '@utils';

export const useFormSteps = createContextWithSelector(
  FormStepsContext,
  'useFormSteps',
);
