import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectDetailsPurchase(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeExecuteProjectDetailsPurchase(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeExecuteProjectDetailsPurchase(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailspurchase/reset_tag/`,
    method: 'patch',
    data
  })
}

