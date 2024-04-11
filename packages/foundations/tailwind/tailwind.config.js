const tokens = require('./tailwind-tokens.json');

module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	plugins: [],
	theme: {
		fontFamily: tokens.fontFamily,
		fontSize: tokens.fontSize,
		screens: tokens.screens,
		spacing: tokens.spacing,
		boxShadow: tokens.elevation,
		borderWidth: tokens.borderWidth,
		borderHeight: tokens.borderHeight,
		gap: ({ theme }) => ({
			...theme('spacing')
		}),
		space: ({ theme }) => ({
			...theme('spacing')
		})
	}
};
