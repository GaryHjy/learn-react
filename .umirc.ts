import { defineConfig } from 'umi';

export default defineConfig({
  title: 'learn react',
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash', // hash模式
  },
  antd: {
    // dark: true
    compact: true,
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
});
