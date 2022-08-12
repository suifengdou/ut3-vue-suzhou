import request from '@/utils/request'

export function getComponetCategory(params) {
  return request({
    url: '/bom/component/componentcategory/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createComponetCategory(data) {
  return request({
    url: '/bom/component/componentcategory/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateComponetCategory(id, data) {
  return request({
    url: `/bom/component/componentcategory/${id}/`,
    method: 'patch',
    data
  })
}

