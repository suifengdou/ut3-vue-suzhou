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
    {
      path: 'handboard',
      component: () => import('@/views/bom/handboard'), // Parent router-view
      name: '手板',
      meta: { title: '手板', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'handboard',
          component: () => import('@/views/bom/handboard/handboard/manage'),
          name: '手板管理',
          meta: { title: '手板管理', roles: ['AllPrivileges'] }
        },
        {
          path: 'handboarddetails',
          component: () => import('@/views/bom/handboard/handboarddetails/manage'),
          name: '手板明细',
          meta: { title: '手板明细', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'units',
      component: () => import('@/views/bom/units'), // Parent router-view
      name: '整机',
      meta: { title: '整机', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'unitmanage',
          component: () => import('@/views/bom/units/units/manage'),
          name: '整机管理',
          meta: { title: '整机管理', roles: ['AllPrivileges'] }
        },
        {
          path: 'unitversion',
          component: () => import('@/views/bom/units/unitsversion/manage'),
          name: '整机版本',
          meta: { title: '整机版本', roles: ['AllPrivileges'] }
        },
        {
          path: 'unitversiondetails',
          component: () => import('@/views/bom/units/unitsversiondetails/manage'),
          name: '整机版本明细',
          meta: { title: '整机版本明细', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'subunit',
      component: () => import('@/views/bom/subunit'), // Parent router-view
      name: '子项',
      meta: { title: '子项', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'subunitmanage',
          component: () => import('@/views/bom/subunit/subunit/manage'),
          name: '子项管理',
          meta: { title: '子项管理', roles: ['AllPrivileges'] }
        },
        {
          path: 'subunitversion',
          component: () => import('@/views/bom/subunit/version/manage'),
          name: '子项版本',
          meta: { title: '子项版本', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'component',
      component: () => import('@/views/bom/component'), // Parent router-view
      name: '组项',
      meta: { title: '组项', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'componentcategory',
          component: () => import('@/views/bom/component/componentcategory/manage'),
          name: '组项类别',
          meta: { title: '组项类别', roles: ['AllPrivileges'] }
        },
        {
          path: 'component',
          component: () => import('@/views/bom/component/component/manage'),
          name: '组项管理',
          meta: { title: '组项管理', roles: ['AllPrivileges'] }
        },
        {
          path: 'componentversion',
          component: () => import('@/views/bom/component/componentversion/manage'),
          name: '组项版本',
          meta: { title: '组项版本', roles: ['AllPrivileges'] }
        },
        {
          path: 'componentversiondetails',
          component: () => import('@/views/bom/component/componentversiondetails/manage'),
          name: '组项明细',
          meta: { title: '组项明细', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'middleparts',
      component: () => import('@/views/bom/subunit'), // Parent router-view
      name: '中间件',
      meta: { title: '中间件', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'middleparts',
          component: () => import('@/views/bom/subunit/subunit/manage'),
          name: '中间件管理',
          meta: { title: '中间件管理', roles: ['AllPrivileges'] }
        },
        {
          path: 'middlepartsversion',
          component: () => import('@/views/bom/subunit/version/manage'),
          name: '中间件版本',
          meta: { title: '中间件版本', roles: ['AllPrivileges'] }
        },
      ]
    },
    {
      path: 'goods',
      component: () => import('@/views/bom/goods'), // Parent router-view
      name: '货品',
      meta: { title: '货品', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'atomicparts',
          component: () => import('@/views/bom/goods/atomicparts/manage'),
          name: '原子件',
          meta: { title: '原子件', roles: ['AllPrivileges'] }
        },
        {
          path: 'atomicpartsversion',
          component: () => import('@/views/bom/goods/atomicpartsversion/manage'),
          name: '原子件版本',
          meta: { title: '原子件版本', roles: ['AllPrivileges'] }
        },
        {
          path: 'parts',
          component: () => import('@/views/bom/goods/goods/manage'),
          name: '货品',
          meta: { title: '零配件', roles: ['AllPrivileges'] }
        },
        {
          path: 'partsdetails',
          component: () => import('@/views/bom/goods/goodsdetails/manage'),
          name: '货品明细',
          meta: { title: '零配件明细', roles: ['AllPrivileges'] }
        },
      ]
    },
  ]
}

export default bomChannelRouter
