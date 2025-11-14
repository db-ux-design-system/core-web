---
"@db-ux/core-components": patch
---

fix: set DBTabItem internal state `_selected` correctly
- Now also sets aria-selected=true|false correctly which improves screen reader behaviour
