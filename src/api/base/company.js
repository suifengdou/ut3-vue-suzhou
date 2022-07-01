import request from '@/utils/request'

export function getCompanyList(params) {
  return request({
    url: '/base/company/company/',
    method: 'get',
    params
  })
}

// 创建用户组
export function createCompany(data) {
  return request({
    url: '/base/company/company/',
    method: 'post',
    data
  })
}

// 修改用户组
export function updateCompany(id, data) {
  return request({
    url: `/base/company/company/${id}/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportCompany(data) {
  return request({
    url: `/base/company/company/excel_import/`,
    method: 'patch',
    data
  })
}






