---
"@db-ux/core-foundations": minor
"@db-ux/core-components": minor
"@db-ux/ngx-core-components": minor
"@db-ux/react-core-components": minor
"@db-ux/wc-core-components": minor
"@db-ux/v-core-components": minor
---

feat(a11y): add `a11y-visually-hidden` mixin

Promotes the visually-hidden rule set to a reusable `a11y-visually-hidden`
mixin so it can be used inside media queries (where `@extend
%a11y-visually-hidden` is not allowed). The existing `%a11y-visually-hidden`
placeholder now reuses the mixin, so its behavior is unchanged.
