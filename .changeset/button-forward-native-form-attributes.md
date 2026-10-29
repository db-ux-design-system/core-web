---
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(DBButton): forward native form submission attributes

Adds the native `<button>` form-submission attributes (`formAction`, `formEncType`, `formMethod`, `formNoValidate`, `formTarget`) as properties on `DBButton` and renders them on the inner `<button>`, so a submit button can override its owning `<form>` (most notably `formMethod="dialog"` to close a `<dialog>`). Previously these never reached the native button for the Angular and Web Component outputs, so `<db-button formmethod="dialog">` silently submitted the form normally. Each attribute accepts both the camelCase React DOM spelling and the native lowercase spelling.
