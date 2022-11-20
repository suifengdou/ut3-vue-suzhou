import request from '@/utils/request'

export function getPhototypeSupplier(params) {
  return request({
    url: '/supplier/phototypesupplier/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createPhototypeSupplier(data) {
  return request({
    url: '/supplier/phototypesupplier/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updatePhototypeSupplier(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/supplier/phototypesupplier/${id}/`,
    method: 'patch',
    data
  })
}






