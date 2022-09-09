import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getComponentProjectPrepare(params) {
  return request({
    url: '/project/componentproject/componentprojectprepare/',
    method: 'get',
    params
  })
}

// 创建工单
export function createComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateComponentProjectPrepare(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/componentproject/componentprojectprepare/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagComponentProjectPrepare(data) {
  return request({
    url: `/project/componentproject/componentprojectprepare/reset_tag/`,
    method: 'patch',
    data
  })
}