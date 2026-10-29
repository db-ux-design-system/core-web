import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DpkWNTDv.js";import{i as n,r}from"./react-BRlCaOWX.js";import{c as i,l as a,n as o,o as s,s as c}from"./blocks-B8nRq-DM.js";import{n as l,r as u,t as d}from"./button.overview.stories-DNY3nvPW.js";import{a as f,n as p,r as m,t as h}from"./density.example.stories-DAp5klNN.js";import{r as g,t as _}from"./disabled.example.stories-Bz4ZIhFI.js";import{n as v,t as y}from"./interaction.example.stories-BJdlfhPK.js";import{n as b,t as x}from"./multi-line-text.example.stories-_6vbd1Y9.js";import{n as S,t as C}from"./no-text.example.stories-DPY6x4ZC.js";import{n as w,t as T}from"./show-icon-leading.example.stories-0fjOCJ--.js";import{n as E,t as D}from"./show-icon-trailing.example.stories-r3MrYpOg.js";import{n as O,r as k,t as A}from"./size.example.stories-DTLjnVzs.js";import{a as j,i as M,n as N,r as P,t as F}from"./variant.example.stories-DFt-duOJ.js";import{n as I,r as L,t as R}from"./width.example.stories-BrZdjSgg.js";var z;function B(){return(B=e((()=>{z=`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.

- Trigger an action (e.g. Send, Save, Delete)
- Indicate that interaction or confirmation is expected
- Highlight a primary or secondary action

**Status:** Stable · **Accessibility review:** done (2024-04-22)

