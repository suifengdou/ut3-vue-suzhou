import request from '@/utils/request'

export function getSubUnit(params) {
  return request({
    url: '/bom/subunit/subunit/',
    method: 'get',
    params
  })
}


