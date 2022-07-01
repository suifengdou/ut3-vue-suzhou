import request from '@/utils/request'

// 原始发票申请单（外埠）操作API
// 获取列表
export function getExceptionIPOManageList(params) {
  return request({
    url: '/int/exceptionipo/manage/',
    method: 'get',
    params
  })
}


// 导出工单
export function exportExceptionIPOManage(data) {
  return request({
    url: `/int/exceptionipo/manage/export/`,
    method: 'patch',
    data
  })
}

