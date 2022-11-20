import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getComponentProject(params) {
  return request({
    url: '/project/componentproject/componentproject/',
    method: 'get',
    params
  })
}

// 创建工单
export function createComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateComponentProject(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/componentproject/componentproject/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/reset_tag/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsComponentProject(data) {
  return request({
    url: `/project/componentproject/componentproject/get_file_details/`,
    method: 'patch',
    data
  })
}

