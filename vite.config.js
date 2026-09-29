import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => {
  const sites = {
    clinic: { input: { index: resolve(import.meta.dirname, 'clinic/index.html') }, outDir: 'dist-sites/clinic' },
    ecosystem: { input: { index: resolve(import.meta.dirname, 'ecosystem/index.html') }, outDir: 'dist-sites/ecosystem' },
    shop: { input: { index: resolve(import.meta.dirname, 'shop/index.html') }, outDir: 'dist-sites/shop' },
  }
  const selected = sites[mode]
  return {
  build: {
    ...(selected ? { outDir: selected.outDir } : {}),
    rollupOptions: {
      input: selected?.input || {
        clinic: resolve(import.meta.dirname, 'clinic.html'),
        ecosystem: resolve(import.meta.dirname, 'ecosystem.html'),
        shop: resolve(import.meta.dirname, 'shop.html'),
      }
    },
  },
  }
})
