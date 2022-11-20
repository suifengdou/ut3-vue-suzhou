import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProjectDevelop(params) {
  return request({
    url: '/project/phototypeproject/phototypeprojectdevelop/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeProjectDevelop(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeProjectDevelop(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdevelop/reset_tag/`,
    method: 'patch',
    data
  })
}


