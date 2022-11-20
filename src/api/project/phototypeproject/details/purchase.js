import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProjectDetailsPurchase(params) {
  return request({
    url: '/project/phototypeproject/phototypeprojectdetailspurchase/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeProjectDetailsPurchase(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailspurchase/reset_tag/`,
    method: 'patch',
    data
  })
}

