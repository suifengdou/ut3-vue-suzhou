import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectDevelop(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeExecuteProjectDevelop(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeExecuteProjectDevelop(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdevelop/reset_tag/`,
    method: 'patch',
    data
  })
}

