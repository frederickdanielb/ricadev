const path = require('path');
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-dts';

const isExternal = (id) => !id.startsWith('.') && !path.isAbsolute(id);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts()],

	build: {
		minify: true,
		rollupOptions: {
			external: isExternal,
		},
		lib: {
			entry: path.resolve(__dirname, 'src/Library.jsx'),
			name: 'rica-template-react',
			fileName: (format) => `rica-template-react.${format}.js`,
		},
	},
});
