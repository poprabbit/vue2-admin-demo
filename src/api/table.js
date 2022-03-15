import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue2-admin-demo/table/list',
    method: 'get',
    params
  })
}
