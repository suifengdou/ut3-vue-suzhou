import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getSUPFiles(params) {
  return request({
    url: '/project/subunitproject/supfiles/',
    method: 'get',
    params
  })
}

// 创建工单
export function createSUPFiles(data) {
  return request({
    url: `/project/subunitproject/supfiles/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateSUPFiles(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/subunitproject/supfiles/${id}/`,
    method: 'patch',
    data
  })
}


// 取消工单
export function deleteSUPFiles(data) {
  return request({
    url: `/project/subunitproject/supfiles/delete_file/`,
    method: 'patch',
    data
  })
}
