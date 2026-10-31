/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pale-pink': '#FBF4F5',
				'sage-green': '#8FA494',
				'neutral-brown': '#4A3B32',
			},
			fontFamily: {
				serif: ['"Georgia"', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
		},
	},
	plugins: [],
};
