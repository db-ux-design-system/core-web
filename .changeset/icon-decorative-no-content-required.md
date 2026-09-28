---
"@db-ux/core-eslint-plugin": patch
---

fix(text-or-children-required): stop requiring content on `DBIcon`

`DBIcon` renders with `aria-hidden="true"` and `font-size: 0`, so a `text` property or children reach neither screen readers nor sighted users. The rule nevertheless demanded one of them, which forced consumers to write markup that is guaranteed to be inert -- while `aria-label`, the only attribute that could name an icon, did not satisfy it. The rule already treated `DBIcon` as an always-hidden child when computing the accessible name of `DBDialogHeader` / `DBDrawerHeader`; it now applies the same reasoning to the icon itself and no longer reports it.
