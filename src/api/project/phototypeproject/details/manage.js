import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeProjectDetails(params) {
  return request({
    url: '/project/phototypeproject/phototypeprojectdetails/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeProjectDetails(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetails/export/`,
    method: 'patch',
    data
  })
}


// 查询日志
export function getLogPhototypeProjectDetails(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetails/get_log_details/`,
    method: 'patch',
    data
  })
}

// 查询文档
export function getFileDetailsPhototypeProjectDetails(data) {
  return request({
    url: `/project/phototypeproject/phototypeprojectdetails/get_file_details/`,
    method: 'patch',
    data
  })
}

