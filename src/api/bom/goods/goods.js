import request from '@/utils/request'

export function getGoods(params) {
  return request({
    url: '/bom/goods/goods/',
    method: 'get',
    params
  })
}


