import * as Yup from 'yup';

export const GHANA_SCHEMA = {
  marital_status: Yup.string().required(
    'Please inform the employee marital status',
  ),
  number_of_children: Yup.number().required(
    "Please inform the employee's number of children",
  ),
  holiday_allowance: Yup.mixed().nullable(),
};
