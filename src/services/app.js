import request from '../utils/request';

export async function getUser() {
  return request('/api/getUser');
}

