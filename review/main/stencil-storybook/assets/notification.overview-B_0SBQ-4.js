import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-qpT00qvI.js";import{s as ee}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as a,r as te}from"./react-DITjJg24.js";import{i as ne,n as re,t as ie}from"./closeable.example.stories-P3eWoypk.js";import{a as ae,i as o,n as s,r as c}from"./density.example.stories-BzS1vYBg.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./examples-variant-docked.example.stories-CgotK0T1.js";import{a as v,c as y,d as b,f as x,h as S,i as C,l as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j}from"./examples-variant-overlay.example.stories-D8getneg.js";import{a as M,c as N,i as P,n as F,o as I,r as L,s as R,t as z,u as B}from"./examples-variant-standalone.example.stories-DvZhkzuO.js";import{n as V,r as oe,t as H}from"./link-variant.example.stories-BeFDT9O2.js";import{a as U,i as W,n as G,o as K,r as q,s as se,t as ce}from"./semantic.example.stories-ztGjtgDP.js";import{n as le,r as ue,t as de}from"./show-headline.example.stories-YvEVO4aO.js";import{n as fe,r as pe,t as me}from"./show-icon.example.stories-yN_TGh4g.js";import{n as he,r as ge,t as _e}from"./show-timestamp.example.stories-BUVvf2by.js";import{i as ve,n as ye,r as be,t as xe}from"./variant.example.stories-BcRJNqBZ.js";import{n as Se,r as Ce,t as we}from"./visual.example.stories-BJCi4hS_.js";import{n as Te,t as J}from"./notification.overview.stories-C965FVCP.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:Te}),`
`,(0,Q.jsx)(r.h1,{id:`dbnotification`,children:`DBNotification`}),`
`,(0,Q.jsx)(i,{children:`Notification communicates a brief message about an event, state change, or system feedback without blocking the user. It should be timely, concise, and clearly indicate intent (info, success, warning, error) with predictable dismissal behavior.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/notification`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Notification guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:xe}),`
`,(0,Q.jsx)(n,{of:be}),`
`,(0,Q.jsx)(n,{of:ye}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`closeable`,children:`Closeable`}),`
`,(0,Q.jsx)(n,{of:ie}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-closeable--docs`,children:`Open the Closeable examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(n,{of:ae}),`
`,(0,Q.jsx)(n,{of:s}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantdocked`,children:`Examples - Variant:Docked`}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(n,{of:f}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-docked--docs`,children:`Open the Examples - Variant:Docked examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantoverlay`,children:`Examples - Variant:Overlay`}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-overlay--docs`,children:`Open the Examples - Variant:Overlay examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples---variantstandalone`,children:`Examples - Variant:Standalone`}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-examples-variant-standalone--docs`,children:`Open the Examples - Variant:Standalone examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`link-variant`,children:`Link Variant`}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:V}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-link-variant--docs`,children:`Open the Link Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:ce}),`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-headline`,children:`Show Headline`}),`
`,(0,Q.jsx)(n,{of:de}),`
`,(0,Q.jsx)(n,{of:le}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-headline--docs`,children:`Open the Show Headline examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(n,{of:me}),`
`,(0,Q.jsx)(n,{of:fe}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-timestamp`,children:`Show Timestamp`}),`
`,(0,Q.jsx)(n,{of:_e}),`
`,(0,Q.jsx)(n,{of:he}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-show-timestamp--docs`,children:`Open the Show Timestamp examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`visual`,children:`Visual`}),`
`,(0,Q.jsx)(n,{of:we}),`
`,(0,Q.jsx)(n,{of:Se}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbnotification-visual--docs`,children:`Open the Visual examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `semantic` | `"adaptive" \\| "neutral" \\| "critical" \\| "informational" \\| "warning" \\| "successful"` | The semantic defines the default variants for most components. |\n| `role` | `string` | Sets aria role based on [`aria-role`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles). |\n| `aria-live` | `"assertive" \\| "polite" \\| "off"` | The arialive attribute will lead to that the screenreader interrupts immediately and reads out the notification if set to "assertive", while it will wait for the user\'s idleness when set to "polite", compare to [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) |\n| `variant` | `"docked" \\| "standalone" \\| "overlay"` | The variant attribute changes the styling of the notification. - The docked notifications are used e.g. between header and main content to show a global alert. - The standalone notifications are used  e.g. inside a form to show an alert for a specific field. - The overlay notifications are used for absolute and floating notifications like snackbars etc. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `link-variant` | `"block" \\| "inline"` | The linkVariant will be used if slotLink is set. |\n| `headline` | `string \\| any` | The headline attribute changes the text of the bold headline. |\n| `show-headline` | `boolean \\| string` | Enables or disables the visibility of the headline. |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |\n| `timestamp` | `string` | The timestamp attribute can be set for overlay notifications |\n| `show-timestamp` | `boolean \\| string` | Enables or disables the visibility of the timestamp. |\n| `timestamp-datetime` | `string` | Machine-readable value for the `datetime` attribute of the rendered `&#60;time&#62;` element. Accepts any valid HTML datetime string: - Absolute moment: ISO 8601 date/time, e.g. `"2024-06-01T12:30:00"` - Duration: ISO 8601 duration, e.g. `"PT5M"` (5 minutes), `"PT1H30M"` (1 h 30 min) When omitted the `datetime` attribute is not rendered and assistive technologies fall back to the visible `timestamp` text. |\n| `closeable` | `boolean \\| string` | The closeable attribute shows/hides the close button on the top right. |\n| `close-button-id` | `string` | The closeButtonId attribute changes the id inside the close button. |\n| `close-button-text` | `string` | The closeButtonText attribute changes the text inside the close button. |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/notification`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/notification`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Ee(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ee(),te(),r(),J(),ve(),ne(),o(),_(),S(),B(),oe(),se(),ue(),pe(),ge(),Ce(),X()})))()}$();export{Ee as default};