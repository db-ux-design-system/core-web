import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-qpT00qvI.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{i as c,n as l,t as u}from"./active.example.stories-DuYqvNLe.js";import{a as d,n as f,r as p,t as m}from"./density.example.stories-ByAF6pfK.js";import{i as h,n as g,t as _}from"./disabled.example.stories-sWd1HYb7.js";import{i as v,n as y,t as b}from"./expanded.example.stories-DXW7l4Lx.js";import{n as x,r as S,t as C}from"./show-icon.example.stories-DGxn_eiR.js";import{n as w,r as T,t as E}from"./width.example.stories-B75CnjmL.js";import{n as D,r as O,t as k}from"./wrap.example.stories-BjZWPsvc.js";import{a as A,n as j,r as M,t as N}from"./density.example.stories-nZnvWIcf.js";import{n as P,t as F}from"./navigation.overview.stories-CRdZOZmM.js";var I;function L(){return(L=e((()=>{I='## Accessibility\n\n### Active item / current page\n\nTo implicitly set a `NavigationItem` to **active**, the attribute `aria-current="page"` is applied to the contained anchor.\nSome frameworks (vue, angular) offer internal, automatic solutions for this. These should preferably be used.\n\nThis leads to:\n\n- the `NavigationItem` and all parent `NavigationItems` are displayed as **active** via `css` (bold, if necessary with indicator)\n- accessibility is granted correctly. see: [MDN aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)\n\nFor other purposes, `NavigationItems` can also be set to active with their prop `active`. However, this does not guarantee correct a11y.\n'})))()}var R;function z(){return(z=e((()=>{R=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before               | Status | After                         | Description                    |
| -------------------- | :----: | ----------------------------- | ------------------------------ |
| \`cmp-mainnavigation\` |   🔁   | \`db-control-panel-navigation\` | \`db-navigation\` is deprecated. |

### children

| Before     | Status | After | Description                                                                                  |
| ---------- | :----: | ----- | -------------------------------------------------------------------------------------------- |
| \`data\`     |   ❌   | ❌    | pass data via \`children\` / \`slot\`, moved a lot of the features to \`db-control-panel-desktop\` |
| \`siteName\` |   ❌   | ❌    |                                                                                              |
`})))()}var B;function V(){return(V=e((()=>{B=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳
`})))()}function H(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,W.jsxs)(W.Fragment,{children:[`
`,(0,W.jsx)(t,{of:P}),`
`,(0,W.jsx)(r.h1,{id:`dbnavigation`,children:`DBNavigation`}),`
`,(0,W.jsx)(i,{children:`Navigation provides a set of destinations that help users move through an application consistently across desktop and mobile. It supports different orientations and responsive behaviors while clearly indicating the current location and available paths.`}),`
`,(0,W.jsxs)(r.p,{children:[(0,W.jsx)(r.strong,{children:`Status:`}),` Deprecated`]}),`
`,(0,W.jsxs)(r.p,{children:[(0,W.jsx)(r.strong,{children:`Parts:`}),` DBNavigationItem – documented on this page.`]}),`
`,(0,W.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,W.jsx)(`div`,{"data-mode":`light`,children:(0,W.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/navigation`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,W.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,W.jsx)(`strong`,{children:`Navigation guidelines`}),(0,W.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,W.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,W.jsxs)(r.p,{children:[`Setup: `,(0,W.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,W.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,W.jsxs)(r.p,{children:[`Open `,(0,W.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,W.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,W.jsx)(n,{of:M}),`
`,(0,W.jsx)(n,{of:N}),`
`,(0,W.jsx)(n,{of:j}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigation-density--docs`,children:`Open the Density examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-active`,children:`DBNavigationItem: Active`}),`
`,(0,W.jsx)(n,{of:u}),`
`,(0,W.jsx)(n,{of:l}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-active--docs`,children:`Open the DBNavigationItem: Active examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-density`,children:`DBNavigationItem: Density`}),`
`,(0,W.jsx)(n,{of:p}),`
`,(0,W.jsx)(n,{of:m}),`
`,(0,W.jsx)(n,{of:f}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-density--docs`,children:`Open the DBNavigationItem: Density examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-disabled`,children:`DBNavigationItem: Disabled`}),`
`,(0,W.jsx)(n,{of:_}),`
`,(0,W.jsx)(n,{of:g}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-disabled--docs`,children:`Open the DBNavigationItem: Disabled examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-expanded`,children:`DBNavigationItem: Expanded`}),`
`,(0,W.jsx)(n,{of:b}),`
`,(0,W.jsx)(n,{of:y}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-expanded--docs`,children:`Open the DBNavigationItem: Expanded examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-show-icon`,children:`DBNavigationItem: Show Icon`}),`
`,(0,W.jsx)(n,{of:C}),`
`,(0,W.jsx)(n,{of:x}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-show-icon--docs`,children:`Open the DBNavigationItem: Show Icon examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-width`,children:`DBNavigationItem: Width`}),`
`,(0,W.jsx)(n,{of:E}),`
`,(0,W.jsx)(n,{of:w}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-width--docs`,children:`Open the DBNavigationItem: Width examples`})}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-wrap`,children:`DBNavigationItem: Wrap`}),`
`,(0,W.jsx)(n,{of:k}),`
`,(0,W.jsx)(n,{of:D}),`
`,(0,W.jsx)(r.p,{children:(0,W.jsx)(r.a,{href:`?path=/docs/components-dbnavigationitem-wrap--docs`,children:`Open the DBNavigationItem: Wrap examples`})}),`
`,(0,W.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,W.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem`,children:`DBNavigationItem`}),`
`,(0,W.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `sub-navigation-expanded` | `boolean \\| string` | This is for mobile navigation only, if it is set the sub-navigation is a static overlay |\n| `width` | `"full" \\| "auto" \\| string` | Width of the component. Auto width based on children size, full width based on parent elements width. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `active` | `boolean` | Alternative indicator for active navigation item (bold font). In contrast to the use of aria-current="page" on the contained anchor, this does not guarantee correct a11y. |\n| `wrap` | `boolean \\| string` | Determines whether the text should wrap when its parent container is too small, preventing overflow. |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to [keep a user from clicking on the item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#disabled). |\n| `hide-sub-navigation` | `boolean \\| string` | Force hide sub-navigation - for web component output |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |\n| `back-button-id` | `string` | The backButtonId attribute changes the id inside the back button. |\n| `back-button-text` | `string` | The backButtonText attribute changes the text inside the back button. |'}),`
`,`
`,(0,W.jsx)(i,{children:I}),`
`,(0,W.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,W.jsx)(i,{children:R.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,W.jsx)(r.h3,{id:`dbnavigationitem-1`,children:`DBNavigationItem`}),`
`,(0,W.jsx)(i,{children:B.replace(/^(#{2,4}) /gm,`##$1 `)}),`
`,(0,W.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,W.jsxs)(r.ul,{children:[`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/navigation`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,W.jsxs)(r.li,{children:[`npm: `,(0,W.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/navigation`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,W.jsx)(r.li,{children:(0,W.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function U(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,W.jsx)(t,{...e,children:(0,W.jsx)(H,{...e})}):H(e)}var W;function G(){return(G=e((()=>{W=a(),s(),r(),F(),A(),c(),d(),h(),v(),S(),T(),O(),L(),z(),V()})))()}G();export{U as default};