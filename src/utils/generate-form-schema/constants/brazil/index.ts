import * as Yup from 'yup';

export const BRAZIL_SCHEMA = {
  working_hours: Yup.number()
    .typeError('Please inform the employee working hours')
    .required('Please inform the employee working hours'),
  holiday_allowance: Yup.number()
    .typeError('Please provide the number of holidays allowed')
    .max(40, 'Please provide maximum 40 days of holidays'),
};
