import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeExecuteProjectDetails(params) {
  return request({
    url: '/project/phototypeexecuteproject/phototypeexecuteprojectdetails/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeExecuteProjectDetails(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetails/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogPhototypeExecuteProjectDetails(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetails/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPhototypeExecuteProjectDetails(data) {
  return request({
    url: `/project/phototypeexecuteproject/phototypeexecuteprojectdetails/get_file_details/`,
    method: 'patch',
    data
  })
}

