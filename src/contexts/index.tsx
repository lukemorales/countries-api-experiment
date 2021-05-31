import { ThemeProvider } from 'styled-components';

import { PropsWithRequiredChildren } from '@common/types';
import { theme, GlobalStyles } from '@styles';

import { FormStepsProvider } from './form-steps';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <ThemeProvider theme={theme}>
    <FormStepsProvider>{children}</FormStepsProvider>
    <GlobalStyles />
  </ThemeProvider>
);

export default AppProviders;
