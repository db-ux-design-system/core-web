import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-bqv37t5n.js";import{a as r}from"./chunk-W22LQPXL-BOSaYCSi.js";import{a as i,o as a,s as o}from"./blocks-CMJornZk.js";import{n as s,t as c}from"./links-Hhme1lWu.js";var l;function u(){return(u=e((()=>{l=`# Backdrop

There is no \`Backdrop\` component.
If you need a backdrop like the one in \`DBDrawer\` you should apply those styles:

## CSS

\`\`\`css
.my-backdrop {
	background-color: color(
		from var(--db-adaptive-on-bg-basic-emphasis-100-default) srgb r g b /
			var(--db-opacity-lg)
	);
}

/* OR */

dialog::backdrop {
	background-color: color(
		from var(--db-adaptive-on-bg-basic-emphasis-100-default) srgb r g b /
			var(--db-opacity-lg)
	);
}
\`\`\`

## SCSS

\`\`\`scss
@use "@db-ux/core-foundations/build/styles/colors";
@use "@db-ux/core-foundations/build/styles/variables";

.my-backdrop {
	background-color: color(
		from #{colors.$db-adaptive-on-bg-basic-emphasis-100-default} srgb r g
			b / #{variables.$db-opacity-lg}
	);
}

/* OR */

dialog::backdrop {
	background-color: color(
		from #{colors.$db-adaptive-on-bg-basic-emphasis-100-default} srgb r g
			b / #{variables.$db-opacity-lg}
	);
}
\`\`\`

> **NOTE:** If you want to use the \`weak\` variant you should use the \`db-opacity-sm\` variable.
`})))()}function d(e){let n={a:`a`,em:`em`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,(0,p.jsx)(a,{title:`Guides/Backdrop`}),`
`,(0,p.jsx)(i,{children:s(l,`/components/misc/backdrop`,`packages/components/docs/Backdrop.md`)}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsxs)(n.em,{children:[`Source: `,(0,p.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/docs/Backdrop.md`,rel:`nofollow`,children:`packages/components/docs/Backdrop.md`})]})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),u(),c()})))()}m();export{f as default};