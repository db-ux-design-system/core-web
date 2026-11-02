import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-PQz0HZuL.js";import{i as n,r}from"./react-C07LMLXN.js";import{c as i,l as a,n as o,o as s,s as c}from"./blocks-Ler8WN6G.js";import{n as l,t as u}from"./button.overview.stories-DBg9E_Ao.js";import{a as d,n as f,r as p,t as m}from"./density.example.stories-C5SCdNGR.js";import{r as h,t as g}from"./disabled.example.stories-C-F-BlmQ.js";import{n as _,t as v}from"./interaction.example.stories-BrIodShz.js";import{n as y,t as b}from"./multi-line-text.example.stories-CgAZTBoX.js";import{n as x,t as S}from"./no-text.example.stories-BJSQQ1Pa.js";import{n as C,t as w}from"./show-icon-leading.example.stories-kHMoWWj9.js";import{n as T,t as E}from"./show-icon-trailing.example.stories-X8mEs8GL.js";import{n as D,r as O,t as k}from"./size.example.stories-Be2SeNV7.js";import{a as A,i as j,n as M,r as N,t as P}from"./variant.example.stories-DKm_tn5K.js";import{n as F,r as I,t as L}from"./width.example.stories-0gAeb54x.js";var R;function z(){return(z=e((()=>{R=`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.

- Trigger an action (e.g. Send, Save, Delete)
- Indicate that interaction or confirmation is expected
- Highlight a primary or secondary action

**Status:** Stable · **Accessibility review:** done (2024-04-22)

