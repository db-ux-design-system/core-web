import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CXIBAG00.js";import{s as o}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as s,r as c}from"./react-DITjJg24.js";import{a as l,n as u,r as d,t as f}from"./density.example.stories-mZlPtoCo.js";import{i as p,n as m,t as h}from"./disabled.example.stories-Jbag8nyH.js";import{i as g,n as _,t as v}from"./form-attributes.example.stories-DGEUQhqm.js";import{n as y,t as b}from"./interaction.example.stories-DBtKcQC_.js";import{i as x,n as S,r as C,t as w}from"./multi-line-text.example.stories-XCcpygzk.js";import{n as T,r as E,t as D}from"./no-text.example.stories-BezI1sUP.js";import{n as O,r as k,t as A}from"./show-icon-leading.example.stories-B7GBLuXU.js";import{n as j,r as M,t as N}from"./show-icon-trailing.example.stories-CNDiXn71.js";import{n as ee,r as P,t as F}from"./size.example.stories-BLmvYQcB.js";import{a as I,i as L,n as R,r as z,t as B}from"./variant.example.stories-B4vxDRHr.js";import{n as V,r as H,t as U}from"./width.example.stories-DhTxRGRe.js";import{n as W,t as G}from"./button.overview.stories-C8cwIrgz.js";var K;function q(){return(q=e((()=>{K="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text stays in the markup as the accessible name. Never leave it empty.\n\nDesign rules for accessibility, such as the minimum target size and tooltips for icon-only buttons, are in the [guidelines on the Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).\n"})))()}var J;function Y(){return(Y=e((()=>{J="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function X(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(r.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,Q.jsx)(r.p,{children:`Buttons initiate actions and confirm decisions.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2024-04-22)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(r.p,{children:`How and when to use the component is documented on the Design System Platform:`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/button`,target:`_blank`,rel:`noopener noreferrer`,style:{maxInlineSize:`32rem`,display:`flex`,flexDirection:`column`,gap:`var(--db-spacing-fixed-xs)`,textDecoration:`none`,color:`inherit`},children:[(0,Q.jsx)(`strong`,{children:`Button guidelines`}),(0,Q.jsx)(`span`,{children:(0,Q.jsx)(r.p,{children:`When to use it, variants, Do and Don’t, design rules for
accessibility.`})}),(0,Q.jsx)(`span`,{children:`Design System Platform ↗`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(a,{of:L}),`
`,(0,Q.jsx)(a,{of:R}),`
`,(0,Q.jsx)(a,{of:z}),`
`,(0,Q.jsx)(a,{of:B}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(a,{of:u}),`
`,(0,Q.jsx)(a,{of:d}),`
`,(0,Q.jsx)(a,{of:f}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(a,{of:h}),`
`,(0,Q.jsx)(a,{of:m}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`form-attributes`,children:`Form Attributes`}),`
`,(0,Q.jsx)(a,{of:_}),`
`,(0,Q.jsx)(a,{of:v}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Open the Form Attributes examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Q.jsx)(a,{of:b}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`multi-line-text`,children:`Multi Line Text`}),`
`,(0,Q.jsx)(a,{of:w}),`
`,(0,Q.jsx)(a,{of:S}),`
`,(0,Q.jsx)(a,{of:C}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Open the Multi Line Text examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Q.jsx)(a,{of:D}),`
`,(0,Q.jsx)(a,{of:T}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-no-text--docs`,children:`Open the No Text examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-leading`,children:`Show Icon Leading`}),`
`,(0,Q.jsx)(a,{of:A}),`
`,(0,Q.jsx)(a,{of:O}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Open the Show Icon Leading examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-trailing`,children:`Show Icon Trailing`}),`
`,(0,Q.jsx)(a,{of:N}),`
`,(0,Q.jsx)(a,{of:j}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Open the Show Icon Trailing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`size`,children:`Size`}),`
`,(0,Q.jsx)(a,{of:F}),`
`,(0,Q.jsx)(a,{of:ee}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-size--docs`,children:`Open the Size examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,Q.jsx)(a,{of:U}),`
`,(0,Q.jsx)(a,{of:V}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbbutton-width--docs`,children:`Open the Width examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(i,{of:G}),`
`,`
`,(0,Q.jsx)(t,{children:K}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,Q.jsx)(t,{children:J.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Z(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(X,{...e})}):X(e)}var Q;function $(){return($=e((()=>{Q=o(),c(),r(),W(),I(),l(),p(),g(),y(),x(),E(),k(),M(),P(),H(),q(),Y()})))()}$();export{Z as default};