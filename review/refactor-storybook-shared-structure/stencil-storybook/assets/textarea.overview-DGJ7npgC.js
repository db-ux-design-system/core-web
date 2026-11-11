import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-CCDmKXCz.js";import{s as a}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as o,r as ee}from"./react-DITjJg24.js";import{a as te,n as ne,r as re,t as ie}from"./density.example.stories-DLo33wns.js";import{i as s,n as c,t as l}from"./disabled.example.stories-zTtFxBE9.js";import{i as u,n as d,o as f,r as p,t as m}from"./examples-floating-label.example.stories-DtH8NUDn.js";import{i as h,n as g,t as _}from"./field-sizing.example.stories-WHBAm1BU.js";import{n as v,r as y,t as b}from"./readonly.example.stories-B6dGB6oR.js";import{n as x,r as S,t as C}from"./required.example.stories-DAT0Un1H.js";import{n as w,r as T,t as E}from"./rows.example.stories-CjlKvIYW.js";import{n as D,r as O,t as k}from"./show-label.example.stories-BB_OdQqF.js";import{n as A,r as ae,t as j}from"./show-message.example.stories-DygKGaNY.js";import{n as M,r as N,t as P}from"./show-required-asterisk.example.stories-Dm6WCcz7.js";import{n as F,r as I,t as L}from"./show-resizer.example.stories-B47SgY-R.js";import{n as R,r as z,t as B}from"./state.example.stories-thlN0V8W.js";import{i as V,n as H,r as U,t as W}from"./validation.example.stories-D-VVtO9O.js";import{n as G,r as K,t as q}from"./variant.example.stories-Cc_WsMhd.js";import{n as J,t as oe}from"./textarea.overview.stories-D94_fHlQ.js";var Y;function X(){return(X=e((()=>{Y=`## General

> **Note**
> For a general installation or migration process check out
> this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

### class

| Before         | Status | After         | Description |
| -------------- | :----: | ------------- | ----------- |
| \`elm-textarea\` |   🔁   | \`db-textarea\` |             |

### variants

| Before            | Status | After     | Description                                                                    |
| ----------------- | :----: | --------- | ------------------------------------------------------------------------------ |
| \`semitransparent\` |   ❌   | ❌        | Old look variants are removed; a semi-transparent look is the default now.     |
| \`white\`           |   ❌   | ❌        |                                                                                |
| \`solid\`           |   ❌   | ❌        |                                                                                |
| \`outline\`         |   ❌   | ❌        |                                                                                |
|                   |   🆕   | \`variant\` | \`variant\` now controls the label layout only: \`above\` (default) or \`floating\`. |

### validation

| Before | Status | After        | Description                                                                                              |
| ------ | :----: | ------------ | -------------------------------------------------------------------------------------------------------- |
|        |   🆕   | \`validation\` | Set the validation state with \`validation\`: \`valid\` (green), \`invalid\` (red), or \`no-validation\` (grey). |

### other

| Before        | Status | After     | Description |
| ------------- | :----: | --------- | ----------- |
| \`description\` |   🔁   | \`message\` |             |
`})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:J}),`
`,(0,Q.jsx)(r.h1,{id:`dbtextarea`,children:`DBTextarea`}),`
`,(0,Q.jsx)(i,{children:`Textarea lets users enter and review longer, multi-line text in forms and dialogs. It should be clearly labeled, sized to the expected content, and provide helpful guidance and validation feedback when needed.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2024-12-12)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/textarea`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Textarea guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(n,{of:ie}),`
`,(0,Q.jsx)(n,{of:ne}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(n,{of:l}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`examples-floating-label`,children:`Examples Floating Label`}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-examples-floating-label--docs`,children:`Open the Examples Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`field-sizing`,children:`Field Sizing`}),`
`,(0,Q.jsx)(n,{of:g}),`
`,(0,Q.jsx)(n,{of:_}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-field-sizing--docs`,children:`Open the Field Sizing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`readonly`,children:`Readonly`}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(n,{of:v}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-readonly--docs`,children:`Open the Readonly examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`rows`,children:`Rows`}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:E}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-rows--docs`,children:`Open the Rows examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-resizer`,children:`Show Resizer`}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-show-resizer--docs`,children:`Open the Show Resizer examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:H}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbtextarea-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `invalid-message` | `string` | Helper message for invalid form components |\n| `message` | `string` | Optional helper message for form components |\n| `show-message` | `boolean \\| string` | Enables or disables the visibility of the message. |\n| `value` | `any` | The value property is to receive results from the native form element. |\n| `valid-message` | `string` | Helper message for valid form components |\n| `validation` | `"invalid" \\| "valid" \\| "no-validation"` | Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector. |\n| `required` | `boolean \\| string` | When the required attribute specified, the user will be required to fill the form element before submitting the form. The form element will be marked semantically as required and by default also visually with an asterisk \'*\' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`). |\n| `min-length` | `number \\| string` | Minimum length (number of characters) of value |\n| `max-length` | `number \\| string` | Maximum length (number of characters) of value |\n| `variant` | `"above" \\| "floating"` | Change the variant of the label to float or hidden |\n| `show-required-asterisk` | `boolean \\| string` | This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk \'*\'). It allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`. By default, its value is `true`, so the asterisk is shown when `required` is set. |\n| `show-label` | `boolean \\| string` | Enables/disables the visibility of the label |\n| `label` | `string` | The label attribute specifies the caption of the form element. |\n| `field-sizing` | `"fixed" \\| "content"` | Adds shrinkwrap for input and textarea: https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing |\n| `resize` | `"none" \\| "both" \\| "horizontal" \\| "vertical"` | In most browsers, textareas are resizable — you\'ll notice the drag handle in the right-hand corner, you can control it with this |\n| `show-resizer` | `boolean \\| string` | Show/Hides drag handle in the right-hand corner - default: true |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to keep a user from clicking on the item. |\n| `read-only` | `boolean \\| string` | The disabled attribute can be set to keep a user from edit on the form element |\n| `readonly` | `boolean \\| string` | The disabled attribute can be set to keep a user from edit on the form element |\n| `form` | `string` | Associates the control with a form element |\n| `maxlength` | `number \\| string` | Maximum length (number of characters) of value |\n| `minlength` | `number \\| string` | Minimum length (number of characters) of value |\n| `name` | `string` | The name attribute gives the name of the form control, as used in form submission and in the form element\'s elements object. |\n| `wrap` | `"hard" \\| "soft" \\| "off"` | Indicates how the control should wrap the value for form submission. |\n| `spell-check` | `boolean` | Specifies whether the textarea is subject to spell checking by the underlying browser/OS |\n| `auto-complete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `autocomplete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `aria-described-by` | `string` | Overwrites auto handling for aria-describedby. |\n| `placeholder` | `string` | Text that appears in the form control when it has no value set |\n| `rows` | `number \\| string` | The number of visible text lines for the control. If it is specified, it must be a positive integer |\n| `cols` | `number \\| string` | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer |\n| `message-icon` | `IconTypes` | Set/overwrite icon for helper message for form components |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/textarea`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/textarea`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function se(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=a(),ee(),r(),oe(),K(),te(),s(),f(),h(),y(),S(),T(),O(),ae(),N(),I(),z(),V(),X()})))()}$();export{se as default};