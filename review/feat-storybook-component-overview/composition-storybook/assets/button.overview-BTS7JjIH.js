import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{i as t,r as n}from"./react-BUqVpgzm.js";import{a as r}from"./chunk-W22LQPXL-Dm2ia4cO.js";import{a as i,o as a,s as o}from"./blocks-D0hbIZcP.js";var s;function c(){return(c=e((()=>{s=`Buttons initiate actions and confirm decisions. Use them to guide users through key tasks and flows.

- Trigger an action (e.g. Send, Save, Delete)
- Indicate that interaction or confirmation is expected
- Highlight a primary or secondary action

**Status:** Stable · **Accessibility review:** done (2024-04-22)

**Design guidelines** (hierarchy, labels, icons, layout, Button vs. Link) are on the [Design System Platform](https://design-system.deutschebahn.com/documentation/components/button).
`})))()}var l;function u(){return(u=e((()=>{l="## Accessibility\n\n- DBButton renders a native `<button>`: focus, keyboard activation and the disabled state come from the browser.\n- Without `type`, the button is `button` if it has a click handler or `commandfor`, otherwise `submit`. Set `type` explicitly inside forms.\n- Icon only (`noText`): the text is the accessible name. Never leave it empty, and add a tooltip.\n- The small button in functional density is 20 px high. Keep a clickable area of at least 24 × 24 px with surrounding space, and don't let other controls overlap it.\n"})))()}var d;function f(){return(f=e((()=>{d="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before       | Status | After       | Description |\n| ------------ | :----: | ----------- | ----------- |\n| `elm-button` |   🔁   | `db-button` |             |\n\n### sizes\n\n| Before    | Status | After | Description                                                                                                                                                                                   |\n| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |\n| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |\n\n### variants\n\n| Before              | Status | After      | Description                                                  |\n| ------------------- | :----: | ---------- | ------------------------------------------------------------ |\n| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |\n| `brand-primary`     |   🔁   | `brand`    |                                                              |\n| `secondary-outline` |   🔁   | `outlined` |                                                              |\n| `secondary-solid`   |   🔁   | `filled`   |                                                              |\n| `tertiary-plain`    |   🔁   | `ghost`    |                                                              |\n\n### icons\n\n| Before         | Status | After          | Description                                           |\n| -------------- | :----: | -------------- | ----------------------------------------------------- |\n| `iconTrailing` |   🔁   | `iconTrailing` | trailing icons are supported again via `iconTrailing` |\n| `iconOnly`     |   🔁   | `noText`       |                                                       |\n"})))()}function p(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[`
`,(0,h.jsx)(a,{title:`Components/DBButton`}),`
`,(0,h.jsx)(n.h1,{id:`dbbutton`,children:`DBButton`}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.strong,{children:`Prototype for discussion.`}),` Entry page in the composition Storybook. It holds everything that is the same for every framework and leads to the overview page of your framework. Each section names its source.`]}),`
`]}),`
`,(0,h.jsx)(i,{children:s}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsxs)(n.em,{children:[`Source: `,(0,h.jsx)(n.code,{children:`storybooks/_shared/overview/button/intro.md`}),` (shared with the framework Storybooks).`]})}),`
`,(0,h.jsx)(n.h2,{id:`choose-your-framework`,children:`Choose your framework`}),`
`,(0,h.jsx)(n.p,{children:`Installation, usage, examples with code and properties are framework-specific:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`?path=/docs/react_components-dbbutton-overview--docs`,children:`React`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`?path=/docs/angular_components-dbbutton-overview--docs`,children:`Angular`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`?path=/docs/vue_components-dbbutton-overview--docs`,children:`Vue`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`?path=/docs/html_components-dbbutton-overview--docs`,children:`HTML`})}),`
`]}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.em,{children:`Source: new. The links open the overview pages of the framework Storybooks, which the composition Storybook includes as refs.`})}),`
`,`
`,(0,h.jsx)(i,{children:l}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsxs)(n.em,{children:[`Source: `,(0,h.jsx)(n.code,{children:`packages/components/src/components/button/docs/Accessibility.md`}),` (shared with the framework Storybooks).`]})}),`
`,(0,h.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,`
`,(0,h.jsx)(i,{children:d.replace(/^## /gm,`### `).replace(/^### (sizes|variants|icons|class)$/gm,`#### $1`)}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsxs)(n.em,{children:[`Source: `,(0,h.jsx)(n.code,{children:`packages/components/src/components/button/docs/Migration.md`}),` – until now only in the Patternhub ("Migration"). The migration from DB UX Design System – Generation 2 (aka DB UI) is the same for every framework.`]})}),`
`,(0,h.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/button`,rel:`nofollow`,children:`Design guidelines on the platform`})}),`
`,(0,h.jsxs)(n.li,{children:[`npm: `,(0,h.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`}),` · `,(0,h.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`}),` · `,(0,h.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/ngx-core-components`,rel:`nofollow`,children:`@db-ux/ngx-core-components`}),` · `,(0,h.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/v-core-components`,rel:`nofollow`,children:`@db-ux/v-core-components`})]}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/button`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,h.jsx)(n.li,{children:(0,h.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]}),`
`,(0,h.jsx)(n.p,{children:(0,h.jsx)(n.em,{children:`Source: new.`})})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),c(),u(),f()})))()}g();export{m as default};