**Design guidelines** (hierarchy, labels, icons, layout, Button vs. Link) are on the [Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
`})))()}var V;function H(){return(H=e((()=>{V=`## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<button class="db-button" data-variant="brand" type="button">Button</button>
</body>
\`\`\`
`})))()}var U;function W(){return(W=e((()=>{U="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.\n- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.\n"})))()}var G;function K(){return(K=e((()=>{G="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function q(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,Y.jsxs)(Y.Fragment,{children:[`
`,(0,Y.jsx)(c,{of:l}),`
`,(0,Y.jsx)(t.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,Y.jsxs)(t.blockquote,{children:[`
`,(0,Y.jsxs)(t.p,{children:[(0,Y.jsx)(t.strong,{children:`Prototype for discussion.`}),` This page bundles the developer documentation of a component in one place. Each section names its source. If the structure is agreed on, the page is generated for every component.`]}),`
`]}),`
`,(0,Y.jsx)(s,{children:z}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: `,(0,Y.jsx)(t.code,{children:`storybooks/_shared/overview/button/intro.md`}),` (shared by all Storybooks) – description and use cases from the platform page, review status from `,(0,Y.jsx)(t.code,{children:`showcases/patternhub/data/_accessibility-review.json`}),`.`]})}),`
`,(0,Y.jsx)(t.h2,{id:`playground`,children:`Playground`}),`
`,(0,Y.jsx)(o,{of:d}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: new story `,(0,Y.jsx)(t.code,{children:`Playground`}),`. The HTML Storybook has no controls; `,(0,Y.jsx)(t.strong,{children:`Show code`}),` shows the markup.`]})}),`
`,(0,Y.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,Y.jsx)(i,{language:`shell`,dark:!0,code:`pnpm add @db-ux/core-components @db-ux/core-foundations`}),`
`,(0,Y.jsxs)(t.p,{children:[`Styles, Vite and PostCSS plugins and the theme are covered in `,(0,Y.jsx)(t.a,{href:`?path=/docs/getting-started--docs`,children:`Getting Started`}),` and on the `,(0,Y.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`platform setup page for HTML/CSS`}),`.`]}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: install command from `,(0,Y.jsx)(t.code,{children:`packages/components/README.md`}),`.`]})}),`
`,(0,Y.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,`
`,(0,Y.jsx)(s,{children:V.replace(/^##\s+HTML\s*\n/,``)}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: `,(0,Y.jsx)(t.code,{children:`packages/components/src/components/button/docs/HTML.md`}),` – until now only in the Patternhub ("How to use").`]})}),`
`,(0,Y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,Y.jsxs)(t.p,{children:[`Every example is a generated story with live preview. Open `,(0,Y.jsx)(t.strong,{children:`Show code`}),` below a preview for the HTML markup, or follow the link to the example page.`]}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: generated stories from `,(0,Y.jsx)(t.code,{children:`packages/components/src/components/button/examples/*.example.lite.tsx`}),` – unchanged, only placed on this page.`]})}),`
`,(0,Y.jsx)(t.h3,{id:`variant`,children:`Variant`}),`
`,(0,Y.jsxs)(t.p,{children:[`Only use one primary button (`,(0,Y.jsx)(t.strong,{children:`Brand`}),`) as a CTA on a page; otherwise, use one of the adaptive buttons (`,(0,Y.jsx)(t.strong,{children:`Outlined`}),`, `,(0,Y.jsx)(t.strong,{children:`Filled`}),`, `,(0,Y.jsx)(t.strong,{children:`Ghost`}),`).`]}),`
`,(0,Y.jsx)(o,{of:M}),`
`,(0,Y.jsx)(o,{of:N}),`
`,(0,Y.jsx)(o,{of:P}),`
`,(0,Y.jsx)(o,{of:F}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsx)(t.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`All variants`})}),`
`,(0,Y.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,Y.jsx)(o,{of:A}),`
`,(0,Y.jsx)(o,{of:O}),`
`,(0,Y.jsx)(t.h3,{id:`width`,children:`Width`}),`
`,(0,Y.jsx)(t.p,{children:`Auto width follows the content, full width follows the parent element.`}),`
`,(0,Y.jsx)(o,{of:R}),`
`,(0,Y.jsx)(o,{of:I}),`
`,(0,Y.jsx)(t.h3,{id:`icons`,children:`Icons`}),`
`,(0,Y.jsx)(t.p,{children:`Use at most one icon per button, either leading or trailing.`}),`
`,(0,Y.jsx)(o,{of:T}),`
`,(0,Y.jsx)(o,{of:D}),`
`,(0,Y.jsx)(t.h3,{id:`icon-only`,children:`Icon only`}),`
`,(0,Y.jsxs)(t.p,{children:[(0,Y.jsx)(t.code,{children:`noText`}),` hides the text visually; it stays in the markup as the accessible name. Always pass a text and add a tooltip.`]}),`
`,(0,Y.jsx)(o,{of:C}),`
`,(0,Y.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Y.jsx)(o,{of:_}),`
`,(0,Y.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,Y.jsx)(o,{of:p}),`
`,(0,Y.jsx)(o,{of:m}),`
`,(0,Y.jsx)(o,{of:h}),`
`,(0,Y.jsx)(t.h3,{id:`multi-line-text`,children:`Multi line text`}),`
`,(0,Y.jsx)(o,{of:x}),`
`,(0,Y.jsx)(t.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Y.jsx)(o,{of:y}),`
`,(0,Y.jsxs)(t.p,{children:[`More: `,(0,Y.jsx)(t.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Form Attributes`}),` · `,(0,Y.jsx)(t.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Multi Line Text`}),` · `,(0,Y.jsx)(t.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Show Icon Leading`}),` · `,(0,Y.jsx)(t.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Show Icon Trailing`})]}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: section texts from the property descriptions in `,(0,Y.jsx)(t.code,{children:`model.ts`}),` and the platform guidelines.`]})}),`
`,(0,Y.jsx)(t.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Y.jsxs)(t.p,{children:[`In HTML the component is a `,(0,Y.jsx)(t.code,{children:`<button>`}),` with the class `,(0,Y.jsx)(t.code,{children:`db-button`}),`. Variants and options are `,(0,Y.jsx)(t.code,{children:`data-`}),` attributes, for example `,(0,Y.jsx)(t.code,{children:`data-variant="brand"`}),`, `,(0,Y.jsx)(t.code,{children:`data-size="small"`}),` or `,(0,Y.jsx)(t.code,{children:`data-width="full"`}),`. `,(0,Y.jsx)(t.strong,{children:`Show code`}),` below each example shows the complete markup.`]}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsx)(t.em,{children:`Source: new; the attribute names come from the rendered markup of the examples.`})}),`
`,`
`,(0,Y.jsx)(s,{children:U}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: `,(0,Y.jsx)(t.code,{children:`packages/components/src/components/button/docs/Accessibility.md`}),` (new, shared by all Storybooks) – behaviour from `,(0,Y.jsx)(t.code,{children:`button.lite.tsx`}),` and `,(0,Y.jsx)(t.code,{children:`_button-components.scss`}),`, target size from the platform guideline "Accessibility".`]})}),`
`,(0,Y.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,Y.jsx)(s,{children:G.replace(/^## /gm,`### `).replace(/^### (sizes|variants|icons|class)$/gm,`#### $1`)}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsxs)(t.em,{children:[`Source: `,(0,Y.jsx)(t.code,{children:`packages/components/src/components/button/docs/Migration.md`}),` – until now only in the Patternhub ("Migration").`]})}),`
`,(0,Y.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,Y.jsxs)(t.ul,{children:[`
`,(0,Y.jsx)(t.li,{children:(0,Y.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Design guidelines on the platform`})}),`
`,(0,Y.jsxs)(t.li,{children:[`npm: `,(0,Y.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Y.jsx)(t.li,{children:(0,Y.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Y.jsx)(t.li,{children:(0,Y.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]}),`
`,(0,Y.jsx)(t.p,{children:(0,Y.jsx)(t.em,{children:`Source: new.`})})]})}function J(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,Y.jsx)(t,{...e,children:(0,Y.jsx)(q,{...e})}):q(e)}var Y;function X(){return(X=e((()=>{Y=t(),r(),a(),u(),f(),g(),v(),b(),S(),w(),E(),k(),j(),L(),B(),H(),W(),K()})))()}X();export{J as default};