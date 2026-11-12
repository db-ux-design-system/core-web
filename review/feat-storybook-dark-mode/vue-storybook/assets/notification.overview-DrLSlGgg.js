import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as ee,r,u as i}from"./blocks-i6RM7DUH.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as te}from"./react-DITjJg24.js";import{i as ne,n as re,t as ie}from"./closeable.example.stories-BU5_CjVK.js";import{a as ae,i as s,n as c,r as l}from"./density.example.stories-YtLYg4VO.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./examples-variant-docked.example.stories-C6Wrz6No.js";import{a as y,c as b,d as x,f as S,h as C,i as w,l as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M}from"./examples-variant-overlay.example.stories-D0eUWw_R.js";import{a as N,c as P,i as F,n as I,o as L,r as R,s as z,t as B,u as V}from"./examples-variant-standalone.example.stories-Dn8hvm0_.js";import{n as oe,r as H,t as U}from"./link-variant.example.stories-KLdsxIjg.js";import{a as W,i as G,n as K,o as q,r as se,s as ce,t as le}from"./semantic.example.stories-DChGGxZ6.js";import{n as ue,r as de,t as fe}from"./show-headline.example.stories-PEh0G40k.js";import{n as pe,r as me,t as he}from"./show-icon.example.stories-BuXRRtcB.js";import{n as ge,r as _e,t as ve}from"./show-timestamp.example.stories-Ct-RudQE.js";import{i as ye,n as be,r as xe,t as Se}from"./variant.example.stories-BsGOKEEh.js";import{n as Ce,r as we,t as Te}from"./visual.example.stories-B8DuP6iT.js";import{n as J,t as Ee}from"./notification.overview.stories-DUbqLG8-.js";var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before             | Status | After             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | :----: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \`elm-notification\` |   🔁   | \`db-notification\` | The old notification component has been split into 2 different components [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) and [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) for more information (when and how to use it). |

### variant (layout)

The \`variant\` prop now controls the layout only. Status colours moved to the \`semantic\` prop (see below).

| Before | Status | After        | Description                                                       |
| ------ | :----: | ------------ | ----------------------------------------------------------------- |
|        |   🆕   | \`docked\`     | Docked notification, e.g. between header and main content.        |
|        |   🆕   | \`standalone\` | Standalone notification, e.g. inside a form for a specific field. |
|        |   🆕   | \`overlay\`    | Absolute, floating notification (snackbar style).                 |

### type ➡ semantic

Status colours are set via the \`semantic\` prop, not via \`variant\`.

| Before        | Status | After                      | Description                                              |
| ------------- | :----: | -------------------------- | -------------------------------------------------------- |
|               |   🆕   | \`semantic="adaptive"\`      | Default: change colors based on background               |
| \`error\`       |   🔁   | \`semantic="critical"\`      | 'Red' colored notification to show error messages        |
| \`informative\` |   🔁   | \`semantic="informational"\` | 'Blue' colored notification to show information messages |
| \`warning\`     |   🔁   | \`semantic="warning"\`       | 'Yellow' colored notification to show warning messages   |
| \`success\`     |   🔁   | \`semantic="successful"\`    | 'Green' colored notification to show success messages    |
`})))()}function Z(e){let t={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(i,{of:J}),`
`,(0,Q.jsx)(t.h1,{id:`dbnotification`,children:`DBNotification`}),`
`,(0,Q.jsx)(n,{children:`Notification communicates a brief message about an event, state change, or system feedback without blocking the user. It should be timely, concise, and clearly indicate intent (info, success, warning, error) with predictable dismissal behavior.`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(t.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/notification`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`Notification guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(t.p,{children:[`Setup: `,(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(t.p,{children:[`Open `,(0,Q.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(t.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(r,{of:Se}),`
`,(0,Q.jsx)(r,{of:xe}),`
`,(0,Q.jsx)(r,{of:be}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`closeable`,children:`Closeable`}),`
`,(0,Q.jsx)(r,{of:ie}),`
`,(0,Q.jsx)(r,{of:re}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-closeable--docs`,children:`Open the Closeable examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:l}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples---variantdocked`,children:`Examples - Variant:Docked`}),`
`,(0,Q.jsx)(r,{of:_}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(r,{of:p}),`
`,(0,Q.jsx)(r,{of:g}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(r,{of:h}),`
`,(0,Q.jsx)(r,{of:u}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-examples-variant-docked--docs`,children:`Open the Examples - Variant:Docked examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples---variantoverlay`,children:`Examples - Variant:Overlay`}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(r,{of:y}),`
`,(0,Q.jsx)(r,{of:b}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:M}),`
`,(0,Q.jsx)(r,{of:k}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:O}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-examples-variant-overlay--docs`,children:`Open the Examples - Variant:Overlay examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples---variantstandalone`,children:`Examples - Variant:Standalone`}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(r,{of:P}),`
`,(0,Q.jsx)(r,{of:R}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-examples-variant-standalone--docs`,children:`Open the Examples - Variant:Standalone examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`link-variant`,children:`Link Variant`}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:oe}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-link-variant--docs`,children:`Open the Link Variant examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(r,{of:W}),`
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-headline`,children:`Show Headline`}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-show-headline--docs`,children:`Open the Show Headline examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-timestamp`,children:`Show Timestamp`}),`
`,(0,Q.jsx)(r,{of:ve}),`
`,(0,Q.jsx)(r,{of:ge}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-show-timestamp--docs`,children:`Open the Show Timestamp examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`visual`,children:`Visual`}),`
`,(0,Q.jsx)(r,{of:Te}),`
`,(0,Q.jsx)(r,{of:Ce}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbnotification-visual--docs`,children:`Open the Visual examples`})}),`
`,(0,Q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(ee,{of:J}),`
`,(0,Q.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(n,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/notification`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(t.li,{children:[`npm: `,(0,Q.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/notification`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function De(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),te(),t(),Ee(),ye(),ne(),s(),v(),C(),V(),H(),ce(),de(),me(),_e(),we(),X()})))()}$();export{De as default};