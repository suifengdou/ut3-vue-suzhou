import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPTEFiles(params) {
  return request({
    url: '/project/phototypeexecuteproject/ptefiles/',
    method: 'get',
    params
  })
}

// 创建工单
export function createPTEFiles(data) {
  return request({
    url: `/project/phototypeexecuteproject/ptefiles/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updatePTEFiles(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/phototypeexecuteproject/ptefiles/${id}/`,
    method: 'patch',
    data
  })
}


// 取消工单
export function deletePTEFiles(data) {
  return request({
    url: `/project/phototypeexecuteproject/ptefiles/delete_file/`,
    method: 'patch',
    data
  })
}
