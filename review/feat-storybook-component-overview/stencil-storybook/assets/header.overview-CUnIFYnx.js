import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-Cgbw3SbP.js";import{s as a}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as o,r as s}from"./react-DITjJg24.js";import{i as c,n as l,t as u}from"./behavior.example.stories-C6sA12FB.js";import{r as d,t as f}from"./custom-header.example.stories-GZ8Lnrcd.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-RHMVAufJ.js";import{i as _,n as v,o as y,r as b,t as x}from"./examples.example.stories-CVzOypTm.js";import{n as S,t as C}from"./interaction.example.stories-hV4BbjU7.js";import{i as w,n as T,r as E,t as D}from"./width.example.stories-Dr2H-eaR.js";import{n as O,t as k}from"./header.overview.stories-C2FrQSEk.js";var A;function j(){return(j=e((()=>{A=`## General

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
`})))()}function M(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[`
`,(0,P.jsx)(t,{of:k}),`
`,(0,P.jsx)(r.h1,{id:`dbheader`,children:`DBHeader`}),`
`,(0,P.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,P.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,P.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/header`,rel:`nofollow`,children:`Header guidelines`}),` on the Design System Platform.`]}),`
`,(0,P.jsxs)(r.p,{children:[`Setup: `,(0,P.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,P.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,P.jsxs)(r.p,{children:[`Open `,(0,P.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,P.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,P.jsx)(n,{of:u}),`
`,(0,P.jsx)(n,{of:l}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,P.jsx)(r.h3,{id:`custom-header`,children:`Custom Header`}),`
`,(0,P.jsx)(n,{of:f}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-custom-header--docs`,children:`Open the Custom Header examples`})}),`
`,(0,P.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,P.jsx)(n,{of:h}),`
`,(0,P.jsx)(n,{of:g}),`
`,(0,P.jsx)(n,{of:m}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-density--docs`,children:`Open the Density examples`})}),`
`,(0,P.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,P.jsx)(n,{of:x}),`
`,(0,P.jsx)(n,{of:_}),`
`,(0,P.jsx)(n,{of:v}),`
`,(0,P.jsx)(n,{of:b}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,P.jsx)(r.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,P.jsx)(n,{of:C}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,P.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,P.jsx)(n,{of:D}),`
`,(0,P.jsx)(n,{of:E}),`
`,(0,P.jsx)(n,{of:T}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbheader-width--docs`,children:`Open the Width examples`})}),`
`,(0,P.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,P.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `force-mobile` | `boolean \\| string` | Forces the header to use mobile layout for desktop as well. You should only use this setting if you really can\'t provide a smaller navigation. Overwrite size of the drawer with \'--db-drawer-max-width: xxx\' |\n| `drawer-open` | `boolean \\| string` | Open/closes the drawer for mobile header or if `forceMobile` is true. |\n| `width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |\n| `burger-menu-label` | `string` | Sets the accessible label for the burger menu button of the mobile control panel. |\n| `show-drawer-header-slot` | `string \\| boolean` | Disables the default drawer header and enables you to pass in a custom DBDrawerHeader |\n| `drawer-header-text` | `string` | Text to pass in a headline for the drawer header. |\n| `close-button-text` | `string` | The closeButtonText attribute changes the text inside the close button. |\n| `close-button-id` | `string` | The closeButtonId attribute changes the id inside the close button. |'}),`
`,(0,P.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,P.jsx)(i,{children:A.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,P.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,P.jsxs)(r.ul,{children:[`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/header`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,P.jsxs)(r.li,{children:[`npm: `,(0,P.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/header`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function N(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=a(),s(),r(),O(),c(),d(),p(),y(),S(),w(),j()})))()}F();export{N as default};