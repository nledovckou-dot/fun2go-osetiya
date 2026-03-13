import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://nledovckou-dot.github.io/fun2go-osetiya/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        original: resolve(__dirname, 'tur_v_osetiyu_3_5_dnej/index.html'),
        thanks: resolve(__dirname, 'thanks-osetiya/index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/vendor.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
