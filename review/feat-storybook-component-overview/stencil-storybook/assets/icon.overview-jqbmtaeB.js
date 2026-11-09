import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-Cgbw3SbP.js";import{s as a}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as o,r as s}from"./react-DITjJg24.js";import{a as c,n as l,r as u,t as d}from"./density.example.stories-C4LA2Nad.js";import{n as f,r as p,t as m}from"./variant.example.stories-BvdfI3HF.js";import{n as h,t as g}from"./icon.overview.stories-CZ-Q9RuJ.js";var _;function v(){return(v=e((()=>{_='## Accessibility\n\n### The icon is always decorative\n\n`DBIcon` renders its `<span>` with `aria-hidden="true"` and `font-size: 0`. Both are intentional: the\nelement carries a font glyph, not information, so it is removed from the accessibility tree and any text\ninside it is replaced by that glyph.\n\nTwo consequences:\n\n- A **decorative** icon needs no label. `<db-icon icon="coach"></db-icon>` is complete and correct.\n- The `text` property and children reach **neither** screen readers nor sighted users. Passing them has\n  no effect. For the same reason `role` and `aria-label` set on `DBIcon` have no effect either -\n  `aria-hidden="true"` removes the element from the accessibility tree regardless.\n\n### Labelling an informative icon\n\nWhen the icon is the only carrier of meaning - a status dot, an icon-only action - the accessible name\nbelongs on an element **around** it:\n\n```html\n<span role="img" aria-label="Coach">\n	<db-icon icon="coach"></db-icon>\n</span>\n```\n\nPrefer avoiding the wrapper altogether:\n\n- Inside another component, use its `icon` property instead of a nested `DBIcon`\n  (`<db-button icon="search">Search</db-button>`). The component then handles the labelling.\n- Where a visible text label is acceptable, use the `data-icon` attribute on the labelled element\n  instead of `DBIcon`. There the text stays exposed:\n  `<span data-icon="coach">Coach</span>`.\n'})))()}var y;function b(){return(b=e((()=>{y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before | Status | After     | Description |
| ------ | :----: | --------- | ----------- |
|        |   🔁   | \`db-icon\` |             |

### variant

| Before    | Status | After     | Description                                                                                                         |
| --------- | :----: | --------- | ------------------------------------------------------------------------------------------------------------------- |
| \`variant\` |   🔁   | \`variant\` | Still supported (rendered as \`data-icon-variant\`) to select a custom icon font family, alongside the \`weight\` prop. |
`})))()}function x(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(t,{of:g}),`
`,(0,C.jsx)(r.h1,{id:`dbicon`,children:`DBIcon`}),`
`,(0,C.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,C.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,C.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/icons`,rel:`nofollow`,children:`Icon guidelines`}),` on the Design System Platform.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Setup: `,(0,C.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,C.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,C.jsxs)(r.p,{children:[`Open `,(0,C.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,C.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,C.jsx)(n,{of:m}),`
`,(0,C.jsx)(n,{of:f}),`
`,(0,C.jsx)(r.p,{children:(0,C.jsx)(r.a,{href:`?path=/docs/components-dbicon-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,C.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,C.jsx)(n,{of:u}),`
`,(0,C.jsx)(n,{of:d}),`
`,(0,C.jsx)(n,{of:l}),`
`,(0,C.jsx)(r.p,{children:(0,C.jsx)(r.a,{href:`?path=/docs/components-dbicon-density--docs`,children:`Open the Density examples`})}),`
`,(0,C.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,C.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `weight` | `"16" \\| "20" \\| "24" \\| "32" \\| "48" \\| "64"` |  |\n| `variant` | `string` |  |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |'}),`
`,`
`,(0,C.jsx)(i,{children:_}),`
`,(0,C.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,C.jsx)(i,{children:y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,C.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/icons`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,C.jsxs)(r.li,{children:[`npm: `,(0,C.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/icon`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function S(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=a(),s(),r(),h(),p(),c(),v(),b()})))()}w();export{S as default};