import request from '@/utils/request'

export function getScrewSubmit(params) {
  return request({
    url: '/bom/standardlabrary/screw/submit/',
    method: 'get',
    params
  })
}

// 创建螺丝
export function createScrewSubmit(data) {
  return request({
    url: '/bom/standardlabrary/screw/submit/',
    method: 'post',
    data
  })
}

// 修改螺丝
export function updateScrewSubmit(id, data) {
  delete data.updated_time
  delete data.created_time
  return request({
    url: `/bom/standardlabrary/screw/submit/${id}/`,
    method: 'patch',
    data
  })
}

// 修改螺丝
export function importScrewSubmit(data) {
  return request({
    url: `/bom/standardlabrary/screw/submit/excel_import/`,
    method: 'patch',
    data
  })
}

// 修改螺丝
export function checkScrewSubmit(data) {
  return request({
    url: `/bom/standardlabrary/screw/submit/check/`,
    method: 'patch',
    data
  })
}
// 修复螺丝
export function fixScrewSubmit(data) {
  return request({
    url: `/bom/standardlabrary/screw/submit/fix/`,
    method: 'patch',
    data
  })
}

// 修改螺丝
export function rejectScrewSubmit(data) {
  return request({
    url: `/bom/standardlabrary/screw/submit/reject/`,
    method: 'patch',
    data
  })
}



