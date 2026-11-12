import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-7ys8uNjT.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{a as c,i as l,n as u,r as d,s as f,t as p}from"./content.example.stories-Do9qH6DW.js";import{a as ee,n as te,r as ne,t as m}from"./density.example.stories-k0_rUO30.js";import{i as h,n as g,r as _,t as v}from"./variant.example.stories-Bg_vK6YY.js";import{a as y,c as b,i as x,n as S,o as C,r as w,t as T}from"./density.example.stories-CgF4Zd0r.js";import{a as E,i as D,l as O,n as k,o as A,r as j,s as M,t as re}from"./examples.example.stories-DQwCz4g2.js";import{n as N,r as P,t as F}from"./orientation.example.stories-D2fyiWbH.js";import{a as I,i as L,n as R,o as z,r as B,s as V,t as H}from"./width.example.stories-DaJiGA49.js";import{n as U,t as W}from"./control-panel-desktop.overview.stories-c0H2uz0D.js";var G;function K(){return(K=e((()=>{G=`## General

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
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:W}),`
`,(0,Q.jsx)(r.h1,{id:`dbcontrolpaneldesktop`,children:`DBControlPanelDesktop`}),`
`,(0,Q.jsx)(i,{children:`The Control Panel Desktop provides the primary navigation bar for desktop applications within the Shell. It is available in two positions: Top as a horizontal bar and Left as a vertical sidebar. Choosing between the two positions is covered by Shell Desktop.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Beta`]}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Parts:`}),` DBControlPanelActions1, DBControlPanelActions2, DBControlPanelBrand, DBControlPanelMeta, DBControlPanelNavigation, DBControlPanelNavigationItem, DBControlPanelNavigationItemGroup, DBControlPanelSkipNavigation – documented on this page.`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`ControlPanelDesktop guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-orientation--docs`,children:`Open the Orientation examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`width`,children:`Width`}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-width--docs`,children:`Open the Width examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-content`,children:`DBControlPanelBrand: Content`}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-content--docs`,children:`Open the DBControlPanelBrand: Content examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-density`,children:`DBControlPanelBrand: Density`}),`
`,(0,Q.jsx)(n,{of:ne}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:te}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-density--docs`,children:`Open the DBControlPanelBrand: Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-variants`,children:`DBControlPanelBrand: Variants`}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:_}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbcontrolpanelbrand-variants--docs`,children:`Open the DBControlPanelBrand: Variants examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `expanded` | `boolean \\| string` | Set the expanded/collapsed state initially for the left sidebar |\n| `expand-button-tooltip` | `string` | Set the tooltip for the expand/collapse button |\n| `width` | `"full" \\| "medium" \\| "large" \\| "small"` | Set max width for the component |\n| `orientation` | `"horizontal" \\| "vertical"` | Change the orientation. Defaults to horizontal. |'}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelactions1`,children:`DBControlPanelActions1`}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelactions2`,children:`DBControlPanelActions2`}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `second-line` | `string` |  |"}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelmeta`,children:`DBControlPanelMeta`}),`
`,(0,Q.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigation`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `variant` | `"popover" \\| "tree" \\| "drilldown"` | Selects the navigation interaction model: `popover` shows sub-items in a flyout menu, `tree` shows a collapsible tree structure. Note: This selects an interaction model, not just a visual variant. |\n| `behavior` | `"single" \\| "multiple"` | To allow multiple items open at the same time or only 1 item |\n| `arrow-scroll-distance` | `number \\| string` | Change amount of scroll distance when clicking on an overflow scroll arrow button. |\n| `show-tree-line` | `boolean \\| string` | Show or hide the tree line connecting nested navigation items in tree variant. |\n| `scroll-left-text` | `string` | Set the text for the scroll left button |\n| `scroll-right-text` | `string` | Set the text for the scroll right button |'}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigationitem`,children:`DBControlPanelNavigationItem`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `tooltip` | `string` | If you use DBShell with controlPanelDesktopPosition="left" or DBControlPanelFlatIcon you need to add a tooltip for collapsed navigation |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to keep a user from clicking on the item. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `active` | `boolean \\| string` | If the tab is checked/active. |'}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigationitemgroup`,children:`DBControlPanelNavigationItemGroup`}),`
`,(0,Q.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `expanded` | `boolean \\| string` | This is for mobile navigation only, if it is set the sub-navigation is a static overlay |\n| `active` | `boolean \\| string` | If the tab is checked/active. |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to keep a user from clicking on the item. |\n| `menu-id` | `string` | Change id for db-control-panel-navigation-item-group-menu |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |\n| `back-button-id` | `string` | The backButtonId attribute changes the id inside the back button. |\n| `back-button-text` | `string` | The backButtonText attribute changes the text inside the back button. |"}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelskipnavigation`,children:`DBControlPanelSkipNavigation`}),`
`,(0,Q.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `text` | `string` | Change the text for the link providing a skip for navigation jumping to main content |\n| `target` | `string` | Target id for the skip-navigation link. Must match the `mainId` prop on `DBShellContent` if you override it. Only one shell should exist per page. |"}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:G.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelbrand-1`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsx)(i,{children:q.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(r.h3,{id:`dbcontrolpanelnavigation-1`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/control-panel-desktop`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ie(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),s(),r(),U(),b(),O(),P(),V(),f(),ee(),h(),K(),J(),X()})))()}$();export{ie as default};