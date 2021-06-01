import { useMemo } from 'react';

import { useFormSteps } from '@hooks';
import { selectCurrentStep } from '@hooks/useFormSteps/selectors';
import { routes } from '@routes';
import { OuterBox } from '@components';

const App = () => {
  const currentStep = useFormSteps(selectCurrentStep);

  const Page = useMemo(() => routes[currentStep], [currentStep]);

  return (
    <OuterBox>
      <Page />
    </OuterBox>
  );
};

export default App;
