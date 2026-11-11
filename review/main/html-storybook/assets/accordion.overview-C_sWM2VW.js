import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-B9cjq64D.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./accordion.overview.stories-BPmR1FLK.js";import{n as u,r as d,t as f}from"./variant.example.stories-DT33qVZ5.js";import{i as p,n as m,t as h}from"./behavior.example.stories-BUowMqJX.js";import{a as g,n as _,r as v,t as y}from"./density.example.stories-BzG3ltnk.js";import{a as b,n as x,r as S,t as C}from"./density.example.stories-dqfbxz25.js";import{i as w,n as T,t as E}from"./disabled.example.stories-s30JzvK9.js";import{n as D,r as O,t as k}from"./open.example.stories-BL_MtLs5.js";var A;function j(){return(j=e((()=>{A=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}var M;function N(){return(N=e((()=>{M=`## General

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
`})))()}function P(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[`
`,(0,I.jsx)(t,{of:l}),`
`,(0,I.jsx)(r.h1,{id:`dbaccordion`,children:`DBAccordion`}),`
`,(0,I.jsx)(i,{children:`Accordions group content into collapsible sections to save space and let users reveal details progressively. It is best for optional information and structured content where users do not need to see everything at once.`}),`
`,(0,I.jsxs)(r.p,{children:[(0,I.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,I.jsxs)(r.p,{children:[(0,I.jsx)(r.strong,{children:`Parts:`}),` DBAccordionItem – documented on this page.`]}),`
`,(0,I.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,I.jsx)(`div`,{"data-mode":`light`,children:(0,I.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/accordion`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,I.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,I.jsx)(`strong`,{children:`Accordion guidelines`}),(0,I.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,I.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,I.jsxs)(r.p,{children:[`Setup: `,(0,I.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,I.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,I.jsxs)(r.p,{children:[`Open `,(0,I.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,I.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,I.jsx)(n,{of:u}),`
`,(0,I.jsx)(n,{of:f}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,I.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,I.jsx)(n,{of:h}),`
`,(0,I.jsx)(n,{of:m}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,I.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,I.jsx)(n,{of:_}),`
`,(0,I.jsx)(n,{of:v}),`
`,(0,I.jsx)(n,{of:y}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-density--docs`,children:`Open the Density examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-density`,children:`DBAccordionItem: Density`}),`
`,(0,I.jsx)(n,{of:S}),`
`,(0,I.jsx)(n,{of:C}),`
`,(0,I.jsx)(n,{of:x}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-density--docs`,children:`Open the DBAccordionItem: Density examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-disabled`,children:`DBAccordionItem: Disabled`}),`
`,(0,I.jsx)(n,{of:E}),`
`,(0,I.jsx)(n,{of:T}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-disabled--docs`,children:`Open the DBAccordionItem: Disabled examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-open`,children:`DBAccordionItem: Open`}),`
`,(0,I.jsx)(n,{of:k}),`
`,(0,I.jsx)(n,{of:D}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-open--docs`,children:`Open the DBAccordionItem: Open examples`})}),`
`,(0,I.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,I.jsxs)(r.p,{children:[`In HTML the component is a `,(0,I.jsx)(r.code,{children:`<ul>`}),` with the class `,(0,I.jsx)(r.code,{children:`db-accordion`}),`. Options are `,(0,I.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,I.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-variant` | `"divider" \\| "card"` | Defines the display of the accordion and the items: "divider": with a dividing line between the items "card": w/o dividing line, but items are shown in the card variant |'}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem`,children:`DBAccordionItem`}),`
`,(0,I.jsxs)(r.p,{children:[`In HTML DBAccordionItem is a `,(0,I.jsx)(r.code,{children:`<li>`}),` with the class `,(0,I.jsx)(r.code,{children:`db-accordion-item`}),`. Options are `,(0,I.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,I.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,I.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,I.jsx)(i,{children:A.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-1`,children:`DBAccordionItem`}),`
`,(0,I.jsx)(i,{children:M.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,I.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,I.jsxs)(r.ul,{children:[`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,I.jsxs)(r.li,{children:[`npm: `,(0,I.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/accordion`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function F(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=a(),s(),r(),c(),d(),p(),g(),b(),w(),O(),j(),N()})))()}L();export{F as default};