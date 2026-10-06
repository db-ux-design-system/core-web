---
"@db-ux/core-components": patch
"@db-ux/ngx-core-components": patch
"@db-ux/react-core-components": patch
"@db-ux/wc-core-components": patch
"@db-ux/v-core-components": patch
---

fix(DBControlPanel): wrap full-width action groups instead of overflowing

Full-width control panel action groups relied on the default `flex-wrap: nowrap`, so their items overflowed horizontally once they ran out of space. `flex-wrap: wrap` now lets them wrap onto the next line in the mobile drawer footer (`.db-control-panel-actions-2`) and in the desktop vertical orientation (`.db-control-panel-actions-1` / `.db-control-panel-actions-2`). The mobile `actions-1` group stays unwrapped because it lives in a `min-content` grid track, and the desktop horizontal orientation is unchanged.
