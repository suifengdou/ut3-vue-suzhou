import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getUnitProjectDevelop(params) {
  return request({
    url: '/project/unitproject/unitprojectdevelop/',
    method: 'get',
    params
  })
}

// 创建工单
export function createUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateUnitProjectDevelop(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/unitprojectdevelop/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/reject/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/reset_tag/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportUnitProjectDevelop(data) {
  return request({
    url: `/project/unitproject/unitprojectdevelop/photo_import/`,
    method: 'patch',
    data
  })
}
