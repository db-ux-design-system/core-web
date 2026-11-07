import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-DbWjxpBK.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as s}from"./react-DITjJg24.js";import{n as c,t as ee}from"./control-panel-desktop.overview.stories-BnDBwfCE.js";import{a as te,c as ne,i as re,n as ie,o as ae,r as oe,t as l}from"./density.example.stories-D3vX4nqS.js";import{a as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _}from"./examples.example.stories-xdhLbBRl.js";import{i as v,n as y,r as b,t as x}from"./interaction.example.stories-DUAqFVES.js";import{n as S,r as C,t as w}from"./orientation.example.stories-BuEtYw02.js";import{a as T,i as E,n as D,o as O,r as se,s as k,t as A}from"./width.example.stories-Dq4gW845.js";import{a as j,i as M,n as N,r as P,s as F,t as I}from"./content.example.stories-BC9S8Gsg.js";import{a as L,n as R,r as z,t as B}from"./density.example.stories-BDN-VK9I.js";import{i as V,n as H,r as U,t as W}from"./variant.example.stories-C44Hv8b6.js";var G;function K(){return(K=e((()=>{G=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UX v4 ➡ DB UX v5

\`DBControlPanelDesktop\` is the new component that replaces the desktop portion of the former \`DBHeader\`.

### class

| Before      | Status | After                      | Description                              |
| ----------- | :----: | -------------------------- | ---------------------------------------- |
| \`db-header\` |   🔁   | \`db-control-panel-desktop\` | Renamed to reflect the desktop-only role |

### properties

| Before            | Status | After                 | Description                                                     |
| ----------------- | :----: | --------------------- | --------------------------------------------------------------- |
| \`burgerMenuLabel\` |   ❌   | ❌                    | Moved to \`DBControlPanelMobile\`                                 |
| \`drawerOpen\`      |   ❌   | ❌                    | Moved to \`DBControlPanelMobile\`                                 |
| \`width\`           |   🔁   | \`width\`               | Still available                                                 |
| —                 |   🆕   | \`expanded\`            | Set the expanded/collapsed state initially for the left sidebar |
| —                 |   🆕   | \`expandButtonTooltip\` | Set the tooltip for the expand/collapse button                  |
| —                 |   🆕   | \`orientation\`         | Change the orientation (horizontal/vertical)                    |

### slots

| Before           | Status | After  | Description                         |
| ---------------- | :----: | ------ | ----------------------------------- |
| \`metaNavigation\` |   🔁   | \`meta\` | Shortened slot name for conciseness |
`})))()}var q;function J(){return(J=e((()=>{q=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before                    | Status | After                    | Description |
| ------------------------- | :----: | ------------------------ | ----------- |
| \`cmp-control-panel-brand\` |   🔁   | \`db-control-panel-brand\` |             |

### properties

> **Note**
> We removed all old properties, because control-panel-brand hasn't a wrapping anchor tag (\`<a>\`) anymore.
> If you want to use a link around \`db-control-panel-brand\`, do it by yourself.

| Before           | Status | After | Description                                                                                             |
| ---------------- | :----: | :---: | ------------------------------------------------------------------------------------------------------- |
| \`hideLogo\`       |   ❌   |  ❌   | Removed. The default logo now automatically hides if you place an \`<img>\` element inside the component. |
| \`icon\`           |   ❌   |  ❌   | Removed. The logo is now rendered via CSS background image from the theme assets.                       |
| \`showIcon\`       |   ❌   |  ❌   | Removed. See \`icon\`.                                                                                    |
| \`siteNameLink\`   |   ❌   |  ❌   | see Note                                                                                                |
| \`alt\`            |   ❌   |  ❌   | see Note                                                                                                |
| \`anchorRef\`      |   ❌   |  ❌   | see Note                                                                                                |
| \`anchorTitle\`    |   ❌   |  ❌   | see Note                                                                                                |
| \`anchorRelation\` |   ❌   |  ❌   | see Note                                                                                                |
| \`src\`            |   ❌   |  ❌   | see Note                                                                                                |
`})))()}var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before               | Status | After                         | Description |
| -------------------- | :----: | ----------------------------- | ----------- |
| \`cmp-mainnavigation\` |   🔁   | \`db-control-panel-navigation\` |             |

### children

| Before     | Status | After | Description                                                                                  |
| ---------- | :----: | ----- | -------------------------------------------------------------------------------------------- |
| \`data\`     |   ❌   | ❌    | pass data via \`children\` / \`slot\`, moved a lot of the features to \`db-control-panel-desktop\` |
| \`siteName\` |   ❌   | ❌    |                                                                                              |
`})))()}function Z(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:ee}),`
`,(0,Q.jsx)(r.h1,{id:`dbcontrolpaneldesktop`,children:`DBControlPanelDesktop`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Parts:`}),` DBControlPanelActions1, DBControlPanelActions2, DBControlPanelBrand, DBControlPanelMeta, DBControlPanelNavigation, DBControlPanelNavigationItem, DBControlPanelNavigationItemGroup, DBControlPanelSkipNavigation – documented on this page.`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,rel:`nofollow`,children:`ControlPanelDesktop guidelines`}),` on the Design System Platform.`]}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:te}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(n,{of:oe}),`
`,(0,Q.jsx)(n,{of:ae}),`
`,(0,Q.jsx)(n,{of:ie}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,Q.jsx)(n,{of:_}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-orientation--docs`,children:`Open the Orientation examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:se}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-width--docs`,children:`Open the Width examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-content`,children:`DBControlPanelBrand: Content`}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-content--docs`,children:`Open the DBControlPanelBrand: Content examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-density`,children:`DBControlPanelBrand: Density`}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-density--docs`,children:`Open the DBControlPanelBrand: Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-variants`,children:`DBControlPanelBrand: Variants`}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-variants--docs`,children:`Open the DBControlPanelBrand: Variants examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML the component is a `,(0,Q.jsx)(r.code,{children:`<header>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-desktop`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |\n| `data-orientation` | `"horizontal" \\| "vertical"` | Change the orientation. Defaults to horizontal. |\n| `data-open` | `true` \\| `false` |  |'}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelactions1`,children:`DBControlPanelActions1`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelActions1 is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-actions-1`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelactions2`,children:`DBControlPanelActions2`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelActions2 is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-actions-2`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelBrand is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-brand`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelmeta`,children:`DBControlPanelMeta`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelMeta is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-meta`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigation`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelNavigation is a `,(0,Q.jsx)(r.code,{children:`<nav>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-navigation`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Values | Description |\n| --- | --- | --- |\n| `data-variant` | `string` |  |\n| `data-behavior` | `"single" \\| "multiple"` | To allow multiple items open at the same time or only 1 item |\n| `data-show-tree-line` | `true` \\| `false` | Show or hide the tree line connecting nested navigation items in tree variant. |'}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigationitem`,children:`DBControlPanelNavigationItem`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelNavigationItem is a `,(0,Q.jsx)(r.code,{children:`<li>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-navigation-item`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(i,{children:"| Attribute | Values | Description |\n| --- | --- | --- |\n| `role` | `string` |  |\n| `data-icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content. |\n| `data-show-icon` | `true` \\| `false` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `data-active` | `true` \\| `false` | If the tab is checked/active. |\n| `aria-disabled` | boolean attribute (present or absent) | The disabled attribute can be set to keep a user from clicking on the item. |"}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigationitemgroup`,children:`DBControlPanelNavigationItemGroup`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelNavigationItemGroup is a `,(0,Q.jsx)(r.code,{children:`<li>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-navigation-item-group`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(i,{children:"| Attribute | Values | Description |\n| --- | --- | --- |\n| `role` | `string` |  |\n| `onmouseover` | `string` |  |\n| `onmouseleave` | `string` |  |"}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelskipnavigation`,children:`DBControlPanelSkipNavigation`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML DBControlPanelSkipNavigation is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-control-panel-skip-navigation`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element.`]}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:G.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-1`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsx)(i,{children:q.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigation-1`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/control-panel-desktop`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ce(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),s(),r(),c(),ne(),f(),v(),C(),k(),F(),L(),V(),K(),J(),X()})))()}$();export{ce as default};