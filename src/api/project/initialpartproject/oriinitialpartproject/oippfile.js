import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getOIPPFile(params) {
  return request({
    url: '/project/initpartproject/oippfiles/',
    method: 'get',
    params
  })
}

// 创建工单
export function createOIPPFile(data) {
  return request({
    url: `/project/initpartproject/oippfiles/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateOIPPFile(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/initpartproject/oippfiles/${id}/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function deleteOIPPFile(data) {
  return request({
    url: `/project/initpartproject/oippfiles/delete_file/`,
    method: 'patch',
    data
  })
}
