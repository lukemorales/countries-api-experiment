import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@services';
import { theme, GlobalStyles } from '@styles';
import { PropsWithRequiredChildren } from '@common/types/app';

import { FormStepsProvider } from './form-steps';

const AppProviders = ({ children }: PropsWithRequiredChildren) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <FormStepsProvider>{children}</FormStepsProvider>
      <GlobalStyles />
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppProviders;
