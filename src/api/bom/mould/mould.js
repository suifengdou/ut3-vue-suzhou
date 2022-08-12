import request from '@/utils/request'

export function getMould(params) {
  return request({
    url: '/bom/mould/mould/',
    method: 'get',
    params
  })
}


