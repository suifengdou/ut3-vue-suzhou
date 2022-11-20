/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const statementRouter = {
  path: '/statement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'statement',
  meta: {
    title: '结算中心',
    icon: 'nested',
    roles: ['AllPrivileges']
  },
  children: [
    {
      path: 'phototypestatement',
      component: () => import('@/views/statement/phototypestatement'), // Parent router-view
      name: 'phototypestatement',
      meta: { title: '手板结算单', roles: ['manualorder.view_manualorderexport', 'manualorder.view_manualorder', 'AllPrivileges'] },
      redirect: 'noRedirect',
      children: [
        {
          path: 'phototypestatementsubmit',
          component: () => import('@/views/statement/phototypestatement/submit'),
          name: 'phototypestatementsubmit',
          meta: { title: '手板结算单递交', roles: ['manualorder.view_manualorder', 'AllPrivileges'] }
        },
        {
          path: 'phototypestatementcheck',
          component: () => import('@/views/statement/phototypestatement/check'),
          name: 'phototypestatementcheck',
          meta: { title: '手板结算单审核', roles: ['manualorder.view_user_manualorder', 'AllPrivileges'] }
        },
        {
          path: 'phototypestatementmanage',
          component: () => import('@/views/statement/phototypestatement/manage'),
          name: 'phototypestatementmanage',
          meta: { title: '手板结算单管理', roles: ['manualorder.view_mogoods', 'AllPrivileges'] }
        }
      ]
    },
  ]
}

export default statementRouter
