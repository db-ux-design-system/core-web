import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: `${process.env.BASE_URL ?? ''}/vue-showcase`,
	plugins: [vue()]
});
