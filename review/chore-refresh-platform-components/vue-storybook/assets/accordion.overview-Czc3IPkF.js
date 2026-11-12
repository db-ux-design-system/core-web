import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CEAdIZNg.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,t as u}from"./accordion-item-C4PNi7cy.js";import{a as d,n as f,r as p,t as m}from"./density.example.stories-DjnGwAbw.js";import{i as h,n as g,t as _}from"./disabled.example.stories-5nGzwN_o.js";import{n as v,r as y,t as b}from"./open.example.stories-C6_sgLlx.js";import{i as x,n as S,t as C}from"./behavior.example.stories-Czq0amVJ.js";import{a as w,n as T,r as E,t as D}from"./density.example.stories-ChARRwHV.js";import{n as O,r as k,t as A}from"./variant.example.stories-DRieQW2o.js";import{n as j,t as M}from"./accordion.overview.stories-Bxlnl7M2.js";var N;function P(){return(P=e((()=>{N=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}var F;function I(){return(I=e((()=>{F=`## General

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
`})))()}function L(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[`
`,(0,z.jsx)(n,{of:M}),`
`,(0,z.jsx)(r.h1,{id:`dbaccordion`,children:`DBAccordion`}),`
`,(0,z.jsx)(t,{children:`Accordions group content into collapsible sections to save space and let users reveal details progressively. It is best for optional information and structured content where users do not need to see everything at once.`}),`
`,(0,z.jsxs)(r.p,{children:[(0,z.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,z.jsxs)(r.p,{children:[(0,z.jsx)(r.strong,{children:`Parts:`}),` DBAccordionItem – documented on this page.`]}),`
`,(0,z.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,z.jsx)(`div`,{"data-mode":`light`,children:(0,z.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/accordion`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,z.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,z.jsx)(`strong`,{children:`Accordion guidelines`}),(0,z.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,z.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,z.jsxs)(r.p,{children:[`Setup: `,(0,z.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,z.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,z.jsxs)(r.p,{children:[`Open `,(0,z.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,z.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,z.jsx)(a,{of:O}),`
`,(0,z.jsx)(a,{of:A}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,z.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,z.jsx)(a,{of:C}),`
`,(0,z.jsx)(a,{of:S}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,z.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,z.jsx)(a,{of:T}),`
`,(0,z.jsx)(a,{of:E}),`
`,(0,z.jsx)(a,{of:D}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-density--docs`,children:`Open the Density examples`})}),`
`,(0,z.jsx)(r.h3,{id:`dbaccordionitem-density`,children:`DBAccordionItem: Density`}),`
`,(0,z.jsx)(a,{of:p}),`
`,(0,z.jsx)(a,{of:m}),`
`,(0,z.jsx)(a,{of:f}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-density--docs`,children:`Open the DBAccordionItem: Density examples`})}),`
`,(0,z.jsx)(r.h3,{id:`dbaccordionitem-disabled`,children:`DBAccordionItem: Disabled`}),`
`,(0,z.jsx)(a,{of:_}),`
`,(0,z.jsx)(a,{of:g}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-disabled--docs`,children:`Open the DBAccordionItem: Disabled examples`})}),`
`,(0,z.jsx)(r.h3,{id:`dbaccordionitem-open`,children:`DBAccordionItem: Open`}),`
`,(0,z.jsx)(a,{of:b}),`
`,(0,z.jsx)(a,{of:v}),`
`,(0,z.jsx)(r.p,{children:(0,z.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-open--docs`,children:`Open the DBAccordionItem: Open examples`})}),`
`,(0,z.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,z.jsx)(i,{of:M}),`
`,(0,z.jsx)(r.h3,{id:`dbaccordionitem`,children:`DBAccordionItem`}),`
`,(0,z.jsx)(i,{of:u}),`
`,(0,z.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,z.jsx)(t,{children:N.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,z.jsx)(r.h3,{id:`dbaccordionitem-1`,children:`DBAccordionItem`}),`
`,(0,z.jsx)(t,{children:F.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,z.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,z.jsxs)(r.ul,{children:[`
`,(0,z.jsx)(r.li,{children:(0,z.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,z.jsxs)(r.li,{children:[`npm: `,(0,z.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,z.jsx)(r.li,{children:(0,z.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/accordion`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,z.jsx)(r.li,{children:(0,z.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function R(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=o(),c(),r(),j(),l(),k(),x(),w(),d(),h(),y(),P(),I()})))()}B();export{R as default};