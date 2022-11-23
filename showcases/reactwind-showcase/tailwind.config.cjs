const tokens = require("@db-ui/base/build/tailwind/tailwind-tokens.json");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [],
	theme: {
		screens: tokens.screens,
		spacing: tokens.spacing,
		fontSize: tokens.fontSize,
		gap: ({ theme }) => ({
			...theme("spacing")
		}),
		space: ({ theme }) => ({
			...theme("spacing")
		})
	}
};
