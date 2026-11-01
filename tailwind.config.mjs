/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pale-pink': '#FBF4F5',
				'pastel-pink': '#E6C8CB',
				'neutral-brown': '#4A3B32',
			},
			fontFamily: {
				serif: ['"Cormorant Garamond"', '"Georgia"', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				sans: [
					'"Plus Jakarta Sans"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'sans-serif',
				],
			},
		},
	},
	plugins: [],
};
