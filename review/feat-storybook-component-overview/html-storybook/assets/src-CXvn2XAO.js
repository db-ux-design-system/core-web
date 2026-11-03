import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,m as n,u as r}from"./blocks-BXU0pwj1.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as o}from"./react-DITjJg24.js";function s(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...a(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[`
`,(0,l.jsx)(t,{title:`Getting Started`}),`
`,(0,l.jsx)(n.h1,{id:`getting-started-with-html`,children:`Getting Started with HTML`}),`
`,(0,l.jsxs)(n.p,{children:[`The minimum to render the first component. The `,(0,l.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`HTML setup page on the Design System Platform`}),` explains every step in detail, with the Vite and PostCSS plugins, linting and troubleshooting.`]}),`
`,(0,l.jsxs)(n.p,{children:[`To try the components first, or to share a reproducible example in an issue, open an `,(0,l.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/examples`,rel:`nofollow`,children:`example project`}),` in StackBlitz – no local setup needed.`]}),`
`,(0,l.jsx)(n.h2,{id:`1-install`,children:`1. Install`}),`
`,(0,l.jsx)(r,{language:`shell`,dark:!0,code:`pnpm add @db-ux/core-components @db-ux/core-foundations`}),`
`,(0,l.jsx)(n.h2,{id:`2-load-the-styles`,children:`2. Load the styles`}),`
`,(0,l.jsxs)(n.p,{children:[`The whitelabel theme comes first, the component styles after it. The `,(0,l.jsx)(n.code,{children:`@layer`}),` line fixes this order.`]}),`
`,(0,l.jsx)(r,{language:`css`,dark:!0,code:`/* index.css */
@layer whitelabel-theme, db-ux;
@import '@db-ux/core-foundations/build/styles/theme/rollup.css' layer(whitelabel-theme);
@import '@db-ux/core-components/build/styles/bundle.css' layer(db-ux);`}),`
`,(0,l.jsxs)(n.p,{children:[`Load the file once, with your bundler or with `,(0,l.jsx)(n.code,{children:`<link rel="stylesheet" href="index.css" />`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`3-check-the-setup`,children:`3. Check the setup`}),`
`,(0,l.jsx)(n.p,{children:`A button with an icon shows in one place whether styles, font and icons load:`}),`
`,(0,l.jsx)(r,{language:`html`,dark:!0,code:`<button class="db-button" type="button" data-variant="brand" data-icon="arrow_right">
	Add item to cart
</button>`}),`
`,(0,l.jsx)(n.h2,{id:`products-of-deutsche-bahn-db-theme`,children:`Products of Deutsche Bahn: DB Theme`}),`
`,(0,l.jsxs)(n.p,{children:[`Products of Deutsche Bahn use the DB Theme instead of the whitelabel theme. Its files are encrypted for legal reasons: get `,(0,l.jsx)(n.code,{children:`ASSET_PASSWORD`}),` and `,(0,l.jsx)(n.code,{children:`ASSET_INIT_VECTOR`}),` from the `,(0,l.jsx)(n.a,{href:`https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system/resources/db-theme`,rel:`nofollow`,children:`Marketing Portal`}),` and store them in a `,(0,l.jsx)(n.code,{children:`.env`}),` file that is never committed (in CI/CD as secret environment variables).`]}),`
`,(0,l.jsx)(r,{language:`dotenv`,dark:!0,code:`ASSET_PASSWORD=<value from the Marketing Portal>
ASSET_INIT_VECTOR=<value from the Marketing Portal>`}),`
`,(0,l.jsxs)(n.p,{children:[`Install the theme; it decrypts itself and brings the fonts and icons. With pnpm, allow the install scripts of the four `,(0,l.jsx)(n.code,{children:`@db-ux/db-theme*`}),` packages when `,(0,l.jsx)(n.code,{children:`pnpm approve-builds`}),` asks.`]}),`
`,(0,l.jsx)(r,{language:`shell`,dark:!0,code:`pnpm add @db-ux/db-theme
pnpm approve-builds`}),`
`,(0,l.jsx)(n.p,{children:`Replace the styles of step 2: the DB Theme overrides the defaults, so it comes last.`}),`
`,(0,l.jsx)(r,{language:`css`,dark:!0,code:`/* index.css */
@layer db-ux, db-theme;
@import '@db-ux/core-components/build/styles/rollup.css' layer(db-ux);
@import '@db-ux/db-theme/build/styles/rollup.css' layer(db-theme);`}),`
`,(0,l.jsxs)(n.p,{children:[`Details, manual decryption and the license: `,(0,l.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/db-theme-setup`,rel:`nofollow`,children:`DB Theme setup on the Design System Platform`}),`.`]}),`
`,(0,l.jsx)(n.h2,{id:`find-a-component`,children:`Find a component`}),`
`,(0,l.jsxs)(n.p,{children:[`Every component has an `,(0,l.jsx)(n.strong,{children:`Overview`}),` page with usage, examples with code, properties, accessibility and migration, for example `,(0,l.jsx)(n.strong,{children:`Components → DBButton → Overview`}),`. Design guidelines are on the `,(0,l.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/overview`,rel:`nofollow`,children:`Design System Platform`}),`.`]})]})}function c(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=i(),o(),n()})))()}u();export{c as default};