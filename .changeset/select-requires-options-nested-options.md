---
"@db-ux/core-eslint-plugin": patch
---

fix(select-requires-options): recognize options rendered through control flow, loops and `<optgroup>`

`DBSelect` was reported as missing options when its `<option>` elements were not direct children. The rule now also finds options inside Angular `@for`/`@if`/`@switch`, `*ngFor`/`*ngIf` and `ng-container`, Vue `<template v-for>`, React fragments, `&&`/ternary expressions and `.map()`, and inside `<optgroup>` in all frameworks (#7117).
