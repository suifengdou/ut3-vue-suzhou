import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProject(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteproject/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeExecuteProject(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteproject/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogPhototypeExecuteProject(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPhototypeExecuteProject(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteproject/get_file_details/`,
    method: 'patch',
    data
  })
}

