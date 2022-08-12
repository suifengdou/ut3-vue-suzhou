import request from '@/utils/request'

export function getMouldVersionDetails(params) {
  return request({
    url: '/bom/mould/mouldversiondetails/',
    method: 'get',
    params
  })
}


