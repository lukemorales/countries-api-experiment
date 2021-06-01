import OmniLoading from '@components/OmniLoading';
import { useCountriesQuery } from '@hooks/useCountriesQuery';

import CountrySelector from './CountrySelector';
import * as S from './styles';

const Home = () => {
  const countriesQuery = useCountriesQuery();

  return (
    <S.Container>
      {countriesQuery.isLoading && <OmniLoading />}

      {countriesQuery.isError && (
        <p>Sorry, we are out of service right now =/</p>
      )}

      {countriesQuery.isSuccess && (
        <CountrySelector countries={countriesQuery.data} />
      )}
    </S.Container>
  );
};

export default Home;
