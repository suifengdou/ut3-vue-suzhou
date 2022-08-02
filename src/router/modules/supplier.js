/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const spplierRouter = {
  path: '/supplier',
  component: Layout,
  redirect: 'noRedirect',
  name: '供应商管理',
  meta: { title: '供应商管理', icon: 'peoples', roles: ['AllPrivileges'] },
  children: [
    {
      path: '/handboardsup',
      component: () => import('@/views/supplier/handboardsup'),
      name: '手板商',
      meta: { title: '手板商', icon: 'people', roles: ['AllPrivileges'] }
    },
    {
      path: '/mouldsup',
      component: () => import('@/views/supplier/mouldsup'),
      name: '模具商',
      meta: { title: '模具商', icon: 'people', roles: ['AllPrivileges'] }
    },
    {
      path: '/packsup',
      component: () => import('@/views/supplier/packsup'),
      name: '整装厂',
      meta: { title: '整装厂', icon: 'people', roles: ['AllPrivileges'] }
    },
    {
      path: '/logisticssup',
      component: () => import('@/views/supplier/logisticssup'),
      name: '物流快递',
      meta: { title: '物流快递', icon: 'people', roles: ['AllPrivileges'] }
    },
  ]
}

export default spplierRouter
