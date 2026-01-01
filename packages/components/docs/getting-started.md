# Getting started

## Purpose

You're a Web Developer and you want to use DB UX Design System Core Components in your own application, whether it's integrating HTML or using our provided Angular, Vue and React components.

In case of the latter, you could directly head over to our JavaScript framework components description:

- [Angular components](https://www.npmjs.com/package/@db-ux/ngx-core-components)
- [React components](https://www.npmjs.com/package/@db-ux/react-core-components)
- [Vue components](https://www.npmjs.com/package/@db-ux/v-core-components)
- [Web components](https://www.npmjs.com/package/@db-ux/wc-core-components)

## Options

There are multiple options how to use DB UX Design System Core components:

- Manually copy the artifacts to your project
- Use npm package

## How to use

Download `@db-ux/core-components` package to get the compiled CSS and source code, or include it with npm package manager (repository on _npmjs.com_ or _yarn_).

Previous to that you would need to have `node.js` installed on your local machine. In case you haven't, we recommend installing `node` via [`nvm`](https://github.com/nvm-sh/nvm).

### Use _npmjs.com_ or _yarn_ (installing npm package, recommended)

In case you'd like to use DB UX Design System Core components as a dependency in your (frontend) build process and you even also care about handling DB UX Design System Core components as a dependency (e.g. for updates etc.), you need to install it as a dependency to your project and then link it within your HTML (CSS file) or within your SCSS.

```shell
npm i --save @db-ux/core-components
```

This should add a new entry to your `package.json` file:

```json
"dependencies": {
	…
	"@db-ux/core-components": "^x.y.z"
}
```

- You will find the relevant files at `node_modules/@db-ux/core-components`
- Copy the `assets` folder from `node_modules/@db-ux/core-foundations/assets` and the `styles` folder from `node_modules/@db-ux/core-components/build/styles/` to your application directory or link them. Most of the build tools support automatic copying.

### Download or CDN references

You could as well download all the files that you would elsewhere retrieve via the node package directly or reference them from a CDN, as provided by the several different services listed e.g. at [@db-ux/core-components](https://yarnpkg.com/package/@db-ux/core-components).

### Integration

The integration depends on your tech stack and varies from copying the files from `node_modules/@db-ux/core-components/build`, through using a bundler like webpack or rollup to using a framework that totally abstracts that part away from your workflow.

#### Via HTML stylesheet include

```html
<link rel="stylesheet" href="<PATH>/relative.css" type="text/css" />
```

#### Via SCSS import

```scss
@use "@db-ux/core-components/build/styles/relative";
```

### SCSS: Configuration Options

#### Option 1: Pkg: Importers (New, Recommended)

Alternatively, you can use Sass [pkg: importers](https://sass-lang.com/blog/announcing-pkg-importers/) which eliminate the need for load-path configuration:

```json
{
	"scripts": {
		"css-compile": "sass --pkg-importer=node style.scss:style.css"
	}
}
```

With pkg: importers, use the `pkg:` prefix in your imports:

```scss
@use "pkg:@db-ux/core-components/build/styles/webpack";
```

instead of:

```scss
@use "@db-ux/core-components/build/styles/webpack";
```

#### Option 2: Load Path (Traditional)

Please keep in mind, that you would need to set your `include path` also known as `load path` depending on your setup for the sass compiler to find the correct `node_modules` folder, e.g. like the following (this is similar to how other frameworks and libraries like [Bootstrap](https://github.com/twbs/bootstrap-npm-starter/blob/main/package.json#L18) are handling this):

##### [`sass` compiler](https://npmjs.com/sass)

```json
{
	"scripts": {
		"css-compile": "sass --load-path=node_modules style.scss:style.css"
	}
}
```
