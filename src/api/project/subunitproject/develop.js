import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getSubUnitProjectDevelop(params) {
  return request({
    url: '/project/subunitproject/subunitprojectdevelop/',
    method: 'get',
    params
  })
}

// 创建工单
export function createSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateSubUnitProjectDevelop(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagSubUnitProjectDevelop(data) {
  return request({
    url: `/project/subunitproject/subunitprojectdevelop/reset_tag/`,
    method: 'patch',
    data
  })
}