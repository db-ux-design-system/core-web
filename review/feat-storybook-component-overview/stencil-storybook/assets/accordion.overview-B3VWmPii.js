import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-Cgbw3SbP.js";import{s as a}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as o,r as s}from"./react-DITjJg24.js";import{a as c,n as l,r as u,t as d}from"./density.example.stories-DNHUw9OV.js";import{i as f,n as p,t as m}from"./disabled.example.stories-C-NG8-v1.js";import{n as h,r as g,t as _}from"./open.example.stories-DRfw7HNl.js";import{i as v,n as y,t as b}from"./behavior.example.stories-CHC5SL6_.js";import{a as x,n as S,r as C,t as w}from"./density.example.stories-BPL7tQ2d.js";import{n as T,t as E}from"./interaction-action.example.stories-Sd3ZU8B8.js";import{n as D,t as O}from"./interaction-init-open.example.stories-BMgHN5Bn.js";import{n as k,r as A,t as j}from"./variant.example.stories-B1rcllGM.js";import{n as M,t as N}from"./accordion.overview.stories-X9UGQIB2.js";var P;function F(){return(F=e((()=>{P=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}var I;function L(){return(L=e((()=>{I=`## General

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
`})))()}function R(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,B.jsxs)(B.Fragment,{children:[`
`,(0,B.jsx)(t,{of:N}),`
`,(0,B.jsx)(r.h1,{id:`dbaccordion`,children:`DBAccordion`}),`
`,(0,B.jsxs)(r.p,{children:[(0,B.jsx)(r.strong,{children:`Parts:`}),` DBAccordionItem – documented on this page.`]}),`
`,(0,B.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,B.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,B.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Accordion guidelines`}),` on the Design System Platform.`]}),`
`,(0,B.jsxs)(r.p,{children:[`Setup: `,(0,B.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,B.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,B.jsxs)(r.p,{children:[`Open `,(0,B.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,B.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,B.jsx)(n,{of:k}),`
`,(0,B.jsx)(n,{of:j}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,B.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,B.jsx)(n,{of:b}),`
`,(0,B.jsx)(n,{of:y}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,B.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,B.jsx)(n,{of:S}),`
`,(0,B.jsx)(n,{of:C}),`
`,(0,B.jsx)(n,{of:w}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-density--docs`,children:`Open the Density examples`})}),`
`,(0,B.jsx)(r.h3,{id:`interaction-action`,children:`Interaction Action`}),`
`,(0,B.jsx)(n,{of:E}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-interaction-action--docs`,children:`Open the Interaction Action examples`})}),`
`,(0,B.jsx)(r.h3,{id:`interaction-init-open`,children:`Interaction Init Open`}),`
`,(0,B.jsx)(n,{of:O}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-interaction-init-open--docs`,children:`Open the Interaction Init Open examples`})}),`
`,(0,B.jsx)(r.h3,{id:`dbaccordionitem-density`,children:`DBAccordionItem: Density`}),`
`,(0,B.jsx)(n,{of:u}),`
`,(0,B.jsx)(n,{of:d}),`
`,(0,B.jsx)(n,{of:l}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-density--docs`,children:`Open the DBAccordionItem: Density examples`})}),`
`,(0,B.jsx)(r.h3,{id:`dbaccordionitem-disabled`,children:`DBAccordionItem: Disabled`}),`
`,(0,B.jsx)(n,{of:m}),`
`,(0,B.jsx)(n,{of:p}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-disabled--docs`,children:`Open the DBAccordionItem: Disabled examples`})}),`
`,(0,B.jsx)(r.h3,{id:`dbaccordionitem-open`,children:`DBAccordionItem: Open`}),`
`,(0,B.jsx)(n,{of:_}),`
`,(0,B.jsx)(n,{of:h}),`
`,(0,B.jsx)(r.p,{children:(0,B.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-open--docs`,children:`Open the DBAccordionItem: Open examples`})}),`
`,(0,B.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,B.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `name` | `string` | Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name |\n| `behavior` | `"single" \\| "multiple"` | To allow multiple items open at the same time or only 1 item |\n| `init-open-index` | `number[]` | The index of items which should be open when loading the accordion |\n| `variant` | `"divider" \\| "card"` | Defines the display of the accordion and the items: "divider": with a dividing line between the items "card": w/o dividing line, but items are shown in the card variant |\n| `items` | `DBAccordionItemDefaultProps[] \\| string` | Alternative to pass in a simple representation of accordion items |'}),`
`,(0,B.jsx)(r.h3,{id:`dbaccordionitem`,children:`DBAccordionItem`}),`
`,(0,B.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `default-open` | `string` | Initial state for the accordion item |\n| `name` | `string` | The name attribute gives the name of the element to group it. |\n| `open` | `string` | State for the accordion item |\n| `disabled` | `string` | The disabled attribute can be set to keep a user from clicking on the element. |\n| `headline-plain` | `string` | Title of the accordion-item as plain text |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |"}),`
`,(0,B.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,B.jsx)(i,{children:P.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,B.jsx)(r.h3,{id:`dbaccordionitem-1`,children:`DBAccordionItem`}),`
`,(0,B.jsx)(i,{children:I.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,B.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,B.jsxs)(r.ul,{children:[`
`,(0,B.jsx)(r.li,{children:(0,B.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,B.jsxs)(r.li,{children:[`npm: `,(0,B.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,B.jsx)(r.li,{children:(0,B.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/accordion`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,B.jsx)(r.li,{children:(0,B.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function z(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,B.jsx)(t,{...e,children:(0,B.jsx)(R,{...e})}):R(e)}var B;function V(){return(V=e((()=>{B=a(),s(),r(),M(),A(),v(),x(),T(),D(),c(),f(),g(),F(),L()})))()}V();export{z as default};