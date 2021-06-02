import { memo } from 'react';

import { Input } from '@components';

const SpainExtraFields = () => (
  <>
    <Input name="marital_status" label="Marital Status" />
    <Input
      type="number"
      name="social_insurance_number"
      label="Social Insurance Number"
    />
  </>
);

export default memo(SpainExtraFields);
