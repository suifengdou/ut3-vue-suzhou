import request from '@/utils/request'

export function getGoodsList(params) {
  return request({
    url: '/base/goods/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createGoods(data) {
  return request({
    url: '/base/goods/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateGoods(id, data) {
  return request({
    url: `/base/goods/${id}/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportGoods(data) {
  return request({
    url: `/base/goods/excel_import/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportGoods(data) {
  return request({
    url: `/base/goods/export/`,
    method: 'patch',
    data
  })
}

export function getGoodsCategoryList(params) {
  return request({
    url: '/base/goodscategory/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createGoodsCategory(data) {
  return request({
    url: '/base/goodscategory/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateGoodsCategory(id, data) {
  return request({
    url: `/base/goodscategory/${id}/`,
    method: 'patch',
    data
  })
}
