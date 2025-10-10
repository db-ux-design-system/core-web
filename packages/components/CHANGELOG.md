# @db-ux/core-components

## 3.1.19

_version bump_


## 3.1.18

### Patch Changes

- fix(DBTabs): ensure navigation arrows appear correctly on window resize - [see commit 4e65e00](https://github.com/db-ux-design-system/core-web/commit/4e65e00d280cae18baee03b5a7a9b13eec063835):
  - This update resolves an issue where navigation arrows in DBTabs would not appear or update correctly when the window was resized. The component now properly responds to resize events, ensuring arrows are always shown or hidden as needed.

- fix(select): jumping placeholder for label above - [see commit 7ed8d22](https://github.com/db-ux-design-system/core-web/commit/7ed8d2225102e0e9044437e95917e11eef4bc73f)

- enabled [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli) for every package - [see commit 0233048](https://github.com/db-ux-design-system/core-web/commit/023304869e61f5a506dca66a22d69e5f3d70f4d0):
  - auto-generate/auto-update `.github/copilot-instructions.md`, to ensure GitHub Copilot uses DB UX Components for code generation

## 3.1.17

### Patch Changes

- 0c20c00: fix: color mode for textarea resizer control set by color-mode-switch documentation UI component
- 0c20c00: refactor: enabling `hidden` HTML attribute in every context in which we need to set overwriting styling declarations (`display`)
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
