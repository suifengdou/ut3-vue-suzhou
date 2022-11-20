import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeStatement(params) {
  return request({
    url: '/statement/phototypeexecuteproject/phototypeexecuteprojectstatement/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeStatement(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatement/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogPhototypeStatement(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatement/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPhototypeStatement(data) {
  return request({
    url: `/statement/phototypeexecuteproject/phototypeexecuteprojectstatement/get_file_details/`,
    method: 'patch',
    data
  })
}

