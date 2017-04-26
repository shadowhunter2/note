import request from '../utils/request';

export async function query(params) {
  return request('/api/note/query', {
    method: 'get',
    data: params
  });
}

export async function queryDetail(params) {
  return request('/api/note/queryDetail', {
    method: 'get',
    data: params
  });
}

export async function add(params) {
  return request('/api/note/add', {
    method: 'post',
    data: params
  });
}

export async function update(params) {
  return request('/api/note/update', {
    method: 'post',
    data: params
  });
}

export async function remove(params) {
  return request('/api/note/remove', {
    method: 'get',
    data: params
  });
}

