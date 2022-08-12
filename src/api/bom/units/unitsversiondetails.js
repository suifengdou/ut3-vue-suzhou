import request from '@/utils/request'

export function getUnitsVersionDetails(params) {
  return request({
    url: '/bom/units/unitsversiondetails/',
    method: 'get',
    params
  })
}


