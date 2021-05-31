import { ReactNode } from 'react';

export interface PropsWithRequiredChildren {
  children: ReactNode;
}

export type AnyObject = Record<string, unknown>;
