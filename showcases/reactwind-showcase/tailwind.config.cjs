const tokens = require('@db-ui/foundations/build/tailwind/tailwind-tokens.json');

module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	plugins: [],
	theme: {
		screens: tokens.screens,
		spacing: tokens.spacing,
		boxShadow: tokens.elevation,
		gap: ({ theme }) => ({
			...theme('spacing')
		}),
		space: ({ theme }) => ({
			...theme('spacing')
		})
	}
};
