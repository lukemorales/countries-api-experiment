import { FormStepsContextData } from '@contexts/form-steps/types';

export const selectStep = ({ step }: FormStepsContextData) => step;

export const selectFormValues = ({ form }: FormStepsContextData) => form;

export const selectUpdateForm = ({ updateFormSteps }: FormStepsContextData) =>
  updateFormSteps;

export const selectSubmitForm = ({ submitForm }: FormStepsContextData) =>
  submitForm;

export const selectResetForm = ({ resetForm }: FormStepsContextData) =>
  resetForm;
