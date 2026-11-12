import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-DNJxahoj.js";import{t as ee}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as te}from"./react-DITjJg24.js";import{n as ne,t as re}from"./notification.overview.stories-9v7sxCHp.js";import{i as ie,n as ae,r as o,t as s}from"./variant.example.stories-f1WI7qQE.js";import{i as c,n as l,t as u}from"./closeable.example.stories-CgwEuIG3.js";import{a as d,i as f,n as p,r as m}from"./density.example.stories-Dksqj2WE.js";import{a as h,c as g,i as _,n as v,o as y,r as b,s as x,t as S,u as C}from"./examples-variant-docked.example.stories-C7r3mv3Z.js";import{a as w,c as T,d as E,f as D,h as O,i as k,l as A,n as j,o as M,p as N,r as P,s as F,t as I,u as L}from"./examples-variant-overlay.example.stories-DTa_2y8E.js";import{a as R,c as z,i as B,n as V,o as oe,r as H,s as U,t as W,u as G}from"./examples-variant-standalone.example.stories-Dt3RkQoK.js";import{n as K,r as q,t as se}from"./link-variant.example.stories-C6-Pw7PO.js";import{a as ce,i as le,n as ue,o as de,r as fe,s as pe,t as me}from"./semantic.example.stories-DF3pERT0.js";import{n as he,r as ge,t as _e}from"./show-headline.example.stories-C6nGu8j3.js";import{n as ve,r as ye,t as be}from"./show-icon.example.stories-BqcipnZs.js";import{n as xe,r as Se,t as Ce}from"./show-timestamp.example.stories-CsEicAE5.js";import{n as we,r as Te,t as J}from"./visual.example.stories-BWWySuAa.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:ne}),`
`,(0,Q.jsx)(r.h1,{id:`dbnotification`,children:`DBNotification`}),`
`,(0,Q.jsx)(i,{children:`Notification communicates a brief message about an event, state change, or system feedback without blocking the user. It should be timely, concise, and clearly indicate intent (info, success, warning, error) with predictable dismissal behavior.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/notification`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Notification guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:s}),`
`,(0,Q.jsx)(n,{of:o}),`
`,(0,Q.jsx)(n,{of:ae}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`closeable`,children:`Closeable`}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-closeable--docs`,children:`Open the Closeable examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantdocked`,children:`Examples - Variant:Docked`}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:_}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-docked--docs`,children:`Open the Examples - Variant:Docked examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantoverlay`,children:`Examples - Variant:Overlay`}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-overlay--docs`,children:`Open the Examples - Variant:Overlay examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantstandalone`,children:`Examples - Variant:Standalone`}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:oe}),`
`,(0,Q.jsx)(n,{of:V}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-standalone--docs`,children:`Open the Examples - Variant:Standalone examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`link-variant`,children:`Link Variant`}),`
`,(0,Q.jsx)(n,{of:se}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-link-variant--docs`,children:`Open the Link Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(n,{of:ue}),`
`,(0,Q.jsx)(n,{of:le}),`
`,(0,Q.jsx)(n,{of:me}),`
`,(0,Q.jsx)(n,{of:fe}),`
`,(0,Q.jsx)(n,{of:ce}),`
`,(0,Q.jsx)(n,{of:de}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-headline`,children:`Show Headline`}),`
`,(0,Q.jsx)(n,{of:_e}),`
`,(0,Q.jsx)(n,{of:he}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-headline--docs`,children:`Open the Show Headline examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(n,{of:be}),`
`,(0,Q.jsx)(n,{of:ve}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-timestamp`,children:`Show Timestamp`}),`
`,(0,Q.jsx)(n,{of:Ce}),`
`,(0,Q.jsx)(n,{of:xe}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-timestamp--docs`,children:`Open the Show Timestamp examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`visual`,children:`Visual`}),`
`,(0,Q.jsx)(n,{of:J}),`
`,(0,Q.jsx)(n,{of:we}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-visual--docs`,children:`Open the Visual examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML the component is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-notification`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `role` | `string` |  |\n| `aria-live` | `"assertive" \\| "polite" \\| "off"` | The arialive attribute will lead to that the screenreader interrupts immediately and reads out the notification if set to "assertive", while it will wait for the user\'s idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) |\n| `data-semantic` | `"adaptive" \\| "neutral" \\| "critical" \\| "informational" \\| "warning" \\| "successful"` | The semantic defines the default variants for most components. |\n| `data-variant` | `"docked" \\| "standalone" \\| "overlay"` | The variant attribute changes the styling of the notification. - The docked notifications are used e.g. between header and main content to show a global alert. - The standalone notifications are used  e.g. inside a form to show an alert for a specific field. - The overlay notifications are used for absolute and floating notifications like snackbars etc. |\n| `data-icon` | `true` \\| `false` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `data-show-icon` | `true` \\| `false` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `data-link-variant` | `"block" \\| "inline"` | The linkVariant will be used if slotLink is set. |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/notification`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/notification`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Ee(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ee(),te(),r(),re(),ie(),c(),f(),C(),O(),G(),q(),pe(),ge(),ye(),Se(),Te(),X()})))()}$();export{Ee as default};