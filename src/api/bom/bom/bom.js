import request from '@/utils/request'

export function getBOM(params) {
  return request({
    url: '/bom/bom/bom/',
    method: 'get',
    params
  })
}


