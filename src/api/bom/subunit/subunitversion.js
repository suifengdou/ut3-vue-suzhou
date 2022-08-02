import request from '@/utils/request'

export function getSubUnitVersiong(params) {
  return request({
    url: '/bom/subunit/subunitversion/',
    method: 'get',
    params
  })
}





