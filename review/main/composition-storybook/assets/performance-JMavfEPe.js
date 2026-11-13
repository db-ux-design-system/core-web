import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,u as r}from"./blocks-5Fkt9_dN.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as o}from"./react-DITjJg24.js";import{n as s,t as c}from"./links-kL3YgDM2.js";var l;function u(){return(u=e((()=>{l=`# Performance

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
`})))()}function d(e){let r={a:`a`,blockquote:`blockquote`,em:`em`,p:`p`,strong:`strong`,...a(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,(0,p.jsx)(n,{title:`Foundations/Performance`}),`
`,(0,p.jsxs)(r.blockquote,{children:[`
`,(0,p.jsxs)(r.p,{children:[(0,p.jsx)(r.strong,{children:`Learn:`}),` `,(0,p.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/editor-and-build`,rel:`nofollow`,children:`Set up your editor and build`}),` on the Design System Platform.`]}),`
`]}),`
`,(0,p.jsx)(t,{children:s(l,`/foundations/performance`)}),`
`,(0,p.jsx)(r.p,{children:(0,p.jsxs)(r.em,{children:[`Source: `,(0,p.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/Performance.md`,rel:`nofollow`,children:`packages/foundations/docs/Performance.md`})]})})]})}function f(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=i(),o(),r(),u(),c()})))()}m();export{f as default};