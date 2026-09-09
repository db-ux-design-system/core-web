---
"@db-ux/mcp-server": patch
---

fix(mcp-server): resolve `assets/` correctly in the published bundle

The visuals and design-token tools derived their asset paths with a fixed
`../../assets`, which is correct for the sources but points one level outside the
package once esbuild flattens the server into `dist/index.js`. In the published
package `list_visuals` therefore reported an empty directory,
`get_visual_reference` failed for every name, `get_design_tokens` served
unresolved `var()` references instead of concrete values, and the `elevation`,
`border` and `opacity` categories failed outright. The path is now anchored on
the package root, which is the same in the sources, the bundle and the tarball.
