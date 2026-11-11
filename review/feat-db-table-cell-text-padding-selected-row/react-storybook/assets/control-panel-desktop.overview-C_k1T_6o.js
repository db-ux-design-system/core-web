import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{c as n,l as ee,m as te,n as r,r as i}from"./blocks-CuBIS4T2.js";import{t as a}from"./jsx-runtime-MKhVqBIO.js";import{i as o,r as ne}from"./react-DITjJg24.js";import{C as s,T as re,_ as ie,r as ae,w as oe}from"./utils-u-Vdavx5.js";import{O as se}from"./constants-CfKiwStY.js";import{i as ce,n as le,r as ue,t as de}from"./control-panel-actions-2-CABvqNgG.js";import{n as fe,t as pe}from"./control-panel-brand-D5CF13xm.js";import{n as me,t as c}from"./control-panel-meta-D_hstpGZ.js";import{i as l,n as u,r as d,t as f}from"./control-panel-navigation-item-BV1NtJK2.js";import{n as p,t as m}from"./control-panel-navigation-item-group-Br7ajLPF.js";import{a as h,i as g,n as _,r as v,s as y,t as b}from"./content.example.stories-BC9S8Gsg.js";import{a as x,n as S,r as C,t as w}from"./density.example.stories-BDN-VK9I.js";import{i as T,n as E,r as D,t as O}from"./variant.example.stories-CslPqlDk.js";import{a as k,c as A,i as j,n as M,o as N,r as P,t as F}from"./density.example.stories-CQYuh9tT.js";import{a as I,i as L,l as R,n as z,o as he,r as ge,s as _e,t as ve}from"./examples.example.stories-B4beOMit.js";import{n as ye,r as be,t as xe}from"./orientation.example.stories-CJ2RVagq.js";import{a as Se,i as Ce,n as we,o as Te,r as Ee,s as De,t as Oe}from"./width.example.stories-ClHShld_.js";import{n as ke,t as B}from"./control-panel-desktop.overview.stories-C7fdekxR.js";function Ae(e,t){let n=(0,V.useRef)(null);return(0,H.jsx)(`div`,{ref:t||n,...s(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),id:e.id??e.propOverrides?.id,...oe(e,[`data-icon-variant`,`data-icon-variant-before`,`data-icon-variant-after`,`data-icon-weight`,`data-icon-weight-before`,`data-icon-weight-after`,`data-interactive`,`data-force-mobile`,`data-color`,`data-container-color`,`data-bg-color`,`data-on-bg-color`,`data-color-scheme`,`data-font-size`,`data-headline-size`,`data-divider`,`data-focus`,`data-font`,`data-density`]),className:ae(`db-control-panel-skip-navigation`,e.className),children:e.text?(0,H.jsx)(`a`,{href:`#${e.target??`main-content`}`,children:e.text}):(0,H.jsx)(H.Fragment,{children:e.children})})}var V,H,U;function W(){return(W=e((()=>{t(),re(),V=t(),se(),ie(),H=a(),U=(0,V.forwardRef)(Ae),U.__docgenInfo={description:``,methods:[],displayName:`DBControlPanelSkipNavigation`,props:{text:{required:!1,tsType:{name:`string`},description:`Change the text for the link providing a skip for navigation jumping to main content`},target:{required:!1,tsType:{name:`string`},description:"Target id for the skip-navigation link. Must match the `mainId` prop\non `DBShellContent` if you override it. Only one shell should exist per page.\n@default 'main-content'"},children:{required:!1,tsType:{name:`any`},description:`default slot`},className:{required:!1,tsType:{name:`string`},description:`React specific for adding className to the component.`},class:{required:!1,tsType:{name:`union`,raw:`string | any`,elements:[{name:`string`},{name:`any`}]},description:`Workaround for TypeScript using class for all components.`},id:{required:!1,tsType:{name:`string`},description:`[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset.`},autofocus:{required:!1,tsType:{name:`union`,raw:`boolean | string`,elements:[{name:`boolean`},{name:`string`}]},description:`Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)`},propOverrides:{required:!1,tsType:{name:`Pick`,elements:[{name:`GlobalProps`},{name:`literal`,value:`'id'`}],raw:`Pick<GlobalProps, 'id'>`},description:`Allows overriding specific props on nested elements or internal component structure. Currently only supports propOverrides.id`}}}})))()}var G;function K(){return(K=e((()=>{G=`## General

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
`})))()}function Z(e){let t={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:B}),`
`,(0,Q.jsx)(t.h1,{id:`dbcontrolpaneldesktop`,children:`DBControlPanelDesktop`}),`
`,(0,Q.jsx)(n,{children:`The Control Panel Desktop provides the primary navigation bar for desktop applications within the Shell. It is available in two positions: Top as a horizontal bar and Left as a vertical sidebar. Choosing between the two positions is covered by Shell Desktop.`}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Status:`}),` Beta`]}),`
`,(0,Q.jsxs)(t.p,{children:[(0,Q.jsx)(t.strong,{children:`Parts:`}),` DBControlPanelActions1, DBControlPanelActions2, DBControlPanelBrand, DBControlPanelMeta, DBControlPanelNavigation, DBControlPanelNavigationItem, DBControlPanelNavigationItemGroup, DBControlPanelSkipNavigation – documented on this page.`]}),`
`,(0,Q.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`ControlPanelDesktop guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(t.p,{children:[`Setup: `,(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(t.p,{children:[`Open `,(0,Q.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(i,{of:k}),`
`,(0,Q.jsx)(i,{of:F}),`
`,(0,Q.jsx)(i,{of:P}),`
`,(0,Q.jsx)(i,{of:N}),`
`,(0,Q.jsx)(i,{of:M}),`
`,(0,Q.jsx)(i,{of:j}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`examples`,children:`Examples`}),`
`,(0,Q.jsx)(i,{of:ve}),`
`,(0,Q.jsx)(i,{of:L}),`
`,(0,Q.jsx)(i,{of:he}),`
`,(0,Q.jsx)(i,{of:I}),`
`,(0,Q.jsx)(i,{of:_e}),`
`,(0,Q.jsx)(i,{of:z}),`
`,(0,Q.jsx)(i,{of:ge}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,Q.jsx)(i,{of:xe}),`
`,(0,Q.jsx)(i,{of:ye}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-orientation--docs`,children:`Open the Orientation examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`width`,children:`Width`}),`
`,(0,Q.jsx)(i,{of:Oe}),`
`,(0,Q.jsx)(i,{of:Se}),`
`,(0,Q.jsx)(i,{of:Ee}),`
`,(0,Q.jsx)(i,{of:we}),`
`,(0,Q.jsx)(i,{of:Te}),`
`,(0,Q.jsx)(i,{of:Ce}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpaneldesktop-width--docs`,children:`Open the Width examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelbrand-content`,children:`DBControlPanelBrand: Content`}),`
`,(0,Q.jsx)(i,{of:b}),`
`,(0,Q.jsx)(i,{of:h}),`
`,(0,Q.jsx)(i,{of:_}),`
`,(0,Q.jsx)(i,{of:v}),`
`,(0,Q.jsx)(i,{of:g}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpanelbrand-content--docs`,children:`Open the DBControlPanelBrand: Content examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelbrand-density`,children:`DBControlPanelBrand: Density`}),`
`,(0,Q.jsx)(i,{of:C}),`
`,(0,Q.jsx)(i,{of:w}),`
`,(0,Q.jsx)(i,{of:S}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpanelbrand-density--docs`,children:`Open the DBControlPanelBrand: Density examples`})}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelbrand-variants`,children:`DBControlPanelBrand: Variants`}),`
`,(0,Q.jsx)(i,{of:E}),`
`,(0,Q.jsx)(i,{of:D}),`
`,(0,Q.jsx)(i,{of:O}),`
`,(0,Q.jsx)(t.p,{children:(0,Q.jsx)(t.a,{href:`?path=/docs/components-dbcontrolpanelbrand-variants--docs`,children:`Open the DBControlPanelBrand: Variants examples`})}),`
`,(0,Q.jsx)(t.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,Q.jsx)(t.h3,{id:`using-dbcontrolpanelnavigation`,children:`Using DBControlPanelNavigation`}),`
`,(0,Q.jsx)(n,{children:'#### Active handling\n\nUsually, a `NavigationItem` is implicitly set to active by setting the attribute `aria-current="page"` to the anchor it contains.\n\nFor other purposes, `NavigationItems` themselves can also be set to active with their prop `active`. However, this does not guarantee correct a11y.'}),`
`,(0,Q.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelactions1`,children:`DBControlPanelActions1`}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelactions2`,children:`DBControlPanelActions2`}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelbrand`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelmeta`,children:`DBControlPanelMeta`}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelnavigation`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelnavigationitem`,children:`DBControlPanelNavigationItem`}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelnavigationitemgroup`,children:`DBControlPanelNavigationItemGroup`}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelskipnavigation`,children:`DBControlPanelSkipNavigation`}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(n,{children:G.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelbrand-1`,children:`DBControlPanelBrand`}),`
`,(0,Q.jsx)(n,{children:q.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(t.h3,{id:`dbcontrolpanelnavigation-1`,children:`DBControlPanelNavigation`}),`
`,(0,Q.jsx)(n,{children:Y.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,Q.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(t.ul,{children:[`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/control-panel/desktop`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(t.li,{children:[`npm: `,(0,Q.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/control-panel-desktop`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(t.li,{children:(0,Q.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function je(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),ne(),te(),ke(),ce(),le(),fe(),me(),l(),u(),p(),W(),A(),R(),be(),De(),y(),x(),T(),K(),J(),X()})))()}$();export{je as default};