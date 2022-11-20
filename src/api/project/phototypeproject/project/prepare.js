import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProjectPrepare(params) {
  return request({
    url: '/project/phototypeproject/phototypeprojectprepare/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeProjectPrepare(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeProjectPrepare(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectprepare/reset_tag/`,
    method: 'patch',
    data
  })
}

