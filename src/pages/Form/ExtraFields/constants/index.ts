import { ElementType } from 'react';

import {
  BrazilExtraFields,
  GhanaExtraFields,
  SpainExtraFields,
} from '../countries';

export const EXTRA_FIELDS: Record<string, ElementType> = {
  Brazil: BrazilExtraFields,
  Ghana: GhanaExtraFields,
  Spain: SpainExtraFields,
};
