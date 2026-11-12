import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as r,r as i}from"./blocks-D9LEVnXE.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as te}from"./react-DITjJg24.js";import{a as ne,i as re,l as ie,n as ae,o as s,r as c,s as l,t as u}from"./behavior.example.stories-2FjFeKv1.js";import{i as d,n as f,t as p}from"./checked.example.stories-B7TE5B85.js";import{a as m,n as h,r as g,t as _}from"./density.example.stories-VBX9_dO2.js";import{i as v,n as y,t as b}from"./disabled.example.stories-C06K-DY8.js";import{i as x,n as S,t as C}from"./emphasis.example.stories-CMvKA7f2.js";import{a as w,i as T,n as E,r as D,s as O,t as k}from"./example-strong.example.stories-DMvmR_IQ.js";import{n as A,r as j,t as M}from"./no-text.example.stories-BYpjXZmJ.js";import{n as N,r as oe,t as P}from"./overflow.example.stories-BdJr1Mjf.js";import{a as F,c as I,d as L,f as R,i as z,l as B,n as V,o as H,p as U,r as W,s as G,t as K,u as q}from"./semantic.example.stories-xVmXMrlH.js";import{n as se,r as ce,t as le}from"./show-check-state.example.stories-bOYFtgmW.js";import{n as ue,r as de,t as fe}from"./show-icon.example.stories-yenERrLb.js";import{n as pe,r as me,t as he}from"./show-slot.example.stories-pXnR6N9Y.js";import{n as J,t as ge}from"./tag.overview.stories-LCc9OB0d.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let n={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:J}),`
`,(0,Q.jsx)(n.h1,{id:`dbtag`,children:`DBTag`}),`
`,(0,Q.jsx)(t,{children:`Tag is a compact label used to categorize, highlight attributes, or represent selections. It can be static for display or interactive for filtering and selection, with optional removal where appropriate.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(n.strong,{children:`Accessibility review:`}),` done (2025-02-28)`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/tag`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Tag guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(n.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,Q.jsx)(i,{of:u}),`
`,(0,Q.jsx)(i,{of:l}),`
`,(0,Q.jsx)(i,{of:ae}),`
`,(0,Q.jsx)(i,{of:re}),`
`,(0,Q.jsx)(i,{of:c}),`
`,(0,Q.jsx)(i,{of:ne}),`
`,(0,Q.jsx)(i,{of:s}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`checked`,children:`Checked`}),`
`,(0,Q.jsx)(i,{of:p}),`
`,(0,Q.jsx)(i,{of:f}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-checked--docs`,children:`Open the Checked examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(i,{of:g}),`
`,(0,Q.jsx)(i,{of:_}),`
`,(0,Q.jsx)(i,{of:h}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(i,{of:b}),`
`,(0,Q.jsx)(i,{of:y}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`emphasis`,children:`Emphasis`}),`
`,(0,Q.jsx)(i,{of:C}),`
`,(0,Q.jsx)(i,{of:S}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-emphasis--docs`,children:`Open the Emphasis examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example-strong`,children:`Example Strong`}),`
`,(0,Q.jsx)(i,{of:k}),`
`,(0,Q.jsx)(i,{of:D}),`
`,(0,Q.jsx)(i,{of:E}),`
`,(0,Q.jsx)(i,{of:T}),`
`,(0,Q.jsx)(i,{of:w}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-example-strong--docs`,children:`Open the Example Strong examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Q.jsx)(i,{of:M}),`
`,(0,Q.jsx)(i,{of:A}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-no-text--docs`,children:`Open the No Text examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`overflow`,children:`Overflow`}),`
`,(0,Q.jsx)(i,{of:P}),`
`,(0,Q.jsx)(i,{of:N}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-overflow--docs`,children:`Open the Overflow examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(i,{of:z}),`
`,(0,Q.jsx)(i,{of:V}),`
`,(0,Q.jsx)(i,{of:F}),`
`,(0,Q.jsx)(i,{of:G}),`
`,(0,Q.jsx)(i,{of:B}),`
`,(0,Q.jsx)(i,{of:L}),`
`,(0,Q.jsx)(i,{of:K}),`
`,(0,Q.jsx)(i,{of:W}),`
`,(0,Q.jsx)(i,{of:H}),`
`,(0,Q.jsx)(i,{of:I}),`
`,(0,Q.jsx)(i,{of:q}),`
`,(0,Q.jsx)(i,{of:R}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-check-state`,children:`Show Check State`}),`
`,(0,Q.jsx)(i,{of:le}),`
`,(0,Q.jsx)(i,{of:se}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-check-state--docs`,children:`Open the Show Check State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(i,{of:fe}),`
`,(0,Q.jsx)(i,{of:ue}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-slot`,children:`Show Slot`}),`
`,(0,Q.jsx)(i,{of:he}),`
`,(0,Q.jsx)(i,{of:pe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-slot--docs`,children:`Open the Show Slot examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(r,{of:J}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/tag`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/tag`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function _e(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),te(),n(),ge(),ie(),d(),m(),v(),x(),O(),j(),oe(),U(),ce(),de(),me(),X()})))()}$();export{_e as default};