import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as n,m as r,n as i,r as a}from"./blocks-CHJFR7Je.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{a as l,n as u,r as d,t as f}from"./density.example.stories-DiWiUlNb.js";import{n as p,r as m,t as h}from"./variant.example.stories-BSFn1SPX.js";import{n as g,t as _}from"./icon.overview.stories-CNgfeDEy.js";var v;function y(){return(y=e((()=>{v='## Accessibility\n\n### The icon is always decorative\n\n`DBIcon` renders its `<span>` with `aria-hidden="true"` and `font-size: 0`. Both are intentional: the\nelement carries a font glyph, not information, so it is removed from the accessibility tree and any text\ninside it is replaced by that glyph.\n\nTwo consequences:\n\n- A **decorative** icon needs no label. `<db-icon icon="coach"></db-icon>` is complete and correct.\n- The `text` property and children reach **neither** screen readers nor sighted users. Passing them has\n  no effect. For the same reason `role` and `aria-label` set on `DBIcon` have no effect either -\n  `aria-hidden="true"` removes the element from the accessibility tree regardless.\n\n### Labelling an informative icon\n\nWhen the icon is the only carrier of meaning - a status dot, an icon-only action - the accessible name\nbelongs on an element **around** it:\n\n```html\n<span role="img" aria-label="Coach">\n	<db-icon icon="coach"></db-icon>\n</span>\n```\n\nPrefer avoiding the wrapper altogether:\n\n- Inside another component, use its `icon` property instead of a nested `DBIcon`\n  (`<db-button icon="search">Search</db-button>`). The component then handles the labelling.\n- Where a visible text label is acceptable, use the `data-icon` attribute on the labelled element\n  instead of `DBIcon`. There the text stays exposed:\n  `<span data-icon="coach">Coach</span>`.\n'})))()}var b;function x(){return(x=e((()=>{b=`## General

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
`})))()}function S(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,(0,w.jsx)(n,{of:_}),`
`,(0,w.jsx)(r.h1,{id:`dbicon`,children:`DBIcon`}),`
`,(0,w.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,w.jsx)(`div`,{"data-mode":`light`,children:(0,w.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/icons`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,w.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,w.jsx)(`strong`,{children:`Icon guidelines`}),(0,w.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,w.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,w.jsxs)(r.p,{children:[`Setup: `,(0,w.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`Add the components to Vue`}),` on the Design System Platform.`]}),`
`,(0,w.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,w.jsxs)(r.p,{children:[`Open `,(0,w.jsx)(r.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,w.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.p,{children:(0,w.jsx)(r.a,{href:`?path=/docs/components-dbicon-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,w.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,w.jsx)(a,{of:d}),`
`,(0,w.jsx)(a,{of:f}),`
`,(0,w.jsx)(a,{of:u}),`
`,(0,w.jsx)(r.p,{children:(0,w.jsx)(r.a,{href:`?path=/docs/components-dbicon-density--docs`,children:`Open the Density examples`})}),`
`,(0,w.jsx)(r.h2,{id:`properties`,children:`Properties`}),`
`,(0,w.jsx)(i,{of:_}),`
`,`
`,(0,w.jsx)(t,{children:v}),`
`,(0,w.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,w.jsx)(t,{children:b.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,w.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsx)(r.li,{children:(0,w.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/icons`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,w.jsxs)(r.li,{children:[`npm: `,(0,w.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,w.jsx)(r.li,{children:(0,w.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/icon`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,w.jsx)(r.li,{children:(0,w.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function C(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=o(),c(),r(),g(),m(),l(),y(),x()})))()}T();export{C as default};