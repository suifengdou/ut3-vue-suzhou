/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const settleRouter = {
  path: '/settle',
  component: Layout,
  redirect: 'noRedirect',
  name: 'settle',
  meta: {
    title: '支付中心',
    icon: 'nested',
    roles: ['AllPrivileges']
  },
  children: [
    {
      path: 'payment',
      component: () => import('@/views/settle/payment'), // Parent router-view
      name: 'payment',
      meta: { title: '付款单', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'paymentsubmit',
          component: () => import('@/views/settle/payment/submit'),
          name: 'paymentsubmit',
          meta: { title: '付款单递交', roles: ['AllPrivileges'] }
        },
        {
          path: 'paymentcheck',
          component: () => import('@/views/settle/payment/check'),
          name: 'paymentcheck',
          meta: { title: '付款单审核', roles: ['AllPrivileges'] }
        },
        {
          path: 'paymentmanage',
          component: () => import('@/views/settle/payment/manage'),
          name: 'paymentmanage',
          meta: { title: '付款单管理', roles: ['AllPrivileges'] }
        }
      ]
    },
    {
      path: 'relationpayment',
      component: () => import('@/views/settle/relationpayment'), // Parent router-view
      name: 'relationpayment',
      meta: { title: '结算付款约束单', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'phototyperelation',
          component: () => import('@/views/settle/relationpayment/phototyperelation'),
          name: 'phototyperelation',
          meta: { title: '手板结算约束', roles: ['AllPrivileges'] }
        },
        {
          path: 'mouldrelation',
          component: () => import('@/views/statement/phototypestatement/check'),
          name: 'mouldrelation',
          meta: { title: '模具结算约束', roles: ['AllPrivileges'] }
        },
        {
          path: 'orderrelation',
          component: () => import('@/views/statement/phototypestatement/manage'),
          name: 'orderrelation',
          meta: { title: '订单结算约束', roles: ['AllPrivileges'] }
        }
      ]
    },
    {
      path: 'expendorder',
      component: () => import('@/views/statement/phototypestatement'), // Parent router-view
      name: 'expendorder',
      meta: { title: '支付单', roles: ['AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'expendordersubmit',
          component: () => import('@/views/statement/phototypestatement/submit'),
          name: 'expendordersubmit',
          meta: { title: '支付单递交', roles: ['AllPrivileges'] }
        },
        {
          path: 'expendordercheck',
          component: () => import('@/views/statement/phototypestatement/check'),
          name: 'expendordercheck',
          meta: { title: '支付单审核', roles: ['AllPrivileges'] }
        },
        {
          path: 'expendordermanage',
          component: () => import('@/views/statement/phototypestatement/manage'),
          name: 'expendordermanage',
          meta: { title: '支付单管理', roles: ['AllPrivileges'] }
        }
      ]
    },
  ]
}

export default settleRouter
