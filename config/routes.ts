const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/Home' },
      { path: '/css-scheme', component: '@/pages/CssScheme' },
      { path: '/react-setState', component: '@/pages/ReactSetState' },
      {
        path: '/react-hooks',
        component: '@/pages/ReactHooks',
        routes: [
          {
            path: '/react-hooks/use-state',
            component: '@/pages/ReactHooks/UseState',
          },
          {
            path: '/react-hooks/use-effect',
            component: '@/pages/ReactHooks/UseEffect',
          },
          {
            path: '/react-hooks/use-context',
            component: '@/pages/ReactHooks/UseContext',
          },
        ],
      },
    ],
  },
  { path: '*', component: '@/pages/404' },
];

export default routes;
