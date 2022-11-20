import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPTFiles(params) {
  return request({
    url: '/project/phototypeproject/ptfiles/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPTFiles(data) {
  return request({
    url: `/project/phototypeproject/ptfiles/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePTFiles(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeproject/ptfiles/${id}/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function deletePTFiles(data) {
  return request({
    url: `/project/phototypeproject/ptfiles/delete_file/`,
    method: 'patch',
    data
  })
}
