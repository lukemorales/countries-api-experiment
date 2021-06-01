import axios from 'axios';

import { BASE_URL } from '@constants';

export default axios.create({
  baseURL: BASE_URL,
});
