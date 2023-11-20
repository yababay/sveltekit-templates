import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { name } from './package.json'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? `/${name}` : '',
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
