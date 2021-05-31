import { useMemo } from 'react';

import { useFormSteps } from '@hooks';
import { selectStep } from '@hooks/useFormSteps/selectors';
import { routes } from '@routes';

const App = () => {
  const step = useFormSteps(selectStep);

  const Page = useMemo(() => routes[step], [step]);

  return <Page />;
};

export default App;
