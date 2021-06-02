import { memo } from 'react';

import { Input } from '@components';

const BrazilExtraFields = () => (
  <>
    <Input type="number" name="working_hours" label="Working Hours" />
  </>
);

export default memo(BrazilExtraFields);
