import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{a as r}from"./chunk-W22LQPXL-ChqkFyql.js";import{a as i,o as a,s as o}from"./blocks-C7J6sEx8.js";import{n as s,t as c}from"./links-q8BruAbl.js";var l;function u(){return(u=e((()=>{l=`# Performance

If you need to improve the performance of your application, you can use the following tips:

## Minify with PurgeCSS and CSSO

When you use the full bundled \`.css\` file we provide, you could easily reduce the file size by removing unused CSS classes. This can be done with [PurgeCSS](https://purgecss.com/) and [CSSO](https://github.com/css/csso).

Install both with:

\`\`\`shell
npm i purgecss csso --save-dev
\`\`\`

Next you should create a file, e.g. \`purgecss.js\` in your project root with the following content:

\`\`\`javascript
import { writeFileSync } from "node:fs";

import { PurgeCSS } from "purgecss";
import { minify } from "csso";

const distFolder = "dist"; // TODO: Change me if you need another folder

new PurgeCSS()
	.purge({
		content: [\`\${distFolder}/**/*.html\`, \`\${distFolder}/**/*.js\`],
		css: [\`\${distFolder}/**/*.css\`],
		defaultExtractor: (content) => content.match(/[\\w-/:]+(?<!:)/g) || [],
		variables: true,
		rejectedCss: true,
		safelist: {
			variables: [
				/* TODO: Keep only the densities you need */
				/-functional-/,
				/-regular-/,
				/-expressive-/,
				/* Keep density & all color properties/variables */
				/-default$/,
				/-hovered$/,
				/-pressed$/
			],
			/* Some components require a safelist */
			greedy: [
				/db-tabs/ // TODO: Add more components if necessary
			]
		}
	})
	.then((purgeCSSResult) => {
		for (const result of purgeCSSResult) {
			writeFileSync(result.file, minify(result.css).css);

			/* Optional: for debugging */
			// writeFileSync(\`rejected.css\`, result.rejectedCss || "");
		}
	});
\`\`\`

You can run this script with \`node purgecss.js\` and it will minify your CSS files. You can also add this script to your \`package.json\` to run after your regular build process:

\`\`\`json
{
	"scripts": {
		"postbuild": "node purgecss.js"
	}
}
\`\`\`
`})))()}function d(e){let n={a:`a`,blockquote:`blockquote`,em:`em`,p:`p`,strong:`strong`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,(0,p.jsx)(a,{title:`Foundations/Performance`}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:`Learn:`}),` `,(0,p.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/editor-and-build`,rel:`nofollow`,children:`Set up your editor and build`}),` on the Design System Platform.`]}),`
`]}),`
`,(0,p.jsx)(i,{children:s(l,`/foundations/performance`)}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsxs)(n.em,{children:[`Source: `,(0,p.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/Performance.md`,rel:`nofollow`,children:`packages/foundations/docs/Performance.md`})]})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),u(),c()})))()}m();export{f as default};