import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-_ZGSV0dG.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./header.overview.stories-SQH7Vw8N.js";import{i as u,n as d,t as f}from"./behavior.example.stories-TOU90eHg.js";import{r as p,t as m}from"./custom-header.example.stories-qraBY0KX.js";import{a as h,n as g,r as _,t as v}from"./density.example.stories-C2zmvSN0.js";import{i as y,n as b,o as x,r as S,t as C}from"./examples.example.stories-Dm2-I7_H.js";import{i as w,n as T,r as E,t as D}from"./width.example.stories-BNt95Bg7.js";var O;function k(){return(k=e((()=>{O=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After                                                  | Description                                                                                                                   |
| ------------ | :----: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| \`rea-header\` |   🔁   | \`db-control-panel-desktop\` / \`db-control-panel-mobile\` | \`db-header\` is deprecated. Render both as siblings inside \`db-shell\`; the shell shows the matching one per breakpoint (\`sm\`). |

### mobile

| Before   | Status | After         | Description                        |
| -------- | :----: | ------------- | ---------------------------------- |
| \`mobile\` |   🔁   | \`forceMobile\` | forces the burger menu for desktop |
`})))()}function A(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[`
`,(0,M.jsx)(t,{of:l}),`
`,(0,M.jsx)(r.h1,{id:`dbheader`,children:`DBHeader`}),`
`,(0,M.jsx)(i,{children:`Header defines the top area of a page and provides consistent access to brand identity, primary navigation, and optional actions. It anchors orientation and supports navigation patterns across responsive layouts, with optional meta navigation above the main bar.`}),`
`,(0,M.jsxs)(r.p,{children:[(0,M.jsx)(r.strong,{children:`Status:`}),` Deprecated`]}),`
`,(0,M.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,M.jsx)(`div`,{"data-mode":`light`,children:(0,M.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/header`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,M.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,M.jsx)(`strong`,{children:`Header guidelines`}),(0,M.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,M.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,M.jsxs)(r.p,{children:[`Setup: `,(0,M.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,M.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,M.jsxs)(r.p,{children:[`Open `,(0,M.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,M.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,M.jsx)(n,{of:f}),`
`,(0,M.jsx)(n,{of:d}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,M.jsx)(r.h3,{id:`custom-header`,children:`Custom Header`}),`
`,(0,M.jsx)(n,{of:m}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-custom-header--docs`,children:`Open the Custom Header examples`})}),`
`,(0,M.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,M.jsx)(n,{of:_}),`
`,(0,M.jsx)(n,{of:v}),`
`,(0,M.jsx)(n,{of:g}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-density--docs`,children:`Open the Density examples`})}),`
`,(0,M.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,M.jsx)(n,{of:C}),`
`,(0,M.jsx)(n,{of:y}),`
`,(0,M.jsx)(n,{of:b}),`
`,(0,M.jsx)(n,{of:S}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,M.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,M.jsx)(n,{of:D}),`
`,(0,M.jsx)(n,{of:E}),`
`,(0,M.jsx)(n,{of:T}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-width--docs`,children:`Open the Width examples`})}),`
`,(0,M.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,M.jsx)(i,{children:`### Use component

Use [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) (\`command\` and \`commandfor\` HTML attributes) to declaratively connect the burger menu button with the drawer \`<dialog>\` element, and the close button inside the drawer. Supported built-in commands for \`<dialog>\` are \`show-modal\` and \`close\`.

If you do need to provide support for [browser versions that haven't implemented Invoker Commands](https://caniuse.com/wf-invoker-commands), add a feature detection fallback in JavaScript (see example below) or the [polyfill \`invokers-polyfill\`](https://github.com/keithamus/invokers-polyfill).

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<header class="db-header">
		<dialog id="header-drawer" class="db-drawer">
			<article
				class="db-drawer-container db-header-drawer"
				data-spacing="small"
			>
				<header class="db-drawer-header">
					<div class="db-drawer-header-text"></div>
					<button
						class="db-button button-close-drawer is-icon-text-replace"
						data-icon="cross"
						data-variant="text"
						command="close"
						commandfor="header-drawer"
					>
						Close Button
					</button>
				</header>
				<div class="db-drawer-content">
					<div class="db-header-drawer-navigation">
						<div class="db-header-navigation">
							<nav class="db-main-navigation">
								<menu>
									<li
										class="db-navigation-item"
										data-icon="x_placeholder"
									>
										<a href="#">Regular (Default)</a>
									</li>
									<li
										class="db-navigation-item"
										aria-disabled="true"
									>
										<a href="#"
											>Regular (Default) disabled</a
										>
									</li>
								</menu>
							</nav>
						</div>
						<div class="db-header-meta-navigation">
							<a
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Imprint</a
							><a
								class="db-link"
								href="#"
								tabindex="0"
								data-content="internal"
								>Help</a
							>
						</div>
					</div>
					<div class="db-header-secondary-action">
						<button
							class="db-button is-icon-text-replace"
							data-icon="x_placeholder"
							data-variant="text"
						>
							Profile</button
						><button
							class="db-button is-icon-text-replace"
							data-icon="alert"
							data-variant="text"
						>
							Notification</button
						><button
							class="db-button is-icon-text-replace"
							data-icon="help"
							data-variant="text"
						>
							Help
						</button>
					</div>
				</div>
			</article>
		</dialog>
		<div class="db-header-meta-navigation">
			<a class="db-link" href="#" tabindex="0" data-content="internal"
				>Imprint</a
			><a class="db-link" href="#" tabindex="0" data-content="internal"
				>Help</a
			>
		</div>
		<div class="db-header-navigation-bar">
			<div class="db-header-brand-container">
				<div class="db-brand">
					<a href="/"
						><img
							class="db-logo"
							src="https://design-system.deutschebahn.com/images/db_logo.svg"
							alt=""
							height="24"
							width="34" /></a
					>DBHeader
				</div>
			</div>
			<div class="db-header-navigation-container">
				<div class="db-header-navigation">
					<nav class="db-navigation">
						<menu>
							<li
								class="db-navigation-item"
								data-icon="x_placeholder"
							>
								<a href="#">Regular (Default)</a>
							</li>
							<li class="db-navigation-item" aria-disabled="true">
								<a href="#">Regular (Default) disabled</a>
							</li>
						</menu>
					</nav>
				</div>
				<div class="db-header-primary-action">
					<button
						class="db-button is-icon-text-replace"
						data-icon="magnifying_glass"
						data-variant="text"
					>
						Search
					</button>
				</div>
			</div>
			<div class="db-header-action-container">
				<div class="db-header-burger-menu-container">
					<button
						class="db-button is-icon-text-replace"
						data-icon="menu"
						data-variant="text"
						command="show-modal"
						commandfor="header-drawer"
					>
						BurgerMenu
					</button>
				</div>
				<div class="db-header-secondary-action">
					<button
						class="db-button is-icon-text-replace"
						data-icon="x_placeholder"
						data-variant="text"
					>
						Profile</button
					><button
						class="db-button is-icon-text-replace"
						data-icon="alert"
						data-variant="text"
					>
						Notification</button
					><button
						class="db-button is-icon-text-replace"
						data-icon="help"
						data-variant="text"
					>
						Help
					</button>
				</div>
			</div>
		</div>
	</header>

	<script>
		/*
		 * Feature detection for Invoker Commands:
		 * If the browser does not support the \`command\` and \`commandfor\`
		 * HTML attributes, we fall back to JavaScript event handlers.
		 */
		if (!("commandForElement" in HTMLButtonElement.prototype)) {
			const burgerMenuButton = document.querySelector(
				'[commandfor="header-drawer"][command="show-modal"]'
			);
			const closeButton = document.querySelector(
				'[commandfor="header-drawer"][command="close"]'
			);
			const drawer = document.getElementById("header-drawer");

			burgerMenuButton?.addEventListener("click", () => {
				drawer?.showModal?.();
			});
			closeButton?.addEventListener("click", () => {
				drawer?.close?.();
			});
		}
	<\/script>
</body>
\`\`\``}),`
`,(0,M.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,M.jsxs)(r.p,{children:[`In HTML the component is a `,(0,M.jsx)(r.code,{children:`<header>`}),` with the class `,(0,M.jsx)(r.code,{children:`db-header`}),`. Options are `,(0,M.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,M.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |\n| `data-on-forcing-mobile` | `true` \\| `false` | Forces the header to use mobile layout for desktop as well. You should only use this setting if you really can\'t provide a smaller navigation. Overwrite size of the drawer with \'--db-drawer-max-width: xxx\' |'}),`
`,(0,M.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,M.jsx)(i,{children:O.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,M.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,M.jsxs)(r.ul,{children:[`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/header`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,M.jsxs)(r.li,{children:[`npm: `,(0,M.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/header`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function j(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=a(),s(),r(),c(),u(),p(),h(),x(),w(),k()})))()}N();export{j as default};