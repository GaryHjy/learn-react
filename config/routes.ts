const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/Index' },
      { path: '/css-scheme', component: '@/pages/CssScheme' },
    ],
  },
  { path: '*', component: '@/pages/404' },
];

export default routes;