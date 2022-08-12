/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const baseRouter = {
  path: '/base',
  component: Layout,
  redirect: 'noRedirect',
  name: 'base',
  meta: {
    title: '基础设置',
    icon: 'nested',
    roles: ['goods.view_goods', 'AllPrivileges']
  },
  children: [
    {
      path: 'company',
      name: '公司管理',
      component: () => import('@/views/base/company/index'),
      meta: { title: '公司管理', roles: ['company.view_company', 'AllPrivileges'] }
    },
    {
      path: 'center',
      name: '业务中心',
      component: () => import('@/views/base/center/index'),
      meta: { title: '业务中心', roles: ['department.view_department',  'AllPrivileges'] }
    },
    {
      path: 'department',
      name: '部门管理',
      component: () => import('@/views/base/department/index'),
      meta: { title: '部门管理', roles: ['department.view_department',  'AllPrivileges'] }
    },
    {
      path: 'warehouse',
      component: () => import('@/views/base/warehouse'), // Parent router-view
      name: 'warehouse',
      meta: { title: '仓库', roles: ['warehouse.view_warehouse', 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'warehousetype',
          component: () => import('@/views/base/warehouse/warehousetype'),
          name: '类型管理',
          meta: { title: '类型管理', roles: ['warehouse.view_warehouse', 'AllPrivileges'] }
        },
        {
          path: 'warehousemanage',
          component: () => import('@/views/base/warehouse/warehouse'),
          name: '仓库管理',
          meta: { title: '仓库管理', roles: ['warehouse.view_warehouse', 'AllPrivileges'] }
        }
      ]
    }
  ]
}

export default baseRouter
