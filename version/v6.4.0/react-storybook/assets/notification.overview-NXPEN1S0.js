import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as r,r as i}from"./blocks-D9LEVnXE.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as te}from"./react-DITjJg24.js";import{i as ne,n as re,t as ie}from"./closeable.example.stories-CgwEuIG3.js";import{a as ae,i as s,n as c,r as l}from"./density.example.stories-Dksqj2WE.js";import{a as u,c as d,i as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./examples-variant-docked.example.stories-C7r3mv3Z.js";import{a as y,c as b,d as x,f as S,h as C,i as w,l as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M}from"./examples-variant-overlay.example.stories-DTa_2y8E.js";import{a as N,c as P,i as F,n as I,o as L,r as R,s as z,t as B,u as V}from"./examples-variant-standalone.example.stories-Dt3RkQoK.js";import{n as oe,r as H,t as U}from"./link-variant.example.stories-C6-Pw7PO.js";import{a as W,i as G,n as K,o as q,r as se,s as ce,t as le}from"./semantic.example.stories-DF3pERT0.js";import{n as ue,r as de,t as fe}from"./show-headline.example.stories-C6nGu8j3.js";import{n as pe,r as me,t as he}from"./show-icon.example.stories-BqcipnZs.js";import{n as ge,r as _e,t as ve}from"./show-timestamp.example.stories-CsEicAE5.js";import{i as ye,n as be,r as xe,t as Se}from"./variant.example.stories-SUb8nm1k.js";import{n as Ce,r as we,t as Te}from"./visual.example.stories-BWWySuAa.js";import{n as J,t as Ee}from"./notification.overview.stories-BzvfebzR.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let n={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:J}),`
`,(0,Q.jsx)(n.h1,{id:`dbnotification`,children:`DBNotification`}),`
`,(0,Q.jsx)(t,{children:`Notification communicates a brief message about an event, state change, or system feedback without blocking the user. It should be timely, concise, and clearly indicate intent (info, success, warning, error) with predictable dismissal behavior.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(n.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/notification`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Notification guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(n.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(i,{of:Se}),`
`,(0,Q.jsx)(i,{of:xe}),`
`,(0,Q.jsx)(i,{of:be}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`closeable`,children:`Closeable`}),`
`,(0,Q.jsx)(i,{of:ie}),`
`,(0,Q.jsx)(i,{of:re}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-closeable--docs`,children:`Open the Closeable examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(i,{of:l}),`
`,(0,Q.jsx)(i,{of:ae}),`
`,(0,Q.jsx)(i,{of:c}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples---variantdocked`,children:`Examples - Variant:Docked`}),`
`,(0,Q.jsx)(i,{of:_}),`
`,(0,Q.jsx)(i,{of:f}),`
`,(0,Q.jsx)(i,{of:m}),`
`,(0,Q.jsx)(i,{of:p}),`
`,(0,Q.jsx)(i,{of:g}),`
`,(0,Q.jsx)(i,{of:d}),`
`,(0,Q.jsx)(i,{of:h}),`
`,(0,Q.jsx)(i,{of:u}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-examples-variant-docked--docs`,children:`Open the Examples - Variant:Docked examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples---variantoverlay`,children:`Examples - Variant:Overlay`}),`
`,(0,Q.jsx)(i,{of:j}),`
`,(0,Q.jsx)(i,{of:y}),`
`,(0,Q.jsx)(i,{of:b}),`
`,(0,Q.jsx)(i,{of:E}),`
`,(0,Q.jsx)(i,{of:x}),`
`,(0,Q.jsx)(i,{of:T}),`
`,(0,Q.jsx)(i,{of:M}),`
`,(0,Q.jsx)(i,{of:k}),`
`,(0,Q.jsx)(i,{of:D}),`
`,(0,Q.jsx)(i,{of:S}),`
`,(0,Q.jsx)(i,{of:O}),`
`,(0,Q.jsx)(i,{of:w}),`
`,(0,Q.jsx)(i,{of:A}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-examples-variant-overlay--docs`,children:`Open the Examples - Variant:Overlay examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples---variantstandalone`,children:`Examples - Variant:Standalone`}),`
`,(0,Q.jsx)(i,{of:B}),`
`,(0,Q.jsx)(i,{of:F}),`
`,(0,Q.jsx)(i,{of:L}),`
`,(0,Q.jsx)(i,{of:I}),`
`,(0,Q.jsx)(i,{of:z}),`
`,(0,Q.jsx)(i,{of:P}),`
`,(0,Q.jsx)(i,{of:R}),`
`,(0,Q.jsx)(i,{of:N}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-examples-variant-standalone--docs`,children:`Open the Examples - Variant:Standalone examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`link-variant`,children:`Link Variant`}),`
`,(0,Q.jsx)(i,{of:U}),`
`,(0,Q.jsx)(i,{of:oe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-link-variant--docs`,children:`Open the Link Variant examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(i,{of:K}),`
`,(0,Q.jsx)(i,{of:G}),`
`,(0,Q.jsx)(i,{of:le}),`
`,(0,Q.jsx)(i,{of:se}),`
`,(0,Q.jsx)(i,{of:W}),`
`,(0,Q.jsx)(i,{of:q}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-headline`,children:`Show Headline`}),`
`,(0,Q.jsx)(i,{of:fe}),`
`,(0,Q.jsx)(i,{of:ue}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-show-headline--docs`,children:`Open the Show Headline examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(i,{of:he}),`
`,(0,Q.jsx)(i,{of:pe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-timestamp`,children:`Show Timestamp`}),`
`,(0,Q.jsx)(i,{of:ve}),`
`,(0,Q.jsx)(i,{of:ge}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-show-timestamp--docs`,children:`Open the Show Timestamp examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`visual`,children:`Visual`}),`
`,(0,Q.jsx)(i,{of:Te}),`
`,(0,Q.jsx)(i,{of:Ce}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbnotification-visual--docs`,children:`Open the Visual examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(r,{of:J}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/notification`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/notification`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function De(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),te(),n(),Ee(),ye(),ne(),s(),v(),C(),V(),H(),ce(),de(),me(),_e(),we(),X()})))()}$();export{De as default};