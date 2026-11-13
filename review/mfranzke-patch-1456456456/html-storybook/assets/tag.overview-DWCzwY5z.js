import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as r}from"./blocks-pnrXM9Nd.js";import{t as te}from"./jsx-runtime-MKhVqBIO.js";import{i,r as ne}from"./react-DITjJg24.js";import{n as re,t as ie}from"./tag.overview.stories-ClD3cmfx.js";import{a as ae,i as a,l as o,n as s,o as c,r as l,s as u,t as d}from"./behavior.example.stories-C5R8d8Bx.js";import{i as f,n as p,t as m}from"./checked.example.stories-DotfDo9s.js";import{a as h,n as g,r as _,t as v}from"./density.example.stories-BrLcsYTZ.js";import{i as y,n as b,t as x}from"./disabled.example.stories-BbrK2DrM.js";import{i as S,n as C,t as w}from"./emphasis.example.stories-DR_Sp4VO.js";import{a as T,i as E,n as D,r as O,s as k,t as A}from"./example-strong.example.stories-CNyLLXBL.js";import{n as j,r as M,t as oe}from"./no-text.example.stories-CpNsR_we.js";import{n as N,r as P,t as F}from"./overflow.example.stories-CqObqIin.js";import{a as I,c as L,d as R,f as z,i as B,l as V,n as H,o as U,p as W,r as G,s as K,t as q,u as se}from"./semantic.example.stories-r8a_kopy.js";import{n as ce,r as le,t as ue}from"./show-check-state.example.stories-Cwp4ycbC.js";import{n as de,r as J,t as fe}from"./show-icon.example.stories-BfY190RM.js";import{n as pe,r as me,t as he}from"./show-slot.example.stories-DQ9J-gRE.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let n={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:re}),`
`,(0,Q.jsx)(n.h1,{id:`dbtag`,children:`DBTag`}),`
`,(0,Q.jsx)(t,{children:`Tag is a compact label used to categorize, highlight attributes, or represent selections. It can be static for display or interactive for filtering and selection, with optional removal where appropriate.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(n.strong,{children:`Accessibility review:`}),` done (2025-02-28)`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/tag`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,Q.jsx)(`strong`,{children:`Tag guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(n.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(r,{of:u}),`
`,(0,Q.jsx)(r,{of:s}),`
`,(0,Q.jsx)(r,{of:a}),`
`,(0,Q.jsx)(r,{of:l}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`checked`,children:`Checked`}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(r,{of:p}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-checked--docs`,children:`Open the Checked examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:_}),`
`,(0,Q.jsx)(r,{of:v}),`
`,(0,Q.jsx)(r,{of:g}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(r,{of:b}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`emphasis`,children:`Emphasis`}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-emphasis--docs`,children:`Open the Emphasis examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example-strong`,children:`Example Strong`}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(r,{of:O}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:E}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-example-strong--docs`,children:`Open the Example Strong examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Q.jsx)(r,{of:oe}),`
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
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-check-state`,children:`Show Check State`}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(r,{of:ce}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-check-state--docs`,children:`Open the Show Check State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-slot`,children:`Show Slot`}),`
`,(0,Q.jsx)(r,{of:he}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbtag-show-slot--docs`,children:`Open the Show Slot examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsxs)(n.p,{children:[`In HTML the component is a `,(0,Q.jsx)(n.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(n.code,{children:`db-tag`}),`. Options are `,(0,Q.jsx)(n.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(t,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-semantic` | `"adaptive" \\| "neutral" \\| "critical" \\| "informational" \\| "warning" \\| "successful"` | The semantic defines the default variants for most components. |\n| `data-emphasis` | `"weak" \\| "strong"` | The emphasis attribute divides in between a weak or strong importance. |\n| `data-icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `data-show-check-state` | `true` \\| `false` | Enable/Disable icon for checkbox/radio inside tag. |\n| `data-show-icon` | `true` \\| `false` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `data-no-text` | `true` \\| `false` | Define the text next to the icon specified via the icon Property to get hidden. |\n| `data-overflow` | `true` \\| `false` | The overflow attribute sets a max-width and longer text will be dotted. |'}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/tag`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/tag`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ge(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=te(),ne(),n(),ie(),o(),f(),h(),y(),S(),k(),M(),P(),W(),le(),J(),me(),X()})))()}$();export{ge as default};