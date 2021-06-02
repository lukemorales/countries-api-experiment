import { memo } from 'react';

import { Input } from '@components';

const GhanaExtraFields = () => (
  <>
    <Input name="marital_status" label="Marital Status" />
    <Input type="number" name="number_of_children" label="Number of Children" />
  </>
);

export default memo(GhanaExtraFields);
