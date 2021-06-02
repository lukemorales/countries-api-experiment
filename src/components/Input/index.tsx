import { InputHTMLAttributes, useEffect, useState } from 'react';

import { FieldError, useFormContext } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import * as S from './styles';
import MaskedInput from './MaskedInput';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  mask?: string;
  maskPlaceholder?: string;
};

const Input = (props: InputProps) => {
  const { colors } = useTheme();
  const { register, control, formState, watch } = useFormContext();

  const [isFilled, setIsFilled] = useState(false);

  const {
    name,
    id,
    type = 'text',
    required,
    disabled,
    className,
    mask,
    maskPlaceholder,
    label,
    ...attrs
  } = props;
  delete attrs.value;

  attrs.inputMode =
    attrs.inputMode || type === 'number' ? 'numeric' : undefined;

  const inputValue = watch(name, '');
  const inputError = formState.errors[name] as FieldError;

  const identifier = id || name;

  useEffect(() => {
    setIsFilled(!!inputValue);
  }, [inputValue]);

  return (
    <S.Container
      htmlFor={identifier}
      $error={!!inputError}
      $filled={isFilled}
      $disabled={disabled}
      className={className}
      {...attrs.tabIndex}
    >
      {mask ? (
        <MaskedInput
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          control={control}
          id={identifier}
          name={name}
        />
      ) : (
        <input
          id={identifier}
          type={type}
          disabled={disabled}
          readOnly={disabled}
          {...attrs}
          {...register(name, {
            required,
            valueAsNumber: type === 'number',
          })}
        />
      )}

      <span>{label}</span>

      {inputError && (
        <S.ErrorWrapper>
          <FiAlertCircle color={colors.error} size="0.875rem" />
          {inputError.message}
        </S.ErrorWrapper>
      )}
    </S.Container>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  required: false,
} as Partial<InputProps>;

export default Input;
