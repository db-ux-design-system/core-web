import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i}from"./blocks-7tmRD1zB.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{a as c,n as l,r as u,t as d}from"./density.example.stories-CIDXB02M.js";import{i as f,n as p,t as m}from"./disabled.example.stories-B3v20FG2.js";import{n as h,r as g,t as _}from"./open.example.stories-Dh5HK7Q9.js";import{i as v,n as y,t as b}from"./behavior.example.stories-DRZCgt0s.js";import{a as x,n as S,r as C,t as w}from"./density.example.stories-zLwmatR9.js";import{n as T,r as E,t as D}from"./variant.example.stories-sL7XIbmk.js";import{n as O,t as k}from"./accordion.overview.stories-CHAsWdgv.js";var A;function j(){return(j=e((()=>{A=`## General

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
`})))()}function P(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,I.jsxs)(I.Fragment,{children:[`
`,(0,I.jsx)(n,{of:k}),`
`,(0,I.jsx)(r.h1,{id:`dbaccordion`,children:`DBAccordion`}),`
`,(0,I.jsx)(t,{children:`Accordions group content into collapsible sections to save space and let users reveal details progressively. It is best for optional information and structured content where users do not need to see everything at once.`}),`
`,(0,I.jsxs)(r.p,{children:[(0,I.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,I.jsxs)(r.p,{children:[(0,I.jsx)(r.strong,{children:`Parts:`}),` DBAccordionItem – documented on this page.`]}),`
`,(0,I.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,I.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/accordion`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,I.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,I.jsx)(`strong`,{children:`Accordion guidelines`}),(0,I.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,I.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,I.jsxs)(r.p,{children:[`Setup: `,(0,I.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,I.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,I.jsxs)(r.p,{children:[`Open `,(0,I.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,I.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,I.jsx)(i,{of:T}),`
`,(0,I.jsx)(i,{of:D}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,I.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,I.jsx)(i,{of:b}),`
`,(0,I.jsx)(i,{of:y}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,I.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,I.jsx)(i,{of:S}),`
`,(0,I.jsx)(i,{of:C}),`
`,(0,I.jsx)(i,{of:w}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordion-density--docs`,children:`Open the Density examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-density`,children:`DBAccordionItem: Density`}),`
`,(0,I.jsx)(i,{of:u}),`
`,(0,I.jsx)(i,{of:d}),`
`,(0,I.jsx)(i,{of:l}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-density--docs`,children:`Open the DBAccordionItem: Density examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-disabled`,children:`DBAccordionItem: Disabled`}),`
`,(0,I.jsx)(i,{of:m}),`
`,(0,I.jsx)(i,{of:p}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-disabled--docs`,children:`Open the DBAccordionItem: Disabled examples`})}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-open`,children:`DBAccordionItem: Open`}),`
`,(0,I.jsx)(i,{of:_}),`
`,(0,I.jsx)(i,{of:h}),`
`,(0,I.jsx)(r.p,{children:(0,I.jsx)(r.a,{href:`?path=/docs/components-dbaccordionitem-open--docs`,children:`Open the DBAccordionItem: Open examples`})}),`
`,(0,I.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,I.jsx)(t,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `name` | `string` | Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name |\n| `behavior` | `"single" \\| "multiple"` | To allow multiple items open at the same time or only 1 item |\n| `init-open-index` | `number[]` | The index of items which should be open when loading the accordion |\n| `variant` | `"divider" \\| "card"` | Defines the display of the accordion and the items: "divider": with a dividing line between the items "card": w/o dividing line, but items are shown in the card variant |\n| `items` | `DBAccordionItemDefaultProps[] \\| string` | Alternative to pass in a simple representation of accordion items |'}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem`,children:`DBAccordionItem`}),`
`,(0,I.jsx)(t,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `default-open` | `string` | Initial state for the accordion item |\n| `name` | `string` | The name attribute gives the name of the element to group it. |\n| `open` | `string` | State for the accordion item |\n| `disabled` | `string` | The disabled attribute can be set to keep a user from clicking on the element. |\n| `headline-plain` | `string` | Title of the accordion-item as plain text |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |"}),`
`,(0,I.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,I.jsx)(t,{children:A.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,I.jsx)(r.h3,{id:`dbaccordionitem-1`,children:`DBAccordionItem`}),`
`,(0,I.jsx)(t,{children:M.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,I.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,I.jsxs)(r.ul,{children:[`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/accordion`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,I.jsxs)(r.li,{children:[`npm: `,(0,I.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/accordion`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,I.jsx)(r.li,{children:(0,I.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function F(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,I.jsx)(t,{...e,children:(0,I.jsx)(P,{...e})}):P(e)}var I;function L(){return(L=e((()=>{I=a(),s(),r(),O(),E(),v(),x(),c(),f(),g(),j(),N()})))()}L();export{F as default};