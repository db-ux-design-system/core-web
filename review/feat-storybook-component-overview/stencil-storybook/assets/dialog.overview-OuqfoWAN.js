import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-Cgbw3SbP.js";import{s as a}from"./chunk-W22LQPXL-D8nYsdLc.js";import{i as o,r as s}from"./react-DITjJg24.js";import{a as c,n as l,r as u,t as d}from"./backdrop.example.stories-03XC3EJj.js";import{i as f,n as p,o as m,r as h,t as g}from"./container-size.example.stories-DnvQwCJl.js";import{a as _,n as v,r as y,t as b}from"./density.example.stories-OqtB1vv4.js";import{a as x,c as S,i as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./examples.example.stories-DY4xJTgW.js";import{a as A,i as j,n as M,o as N,r as P,s as F,t as I}from"./interaction.example.stories-CnPY_xhc.js";import{n as L,t as R}from"./dialog.overview.stories-blIMC1wa.js";function z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,V.jsxs)(V.Fragment,{children:[`
`,(0,V.jsx)(t,{of:R}),`
`,(0,V.jsx)(r.h1,{id:`dbdialog`,children:`DBDialog`}),`
`,(0,V.jsxs)(r.p,{children:[(0,V.jsx)(r.strong,{children:`Parts:`}),` DBDialogFooter, DBDialogHeader – documented on this page.`]}),`
`,(0,V.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,V.jsxs)(r.p,{children:[`When to use it, variants, Do and Don’t and the design rules for accessibility: `,(0,V.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/dialog`,rel:`nofollow`,children:`Dialog guidelines`}),` on the Design System Platform.`]}),`
`,(0,V.jsxs)(r.p,{children:[`Setup: `,(0,V.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,V.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,V.jsxs)(r.p,{children:[`Open `,(0,V.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,V.jsx)(r.h3,{id:`backdrop`,children:`Backdrop`}),`
`,(0,V.jsx)(n,{of:d}),`
`,(0,V.jsx)(n,{of:u}),`
`,(0,V.jsx)(n,{of:l}),`
`,(0,V.jsx)(r.p,{children:(0,V.jsx)(r.a,{href:`?path=/docs/components-dbdialog-backdrop--docs`,children:`Open the Backdrop examples`})}),`
`,(0,V.jsx)(r.h3,{id:`container-size`,children:`Container Size`}),`
`,(0,V.jsx)(n,{of:f}),`
`,(0,V.jsx)(n,{of:g}),`
`,(0,V.jsx)(n,{of:h}),`
`,(0,V.jsx)(n,{of:p}),`
`,(0,V.jsx)(r.p,{children:(0,V.jsx)(r.a,{href:`?path=/docs/components-dbdialog-container-size--docs`,children:`Open the Container Size examples`})}),`
`,(0,V.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,V.jsx)(n,{of:y}),`
`,(0,V.jsx)(n,{of:b}),`
`,(0,V.jsx)(n,{of:v}),`
`,(0,V.jsx)(r.p,{children:(0,V.jsx)(r.a,{href:`?path=/docs/components-dbdialog-density--docs`,children:`Open the Density examples`})}),`
`,(0,V.jsx)(r.h3,{id:`examples`,children:`Examples`}),`
`,(0,V.jsx)(n,{of:O}),`
`,(0,V.jsx)(n,{of:E}),`
`,(0,V.jsx)(n,{of:w}),`
`,(0,V.jsx)(n,{of:S}),`
`,(0,V.jsx)(n,{of:x}),`
`,(0,V.jsx)(n,{of:C}),`
`,(0,V.jsx)(n,{of:D}),`
`,(0,V.jsx)(n,{of:T}),`
`,(0,V.jsx)(r.p,{children:(0,V.jsx)(r.a,{href:`?path=/docs/components-dbdialog-examples--docs`,children:`Open the Examples examples`})}),`
`,(0,V.jsx)(r.h3,{id:`interaction`,children:`Interaction`}),`
`,(0,V.jsx)(n,{of:N}),`
`,(0,V.jsx)(n,{of:I}),`
`,(0,V.jsx)(n,{of:M}),`
`,(0,V.jsx)(n,{of:P}),`
`,(0,V.jsx)(n,{of:j}),`
`,(0,V.jsx)(n,{of:A}),`
`,(0,V.jsx)(r.p,{children:(0,V.jsx)(r.a,{href:`?path=/docs/components-dbdialog-interaction--docs`,children:`Open the Interaction examples`})}),`
`,(0,V.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,V.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `open` | `boolean \\| string` | The open attribute opens or closes the dialog based on the state. |\n| `backdrop` | `"none" \\| "strong" \\| "weak"` | The backdrop attribute changes the opacity of the backdrop. The backdrop \'none\' will use `dialog.show()` instead of `dialog.showModal()` |\n| `container-size` | `"small" \\| "medium" \\| "large" \\| "full"` | Change the maximum inline size of the dialog. Defaults to `medium`. |'}),`
`,(0,V.jsx)(r.h3,{id:`dbdialogfooter`,children:`DBDialogFooter`}),`
`,(0,V.jsx)(r.p,{children:`No attributes of its own; the native attributes of the element apply.`}),`
`,(0,V.jsx)(r.h3,{id:`dbdialogheader`,children:`DBDialogHeader`}),`
`,(0,V.jsx)(i,{children:"| Attribute | Type | Description |\n| --- | --- | --- |\n| `text` | `string` | Alternative for default slot/children. Do not use together with a text children/slot, as both will be rendered and result in duplicate labels. |\n| `close-button-id` | `string` | The closeButtonId attribute changes the id inside the close button. |\n| `close-button-text` | `string` | The closeButtonText attribute changes the text inside the close button. |"}),`
`,(0,V.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,V.jsxs)(r.ul,{children:[`
`,(0,V.jsx)(r.li,{children:(0,V.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/dialog`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,V.jsxs)(r.li,{children:[`npm: `,(0,V.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,V.jsx)(r.li,{children:(0,V.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/dialog`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,V.jsx)(r.li,{children:(0,V.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function B(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,V.jsx)(t,{...e,children:(0,V.jsx)(z,{...e})}):z(e)}var V;function H(){return(H=e((()=>{V=a(),s(),r(),L(),c(),m(),_(),k(),F()})))()}H();export{B as default};