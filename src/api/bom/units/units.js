import request from '@/utils/request'

export function getUnits(params) {
  return request({
    url: '/bom/units/units/',
    method: 'get',
    params
  })
}


