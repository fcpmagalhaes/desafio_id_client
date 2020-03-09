
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ClientList.vue') },
      { path: '/add-tag', component: () => import('pages/AddTag.vue') },
      { path: '/list-clients', component: () => import('pages/ClientList.vue') },
      { path: '/new-client', component: () => import('pages/AddClient.vue') },
      { path: '/client/:id', component: () => import('pages/EditClient.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
