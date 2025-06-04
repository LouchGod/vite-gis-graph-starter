import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'

import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

import cesium from 'vite-plugin-cesium' // 引入 vite-plugin-cesium

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },

  plugins: [
    Vue(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
    }),

    vueJsx(),
    cesium(), // 使用 vite-plugin-cesium
    AutoImport({ resolvers: [ElementPlusResolver()] }),

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),

    Unocss(),
  ],

  ssr: {
    noExternal: ['element-plus'],
  },
})
