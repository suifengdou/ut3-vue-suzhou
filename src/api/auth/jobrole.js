import request from '@/utils/request'

export function getJobroleList(params) {
  return request({
    url: '/auth/jobrole/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createJobrole(data) {
  return request({
    url: '/auth/jobrole/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateJobrole(id, data) {
  return request({
    url: `/auth/jobrole/${id}/`,
    method: 'patch',
    data
  })
}

