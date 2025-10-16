---
"@db-ux/core-foundations": patch
---

feat(tailwind): add individual color theme files for all color variants

- Create separate CSS files for each color 
- Move colors.css to colors/ subdirectory with adaptive theme
- Add colors/index.css that imports all color variants
- Update theme/index.css to import from colors/index.css

* burgundy
* critical
* cyan
* green
* informational
* light-green
* neutral
* orange
* pink
* red
* successful
* turquoise
* violet
* warning
* yellow

