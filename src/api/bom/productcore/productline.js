import request from '@/utils/request'

export function getProductCore(params) {
  return request({
    url: '/bom/productline/productcore/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createProductCore(data) {
  return request({
    url: '/bom/productline/productcore/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateProductCore(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/productline/productcore/${id}/`,
    method: 'patch',
    data
  })
}






