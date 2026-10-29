import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-DITjJg24.js";import{a as r}from"./chunk-W22LQPXL-DcaaHA6n.js";import{a as i,c as a,d as o,l as s,n as c,r as l,u}from"./blocks-CjvmbxYb.js";import{a as d,n as f,r as p,t as m}from"./density.example.stories-Dqfgr4hI.js";import{r as h,t as g}from"./disabled.example.stories-DZ3JwWaH.js";import{n as _,t as v}from"./interaction.example.stories-BDLApB2N.js";import{n as y,t as b}from"./multi-line-text.example.stories-CCcquLUb.js";import{n as x,t as S}from"./no-text.example.stories-DAysN9cK.js";import{n as C,t as w}from"./show-icon-leading.example.stories-hZBYMXbd.js";import{n as T,t as E}from"./show-icon-trailing.example.stories-DRj_Ki5V.js";import{n as D,r as O,t as k}from"./size.example.stories-DDGDIHvf.js";import{a as A,i as j,n as M,r as N,t as P}from"./variant.example.stories-BsPPNXsh.js";import{n as F,r as I,t as L}from"./width.example.stories-BedyQ6sM.js";import{n as R,r as z,t as B}from"./button.overview.stories-BpBduEWO.js";var V;function H(){return(H=e((()=>{V=`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.

- Trigger an action (e.g. Send, Save, Delete)
- Indicate that interaction or confirmation is expected
- Highlight a primary or secondary action

**Status:** Stable · **Accessibility review:** done (2024-04-22)

