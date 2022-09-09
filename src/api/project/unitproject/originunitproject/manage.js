import request from '@/utils/request'

// 整机项目管理API
// 获取列表
export function getOriginUnitProject(params) {
  return request({
    url: '/project/unitproject/originunitproject/',
    method: 'get',
    params
  })
}


// 导出工单
export function exportOriginUnitProject(data) {
  return request({
    url: `/project/unitproject/originunitproject/export/`,
    method: 'patch',
    data
  })
}

