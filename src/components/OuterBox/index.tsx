import { PropsWithRequiredChildren } from '@common/types';

import * as S from './styles';

const OuterBox = ({ children }: PropsWithRequiredChildren) => (
  <S.Container>{children}</S.Container>
);

export default OuterBox;
