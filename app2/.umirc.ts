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
        entry: 'http://localhost:7001'
      }]},
    slave: {},
  },
});
