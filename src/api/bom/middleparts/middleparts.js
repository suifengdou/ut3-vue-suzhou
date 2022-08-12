import request from '@/utils/request'

export function getMiddleParts(params) {
  return request({
    url: '/bom/middleparts/middleparts/',
    method: 'get',
    params
  })
}


