import { useReducer } from 'react';

import { AnyObject } from '@common/types/app';

import { StateAction } from './types';

function stateReducer<S extends AnyObject>() {
  return (state: S, action: StateAction<S>): S => ({
    ...state,
    ...(typeof action === 'function' ? action(state) : action),
  });
}

export const useStateReducer = <T extends AnyObject>(initialState: T) =>
  useReducer(stateReducer<T>(), initialState);
