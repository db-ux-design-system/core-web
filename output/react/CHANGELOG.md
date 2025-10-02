# @db-ux/react-core-components

## 3.1.17

### Patch Changes

- d75fcff: fix: color mode for textarea resizer control set by color-mode-switch documentation UI component
- e7a6a32: refactor: enabling `hidden` HTML attribute in every context in which we need to set overwriting styling declarations (`display`)
- Updated dependencies [d75fcff]
- Updated dependencies [e7a6a32]
  - @db-ux/core-components@3.1.17
  - @db-ux/core-foundations@3.1.17

## 3.1.16

### Patch Changes

- a28eb71: fix(custom-select): keyboard navigation for option groups in single-select mode:
  - Fixes a keyboard accessibility issue where users could not navigate to options in subsequent option groups using arrow keys in single-select mode.
  - Now, all options are accessible via keyboard regardless of group boundaries.
- a28eb71: fix: JS framework core-components packages are missing `@db-ux` dependencies
- Updated dependencies [a28eb71]
- Updated dependencies [a28eb71]
  - @db-ux/core-components@3.1.16
  - @db-ux/core-foundations@3.1.16

## 3.1.15

### Patch Changes

- 262964b: fix(Switch): double event firing with Angular signals
- 262964b: fix(CustomSelect): tags remaining visible when form values are reset
- 262964b: fix(CustomSelect): custom removeTagsTexts are not applied correctly
