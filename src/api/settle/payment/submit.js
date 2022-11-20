import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPaymentSubmit(params) {
  return request({
    url: '/settle/payment/paymentordersubmit/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePaymentSubmit(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/settle/payment/paymentordersubmit/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPaymentSubmit(data) {
  return request({
    url: `/settle/payment/paymentordersubmit/reset_tag/`,
    method: 'patch',
    data
  })
}

