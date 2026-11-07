import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-DbWjxpBK.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./navigation.overview.stories-BLKRu1YH.js";import{a as u,n as d,r as f,t as p}from"./density.example.stories-C9dIeZIL.js";import{n as m,t as h}from"./interaction.example.stories-DLFpQVse.js";import{i as g,n as _,t as v}from"./active.example.stories-47ju3EMR.js";import{a as y,n as b,r as x,t as S}from"./density.example.stories-CmCTTvl_.js";import{i as C,n as w,t as T}from"./disabled.example.stories-Dcy6RVzZ.js";import{i as E,n as D,t as O}from"./expanded.example.stories-Dv8YZSi8.js";import{n as k,r as A,t as j}from"./show-icon.example.stories-JZ_41umo.js";import{n as M,r as N,t as P}from"./width.example.stories-Bz92pE-A.js";import{n as F,r as I,t as L}from"./wrap.example.stories-xJ3srFtJ.js";var R;function z(){return(z=e((()=>{R='## Accessibility\n\n### Active item / current page\n\nTo implicitly set a `NavigationItem` to **active**, the attribute `aria-current="page"` is applied to the contained anchor.\nSome frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used.\n\nThis leads to:\n\n- the `NavigationItem` and all parent `NavigationItems` are displayed as **active** via `css` (bold, if necessary with indicator)\n- accessibility is granted correctly. see: [MDN aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)\n\nFor other purposes, `NavigationItems` can also be set to active with their prop `active`. However, this does not guarantee correct a11y.\n'})))()}var B;function V(){return(V=e((()=>{B=`## General

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
`})))()}var H;function U(){return(U=e((()=>{H=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}function W(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,K.jsxs)(K.Fragment,{children:[`
`,(0,K.jsx)(t,{of:c}),`
`,(0,K.jsx)(r.h1,{id:`dbnavigation`,children:`DBNavigation`}),`
`,(0,K.jsxs)(r.p,{children:[(0,K.jsx)(r.strong,{children:`Parts:`}),` DBNavigationItem – documented on this page.`]}),`
`,(0,K.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,K.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,K.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/navigation`,rel:`nofollow`,children:`Navigation guidelines`}),` on the Design System Platform.`]}),`
`,(0,K.jsxs)(r.p,{children:[`Setup: `,(0,K.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,K.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,K.jsxs)(r.p,{children:[`Open `,(0,K.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,K.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,K.jsx)(n,{of:f}),`
`,(0,K.jsx)(n,{of:p}),`
`,(0,K.jsx)(n,{of:d}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigation-density--docs`,children:`Open the Density examples`})}),`
`,(0,K.jsx)(r.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,K.jsx)(n,{of:h}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigation-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-active`,children:`DBNavigationItem: Active`}),`
`,(0,K.jsx)(n,{of:v}),`
`,(0,K.jsx)(n,{of:_}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-active--docs`,children:`Open the DBNavigationItem: Active examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-density`,children:`DBNavigationItem: Density`}),`
`,(0,K.jsx)(n,{of:x}),`
`,(0,K.jsx)(n,{of:S}),`
`,(0,K.jsx)(n,{of:b}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-density--docs`,children:`Open the DBNavigationItem: Density examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-disabled`,children:`DBNavigationItem: Disabled`}),`
`,(0,K.jsx)(n,{of:T}),`
`,(0,K.jsx)(n,{of:w}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-disabled--docs`,children:`Open the DBNavigationItem: Disabled examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-expanded`,children:`DBNavigationItem: Expanded`}),`
`,(0,K.jsx)(n,{of:O}),`
`,(0,K.jsx)(n,{of:D}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-expanded--docs`,children:`Open the DBNavigationItem: Expanded examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-show-icon`,children:`DBNavigationItem: Show Icon`}),`
`,(0,K.jsx)(n,{of:j}),`
`,(0,K.jsx)(n,{of:k}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-show-icon--docs`,children:`Open the DBNavigationItem: Show Icon examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-width`,children:`DBNavigationItem: Width`}),`
`,(0,K.jsx)(n,{of:P}),`
`,(0,K.jsx)(n,{of:M}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-width--docs`,children:`Open the DBNavigationItem: Width examples`})}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-wrap`,children:`DBNavigationItem: Wrap`}),`
`,(0,K.jsx)(n,{of:L}),`
`,(0,K.jsx)(n,{of:F}),`
`,(0,K.jsx)(r.p,{children:(0,K.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-wrap--docs`,children:`Open the DBNavigationItem: Wrap examples`})}),`
`,(0,K.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,K.jsx)(r.h3,{id:`using-dbnavigationitem`,children:`Using DBNavigationItem`}),`
`,(0,K.jsx)(i,{children:`#### Use component

If you want to use sub-navigations for mobile you need to add a \`eventListener:click\` on the \`db-navigation-item-expand-button\`. This eventListener should set \`aria-expanded\` to \`true\` for the \`button\`. This will open a static overlay for mobile/tablet devices with your \`db-sub-navigation\`. For desktop devices it works by default with \`:hover\`.

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<!-- Only link	-->
	<li class="db-navigation-item">
		<a href="mypath">NavigationItem</a>
	</li>

	<!-- With Sub-Navigation -->
	<li class="db-navigation-item">
		<button class="db-navigation-item-expand-button" aria-haspopup="true">
			Navi-Item 1
		</button>
		<menu class="db-sub-navigation">
			<a href="mypath">Sub-Navi-Item 1</a>
			<a href="mypath">Sub-Navi-Item 2</a>
		</menu>
	</li>
</body>
\`\`\``}),`
`,(0,K.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,K.jsxs)(r.p,{children:[`In HTML the component is a `,(0,K.jsx)(r.code,{children:`<nav>`}),` with the class `,(0,K.jsx)(r.code,{children:`db-navigation`}),`. Options are `,(0,K.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,K.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem`,children:`DBNavigationItem`}),`
`,(0,K.jsxs)(r.p,{children:[`In HTML DBNavigationItem is a `,(0,K.jsx)(r.code,{children:`<li>`}),` with the class `,(0,K.jsx)(r.code,{children:`db-navigation-item`}),`. Options are `,(0,K.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,K.jsx)(i,{children:"| Attribute | Values | Description |\n| --- | --- | --- |\n| `onmouseover` | `string` |  |\n| `onmouseleave` | `string` |  |"}),`
`,`
`,(0,K.jsx)(i,{children:R}),`
`,(0,K.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,K.jsx)(i,{children:B.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,K.jsx)(r.h3,{id:`dbnavigationitem-1`,children:`DBNavigationItem`}),`
`,(0,K.jsx)(i,{children:H.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,K.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,K.jsxs)(r.ul,{children:[`
`,(0,K.jsx)(r.li,{children:(0,K.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/navigation`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,K.jsxs)(r.li,{children:[`npm: `,(0,K.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,K.jsx)(r.li,{children:(0,K.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/navigation`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,K.jsx)(r.li,{children:(0,K.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function G(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,K.jsx)(t,{...e,children:(0,K.jsx)(W,{...e})}):W(e)}var K;function q(){return(q=e((()=>{K=a(),s(),r(),l(),u(),m(),g(),y(),C(),E(),A(),N(),I(),z(),V(),U()})))()}q();export{G as default};