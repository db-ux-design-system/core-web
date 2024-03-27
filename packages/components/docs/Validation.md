# Validation

-   The form components `checkbox`, `radio`, `input`, `textarea` & `select` have some sort of "auto-validation"
-   `checkbox` & `radio` do have a color change if you use the `required` attribute. If you use [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation) they will be highlighted directly
-   If you use `required` on `input`, `textarea` or `select` you will see invalid/valid states only on submitting or `onchange`

> **Note:** When you use some validation like `required` for `input`, `textarea` or `select` you need to provide a `invalidMessage` and a `validMessage`. Otherwise, you will see a TODO message to inform you that an additional property should be provided.

## Valid/Invalid Messages

If you use some framework you can pass the props `invalidMessage` and `validMessage` to the component. If you use plain html you need to add 2 `.db-infotext` with `[data-semantic="successful"]` &`[data-semantic="critical"]` inside your form-element.
