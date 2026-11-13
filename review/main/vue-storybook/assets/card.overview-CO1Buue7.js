import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as r,r as i,u as a}from"./blocks-BiSBYD0W.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,t as d}from"./behavior.example.stories-DWN3gl2L.js";import{a as f,n as p,r as m,t as h}from"./density.example.stories-DMXiytr_.js";import{a as g,n as _,r as v,t as y}from"./elevation-level.example.stories-CsznnJ49.js";import{a as b,n as x,r as S,t as C}from"./example.example.stories-Dv5FJyh7.js";import{a as w,i as T,n as E,r as D,t as O}from"./spacing.example.stories-BI3InYGC.js";import{n as k,t as A}from"./card.overview.stories-dohHWSZl.js";var j;function M(){return(M=e((()=>{j='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before     | Status | After     | Description |\n| ---------- | :----: | --------- | ----------- |\n| `cmp-card` |   🔁   | `db-card` |             |\n\n### behavior\n\n| Before    | Status |   After    | Description                                                                                             |\n| --------- | :----: | :--------: | ------------------------------------------------------------------------------------------------------- |\n| `variant` |   🔁   | `behavior` | There is no default `header`/`content` anymore. Use `behavior="interactive"` to make the card a button. |\n| `header`  |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n| `content` |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n\n### image\n\nThere are no built-in image props anymore. Render your own `<img>` inside the card via children/slot.\n\n| Before                   | Status | After | Description                              |\n| ------------------------ | :----: | ----- | ---------------------------------------- |\n| `alt`                    |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `image`                  |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `illustration`           |   ❌   | ❌    |                                          |\n| `uiCoreIllustrationPath` |   ❌   | ❌    |                                          |\n'})))()}function N(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,F.jsxs)(F.Fragment,{children:[`
`,(0,F.jsx)(a,{of:A}),`
`,(0,F.jsx)(t.h1,{id:`dbcard`,children:`DBCard`}),`
`,(0,F.jsx)(n,{children:`Cards group related content into a contained surface to improve scanning and create clear visual structure. They can be static for content grouping or interactive as an entry point to deeper content, but should stay simple and consistent.`}),`
`,(0,F.jsxs)(t.p,{children:[(0,F.jsx)(t.strong,{children:`Status:`}),` Beta · `,(0,F.jsx)(t.strong,{children:`Accessibility review:`}),` done (2024-12-12)`]}),`
`,(0,F.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,F.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/card`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,F.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,F.jsx)(`strong`,{children:`Card guidelines`}),(0,F.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,F.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,F.jsxs)(t.p,{children:[`Setup: `,(0,F.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,F.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,F.jsxs)(t.p,{children:[`Open `,(0,F.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,F.jsx)(t.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,F.jsx)(i,{of:d}),`
`,(0,F.jsx)(i,{of:u}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.a,{href:`?path=/docs/components-dbcard-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,F.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,F.jsx)(i,{of:m}),`
`,(0,F.jsx)(i,{of:h}),`
`,(0,F.jsx)(i,{of:p}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.a,{href:`?path=/docs/components-dbcard-density--docs`,children:`Open the Density examples`})}),`
`,(0,F.jsx)(t.h3,{id:`elevation-level`,children:`Elevation Level`}),`
`,(0,F.jsx)(i,{of:y}),`
`,(0,F.jsx)(i,{of:_}),`
`,(0,F.jsx)(i,{of:v}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.a,{href:`?path=/docs/components-dbcard-elevation-level--docs`,children:`Open the Elevation Level examples`})}),`
`,(0,F.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,F.jsx)(i,{of:C}),`
`,(0,F.jsx)(i,{of:x}),`
`,(0,F.jsx)(i,{of:S}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.a,{href:`?path=/docs/components-dbcard-example--docs`,children:`Open the Example examples`})}),`
`,(0,F.jsx)(t.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,F.jsx)(i,{of:O}),`
`,(0,F.jsx)(i,{of:D}),`
`,(0,F.jsx)(i,{of:E}),`
`,(0,F.jsx)(i,{of:T}),`
`,(0,F.jsx)(t.p,{children:(0,F.jsx)(t.a,{href:`?path=/docs/components-dbcard-spacing--docs`,children:`Open the Spacing examples`})}),`
`,(0,F.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,F.jsx)(r,{of:A}),`
`,(0,F.jsx)(t.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,F.jsxs)(t.p,{children:[`Set them on the component element to adjust its styling, e.g. with the `,(0,F.jsx)(t.code,{children:`style`}),` attribute.`]}),`
`,(0,F.jsx)(n,{children:'| Property | Description | Default |\n| --- | --- | --- |\n| `--db-card-background-color-default` | Background color of the card. The card sets its own value, so set it on the card itself. | `var(--db-adaptive-bg-basic-level-1-default)`, level 2 or 3 with `elevationLevel` |\n| `--db-card-background-color-hovered` | Background color of an interactive card (`behavior="interactive"`, or a card inside a button or link) on hover. Set it on the card itself. | `var(--db-adaptive-bg-basic-level-1-hovered)`, level 2 or 3 with `elevationLevel` |\n| `--db-card-background-color-pressed` | Background color of an interactive card while pressed. Set it on the card itself. | `var(--db-adaptive-bg-basic-level-1-pressed)`, level 2 or 3 with `elevationLevel` |'}),`
`,(0,F.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,F.jsx)(n,{children:j.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,F.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,F.jsxs)(t.ul,{children:[`
`,(0,F.jsx)(t.li,{children:(0,F.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/card`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,F.jsxs)(t.li,{children:[`npm: `,(0,F.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,F.jsx)(t.li,{children:(0,F.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/card`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,F.jsx)(t.li,{children:(0,F.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function P(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,F.jsx)(t,{...e,children:(0,F.jsx)(N,{...e})}):N(e)}var F;function I(){return(I=e((()=>{F=o(),c(),t(),k(),l(),f(),g(),b(),w(),M()})))()}I();export{P as default};