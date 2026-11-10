import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-BS6jSI3h.js";import{s as ee}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as a,r as te}from"./react-DITjJg24.js";import{a as ne,i as re,l as ie,n as ae,o,r as s,s as c,t as l}from"./behavior.example.stories-Cxslyb7g.js";import{i as u,n as d,t as f}from"./checked.example.stories-D2S9OW92.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-DESa0hHX.js";import{i as _,n as v,t as y}from"./disabled.example.stories-Cfb8jMSb.js";import{i as b,n as x,t as S}from"./emphasis.example.stories-CdBihP_e.js";import{a as C,i as w,n as T,r as E,s as D,t as O}from"./example-strong.example.stories-D8ykL5dw.js";import{n as k,r as A,t as j}from"./no-text.example.stories-C5Gwx6Na.js";import{n as M,r as N,t as oe}from"./overflow.example.stories-Cq3R5rV3.js";import{a as P,c as F,d as I,f as L,i as R,l as z,n as B,o as V,p as H,r as U,s as W,t as G,u as K}from"./semantic.example.stories-C8FSQC2K.js";import{n as q,r as se,t as ce}from"./show-check-state.example.stories-BUDX5vmD.js";import{n as le,r as ue,t as de}from"./show-icon.example.stories-DhDyIZB1.js";import{n as J,r as fe,t as pe}from"./show-slot.example.stories-JZiRRfm4.js";import{n as me,t as he}from"./tag.overview.stories-DRK4v8A5.js";var Y;function X(){return(X=e((()=>{Y=`## General

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
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:me}),`
`,(0,Q.jsx)(r.h1,{id:`dbtag`,children:`DBTag`}),`
`,(0,Q.jsx)(i,{children:`Tag is a compact label used to categorize, highlight attributes, or represent selections. It can be static for display or interactive for filtering and selection, with optional removal where appropriate.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2025-02-28)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/tag`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Tag guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`behavior`,children:`Behavior`}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(n,{of:ae}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(n,{of:s}),`
`,(0,Q.jsx)(n,{of:ne}),`
`,(0,Q.jsx)(n,{of:o}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-behavior--docs`,children:`Open the Behavior examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`checked`,children:`Checked`}),`
`,(0,Q.jsx)(n,{of:f}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-checked--docs`,children:`Open the Checked examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`emphasis`,children:`Emphasis`}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-emphasis--docs`,children:`Open the Emphasis examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example-strong`,children:`Example Strong`}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-example-strong--docs`,children:`Open the Example Strong examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`no-text`,children:`No Text`}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-no-text--docs`,children:`Open the No Text examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`overflow`,children:`Overflow`}),`
`,(0,Q.jsx)(n,{of:oe}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-overflow--docs`,children:`Open the Overflow examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`semantic`,children:`Semantic`}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:V}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-semantic--docs`,children:`Open the Semantic examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-check-state`,children:`Show Check State`}),`
`,(0,Q.jsx)(n,{of:ce}),`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-show-check-state--docs`,children:`Open the Show Check State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon`,children:`Show Icon`}),`
`,(0,Q.jsx)(n,{of:de}),`
`,(0,Q.jsx)(n,{of:le}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-show-icon--docs`,children:`Open the Show Icon examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-slot`,children:`Show Slot`}),`
`,(0,Q.jsx)(n,{of:pe}),`
`,(0,Q.jsx)(n,{of:J}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtag-show-slot--docs`,children:`Open the Show Slot examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `remove-button` | `string` | The removeButton attribute shows the cancel button. |\n| `semantic` | `"adaptive" \\| "neutral" \\| "critical" \\| "informational" \\| "warning" \\| "successful"` | The semantic defines the default variants for most components. |\n| `emphasis` | `"weak" \\| "strong"` | The emphasis attribute divides in between a weak or strong importance. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-check-state` | `boolean \\| string` | Enable/Disable icon for checkbox/radio inside tag. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `no-text` | `boolean \\| string` | Define the text next to the icon specified via the icon Property to get hidden. |\n| `overflow` | `boolean \\| string` | The overflow attribute sets a max-width and longer text will be dotted. |\n| `text` | `string` | Alternative for children to set content as property. |\n| `behavior` | `"static" \\| "removable" \\| string` | Defines the behavior of the component: - static: default behavior without remove button - removable: add a remove button at the end of the tag |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/tag`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/tag`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ge(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ee(),te(),r(),he(),ie(),u(),p(),_(),b(),D(),A(),N(),H(),se(),ue(),fe(),X()})))()}$();export{ge as default};