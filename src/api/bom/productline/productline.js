import request from '@/utils/request'

export function getProductLineList(params) {
  return request({
    url: '/bom/productline/productline/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createProductLine(data) {
  return request({
    url: '/bom/productline/productline/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateProductLine(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/productline/productline/${id}/`,
    method: 'patch',
    data
  })
}






