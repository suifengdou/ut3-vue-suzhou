import request from '@/utils/request'

export function getMouldVersion(params) {
  return request({
    url: '/bom/mould/mouldversion/',
    method: 'get',
    params
  })
}


