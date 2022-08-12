import request from '@/utils/request'

export function getComponentVersion(params) {
  return request({
    url: '/bom/component/componentversion/',
    method: 'get',
    params
  })
}


