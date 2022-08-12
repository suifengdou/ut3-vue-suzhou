import request from '@/utils/request'

export function getAtomicParts(params) {
  return request({
    url: '/bom/goods/atomicparts/',
    method: 'get',
    params
  })
}


