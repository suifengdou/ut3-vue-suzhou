import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectPrepare(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectprepare/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePhototypeExecuteProjectPrepare(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagPhototypeExecuteProjectPrepare(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectprepare/reset_tag/`,
    method: 'patch',
    data
  })
}

