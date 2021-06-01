import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  }), viteMockServe({
    // default
    mockPath: 'mock',
    localEnabled:true,
    // localEnabled: command === 'serve',
  }),],
  resolve: {
    alias: {
      '@': '/src/',
      'utils':'/scr/utils'
    }
  },
})
