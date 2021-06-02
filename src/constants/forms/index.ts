import * as Yup from 'yup';

export const DEFAULT_FORM_SCHEMA = {
  first_name: Yup.string().required('Please fill the employee first name'),
  last_name: Yup.string().required('Please fill the employee last name'),
  birthdate: Yup.string().required('Please fill the employee date of birth'),
  holiday_allowance: Yup.number().typeError(
    'Please provide the number of holidays allowed',
  ),
};

export const COUNTRIES_WITH_NO_HOLIDAY_LAWS = ['Ghana'];
