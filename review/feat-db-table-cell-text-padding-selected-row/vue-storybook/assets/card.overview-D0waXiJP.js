import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CPohpudH.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,t as d}from"./behavior.example.stories-DUtUPjg6.js";import{a as f,n as p,r as m,t as h}from"./density.example.stories-DkHG_IL4.js";import{a as g,n as _,r as v,t as y}from"./elevation-level.example.stories-D6W5M9pC.js";import{a as b,n as x,r as S,t as C}from"./example.example.stories-BCo63Kb6.js";import{a as w,i as T,n as E,r as D,t as O}from"./spacing.example.stories-DkL0kKoH.js";import{n as k,t as A}from"./card.overview.stories-B7mF4zMs.js";var j;function M(){return(M=e((()=>{j='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before     | Status | After     | Description |\n| ---------- | :----: | --------- | ----------- |\n| `cmp-card` |   🔁   | `db-card` |             |\n\n### behavior\n\n| Before    | Status |   After    | Description                                                                                             |\n| --------- | :----: | :--------: | ------------------------------------------------------------------------------------------------------- |\n| `variant` |   🔁   | `behavior` | There is no default `header`/`content` anymore. Use `behavior="interactive"` to make the card a button. |\n| `header`  |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n| `content` |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n\n### image\n\nThere are no built-in image props anymore. Render your own `<img>` inside the card via children/slot.\n\n| Before                   | Status | After | Description                              |\n| ------------------------ | :----: | ----- | ---------------------------------------- |\n| `alt`                    |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `image`                  |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `illustration`           |   ❌   | ❌    |                                          |\n| `uiCoreIllustrationPath` |   ❌   | ❌    |                                          |\n'})))()}function N(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[`
`,(0,F.jsx)(n,{of:A}),`
`,(0,F.jsx)(r.h1,{id:`dbcard`,children:`DBCard`}),`
`,(0,F.jsx)(t,{children:`Cards group related content into a contained surface to improve scanning and create clear visual structure. They can be static for content grouping or interactive as an entry point to deeper content, but should stay simple and consistent.`}),`
`,(0,F.jsxs)(r.p,{children:[(0,F.jsx)(r.strong,{children:`Status:`}),` Beta · `,(0,F.jsx)(r.strong,{children:`Accessibility review:`}),` done (2024-12-12)`]}),`
`,(0,F.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,F.jsx)(`div`,{"data-mode":`light`,children:(0,F.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/card`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,F.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,F.jsx)(`strong`,{children:`Card guidelines`}),(0,F.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,F.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,F.jsxs)(r.p,{children:[`Setup: `,(0,F.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,F.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,F.jsxs)(r.p,{children:[`Open `,(0,F.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,F.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,F.jsx)(a,{of:d}),`
`,(0,F.jsx)(a,{of:u}),`
`,(0,F.jsx)(r.p,{children:(0,F.jsx)(r.a,{href:`?path=/docs/components-dbcard-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,F.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,F.jsx)(a,{of:m}),`
`,(0,F.jsx)(a,{of:h}),`
`,(0,F.jsx)(a,{of:p}),`
`,(0,F.jsx)(r.p,{children:(0,F.jsx)(r.a,{href:`?path=/docs/components-dbcard-density--docs`,children:`Open the Density examples`})}),`
`,(0,F.jsx)(r.h3,{id:`elevation-level`,children:`Elevation Level`}),`
`,(0,F.jsx)(a,{of:y}),`
`,(0,F.jsx)(a,{of:_}),`
`,(0,F.jsx)(a,{of:v}),`
`,(0,F.jsx)(r.p,{children:(0,F.jsx)(r.a,{href:`?path=/docs/components-dbcard-elevation-level--docs`,children:`Open the Elevation Level examples`})}),`
`,(0,F.jsx)(r.h3,{id:`example`,children:`Example`}),`
`,(0,F.jsx)(a,{of:C}),`
`,(0,F.jsx)(a,{of:x}),`
`,(0,F.jsx)(a,{of:S}),`
`,(0,F.jsx)(r.p,{children:(0,F.jsx)(r.a,{href:`?path=/docs/components-dbcard-example--docs`,children:`Open the Example examples`})}),`
`,(0,F.jsx)(r.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,F.jsx)(a,{of:O}),`
`,(0,F.jsx)(a,{of:D}),`
`,(0,F.jsx)(a,{of:E}),`
`,(0,F.jsx)(a,{of:T}),`
`,(0,F.jsx)(r.p,{children:(0,F.jsx)(r.a,{href:`?path=/docs/components-dbcard-spacing--docs`,children:`Open the Spacing examples`})}),`
`,(0,F.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,F.jsx)(i,{of:A}),`
`,(0,F.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,F.jsx)(t,{children:j.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,F.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,F.jsxs)(r.ul,{children:[`
`,(0,F.jsx)(r.li,{children:(0,F.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/card`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,F.jsxs)(r.li,{children:[`npm: `,(0,F.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,F.jsx)(r.li,{children:(0,F.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/card`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,F.jsx)(r.li,{children:(0,F.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function P(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=o(),c(),r(),k(),l(),f(),g(),b(),w(),M()})))()}I();export{P as default};