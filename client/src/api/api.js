import api from './apiConfig';

export function doAction(payload) {
  return api.post('ping', payload);
}
