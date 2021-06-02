import { useEffect, useMemo, useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';
import { FiChevronRight } from 'react-icons/fi';

import { CountriesResponse } from '@common/types/api/all';
import { useFormSteps } from '@hooks';
import { selectCountry, selectUpdateForm } from '@hooks/useFormSteps/selectors';
import { Button } from '@components';
import SelectInput from '@components/SelectInput';

import * as S from './styles';

interface FormFields {
  country: string;
}

interface CountrySelectorProps {
  countries: CountriesResponse;
}

const CountrySelector = ({ countries }: CountrySelectorProps) => {
  const updateForm = useFormSteps(selectUpdateForm);
  const contextCountry = useFormSteps(selectCountry);

  const formMethods = useForm<FormFields>({
    defaultValues: {
      country: contextCountry.name,
    },
  });

  const [canGoNext, setCanGoNext] = useState(false);

  const countryValue = formMethods.watch('country', contextCountry.name);

  const selectedCountry = useMemo(
    () => countries.find((nation) => nation.name === countryValue),
    [countries, countryValue],
  );

  const options = useMemo(
    () =>
      countries.map((nation) => ({
        value: nation.name,
        label: nation.name,
      })),
    [countries],
  );

  const handleFormSubmit = () => updateForm({ currentStep: 1 });

  useEffect(() => {
    if (selectedCountry) {
      updateForm({ selectedCountry });
    }
  }, [updateForm, selectedCountry]);

  useEffect(() => {
    setCanGoNext(!!countryValue);
  }, [countryValue]);

  return (
    <FormProvider {...formMethods}>
      <S.Container onSubmit={formMethods.handleSubmit(handleFormSubmit)}>
        <p>Select the country your employee is located:</p>

        <SelectInput name="country" label="Select Country" options={options} />

        {selectedCountry && (
          <S.CountryFlag
            src={selectedCountry.flag}
            alt={selectedCountry.name}
          />
        )}

        <Button
          title="Continue"
          icon={FiChevronRight}
          disabled={!canGoNext}
          type="submit"
        />
      </S.Container>
    </FormProvider>
  );
};

export default CountrySelector;
