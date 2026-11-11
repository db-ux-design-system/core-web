import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-CoCKY5_j.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as s}from"./react-DITjJg24.js";import{i as c,n as ee,t as te}from"./content.example.stories-BUXD-HGf.js";import{a as ne,n as l,r as u,t as d}from"./density.example.stories-CPlWdPxX.js";import{i as f,n as p,t as m}from"./disabled.example.stories-CxrqEE5B.js";import{i as h,n as g,o as _,r as v,t as y}from"./examples-floating-label.example.stories-Bz2DELLa.js";import{i as b,r as x,t as S}from"./examples-show-empty-option.example.stories-DVIIogMh.js";import{n as C,r as w,t as T}from"./option-groups.example.stories-D2l9eaIW.js";import{n as E,r as D,t as O}from"./required.example.stories-XJFKb39c.js";import{n as re,r as k,t as A}from"./show-label.example.stories-CjysY-Lw.js";import{n as j,r as M,t as N}from"./show-message.example.stories-D6A9gR76.js";import{n as P,r as F,t as I}from"./show-required-asterisk.example.stories-F4fBz0Ny.js";import{n as L,r as R,t as z}from"./state.example.stories-DN0cVw1F.js";import{i as B,n as V,r as H,t as U}from"./validation.example.stories-Cec4kKCW.js";import{n as W,r as G,t as K}from"./variant.example.stories-kjgK9UCr.js";import{n as q,t as J}from"./select.overview.stories-CFHlKoDt.js";var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| \`elm-select\` |   🔁   | \`db-select\` |             |

### select

| Before     | Status | After      | Description                                                                                                     |
| ---------- | :----: | ---------- | --------------------------------------------------------------------------------------------------------------- |
| \`multiple\` |   🔁   | \`multiple\` | Still supported, but the native multi-select is unstyled - prefer \`db-custom-select\` for a styled multi-select. |
| \`size\`     |   ❌   |            | We removed this attribute for now, there are no valid designs for this use case.                                |
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:q}),`
`,(0,Q.jsx)(r.h1,{id:`dbselect`,children:`DBSelect`}),`
`,(0,Q.jsx)(i,{children:`Select lets users choose one option from a predefined list via a dropdown. It is best when options are mutually exclusive and users don't need to see all choices at once, while still providing clear labeling, guidance, and validation.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/select`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Select guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`content`,children:`Content`}),`
`,(0,Q.jsx)(n,{of:te}),`
`,(0,Q.jsx)(n,{of:ee}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-content--docs`,children:`Open the Content examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples-floating-label`,children:`Examples Floating Label`}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-examples-floating-label--docs`,children:`Open the Examples Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples-showemptyoption-property`,children:`Examples showEmptyOption property`}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-examples-showemptyoption-property--docs`,children:`Open the Examples showEmptyOption property examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`option-groups`,children:`Option Groups`}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-option-groups--docs`,children:`Open the Option Groups examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:V}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbselect-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `invalid-message` | `string` | Helper message for invalid form components |\n| `message` | `string` | Optional helper message for form components |\n| `show-message` | `boolean \\| string` | Enables or disables the visibility of the message. |\n| `placeholder` | `string` | Text that appears in the form control when it has no value set |\n| `value` | `any` | The value property is to receive results from the native form element. |\n| `valid-message` | `string` | Helper message for valid form components |\n| `validation` | `"invalid" \\| "valid" \\| "no-validation"` | Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector. |\n| `required` | `boolean \\| string` | When the required attribute specified, the user will be required to fill the form element before submitting the form. The form element will be marked semantically as required and by default also visually with an asterisk \'*\' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`). |\n| `variant` | `"above" \\| "floating"` | Change the variant of the label to float or hidden |\n| `show-empty-option` | `boolean` | Controls whether the empty placeholder option is shown in the dropdown after the user\'s selection of another option. By default, it is shown for non-required selects and hidden for required selects. Set to `true` to always show or `false` to always hide the empty option. Note: The empty option is only rendered when `variant === \'floating\'` or a `placeholder` is set. Setting `showEmptyOption` alone has no effect if neither of these conditions is met. |\n| `show-label` | `boolean \\| string` | Enables/disables the visibility of the label |\n| `show-required-asterisk` | `boolean \\| string` | This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk \'*\'). It allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`. By default, its value is `true`, so the asterisk is shown when `required` is set. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `label` | `string` | The label attribute specifies the caption of the form element. |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to keep a user from clicking on the item. |\n| `name` | `string` | The name attribute gives the name of the form control, as used in form submission and in the form element\'s elements object. |\n| `size` | `number` | Size of the control |\n| `auto-complete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `autocomplete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `multiple` | `boolean` | Enables multiple select. But it isn\'t styled, please use DBCustomSelect/db-custom-select instead, until we provide enhanced styling by Customizable select element |\n| `aria-described-by` | `string` | Overwrites auto handling for aria-describedby. |\n| `options` | `DBSelectOptionType[]` | If you don\'t/can\'t use children/slots you can pass in the options as an array. |\n| `message-icon` | `IconTypes` | Set/overwrite icon for helper message for form components |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/select`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/select`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function ie(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),s(),r(),J(),G(),c(),ne(),f(),_(),x(),w(),D(),k(),M(),F(),R(),B(),X()})))()}$();export{ie as default};