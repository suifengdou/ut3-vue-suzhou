import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectDetailsMake(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeExecuteProjectDetailsMake(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeExecuteProjectDetailsMake(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsmake/reset_tag/`,
    method: 'patch',
    data
  })
}

