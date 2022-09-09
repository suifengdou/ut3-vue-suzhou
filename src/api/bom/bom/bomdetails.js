import request from '@/utils/request'

export function getBOMDetails(params) {
  return request({
    url: '/bom/bom/bomdetails/',
    method: 'get',
    params
  })
}


