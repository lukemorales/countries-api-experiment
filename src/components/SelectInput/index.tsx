import { Controller, useFormContext } from 'react-hook-form';
import { OptionsType } from 'react-select';

import * as S from './styles';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  label: string;
  options: OptionsType<SelectOption>;
}

const SelectInput = ({ name, label, options }: SelectInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <S.ReactSelect
          {...field}
          options={options}
          placeholder={label}
          maxMenuHeight={200}
          onChange={(e: SelectOption) => field.onChange(e.value)}
          value={options.find((option) => option.value === field.value)}
        />
      )}
    />
  );
};

export default SelectInput;
