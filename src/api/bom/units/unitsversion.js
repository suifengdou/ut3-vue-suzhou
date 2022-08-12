import request from '@/utils/request'

export function getUnitsVersion(params) {
  return request({
    url: '/bom/units/unitsversion/',
    method: 'get',
    params
  })
}


