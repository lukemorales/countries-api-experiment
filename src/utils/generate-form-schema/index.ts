import * as Yup from 'yup';

import { DEFAULT_FORM_SCHEMA } from '@constants/forms';

import { BRAZIL_SCHEMA, GHANA_SCHEMA, SPAIN_SCHEMA } from './constants';

export const generateFormSchema = (countryName: string) => {
  const complementarySchema = {};

  switch (countryName) {
    case 'Brazil':
      Object.assign(complementarySchema, BRAZIL_SCHEMA);
      break;
    case 'Ghana':
      Object.assign(complementarySchema, GHANA_SCHEMA);
      break;
    case 'Spain':
      Object.assign(complementarySchema, SPAIN_SCHEMA);
      break;
    default:
      break;
  }

  return Yup.object().shape({
    ...DEFAULT_FORM_SCHEMA,
    ...complementarySchema,
  });
};
