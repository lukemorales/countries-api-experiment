import { useContext, useRef, Context as ContextType } from 'react';

type ContextSelector<S, T = unknown> = (state: S) => T;

export const createContextWithSelector = <S>(
  Context: ContextType<S>,
  hookName: string,
) => {
  if (!Context.displayName) {
    throw new Error(`Please set the Context displayName for ${hookName} hook`);
  }

  const providerIdentifier = `${Context.displayName}Provider`;

  return <T = NonNullable<S>>(
    selector?: ContextSelector<NonNullable<S>, T>,
  ): T => {
    const context = useContext(Context);

    if (!context) {
      throw new Error(
        `${hookName} must be used within a ${providerIdentifier}`,
      );
    }

    const previousHash = useRef<string>();
    const previousSelectedData = useRef<T>();

    if (selector) {
      const selectedData = selector(context as NonNullable<S>);

      if (typeof selectedData === 'function') {
        return selectedData;
      }

      const selectedDataHash = JSON.stringify(selectedData);

      const isSameData = selectedDataHash === previousHash.current;

      if (isSameData && previousSelectedData.current) {
        return previousSelectedData.current;
      }

      previousHash.current = selectedDataHash;
      previousSelectedData.current = selectedData;

      return selectedData;
    }

    return context as unknown as T;
  };
};
