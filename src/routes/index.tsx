import { FormContextSteps } from '@contexts/form-steps/types';
import { Home, Form, Success } from '@pages';

type Routes = Record<FormContextSteps, () => JSX.Element>;

export const routes: Routes = {
  0: Home,
  1: Form,
  2: Success,
};
