# Validation

- The form components `checkbox`, `radio`, `input`, `textarea` & `select` have some sort of "auto-validation"
- `radio` do have a color change if you use the `required` attribute. If you use [`required`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation) they will be highlighted directly
- If you use `required` on `input`, `textarea` or `select` you will see invalid/valid states only on submitting or `onchange`
- There are some other attributes for `input` (`type`,`minlength`,`maxlength`,`pattern`) and `textarea`(`minlength`,`maxlength`) which can be used for [validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation).

> **Note:** When you use some validation like `required` for `input`, `textarea` or `select` you need to provide a `invalidMessage` (if needed, elsewhere we use the localized browser defaults, which might be fine on most cases) and a `validMessage`. Otherwise, you will see a `TODO` message to inform you that an additional property should be provided.

## Invalid Message Fallback Cascade

When a form element becomes invalid, the displayed error message is resolved through the following cascade (first match wins):

| Priority | Source                          | Description                                                                                                                                                                                                       |
| -------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | `invalidMessage` prop           | Explicitly set on the component (e.g. `<db-input invalidMessage="…">`)                                                                                                                                            |
| 2        | Framework validation message    | Message provided by the forms framework (e.g. Angular Signal Forms `errors[0].message` from the schema)                                                                                                           |
| 3        | Browser default                 | Native `validationMessage` from the browser (e.g. "Please fill out this field" for `required`). Works for all HTML-native constraints like `required`, `minlength`, `maxlength`, `pattern`, `type`, `min`, `max`. |
| 4        | `"TODO: Add an invalidMessage"` | Fallback indicating that a custom message should be provided. Appears when validation is triggered by framework-only logic (e.g. custom Signal Forms validators) without an explicit message.                     |

This cascade applies consistently across all form components (`input`, `textarea`, `select`, `custom-select`, `checkbox`, `switch`). For frameworks without built-in form validation messages (React, Vue, Web Components), priority 2 is skipped — the cascade becomes: `invalidMessage` → browser default → TODO fallback.

## Valid/Invalid Messages

If you use some framework you can pass the props `invalidMessage` and `validMessage` to the component. If you use plain html you need to add 2 `.db-infotext` with `[data-semantic="successful"]` &`[data-semantic="critical"]` inside your form-element.

## Programmatically set / handle validation by yourself

You can use `data-validation|validation="'invalid' | 'valid' | 'no-validation'"` to disable [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid).

> **Note:** This may lead to problems and inconsistency, only use it if you know what you do, and have specific validation conditions that aren't possible to get defined by the huge range of already existing [validation conditions and patterns through attributes](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation).