**Design guidelines** (hierarchy, labels, icons, layout, Button vs. Link) are on the [Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
`})))()}var B;function V(){return(V=e((()=>{B=`## HTML

For general installation and configuration take a look at the [components](https://www.npmjs.com/package/@db-ux/core-components) package.

### Use component

\`\`\`html index.html
<!-- index.html -->
...
<body>
	<button class="db-button" data-variant="brand" type="button">Button</button>
</body>
\`\`\`
`})))()}var H;function U(){return(U=e((()=>{H="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.\n- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.\n"})))()}var W;function G(){return(G=e((()=>{W="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function K(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,J.jsxs)(J.Fragment,{children:[`
`,(0,J.jsx)(c,{of:u}),`
`,(0,J.jsx)(t.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,J.jsxs)(t.blockquote,{children:[`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.strong,{children:`Prototype for discussion.`}),` This page bundles the developer documentation of a component in one place. Each section names its source. If the structure is agreed on, the page is generated for every component.`]}),`
`]}),`
`,(0,J.jsx)(s,{children:R}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: `,(0,J.jsx)(t.code,{children:`storybooks/_shared/overview/button/intro.md`}),` (shared by all Storybooks) – description and use cases from the platform page, review status from `,(0,J.jsx)(t.code,{children:`showcases/patternhub/data/_accessibility-review.json`}),`.`]})}),`
`,(0,J.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,J.jsx)(i,{language:`shell`,dark:!0,code:`pnpm add @db-ux/core-components @db-ux/core-foundations`}),`
`,(0,J.jsxs)(t.p,{children:[`Styles, Vite and PostCSS plugins and the theme are covered in `,(0,J.jsx)(t.a,{href:`?path=/docs/getting-started--docs`,children:`Getting Started`}),` and on the `,(0,J.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`platform setup page for HTML/CSS`}),`.`]}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: install command from `,(0,J.jsx)(t.code,{children:`packages/components/README.md`}),`.`]})}),`
`,(0,J.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,`
`,(0,J.jsx)(s,{children:B.replace(/^##\s+HTML\s*\n/,``)}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: `,(0,J.jsx)(t.code,{children:`packages/components/src/components/button/docs/HTML.md`}),` – until now only in the Patternhub ("How to use").`]})}),`
`,(0,J.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,J.jsxs)(t.p,{children:[`Every example is a generated story with live preview. Open `,(0,J.jsx)(t.strong,{children:`Show code`}),` below a preview for the HTML markup, or follow the link to the example page.`]}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: generated stories from `,(0,J.jsx)(t.code,{children:`packages/components/src/components/button/examples/*.example.lite.tsx`}),` – unchanged, only placed on this page.`]})}),`
`,(0,J.jsx)(t.h3,{id:`variant`,children:`Variant`}),`
`,(0,J.jsxs)(t.p,{children:[`Only use one primary button (`,(0,J.jsx)(t.strong,{children:`Brand`}),`) as a CTA on a page; otherwise, use one of the adaptive buttons (`,(0,J.jsx)(t.strong,{children:`Outlined`}),`, `,(0,J.jsx)(t.strong,{children:`Filled`}),`, `,(0,J.jsx)(t.strong,{children:`Ghost`}),`).`]}),`
`,(0,J.jsx)(o,{of:j}),`
`,(0,J.jsx)(o,{of:M}),`
`,(0,J.jsx)(o,{of:N}),`
`,(0,J.jsx)(o,{of:P}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsx)(t.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`All variants`})}),`
`,(0,J.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,J.jsx)(o,{of:k}),`
`,(0,J.jsx)(o,{of:D}),`
`,(0,J.jsx)(t.h3,{id:`width`,children:`Width`}),`
`,(0,J.jsx)(t.p,{children:`Auto width follows the content, full width follows the parent element.`}),`
`,(0,J.jsx)(o,{of:L}),`
`,(0,J.jsx)(o,{of:F}),`
`,(0,J.jsx)(t.h3,{id:`icons`,children:`Icons`}),`
`,(0,J.jsx)(t.p,{children:`Use at most one icon per button, either leading or trailing.`}),`
`,(0,J.jsx)(o,{of:w}),`
`,(0,J.jsx)(o,{of:E}),`
`,(0,J.jsx)(t.h3,{id:`icon-only`,children:`Icon only`}),`
`,(0,J.jsxs)(t.p,{children:[(0,J.jsx)(t.code,{children:`noText`}),` hides the text visually; it stays in the markup as the accessible name. Always pass a text and add a tooltip.`]}),`
`,(0,J.jsx)(o,{of:S}),`
`,(0,J.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,J.jsx)(o,{of:g}),`
`,(0,J.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,J.jsx)(o,{of:f}),`
`,(0,J.jsx)(o,{of:p}),`
`,(0,J.jsx)(o,{of:m}),`
`,(0,J.jsx)(t.h3,{id:`multi-line-text`,children:`Multi line text`}),`
`,(0,J.jsx)(o,{of:b}),`
`,(0,J.jsx)(t.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,J.jsx)(o,{of:v}),`
`,(0,J.jsxs)(t.p,{children:[`More: `,(0,J.jsx)(t.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Form Attributes`}),` · `,(0,J.jsx)(t.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Multi Line Text`}),` · `,(0,J.jsx)(t.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Show Icon Leading`}),` · `,(0,J.jsx)(t.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Show Icon Trailing`})]}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: section texts from the property descriptions in `,(0,J.jsx)(t.code,{children:`model.ts`}),` and the platform guidelines.`]})}),`
`,(0,J.jsx)(t.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,J.jsxs)(t.p,{children:[`In HTML the component is a `,(0,J.jsx)(t.code,{children:`<button>`}),` with the class `,(0,J.jsx)(t.code,{children:`db-button`}),`. Variants and options are `,(0,J.jsx)(t.code,{children:`data-`}),` attributes, for example `,(0,J.jsx)(t.code,{children:`data-variant="brand"`}),`, `,(0,J.jsx)(t.code,{children:`data-size="small"`}),` or `,(0,J.jsx)(t.code,{children:`data-width="full"`}),`. `,(0,J.jsx)(t.strong,{children:`Show code`}),` below each example shows the complete markup.`]}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsx)(t.em,{children:`Source: new; the attribute names come from the rendered markup of the examples.`})}),`
`,`
`,(0,J.jsx)(s,{children:H}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: `,(0,J.jsx)(t.code,{children:`packages/components/src/components/button/docs/Accessibility.md`}),` (new, shared by all Storybooks) – behaviour from `,(0,J.jsx)(t.code,{children:`button.lite.tsx`}),` and `,(0,J.jsx)(t.code,{children:`_button-components.scss`}),`, target size from the platform guideline "Accessibility".`]})}),`
`,(0,J.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,J.jsx)(s,{children:W.replace(/^## /gm,`### `).replace(/^### (sizes|variants|icons|class)$/gm,`#### $1`)}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsxs)(t.em,{children:[`Source: `,(0,J.jsx)(t.code,{children:`packages/components/src/components/button/docs/Migration.md`}),` – until now only in the Patternhub ("Migration").`]})}),`
`,(0,J.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,J.jsxs)(t.ul,{children:[`
`,(0,J.jsx)(t.li,{children:(0,J.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Design guidelines on the platform`})}),`
`,(0,J.jsxs)(t.li,{children:[`npm: `,(0,J.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,J.jsx)(t.li,{children:(0,J.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,J.jsx)(t.li,{children:(0,J.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]}),`
`,(0,J.jsx)(t.p,{children:(0,J.jsx)(t.em,{children:`Source: new.`})})]})}function q(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,J.jsx)(t,{...e,children:(0,J.jsx)(K,{...e})}):K(e)}var J;function Y(){return(Y=e((()=>{J=t(),r(),a(),l(),d(),h(),_(),y(),x(),C(),T(),O(),A(),I(),z(),V(),U(),G()})))()}Y();export{q as default};