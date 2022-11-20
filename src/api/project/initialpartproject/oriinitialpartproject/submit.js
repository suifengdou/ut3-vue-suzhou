import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getOriginInitialPartSubmit(params) {
  return request({
    url: '/project/initpartproject/oriinitpartprojectsubmit/',
    method: 'get',
    params
  })
}

// 创建工单
export function createOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateOriginInitialPartSubmit(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/check/`,
    method: 'patch',
    data
  })
}
// 审核工单
export function handleRejectkOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/handle_reject/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/photo_import/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function setNumberOriginInitialPartSubmit(data) {
  return request({
    url: `/project/initpartproject/oriinitpartprojectsubmit/set_number/`,
    method: 'patch',
    data
  })
}


