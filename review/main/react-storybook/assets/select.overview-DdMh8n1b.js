import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as r,r as i,u as a}from"./blocks-CLoIDT1N.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{i as s,r as ee}from"./react-DITjJg24.js";import{i as te,n as ne,t as re}from"./content.example.stories-BfUTsmoQ.js";import{a as c,n as l,r as u,t as d}from"./density.example.stories-DNwM015K.js";import{i as f,n as p,t as m}from"./disabled.example.stories-D0nb1Qm3.js";import{i as h,n as g,o as _,r as v,t as y}from"./examples-floating-label.example.stories-DqhvYQuN.js";import{i as b,r as x,t as S}from"./examples-show-empty-option.example.stories-C5A5Ogo6.js";import{n as C,r as w,t as T}from"./option-groups.example.stories-CC5Uj5pd.js";import{n as E,r as D,t as O}from"./required.example.stories-BnT_enaU.js";import{n as k,r as A,t as j}from"./show-label.example.stories-BED-IZnk.js";import{n as ie,r as M,t as N}from"./show-message.example.stories-DyiGqZy3.js";import{n as P,r as F,t as I}from"./show-required-asterisk.example.stories-UHuXafZy.js";import{n as L,r as R,t as z}from"./state.example.stories-CE6K-4bU.js";import{i as B,n as V,r as H,t as U}from"./validation.example.stories-B3BjKSA-.js";import{n as W,r as G,t as K}from"./variant.example.stories-CW2GfqHP.js";import{n as q,t as J}from"./select.overview.stories-x9SPbtJS.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(a,{of:q}),`
`,(0,Q.jsx)(t.h1,{id:`dbselect`,children:`DBSelect`}),`
`,(0,Q.jsx)(n,{children:`Select lets users choose one option from a predefined list via a dropdown. It is best when options are mutually exclusive and users don't need to see all choices at once, while still providing clear labeling, guidance, and validation.`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(t.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/select`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`Select guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(t.p,{children:[`Setup: `,(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(t.p,{children:[`Open `,(0,Q.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(t.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(i,{of:K}),`
`,(0,Q.jsx)(i,{of:W}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`content`,children:`Content`}),`
`,(0,Q.jsx)(i,{of:re}),`
`,(0,Q.jsx)(i,{of:ne}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-content--docs`,children:`Open the Content examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(i,{of:u}),`
`,(0,Q.jsx)(i,{of:d}),`
`,(0,Q.jsx)(i,{of:l}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(i,{of:m}),`
`,(0,Q.jsx)(i,{of:p}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples-floating-label`,children:`Examples Floating Label`}),`
`,(0,Q.jsx)(i,{of:y}),`
`,(0,Q.jsx)(i,{of:v}),`
`,(0,Q.jsx)(i,{of:g}),`
`,(0,Q.jsx)(i,{of:h}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-examples-floating-label--docs`,children:`Open the Examples Floating Label examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples-showemptyoption-property`,children:`Examples showEmptyOption property`}),`
`,(0,Q.jsx)(i,{of:S}),`
`,(0,Q.jsx)(i,{of:b}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-examples-showemptyoption-property--docs`,children:`Open the Examples showEmptyOption property examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`option-groups`,children:`Option Groups`}),`
`,(0,Q.jsx)(i,{of:C}),`
`,(0,Q.jsx)(i,{of:T}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-option-groups--docs`,children:`Open the Option Groups examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(i,{of:O}),`
`,(0,Q.jsx)(i,{of:E}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(i,{of:j}),`
`,(0,Q.jsx)(i,{of:k}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(i,{of:N}),`
`,(0,Q.jsx)(i,{of:ie}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(i,{of:I}),`
`,(0,Q.jsx)(i,{of:P}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(i,{of:z}),`
`,(0,Q.jsx)(i,{of:L}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(i,{of:U}),`
`,(0,Q.jsx)(i,{of:V}),`
`,(0,Q.jsx)(i,{of:H}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbselect-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(t.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,Q.jsxs)(t.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,Q.jsx)(t.code,{children:`style`}),` attribute.`]}),`
`,(0,Q.jsx)(n,{children:"| Property | Description | Default |\n| --- | --- | --- |\n| `--db-form-component-min-inline-size` | Minimum inline size of the form field, e.g. `20rem`. | `var(--db-sizing-lg)`; DBSelect and DBCustomSelect `var(--db-sizing-xl)`; larger with icons |\n| `--db-label-max-size` | Maximum inline size of the label, e.g. `20rem`. Longer labels are truncated with an ellipsis. | `100%` |"}),`
`,(0,Q.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(n,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/select`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(t.li,{children:[`npm: `,(0,Q.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/select`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ae(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=o(),ee(),t(),J(),G(),te(),c(),f(),_(),x(),w(),D(),A(),M(),F(),R(),B(),X()})))()}$();export{ae as default};