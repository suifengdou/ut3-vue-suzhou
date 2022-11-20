import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getSubUnitProject(params) {
  return request({
    url: '/project/subunitproject/subunitproject/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/export/`,
    method: 'patch',
    data
  })
}


// 上传图片
export function photoImportSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/photo_import/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function setTagSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/set_confirm/`,
    method: 'patch',
    data
  })
}

// 标记工单
export function resetTagSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/reset_tag/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsSubUnitProject(data) {
  return request({
    url: `/project/subunitproject/subunitproject/get_file_details/`,
    method: 'patch',
    data
  })
}
