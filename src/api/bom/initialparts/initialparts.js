import request from '@/utils/request'

export function getInitialParts(params) {
  return request({
    url: '/bom/initialparts/initialparts/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createInitialParts(data) {
  return request({
    url: '/bom/initialparts/initialparts/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateInitialParts(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/initialparts/initialparts/${id}/`,
    method: 'patch',
    data
  })
}

// 修改用户组
export function importInitialParts(id, data) {
  return request({
    url: `/bom/initialparts/excel_import/`,
    method: 'patch',
    data
  })
}





