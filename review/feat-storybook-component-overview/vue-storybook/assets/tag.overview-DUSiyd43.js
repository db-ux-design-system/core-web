import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as te,r}from"./blocks-CXIBAG00.js";import{s as ne}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i,r as re}from"./react-DITjJg24.js";import{a as ie,i as ae,l as oe,n as a,o,r as s,s as c,t as l}from"./behavior.example.stories-Dc5JRp7b.js";import{i as u,n as d,t as f}from"./checked.example.stories-oOeiUsJn.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-wCfx_0Gj.js";import{i as _,n as v,t as y}from"./disabled.example.stories-H_JdSwqN.js";import{i as b,n as x,t as S}from"./emphasis.example.stories-ZsPZhwCU.js";import{a as C,i as w,n as T,r as E,s as D,t as O}from"./example-strong.example.stories-Bz4DbWuZ.js";import{n as k,t as A}from"./interaction.example.stories-Cl1JiMH4.js";import{n as j,r as M,t as se}from"./no-text.example.stories-DeV6XB0I.js";import{n as N,r as P,t as F}from"./overflow.example.stories-B7w96idZ.js";import{a as I,c as L,d as R,f as z,i as B,l as V,n as H,o as U,p as W,r as G,s as K,t as ce,u as le}from"./semantic.example.stories-BR9y47je.js";import{n as ue,r as de,t as fe}from"./show-check-state.example.stories-Bv024A2_.js";import{n as pe,r as me,t as he}from"./show-icon.example.stories-Z0gNIuYB.js";import{n as ge,r as _e,t as ve}from"./show-slot.example.stories-CwEk5h2M.js";import{n as q,t as J}from"./tag.overview.stories-Doiu2mdI.js";var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### tag vs. chip

We simplified the components by reducing the amount from tag + chip to only tag.

You can use different types of tags by adding another component into it:

\`\`\`html
<db-tag><db-button>Tag as Button</db-button></db-tag>
<db-tag><db-link>Tag as Link</db-link></db-tag>
<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>
<db-tag><db-radio>Tag as Radio</db-radio></db-tag>
<db-tag>Static Tag</db-tag>
\`\`\`

### class

| Before    | Status | After    | Description |
| --------- | :----: | -------- | ----------- |
| \`elm-tag\` |   🔁   | \`db-tag\` |             |

### sizes

| Before  | Status | After | Description                                                                                                                                     |
| ------- | :----: | :---: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| \`small\` |   ❌   |  ❌   | We removed small tags because of density. But you can use the \`emphasis\` property with value \`strong\` to emphasize a tag for a differentiation. |

### variants ➡ semantic

Status colours are set via the \`semantic\` prop.

| Before        | Status | After                      | Description                                      |
| ------------- | :----: | -------------------------- | ------------------------------------------------ |
| \`poi-*\`       |   ❌   | ❌                         | We removed all point of interest colors for now. |
| \`track\`       |   ❌   | ❌                         | We removed track for now.                        |
| \`error\`       |   🔁   | \`semantic="critical"\`      |                                                  |
| \`informative\` |   🔁   | \`semantic="informational"\` |                                                  |
| \`success\`     |   🔁   | \`semantic="successful"\`    |                                                  |

### icons

| Before      | Status | After | Description                                                    |
| ----------- | :----: | ----- | -------------------------------------------------------------- |
| \`iconAfter\` |   ❌   | ❌    | not valid anymore, for tags only icons before text are allowed |
`})))()}function Z(e){let n={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:q}),`
`,(0,Q.jsx)(n.h1,{id:`dbtag`,children:`DBTag`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Accessibility review:`}),` done (2025-02-28)`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(n.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/tag`,rel:`nofollow`,children:`Tag guidelines`}),` on the Design System Platform.`]}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(n.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,Q.jsx)(r,{of:l}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(r,{of:a}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:s}),`
`,(0,Q.jsx)(r,{of:ie}),`
`,(0,Q.jsx)(r,{of:o}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`checked`,children:`Checked`}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-checked--docs`,children:`Open the Checked examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:h}),`
`,(0,Q.jsx)(r,{of:g}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(r,{of:y}),`
`,(0,Q.jsx)(r,{of:v}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`emphasis`,children:`Emphasis`}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-emphasis--docs`,children:`Open the Emphasis examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example-strong`,children:`Example Strong`}),`
`,(0,Q.jsx)(r,{of:O}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-example-strong--docs`,children:`Open the Example Strong examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-no-text--docs`,children:`Open the No Text examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`overflow`,children:`Overflow`}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-overflow--docs`,children:`Open the Overflow examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:H}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:V}),`
`,(0,Q.jsx)(r,{of:R}),`
`,(0,Q.jsx)(r,{of:ce}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-check-state`,children:`Show Check State`}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-check-state--docs`,children:`Open the Show Check State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-slot`,children:`Show Slot`}),`
`,(0,Q.jsx)(r,{of:ve}),`
`,(0,Q.jsx)(r,{of:ge}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-slot--docs`,children:`Open the Show Slot examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(te,{of:q}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/tag`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/tag`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ye(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ne(),re(),n(),J(),oe(),u(),p(),_(),b(),D(),k(),M(),P(),W(),de(),me(),_e(),X()})))()}$();export{ye as default};