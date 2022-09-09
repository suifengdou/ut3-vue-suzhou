import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getUPPhoto(params) {
  return request({
    url: '/project/unitproject/upphoto/',
    method: 'get',
    params
  })
}

// 创建工单
export function createUPPhoto(data) {
  return request({
    url: `/project/unitproject/upphoto/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateUPPhoto(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/unitproject/upphoto/${id}/`,
    method: 'patch',
    data
  })
}


// 取消工单
export function deleteUPPhoto(data) {
  return request({
    url: `/project/unitproject/upphoto/delete_photo/`,
    method: 'patch',
    data
  })
}
