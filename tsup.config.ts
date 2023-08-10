import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'lib-release-new',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  dts: true,
  minify: true
});