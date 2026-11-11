import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,l as ee,m as n,n as te,r}from"./blocks-Du7KdeDk.js";import{t as ne}from"./jsx-runtime-MKhVqBIO.js";import{i,r as re}from"./react-DITjJg24.js";import{a as ie,n as ae,r as oe,t as se}from"./datalist-typeahead-examples.example.stories-CLqwxdit.js";import{a,n as o,r as s,t as c}from"./density.example.stories-DpaDfNkf.js";import{i as l,n as u,t as d}from"./disabled.example.stories-DztLjruh.js";import{a as f,i as p,n as m,r as h,s as g,t as _}from"./example-floating-label.example.stories-BIhsfKA7.js";import{a as v,n as y,r as b,t as x}from"./example-length.example.stories-D1HqqjE2.js";import{a as S,c as C,d as w,f as T,h as E,i as D,l as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F}from"./example-types-floating-label.example.stories-BkljaXnB.js";import{a as I,c as L,d as R,f as z,i as B,l as V,m as H,n as U,o as W,r as G,s as K,t as ce,u as le}from"./example-types-with-min-and-max.example.stories-CaBjuDp2.js";import{a as ue,i as de,n as fe,o as pe,r as me,s as he,t as ge}from"./message-props.example.stories-ilu-1qpO.js";import{n as _e,r as ve,t as ye}from"./readonly.example.stories-BXyL8uF1.js";import{n as be,r as xe,t as Se}from"./required.example.stories-y7ioa1Yi.js";import{n as Ce,r as we,t as Te}from"./show-icon-leading-trailing.example.stories-JUeJgEMp.js";import{n as Ee,r as De,t as Oe}from"./show-icon-leading.example.stories-DTa546Mo.js";import{n as ke,r as Ae,t as je}from"./show-icon-trailing.example.stories-Cn_VbT8r.js";import{n as Me,r as Ne,t as Pe}from"./show-label.example.stories-DIQY2Ysm.js";import{n as Fe,r as Ie,t as Le}from"./show-message.example.stories-2fRjtn8B.js";import{n as Re,r as ze,t as Be}from"./show-required-asterisk.example.stories-IejNIiOb.js";import{n as Ve,r as He,t as Ue}from"./state.example.stories-9-gqktpc.js";import{i as We,n as Ge,r as Ke,t as qe}from"./validation.example.stories-BxL21cPV.js";import{n as q,r as Je,t as Ye}from"./variant.example.stories-BzV2EzjT.js";import{n as J,t as Xe}from"./input.overview.stories-BCBx5qpV.js";var Y;function X(){return(X=e((()=>{Y="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before      | Status | After      | Description |\n| ----------- | :----: | ---------- | ----------- |\n| `elm-input` |   🔁   | `db-input` |             |\n\n### variants\n\n| Before            | Status | After     | Description                                                                    |\n| ----------------- | :----: | --------- | ------------------------------------------------------------------------------ |\n| `semitransparent` |   ❌   | ❌        | Old look variants are removed; a semi-transparent look is the default now.     |\n| `white`           |   ❌   | ❌        |                                                                                |\n| `solid`           |   ❌   | ❌        |                                                                                |\n| `outline`         |   ❌   | ❌        |                                                                                |\n|                   |   🆕   | `variant` | `variant` now controls the label layout only: `above` (default) or `floating`. |\n\n### validation\n\n| Before | Status | After        | Description                                                                                              |\n| ------ | :----: | ------------ | -------------------------------------------------------------------------------------------------------- |\n|        |   🆕   | `validation` | Set the validation state with `validation`: `valid` (green), `invalid` (red), or `no-validation` (grey). |\n"})))()}function Z(e){let n={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(ee,{of:J}),`
`,(0,Q.jsx)(n.h1,{id:`dbinput`,children:`DBInput`}),`
`,(0,Q.jsx)(t,{children:`Input captures short, single-line user text entries in forms and dialogs. It should be predictable, clearly labeled, and provide guidance and validation feedback when needed.`}),`
`,(0,Q.jsxs)(n.p,{children:[(0,Q.jsx)(n.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(n.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/input`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Input guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(n.p,{children:[`Setup: `,(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/learn/react-setup`,rel:`nofollow`,children:`Add the components to React`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(n.p,{children:[`Open `,(0,Q.jsx)(n.strong,{children:`Show code`}),` below a preview for a snippet you can copy, including the imports. The example pages linked below each group have controls.`]}),`
`,(0,Q.jsx)(n.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(r,{of:Ye}),`
`,(0,Q.jsx)(r,{of:q}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`datalist-and-typeahead-examples`,children:`Datalist and Typeahead Examples`}),`
`,(0,Q.jsx)(r,{of:ae}),`
`,(0,Q.jsx)(r,{of:se}),`
`,(0,Q.jsx)(r,{of:oe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-datalist-and-typeahead-examples--docs`,children:`Open the Datalist and Typeahead Examples examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(r,{of:s}),`
`,(0,Q.jsx)(r,{of:c}),`
`,(0,Q.jsx)(r,{of:o}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(r,{of:d}),`
`,(0,Q.jsx)(r,{of:u}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example---length`,children:`Example - Length`}),`
`,(0,Q.jsx)(r,{of:y}),`
`,(0,Q.jsx)(r,{of:x}),`
`,(0,Q.jsx)(r,{of:b}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-example-length--docs`,children:`Open the Example - Length examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example---types---floating-label`,children:`Example - Types - Floating Label`}),`
`,(0,Q.jsx)(r,{of:D}),`
`,(0,Q.jsx)(r,{of:C}),`
`,(0,Q.jsx)(r,{of:O}),`
`,(0,Q.jsx)(r,{of:S}),`
`,(0,Q.jsx)(r,{of:F}),`
`,(0,Q.jsx)(r,{of:T}),`
`,(0,Q.jsx)(r,{of:k}),`
`,(0,Q.jsx)(r,{of:M}),`
`,(0,Q.jsx)(r,{of:N}),`
`,(0,Q.jsx)(r,{of:w}),`
`,(0,Q.jsx)(r,{of:j}),`
`,(0,Q.jsx)(r,{of:P}),`
`,(0,Q.jsx)(r,{of:A}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-example-types-floating-label--docs`,children:`Open the Example - Types - Floating Label examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example---types-with-min-and-max`,children:`Example - Types with min and max`}),`
`,(0,Q.jsx)(r,{of:G}),`
`,(0,Q.jsx)(r,{of:K}),`
`,(0,Q.jsx)(r,{of:L}),`
`,(0,Q.jsx)(r,{of:B}),`
`,(0,Q.jsx)(r,{of:V}),`
`,(0,Q.jsx)(r,{of:R}),`
`,(0,Q.jsx)(r,{of:W}),`
`,(0,Q.jsx)(r,{of:ce}),`
`,(0,Q.jsx)(r,{of:U}),`
`,(0,Q.jsx)(r,{of:I}),`
`,(0,Q.jsx)(r,{of:le}),`
`,(0,Q.jsx)(r,{of:z}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-example-types-with-min-and-max--docs`,children:`Open the Example - Types with min and max examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`example-floating-label`,children:`Example Floating Label`}),`
`,(0,Q.jsx)(r,{of:_}),`
`,(0,Q.jsx)(r,{of:h}),`
`,(0,Q.jsx)(r,{of:m}),`
`,(0,Q.jsx)(r,{of:f}),`
`,(0,Q.jsx)(r,{of:p}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-example-floating-label--docs`,children:`Open the Example Floating Label examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`message-props`,children:`Message Props`}),`
`,(0,Q.jsx)(r,{of:fe}),`
`,(0,Q.jsx)(r,{of:me}),`
`,(0,Q.jsx)(r,{of:de}),`
`,(0,Q.jsx)(r,{of:ue}),`
`,(0,Q.jsx)(r,{of:pe}),`
`,(0,Q.jsx)(r,{of:ge}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-message-props--docs`,children:`Open the Message Props examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`readonly`,children:`Readonly`}),`
`,(0,Q.jsx)(r,{of:ye}),`
`,(0,Q.jsx)(r,{of:_e}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-readonly--docs`,children:`Open the Readonly examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(r,{of:Se}),`
`,(0,Q.jsx)(r,{of:be}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon-leading`,children:`Show Icon Leading`}),`
`,(0,Q.jsx)(r,{of:Oe}),`
`,(0,Q.jsx)(r,{of:Ee}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-icon-leading--docs`,children:`Open the Show Icon Leading examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon-leading--trailing`,children:`Show Icon Leading + Trailing`}),`
`,(0,Q.jsx)(r,{of:Te}),`
`,(0,Q.jsx)(r,{of:Ce}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-icon-leading-trailing--docs`,children:`Open the Show Icon Leading + Trailing examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-icon-trailing`,children:`Show Icon Trailing`}),`
`,(0,Q.jsx)(r,{of:je}),`
`,(0,Q.jsx)(r,{of:ke}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-icon-trailing--docs`,children:`Open the Show Icon Trailing examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(r,{of:Pe}),`
`,(0,Q.jsx)(r,{of:Me}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(r,{of:Le}),`
`,(0,Q.jsx)(r,{of:Fe}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(r,{of:Be}),`
`,(0,Q.jsx)(r,{of:Re}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(r,{of:Ue}),`
`,(0,Q.jsx)(r,{of:Ve}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(n.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(r,{of:qe}),`
`,(0,Q.jsx)(r,{of:Ge}),`
`,(0,Q.jsx)(r,{of:Ke}),`
`,(0,Q.jsx)(n.p,{children:(0,Q.jsx)(n.a,{href:`?path=/docs/components-dbinput-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(n.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,Q.jsx)(t,{children:`Warning: Date input is not working with iOS Voiceover currently, compare to [React issue](https://github.com/facebook/react/issues/33541) and [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=294649).

Load SCSS globally in a \`index.scss\` file inside \`main.tsx\`/\`main.jsx\` within your app:

\`\`\`scss
@forward "@db-ux/core-components/build/styles/rollup";
\`\`\`

Import component:

\`\`\`typescript
import { DBInput } from "@db-ux/react-core-components";

<DBInput
	label={label}
	placeholder={description}
	description={description}
	onChange={handleChange}
></DBInput>;
\`\`\``}),`
`,(0,Q.jsx)(n.h2,{id:`properties`,children:`Properties`}),`
`,(0,Q.jsx)(te,{of:J}),`
`,(0,Q.jsx)(n.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(t,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(n.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(n.ul,{children:[`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://design-system.deutschebahn.com/documentation/components/input`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(n.li,{children:[`npm: `,(0,Q.jsx)(n.a,{href:`https://www.npmjs.com/package/@db-ux/react-core-components`,rel:`nofollow`,children:`@db-ux/react-core-components`})]}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/input`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(n.li,{children:(0,Q.jsx)(n.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Ze(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ne(),re(),n(),Xe(),Je(),ie(),a(),l(),v(),E(),H(),g(),he(),ve(),xe(),De(),we(),Ae(),Ne(),Ie(),ze(),He(),We(),X()})))()}$();export{Ze as default};