import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/user/show/0',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'delete'
  })
}
