import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CPohpudH.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,t as u}from"./navigation-item-BjeiPIMa.js";import{i as d,n as f,t as p}from"./active.example.stories-DHWJKdho.js";import{a as m,n as h,r as g,t as _}from"./density.example.stories-BltanFFc.js";import{i as v,n as y,t as b}from"./disabled.example.stories-_EiDqJMZ.js";import{i as x,n as S,t as C}from"./expanded.example.stories-qXmr3Q7J.js";import{n as w,r as T,t as E}from"./show-icon.example.stories-DMzuGIBR.js";import{n as D,r as O,t as k}from"./width.example.stories-f8-cuwxh.js";import{n as A,r as j,t as M}from"./wrap.example.stories-B_M89njt.js";import{a as N,n as P,r as F,t as I}from"./density.example.stories-CjY0h89Y.js";import{n as L,t as R}from"./navigation.overview.stories-CKGV_ACF.js";var z;function B(){return(B=e((()=>{z='## Accessibility\n\n### Active item / current page\n\nTo implicitly set a `NavigationItem` to **active**, the attribute `aria-current="page"` is applied to the contained anchor.\nSome frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used.\n\nThis leads to:\n\n- the `NavigationItem` and all parent `NavigationItems` are displayed as **active** via `css` (bold, if necessary with indicator)\n- accessibility is granted correctly. see: [MDN aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)\n\nFor other purposes, `NavigationItems` can also be set to active with their prop `active`. However, this does not guarantee correct a11y.\n'})))()}var V;function H(){return(H=e((()=>{V=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before               | Status | After                         | Description                    |
| -------------------- | :----: | ----------------------------- | ------------------------------ |
| \`cmp-mainnavigation\` |   🔁   | \`db-control-panel-navigation\` | \`db-navigation\` is deprecated. |

### children

| Before     | Status | After | Description                                                                                  |
| ---------- | :----: | ----- | -------------------------------------------------------------------------------------------- |
| \`data\`     |   ❌   | ❌    | pass data via \`children\` / \`slot\`, moved a lot of the features to \`db-control-panel-desktop\` |
| \`siteName\` |   ❌   | ❌    |                                                                                              |
`})))()}var U;function W(){return(W=e((()=>{U=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}function G(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,q.jsxs)(q.Fragment,{children:[`
`,(0,q.jsx)(n,{of:L}),`
`,(0,q.jsx)(r.h1,{id:`dbnavigation`,children:`DBNavigation`}),`
`,(0,q.jsx)(t,{children:`Navigation provides a set of destinations that help users move through an application consistently across desktop and mobile. It supports different orientations and responsive behaviors while clearly indicating the current location and available paths.`}),`
`,(0,q.jsxs)(r.p,{children:[(0,q.jsx)(r.strong,{children:`Status:`}),` Deprecated`]}),`
`,(0,q.jsxs)(r.p,{children:[(0,q.jsx)(r.strong,{children:`Parts:`}),` DBNavigationItem – documented on this page.`]}),`
`,(0,q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,q.jsx)(`div`,{"data-mode":`light`,children:(0,q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/navigation`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,q.jsx)(`strong`,{children:`Navigation guidelines`}),(0,q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,q.jsxs)(r.p,{children:[`Setup: `,(0,q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,q.jsxs)(r.p,{children:[`Open `,(0,q.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,q.jsx)(a,{of:F}),`
`,(0,q.jsx)(a,{of:I}),`
`,(0,q.jsx)(a,{of:P}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigation-density--docs`,children:`Open the Density examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-active`,children:`DBNavigationItem: Active`}),`
`,(0,q.jsx)(a,{of:p}),`
`,(0,q.jsx)(a,{of:f}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-active--docs`,children:`Open the DBNavigationItem: Active examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-density`,children:`DBNavigationItem: Density`}),`
`,(0,q.jsx)(a,{of:g}),`
`,(0,q.jsx)(a,{of:_}),`
`,(0,q.jsx)(a,{of:h}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-density--docs`,children:`Open the DBNavigationItem: Density examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-disabled`,children:`DBNavigationItem: Disabled`}),`
`,(0,q.jsx)(a,{of:b}),`
`,(0,q.jsx)(a,{of:y}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-disabled--docs`,children:`Open the DBNavigationItem: Disabled examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-expanded`,children:`DBNavigationItem: Expanded`}),`
`,(0,q.jsx)(a,{of:C}),`
`,(0,q.jsx)(a,{of:S}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-expanded--docs`,children:`Open the DBNavigationItem: Expanded examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-show-icon`,children:`DBNavigationItem: Show Icon`}),`
`,(0,q.jsx)(a,{of:E}),`
`,(0,q.jsx)(a,{of:w}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-show-icon--docs`,children:`Open the DBNavigationItem: Show Icon examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-width`,children:`DBNavigationItem: Width`}),`
`,(0,q.jsx)(a,{of:k}),`
`,(0,q.jsx)(a,{of:D}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-width--docs`,children:`Open the DBNavigationItem: Width examples`})}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-wrap`,children:`DBNavigationItem: Wrap`}),`
`,(0,q.jsx)(a,{of:M}),`
`,(0,q.jsx)(a,{of:A}),`
`,(0,q.jsx)(r.p,{children:(0,q.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-wrap--docs`,children:`Open the DBNavigationItem: Wrap examples`})}),`
`,(0,q.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,q.jsx)(t,{children:`### Vue Router and active state handling

We recommend using the automatic [integration with the Vue Router](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#ariaCurrentValue). This is way more elegant than setting the aria attribute to the anchor yourself.

You can use Vue Routers \`RouterLink\` component to define your targets.
The active style is automatically set once an item receives the \`aria-current="page"\` attribute.

For other purposes, \`NavigationItems\` themselves can also be set to active with their prop \`:active="true"\`. However, this does not guarantee correct a11y.

\`\`\`vue App.vue
<!-- App.vue -->
<script>
import { DBMainNavigation, DBNavigationItem } from "@db-ux/v-core-components";
<\/script>

<template>
	<DBMainNavigation>
		<DBNavigationItem>
			<RouterLink to="/" ariaCurrentValue="page">Home</RouterLink>
		</DBNavigationItem>
		<DBNavigationItem>
			<template> Demo Pages </template>
			<template #subnavigation>
				<DBNavigationItem>
					<RouterLink to="/demo/1" ariaCurrentValue="page">
						Demo Page 1
					</RouterLink>
				</DBNavigationItem>
				<DBNavigationItem>
					<RouterLink to="/demo/2" ariaCurrentValue="page">
						Demo Page 2
					</RouterLink>
				</DBNavigationItem>
			</template>
		</DBNavigationItem>
	</DBMainNavigation>
</template>
\`\`\``}),`
`,(0,q.jsx)(r.h3,{id:`using-dbnavigationitem`,children:`Using DBNavigationItem`}),`
`,(0,q.jsx)(t,{children:`#### Use component

We try to set \`areaPopup\` (has/hasn't sub-navigation) inside the component, but this doesn't work in all frameworks. If you encounter some problems you have the set \`areaPopup\` with \`true/false\` for sub-navigation or link

\`\`\`vue App.vue
<!-- App.vue -->
<script>
import { DBNavigationItem } from "@db-ux/v-core-components";
<\/script>

<template>
	<!-- Only link	-->
	<DBNavigationItem>
		<router-link to="mypath">NavigationItem</router-link>
	</DBNavigationItem>

	<!-- With Sub-Navigation -->
	<DBNavigationItem>
		<template #subnavigation>
			<DBNavigationItem>
				<router-link to="mypath">Sub-Navi-Item 1</router-link>
			</DBNavigationItem>
			<DBNavigationItem>
				<router-link to="mypath">Sub-Navi-Item 2</router-link>
			</DBNavigationItem>
		</template>
		Navi-Item 1
	</DBNavigationItem>
</template>
\`\`\``}),`
`,(0,q.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,q.jsx)(i,{of:L}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem`,children:`DBNavigationItem`}),`
`,(0,q.jsx)(i,{of:l}),`
`,`
`,(0,q.jsx)(t,{children:z}),`
`,(0,q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,q.jsx)(t,{children:V.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,q.jsx)(r.h3,{id:`dbnavigationitem-1`,children:`DBNavigationItem`}),`
`,(0,q.jsx)(t,{children:U.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,q.jsxs)(r.ul,{children:[`
`,(0,q.jsx)(r.li,{children:(0,q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/navigation`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,q.jsxs)(r.li,{children:[`npm: `,(0,q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,q.jsx)(r.li,{children:(0,q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/navigation`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,q.jsx)(r.li,{children:(0,q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function K(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,q.jsx)(t,{...e,children:(0,q.jsx)(G,{...e})}):G(e)}var q;function J(){return(J=e((()=>{q=o(),c(),r(),R(),u(),N(),d(),m(),v(),x(),T(),O(),j(),B(),H(),W()})))()}J();export{K as default};