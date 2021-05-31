import { PropsWithRequiredChildren } from '@common/types';

import { FormStepsProvider } from './form-steps';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <FormStepsProvider>{children}</FormStepsProvider>
);

export default AppProviders;
