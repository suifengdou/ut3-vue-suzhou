import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getIPPFile(params) {
  return request({
    url: '/project/initpartproject/ippfiles/',
    method: 'get',
    params
  })
}

// 创建工单
export function createIPPFile(data) {
  return request({
    url: `/project/initpartproject/ippfiles/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateIPPFile(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/initpartproject/ippfiles/${id}/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function deleteIPPFile(data) {
  return request({
    url: `/project/initpartproject/oippfiles/delete_file/`,
    method: 'patch',
    data
  })
}
