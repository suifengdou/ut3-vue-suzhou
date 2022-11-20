import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProject(params) {
  return request({
    url: '/project/phototypeproject/phototypeproject/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeProject(data) {
  return request({
    url: `/project/phototypeproject/phototypeproject/export/`,
    method: 'patch',
    data
  })
}


// 查询日志
export function getLogPhototypeProject(data) {
  return request({
    url: `/project/phototypeproject/phototypeproject/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPhototypeProject(data) {
  return request({
    url: `/project/phototypeproject/phototypeproject/get_file_details/`,
    method: 'patch',
    data
  })
}

