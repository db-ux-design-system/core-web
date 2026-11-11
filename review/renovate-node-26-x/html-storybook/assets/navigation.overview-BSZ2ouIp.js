import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-CFR87F3U.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./navigation.overview.stories-BLKRu1YH.js";import{a as u,n as d,r as f,t as p}from"./density.example.stories-C9dIeZIL.js";import{i as m,n as h,t as g}from"./active.example.stories-47ju3EMR.js";import{a as _,n as v,r as y,t as b}from"./density.example.stories-CmCTTvl_.js";import{i as x,n as S,t as C}from"./disabled.example.stories-Dcy6RVzZ.js";import{i as w,n as T,t as E}from"./expanded.example.stories-Dv8YZSi8.js";import{n as D,r as O,t as k}from"./show-icon.example.stories-JZ_41umo.js";import{n as A,r as j,t as M}from"./width.example.stories-Bz92pE-A.js";import{n as N,r as P,t as F}from"./wrap.example.stories-xJ3srFtJ.js";var I;function L(){return(L=e((()=>{I='## Accessibility\n\n### Active item / current page\n\nTo implicitly set a `NavigationItem` to **active**, the attribute `aria-current="page"` is applied to the contained anchor.\nSome frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used.\n\nThis leads to:\n\n- the `NavigationItem` and all parent `NavigationItems` are displayed as **active** via `css` (bold, if necessary with indicator)\n- accessibility is granted correctly. see: [MDN aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)\n\nFor other purposes, `NavigationItems` can also be set to active with their prop `active`. However, this does not guarantee correct a11y.\n'})))()}var R;function z(){return(z=e((()=>{R=`## General

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
`})))()}var B;function V(){return(V=e((()=>{B=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}function H(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[`
`,(0,W.jsx)(t,{of:c}),`
`,(0,W.jsx)(r.h1,{id:`dbnavigation`,children:`DBNavigation`}),`
`,(0,W.jsx)(i,{children:`Navigation provides a set of destinations that help users move through an application consistently across desktop and mobile. It supports different orientations and responsive behaviors while clearly indicating the current location and available paths.`}),`
`,(0,W.jsxs)(r.p,{children:[(0,W.jsx)(r.strong,{children:`Status:`}),` Deprecated`]}),`
`,(0,W.jsxs)(r.p,{children:[(0,W.jsx)(r.strong,{children:`Parts:`}),` DBNavigationItem – documented on this page.`]}),`
`,(0,W.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,W.jsx)(`div`,{"data-mode":`light`,children:(0,W.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/navigation`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,W.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,W.jsx)(`strong`,{children:`Navigation guidelines`}),(0,W.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,W.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,W.jsxs)(r.p,{children:[`Setup: `,(0,W.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,W.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,W.jsxs)(r.p,{children:[`Open `,(0,W.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,W.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,W.jsx)(n,{of:f}),`
`,(0,W.jsx)(n,{of:p}),`
`,(0,W.jsx)(n,{of:d}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigation-density--docs`,children:`Open the Density examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-active`,children:`DBNavigationItem: Active`}),`
`,(0,W.jsx)(n,{of:g}),`
`,(0,W.jsx)(n,{of:h}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-active--docs`,children:`Open the DBNavigationItem: Active examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-density`,children:`DBNavigationItem: Density`}),`
`,(0,W.jsx)(n,{of:y}),`
`,(0,W.jsx)(n,{of:b}),`
`,(0,W.jsx)(n,{of:v}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-density--docs`,children:`Open the DBNavigationItem: Density examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-disabled`,children:`DBNavigationItem: Disabled`}),`
`,(0,W.jsx)(n,{of:C}),`
`,(0,W.jsx)(n,{of:S}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-disabled--docs`,children:`Open the DBNavigationItem: Disabled examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-expanded`,children:`DBNavigationItem: Expanded`}),`
`,(0,W.jsx)(n,{of:E}),`
`,(0,W.jsx)(n,{of:T}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-expanded--docs`,children:`Open the DBNavigationItem: Expanded examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-show-icon`,children:`DBNavigationItem: Show Icon`}),`
`,(0,W.jsx)(n,{of:k}),`
`,(0,W.jsx)(n,{of:D}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-show-icon--docs`,children:`Open the DBNavigationItem: Show Icon examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-width`,children:`DBNavigationItem: Width`}),`
`,(0,W.jsx)(n,{of:M}),`
`,(0,W.jsx)(n,{of:A}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-width--docs`,children:`Open the DBNavigationItem: Width examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-wrap`,children:`DBNavigationItem: Wrap`}),`
`,(0,W.jsx)(n,{of:F}),`
`,(0,W.jsx)(n,{of:N}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-wrap--docs`,children:`Open the DBNavigationItem: Wrap examples`})}),`
`,(0,W.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,W.jsx)(r.h3,{id:`using-dbnavigationitem`,children:`Using DBNavigationItem`}),`
`,(0,W.jsx)(i,{children:`#### Use component

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
`,(0,W.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,W.jsxs)(r.p,{children:[`In HTML the component is a `,(0,W.jsx)(r.code,{children:`<nav>`}),` with the class `,(0,W.jsx)(r.code,{children:`db-navigation`}),`. Options are `,(0,W.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,W.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem`,children:`DBNavigationItem`}),`
`,(0,W.jsxs)(r.p,{children:[`In HTML DBNavigationItem is a `,(0,W.jsx)(r.code,{children:`<li>`}),` with the class `,(0,W.jsx)(r.code,{children:`db-navigation-item`}),`. Options are `,(0,W.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,W.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,`
`,(0,W.jsx)(i,{children:I}),`
`,(0,W.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,W.jsx)(i,{children:R.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-1`,children:`DBNavigationItem`}),`
`,(0,W.jsx)(i,{children:B.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,W.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,W.jsxs)(r.ul,{children:[`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/navigation`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,W.jsxs)(r.li,{children:[`npm: `,(0,W.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/navigation`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function U(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;function G(){return(G=e((()=>{W=a(),s(),r(),l(),u(),m(),_(),x(),w(),O(),j(),P(),L(),z(),V()})))()}G();export{U as default};