import request from '@/utils/request'

// 原始发票申请单（外埠）操作API
// 获取列表
export function getWorkOrderManage(params) {
  return request({
    url: '/workorder/satisfaction/oswomanage/',
    method: 'get',
    params
  })
}

// 导出工单
export function exportWorkOrderManage(data) {
  return request({
    url: `/workorder/satisfaction/oswomanage/export/`,
    method: 'patch',
    data
  })
}

