import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-CoZ8_mkz.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./card.overview.stories-Dq9MzXfh.js";import{i as u,n as d,t as f}from"./behavior.example.stories-CppwZmu7.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-HeishBXS.js";import{a as _,n as v,r as y,t as b}from"./elevation-level.example.stories-DpMjPUWK.js";import{a as x,n as S,r as C,t as w}from"./example.example.stories-BCLPxjse.js";import{a as T,i as E,n as D,r as O,t as k}from"./spacing.example.stories-Ctr65JT-.js";var A;function j(){return(j=e((()=>{A='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before     | Status | After     | Description |\n| ---------- | :----: | --------- | ----------- |\n| `cmp-card` |   🔁   | `db-card` |             |\n\n### behavior\n\n| Before    | Status |   After    | Description                                                                                             |\n| --------- | :----: | :--------: | ------------------------------------------------------------------------------------------------------- |\n| `variant` |   🔁   | `behavior` | There is no default `header`/`content` anymore. Use `behavior="interactive"` to make the card a button. |\n| `header`  |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n| `content` |   ❌   |     ❌     | Add your own content via children/slot.                                                                 |\n\n### image\n\nThere are no built-in image props anymore. Render your own `<img>` inside the card via children/slot.\n\n| Before                   | Status | After | Description                              |\n| ------------------------ | :----: | ----- | ---------------------------------------- |\n| `alt`                    |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `image`                  |   ❌   | ❌    | Render your own `<img>` inside the card. |\n| `illustration`           |   ❌   | ❌    |                                          |\n| `uiCoreIllustrationPath` |   ❌   | ❌    |                                          |\n'})))()}function M(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[`
`,(0,P.jsx)(t,{of:l}),`
`,(0,P.jsx)(r.h1,{id:`dbcard`,children:`DBCard`}),`
`,(0,P.jsx)(i,{children:`Cards group related content into a contained surface to improve scanning and create clear visual structure. They can be static for content grouping or interactive as an entry point to deeper content, but should stay simple and consistent.`}),`
`,(0,P.jsxs)(r.p,{children:[(0,P.jsx)(r.strong,{children:`Status:`}),` Beta · `,(0,P.jsx)(r.strong,{children:`Accessibility review:`}),` done (2024-12-12)`]}),`
`,(0,P.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,P.jsx)(`div`,{"data-mode":`light`,children:(0,P.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/card`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,P.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,P.jsx)(`strong`,{children:`Card guidelines`}),(0,P.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,P.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,P.jsxs)(r.p,{children:[`Setup: `,(0,P.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,P.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,P.jsxs)(r.p,{children:[`Open `,(0,P.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,P.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,P.jsx)(n,{of:f}),`
`,(0,P.jsx)(n,{of:d}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbcard-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,P.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,P.jsx)(n,{of:h}),`
`,(0,P.jsx)(n,{of:g}),`
`,(0,P.jsx)(n,{of:m}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbcard-density--docs`,children:`Open the Density examples`})}),`
`,(0,P.jsx)(r.h3,{id:`elevation-level`,children:`Elevation Level`}),`
`,(0,P.jsx)(n,{of:b}),`
`,(0,P.jsx)(n,{of:v}),`
`,(0,P.jsx)(n,{of:y}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbcard-elevation-level--docs`,children:`Open the Elevation Level examples`})}),`
`,(0,P.jsx)(r.h3,{id:`example`,children:`Example`}),`
`,(0,P.jsx)(n,{of:w}),`
`,(0,P.jsx)(n,{of:S}),`
`,(0,P.jsx)(n,{of:C}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbcard-example--docs`,children:`Open the Example examples`})}),`
`,(0,P.jsx)(r.h3,{id:`spacing`,children:`Spacing`}),`
`,(0,P.jsx)(n,{of:k}),`
`,(0,P.jsx)(n,{of:O}),`
`,(0,P.jsx)(n,{of:D}),`
`,(0,P.jsx)(n,{of:E}),`
`,(0,P.jsx)(r.p,{children:(0,P.jsx)(r.a,{href:`?path=/docs/components-dbcard-spacing--docs`,children:`Open the Spacing examples`})}),`
`,(0,P.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,P.jsxs)(r.p,{children:[`In HTML the component is a `,(0,P.jsx)(r.code,{children:`<div>`}),` with the class `,(0,P.jsx)(r.code,{children:`db-card`}),`. Options are `,(0,P.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,P.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-behavior` | `"static" \\| "interactive"` | Makes the card interactive |\n| `data-elevation-level` | `"1" \\| "2" \\| "3"` | Changes the elevation of the card which is equal to `basic-background-level` |\n| `data-spacing` | `"medium" \\| "small" \\| "large" \\| "none" \\| string` | The spacing attribute changes the padding of the component. |'}),`
`,(0,P.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,P.jsx)(i,{children:A.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,P.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,P.jsxs)(r.ul,{children:[`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/card`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,P.jsxs)(r.li,{children:[`npm: `,(0,P.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/card`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,P.jsx)(r.li,{children:(0,P.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function N(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P;function F(){return(F=e((()=>{P=a(),s(),r(),c(),u(),p(),_(),x(),T(),j()})))()}F();export{N as default};