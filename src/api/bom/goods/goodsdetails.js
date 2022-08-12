import request from '@/utils/request'

export function getGoodsDetails(params) {
  return request({
    url: '/bom/goods/goodsdetails/',
    method: 'get',
    params
  })
}


