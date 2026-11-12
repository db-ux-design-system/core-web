import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-DNJxahoj.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./footer.overview.stories-CFDqtnVW.js";import{r as u,t as d}from"./complex-composition.example.stories-Dk9fZw42.js";import{r as f,t as p}from"./composition.example.stories-B1avFbia.js";import{i as m,n as h,t as g}from"./copyright.example.stories-BzSDBcK0.js";import{n as _,t as v}from"./meta-layout.example.stories-pvK1YXfl.js";import{n as y,r as b,t as x}from"./optional-areas.example.stories-BsxT1pDQ.js";import{n as S,t as C}from"./width.example.stories-CM334K0Q.js";var w;function T(){return(T=e((()=>{w=`## Migration

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
`})))()}function E(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[`
`,(0,O.jsx)(t,{of:l}),`
`,(0,O.jsx)(r.h1,{id:`dbfooter`,children:`DBFooter`}),`
`,(0,O.jsx)(i,{children:`The Footer forms the bottom area of the layout and bundles secondary navigation, legal links, and meta information.`}),`
`,(0,O.jsxs)(r.p,{children:[(0,O.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,O.jsxs)(r.p,{children:[(0,O.jsx)(r.strong,{children:`Parts:`}),` DBFooterContent, DBFooterMeta – documented on this page.`]}),`
`,(0,O.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,O.jsx)(`div`,{"data-mode":`light`,children:(0,O.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,O.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,O.jsx)(`strong`,{children:`Footer guidelines`}),(0,O.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,O.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,O.jsxs)(r.p,{children:[`Setup: `,(0,O.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,O.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,O.jsxs)(r.p,{children:[`Open `,(0,O.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,O.jsx)(r.h3,{id:`complex-composition`,children:`Complex composition`}),`
`,(0,O.jsx)(n,{of:d}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-complex-composition--docs`,children:`Open the Complex composition examples`})}),`
`,(0,O.jsx)(r.h3,{id:`composition`,children:`Composition`}),`
`,(0,O.jsx)(n,{of:p}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-composition--docs`,children:`Open the Composition examples`})}),`
`,(0,O.jsx)(r.h3,{id:`copyright`,children:`Copyright`}),`
`,(0,O.jsx)(n,{of:g}),`
`,(0,O.jsx)(n,{of:h}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-copyright--docs`,children:`Open the Copyright examples`})}),`
`,(0,O.jsx)(r.h3,{id:`meta-layout`,children:`Meta layout`}),`
`,(0,O.jsx)(n,{of:v}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-meta-layout--docs`,children:`Open the Meta layout examples`})}),`
`,(0,O.jsx)(r.h3,{id:`optional-areas`,children:`Optional Areas`}),`
`,(0,O.jsx)(n,{of:x}),`
`,(0,O.jsx)(n,{of:y}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-optional-areas--docs`,children:`Open the Optional Areas examples`})}),`
`,(0,O.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,O.jsx)(n,{of:C}),`
`,(0,O.jsx)(r.p,{children:(0,O.jsx)(r.a,{href:`?path=/docs/components-dbfooter-width--docs`,children:`Open the Width examples`})}),`
`,(0,O.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,O.jsx)(i,{children:`For installation and configuration, see [components](https://www.npmjs.com/package/@db-ux/core-components).

Compose the visual content and meta wrappers inside a native footer. The meta wrapper is semantically neutral and accepts navigation, contact information, or other secondary content. It does not create a navigation landmark, so wrap navigational content in a labelled \`nav\`. Omit either wrapper when that area is not needed, and add copyright text only when required.

Place the footer as the last child of \`.db-shell-content\`, after \`.db-main\`. \`.db-shell\` lays its children out in a grid with areas for the control panel, the sub-navigation, and the content only — it has no footer area. A \`.db-footer\` placed as a direct child of \`.db-shell\` is therefore auto-placed by the grid and does not end up below the content.

\`\`\`html index.html
<div class="db-shell">
	<header class="db-control-panel-desktop">
		<div class="db-control-panel-brand">My App</div>
		<!-- Navigation goes here -->
	</header>
	<div class="db-shell-content">
		<main class="db-main" id="main-content">Page content</main>
		<footer class="db-footer" data-width="medium">
			<div class="db-footer-content">
				<div class="db-footer-container">
					<nav aria-label="Footer navigation">
						<ul>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/about"
									>About us</a
								>
							</li>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/contact"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="db-footer-meta">
				<div class="db-footer-container">
					<p class="db-footer-copyright">
						&copy;&nbsp;Example Company
					</p>
					<nav aria-label="Legal navigation">
						<ul>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/privacy"
									>Privacy</a
								>
							</li>
							<li>
								<a
									class="db-link"
									data-wrap="true"
									href="/imprint"
									>Imprint</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	</div>
</div>
\`\`\`

The \`data-variant\` of \`.db-shell-content\` decides how the footer behaves while scrolling. Without it the whole content area scrolls, so the footer scrolls out of view and is pushed to the bottom edge whenever the content is shorter than the viewport. With \`data-variant="fixed"\` only \`.db-main\` scrolls, so the footer stays visible.

\`data-width\` accepts \`full\`, \`large\`, \`medium\`, or \`small\`; it limits only the centred inner content to the available width, 1440 px, 1024 px, or 768 px respectively. The native \`<footer>\` and both visual areas always remain full width.`}),`
`,(0,O.jsx)(r.h3,{id:`using-dbfootercontent`,children:`Using DBFooterContent`}),`
`,(0,O.jsx)(i,{children:`Use \`.db-footer-content\` as the primary visual area inside a native \`.db-footer\`. Lists lay out as a single line, which fits up to seven links. From eight links onward, group them by topic and give each group a unique heading naming its content; such a group lays its list out vertically.

\`\`\`html index.html
<footer class="db-footer">
	<div class="db-footer-content">
		<div class="db-footer-container">
			<nav aria-label="Footer navigation">...</nav>
		</div>
	</div>
</footer>
\`\`\``}),`
`,(0,O.jsx)(r.h3,{id:`using-dbfootermeta`,children:`Using DBFooterMeta`}),`
`,(0,O.jsx)(i,{children:'Use `.db-footer-meta` as the secondary visual area inside a native `.db-footer`. The wrapper is semantically neutral and does not create a navigation landmark. Wrap navigational content in a labelled `nav`, or provide other suitable secondary content such as contact information. Copyright text is optional.\n\n```html index.html\n<footer class="db-footer">\n	<div class="db-footer-meta">\n		<div class="db-footer-container">\n			<p class="db-footer-copyright">&copy;&nbsp;Example Company</p>\n			<nav aria-label="Legal navigation">...</nav>\n		</div>\n	</div>\n</footer>\n```\n\nThe copyright and the secondary content sit side by side from a viewport width of 768 px upwards, with the copyright aligned to the top of the row. Below that the secondary content moves under the copyright and takes the full width. Set `data-force-mobile="true"` on the footer to get the stacked arrangement regardless, which is what a footer placed in a region narrower than the viewport needs.'}),`
`,(0,O.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,O.jsxs)(r.p,{children:[`In HTML the component is a `,(0,O.jsx)(r.code,{children:`<footer>`}),` with the class `,(0,O.jsx)(r.code,{children:`db-footer`}),`. Options are `,(0,O.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,O.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |'}),`
`,(0,O.jsx)(r.h3,{id:`dbfootercontent`,children:`DBFooterContent`}),`
`,(0,O.jsxs)(r.p,{children:[`In HTML DBFooterContent is a `,(0,O.jsx)(r.code,{children:`<div>`}),` with the class `,(0,O.jsx)(r.code,{children:`db-footer-content`}),`. Options are `,(0,O.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,O.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,O.jsx)(r.h3,{id:`dbfootermeta`,children:`DBFooterMeta`}),`
`,(0,O.jsxs)(r.p,{children:[`In HTML DBFooterMeta is a `,(0,O.jsx)(r.code,{children:`<div>`}),` with the class `,(0,O.jsx)(r.code,{children:`db-footer-meta`}),`. Options are `,(0,O.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,O.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,O.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,O.jsx)(i,{children:w.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,O.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,O.jsxs)(r.ul,{children:[`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/footer/footer`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,O.jsxs)(r.li,{children:[`npm: `,(0,O.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/footer`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,O.jsx)(r.li,{children:(0,O.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function D(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=a(),s(),r(),c(),u(),f(),m(),_(),b(),S(),T()})))()}k();export{D as default};