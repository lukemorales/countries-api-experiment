import * as Yup from 'yup';

export const SPAIN_SCHEMA = {
  marital_status: Yup.string().required(
    'Please inform the employee marital status',
  ),
  social_insurance_number: Yup.number()
    .typeError('Please inform the employee social insurance number')
    .required('Please inform the employee social insurance number'),
  holiday_allowance: Yup.number()
    .typeError('Please provide the number of holidays allowed')
    .min(30, 'Please provide at least 30 days of holidays'),
};
