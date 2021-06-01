import { FormContextSteps } from '@contexts/form-steps/types';

type HeaderContentData = Record<'title' | 'description', string>;

export type HeaderContent = Record<FormContextSteps, HeaderContentData>;
