import { useQuery } from 'react-query';

import { api } from '@services';
import { CountriesResponse } from '@common/types/api/all';

const fetchCountries = async () => {
  const response = await api.get<CountriesResponse>(
    '/all?fields=name;flag;numericCode;',
  );

  return response.data;
};

export const useCountriesQuery = () =>
  useQuery('all-countries', fetchCountries, {
    staleTime: Infinity,
  });
