---
"@db-ux/core-eslint-plugin": patch
---

fix(eslint-plugin): correct slot and header detection across React, Vue, and Angular

- React: reject `header={undefined}` and boolean-literal attribute values as empty content, and peel optional chains (`ChainExpression`) and spreads (`SpreadElement`) so the inner expression is evaluated
- Vue: only accept a slot template whose directly enclosing element is the expected parent, so a sub-component in the slot of an intervening element (e.g. another component, `<transition>` or `<div>`) is still reported
- Angular: treat `undefined` bindings as statically empty, and traverse `@switch` content via both `groups` (`@angular/compiler` 21.1+) and the legacy `cases` (up to 21.0)
