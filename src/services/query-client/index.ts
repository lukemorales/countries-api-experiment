import { QueryClient } from 'react-query';

import { IS_PRD } from '@constants';

export default new QueryClient({
  defaultOptions: {
    queries: {
      retry: IS_PRD,
      refetchOnWindowFocus: IS_PRD,
    },
  },
});
