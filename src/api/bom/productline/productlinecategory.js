import request from '@/utils/request'

export function getProductLineCategoryList(params) {
  return request({
    url: '/bom/productline/category/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createProductLineCategory(data) {
  return request({
    url: '/bom/productline/category/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateProductLineCategory(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/productline/category/${id}/`,
    method: 'patch',
    data
  })
}






