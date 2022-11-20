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
      meta: { title: 'P-整机', roles: ['productcatalog.view_productcatalog',  'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'originunitproject',
          component: () => import('@/views/project/unitproject/originunitproject'),
          name: '原始整机项目',
          meta: { title: '原始整机项目', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'originunitprojectsubmit',
              component: () => import('@/views/project/unitproject/originunitproject/submit'),
              name: '原始整机递交',
              meta: { title: '原始整机递交', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'originunitprojectmanage',
              component: () => import('@/views/project/unitproject/originunitproject/manage'),
              name: '原始整机管理',
              meta: { title: '原始整机管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
        {
          path: 'unitproject',
          component: () => import('@/views/project/unitproject/unitproject'),
          name: '整机项目',
          meta: { title: '整机项目', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'unitprojectconfirm',
              component: () => import('@/views/project/unitproject/unitproject/confirm'),
              name: '整机项目确认',
              meta: { title: '整机项目确认', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'unitprojectdevelop',
              component: () => import('@/views/project/unitproject/unitproject/develop'),
              name: '整机项目开发中',
              meta: { title: '整机项目开发中', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'unitprojectmanage',
              component: () => import('@/views/sales/productcatalog/myself'),
              name: '整机项目管理',
              meta: { title: '整机项目管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
      ]
    },
    {
      path: 'subunitproject',
      component: () => import('@/views/project/subunitproject'),
      name: 'P-子项',
      meta: { title: 'P-子项', roles: [ 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'subunitprojectprepare',
          component: () => import('@/views/project/subunitproject/prepare'),
          name: 'P-子项-预备',
          meta: { title: 'P-子项-预备', roles: [ 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectdevelop',
          component: () => import('@/views/project/subunitproject/develop'),
          name: 'P-子项-开发',
          meta: { title: 'P-子项-开发', roles: [ 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectmanage',
          component: () => import('@/views/project/subunitproject/manage'),
          name: 'P-子项-管理',
          meta: { title: 'P-子项-管理', roles: [ 'AllPrivileges'] },
        },
      ]
    },
    {
      path: 'componentproject',
      component: () => import('@/views/project/componentproject'),
      name: 'P-组项',
      meta: { title: 'P-组项', roles: [ 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'subunitprojectprepare',
          component: () => import('@/views/project/componentproject/prepare'),
          name: 'P-组项-预备',
          meta: { title: 'P-组项-预备', roles: [ 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectdevelop',
          component: () => import('@/views/project/componentproject/develop'),
          name: 'P-组项-开发',
          meta: { title: 'P-组项-开发', roles: [ 'AllPrivileges'] },
        },
        {
          path: 'subunitprojectmanage',
          component: () => import('@/views/project/subunitproject/manage'),
          name: 'P-组项-管理',
          meta: { title: 'P-组项-管理', roles: [ 'AllPrivileges'] },
        },
      ]
    },
    {
      path: 'initialpartsproject',
      component: () => import('@/views/project/initialpartproject'), // Parent router-view
      name: 'P-初始物料',
      meta: { title: 'P-初始物料', roles: ['productcatalog.view_productcatalog',  'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'origininitialpartsproject',
          component: () => import('@/views/project/initialpartproject/oriinitialpartproject'),
          name: '原初物料',
          meta: { title: '原初物料', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'origininitialpartsprojectsubmit',
              component: () => import('@/views/project/initialpartproject/oriinitialpartproject/submit'),
              name: '原初物料工作台',
              meta: { title: '原初物料工作台', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'origininitialpartsprojectmanage',
              component: () => import('@/views/project/initialpartproject/oriinitialpartproject/manage'),
              name: '原初物料项目管理',
              meta: { title: '原初物料项目管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
        {
          path: 'initialpartsproject',
          component: () => import('@/views/project/initialpartproject/initialpartproject'),
          name: 'P-初始物料项目',
          meta: { title: 'P-初始物料项目', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'initialpartsprojectconfirm',
              component: () => import('@/views/project/initialpartproject/initialpartproject/confirm'),
              name: '初始物料工作台',
              meta: { title: '初始物料工作台', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'initialpartsprojectmanage',
              component: () => import('@/views/project/initialpartproject/initialpartproject/manage'),
              name: 'P-初始物料项目管理',
              meta: { title: 'P-初始物料项目管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
      ]
    },
    {
      path: 'phototypeproject',
      component: () => import('@/views/project/phototypeproject'), // Parent router-view
      name: 'P-手板项目',
      meta: { title: 'P-手板项目', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'phototypeproject',
          component: () => import('@/views/project/phototypeproject/project'),
          name: '手板项目单',
          meta: { title: '手板项目单', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'phototypeprojectprepare',
              component: () => import('@/views/project/phototypeproject/project/prepare'),
              name: '手板项目单准备',
              meta: { title: '手板项目单准备', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeprojectdevelop',
              component: () => import('@/views/project/phototypeproject/project/develop'),
              name: '手板项目单开发',
              meta: { title: '手板项目单开发', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeprojectmanage',
              component: () => import('@/views/project/phototypeproject/project/manage'),
              name: '手板项目单管理',
              meta: { title: '手板项目单管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
        {
          path: 'phototypeprojectdetails',
          component: () => import('@/views/project/phototypeproject/details'),
          name: 'P-手板项目明细单',
          meta: { title: 'P-手板项目明细单', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'phototypeprojectdetailsmake',
              component: () => import('@/views/project/phototypeproject/details/make'),
              name: '手板制板明细',
              meta: { title: '手板制板明细', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeprojectdetailspurchase',
              component: () => import('@/views/project/phototypeproject/details/purchase'),
              name: '手板采购明细',
              meta: { title: '手板采购明细', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeprojectmanage',
              component: () => import('@/views/project/initialpartproject/initialpartproject/manage'),
              name: '手板明细管理',
              meta: { title: '手板明细管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
      ]
    },
    {
      path: 'phototypeexecuteproject',
      component: () => import('@/views/project/phototypeexecuteproject'), // Parent router-view
      name: 'P-手板执行单项目',
      meta: { title: 'P-手板执行单项目', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'phototypeexecuteproject',
          component: () => import('@/views/project/phototypeexecuteproject/project'),
          name: '手板执行单',
          meta: { title: '手板执行单', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'phototypeexecuteprojectprepare',
              component: () => import('@/views/project/phototypeexecuteproject/project/prepare'),
              name: '手板执行单准备',
              meta: { title: '手板执行单准备', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeexecuteprojectdevelop',
              component: () => import('@/views/project/phototypeexecuteproject/project/develop'),
              name: '手板执行单开发',
              meta: { title: '手板执行单开发', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeexecuteprojectmanage',
              component: () => import('@/views/project/phototypeexecuteproject/project/manage'),
              name: '手板执行单管理',
              meta: { title: '手板执行单管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
        {
          path: 'phototypeexecuteprojectdetails',
          component: () => import('@/views/project/phototypeexecuteproject/details'),
          name: 'P-手板执行明细单',
          meta: { title: 'P-手板执行明细单', roles: [ 'AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'phototypeexecuteprojectdetailsprepare',
              component: () => import('@/views/project/phototypeexecuteproject/details/prepare'),
              name: '手板执行明细准备',
              meta: { title: '手板执行明细准备', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeexecuteprojectdetailsmake',
              component: () => import('@/views/project/phototypeexecuteproject/details/make'),
              name: '手板执行制板明细',
              meta: { title: '手板执行制板明细', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeexecuteprojectdetailspurchase',
              component: () => import('@/views/project/phototypeexecuteproject/details/purchase'),
              name: '手板执行采购明细',
              meta: { title: '手板执行采购明细', roles: [ 'AllPrivileges'] },
            },
            {
              path: 'phototypeexecuteprojectdetailsmanage',
              component: () => import('@/views/project/phototypeexecuteproject/details/manage'),
              name: '手板执行明细管理',
              meta: { title: '手板执行明细管理', roles: [ 'AllPrivileges'] },
            },
          ]
        },
      ]
    },
  ]
}

export default projectChannelRouter
