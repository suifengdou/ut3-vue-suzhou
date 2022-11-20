import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getComponentProjectDevelop(params) {
  return request({
    url: '/project/componentproject/componentprojectdevelop/',
    method: 'get',
    params
  })
}

// 创建工单
export function createComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateComponentProjectDevelop(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/componentproject/componentprojectdevelop/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagComponentProjectDevelop(data) {
  return request({
    url: `/project/componentproject/componentprojectdevelop/reset_tag/`,
    method: 'patch',
    data
  })
}


