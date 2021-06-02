import { ReactNode } from 'react';

export interface PropsWithRequiredChildren {
  children: ReactNode;
}

export type AnyObject = Record<string, unknown>;

export type TransientProps<T> = {
  [P in keyof T & string as `$${P}`]: T[P];
};
