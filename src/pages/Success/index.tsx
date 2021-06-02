import { FiPlusSquare } from 'react-icons/fi';

import { Button } from '@components';
import { useFormSteps } from '@hooks';
import { selectResetForm } from '@hooks/useFormSteps/selectors';

import * as S from './styles';

const Success = () => {
  const resetForm = useFormSteps(selectResetForm);

  return (
    <S.Container>
      <Button
        title="Add new employee"
        icon={FiPlusSquare}
        onClick={resetForm}
      />
    </S.Container>
  );
};

export default Success;
