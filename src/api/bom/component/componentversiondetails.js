import request from '@/utils/request'

export function getComponentVersionDetails(params) {
  return request({
    url: '/bom/component/componentversiondeatails/',
    method: 'get',
    params
  })
}


