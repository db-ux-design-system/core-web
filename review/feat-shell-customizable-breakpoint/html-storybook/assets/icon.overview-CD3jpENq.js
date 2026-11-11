import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-UrQbrB5M.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as l}from"./icon.overview.stories-B_EmQq02.js";import{n as u,r as d,t as f}from"./variant.example.stories-DEa3RJr2.js";import{a as p,n as m,r as h,t as g}from"./density.example.stories-DOC0y_H7.js";var _;function v(){return(v=e((()=>{_='## Accessibility\n\n### The icon is always decorative\n\n`DBIcon` renders its `<span>` with `aria-hidden="true"` and `font-size: 0`. Both are intentional: the\nelement carries a font glyph, not information, so it is removed from the accessibility tree and any text\ninside it is replaced by that glyph.\n\nTwo consequences:\n\n- A **decorative** icon needs no label. `<db-icon icon="coach"></db-icon>` is complete and correct.\n- The `text` property and children reach **neither** screen readers nor sighted users. Passing them has\n  no effect. For the same reason `role` and `aria-label` set on `DBIcon` have no effect either -\n  `aria-hidden="true"` removes the element from the accessibility tree regardless.\n\n### Labelling an informative icon\n\nWhen the icon is the only carrier of meaning - a status dot, an icon-only action - the accessible name\nbelongs on an element **around** it:\n\n```html\n<span role="img" aria-label="Coach">\n	<db-icon icon="coach"></db-icon>\n</span>\n```\n\nPrefer avoiding the wrapper altogether:\n\n- Inside another component, use its `icon` property instead of a nested `DBIcon`\n  (`<db-button icon="search">Search</db-button>`). The component then handles the labelling.\n- Where a visible text label is acceptable, use the `data-icon` attribute on the labelled element\n  instead of `DBIcon`. There the text stays exposed:\n  `<span data-icon="coach">Coach</span>`.\n'})))()}var y;function b(){return(b=e((()=>{y=`## General

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
`})))()}function x(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,(0,C.jsx)(t,{of:l}),`
`,(0,C.jsx)(r.h1,{id:`dbicon`,children:`DBIcon`}),`
`,(0,C.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,C.jsx)(`div`,{"data-mode":`light`,children:(0,C.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/icons`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,C.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,C.jsx)(`strong`,{children:`Icon guidelines`}),(0,C.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,C.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,C.jsxs)(r.p,{children:[`Setup: `,(0,C.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,C.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,C.jsxs)(r.p,{children:[`Open `,(0,C.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,C.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,C.jsx)(n,{of:f}),`
`,(0,C.jsx)(n,{of:u}),`
`,(0,C.jsx)(r.p,{children:(0,C.jsx)(r.a,{href:`?path=/docs/components-dbicon-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,C.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,C.jsx)(n,{of:h}),`
`,(0,C.jsx)(n,{of:g}),`
`,(0,C.jsx)(n,{of:m}),`
`,(0,C.jsx)(r.p,{children:(0,C.jsx)(r.a,{href:`?path=/docs/components-dbicon-density--docs`,children:`Open the Density examples`})}),`
`,(0,C.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,C.jsx)(i,{children:`### Use component

You could use the \`data-icon\` or \`data-icon-trailing\` attributes on any HTML tag:

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<span data-icon="x_placeholder"> Icon </span>
</body>
\`\`\``}),`
`,(0,C.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,C.jsxs)(r.p,{children:[`In HTML the component is a `,(0,C.jsx)(r.code,{children:`<span>`}),` with the class `,(0,C.jsx)(r.code,{children:`db-icon`}),`. Options are `,(0,C.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,C.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `data-icon-weight` | `"16" \\| "20" \\| "24" \\| "32" \\| "48" \\| "64"` |  |\n| `data-icon-variant` | `string` |  |'}),`
`,`
`,(0,C.jsx)(i,{children:_}),`
`,(0,C.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,C.jsx)(i,{children:y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,C.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/icons`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,C.jsxs)(r.li,{children:[`npm: `,(0,C.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/icon`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,C.jsx)(r.li,{children:(0,C.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function S(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=a(),s(),r(),c(),d(),p(),v(),b()})))()}w();export{S as default};