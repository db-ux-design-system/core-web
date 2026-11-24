import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{h as t,l as n,n as r,r as i,u as a}from"./blocks-DINS4lZ7.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,r as u}from"./breadcrumb-C9VUqP9q.js";import{n as d,t as f}from"./breadcrumb-popover-item-C4qAnKzj.js";import{i as p,n as m,t as h}from"./api.example.stories-D160irsC.js";import{i as g,n as _,o as v,r as y,t as b}from"./badge.example.stories-k8PB1-NC.js";import{a as x,n as S,r as C,t as w}from"./density.example.stories-CQj_-NMz.js";import{i as T,n as E,t as D}from"./disabled.example.stories-B81epJyg.js";import{i as O,n as k,r as A,t as j}from"./length.example.stories-Cxgoj8zf.js";import{i as M,n as N,r as P,t as F}from"./no-text.example.stories-sGjf5qKH.js";import{n as I,t as L}from"./popover.example.stories-YlWMS5H1.js";import{n as R,r as z,t as B}from"./separator.example.stories-BV6beIW4.js";import{n as V,r as H,t as U}from"./size.example.stories-C7g4xVGJ.js";import{n as W,t as G}from"./breadcrumb.overview.stories-DJGvNU7i.js";var K;function q(){return(q=e((()=>{K='## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before           | Status | After           | Description                                                                                                |\n| ---------------- | :----: | --------------- | ---------------------------------------------------------------------------------------------------------- |\n| `cmp-breadcrumb` |   🔁   | `db-breadcrumb` | A plain list of links becomes `db-breadcrumb` with one `db-breadcrumb-item` per link, or the `items` prop. |\n\n### structure\n\n| Before                     | Status | After         | Description                                     |\n| -------------------------- | :----: | ------------- | ----------------------------------------------- |\n| `aria-current="page"` link |   🔁   | `ariaCurrent` | Mark the current page on the last item.         |\n|                            |   🆕   | `maxItems`    | Long trails collapse automatically (default 4). |\n|                            |   🆕   | `separator`   | `chevron` or `slash`.                           |\n'})))()}function J(e){let t={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,X.jsxs)(X.Fragment,{children:[`
`,(0,X.jsx)(a,{of:G}),`
`,(0,X.jsx)(t.h1,{id:`dbbreadcrumb`,children:`DBBreadcrumb`}),`
`,(0,X.jsx)(n,{children:`The breadcrumb shows the position of the current page within the site hierarchy and opens the path back to the higher-level pages.`}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.strong,{children:`Status:`}),` Beta`]}),`
`,(0,X.jsxs)(t.p,{children:[(0,X.jsx)(t.strong,{children:`Parts:`}),` DBBreadcrumbItem, DBBreadcrumbPopoverItem – documented on this page.`]}),`
`,(0,X.jsx)(t.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,X.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/breadcrumb/breadcrumb`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,X.jsx)(`i`,{className:`db-sb-platform-card-logo`,"aria-hidden":`true`}),(0,X.jsx)(`strong`,{children:`Breadcrumb guidelines`}),(0,X.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,X.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]}),`
`,(0,X.jsxs)(t.p,{children:[`Setup: `,(0,X.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,X.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,X.jsxs)(t.p,{children:[`Open `,(0,X.jsx)(t.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,X.jsx)(t.h3,{id:`api`,children:`API`}),`
`,(0,X.jsx)(i,{of:h}),`
`,(0,X.jsx)(i,{of:m}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-api--docs`,children:`Open the API examples`})}),`
`,(0,X.jsx)(t.h3,{id:`badge`,children:`Badge`}),`
`,(0,X.jsx)(i,{of:y}),`
`,(0,X.jsx)(i,{of:b}),`
`,(0,X.jsx)(i,{of:g}),`
`,(0,X.jsx)(i,{of:_}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-badge--docs`,children:`Open the Badge examples`})}),`
`,(0,X.jsx)(t.h3,{id:`density`,children:`Density`}),`
`,(0,X.jsx)(i,{of:S}),`
`,(0,X.jsx)(i,{of:C}),`
`,(0,X.jsx)(i,{of:w}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-density--docs`,children:`Open the Density examples`})}),`
`,(0,X.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,X.jsx)(i,{of:D}),`
`,(0,X.jsx)(i,{of:E}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,X.jsx)(t.h3,{id:`length`,children:`Length`}),`
`,(0,X.jsx)(i,{of:j}),`
`,(0,X.jsx)(i,{of:k}),`
`,(0,X.jsx)(i,{of:A}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-length--docs`,children:`Open the Length examples`})}),`
`,(0,X.jsx)(t.h3,{id:`no-text`,children:`No text`}),`
`,(0,X.jsx)(i,{of:F}),`
`,(0,X.jsx)(i,{of:P}),`
`,(0,X.jsx)(i,{of:N}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-no-text--docs`,children:`Open the No text examples`})}),`
`,(0,X.jsx)(t.h3,{id:`popover`,children:`Popover`}),`
`,(0,X.jsx)(i,{of:L}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-popover--docs`,children:`Open the Popover examples`})}),`
`,(0,X.jsx)(t.h3,{id:`separator`,children:`Separator`}),`
`,(0,X.jsx)(i,{of:B}),`
`,(0,X.jsx)(i,{of:R}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-separator--docs`,children:`Open the Separator examples`})}),`
`,(0,X.jsx)(t.h3,{id:`size`,children:`Size`}),`
`,(0,X.jsx)(i,{of:U}),`
`,(0,X.jsx)(i,{of:V}),`
`,(0,X.jsx)(t.p,{children:(0,X.jsx)(t.a,{href:`?path=/docs/components-dbbreadcrumb-size--docs`,children:`Open the Size examples`})}),`
`,(0,X.jsx)(t.h2,{id:`properties`,children:`Properties`}),`
`,(0,X.jsx)(r,{of:G}),`
`,(0,X.jsx)(t.h3,{id:`dbbreadcrumbitem`,children:`DBBreadcrumbItem`}),`
`,(0,X.jsx)(r,{of:u}),`
`,(0,X.jsx)(t.h3,{id:`dbbreadcrumbpopoveritem`,children:`DBBreadcrumbPopoverItem`}),`
`,(0,X.jsx)(r,{of:f}),`
`,(0,X.jsx)(t.h2,{id:`migration`,children:`Migration`}),`
`,(0,X.jsx)(n,{children:K.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,X.jsx)(t.h2,{id:`resources`,children:`Resources`}),`
`,(0,X.jsxs)(t.ul,{children:[`
`,(0,X.jsx)(t.li,{children:(0,X.jsx)(t.a,{href:`https://design-system.deutschebahn.com/documentation/components/breadcrumb/breadcrumb`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,X.jsxs)(t.li,{children:[`npm: `,(0,X.jsx)(t.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,X.jsx)(t.li,{children:(0,X.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/breadcrumb`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,X.jsx)(t.li,{children:(0,X.jsx)(t.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Y(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,X.jsx)(t,{...e,children:(0,X.jsx)(J,{...e})}):J(e)}var X;function Z(){return(Z=e((()=>{X=o(),c(),t(),W(),l(),d(),p(),v(),x(),T(),O(),M(),I(),z(),H(),q()})))()}Z();export{Y as default};