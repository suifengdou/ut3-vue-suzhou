import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPaymentCheck(params) {
  return request({
    url: '/settle/payment/paymentordercheck/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePaymentCheck(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/settle/payment/paymentordercheck/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPaymentCheck(data) {
  return request({
    url: `/settle/payment/paymentordercheck/reset_tag/`,
    method: 'patch',
    data
  })
}


