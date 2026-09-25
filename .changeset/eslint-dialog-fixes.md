---
"@db-ux/core-eslint-plugin": patch
---

fix: reduce false positives in the dialog/drawer accessibility rules

- The header/content/close-button rules treat statically unverifiable values (identifiers, calls, JSX spreads, Vue object `v-bind`, dynamic `<template #[slot]>` names, fragments, arrays) as unresolved instead of false-positives, while still reporting statically empty content (`text=""`, `{null}`, `{{ '' }}`, empty fragments/arrays, ...).
- Handles Angular structural directives / control flow and the Vue parser's `Element`/`Element$1` fallback nodes so valid conditional or fallback-exposed markup is not reported.
- Rules reference the shared `COMPONENTS` constants instead of hard-coded component names.
