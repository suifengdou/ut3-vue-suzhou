import request from '@/utils/request'

// 整机项目单操作API
// 获取列表
export function getInitialPartProjectManage(params) {
  return request({
    url: '/project/initpartproject/initpartproject/',
    method: 'get',
    params
  })
}

// 创建工单
export function createInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/`,
    method: 'post',
    data
  })
}

// 更新工单
export function updateInitialPartProjectManage(id, data) {
  delete data.create_time
  delete data.update_time
  return request({
    url: `/project/initpartproject/initpartproject/${id}/`,
    method: 'patch',
    data
  })
}

// 导出工单
export function exportInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/export/`,
    method: 'patch',
    data
  })
}

// 导入工单
export function excelImportInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/excel_import/`,
    method: 'patch',
    data
  })
}

// 审核工单
export function checkInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/check/`,
    method: 'patch',
    data
  })
}

// 取消工单
export function rejectInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/reject/`,
    method: 'patch',
    data
  })
}

// 上传图片
export function photoImportInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/photo_import/`,
    method: 'patch',
    data
  })
}

// 查询日志
export function getLogInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/get_log_details/`,
    method: 'patch',
    data
  })
}


// 查询文档
export function getFileDetailsInitialPartProjectManage(data) {
  return request({
    url: `/project/initpartproject/initpartproject/get_file_details/`,
    method: 'patch',
    data
  })
}
