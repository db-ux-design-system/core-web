---
"@db-ux/mcp-server": patch
---

fix(mcp-server): point Gen 2 migration map at non-deprecated components

The `scan_generation_2_migration` scanner suggested deprecated targets
(`cmp-brand` -> `db-brand`, `rea-header` -> `db-header`, `cmp-mainnavigation`
-> `db-navigation`, `rea-page` -> `db-page`, `cmp-sidenavi` ->
`db-control-panel-mobile`). The static migration map now maps to the current
components (`db-control-panel-brand`, `db-control-panel-desktop`,
`db-control-panel-navigation`, `db-shell`, and `db-control-panel-desktop` with
vertical orientation for the desktop side navigation) and adds the newly
supported inputs so scans suggest shipped components.
