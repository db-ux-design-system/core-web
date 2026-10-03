---
"@db-ux/core-eslint-plugin": patch
---

fix(eslint-plugin): correct slot and header detection across React, Vue, and Angular

- React: reject `header={undefined}` and boolean-literal attribute values as empty content, and peel optional chains (`ChainExpression`) and spreads (`SpreadElement`) so the inner expression is evaluated
- Vue: reset the slot-template match when crossing an intervening component boundary so a sub-component in another component's identically named slot is still reported
- Angular: treat `undefined` bindings as statically empty, and traverse `@switch` cases via `cases` (Angular 21+) in addition to the legacy `groups`
