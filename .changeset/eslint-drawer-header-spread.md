---
"@db-ux/core-eslint-plugin": patch
---

fix(drawer-header-required): do not report a JSX spread as a missing header

`<DBDrawer {...drawerProps}>` was reported as missing its `DBDrawerHeader` even though the spread may
carry the `header` prop. A spread cannot be resolved statically, so it is now treated as unverifiable -
the same way explicit identifier and call-expression header values already are - and no longer fails
lint for this standard React composition pattern.
