import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-BvvYmcQj.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{r as c,t as l}from"./complex-composition.example.stories-RAxZnf3H.js";import{r as u,t as d}from"./composition.example.stories-Dfs0woev.js";import{i as f,n as p,t as m}from"./copyright.example.stories-D6gBY95X.js";import{n as h,t as g}from"./meta-layout.example.stories-Y_lXOxpt.js";import{n as _,r as v,t as y}from"./optional-areas.example.stories-CXpaN9g2.js";import{n as b,t as x}from"./width.example.stories-hc9fOxaS.js";import{n as S,t as C}from"./footer.overview.stories-KHpILS7H.js";var w;function T(){return(T=e((()=>{w=`## Migration

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
`})))()}function E(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,(0,O.jsx)(t,{of:C}),`
`,(0,O.jsx)(r.h1,{id:`dbfooter`,children:`DBFooter`}),`
`,(0,O.jsx)(i,{children:`The Footer forms the bottom area of the layout and bundles secondary navigation, legal links, and meta information.`}),`
`,(0,O.jsxs)(r.p,{children:[(0,O.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,O.jsxs)(r.p,{children:[(0,O.jsx)(r.strong,{children:`Parts:`}),` DBFooterContent, DBFooterMeta – documented on this page.`]}),`
`,(0,O.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,O.jsx)(`div`,{"data-mode":`light`,children:(0,O.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,O.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,O.jsx)(`strong`,{children:`Footer guidelines`}),(0,O.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,O.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,O.jsxs)(r.p,{children:[`Setup: `,(0,O.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,O.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,O.jsxs)(r.p,{children:[`Open `,(0,O.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,O.jsx)(r.h3,{id:`complex-composition`,children:`Complex composition`}),`
`,(0,O.jsx)(n,{of:l}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-complex-composition--docs`,children:`Open the Complex composition examples`})}),`
`,(0,O.jsx)(r.h3,{id:`composition`,children:`Composition`}),`
`,(0,O.jsx)(n,{of:d}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-composition--docs`,children:`Open the Composition examples`})}),`
`,(0,O.jsx)(r.h3,{id:`copyright`,children:`Copyright`}),`
`,(0,O.jsx)(n,{of:m}),`
`,(0,O.jsx)(n,{of:p}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-copyright--docs`,children:`Open the Copyright examples`})}),`
`,(0,O.jsx)(r.h3,{id:`meta-layout`,children:`Meta layout`}),`
`,(0,O.jsx)(n,{of:g}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-meta-layout--docs`,children:`Open the Meta layout examples`})}),`
`,(0,O.jsx)(r.h3,{id:`optional-areas`,children:`Optional Areas`}),`
`,(0,O.jsx)(n,{of:y}),`
`,(0,O.jsx)(n,{of:_}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-optional-areas--docs`,children:`Open the Optional Areas examples`})}),`
`,(0,O.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,O.jsx)(n,{of:x}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-width--docs`,children:`Open the Width examples`})}),`
`,(0,O.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,O.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |'}),`
`,(0,O.jsx)(r.h3,{id:`dbfootercontent`,children:`DBFooterContent`}),`
`,(0,O.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,O.jsx)(r.h3,{id:`dbfootermeta`,children:`DBFooterMeta`}),`
`,(0,O.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `copyright` | `string` | Optional copyright holder rendered before the secondary content. The component prepends the copyright symbol, so pass only the holder (and a year if needed), for example `2026 Example Company`. |"}),`
`,(0,O.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,O.jsx)(i,{children:w.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,O.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,O.jsxs)(r.ul,{children:[`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,O.jsxs)(r.li,{children:[`npm: `,(0,O.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/footer`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function D(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=a(),s(),r(),S(),c(),u(),f(),h(),v(),b(),T()})))()}k();export{D as default};