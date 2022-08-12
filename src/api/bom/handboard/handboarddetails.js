import request from '@/utils/request'

export function getHandboardDetails(params) {
  return request({
    url: '/bom/handboard/handboarddetails/',
    method: 'get',
    params
  })
}


