import request from '@/utils/request'

export function getLogisticsSupplierList(params) {
  return request({
    url: '/supplier/logisticssup/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createLogisticsSupplier(data) {
  return request({
    url: '/supplier/logisticssup/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateLogisticsSupplier(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/supplier/logisticssup/${id}/`,
    method: 'patch',
    data
  })
}


