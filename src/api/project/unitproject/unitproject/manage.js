import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getUnitProject(params) {
  return request({
    url: '/project/unitproject/unitproject/',
    method: 'get',
    params
  })
}

// 创建工单
export function createUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateUnitProject(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/unitproject/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/reject/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/reset_tag/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/photo_import/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsUnitProject(data) {
  return request({
    url: `/project/unitproject/unitproject/get_file_details/`,
    method: 'patch',
    data
  })
}