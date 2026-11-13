import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,n,p as r,s as i}from"./blocks-B_nt4TQH.js";import{s as ee}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as a,r as te}from"./react-DITjJg24.js";import{a as ne,n as re,r as ie,t as ae}from"./datalist-typeahead-examples.example.stories-CuqdcRIB.js";import{a as oe,n as o,r as s,t as c}from"./density.example.stories-DGo6rTIp.js";import{i as l,n as u,t as d}from"./disabled.example.stories-Bi6SHlgk.js";import{a as f,i as p,n as m,r as h,s as g,t as _}from"./example-floating-label.example.stories-Bia7nzdr.js";import{a as v,n as y,r as b,t as x}from"./example-length.example.stories-B8r0Dykd.js";import{a as S,c as C,d as w,f as T,h as E,i as D,l as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F}from"./example-types-floating-label.example.stories-4pZLyZks.js";import{a as I,c as L,d as R,f as z,i as B,l as V,m as H,n as U,o as W,r as G,s as K,t as q,u as se}from"./example-types-with-min-and-max.example.stories-Cm5jgoae.js";import{n as ce,r as le,t as ue}from"./readonly.example.stories-C-r0xSif.js";import{n as de,r as fe,t as pe}from"./required.example.stories-C1KlbNqf.js";import{n as me,r as he,t as ge}from"./show-icon-leading-trailing.example.stories-Cf0UEXY2.js";import{n as _e,r as ve,t as ye}from"./show-icon-leading.example.stories-Bnynau_V.js";import{n as be,r as xe,t as Se}from"./show-icon-trailing.example.stories-q-siknEd.js";import{n as Ce,r as we,t as Te}from"./show-label.example.stories-BEU09T-T.js";import{n as Ee,r as De,t as Oe}from"./show-message.example.stories-Dz0hs3TZ.js";import{n as ke,r as Ae,t as je}from"./show-required-asterisk.example.stories-CKFF5YGg.js";import{n as Me,r as Ne,t as Pe}from"./state.example.stories-C5aZkW65.js";import{i as Fe,n as Ie,r as Le,t as Re}from"./validation.example.stories-B8kaC3Pu.js";import{n as ze,r as J,t as Be}from"./variant.example.stories-DbLLMnat.js";import{n as Ve,t as He}from"./input.overview.stories-B-zANDml.js";var Y;function X(){return(X=e((()=>{Y="## General\n\n> **Note**\n> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).\n\n## DB UI Core ➡ DB UX Design System Core components\n\n### class\n\n| Before      | Status | After      | Description |\n| ----------- | :----: | ---------- | ----------- |\n| `elm-input` |   🔁   | `db-input` |             |\n\n### variants\n\n| Before            | Status | After     | Description                                                                    |\n| ----------------- | :----: | --------- | ------------------------------------------------------------------------------ |\n| `semitransparent` |   ❌   | ❌        | Old look variants are removed; a semi-transparent look is the default now.     |\n| `white`           |   ❌   | ❌        |                                                                                |\n| `solid`           |   ❌   | ❌        |                                                                                |\n| `outline`         |   ❌   | ❌        |                                                                                |\n|                   |   🆕   | `variant` | `variant` now controls the label layout only: `above` (default) or `floating`. |\n\n### validation\n\n| Before | Status | After        | Description                                                                                              |\n| ------ | :----: | ------------ | -------------------------------------------------------------------------------------------------------- |\n|        |   🆕   | `validation` | Set the validation state with `validation`: `valid` (green), `invalid` (red), or `no-validation` (grey). |\n"})))()}function Z(e){let r={a:`a`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...a(),...e.components};return(0,Q.jsxs)(Q.Fragment,{children:[`
`,(0,Q.jsx)(t,{of:Ve}),`
`,(0,Q.jsx)(r.h1,{id:`dbinput`,children:`DBInput`}),`
`,(0,Q.jsx)(i,{children:`Input captures short, single-line user text entries in forms and dialogs. It should be predictable, clearly labeled, and provide guidance and validation feedback when needed.`}),`
`,(0,Q.jsxs)(r.p,{children:[(0,Q.jsx)(r.strong,{children:`Status:`}),` Stable · `,(0,Q.jsx)(r.strong,{children:`Accessibility review:`}),` done (2023-11-23)`]}),`
`,(0,Q.jsx)(r.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,Q.jsx)(`div`,{"data-mode":`light`,children:(0,Q.jsxs)(`a`,{className:`db-card db-sb-platform-card`,"data-behavior":`interactive`,"data-spacing":`small`,href:`https://design-system.deutschebahn.com/documentation/components/input`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,Q.jsx)(`img`,{src:`./brand/images/logo.svg`,alt:``,width:`32`,height:`32`}),(0,Q.jsx)(`strong`,{children:`Input guidelines`}),(0,Q.jsx)(`span`,{children:`When to use it, variants, Do and Don’t and the design rules for accessibility.`}),(0,Q.jsx)(`strong`,{"data-icon-trailing":`arrow_up_right`,children:`Design System Platform`})]})}),`
`,(0,Q.jsxs)(r.p,{children:[`Setup: `,(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/learn/web-components-setup`,rel:`nofollow`,children:`Use the components as Web Components`}),` on the Design System Platform.`]}),`
`,(0,Q.jsx)(r.h2,{id:`usage`,children:`Usage`}),`
`,(0,Q.jsxs)(r.p,{children:[`Open `,(0,Q.jsx)(r.strong,{children:`Show code`}),` below a preview for the markup you can copy, including what it needs to load.`]}),`
`,(0,Q.jsx)(r.h3,{id:`variant`,children:`Variant`}),`
`,(0,Q.jsx)(n,{of:Be}),`
`,(0,Q.jsx)(n,{of:ze}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-variant--docs`,children:`Open the Variant examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`datalist-and-typeahead-examples`,children:`Datalist and Typeahead Examples`}),`
`,(0,Q.jsx)(n,{of:re}),`
`,(0,Q.jsx)(n,{of:ae}),`
`,(0,Q.jsx)(n,{of:ie}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-datalist-and-typeahead-examples--docs`,children:`Open the Datalist and Typeahead Examples examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`density`,children:`Density`}),`
`,(0,Q.jsx)(n,{of:s}),`
`,(0,Q.jsx)(n,{of:c}),`
`,(0,Q.jsx)(n,{of:o}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-density--docs`,children:`Open the Density examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,Q.jsx)(n,{of:d}),`
`,(0,Q.jsx)(n,{of:u}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-disabled--docs`,children:`Open the Disabled examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---length`,children:`Example - Length`}),`
`,(0,Q.jsx)(n,{of:y}),`
`,(0,Q.jsx)(n,{of:x}),`
`,(0,Q.jsx)(n,{of:b}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-length--docs`,children:`Open the Example - Length examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---types---floating-label`,children:`Example - Types - Floating Label`}),`
`,(0,Q.jsx)(n,{of:D}),`
`,(0,Q.jsx)(n,{of:C}),`
`,(0,Q.jsx)(n,{of:O}),`
`,(0,Q.jsx)(n,{of:S}),`
`,(0,Q.jsx)(n,{of:F}),`
`,(0,Q.jsx)(n,{of:T}),`
`,(0,Q.jsx)(n,{of:k}),`
`,(0,Q.jsx)(n,{of:M}),`
`,(0,Q.jsx)(n,{of:N}),`
`,(0,Q.jsx)(n,{of:w}),`
`,(0,Q.jsx)(n,{of:j}),`
`,(0,Q.jsx)(n,{of:P}),`
`,(0,Q.jsx)(n,{of:A}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-types-floating-label--docs`,children:`Open the Example - Types - Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example---types-with-min-and-max`,children:`Example - Types with min and max`}),`
`,(0,Q.jsx)(n,{of:G}),`
`,(0,Q.jsx)(n,{of:K}),`
`,(0,Q.jsx)(n,{of:L}),`
`,(0,Q.jsx)(n,{of:B}),`
`,(0,Q.jsx)(n,{of:V}),`
`,(0,Q.jsx)(n,{of:R}),`
`,(0,Q.jsx)(n,{of:W}),`
`,(0,Q.jsx)(n,{of:q}),`
`,(0,Q.jsx)(n,{of:U}),`
`,(0,Q.jsx)(n,{of:I}),`
`,(0,Q.jsx)(n,{of:se}),`
`,(0,Q.jsx)(n,{of:z}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-types-with-min-and-max--docs`,children:`Open the Example - Types with min and max examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`example-floating-label`,children:`Example Floating Label`}),`
`,(0,Q.jsx)(n,{of:_}),`
`,(0,Q.jsx)(n,{of:h}),`
`,(0,Q.jsx)(n,{of:m}),`
`,(0,Q.jsx)(n,{of:f}),`
`,(0,Q.jsx)(n,{of:p}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-example-floating-label--docs`,children:`Open the Example Floating Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`readonly`,children:`Readonly`}),`
`,(0,Q.jsx)(n,{of:ue}),`
`,(0,Q.jsx)(n,{of:ce}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-readonly--docs`,children:`Open the Readonly examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`required`,children:`Required`}),`
`,(0,Q.jsx)(n,{of:pe}),`
`,(0,Q.jsx)(n,{of:de}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-required--docs`,children:`Open the Required examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-leading`,children:`Show Icon Leading`}),`
`,(0,Q.jsx)(n,{of:ye}),`
`,(0,Q.jsx)(n,{of:_e}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-leading--docs`,children:`Open the Show Icon Leading examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-leading--trailing`,children:`Show Icon Leading + Trailing`}),`
`,(0,Q.jsx)(n,{of:ge}),`
`,(0,Q.jsx)(n,{of:me}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-leading-trailing--docs`,children:`Open the Show Icon Leading + Trailing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-icon-trailing`,children:`Show Icon Trailing`}),`
`,(0,Q.jsx)(n,{of:Se}),`
`,(0,Q.jsx)(n,{of:be}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-icon-trailing--docs`,children:`Open the Show Icon Trailing examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-label`,children:`Show Label`}),`
`,(0,Q.jsx)(n,{of:Te}),`
`,(0,Q.jsx)(n,{of:Ce}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-label--docs`,children:`Open the Show Label examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-message`,children:`Show Message`}),`
`,(0,Q.jsx)(n,{of:Oe}),`
`,(0,Q.jsx)(n,{of:Ee}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-message--docs`,children:`Open the Show Message examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`show-required-asterisk`,children:`Show Required Asterisk`}),`
`,(0,Q.jsx)(n,{of:je}),`
`,(0,Q.jsx)(n,{of:ke}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-show-required-asterisk--docs`,children:`Open the Show Required Asterisk examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`state`,children:`State`}),`
`,(0,Q.jsx)(n,{of:Pe}),`
`,(0,Q.jsx)(n,{of:Me}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-state--docs`,children:`Open the State examples`})}),`
`,(0,Q.jsx)(r.h3,{id:`validation`,children:`Validation`}),`
`,(0,Q.jsx)(n,{of:Re}),`
`,(0,Q.jsx)(n,{of:Ie}),`
`,(0,Q.jsx)(n,{of:Le}),`
`,(0,Q.jsx)(r.p,{children:(0,Q.jsx)(r.a,{href:`?path=/docs/components-dbinput-validation--docs`,children:`Open the Validation examples`})}),`
`,(0,Q.jsx)(r.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,Q.jsx)(i,{children:'| Attribute | Type | Description |\n| --- | --- | --- |\n| `invalid-message` | `string` | Helper message for invalid form components |\n| `data-list-id` | `string` | Add a custom id to [data list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) if you\'re using `dataList` attribute. |\n| `message` | `string` | Optional helper message for form components |\n| `show-message` | `boolean \\| string` | Enables or disables the visibility of the message. |\n| `value` | `any` | The value property is to receive results from the native form element. |\n| `valid-message` | `string` | Helper message for valid form components |\n| `validation` | `"invalid" \\| "valid" \\| "no-validation"` | Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector. |\n| `required` | `boolean \\| string` | When the required attribute specified, the user will be required to fill the form element before submitting the form. The form element will be marked semantically as required and by default also visually with an asterisk \'*\' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`). |\n| `min-length` | `number \\| string` | Minimum length (number of characters) of value |\n| `max-length` | `number \\| string` | Maximum length (number of characters) of value |\n| `pattern` | `string` | Pattern the value must match to be valid |\n| `data-list` | `string[] \\| ValueLabelType[]` | Set a [data list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) via attribute instead of children. |\n| `variant` | `"above" \\| "floating"` | Change the variant of the label to float or hidden |\n| `show-label` | `boolean \\| string` | Enables/disables the visibility of the label |\n| `show-icon-leading` | `boolean \\| string` | Enables or disables the visibility of the leading icon. For many components this property is optional to reflect Figma properties. |\n| `show-icon` | `boolean \\| string` | Enables or disables the visibility of the icon. The default value depends on the component. For many components this property is optional to reflect Figma properties. |\n| `icon-leading` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `icon` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `icon-trailing` | `IconTypes` | Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/documentation/icons)) to get displayed in front of the elements content. |\n| `show-required-asterisk` | `boolean \\| string` | This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk \'*\'). It allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`. By default, its value is `true`, so the asterisk is shown when `required` is set. |\n| `show-icon-trailing` | `boolean \\| string` | Enables or disables the visibility of the trailing icon. For many components this property is optional to reflect Figma properties. |\n| `label` | `string` | The label attribute specifies the caption of the form element. |\n| `field-sizing` | `"fixed" \\| "content"` | Adds shrinkwrap for input and textarea: https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing |\n| `name` | `string` | The name attribute gives the name of the form control, as used in form submission and in the form element\'s elements object. |\n| `type` | `"color" \\| "date" \\| "datetime-local" \\| "email" \\| "file" \\| "hidden" \\| "month" \\| "number" \\| "password" \\| "range" \\| "search" \\| "tel" \\| "text" \\| "time" \\| "url" \\| "week" \\| string` | Type of form control |\n| `multiple` | `boolean \\| string` | Allow selecting multiple files. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file#multiple |\n| `accept` | `string` | Specifies the types of files that the server accepts (for type="file"). https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept |\n| `placeholder` | `string` | Text that appears in the form control when it has no value set |\n| `disabled` | `boolean \\| string` | The disabled attribute can be set to keep a user from clicking on the item. |\n| `step` | `number \\| string` | Sets [step value](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step). |\n| `maxlength` | `number \\| string` | Maximum length (number of characters) of value |\n| `minlength` | `number \\| string` | Minimum length (number of characters) of value |\n| `max` | `number \\| string` | Maximum value |\n| `min` | `number \\| string` | Minimum value |\n| `read-only` | `boolean \\| string` | The disabled attribute can be set to keep a user from edit on the form element |\n| `readonly` | `boolean \\| string` | The disabled attribute can be set to keep a user from edit on the form element |\n| `form` | `string` | Associates the control with a form element |\n| `size` | `number` | Size of the control |\n| `auto-complete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `autocomplete` | `string \\| "off" \\| "on" \\| "name" \\| "honorific-prefix" \\| "given-name" \\| "additional-name" \\| "family-name" \\| "honorific-suffix" \\| "nickname" \\| "email" \\| "username" \\| "new-password" \\| "current-password" \\| "one-time-code" \\| "organization-title" \\| "organization" \\| "street-address" \\| "shipping" \\| "billing" \\| "address-line1" \\| "address-line2" \\| "address-line3" \\| "address-level4" \\| "address-level3" \\| "address-level2" \\| "address-level1" \\| "country" \\| "country-name" \\| "postal-code" \\| "cc-name" \\| "cc-given-name" \\| "cc-additional-name" \\| "cc-family-name" \\| "cc-number" \\| "cc-exp" \\| "cc-exp-month" \\| "cc-exp-year" \\| "cc-csc" \\| "cc-type" \\| "transaction-currency" \\| "transaction-amount" \\| "language" \\| "bday" \\| "bday-day" \\| "bday-month" \\| "bday-year" \\| "sex" \\| "tel" \\| "tel-country-code" \\| "tel-national" \\| "tel-area-code" \\| "tel-local" \\| "tel-extension" \\| "impp" \\| "url" \\| "photo" \\| "webauthn"` | See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete |\n| `autofocus` | `DBInputProps["autofocus"]` |  |\n| `enterkeyhint` | `\'enter\' \\| \'done\' \\| \'go\' \\| \'next\' \\| \'previous\' \\| \'search\' \\| \'send\'` | Hint for the [enter key behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) on virtual keyboards. |\n| `inputmode` | `\'none\' \\| \'text\' \\| \'decimal\' \\| \'numeric\' \\| \'tel\' \\| \'search\' \\| \'email\' \\| \'url\'` | Hint for [virtual keyboard](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode) selection. |\n| `aria-described-by` | `string` | Overwrites auto handling for aria-describedby. |\n| `message-size` | `"small" \\| "medium"` | The size of the message infotext. Defaults to "small". |\n| `message-icon` | `IconTypes` | Set/overwrite icon for helper message for form components |\n| `valid-message-size` | `"small" \\| "medium"` | The size of the valid message infotext. Defaults to "small". |\n| `invalid-message-size` | `"small" \\| "medium"` | The size of the invalid message infotext. Defaults to "small". |'}),`
`,(0,Q.jsx)(r.h2,{id:`migration`,children:`Migration`}),`
`,(0,Q.jsx)(i,{children:Y.replace(/^(#{2,4}) /gm,`#$1 `)}),`
`,(0,Q.jsx)(r.h2,{id:`resources`,children:`Resources`}),`
`,(0,Q.jsxs)(r.ul,{children:[`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://design-system.deutschebahn.com/documentation/components/input`,rel:`nofollow`,children:`Guidelines on the Design System Platform`})}),`
`,(0,Q.jsxs)(r.li,{children:[`npm: `,(0,Q.jsx)(r.a,{href:`https://www.npmjs.com/package/@db-ux/wc-core-components`,rel:`nofollow`,children:`@db-ux/wc-core-components`})]}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/tree/main/packages/components/src/components/input`,rel:`nofollow`,children:`Source code on GitHub`})}),`
`,(0,Q.jsx)(r.li,{children:(0,Q.jsx)(r.a,{href:`https://github.com/db-ux-design-system/core-web/blob/main/packages/components/CHANGELOG.md`,rel:`nofollow`,children:`Changelog`})}),`
`]})]})}function Ue(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,Q.jsx)(t,{...e,children:(0,Q.jsx)(Z,{...e})}):Z(e)}var Q;function $(){return($=e((()=>{Q=ee(),te(),r(),He(),J(),ne(),oe(),l(),v(),E(),H(),g(),le(),fe(),ve(),he(),xe(),we(),De(),Ae(),Ne(),Fe(),X()})))()}$();export{Ue as default};