import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CXIBAG00.js";import{s as o}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,t as u}from"./accordion-item-Dd8ynUr1.js";import{a as d,n as f,r as p,t as m}from"./density.example.stories-CUHcPXgM.js";import{i as h,n as g,t as _}from"./disabled.example.stories-BOo7buw_.js";import{n as v,r as y,t as b}from"./open.example.stories-C2VKbtuR.js";import{i as x,n as S,t as C}from"./behavior.example.stories-BMzHjxze.js";import{a as w,n as T,r as E,t as D}from"./density.example.stories-C0Jxqshv.js";import{n as O,t as k}from"./interaction-action.example.stories-Bd27ZWKU.js";import{n as A,t as j}from"./interaction-init-open.example.stories-Dlqd9eFB.js";import{n as M,r as N,t as P}from"./variant.example.stories-Bn2yBEfr.js";import{n as F,t as I}from"./accordion.overview.stories-C6SXP0yP.js";var L;function R(){return(R=e((()=>{L=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}var z;function B(){return(B=e((()=>{z=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before          | Status | After               | Description                                                                                                                      |
| --------------- | :----: | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| \`cmp-accordion\` |   🔁   | \`db-accordion-item\` | The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component) |

### props

| Before     | Status | After                        | Description                                                                  |
| ---------- | :----: | ---------------------------- | ---------------------------------------------------------------------------- |
| \`summary\`  |   🔁   | \`headline\` / \`headlinePlain\` | The title/summary, as a slot (\`headline\`) or plain string (\`headlinePlain\`). |
| \`emphasis\` |   ❌   | ❌                           | There is no emphasis anymore.                                                |
| \`size\`     |   ❌   | ❌                           | Controlled by the density.                                                   |
|            |   🆕   | \`disabled\`                   | Disable the component.                                                       |
|            |   🆕   | \`text\`                       | Pass in a simple string as fallback to normal children/slot                  |
`})))()}function V(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,U.jsxs)(U.Fragment,{children:[`
`,(0,U.jsx)(n,{of:I}),`
`,(0,U.jsx)(r.h1,{id:`dbaccordion`,children:`DBAccordion`}),`
`,(0,U.jsxs)(r.p,{children:[(0,U.jsx)(r.strong,{children:`Parts:`}),` DBAccordionItem – documented on this page.`]}),`
`,(0,U.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,U.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,U.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Accordion guidelines`}),` on the Design System Platform.`]}),`
`,(0,U.jsxs)(r.p,{children:[`Setup: `,(0,U.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,U.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,U.jsxs)(r.p,{children:[`Open `,(0,U.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,U.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,U.jsx)(a,{of:M}),`
`,(0,U.jsx)(a,{of:P}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,U.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,U.jsx)(a,{of:C}),`
`,(0,U.jsx)(a,{of:S}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,U.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,U.jsx)(a,{of:T}),`
`,(0,U.jsx)(a,{of:E}),`
`,(0,U.jsx)(a,{of:D}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-density--docs`,children:`Open the Density examples`})}),`
`,(0,U.jsx)(r.h3,{id:`interaction-action`,children:`Interaction Action`}),`
`,(0,U.jsx)(a,{of:k}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-interaction-action--docs`,children:`Open the Interaction Action examples`})}),`
`,(0,U.jsx)(r.h3,{id:`interaction-init-open`,children:`Interaction Init Open`}),`
`,(0,U.jsx)(a,{of:j}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-interaction-init-open--docs`,children:`Open the Interaction Init Open examples`})}),`
`,(0,U.jsx)(r.h3,{id:`dbaccordionitem-density`,children:`DBAccordionItem: Density`}),`
`,(0,U.jsx)(a,{of:p}),`
`,(0,U.jsx)(a,{of:m}),`
`,(0,U.jsx)(a,{of:f}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-density--docs`,children:`Open the DBAccordionItem: Density examples`})}),`
`,(0,U.jsx)(r.h3,{id:`dbaccordionitem-disabled`,children:`DBAccordionItem: Disabled`}),`
`,(0,U.jsx)(a,{of:_}),`
`,(0,U.jsx)(a,{of:g}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-disabled--docs`,children:`Open the DBAccordionItem: Disabled examples`})}),`
`,(0,U.jsx)(r.h3,{id:`dbaccordionitem-open`,children:`DBAccordionItem: Open`}),`
`,(0,U.jsx)(a,{of:b}),`
`,(0,U.jsx)(a,{of:v}),`
`,(0,U.jsx)(r.p,{children:(0,U.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-open--docs`,children:`Open the DBAccordionItem: Open examples`})}),`
`,(0,U.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,U.jsx)(i,{of:I}),`
`,(0,U.jsx)(r.h3,{id:`dbaccordionitem`,children:`DBAccordionItem`}),`
`,(0,U.jsx)(i,{of:u}),`
`,(0,U.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,U.jsx)(t,{children:L.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,U.jsx)(r.h3,{id:`dbaccordionitem-1`,children:`DBAccordionItem`}),`
`,(0,U.jsx)(t,{children:z.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,U.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,U.jsxs)(r.ul,{children:[`
`,(0,U.jsx)(r.li,{children:(0,U.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,U.jsxs)(r.li,{children:[`npm: `,(0,U.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,U.jsx)(r.li,{children:(0,U.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/accordion`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,U.jsx)(r.li,{children:(0,U.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function H(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,U.jsx)(t,{...e,children:(0,U.jsx)(V,{...e})}):V(e)}var U;function W(){return(W=e((()=>{U=o(),c(),r(),F(),l(),N(),x(),w(),O(),A(),d(),h(),y(),R(),B()})))()}W();export{H as default};