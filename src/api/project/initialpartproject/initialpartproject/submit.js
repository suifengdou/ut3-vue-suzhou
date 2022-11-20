import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getInitialPartProjectConfirm(params) {
  return request({
    url: '/project/initpartproject/initpartprojectconfirm/',
    method: 'get',
    params
  })
}

// 创建工单
export function createInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateInitialPartProjectConfirm(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportInitialPartProjectConfirm(data) {
  return request({
    url: `/project/initpartproject/initpartprojectconfirm/photo_import/`,
    method: 'patch',
    data
  })
}
