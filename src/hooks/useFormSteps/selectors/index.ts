import { FormStepsContextData } from '@contexts/form-steps/types';

export const selectCurrentStep = ({ currentStep }: FormStepsContextData) =>
  currentStep;

export const selectCountry = ({ selectedCountry }: FormStepsContextData) =>
  selectedCountry;

export const selectHasSelectedCountry = ({
  selectedCountry,
}: FormStepsContextData) => !!selectedCountry.name;

export const selectFormValues = ({ form }: FormStepsContextData) => form;

export const selectUpdateForm = ({ updateFormSteps }: FormStepsContextData) =>
  updateFormSteps;

export const selectSubmitForm = ({ submitForm }: FormStepsContextData) =>
  submitForm;

export const selectResetForm = ({ resetForm }: FormStepsContextData) =>
  resetForm;
