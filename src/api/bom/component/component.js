import request from '@/utils/request'

export function getComponent(params) {
  return request({
    url: '/bom/component/component/',
    method: 'get',
    params
  })
}


