import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-bqv37t5n.js";import{a as r}from"./chunk-W22LQPXL-BOSaYCSi.js";import{a as i,o as a,s as o}from"./blocks-CMJornZk.js";import{n as s,t as c}from"./links-Hhme1lWu.js";var l;function u(){return(u=e((()=>{l=`# Router usage

> **Note:** At the moment, router links can only be used within the **DBControlPanelNavigationItem** component!

Unfortunately, the **DBLink** and **DBButton** components do not support router links. Explanation: Router links are usually rendered as anchor tags, which are not permitted within anchor or button tags.

## Supported routers

The following standard routers have been successfully implemented in the corresponding frameworks (Angular, React, Vue). Other routers should work in the same way, but have not yet been tested.

- [Angular router](https://angular.io/api/router)
- [React router](https://reactrouter.com/en/main)
- [Vue router](https://v3.router.vuejs.org/)

The routers are installed and used in accordance with the official docs:

## How to use

To create a DB Brand styled router link, place the corresponding router link component in the default slot of **DBControlPanelNavigationItem**.

[How to use DBControlPanelNavigationItem](https://design-system.deutschebahn.com/core-web/review/main/components/control-panel-navigation-item/overview)

**Angular**

\`RouterLink\` must be imported from the \`@angular/router\` package.

\`\`\`html
<db-control-panel-navigation-item>
	<a [routerLink]="link.path"> {{ link.label }} </a>
</db-control-panel-navigation-item>
\`\`\`

**React**

\`Link\` must be imported from the \`react-router-dom\` package.

\`\`\`html
<DBControlPanelNavigationItem>
	<Link to={link.path}>
		{link.label}
	</Link>
</DBControlPanelNavigationItem>
\`\`\`

**Vue**

\`RouterLink\` can be used directly, as it is available globally.

\`\`\`html
<DBControlPanelNavigationItem>
	<RouterLink :to="link.path"> {{ link.label }} </RouterLink>
</DBControlPanelNavigationItem>
\`\`\`
`})))()}function d(e){let n={a:`a`,em:`em`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,(0,p.jsx)(a,{title:`Guides/Router Usage`}),`
`,(0,p.jsx)(i,{children:s(l,`/components/misc/router-usage`,`packages/components/docs/router-usage.md`)}),`
`,(0,p.jsx)(n.p,{children:(0,p.jsxs)(n.em,{children:[`Source: `,(0,p.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/docs/router-usage.md`,rel:`nofollow`,children:`packages/components/docs/router-usage.md`})]})})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),u(),c()})))()}m();export{f as default};