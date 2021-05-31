type StateObject<S> = Record<keyof S, S[keyof S]>;

export type StateAction<S> =
  | Partial<StateObject<S>>
  | import('react').ReducerWithoutAction<S>;

export type InitializerFn<T> = (initialArg: T) => T;
