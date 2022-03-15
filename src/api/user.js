import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue2-admin-demo/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue2-admin-demo/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue2-admin-demo/user/logout',
    method: 'post'
  })
}
