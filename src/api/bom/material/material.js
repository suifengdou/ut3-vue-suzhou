import request from '@/utils/request'

export function getMaterialList(params) {
  return request({
    url: '/bom/material/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createMaterial(data) {
  return request({
    url: '/bom/material/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateMaterial(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/material/${id}/`,
    method: 'patch',
    data
  })
}


// 修改用户组
export function importMaterial(data) {
  return request({
    url: `/bom/material/excel_import/`,
    method: 'patch',
    data
  })
}






