const tokens = require('./tailwind-tokens.json');

module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	plugins: [],
	theme: {
		...tokens,
		gap: ({ theme }) => ({
			...theme('spacing')
		}),
		space: ({ theme }) => ({
			...theme('spacing')
		})
	}
};
