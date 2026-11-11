import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-Bc02zV-Z.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as ee}from"./react-DITjJg24.js";import{i as te,n as ne,t as re}from"./content.example.stories-DLeGHcMD.js";import{a as c,n as l,r as u,t as d}from"./density.example.stories-HRGpX8iK.js";import{i as f,n as p,t as m}from"./disabled.example.stories-D-WrwRYq.js";import{i as h,n as g,o as _,r as v,t as y}from"./examples-floating-label.example.stories-D4cc9fly.js";import{i as b,r as x,t as S}from"./examples-show-empty-option.example.stories-BXgbz8pk.js";import{n as C,r as w,t as T}from"./option-groups.example.stories-D2mbaV33.js";import{n as E,r as D,t as O}from"./required.example.stories-CiMkyYtL.js";import{n as k,r as A,t as j}from"./show-label.example.stories-C6xZjzW-.js";import{n as ie,r as M,t as N}from"./show-message.example.stories-D-c1ye-n.js";import{n as P,r as F,t as I}from"./show-required-asterisk.example.stories-CBrqPdja.js";import{n as L,r as R,t as z}from"./state.example.stories-BpVPGcqw.js";import{i as B,n as V,r as H,t as U}from"./validation.example.stories-C7zaN6Jl.js";import{n as W,r as G,t as K}from"./variant.example.stories-CZi22lgT.js";import{n as q,t as J}from"./select.overview.stories-BgfiTMaW.js";var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| \`elm-select\` |   🔁   | \`db-select\` |             |

### select

| Before     | Status | After      | Description                                                                                                     |
| ---------- | :----: | ---------- | --------------------------------------------------------------------------------------------------------------- |
| \`multiple\` |   🔁   | \`multiple\` | Still supported, but the native multi-select is unstyled - prefer \`db-custom-select\` for a styled multi-select. |
| \`size\`     |   ❌   |            | We removed this attribute for now, there are no valid designs for this use case.                                |
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(r.h1,{id:`dbselect`,children:`DBSelect`}),`
`,(0,Q.jsx)(t,{children:`Select lets users choose one option from a predefined list via a dropdown. It is best when options are mutually exclusive and users don't need to see all choices at once, while still providing clear labeling, guidance, and validation.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/select`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Select guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(a,{of:K}),`
`,(0,Q.jsx)(a,{of:W}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`content`,children:`Content`}),`
`,(0,Q.jsx)(a,{of:re}),`
`,(0,Q.jsx)(a,{of:ne}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-content--docs`,children:`Open the Content examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(a,{of:u}),`
`,(0,Q.jsx)(a,{of:d}),`
`,(0,Q.jsx)(a,{of:l}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(a,{of:m}),`
`,(0,Q.jsx)(a,{of:p}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples-floating-label`,children:`Examples Floating Label`}),`
`,(0,Q.jsx)(a,{of:y}),`
`,(0,Q.jsx)(a,{of:v}),`
`,(0,Q.jsx)(a,{of:g}),`
`,(0,Q.jsx)(a,{of:h}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-examples-floating-label--docs`,children:`Open the Examples Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples-showemptyoption-property`,children:`Examples showEmptyOption property`}),`
`,(0,Q.jsx)(a,{of:S}),`
`,(0,Q.jsx)(a,{of:b}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-examples-showemptyoption-property--docs`,children:`Open the Examples showEmptyOption property examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`option-groups`,children:`Option Groups`}),`
`,(0,Q.jsx)(a,{of:C}),`
`,(0,Q.jsx)(a,{of:T}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-option-groups--docs`,children:`Open the Option Groups examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(a,{of:O}),`
`,(0,Q.jsx)(a,{of:E}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(a,{of:j}),`
`,(0,Q.jsx)(a,{of:k}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(a,{of:N}),`
`,(0,Q.jsx)(a,{of:ie}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(a,{of:I}),`
`,(0,Q.jsx)(a,{of:P}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(a,{of:z}),`
`,(0,Q.jsx)(a,{of:L}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(a,{of:U}),`
`,(0,Q.jsx)(a,{of:V}),`
`,(0,Q.jsx)(a,{of:H}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(i,{of:q}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/select`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/select`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ae(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=o(),ee(),r(),J(),G(),te(),c(),f(),_(),x(),w(),D(),A(),M(),F(),R(),B(),X()})))()}$();export{ae as default};