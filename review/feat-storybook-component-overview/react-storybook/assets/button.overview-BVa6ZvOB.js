import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-BMNwYj7z.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{c as i,l as a,n as o,r as s,s as c,u as l}from"./blocks-Dc8Hs7X2.js";import{a as u,n as d,r as f,t as p}from"./density.example.stories-B5psb-v2.js";import{r as m,t as h}from"./disabled.example.stories-Tjh4fINE.js";import{n as g,t as _}from"./interaction.example.stories-6TFrzKKS.js";import{n as v,t as y}from"./multi-line-text.example.stories-DqapCHKt.js";import{n as b,t as x}from"./no-text.example.stories-DuD5rats.js";import{n as S,t as C}from"./show-icon-leading.example.stories-DLEdPCnt.js";import{n as w,t as T}from"./show-icon-trailing.example.stories-1W_QQzxG.js";import{n as E,r as D,t as O}from"./size.example.stories-Cjm7f-lG.js";import{a as k,i as A,n as j,r as M,t as N}from"./variant.example.stories-MhLV3Rf4.js";import{n as P,r as F,t as I}from"./width.example.stories-DQm13NFb.js";import{n as L,t as R}from"./button.overview.stories-BeN83DeU.js";var z;function B(){return(B=e((()=>{z=`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.

- Trigger an action (e.g. Send, Save, Delete)
- Indicate that interaction or confirmation is expected
- Highlight a primary or secondary action

**Status:** Stable · **Accessibility review:** done (2024-04-22)

**Design guidelines** (hierarchy, labels, icons, layout, Button vs. Link) are on the [Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
`})))()}var V;function H(){return(H=e((()=>{V=`## React

For general installation and configuration take a look at the [react-core-components](https://www.npmjs.com/package/@db-ux/react-core-components) package.

### Use component

\`\`\`tsx App.tsx
// App.tsx
import { DBButton } from "@db-ux/react-core-components";

const App = () => <DBButton variant="brand">Button</DBButton>;

export default App;
\`\`\`
`})))()}var U;function W(){return(W=e((()=>{U="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.\n- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.\n"})))()}var G;function K(){return(K=e((()=>{G="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function q(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,Y.jsxs)(Y.Fragment,{children:[`
`,(0,Y.jsx)(i,{of:R}),`
`,(0,Y.jsx)(n.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,Y.jsxs)(n.blockquote,{children:[`
`,(0,Y.jsxs)(n.p,{children:[(0,Y.jsx)(n.strong,{children:`Prototype for discussion.`}),` This page bundles the developer documentation of a component in one place. Each section names its source. If the structure is agreed on, the page is generated for every component.`]}),`
`]}),`
`,(0,Y.jsx)(c,{children:z}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: `,(0,Y.jsx)(n.code,{children:`storybooks/_shared/overview/button/intro.md`}),` (shared by all Storybooks) – description and use cases from the platform page, review status from `,(0,Y.jsx)(n.code,{children:`showcases/patternhub/data/_accessibility-review.json`}),`.`]})}),`
`,(0,Y.jsx)(n.h2,{id:`installation`,children:`Installation`}),`
`,(0,Y.jsx)(a,{language:`shell`,dark:!0,code:`pnpm add @db-ux/react-core-components @db-ux/core-components @db-ux/core-foundations`}),`
`,(0,Y.jsxs)(n.p,{children:[`Styles, Vite and PostCSS plugins and the theme are covered in `,(0,Y.jsx)(n.a,{href:`?path=/docs/getting-started--docs`,children:`Getting Started`}),` and on the `,(0,Y.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`platform setup page for React`}),`.`]}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: install command from `,(0,Y.jsx)(n.code,{children:`output/react/README.md`}),`.`]})}),`
`,(0,Y.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,`
`,(0,Y.jsx)(c,{children:V.replace(/^##\s+React\s*\n/,``)}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: `,(0,Y.jsx)(n.code,{children:`packages/components/src/components/button/docs/React.md`}),` – until now only in the Patternhub ("How to use").`]})}),`
`,(0,Y.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,Y.jsxs)(n.p,{children:[`Every example is a generated story with live preview. Open `,(0,Y.jsx)(n.strong,{children:`Show code`}),` below a preview for the snippet, or follow the link to the example page with controls.`]}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: generated stories from `,(0,Y.jsx)(n.code,{children:`packages/components/src/components/button/examples/*.example.lite.tsx`}),` – unchanged, only placed on this page.`]})}),`
`,(0,Y.jsx)(n.h3,{id:`variant`,children:`Variant`}),`
`,(0,Y.jsxs)(n.p,{children:[`Only use one primary button (`,(0,Y.jsx)(n.strong,{children:`Brand`}),`) as a CTA on a page; otherwise, use one of the adaptive buttons (`,(0,Y.jsx)(n.strong,{children:`Outlined`}),`, `,(0,Y.jsx)(n.strong,{children:`Filled`}),`, `,(0,Y.jsx)(n.strong,{children:`Ghost`}),`).`]}),`
`,(0,Y.jsx)(s,{of:A}),`
`,(0,Y.jsx)(s,{of:j}),`
`,(0,Y.jsx)(s,{of:M}),`
`,(0,Y.jsx)(s,{of:N}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsx)(n.a,{href:`?path=/docs/components-dbbutton-variant--docs`,children:`All variants with controls`})}),`
`,(0,Y.jsx)(n.h3,{id:`size`,children:`Size`}),`
`,(0,Y.jsx)(s,{of:O}),`
`,(0,Y.jsx)(s,{of:E}),`
`,(0,Y.jsx)(n.h3,{id:`width`,children:`Width`}),`
`,(0,Y.jsx)(n.p,{children:`Auto width follows the content, full width follows the parent element.`}),`
`,(0,Y.jsx)(s,{of:I}),`
`,(0,Y.jsx)(s,{of:P}),`
`,(0,Y.jsx)(n.h3,{id:`icons`,children:`Icons`}),`
`,(0,Y.jsx)(n.p,{children:`Use at most one icon per button, either leading or trailing.`}),`
`,(0,Y.jsx)(s,{of:C}),`
`,(0,Y.jsx)(s,{of:T}),`
`,(0,Y.jsx)(n.h3,{id:`icon-only`,children:`Icon only`}),`
`,(0,Y.jsxs)(n.p,{children:[(0,Y.jsx)(n.code,{children:`noText`}),` hides the text visually; it stays in the markup as the accessible name. Always pass a text and add a tooltip.`]}),`
`,(0,Y.jsx)(s,{of:x}),`
`,(0,Y.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Y.jsx)(s,{of:h}),`
`,(0,Y.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Y.jsx)(s,{of:d}),`
`,(0,Y.jsx)(s,{of:f}),`
`,(0,Y.jsx)(s,{of:p}),`
`,(0,Y.jsx)(n.h3,{id:`multi-line-text`,children:`Multi line text`}),`
`,(0,Y.jsx)(s,{of:y}),`
`,(0,Y.jsx)(n.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Y.jsx)(s,{of:_}),`
`,(0,Y.jsxs)(n.p,{children:[`More: `,(0,Y.jsx)(n.a,{href:`?path=/docs/components-dbbutton-form-attributes--docs`,children:`Form Attributes`}),` · `,(0,Y.jsx)(n.a,{href:`?path=/docs/components-dbbutton-multi-line-text--docs`,children:`Multi Line Text`}),` · `,(0,Y.jsx)(n.a,{href:`?path=/docs/components-dbbutton-show-icon-leading--docs`,children:`Show Icon Leading`}),` · `,(0,Y.jsx)(n.a,{href:`?path=/docs/components-dbbutton-show-icon-trailing--docs`,children:`Show Icon Trailing`})]}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: section texts from the property descriptions in `,(0,Y.jsx)(n.code,{children:`model.ts`}),` and the platform guidelines.`]})}),`
`,(0,Y.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Y.jsx)(o,{of:R}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: generated by Storybook (react-docgen) from the types and JSDoc in `,(0,Y.jsx)(n.code,{children:`model.ts`}),` – already on every example page, here once for the component.`]})}),`
`,`
`,(0,Y.jsx)(c,{children:U}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: `,(0,Y.jsx)(n.code,{children:`packages/components/src/components/button/docs/Accessibility.md`}),` (new, shared by all Storybooks) – behaviour from `,(0,Y.jsx)(n.code,{children:`button.lite.tsx`}),` and `,(0,Y.jsx)(n.code,{children:`_button-components.scss`}),`, target size from the platform guideline "Accessibility".`]})}),`
`,(0,Y.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,Y.jsx)(c,{children:G.replace(/^## /gm,`### `).replace(/^### (sizes|variants|icons|class)$/gm,`#### $1`)}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsxs)(n.em,{children:[`Source: `,(0,Y.jsx)(n.code,{children:`packages/components/src/components/button/docs/Migration.md`}),` – until now only in the Patternhub ("Migration").`]})}),`
`,(0,Y.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Y.jsxs)(n.ul,{children:[`
`,(0,Y.jsx)(n.li,{children:(0,Y.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Design guidelines on the platform`})}),`
`,(0,Y.jsxs)(n.li,{children:[`npm: `,(0,Y.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`}),` · `,(0,Y.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Y.jsx)(n.li,{children:(0,Y.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Y.jsx)(n.li,{children:(0,Y.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]}),`
`,(0,Y.jsx)(n.p,{children:(0,Y.jsx)(n.em,{children:`Source: new.`})})]})}function J(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,Y.jsx)(n,{...e,children:(0,Y.jsx)(q,{...e})}):q(e)}var Y;function X(){return(X=e((()=>{Y=r(),n(),l(),L(),u(),m(),g(),v(),b(),S(),w(),D(),k(),F(),B(),H(),W(),K()})))()}X();export{J as default};