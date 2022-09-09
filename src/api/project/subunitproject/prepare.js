import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getSubUnitProjectPrepare(params) {
  return request({
    url: '/project/subunitproject/subunitprojectprepare/',
    method: 'get',
    params
  })
}

// 创建工单
export function createSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateSubUnitProjectPrepare(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/subunitproject/subunitprojectprepare/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagSubUnitProjectPrepare(data) {
  return request({
    url: `/project/subunitproject/subunitprojectprepare/reset_tag/`,
    method: 'patch',
    data
  })
}