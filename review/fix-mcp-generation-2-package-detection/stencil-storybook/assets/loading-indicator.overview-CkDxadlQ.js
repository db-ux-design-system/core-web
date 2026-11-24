import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as r}from"./blocks-DP3YOvOl.js";import{s as te}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i,r as ne}from"./react-DITjJg24.js";import{C as re,E as ie,S as ae,_ as oe,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,w as C,x as w,y as T}from"./button.example.stories-BmJM4yUP.js";import{a as E,c as D,d as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F}from"./delay.example.stories-CkVKA0rO.js";import{a as I,c as L,d as R,i as z,l as B,n as V,o as H,r as U,s as W,t as G}from"./density.example.stories-DpZ6Qvu1.js";import{a as K,c as q,i as se,n as ce,o as le,r as ue,t as de}from"./indeterminate.example.stories-CmNDJOmK.js";import{a as fe,i as pe,n as me,r as he,t as ge}from"./overlay.example.stories-DDCQuvVv.js";import{a as _e,i as ve,n as ye,t as be}from"./role.example.stories-BuQclm4z.js";import{a as xe,i as Se,n as Ce,o as J,r as we,s as Te,t as Ee}from"./show-label.example.stories-BrXavPzb.js";import{a as De,i as Oe,n as ke,o as Ae,r as je,s as Me,t as Ne}from"./show-progress-text.example.stories-DdT7Myci.js";import{a as Pe,c as Fe,i as Ie,l as Le,n as Re,o as ze,r as Be,s as Ve,t as He,u as Ue}from"./size.example.stories-Cf-cHat5.js";import{a as We,c as Ge,d as Ke,f as qe,i as Je,l as Ye,n as Xe,o as Ze,p as Qe,r as $e,s as et,t as tt,u as nt}from"./state.determinate.example.stories-Cb0brova.js";import{a as rt,c as it,d as at,f as ot,i as st,l as ct,n as lt,o as ut,p as dt,r as ft,s as pt,t as mt,u as ht}from"./state.example.stories-C_spkSEU.js";import{n as gt,t as _t}from"./timeout.example.stories-DLIcm3r0.js";import{n as vt,t as yt}from"./loading-indicator.overview.stories-DOg1tebf.js";var Y;function X(){return(X=e((()=>{Y='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before                 | Status | After                  | Description                                                           |\n| ---------------------- | :----: | ---------------------- | --------------------------------------------------------------------- |\n| `elm-loadingindicator` |   🔁   | `db-loading-indicator` | Use `variant="circular"` with `indeterminate` for the former spinner. |\n| `elm-progress`         |   🔁   | `db-loading-indicator` | Use `variant="bar"` with `value` and `max` for determinate progress.  |\n\n### announcement\n\nGeneration 2 rendered the spinner as an SVG and needed a separate status text, for example a paragraph with `role="status"`.\n\nThe component is a live region and announces its `label`. Which pattern fits depends on whether the indicator stays in the page:\n\n| Before                        | Status | After                | Description                                                                                                                                                                                                                                                                                                                                                                                                           |\n| ----------------------------- | :----: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| separate `role="status"` text |   ❌   | `label`              | The indicator stays rendered and changes its `state`, or sits inside a button. Remove the separate text, otherwise it is announced twice.                                                                                                                                                                                                                                                                             |\n| separate `role="status"` text |   🔁   | keep the status text | The indicator is only rendered while loading. A live region that appears together with its text is not announced reliably, and an inactive indicator still shows its track and keeps its label. Keep a `role="status"` element that is always rendered. While loading, place the indicator inside it with `aria-hidden="true"` and a hidden label (`showLabel` set to `false`), and write the status text next to it. |\n\nKeep behavior that the spinner did not provide itself, for example a disabled submit button that prevents a second search.\n'})))()}function Z(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:vt}),`
`,(0,Q.jsx)(n.h1,{id:`dbloadingindicator`,children:`DBLoadingIndicator`}),`
`,(0,Q.jsx)(t,{children:`The Loading Indicator provides visual feedback that content or a process is loading. It is available as a circular indicator and as a bar, each in a determinate and an indeterminate variant.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Beta`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`LoadingIndicator guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(n.h3,{id:`delay`,children:`Delay`}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(r,{of:P}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:M}),`
`,(0,Q.jsx)(r,{of:k}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-delay--docs`,children:`Open the Delay examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:W}),`
`,(0,Q.jsx)(r,{of:V}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:H}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples-button`,children:`Examples: Button`}),`
`,(0,Q.jsx)(r,{of:o}),`
`,(0,Q.jsx)(r,{of:oe}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:re}),`
`,(0,Q.jsx)(r,{of:l}),`
`,(0,Q.jsx)(r,{of:p}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(r,{of:u}),`
`,(0,Q.jsx)(r,{of:_}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(r,{of:b}),`
`,(0,Q.jsx)(r,{of:h}),`
`,(0,Q.jsx)(r,{of:v}),`
`,(0,Q.jsx)(r,{of:s}),`
`,(0,Q.jsx)(r,{of:a}),`
`,(0,Q.jsx)(r,{of:g}),`
`,(0,Q.jsx)(r,{of:y}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-examples-button--docs`,children:`Open the Examples: Button examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`examples-timeout`,children:`Examples: Timeout`}),`
`,(0,Q.jsx)(r,{of:_t}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-examples-timeout--docs`,children:`Open the Examples: Timeout examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`indeterminate`,children:`Indeterminate`}),`
`,(0,Q.jsx)(r,{of:ce}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-indeterminate--docs`,children:`Open the Indeterminate examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`overlay`,children:`Overlay`}),`
`,(0,Q.jsx)(r,{of:me}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(r,{of:ge}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-overlay--docs`,children:`Open the Overlay examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`role`,children:`Role`}),`
`,(0,Q.jsx)(r,{of:be}),`
`,(0,Q.jsx)(r,{of:_e}),`
`,(0,Q.jsx)(r,{of:ve}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-role--docs`,children:`Open the Role examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(r,{of:Ce}),`
`,(0,Q.jsx)(r,{of:we}),`
`,(0,Q.jsx)(r,{of:Ee}),`
`,(0,Q.jsx)(r,{of:xe}),`
`,(0,Q.jsx)(r,{of:J}),`
`,(0,Q.jsx)(r,{of:Se}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-progress-text`,children:`Show Progress Text`}),`
`,(0,Q.jsx)(r,{of:ke}),`
`,(0,Q.jsx)(r,{of:je}),`
`,(0,Q.jsx)(r,{of:Ne}),`
`,(0,Q.jsx)(r,{of:De}),`
`,(0,Q.jsx)(r,{of:Ae}),`
`,(0,Q.jsx)(r,{of:Oe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-show-progress-text--docs`,children:`Open the Show Progress Text examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,Q.jsx)(r,{of:Fe}),`
`,(0,Q.jsx)(r,{of:Le}),`
`,(0,Q.jsx)(r,{of:Ve}),`
`,(0,Q.jsx)(r,{of:Re}),`
`,(0,Q.jsx)(r,{of:Be}),`
`,(0,Q.jsx)(r,{of:He}),`
`,(0,Q.jsx)(r,{of:Pe}),`
`,(0,Q.jsx)(r,{of:ze}),`
`,(0,Q.jsx)(r,{of:Ie}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-size--docs`,children:`Open the Size examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(r,{of:it}),`
`,(0,Q.jsx)(r,{of:ct}),`
`,(0,Q.jsx)(r,{of:pt}),`
`,(0,Q.jsx)(r,{of:lt}),`
`,(0,Q.jsx)(r,{of:ft}),`
`,(0,Q.jsx)(r,{of:mt}),`
`,(0,Q.jsx)(r,{of:at}),`
`,(0,Q.jsx)(r,{of:ot}),`
`,(0,Q.jsx)(r,{of:ht}),`
`,(0,Q.jsx)(r,{of:rt}),`
`,(0,Q.jsx)(r,{of:ut}),`
`,(0,Q.jsx)(r,{of:st}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`state-determinate`,children:`State: Determinate`}),`
`,(0,Q.jsx)(r,{of:Ge}),`
`,(0,Q.jsx)(r,{of:Ye}),`
`,(0,Q.jsx)(r,{of:et}),`
`,(0,Q.jsx)(r,{of:Xe}),`
`,(0,Q.jsx)(r,{of:$e}),`
`,(0,Q.jsx)(r,{of:tt}),`
`,(0,Q.jsx)(r,{of:Ke}),`
`,(0,Q.jsx)(r,{of:qe}),`
`,(0,Q.jsx)(r,{of:nt}),`
`,(0,Q.jsx)(r,{of:We}),`
`,(0,Q.jsx)(r,{of:Ze}),`
`,(0,Q.jsx)(r,{of:Je}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbloadingindicator-state-determinate--docs`,children:`Open the State: Determinate examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(t,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `state` | `"inactive" \\| "active" \\| "successful" \\| "critical" \\| string` | The current loading state. Controls the animation and the announced live-region role. |\n| `auto-disable` | `boolean \\| string` | Disable the parent component (e.g. a DBButton) when loading indicator is inside it |\n| `overlay` | `boolean \\| string` | If enabled the loading indicator is rendered as an overlay covering its positioned parent. |\n| `timeout-active-duration` | `number \\| string` | The timeoutActiveDuration attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event when the state is "active". Default is 5000ms. |\n| `timeout-duration` | `number \\| string` | The timeoutDuration attribute specifies the time in milliseconds before the loading indicator triggers the onTimeout event. Default is 2000ms. |\n| `indeterminate` | `boolean \\| string` | If enabled the loading indicator shows an ongoing animation without a known completion (spinner/indeterminate progress). Set to false to show a determinate value via value/max. |\n| `value` | `string \\| number` | The current value of the determinate progress (used together with max). |\n| `max` | `number \\| string` | The maximum value of the determinate progress (used together with value). Defaults to 100. |\n| `role` | `\'alert\' \\| \'status\'` | Overrides the automatically derived ARIA live-region role. By default the role is derived from the state ("alert" for critical, otherwise "status"). |\n| `size` | `"small" \\| "medium" \\| \'large\'` | The size attribute changes the font-size and other related sizes of the component. |\n| `variant` | `"bar" \\| "circular"` | The variant changes the visual appearance of the loading indicator between a circular spinner and a horizontal bar. |\n| `orientation` | `"horizontal" \\| "vertical"` | Change the orientation. Defaults to horizontal. |\n| `delay` | `"none" \\| "slow" \\| "fast"` | Add a delay before showing the component |\n| `show-label` | `boolean \\| string` | Enables/disables the visibility of the label |\n| `label` | `string` | The label associated with the progress element. Alternative to passing children. |\n| `progress-text` | `string` | The text describing the current progress (e.g. "42 of 100"), shown next to the indicator. |\n| `show-progress-text` | `boolean \\| string` | Enables/disables the visibility of the progressText |'}),`
`,(0,Q.jsx)(n.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,Q.jsxs)(n.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,Q.jsx)(n.code,{children:`style`}),` attribute.`]}),`
`,(0,Q.jsx)(t,{children:"| Property | Description | Default |\n| --- | --- | --- |\n| `--db-loading-indicator-percentage` | Progress of a determinate indicator as a fraction between 0 and 1, e.g. `0.42`. Only needed in plain HTML: the framework components set it themselves. | `0` |"}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/loading-indicator`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function bt(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=te(),ne(),n(),yt(),O(),R(),ie(),gt(),q(),fe(),ye(),Te(),Me(),Ue(),dt(),Qe(),X()})))()}$();export{bt as default};