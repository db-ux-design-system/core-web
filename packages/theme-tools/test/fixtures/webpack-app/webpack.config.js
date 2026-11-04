const { resolve } = require('node:path');

const dbUxThemeTools = require('@db-ux/core-theme-tools/webpack').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const here = __dirname;

module.exports = {
	/*
	 * `production` for the test/CI build (via `pnpm run build`); the dev server
	 * (`pnpm run dev`, `webpack serve`) overrides this to `development`.
	 */
	mode: 'production',
	/*
	 * Keep the output readable so the test can assert on the emitted CSS
	 * (no minification collapsing the custom-property declarations).
	 */
	optimization: { minimize: false },
	entry: resolve(here, 'src/main.js'),
	output: {
		path: resolve(here, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [
		dbUxThemeTools({
			// The theme supplies the color VALUES; the plugin scans index.html
			// for data-adaptive-color / data-material and emits only what is used.
			theme: resolve(here, 'theme.tokens.json'),
			scan: ['index.html'],
			debug: true
		}),
		new MiniCssExtractPlugin({ filename: 'main.css' }),
		/*
		 * Serve a real page that loads the emitted bundle (main.js + main.css)
		 * so `pnpm run dev` has something to render. We deliberately do NOT use
		 * index.html as the template: that file is the detector's scan surface
		 * (read from disk via the plugin's `scan` glob, not through webpack), so
		 * it must stay a standalone document. `templateContent` is an inline
		 * string, so HtmlWebpackPlugin renders it directly without needing an
		 * EJS/HTML loader in the (CSS-only) module rules. It mirrors the scan
		 * surface's data-attributes so the dev page exercises the same tokens.
		 */
		new HtmlWebpackPlugin({
			templateContent: `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>theme-tools webpack fixture</title>
	</head>
	<body>
		<div data-adaptive-color="blue" data-material="filled-3">Blue surface</div>
		<button data-adaptive-color="green" data-material="vibrant">Green action</button>
		<span data-alt-state-adaptive-color="blue">Alt-state blue</span>
	</body>
</html>`
		})
	],
	/*
	 * `webpack serve` dev server: serves the generated assets from memory with
	 * live reload. Parity with the Vite fixture's `dev` script.
	 */
	devServer: {
		static: { directory: resolve(here, 'dist') },
		port: 5174,
		open: true,
		hot: true
	}
};
