import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiSend } from 'react-icons/fi';

import { FormFields } from '@contexts/form-steps/types';
import { useFormSteps } from '@hooks';
import { selectCountry, selectSubmitForm } from '@hooks/useFormSteps/selectors';
import { generateFormSchema } from '@utils/generate-form-schema';
import { COUNTRIES_WITH_NO_HOLIDAY_LAWS } from '@constants/forms';
import { Button, Input } from '@components';

import ExtraFields from './ExtraFields';
import * as S from './styles';

const Form = () => {
  const country = useFormSteps(selectCountry);
  const submitForm = useFormSteps(selectSubmitForm);

  const formMethods = useForm<FormFields>({
    resolver: yupResolver(generateFormSchema(country.name)),
  });

  return (
    <FormProvider {...formMethods}>
      <S.Container onSubmit={formMethods.handleSubmit(submitForm)}>
        <Input name="first_name" label="First Name" />
        <Input name="last_name" label="Last Name" />

        <Input
          name="birthdate"
          label="Date of Birth"
          mask="99/99/9999"
          maskPlaceholder="mm/dd/yyyy"
        />

        {!COUNTRIES_WITH_NO_HOLIDAY_LAWS.includes(country.name) && (
          <Input
            type="number"
            name="holiday_allowance"
            label="Holiday Allowance"
          />
        )}

        <ExtraFields countryName={country.name} />

        <Button title="Submit Form" icon={FiSend} type="submit" />
      </S.Container>
    </FormProvider>
  );
};

export default Form;
