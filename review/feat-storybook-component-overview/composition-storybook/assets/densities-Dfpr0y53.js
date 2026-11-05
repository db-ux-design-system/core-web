import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{a as r}from"./chunk-W22LQPXL-ChqkFyql.js";import{a as i,o as a,s as o}from"./blocks-D78KvKya.js";import{n as s,t as c}from"./links-q8BruAbl.js";var l;function u(){return(u=e((()=>{l=`# Densities

- You could use **Densities** to create visual "volume levels"
- You could change the appearance of a container rather than a component
- Best example is the navigation on our [main page](https://design-system.deutschebahn.com/core-web/review/main/). Above the navigation is a smaller meta-navigation and even the component inside is smaller as well as all the spacings. The meta-navigation is above the real navigation, but focus of the user is on the real navigation, because the meta-navigation has less "volume"

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
`})))()}function d(e){let n={a:`a`,blockquote:`blockquote`,em:`em`,p:`p`,strong:`strong`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,(0,p.jsx)(a,{title:`Foundations/Densities`}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:`Learn:`}),` `,(0,p.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/density`,rel:`nofollow`,children:`Apply a density`}),` on the Design System Platform.`]}),`
`]}),`
`,(0,p.jsx)(i,{children:s(l,`/foundations/densities/readme`)}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsxs)(n.em,{children:[`Source: `,(0,p.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/foundations/docs/Densities.md`,rel:`nofollow`,children:`packages/foundations/docs/Densities.md`})]})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),u(),c()})))()}m();export{f as default};