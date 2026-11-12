import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i}from"./blocks-BViNlT3k.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{i as c,n as l,t as u}from"./behavior.example.stories-B-XuKiWE.js";import{r as d,t as f}from"./custom-header.example.stories-CmCsi_XN.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-B2pW6BJz.js";import{i as _,n as v,o as y,r as b,t as x}from"./examples.example.stories-DDjdvl6e.js";import{i as S,n as C,r as w,t as T}from"./width.example.stories-CM2TvGg5.js";import{n as E,t as D}from"./header.overview.stories-B2bzYP43.js";var O;function k(){return(k=e((()=>{O=`## General

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
`})))()}function A(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[`
`,(0,M.jsx)(n,{of:D}),`
`,(0,M.jsx)(r.h1,{id:`dbheader`,children:`DBHeader`}),`
`,(0,M.jsx)(t,{children:`Header defines the top area of a page and provides consistent access to brand identity, primary navigation, and optional actions. It anchors orientation and supports navigation patterns across responsive layouts, with optional meta navigation above the main bar.`}),`
`,(0,M.jsxs)(r.p,{children:[(0,M.jsx)(r.strong,{children:`Status:`}),` Deprecated`]}),`
`,(0,M.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,M.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/header`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,M.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,M.jsx)(`strong`,{children:`Header guidelines`}),(0,M.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,M.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,M.jsxs)(r.p,{children:[`Setup: `,(0,M.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,M.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,M.jsxs)(r.p,{children:[`Open `,(0,M.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,M.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,M.jsx)(i,{of:u}),`
`,(0,M.jsx)(i,{of:l}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,M.jsx)(r.h3,{id:`custom-header`,children:`Custom Header`}),`
`,(0,M.jsx)(i,{of:f}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-custom-header--docs`,children:`Open the Custom Header examples`})}),`
`,(0,M.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,M.jsx)(i,{of:h}),`
`,(0,M.jsx)(i,{of:g}),`
`,(0,M.jsx)(i,{of:m}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-density--docs`,children:`Open the Density examples`})}),`
`,(0,M.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,M.jsx)(i,{of:x}),`
`,(0,M.jsx)(i,{of:_}),`
`,(0,M.jsx)(i,{of:v}),`
`,(0,M.jsx)(i,{of:b}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,M.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,M.jsx)(i,{of:T}),`
`,(0,M.jsx)(i,{of:w}),`
`,(0,M.jsx)(i,{of:C}),`
`,(0,M.jsx)(r.p,{children:(0,M.jsx)(r.a,{href:`?path=/docs/components-dbheader-width--docs`,children:`Open the Width examples`})}),`
`,(0,M.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,M.jsx)(t,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `force-mobile` | `boolean \\| string` | Forces the header to use mobile layout for desktop as well. You should only use this setting if you really can\'t provide a smaller navigation. Overwrite size of the drawer with \'--db-drawer-max-width: xxx\' |\n| `drawer-open` | `boolean \\| string` | Open/closes the drawer for mobile header or if `forceMobile` is true. |\n| `width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |\n| `burger-menu-label` | `string` | Sets the accessible label for the burger menu button of the mobile control panel. |\n| `show-drawer-header-slot` | `string \\| boolean` | Disables the default drawer header and enables you to pass in a custom DBDrawerHeader |\n| `drawer-header-text` | `string` | Text to pass in a headline for the drawer header. |\n| `close-button-text` | `string` | The closeButtonText attribute changes the text inside the close button. |\n| `close-button-id` | `string` | The closeButtonId attribute changes the id inside the close button. |'}),`
`,(0,M.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,M.jsx)(t,{children:O.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,M.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,M.jsxs)(r.ul,{children:[`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/header`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,M.jsxs)(r.li,{children:[`npm: `,(0,M.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/header`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,M.jsx)(r.li,{children:(0,M.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function j(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=a(),s(),r(),E(),c(),d(),p(),y(),S(),k()})))()}N();export{j as default};