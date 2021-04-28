import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  layout: {
    name: 'qiankun主应用',
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: process.env.NODE_ENV === 'development'
            ? '//localhost:7001'
            : '/app1-history/',
          activeRule: '/app1/',
        },
        {
          name: 'app2', // 唯一 id
          entry: process.env.NODE_ENV === 'development'
            ? '//localhost:7002'
            : '/app2-history/',
          activeRule: '/app2/',
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/app1',
    },
    {
      path: '/main',
      name:'main',
      component: 'index',
    },
    {
      path: '/app1',
      microApp: 'app1',
      name: 'app1',
    },
    {
      path: '/app2',
      microApp: 'app2',
      name: 'app2',
    },
  ]
});
