import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getPhototypeRelation(params) {
  return request({
    url: '/settle/payment/relationpepstopay/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportPhototypeRelation(data) {
  return request({
    url: `/settle/payment/relationpepstopay/export/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogPhototypeRelation(data) {
  return request({
    url: `/settle/payment/relationpepstopay/get_log_details/`,
    method: 'patch',
    data
  })
}


