import axios from 'axios';
import get from 'lodash/get';

const API_URL = '/api/';
const TOTAL_RETRIES = 2;

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

api.interceptors.response.use(undefined, error => {
  const errorResponseStatus = get(error, 'response.status');
  const errorCode = get(error, 'code');
  const retries = get(error, 'config.headers.X-RETRIES', 0);

  if ((errorResponseStatus === 500 || errorCode === 'ECONNRESET') && retries < TOTAL_RETRIES) {
    return api({
      ...error.config,
      headers: {
        ...error.config.headers,
        'X-RETRIES': retries + 1,
      },
      url: error.config.url.replace(API_URL, ''),
    });
  }

  // eslint-disable-next-line no-param-reassign
  error.response = {
    ...error.response,
    data: {
      ...get(error, 'response.data'),
      errors: [
        {
          ...get(error, 'response.data.errors.0'),
          message:
            get(error, 'response.data.errors.0.message') ||
            'Oops! Something went wrong. Please wait a moment and try again.',
        },
        ...get(error, 'response.data.errors', []).slice(1),
      ],
    },
    status: errorResponseStatus || 500,
  };

  throw error;
});

export default api;
