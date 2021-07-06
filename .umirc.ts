import { defineConfig } from 'umi';
import routes from './config/routes';

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
  routes,
  fastRefresh: {},
  webpack5: {},
  chunks: ['reactVendor', 'antd', 'umiVendor', 'vendors', 'umi'],
  chainWebpack(config) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            reactVendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'reactVendor',
              enforce: true,
              priority: 4,
            },
            antd: {
              test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
              name: 'antd',
              enforce: true,
              priority: 3,
            },
            umiVendor: {
              test: /[\\/]node_modules[\\/](umi).*[\\/]/,
              name: 'umiVendor',
              enforce: true,
              priority: 2,
            },
            vendors: {
              name: 'vendors',
              enforce: true,
              priority: 1,
              test: /[\\/]node_modules[\\/]((?!(antd|@ant-design|react|react-dom|umi)).*)[\\/]/,
            },
          },
        },
      },
    });
  },
});
