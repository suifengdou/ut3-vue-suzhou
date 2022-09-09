import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getUnitProjectConfirm(params) {
  return request({
    url: '/project/unitproject/unitprojectconfirm/',
    method: 'get',
    params
  })
}

// 创建工单
export function createUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateUnitProjectConfirm(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/unitprojectconfirm/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagUnitProjectConfirm(data) {
  return request({
    url: `/project/unitproject/unitprojectconfirm/reset_tag/`,
    method: 'patch',
    data
  })
}