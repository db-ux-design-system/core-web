import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-Bc02zV-Z.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,t as u}from"./footer-meta-DhNPA_pL.js";import{n as d,t as f}from"./footer-content-BVkKN45l.js";import{r as p,t as m}from"./complex-composition.example.stories-C8dr_wo7.js";import{r as h,t as g}from"./composition.example.stories-n-GWJM1Q.js";import{i as _,n as v,t as y}from"./copyright.example.stories-8a2Fyuut.js";import{n as b,t as x}from"./meta-layout.example.stories-D1ZbRBvF.js";import{n as S,r as C,t as w}from"./optional-areas.example.stories-CxB-BkEn.js";import{n as T,t as E}from"./width.example.stories-CTMr3P0P.js";import{n as D,t as O}from"./footer.overview.stories-C9X4CFJU.js";var k;function A(){return(A=e((()=>{k=`## Migration

DBFooter is a new composable wrapper for replacing custom footer implementations. Place it in the \`endSlot\` of \`DBShellContent\` and put \`DBFooterContent\` and \`DBFooterMeta\` inside it as needed. It deliberately does not collapse links into a mobile accordion, so links remain available to assistive technologies and browser search.

### Key features

- Explicit \`DBFooterContent\` and \`DBFooterMeta\` visual areas
- Optional copyright text through \`DBFooterMeta copyright\`
- Areas are omitted by leaving out their subcomponent
- Static inner content widths: \`full\`, \`large\`, \`medium\`, and \`small\`
- Full-width outer footer and visual areas

### Example

\`\`\`tsx
<DBShellContent
	endSlot={
		<DBFooter width="medium">
			<DBFooterContent>
				<nav aria-label="Footer navigation">
					<ul>
						<li>
							<a href="/about">About us</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</nav>
			</DBFooterContent>
			<DBFooterMeta copyright="Example Company">
				<nav aria-label="Legal navigation">
					<ul>
						<li>
							<a href="/privacy">Privacy</a>
						</li>
						<li>
							<a href="/imprint">Imprint</a>
						</li>
					</ul>
				</nav>
			</DBFooterMeta>
		</DBFooter>
	}
>
	Page content
</DBShellContent>
\`\`\`

The \`width\` value only constrains and centres the inner content. It does not make the footer itself narrower and is not a responsive breakpoint switch.

### Coming from the deprecated DBPage

In \`DBPage variant="fixed"\` the footer was passed through the \`footer\` slot of \`DBPage\` itself. \`DBShell\` has no equivalent slot: its grid only defines areas for the control panel, the sub-navigation, and the content. Move the footer into the \`endSlot\` of \`DBShellContent\` instead.

| Deprecated                                      | Replacement                               |
| ----------------------------------------------- | ----------------------------------------- |
| \`DBPage\` slot \`footer\`                          | \`DBShellContent\` slot \`endSlot\`           |
| \`DBPage variant="fixed"\` (footer stays visible) | \`DBShellContent variant="fixed"\`          |
| \`DBPage variant="auto"\`                         | \`DBShellContent variant="auto"\` (default) |
`})))()}function j(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[`
`,(0,N.jsx)(n,{of:O}),`
`,(0,N.jsx)(r.h1,{id:`dbfooter`,children:`DBFooter`}),`
`,(0,N.jsx)(t,{children:`The Footer forms the bottom area of the layout and bundles secondary navigation, legal links, and meta information.`}),`
`,(0,N.jsxs)(r.p,{children:[(0,N.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,N.jsxs)(r.p,{children:[(0,N.jsx)(r.strong,{children:`Parts:`}),` DBFooterContent, DBFooterMeta – documented on this page.`]}),`
`,(0,N.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,N.jsx)(`div`,{"data-mode":`light`,children:(0,N.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,N.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,N.jsx)(`strong`,{children:`Footer guidelines`}),(0,N.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,N.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,N.jsxs)(r.p,{children:[`Setup: `,(0,N.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,N.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,N.jsxs)(r.p,{children:[`Open `,(0,N.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,N.jsx)(r.h3,{id:`complex-composition`,children:`Complex composition`}),`
`,(0,N.jsx)(a,{of:m}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-complex-composition--docs`,children:`Open the Complex composition examples`})}),`
`,(0,N.jsx)(r.h3,{id:`composition`,children:`Composition`}),`
`,(0,N.jsx)(a,{of:g}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-composition--docs`,children:`Open the Composition examples`})}),`
`,(0,N.jsx)(r.h3,{id:`copyright`,children:`Copyright`}),`
`,(0,N.jsx)(a,{of:y}),`
`,(0,N.jsx)(a,{of:v}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-copyright--docs`,children:`Open the Copyright examples`})}),`
`,(0,N.jsx)(r.h3,{id:`meta-layout`,children:`Meta layout`}),`
`,(0,N.jsx)(a,{of:x}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-meta-layout--docs`,children:`Open the Meta layout examples`})}),`
`,(0,N.jsx)(r.h3,{id:`optional-areas`,children:`Optional Areas`}),`
`,(0,N.jsx)(a,{of:w}),`
`,(0,N.jsx)(a,{of:S}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-optional-areas--docs`,children:`Open the Optional Areas examples`})}),`
`,(0,N.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,N.jsx)(a,{of:E}),`
`,(0,N.jsx)(r.p,{children:(0,N.jsx)(r.a,{href:`?path=/docs/components-dbfooter-width--docs`,children:`Open the Width examples`})}),`
`,(0,N.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,N.jsx)(t,{children:`For installation and configuration, see [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components).

Compose \`DBFooterContent\` and \`DBFooterMeta\` inside \`DBFooter\`. \`DBFooterMeta\` is semantically neutral and accepts navigation, contact information, or other secondary content. It does not create a navigation landmark, so wrap navigational content in a labelled \`nav\`. Omit either subcomponent when that visual area is not needed. Copyright is opt-in through \`DBFooterMeta\`.

Place the footer in the \`end-slot\` of \`DBShellContent\`. \`DBShell\` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only — it has no footer area. A \`DBFooter\` placed as a direct child of \`DBShell\` is therefore auto-placed by the grid and does not end up below the content.

\`\`\`vue App.vue
<script setup lang="ts">
import {
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBFooter,
	DBFooterContent,
	DBFooterMeta,
	DBLink,
	DBShell,
	DBShellContent
} from "@db-ux/v-core-components";
<\/script>

<template>
	<DBShell>
		<DBControlPanelDesktop>
			<template #brand>
				<DBControlPanelBrand>My App</DBControlPanelBrand>
			</template>
			<!-- Navigation goes here -->
		</DBControlPanelDesktop>
		<DBShellContent
			>Page content
			<template #end-slot>
				<DBFooter width="medium">
					<DBFooterContent
						><nav aria-label="Footer navigation">
							<ul>
								<li>
									<DBLink wrap href="/about">About us</DBLink>
								</li>
								<li>
									<DBLink wrap href="/contact"
										>Contact</DBLink
									>
								</li>
							</ul>
						</nav></DBFooterContent
					>
					<DBFooterMeta copyright="Example Company"
						><nav aria-label="Legal navigation">
							<ul>
								<li>
									<DBLink wrap href="/privacy"
										>Privacy</DBLink
									>
								</li>
								<li>
									<DBLink wrap href="/imprint"
										>Imprint</DBLink
									>
								</li>
							</ul>
						</nav></DBFooterMeta
					>
				</DBFooter>
			</template>
		</DBShellContent>
	</DBShell>
</template>
\`\`\`

The \`variant\` of \`DBShellContent\` decides how the footer behaves while scrolling. With the default \`auto\` the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With \`fixed\` only \`main\` scrolls, so the footer stays visible.

Use \`id\` and \`class\` on each component as needed. \`width\` accepts \`full\`, \`large\`, \`medium\`, or \`small\`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The footer and both visual areas always remain full width.`}),`
`,(0,N.jsx)(r.h3,{id:`using-dbfootercontent`,children:`Using DBFooterContent`}),`
`,(0,N.jsx)(t,{children:`\`DBFooterContent\` provides the primary visual area and is intended for use inside \`DBFooter\`. Lists lay out as a single line, which fits up to seven links. From eight links onward, group them by topic and give each group a unique heading naming its content; such a group lays its list out vertically.

\`\`\`vue App.vue
<script setup lang="ts">
import { DBFooter, DBFooterContent } from "@db-ux/v-core-components";
<\/script>

<template>
	<DBFooter>
		<DBFooterContent>
			<nav aria-label="Footer navigation">...</nav>
		</DBFooterContent>
	</DBFooter>
</template>
\`\`\``}),`
`,(0,N.jsx)(r.h3,{id:`using-dbfootermeta`,children:`Using DBFooterMeta`}),`
`,(0,N.jsx)(t,{children:`\`DBFooterMeta\` provides the secondary visual area inside \`DBFooter\`. It is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled \`nav\`, or provide other suitable secondary content such as contact information. Its \`copyright\` text is optional.

\`\`\`vue App.vue
<script setup lang="ts">
import { DBFooter, DBFooterMeta } from "@db-ux/v-core-components";
<\/script>

<template>
	<DBFooter>
		<DBFooterMeta copyright="Example Company">
			<nav aria-label="Legal navigation">...</nav>
		</DBFooterMeta>
	</DBFooter>
</template>
\`\`\`

The copyright and the secondary content sit side by side from a viewport width of 768 px upwards, with the copyright aligned to the top of the row. Below that the secondary content moves under the copyright and takes the full width. Set \`data-force-mobile="true"\` on the footer to get the stacked arrangement regardless, which is what a footer placed in a region narrower than the viewport needs.`}),`
`,(0,N.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,N.jsx)(i,{of:O}),`
`,(0,N.jsx)(r.h3,{id:`dbfootercontent`,children:`DBFooterContent`}),`
`,(0,N.jsx)(i,{of:f}),`
`,(0,N.jsx)(r.h3,{id:`dbfootermeta`,children:`DBFooterMeta`}),`
`,(0,N.jsx)(i,{of:u}),`
`,(0,N.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,N.jsx)(t,{children:k.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,N.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,N.jsxs)(r.ul,{children:[`
`,(0,N.jsx)(r.li,{children:(0,N.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,N.jsxs)(r.li,{children:[`npm: `,(0,N.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,N.jsx)(r.li,{children:(0,N.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/footer`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,N.jsx)(r.li,{children:(0,N.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function M(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=o(),c(),r(),D(),d(),l(),p(),h(),_(),b(),C(),T(),A()})))()}P();export{M as default};