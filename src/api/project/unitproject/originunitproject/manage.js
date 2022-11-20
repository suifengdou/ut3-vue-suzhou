import request from '@/utils/request'

// 整机项目管理API
// 获取列表
export function getOriginUnitProject(params) {
  return request({
    url: '/project/unitproject/originunitproject/',
    method: 'get',
    params
  })
}


// 导出工单
export function exportOriginUnitProject(data) {
  return request({
    url: `/project/unitproject/originunitproject/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogOriginUnitProject(data) {
  return request({
    url: `/project/unitproject/originunitproject/get_log_details/`,
    method: 'patch',
    data
  })
}


// 查询文档
export function getFileDetailsOriginUnitProject(data) {
  return request({
    url: `/project/unitproject/originunitproject/get_file_details/`,
    method: 'patch',
    data
  })
}
