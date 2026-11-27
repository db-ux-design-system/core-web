import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as ee,r,u as te}from"./blocks-JrTiaMnx.js";import{s as ne}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i,r as re}from"./react-DITjJg24.js";import{C as ie,E as ae,S as oe,_ as se,a,b as o,c as s,d as c,f as l,g as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,w as C,x as w,y as T}from"./button.example.stories-BnESAYB2.js";import{a as E,c as D,d as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F}from"./delay.example.stories-DK2v1uJs.js";import{a as I,c as L,d as R,i as z,l as B,n as V,o as H,r as U,s as W,t as G}from"./density.example.stories-rFfCK5TQ.js";import{a as K,c as ce,i as le,n as ue,o as de,r as fe,t as pe}from"./indeterminate.example.stories-v1keeWna.js";import{a as me,i as he,n as ge,r as _e,t as ve}from"./overlay.example.stories-CzlYcqAK.js";import{a as ye,i as be,n as xe,t as Se}from"./role.example.stories-B0p39BYn.js";import{a as Ce,i as we,n as q,o as Te,r as Ee,s as De,t as Oe}from"./show-label.example.stories-D3jprOq0.js";import{a as ke,i as Ae,n as je,o as Me,r as Ne,s as Pe,t as Fe}from"./show-progress-text.example.stories-DhUbg3nv.js";import{a as Ie,c as Le,i as Re,l as ze,n as Be,o as Ve,r as He,s as Ue,t as We,u as Ge}from"./size.example.stories-CXugF8x6.js";import{a as Ke,c as qe,d as Je,f as Ye,i as Xe,l as Ze,n as Qe,o as $e,p as et,r as tt,s as nt,t as rt,u as it}from"./state.determinate.example.stories-BuuBmReO.js";import{a as at,c as ot,d as st,f as ct,i as lt,l as ut,n as dt,o as ft,p as pt,r as mt,s as ht,t as gt,u as _t}from"./state.example.stories-B0XNyOTA.js";import{n as vt,t as yt}from"./timeout.example.stories-DjPeW2OC.js";import{n as J,t as bt}from"./loading-indicator.overview.stories-R7WF6cK6.js";var Y;function X(){return(X=e((()=>{Y='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before                 | Status | After                  | Description                                                           |\n| ---------------------- | :----: | ---------------------- | --------------------------------------------------------------------- |\n| `elm-loadingindicator` |   🔁   | `db-loading-indicator` | Use `variant="circular"` with `indeterminate` for the former spinner. |\n| `elm-progress`         |   🔁   | `db-loading-indicator` | Use `variant="bar"` with `value` and `max` for determinate progress.  |\n\n### announcement\n\nGeneration 2 rendered the spinner as an SVG and needed a separate status text, for example a paragraph with `role="status"`.\n\nThe component is a live region and announces its `label`. Which pattern fits depends on whether the indicator stays in the page:\n\n| Before                        | Status | After                | Description                                                                                                                                                                                                                                                                                                                                                                                                           |\n| ----------------------------- | :----: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| separate `role="status"` text |   ❌   | `label`              | The indicator stays rendered and changes its `state`, or sits inside a button. Remove the separate text, otherwise it is announced twice.                                                                                                                                                                                                                                                                             |\n| separate `role="status"` text |   🔁   | keep the status text | The indicator is only rendered while loading. A live region that appears together with its text is not announced reliably, and an inactive indicator still shows its track and keeps its label. Keep a `role="status"` element that is always rendered. While loading, place the indicator inside it with `aria-hidden="true"` and a hidden label (`showLabel` set to `false`), and write the status text next to it. |\n\nKeep behavior that the spinner did not provide itself, for example a disabled submit button that prevents a second search.\n'})))()}function Z(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(te,{of:J}),`
`,(0,Q.jsx)(t.h1,{id:`dbloadingindicator`,children:`DBLoadingIndicator`}),`
`,(0,Q.jsx)(n,{children:`The Loading Indicator provides visual feedback that content or a process is loading. It is available as a circular indicator and as a bar, each in a determinate and an indeterminate variant.`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Status:`}),` Beta`]}),`
`,(0,Q.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`LoadingIndicator guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(t.p,{children:[`Setup: `,(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(t.p,{children:[`Open `,(0,Q.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(t.h3,{id:`delay`,children:`Delay`}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(r,{of:P}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:M}),`
`,(0,Q.jsx)(r,{of:k}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-delay--docs`,children:`Open the Delay examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:W}),`
`,(0,Q.jsx)(r,{of:V}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:H}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples-button`,children:`Examples: Button`}),`
`,(0,Q.jsx)(r,{of:o}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:oe}),`
`,(0,Q.jsx)(r,{of:ie}),`
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
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-examples-button--docs`,children:`Open the Examples: Button examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples-timeout`,children:`Examples: Timeout`}),`
`,(0,Q.jsx)(r,{of:yt}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-examples-timeout--docs`,children:`Open the Examples: Timeout examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`indeterminate`,children:`Indeterminate`}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-indeterminate--docs`,children:`Open the Indeterminate examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`overlay`,children:`Overlay`}),`
`,(0,Q.jsx)(r,{of:ge}),`
`,(0,Q.jsx)(r,{of:_e}),`
`,(0,Q.jsx)(r,{of:ve}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-overlay--docs`,children:`Open the Overlay examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`role`,children:`Role`}),`
`,(0,Q.jsx)(r,{of:Se}),`
`,(0,Q.jsx)(r,{of:ye}),`
`,(0,Q.jsx)(r,{of:be}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-role--docs`,children:`Open the Role examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(r,{of:Ee}),`
`,(0,Q.jsx)(r,{of:Oe}),`
`,(0,Q.jsx)(r,{of:Ce}),`
`,(0,Q.jsx)(r,{of:Te}),`
`,(0,Q.jsx)(r,{of:we}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-progress-text`,children:`Show Progress Text`}),`
`,(0,Q.jsx)(r,{of:je}),`
`,(0,Q.jsx)(r,{of:Ne}),`
`,(0,Q.jsx)(r,{of:Fe}),`
`,(0,Q.jsx)(r,{of:ke}),`
`,(0,Q.jsx)(r,{of:Me}),`
`,(0,Q.jsx)(r,{of:Ae}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-show-progress-text--docs`,children:`Open the Show Progress Text examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,Q.jsx)(r,{of:Le}),`
`,(0,Q.jsx)(r,{of:ze}),`
`,(0,Q.jsx)(r,{of:Ue}),`
`,(0,Q.jsx)(r,{of:Be}),`
`,(0,Q.jsx)(r,{of:He}),`
`,(0,Q.jsx)(r,{of:We}),`
`,(0,Q.jsx)(r,{of:Ie}),`
`,(0,Q.jsx)(r,{of:Ve}),`
`,(0,Q.jsx)(r,{of:Re}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-size--docs`,children:`Open the Size examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(r,{of:ot}),`
`,(0,Q.jsx)(r,{of:ut}),`
`,(0,Q.jsx)(r,{of:ht}),`
`,(0,Q.jsx)(r,{of:dt}),`
`,(0,Q.jsx)(r,{of:mt}),`
`,(0,Q.jsx)(r,{of:gt}),`
`,(0,Q.jsx)(r,{of:st}),`
`,(0,Q.jsx)(r,{of:ct}),`
`,(0,Q.jsx)(r,{of:_t}),`
`,(0,Q.jsx)(r,{of:at}),`
`,(0,Q.jsx)(r,{of:ft}),`
`,(0,Q.jsx)(r,{of:lt}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`state-determinate`,children:`State: Determinate`}),`
`,(0,Q.jsx)(r,{of:qe}),`
`,(0,Q.jsx)(r,{of:Ze}),`
`,(0,Q.jsx)(r,{of:nt}),`
`,(0,Q.jsx)(r,{of:Qe}),`
`,(0,Q.jsx)(r,{of:tt}),`
`,(0,Q.jsx)(r,{of:rt}),`
`,(0,Q.jsx)(r,{of:Je}),`
`,(0,Q.jsx)(r,{of:Ye}),`
`,(0,Q.jsx)(r,{of:it}),`
`,(0,Q.jsx)(r,{of:Ke}),`
`,(0,Q.jsx)(r,{of:$e}),`
`,(0,Q.jsx)(r,{of:Xe}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbloadingindicator-state-determinate--docs`,children:`Open the State: Determinate examples`})}),`
`,(0,Q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(ee,{of:J}),`
`,(0,Q.jsx)(t.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,Q.jsxs)(t.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,Q.jsx)(t.code,{children:`style`}),` attribute.`]}),`
`,(0,Q.jsx)(n,{children:"| Property | Description | Default |\n| --- | --- | --- |\n| `--db-loading-indicator-percentage` | Progress of a determinate indicator as a fraction between 0 and 1, e.g. `0.42`. Only needed in plain HTML: the framework components set it themselves. | `0` |"}),`
`,(0,Q.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(n,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/loading-indicator`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(t.li,{children:[`npm: `,(0,Q.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/loading-indicator`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function xt(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ne(),re(),t(),bt(),O(),R(),ae(),vt(),ce(),me(),xe(),De(),Pe(),Ge(),pt(),et(),X()})))()}$();export{xt as default};