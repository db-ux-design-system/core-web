import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,i as n,l as r,n as i,u as a}from"./blocks-BeTcZxT0.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,t as d}from"./densities.stories-CGmS5Jvx.js";import{n as f,t as p}from"./links-kL3YgDM2.js";var m;function h(){return(h=e((()=>{m=`# Densities

- You could use **Densities** to create visual "volume levels"
- You could change the appearance of a container rather than a component
- Best example is the navigation of an application: above the navigation is a smaller meta-navigation and even the component inside is smaller as well as all the spacings. The meta-navigation is above the real navigation, but focus of the user is on the real navigation, because the meta-navigation has less "volume"

There are three different **Densities**, you can use them to change the volume of a specific container or even the entire page based on the use-case, so change the default **density** when:

1. **functional**: e.g. use this for business apps with large tables
2. **regular**: e.g. use this for normal consumer apps
3. **expressive**: e.g. use this for marketing apps/ single pages

## How to include

For **CSS**, **SCSS** and **Tailwind** you don't have to include a specific file, just follow the documentation for [foundations](../README.md).

### How to use

We're providing [examples](./examples) to see the differences.

We set the \`data-density\` on a container like a \`<div>\`:

\`\`\`html
<div data-density="functional">
	<!-- Everything inside here will be smaller -->
	<DBButton>Test</DBButton>
	<DBInput label="Test" />
</div>
\`\`\`

Variants:

|       Variant       | CSS/SCSS/Tailwind           |
| :-----------------: | --------------------------- |
|    \`functional\`     | \`data-density="functional"\` |
| \`regular\` (default) | \`data-density="regular"\`    |
|    \`expressive\`     | \`data-density="expressive"\` |

To change the **density** of the entire page use:

\`\`\`html
<body data-density="functional">
	...
</body>
\`\`\`
`})))()}function g(e){let a={a:`a`,blockquote:`blockquote`,em:`em`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...s(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[`
`,(0,v.jsx)(r,{title:`Foundations/Densities`}),`
`,(0,v.jsxs)(a.blockquote,{children:[`
`,(0,v.jsxs)(a.p,{children:[(0,v.jsx)(a.strong,{children:`Learn:`}),` `,(0,v.jsx)(a.a,{href:`https://design-system.deutschebahn.com/documentation/learn/density`,rel:`nofollow`,children:`Apply a density`}),` on the Design System Platform.`]}),`
`]}),`
`,(0,v.jsx)(t,{children:f(m,`/foundations/densities/readme`)}),`
`,(0,v.jsx)(a.h2,{id:`examples`,children:`Examples`}),`
`,(0,v.jsx)(a.h3,{id:`side-by-side`,children:`Side By Side`}),`
`,(0,v.jsx)(n,{of:u}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(a.h3,{id:`combined`,children:`Combined`}),`
`,(0,v.jsx)(n,{of:d}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(a.p,{children:(0,v.jsxs)(a.em,{children:[`Source: `,(0,v.jsx)(a.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/Densities.md`,rel:`nofollow`,children:`packages/foundations/docs/Densities.md`})]})})]})}function _(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=o(),c(),a(),h(),p(),l()})))()}y();export{_ as default};