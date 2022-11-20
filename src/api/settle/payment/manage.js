import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPayment(params) {
  return request({
    url: '/settle/payment/paymentorder/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPayment(data) {
  return request({
    url: `/settle/payment/paymentorder/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogPayment(data) {
  return request({
    url: `/settle/payment/paymentorder/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPayment(data) {
  return request({
    url: `/settle/payment/paymentorder/get_file_details/`,
    method: 'patch',
    data
  })
}

