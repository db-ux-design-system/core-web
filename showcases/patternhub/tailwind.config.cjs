const tokens = require('@db-ui/foundations/build/tailwind/tailwind-tokens.json');

module.exports = {
	safelist: [
		{
			pattern: /./,
			variants: ['md']
		}
	],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: false,
		screens: tokens.screens,
		spacing: tokens.spacing,
		boxShadow: tokens.elevation,
		gap: ({ theme }) => ({
			...theme('spacing')
		}),
		space: ({ theme }) => ({
			...theme('spacing')
		})
	},
	plugins: []
};
