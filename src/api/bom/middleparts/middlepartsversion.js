import request from '@/utils/request'

export function getMiddlePartsVersion(params) {
  return request({
    url: '/bom/middleparts/middlepartsversion/',
    method: 'get',
    params
  })
}


