import request from '@/utils/request'

export function getMouldSupplierList(params) {
  return request({
    url: '/supplier/mouldsup/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createMouldSupplier(data) {
  return request({
    url: '/supplier/mouldsup/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateMouldSupplier(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/supplier/mouldsup/${id}/`,
    method: 'patch',
    data
  })
}






