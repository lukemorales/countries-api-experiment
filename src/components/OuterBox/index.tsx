import { useMemo } from 'react';

import { FiChevronLeft } from 'react-icons/fi';

import { Omnipresent } from '@assets';
import { PropsWithRequiredChildren } from '@common/types/app';
import { useFormSteps } from '@hooks';
import {
  selectCurrentStep,
  selectUpdateForm,
  selectHasSelectedCountry,
} from '@hooks/useFormSteps/selectors';

import { HEADER_CONTENT } from './constants';
import * as S from './styles';

const OuterBox = ({ children }: PropsWithRequiredChildren) => {
  const currentStep = useFormSteps(selectCurrentStep);
  const hasSelectedCountry = useFormSteps(selectHasSelectedCountry);
  const updateContext = useFormSteps(selectUpdateForm);

  const goBack = () => updateContext({ currentStep: 0 });

  const { title, description } = useMemo(
    () => HEADER_CONTENT[currentStep],
    [currentStep],
  );

  return (
    <S.Container>
      <S.Header>
        {currentStep === 1 && (
          <S.BackButton type="button" onClick={goBack}>
            <FiChevronLeft size="1.5rem" />
          </S.BackButton>
        )}

        <Omnipresent />

        <h1>{title}</h1>
        <p>{description}</p>

        <S.FormCompletion $step={currentStep + (hasSelectedCountry ? 1 : 0)} />
      </S.Header>

      {children}
    </S.Container>
  );
};

export default OuterBox;
