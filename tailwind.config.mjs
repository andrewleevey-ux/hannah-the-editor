/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-base': '#FBF4F5',
				'brand-surface': '#FFF5F5',
				'brand-ink': '#1F292E',
				'brand-accent': '#E2B4BD',
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
