import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-CRQ8E9lU.js";import{t as ee}from"./jsx-runtime-MKhVqBIO.js";import{i as a,r as te}from"./react-DITjJg24.js";import{n as ne,t as re}from"./input.overview.stories-Dpg828EZ.js";import{n as ie,r as ae,t as oe}from"./variant.example.stories-BIuu8Y93.js";import{a as o,n as s,r as c,t as l}from"./datalist-typeahead-examples.example.stories-CLqwxdit.js";import{a as u,n as d,r as f,t as p}from"./density.example.stories-DpaDfNkf.js";import{i as m,n as h,t as g}from"./disabled.example.stories-DztLjruh.js";import{a as _,n as v,r as y,t as b}from"./example-length.example.stories-D1HqqjE2.js";import{a as x,c as S,d as C,f as w,h as T,i as E,l as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P}from"./example-types-floating-label.example.stories-BkljaXnB.js";import{a as F,c as I,d as L,f as R,i as z,l as B,m as V,n as H,o as U,r as W,s as G,t as K,u as q}from"./example-types-with-min-and-max.example.stories-CaBjuDp2.js";import{a as se,i as ce,n as le,r as ue,s as de,t as fe}from"./example-floating-label.example.stories-BIhsfKA7.js";import{a as pe,i as me,n as he,o as ge,r as _e,s as ve,t as ye}from"./message-props.example.stories-ilu-1qpO.js";import{n as be,r as xe,t as Se}from"./readonly.example.stories-BXyL8uF1.js";import{n as Ce,r as we,t as Te}from"./required.example.stories-y7ioa1Yi.js";import{n as Ee,r as De,t as Oe}from"./show-icon-leading.example.stories-DTa546Mo.js";import{n as ke,r as Ae,t as je}from"./show-icon-leading-trailing.example.stories-JUeJgEMp.js";import{n as Me,r as Ne,t as Pe}from"./show-icon-trailing.example.stories-Cn_VbT8r.js";import{n as Fe,r as Ie,t as Le}from"./show-label.example.stories-DIQY2Ysm.js";import{n as Re,r as ze,t as Be}from"./show-message.example.stories-2fRjtn8B.js";import{n as Ve,r as He,t as Ue}from"./show-required-asterisk.example.stories-IejNIiOb.js";import{n as We,r as Ge,t as Ke}from"./state.example.stories-9-gqktpc.js";import{i as J,n as qe,r as Je,t as Ye}from"./validation.example.stories-BxL21cPV.js";var Y;function X(){return(X=e((()=>{Y="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before      | Status | After      | Description |\n| ----------- | :----: | ---------- | ----------- |\n| `elm-input` |   🔁   | `db-input` |             |\n\n### variants\n\n| Before            | Status | After     | Description                                                                    |\n| ----------------- | :----: | --------- | ------------------------------------------------------------------------------ |\n| `semitransparent` |   ❌   | ❌        | Old look variants are removed; a semi-transparent look is the default now.     |\n| `white`           |   ❌   | ❌        |                                                                                |\n| `solid`           |   ❌   | ❌        |                                                                                |\n| `outline`         |   ❌   | ❌        |                                                                                |\n|                   |   🆕   | `variant` | `variant` now controls the label layout only: `above` (default) or `floating`. |\n\n### validation\n\n| Before | Status | After        | Description                                                                                              |\n| ------ | :----: | ------------ | -------------------------------------------------------------------------------------------------------- |\n|        |   🆕   | `validation` | Set the validation state with `validation`: `valid` (green), `invalid` (red), or `no-validation` (grey). |\n"})))()}function Z(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:ne}),`
`,(0,Q.jsx)(r.h1,{id:`dbinput`,children:`DBInput`}),`
`,(0,Q.jsx)(i,{children:`Input captures short, single-line user text entries in forms and dialogs. It should be predictable, clearly labeled, and provide guidance and validation feedback when needed.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/input`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Input guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/html-css-setup`,rel:`nofollow`,children:`Use the components with HTML and CSS`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:oe}),`
`,(0,Q.jsx)(n,{of:ie}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`datalist-and-typeahead-examples`,children:`Datalist and Typeahead Examples`}),`
`,(0,Q.jsx)(n,{of:s}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-datalist-and-typeahead-examples--docs`,children:`Open the Datalist and Typeahead Examples examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:f}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---length`,children:`Example - Length`}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-length--docs`,children:`Open the Example - Length examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---types---floating-label`,children:`Example - Types - Floating Label`}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-types-floating-label--docs`,children:`Open the Example - Types - Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---types-with-min-and-max`,children:`Example - Types with min and max`}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-types-with-min-and-max--docs`,children:`Open the Example - Types with min and max examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example-floating-label`,children:`Example Floating Label`}),`
`,(0,Q.jsx)(n,{of:fe}),`
`,(0,Q.jsx)(n,{of:ue}),`
`,(0,Q.jsx)(n,{of:le}),`
`,(0,Q.jsx)(n,{of:se}),`
`,(0,Q.jsx)(n,{of:ce}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-floating-label--docs`,children:`Open the Example Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`message-props`,children:`Message Props`}),`
`,(0,Q.jsx)(n,{of:he}),`
`,(0,Q.jsx)(n,{of:_e}),`
`,(0,Q.jsx)(n,{of:me}),`
`,(0,Q.jsx)(n,{of:pe}),`
`,(0,Q.jsx)(n,{of:ge}),`
`,(0,Q.jsx)(n,{of:ye}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-message-props--docs`,children:`Open the Message Props examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`readonly`,children:`Readonly`}),`
`,(0,Q.jsx)(n,{of:Se}),`
`,(0,Q.jsx)(n,{of:be}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-readonly--docs`,children:`Open the Readonly examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(n,{of:Te}),`
`,(0,Q.jsx)(n,{of:Ce}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-leading`,children:`Show Icon Leading`}),`
`,(0,Q.jsx)(n,{of:Oe}),`
`,(0,Q.jsx)(n,{of:Ee}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-leading--docs`,children:`Open the Show Icon Leading examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-leading--trailing`,children:`Show Icon Leading + Trailing`}),`
`,(0,Q.jsx)(n,{of:je}),`
`,(0,Q.jsx)(n,{of:ke}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-leading-trailing--docs`,children:`Open the Show Icon Leading + Trailing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-trailing`,children:`Show Icon Trailing`}),`
`,(0,Q.jsx)(n,{of:Pe}),`
`,(0,Q.jsx)(n,{of:Me}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-trailing--docs`,children:`Open the Show Icon Trailing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(n,{of:Le}),`
`,(0,Q.jsx)(n,{of:Fe}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(n,{of:Be}),`
`,(0,Q.jsx)(n,{of:Re}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(n,{of:Ue}),`
`,(0,Q.jsx)(n,{of:Ve}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(n,{of:Ke}),`
`,(0,Q.jsx)(n,{of:We}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(n,{of:Ye}),`
`,(0,Q.jsx)(n,{of:qe}),`
`,(0,Q.jsx)(n,{of:Je}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`usage-notes`,children:`Usage notes`}),`
`,(0,Q.jsx)(i,{children:`Load SCSS globally somewhere in your app:

\`\`\`scss
@forward "@db-ux/core-components/build/styles/relative";
\`\`\`

Use it:

\`\`\`html
<div class="db-input">
	<label for="username">Label</label>
	<input type="text" name="username" id="username" />
</div>
\`\`\``}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsxs)(r.p,{children:[`In HTML the component is a `,(0,Q.jsx)(r.code,{children:`<div>`}),` with the class `,(0,Q.jsx)(r.code,{children:`db-input`}),`. Options are `,(0,Q.jsx)(r.code,{children:`data-`}),` attributes next to the native attributes of the element. Some options belong on the native control inside it; the column "Element" names it.`]}),`
`,(0,Q.jsx)(i,{children:'| Element | Attribute | Values | Description |\n| --- | --- | --- | --- |\n| `div` | `data-variant` | `"above" \\| "floating"` | Change the variant of the label to float or hidden |\n| `div` | `data-hide-label` | `true` \\| `false` | Inverse of the `showLabel` property. |\n| `div` | `data-show-icon` | `true` \\| `false` | Enables or disables the visibility of the leading icon. For many components this property is optional to reflect Figma properties. |\n| `div` | `data-icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `div` | `data-icon-trailing` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `div` | `data-hide-asterisk` | `true` \\| `false` | Inverse of the `showRequiredAsterisk` property. |\n| `div` | `data-show-icon-trailing` | `true` \\| `false` | Enables or disables the visibility of the trailing icon. For many components this property is optional to reflect Figma properties. |\n| `input` | `data-custom-validity` | `"invalid" \\| "valid" \\| "no-validation"` | Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector. |\n| `input` | `data-field-sizing` | `"fixed" \\| "content"` | Adds shrinkwrap for input and textarea: https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/input`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/core-components`,rel:`nofollow`,children:`@db-ux/core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/input`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Xe(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ee(),te(),r(),re(),ae(),o(),u(),m(),_(),T(),V(),de(),ve(),xe(),we(),De(),Ae(),Ne(),Ie(),ze(),He(),Ge(),J(),X()})))()}$();export{Xe as default};