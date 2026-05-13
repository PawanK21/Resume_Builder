import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    babel: {
      parserOpts: {
        plugins: ['jsx']
      }
    }
  })],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/react-hot-toast')) {
            return 'ui-vendor';
          }
          if (id.includes('node_modules/html2pdf')) {
            return 'pdf-vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'html2pdf.js', 'react-hot-toast']
  }
});