**Design guidelines** (hierarchy, labels, icons, layout, Button vs. Link) are on the [Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
`})))()}var U;function W(){return(W=e((()=>{U=`## Vue

For general installation and configuration take a look at the [v-core-components](https://www.npmjs.com/package/@db-ux/v-core-components) package.

### Use component

\`\`\`vue App.vue
<!-- App.vue -->
<script>
import { DBButton } from "@db-ux/v-core-components";
<\/script>

<template>
	<DBButton variant="brand">Button</DBButton>
</template>
\`\`\`
`})))()}var G;function K(){return(K=e((()=>{G="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.\n- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.\n"})))()}var q;function J(){return(J=e((()=>{q="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function Y(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,Z.jsxs)(Z.Fragment,{children:[`
`,(0,Z.jsx)(s,{of:R}),`
`,(0,Z.jsx)(n.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,Z.jsxs)(n.blockquote,{children:[`
`,(0,Z.jsxs)(n.p,{children:[(0,Z.jsx)(n.strong,{children:`Prototype for discussion.`}),` This page bundles the developer documentation of a component in one place. Each section names its source. If the structure is agreed on, the page is generated for every component.`]}),`
`]}),`
`,(0,Z.jsx)(a,{children:V}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: `,(0,Z.jsx)(n.code,{children:`storybooks/_shared/overview/button/intro.md`}),` (shared by all Storybooks) – description and use cases from the platform page, review status from `,(0,Z.jsx)(n.code,{children:`showcases/patternhub/data/_accessibility-review.json`}),`.`]})}),`
`,(0,Z.jsx)(n.h2,{id:`playground`,children:`Playground`}),`
`,(0,Z.jsx)(l,{of:B}),`
`,(0,Z.jsx)(i,{of:B}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: new story `,(0,Z.jsx)(n.code,{children:`Playground`}),`; the controls come from the generated argTypes (`,(0,Z.jsx)(n.code,{children:`examples/_button.arg.types.ts`}),`).`]})}),`
`,(0,Z.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,Z.jsx)(u,{language:`shell`,dark:!0,code:`pnpm add @db-ux/v-core-components @db-ux/core-components @db-ux/core-foundations`}),`
`,(0,Z.jsxs)(n.p,{children:[`Styles, Vite and PostCSS plugins and the theme are covered in `,(0,Z.jsx)(n.a,{href:`?path=/docs/getting-started--docs`,children:`Getting Started`}),` and on the `,(0,Z.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/vue-setup`,rel:`nofollow`,children:`platform setup page for Vue`}),`.`]}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: install command from `,(0,Z.jsx)(n.code,{children:`output/vue/README.md`}),`.`]})}),`
`,(0,Z.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,`
`,(0,Z.jsx)(a,{children:U.replace(/^##\s+Vue\s*\n/,``)}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: `,(0,Z.jsx)(n.code,{children:`packages/components/src/components/button/docs/Vue.md`}),` – until now only in the Patternhub ("How to use").`]})}),`
`,(0,Z.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,Z.jsxs)(n.p,{children:[`Every example is a generated story with live preview. Open `,(0,Z.jsx)(n.strong,{children:`Show code`}),` below a preview for the snippet, or follow the link to the example page with controls.`]}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: generated stories from `,(0,Z.jsx)(n.code,{children:`packages/components/src/components/button/examples/*.example.lite.tsx`}),` – unchanged, only placed on this page.`]})}),`
`,(0,Z.jsx)(n.h3,{id:`variant`,children:`Variant`}),`
`,(0,Z.jsxs)(n.p,{children:[`Only use one primary button (`,(0,Z.jsx)(n.strong,{children:`Brand`}),`) as a CTA on a page; otherwise, use one of the adaptive buttons (`,(0,Z.jsx)(n.strong,{children:`Outlined`}),`, `,(0,Z.jsx)(n.strong,{children:`Filled`}),`, `,(0,Z.jsx)(n.strong,{children:`Ghost`}),`).`]}),`
`,(0,Z.jsx)(l,{of:j}),`
`,(0,Z.jsx)(l,{of:M}),`
`,(0,Z.jsx)(l,{of:N}),`
`,(0,Z.jsx)(l,{of:P}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsx)(n.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`All variants with controls`})}),`
`,(0,Z.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,Z.jsx)(l,{of:k}),`
`,(0,Z.jsx)(l,{of:D}),`
`,(0,Z.jsx)(n.h3,{id:`width`,children:`Width`}),`
`,(0,Z.jsx)(n.p,{children:`Auto width follows the content, full width follows the parent element.`}),`
`,(0,Z.jsx)(l,{of:L}),`
`,(0,Z.jsx)(l,{of:F}),`
`,(0,Z.jsx)(n.h3,{id:`icons`,children:`Icons`}),`
`,(0,Z.jsx)(n.p,{children:`Use at most one icon per button, either leading or trailing.`}),`
`,(0,Z.jsx)(l,{of:w}),`
`,(0,Z.jsx)(l,{of:E}),`
`,(0,Z.jsx)(n.h3,{id:`icon-only`,children:`Icon only`}),`
`,(0,Z.jsxs)(n.p,{children:[(0,Z.jsx)(n.code,{children:`noText`}),` hides the text visually; it stays in the markup as the accessible name. Always pass a text and add a tooltip.`]}),`
`,(0,Z.jsx)(l,{of:S}),`
`,(0,Z.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Z.jsx)(l,{of:g}),`
`,(0,Z.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Z.jsx)(l,{of:f}),`
`,(0,Z.jsx)(l,{of:p}),`
`,(0,Z.jsx)(l,{of:m}),`
`,(0,Z.jsx)(n.h3,{id:`multi-line-text`,children:`Multi line text`}),`
`,(0,Z.jsx)(l,{of:b}),`
`,(0,Z.jsx)(n.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Z.jsx)(l,{of:v}),`
`,(0,Z.jsxs)(n.p,{children:[`More: `,(0,Z.jsx)(n.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Form Attributes`}),` · `,(0,Z.jsx)(n.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Multi Line Text`}),` · `,(0,Z.jsx)(n.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Show Icon Leading`}),` · `,(0,Z.jsx)(n.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Show Icon Trailing`})]}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: section texts from the property descriptions in `,(0,Z.jsx)(n.code,{children:`model.ts`}),` and the platform guidelines.`]})}),`
`,(0,Z.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Z.jsx)(c,{of:R}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: generated by Storybook (vue-component-meta) from the types and JSDoc in `,(0,Z.jsx)(n.code,{children:`model.ts`}),` – already on every example page, here once for the component.`]})}),`
`,`
`,(0,Z.jsx)(a,{children:G}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: `,(0,Z.jsx)(n.code,{children:`packages/components/src/components/button/docs/Accessibility.md`}),` (new, shared by all Storybooks) – behaviour from `,(0,Z.jsx)(n.code,{children:`button.lite.tsx`}),` and `,(0,Z.jsx)(n.code,{children:`_button-components.scss`}),`, target size from the platform guideline "Accessibility".`]})}),`
`,(0,Z.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,Z.jsx)(a,{children:q.replace(/^## /gm,`### `).replace(/^### (sizes|variants|icons|class)$/gm,`#### $1`)}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsxs)(n.em,{children:[`Source: `,(0,Z.jsx)(n.code,{children:`packages/components/src/components/button/docs/Migration.md`}),` – until now only in the Patternhub ("Migration").`]})}),`
`,(0,Z.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Z.jsxs)(n.ul,{children:[`
`,(0,Z.jsx)(n.li,{children:(0,Z.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Design guidelines on the platform`})}),`
`,(0,Z.jsxs)(n.li,{children:[`npm: `,(0,Z.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`}),` · `,(0,Z.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Z.jsx)(n.li,{children:(0,Z.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Z.jsx)(n.li,{children:(0,Z.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]}),`
`,(0,Z.jsx)(n.p,{children:(0,Z.jsx)(n.em,{children:`Source: new.`})})]})}function X(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,Z.jsx)(n,{...e,children:(0,Z.jsx)(Y,{...e})}):Y(e)}var Z;function Q(){return(Q=e((()=>{Z=r(),n(),o(),z(),d(),h(),_(),y(),x(),C(),T(),O(),A(),I(),H(),W(),K(),J()})))()}Q();export{X as default};