/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const bomChannelRouter = {
  path: '/bom',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BOM',
  meta: {
    title: 'BOM',
    icon: 'nested',
    roles: [ 'AllPrivileges']
  },
  children: [
    {
      path: 'material',
      component: () => import('@/views/bom/material/index'),
      name: '原材料',
      meta: { title: '原材料', roles: [ 'AllPrivileges'] },
    },
    {
      path: 'productline',
      component: () => import('@/views/bom/productline/index'), // Parent router-view
      name: '产品线',
      meta: { title: '产品线', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'category',
          component: () => import('@/views/bom/productline/category/index'),
          name: '产品线类别',
          meta: { title: '产品线类别', roles: ['AllPrivileges'] }
        },
        {
          path: 'productline',
          component: () => import('@/views/bom/productline/manage/index'),
          name: '产品线管理',
          meta: { title: '产品线管理', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'standardlabrary',
      component: () => import('@/views/bom/standardlabrary/index'), // Parent router-view
      name: '标准件库',
      meta: { title: '标准件库', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'screw',
          component: () => import('@/views/bom/standardlabrary/screw/index'),
          name: '螺丝',
          meta: { title: '螺丝', roles: ['AllPrivileges'] },
          redirect: 'noRedirect',
          children: [
            {
              path: 'submit',
              component: () => import('@/views/bom/standardlabrary/screw/submit/index'),
              name: '螺丝-递交',
              meta: { title: '螺丝-递交', roles: ['AllPrivileges'] }
            },
            {
              path: 'manage',
              component: () => import('@/views/bom/standardlabrary/screw/manage/index'),
              name: '螺丝-管理',
              meta: { title: '螺丝-管理', roles: ['AllPrivileges'] }
            },
          ]
        },
      ]
    },
    {
      path: 'initialparts',
      component: () => import('@/views/bom/initialparts/index'), // Parent router-view
      name: '初始物料',
      meta: { title: '初始物料', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'initialpartscategory',
          component: () => import('@/views/bom/initialparts/partscategory/index'),
          name: '初始物料类别',
          meta: { title: '初始物料类别', roles: ['AllPrivileges'] }
        },
        {
          path: 'initialparts',
          component: () => import('@/views/bom/initialparts/initialparts/index'),
          name: '初始物料管理',
          meta: { title: '初始物料管理', roles: ['AllPrivileges'] }
        },
      ]
    },
  ]
}

export default bomChannelRouter
