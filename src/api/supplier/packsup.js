import request from '@/utils/request'

export function getPackSupplierList(params) {
  return request({
    url: '/supplier/packsup/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createPackSupplier(data) {
  return request({
    url: '/supplier/packsup/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updatePackSupplier(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/supplier/packsup/${id}/`,
    method: 'patch',
    data
  })
}






