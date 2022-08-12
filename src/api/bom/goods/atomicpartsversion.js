import request from '@/utils/request'

export function getAtomicPartsVersion(params) {
  return request({
    url: '/bom/goods/atomicpartsversion/',
    method: 'get',
    params
  })
}


