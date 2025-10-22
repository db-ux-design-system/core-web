# @db-ux/v-core-components

## 4.0.3

### Patch Changes

- chore: generate Amazon Q rule file with [`@db-ux/agent-cli` node package](https://www.npmjs.com/package/@db-ux/agent-cli) - [see commit b61c8b1](https://github.com/db-ux-design-system/core-web/commit/b61c8b14992f5a5b3615c6bff74018d5682aa0cc)

## 4.0.2

### Patch Changes

- fix(card): Remove the obsolete but harmful declaration regarding wrapping button and link styles. - [see commit 34c78df](https://github.com/db-ux-design-system/core-web/commit/34c78dffd4f43b0ac740574358b426a562e05cd0)

- Set border of select, textarea, custom select and input to corresponding color when in/valid state is set. - [see commit 2a02263](https://github.com/db-ux-design-system/core-web/commit/2a022632f8fea7445e77fb632f109d6cd093e2d3)

## 4.0.1

_version bump_

## 4.0.0

### Major Changes

- feat: Switch stable rework - [see commit cb2deb0](https://github.com/db-ux-design-system/core-web/commit/cb2deb0f1c54900d1967483aea05d81279c02f59):
  - **BREAKING CHANGE**: remove `emphasis` property
  - introduce validation (invalid and valid)
  - configurable label position

- **BREAKING CHANGE**: refactor(Custom Select): renamed `ariaListLabel` property to `listLabel` - [see commit 966d5ad](https://github.com/db-ux-design-system/core-web/commit/966d5ad01f00d0ca1707cc316a63e2d431fff1e9)

## 3.1.20

### Patch Changes

- fix(input): iOS Safari VoiceOver bug for types `date`, `datetime-local`, `week`, `month`, `time` and `color` - [see commit 2ca96c8](https://github.com/db-ux-design-system/core-web/commit/2ca96c8852b7413f9a3281d69e9c4fc6f79c4f13)

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

- fix: color mode for textarea resizer control set by color-mode-switch documentation UI component  - [see commit 354e270](https://github.com/db-ux-design-system/core-web/commit/354e27029a4378288a97ed5e31b75c11758f0c01)
- refactor: enabling `hidden` HTML attribute in every context in which we need to set overwriting styling declarations (`display`) - [see commit 4826455](https://github.com/db-ux-design-system/core-web/commit/4826455637590b6ae780afb93abb9effe9380342)

## 3.1.16

### Patch Changes

- a28eb71: fix(custom-select): keyboard navigation for option groups in single-select mode - [see commit 6d60bab](https://github.com/db-ux-design-system/core-web/commit/6d60bab2eb87f16a9ffa942085bffd658564769c):
  - Fixes a keyboard accessibility issue where users could not navigate to options in subsequent option groups using arrow keys in single-select mode.
  - Now, all options are accessible via keyboard regardless of group boundaries.
- fix: JS framework core-components packages are missing `@db-ux` dependencies - [see commit 49df866](https://github.com/db-ux-design-system/core-web/commit/49df866e753a9459f5acdca4ad1e19141b477471)

## 3.1.15

### Patch Changes

- 262964b: fix(Switch): double event firing with Angular signals
- 262964b: fix(CustomSelect): tags remaining visible when form values are reset
- 262964b: fix(CustomSelect): custom removeTagsTexts are not applied correctly
