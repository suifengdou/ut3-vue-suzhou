import request from '@/utils/request'

export function getHandboardSupplierList(params) {
  return request({
    url: '/supplier/handboardsup/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createHandboardSupplier(data) {
  return request({
    url: '/supplier/handboardsup/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateHandboardSupplier(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/supplier/handboardsup/${id}/`,
    method: 'patch',
    data
  })
}






