import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProjectDetailsMake(params) {
  return request({
    url: '/project/phototypeproject/phototypeprojectdetailsmake/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeProjectDetailsMake(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetailsmake/reset_tag/`,
    method: 'patch',
    data
  })
}

