import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [{
        name: 'app1',
        entry: process.env.NODE_ENV === 'development'
          ? '//localhost:7001'
          : '/app1-history/',
      }]},
    slave: {},
  },
  publicPath:'/app2-history/',
});
