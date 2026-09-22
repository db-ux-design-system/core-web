---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBDrawer): generate the fallback id without SSR hydration mismatch

An id-less `DBDrawer` initialized its fallback id with `uuid()` in the store
literal, which runs once on the server and again during hydration and produces a
different value each time - forcing a hydration mismatch (React warns and may keep
stale server markup, and any `aria-labelledby`/`commandfor` referencing that id
breaks). The fallback is now generated after mount instead: the React and Vue
outputs use their framework `useId()` hook (hydration-stable), and the id state
starts `undefined` so an id-less drawer renders no `id` on the server and gains a
stable one on the client. Any later change to the consumer `id` re-syncs,
including clearing it (setting `id`/`propOverrides.id` back to `undefined`): the
drawer then switches to the generated fallback instead of keeping the stale
consumer id, so the document never ends up with a duplicate id or a `commandfor`
that resolves to the wrong element.
