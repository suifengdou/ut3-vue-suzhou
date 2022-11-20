import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeStatementCheck(params) {
  return request({
    url: '/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeStatementCheck(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/reset_tag/`,
    method: 'patch',
    data
  })
}

// 全额创建付款单
export function createTotalPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/create_total/`,
    method: 'patch',
    data
  })
}

// 拆分创建付款单
export function createSplitPhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/create_total/`,
    method: 'patch',
    data
  })
}

// 合并创建付款单
export function createCombinePhototypeStatementCheck(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatementcheck/create_total/`,
    method: 'patch',
    data
  })
}

