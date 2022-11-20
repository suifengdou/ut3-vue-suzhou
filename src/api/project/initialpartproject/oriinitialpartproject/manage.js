import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getOriginInitialPartProject(params) {
  return request({
    url: '/project/initpartproject/oriinitpartproject/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportOriginInitialPartProject(data) {
  return request({
    url: `/project/initpartproject/oriinitpartproject/export/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportOriginInitialPartProject(data) {
  return request({
    url: `/project/initpartproject/oriinitpartproject/photo_import/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogOriginInitialPartProject(data) {
  return request({
    url: `/project/initpartproject/oriinitpartproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsOriginInitialPartProject(data) {
  return request({
    url: `/project/initpartproject/initpartproject/get_file_details/`,
    method: 'patch',
    data
  })
}

