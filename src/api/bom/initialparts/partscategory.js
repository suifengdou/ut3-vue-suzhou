import request from '@/utils/request'

export function getPartsCategory(params) {
  return request({
    url: '/bom/initialparts/partscategory/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createPartsCategory(data) {
  return request({
    url: '/bom/initialparts/partscategory/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updatePartsCategory(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/initialparts/partscategory/${id}/`,
    method: 'patch',
    data
  })
}






