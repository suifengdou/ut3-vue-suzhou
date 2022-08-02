import request from '@/utils/request'

export function getScrew(params) {
  return request({
    url: '/bom/standardlabrary/screw/manage/',
    method: 'get',
    params
  })
}

// 创建螺丝
export function createScrew(data) {
  return request({
    url: '/bom/standardlabrary/screw/manage/',
    method: 'post',
    data
  })
}

// 修改螺丝
export function updateScrew(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/standardlabrary/screw/manage/${id}/`,
    method: 'patch',
    data
  })
}

// 修改螺丝
export function importScrew(id, data) {
  return request({
    url: `/bom/standardlabrary/screw/manage/`,
    method: 'patch',
    data
  })
}





