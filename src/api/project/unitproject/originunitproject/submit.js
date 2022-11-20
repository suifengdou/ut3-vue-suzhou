import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getOriginUnitProjectSubmit(params) {
  return request({
    url: '/project/unitproject/originunitprojectsubmit/',
    method: 'get',
    params
  })
}

// 创建工单
export function createOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateOriginUnitProjectSubmit(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/originunitprojectsubmit/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/check/`,
    method: 'patch',
    data
  })
}

// 修复工单
export function fixOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/fix/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportOriginUnitProjectSubmit(data) {
  return request({
    url: `/project/unitproject/originunitprojectsubmit/photo_import/`,
    method: 'patch',
    data
  })
}
