import request from '@/utils/request'

export function getHandboard(params) {
  return request({
    url: '/bom/handboard/handboard/',
    method: 'get',
    params
  })
}


