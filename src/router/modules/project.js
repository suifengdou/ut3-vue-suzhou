/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const projectChannelRouter = {
  path: '/project',
  component: Layout,
  redirect: 'noRedirect',
  name: 'project',
  meta: {
    title: '项目中心',
    icon: 'nested',
    roles: ['advancepayment.view_statements', 'advancepayment.view_user_account', 'tailgoods.view_refundorder', 'AllPrivileges']
  },
  children: [
    {
      path: 'unitproject',
      component: () => import('@/views/project/unitproject'), // Parent router-view
      name: 'P-整机',
      meta: { title: 'P-整机', roles: ['productcatalog.view_productcatalog', 'productcatalog.view_user_productcatalog', 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'originunitproject',
          component: () => import('@/views/project/unitproject/originunitproject'),
          name: '原始整机项目',
          meta: { title: '原始整机项目', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'originunitprojectsubmit',
              component: () => import('@/views/project/unitproject/originunitproject/submit'),
              name: '原始整机递交',
              meta: { title: '原始整机递交', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
            },
            {
              path: 'originunitprojectmanage',
              component: () => import('@/views/project/unitproject/originunitproject/manage'),
              name: '原始整机管理',
              meta: { title: '原始整机管理', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
            },
          ]
        },
        {
          path: 'unitproject',
          component: () => import('@/views/project/unitproject/unitproject'),
          name: '整机项目',
          meta: { title: '整机项目', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'unitprojectconfirm',
              component: () => import('@/views/project/unitproject/unitproject/confirm'),
              name: '整机项目确认',
              meta: { title: '整机项目确认', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
            },
            {
              path: 'unitprojectdevelop',
              component: () => import('@/views/project/unitproject/unitproject/develop'),
              name: '整机项目开发中',
              meta: { title: '整机项目开发中', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
            },
            {
              path: 'unitprojectmanage',
              component: () => import('@/views/sales/productcatalog/myself'),
              name: '整机项目管理',
              meta: { title: '整机项目管理', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
            },
          ]
        },
      ]
    },
    {
      path: 'subunitproject',
      component: () => import('@/views/project/subunitproject'),
      name: 'P-子项',
      meta: { title: 'P-子项', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'subunitprojectprepare',
          component: () => import('@/views/project/subunitproject/prepare'),
          name: 'P-子项-预备',
          meta: { title: 'P-子项-预备', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectdevelop',
          component: () => import('@/views/project/subunitproject/develop'),
          name: 'P-子项-开发',
          meta: { title: 'P-子项-开发', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectmanage',
          component: () => import('@/views/project/subunitproject/manage'),
          name: 'P-子项-管理',
          meta: { title: 'P-子项-管理', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
      ]
    },
    {
      path: 'componentproject',
      component: () => import('@/views/project/componentproject'),
      name: 'P-组项',
      meta: { title: 'P-组项', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'subunitprojectprepare',
          component: () => import('@/views/project/componentproject/prepare'),
          name: 'P-组项-预备',
          meta: { title: 'P-组项-预备', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectdevelop',
          component: () => import('@/views/project/componentproject/develop'),
          name: 'P-组项-开发',
          meta: { title: 'P-组项-开发', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectmanage',
          component: () => import('@/views/project/subunitproject/manage'),
          name: 'P-组项-管理',
          meta: { title: 'P-组项-管理', roles: ['productcatalog.view_user_productcatalog', 'AllPrivileges'] },
        },
      ]
    },
  ]
}

export default projectChannelRouter
