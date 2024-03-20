# Getting started

## Purpose

You're a Web Developer and you want to use DB UI Components in your own application, whether it's integrating HTML or using our provided Angular, Vue and React components.

In case of the latter, you could directly head over to our JavaScript framework components description:

-   [Angular components](https://www.npmjs.com/package/@db-ui/ngx-components)
-   [React components](https://www.npmjs.com/package/@db-ui/react-components)
-   [Vue components](https://www.npmjs.com/package/@db-ui/v-components)

## Options

There are multiple options how to use DB UI Components:

-   Manually copy the artifacts to your project
-   Use npm package

## How to use

Download `@db-ui/components` package to get the compiled CSS and source code, or include it with npm package manager (repository on _npmjs.com_ or _yarn_).

Previous to that you would need to have `node.js` installed on your local machine. In case you haven't, we recommend installing `node` via [`nvm`](https://github.com/nvm-sh/nvm).

### Use _npmjs.com_ or _yarn_ (installing npm package, recommended)

In case you'd like to use DB UI Components as a dependency in your (frontend) build process and you even also care about handling DB UI Components as a dependency (e.g. for updates etc.), you need to install it as a dependency to your project and then link it within your HTML (CSS file) or within your SCSS.

```shell
npm i --save @db-ui/components
```

This should add a new entry to your `package.json` file:

```json
"dependencies": {
	…
	"@db-ui/components": "^x.y.z"
}
```

-   You will find the relevant files at `node_modules/@db-ui/components`
-   Copy the `assets` folder from `node_modules/@db-ui/foundations/assets` and the `styles` folder from `node_modules/@db-ui/components/build/styles/` to your application directory or link them. Most of the build tools support automatic copying.

### Download or CDN references

You could as well download all the files that you would elsewhere retrieve via the node package directly or reference them from a CDN, as provided by the several different services listed e.g. at [@db-ui/components](https://yarnpkg.com/package/@db-ui/components).

### Integration

The integration depends on your tech stack and varies from copying the files from `node_modules/@db-ui/components/build`, through using a bundler like webpack or rollup to using a framework that totally abstracts that part away from your workflow.

#### Via HTML stylesheet include

```html
<link rel="stylesheet" href="<PATH>/db-ui-42.css" type="text/css" />
```

#### Via SCSS import

```scss
@use "@db-ui/components/build/styles/db-ui-42";
```

### SCSS: node_modules include path / load path

Please keep in mind, that you would need to set your `include path` also known as `load path` depending on your setup for the sass compiler to find the correct `node_modules` folder, e.g. like the following (this is similar to how other frameworks and libraries like [Bootstrap](https://github.com/twbs/bootstrap-npm-starter/blob/main/package.json#L18) are handling this):

#### [`sass` compiler](https://npmjs.com/sass)

```json
{
	"scripts": {
		"css-compile": "sass --load-path=node_modules style.scss:style.css"
	}
}
```
