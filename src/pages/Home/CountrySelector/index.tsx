import { useEffect, useMemo, useState } from 'react';

import ReactSelect from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { FiChevronRight } from 'react-icons/fi';

import { CountriesResponse } from '@common/types/api/all';
import { useFormSteps } from '@hooks';
import { selectCountry, selectUpdateForm } from '@hooks/useFormSteps/selectors';
import { Button } from '@components';

import * as S from './styles';

type SelectOption = { value: string; label: string } | null;

interface FormFields {
  country: string;
}

interface CountrySelectorProps {
  countries: CountriesResponse;
}

const CountrySelector = ({ countries }: CountrySelectorProps) => {
  const updateForm = useFormSteps(selectUpdateForm);
  const contextCountry = useFormSteps(selectCountry);

  const { handleSubmit, control, watch } = useForm<FormFields>({
    defaultValues: {
      country: contextCountry.name,
    },
  });

  const [canGoNext, setCanGoNext] = useState(false);

  const countryValue = watch('country', contextCountry.name);

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

  const handleFormSubmit = () => {
    if (selectedCountry) {
      updateForm({
        currentStep: 1,
        selectedCountry,
      });
    }
  };

  useEffect(() => {
    setCanGoNext(!!countryValue);
  }, [countryValue]);

  return (
    <S.Container onSubmit={handleSubmit(handleFormSubmit)}>
      <p>Select the country your employee is located:</p>

      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <ReactSelect
            {...field}
            options={options}
            maxMenuHeight={200}
            label="Select country"
            onChange={(e: SelectOption) => field.onChange(e?.value)}
            value={options.find((nation) => nation.value === field.value)}
          />
        )}
      />

      {selectedCountry && (
        <S.CountryFlag src={selectedCountry.flag} alt={selectedCountry.name} />
      )}

      <Button
        title="Continue"
        icon={FiChevronRight}
        disabled={!canGoNext}
        type="submit"
      />
    </S.Container>
  );
};

export default CountrySelector;
