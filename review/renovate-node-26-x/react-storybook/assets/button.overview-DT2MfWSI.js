import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CQpH9jYC.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{i as s,r as c}from"./react-DITjJg24.js";import{a as l,n as u,r as d,t as f}from"./density.example.stories-ph-A5Ngs.js";import{i as p,n as m,t as h}from"./disabled.example.stories-Bs6NWDt6.js";import{i as g,n as _,t as v}from"./form-attributes.example.stories-DNgm0Lf9.js";import{i as y,n as b,r as x,t as S}from"./multi-line-text.example.stories-y5gNDuhQ.js";import{n as C,r as w,t as T}from"./no-text.example.stories-CcwRrTQ1.js";import{n as E,r as D,t as O}from"./show-icon-leading.example.stories-DX5Z1jTi.js";import{n as k,r as A,t as j}from"./show-icon-trailing.example.stories-DoVUWrAe.js";import{n as M,r as N,t as P}from"./size.example.stories-D1wlbSwC.js";import{a as F,i as I,n as L,r as R,t as z}from"./variant.example.stories-DVh2FC_P.js";import{n as B,r as V,t as H}from"./width.example.stories-DsTpYAQ4.js";import{n as U,t as W}from"./button.overview.stories-DKgNSnMD.js";var G;function K(){return(K=e((()=>{G="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text stays in the markup as the accessible name. Never leave it empty.\n\nDesign rules for accessibility, such as the minimum target size and tooltips for icon-only buttons, are in the [guidelines on the Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).\n"})))()}var q;function J(){return(J=e((()=>{q="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function Y(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,Z.jsxs)(Z.Fragment,{children:[`
`,(0,Z.jsx)(n,{of:W}),`
`,(0,Z.jsx)(r.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,Z.jsx)(t,{children:`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.`}),`
`,(0,Z.jsxs)(r.p,{children:[(0,Z.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Z.jsx)(r.strong,{children:`Accessibility review:`}),` done (2024-04-22)`]}),`
`,(0,Z.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Z.jsx)(`div`,{"data-mode":`light`,children:(0,Z.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/button`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Z.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Z.jsx)(`strong`,{children:`Button guidelines`}),(0,Z.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Z.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Z.jsxs)(r.p,{children:[`Setup: `,(0,Z.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Z.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Z.jsxs)(r.p,{children:[`Open `,(0,Z.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Z.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Z.jsx)(a,{of:I}),`
`,(0,Z.jsx)(a,{of:L}),`
`,(0,Z.jsx)(a,{of:R}),`
`,(0,Z.jsx)(a,{of:z}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Z.jsx)(a,{of:u}),`
`,(0,Z.jsx)(a,{of:d}),`
`,(0,Z.jsx)(a,{of:f}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-density--docs`,children:`Open the Density examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Z.jsx)(a,{of:h}),`
`,(0,Z.jsx)(a,{of:m}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`form-attributes`,children:`Form Attributes`}),`
`,(0,Z.jsx)(a,{of:_}),`
`,(0,Z.jsx)(a,{of:v}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Open the Form Attributes examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`multi-line-text`,children:`Multi Line Text`}),`
`,(0,Z.jsx)(a,{of:S}),`
`,(0,Z.jsx)(a,{of:b}),`
`,(0,Z.jsx)(a,{of:x}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Open the Multi Line Text examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Z.jsx)(a,{of:T}),`
`,(0,Z.jsx)(a,{of:C}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-no-text--docs`,children:`Open the No Text examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`show-icon-leading`,children:`Show Icon Leading`}),`
`,(0,Z.jsx)(a,{of:O}),`
`,(0,Z.jsx)(a,{of:E}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Open the Show Icon Leading examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`show-icon-trailing`,children:`Show Icon Trailing`}),`
`,(0,Z.jsx)(a,{of:j}),`
`,(0,Z.jsx)(a,{of:k}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Open the Show Icon Trailing examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`size`,children:`Size`}),`
`,(0,Z.jsx)(a,{of:P}),`
`,(0,Z.jsx)(a,{of:M}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-size--docs`,children:`Open the Size examples`})}),`
`,(0,Z.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,Z.jsx)(a,{of:H}),`
`,(0,Z.jsx)(a,{of:B}),`
`,(0,Z.jsx)(r.p,{children:(0,Z.jsx)(r.a,{href:`?path=/docs/components-dbbutton-width--docs`,children:`Open the Width examples`})}),`
`,(0,Z.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,Z.jsx)(i,{of:W}),`
`,`
`,(0,Z.jsx)(t,{children:G}),`
`,(0,Z.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Z.jsx)(t,{children:q.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Z.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Z.jsxs)(r.ul,{children:[`
`,(0,Z.jsx)(r.li,{children:(0,Z.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Z.jsxs)(r.li,{children:[`npm: `,(0,Z.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Z.jsx)(r.li,{children:(0,Z.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Z.jsx)(r.li,{children:(0,Z.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function X(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,Z.jsx)(t,{...e,children:(0,Z.jsx)(Y,{...e})}):Y(e)}var Z;function Q(){return(Q=e((()=>{Z=o(),c(),r(),U(),F(),l(),p(),g(),y(),w(),D(),A(),N(),V(),K(),J()})))()}Q();export{X as default};