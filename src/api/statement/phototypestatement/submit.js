import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeStatementSubmit(params) {
  return request({
    url: '/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeStatementSubmit(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeStatementSubmit(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementsubmit/reset_tag/`,
    method: 'patch',
    data
  })
}

