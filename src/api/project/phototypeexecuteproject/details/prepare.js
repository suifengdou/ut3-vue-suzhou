import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectDetailsPrepare(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeExecuteProjectDetailsPrepare(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/reset_tag/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setSpecialgPhototypeExecuteProjectDetailsPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetailsprepare/set_special/`,
    method: 'patch',
    data
  })
}
