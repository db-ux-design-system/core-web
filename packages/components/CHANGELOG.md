# @db-ux/core-components

## 3.1.17

### Patch Changes

- 1a7023a: fix: color mode for textarea resizer control set by color-mode-switch documentation UI component
- 1a7023a: refactor: enabling `hidden` HTML attribute in every context in which we need to set overwriting styling declarations (`display`)
  - @db-ux/core-foundations@3.1.17

## 3.1.16

### Patch Changes

- a28eb71: fix(custom-select): keyboard navigation for option groups in single-select mode:
  - Fixes a keyboard accessibility issue where users could not navigate to options in subsequent option groups using arrow keys in single-select mode.
  - Now, all options are accessible via keyboard regardless of group boundaries.
- a28eb71: fix: JS framework core-components packages are missing `@db-ux` dependencies
  - @db-ux/core-foundations@3.1.16

## 3.1.15

### Patch Changes

- 262964b: fix(Switch): double event firing with Angular signals
- 262964b: fix(CustomSelect): tags remaining visible when form values are reset
- 262964b: fix(CustomSelect): custom removeTagsTexts are not applied correctly
  - @db-ux/core-foundations@3.1.15
