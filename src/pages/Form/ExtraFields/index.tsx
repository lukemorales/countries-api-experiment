import { EXTRA_FIELDS } from './constants';

interface ExtraFieldsProps {
  countryName: string;
}

const ExtraFields = ({ countryName }: ExtraFieldsProps) => {
  const CountryFields = EXTRA_FIELDS[countryName];

  return CountryFields ? <CountryFields /> : null;
};

export default ExtraFields;
