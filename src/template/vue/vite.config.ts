import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({}),
    Components({
      // https://github.com/antfu/unplugin-vue-components#usage
      dts: './src/components.d.ts'
    }),
    AutoImport({
      // https://github.com/antfu/unplugin-auto-import#configurations
      imports: [
        'vue',
        'vue-router'
      ],
      dts: './src/auto-imports.d.ts'
    }),
  ],
})
