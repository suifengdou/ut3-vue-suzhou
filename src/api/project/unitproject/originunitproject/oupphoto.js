import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getOUPPhoto(params) {
  return request({
    url: '/project/unitproject/oupphoto/',
    method: 'get',
    params
  })
}

// 创建工单
export function createOUPPhoto(data) {
  return request({
    url: `/project/unitproject/oupphoto/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateOUPPhoto(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/oupphoto/${id}/`,
    method: 'patch',
    data
  })
}


// 取消工单
export function deleteOUPPhoto(data) {
  return request({
    url: `/project/unitproject/oupphoto/delete_photo/`,
    method: 'patch',
    data
  })
}
