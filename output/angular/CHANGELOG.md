# @db-ux/ngx-core-components

## 4.4.0

### Minor Changes

- feat: add `role` property to DBNotification & automatically add role based on semantic if no `role` or `ariaLive` is provided to increase UX for screen-reader users - [see commit 177d71e](https://github.com/db-ux-design-system/core-web/commit/177d71e287a64a6491ba446e7812d0adbda1717e)

- feat(DBSelect): hide empty first option in `required` selects with placeholder after the first user selection, and add `showEmptyOption` prop to overwrite this - [see commit 4280bc4](https://github.com/db-ux-design-system/core-web/commit/4280bc47538d6983d6bb5575f012b6c6b25b40e8)

## 4.3.2

### Patch Changes

- fix(input): add missing `accept` attribute for file inputs - [see commit d74707d](https://github.com/db-ux-design-system/core-web/commit/d74707d17045a0efb182856e9a3db192a4d6e2fa)

- fix: rendering issue with drawer and sub-navigation when user has `prefers-reduced-motion: reduce` - [see commit cd23ff2](https://github.com/db-ux-design-system/core-web/commit/cd23ff2da5fa8a11121c3195467b4b4c0ab2ebb6)

- fix(customselect): select last remaining result with enter key - [see commit cc6a445](https://github.com/db-ux-design-system/core-web/commit/cc6a445c523cc196b9c93584c62772ba9864996f)

## 4.3.1

### Patch Changes

- fix(angular): issue with form-components not applying value changes because of [attr.value] instead of native [value] binding - [see commit 61ab4a3](https://github.com/db-ux-design-system/core-web/commit/61ab4a3e9a781459b829c74cf23624a23edd9e3f)

## 4.3.0

### Minor Changes

- _version bump_ (staying in sync with the Figma library) - [see commit 9e03702](https://github.com/db-ux-design-system/core-web/commit/9e0370266511fa99085ff837e430ad83f28856ec)

### Patch Changes

- fix(input): support `step`-HTML-attribute/-property with `"any"` value for `number` inputs - [see commit 748d1af](https://github.com/db-ux-design-system/core-web/commit/748d1af8ca38c8c10ea134ef23b2846e047186a6)

## 4.2.6

### Patch Changes

- fix(switch): not displaying the `forced-colors` content on regular display mode - [see commit 3b18938](https://github.com/db-ux-design-system/core-web/commit/3b189383324edd2a30b2d60b45fe1130ae5b8478)

## 4.2.5

### Patch Changes

- fix: placeholder for DBSelect with variant floating is moved down - [see commit 9e1e48c](https://github.com/db-ux-design-system/core-web/commit/9e1e48c3ee10e72c52df58b65f4562be007d3447)

## 4.2.4

_version bump_

## 4.2.3

### Patch Changes

- fix(SASS): return typed values from scss functions `px-to-rem` and `px-to-em` instead of strings - [see commit e1be60a](https://github.com/db-ux-design-system/core-web/commit/e1be60a871596107d8026390b194f0730c84a8ad)

- refactor(css): replacing slow selector - [see commit 1133c21](https://github.com/db-ux-design-system/core-web/commit/1133c216ab5ec802241c6986fc9287ff22a287b0)

- fix: DBSection ignoring `id` prop during SSR - [see commit 254a705](https://github.com/db-ux-design-system/core-web/commit/254a70507422b070c35b69487323b797de3c73a9)

- fix(textarea): "responsiveness" due to CSS selector - [see commit c1104df](https://github.com/db-ux-design-system/core-web/commit/c1104dfe242a455ea8cf80716322a591e6e6e109)

## 4.2.2

### Patch Changes

- fix(form elements): `valid` background- and border-colors - [see commit 8f07e55](https://github.com/db-ux-design-system/core-web/commit/8f07e55f2155fcb619198857397ce354f90c4803)

- DBInput: inserting an empty string doesn't reset/empty date or time related form fields - [see commit 884b03d](https://github.com/db-ux-design-system/core-web/commit/884b03d3997ffad725c99f63480563f309a046ef)

- fix: set DBTabItem internal state `_selected` correctly - [see commit f7625cb](https://github.com/db-ux-design-system/core-web/commit/f7625cbd9d64513527e826c9d2c1ef42b2734a4b):

      - Now also sets aria-selected=true|false correctly which improves screen reader behaviour

## 4.2.1

### Patch Changes

- refactor(DBSwitch): Also toggle on pressing Enter key, not just Space - [see commit 95a7569](https://github.com/db-ux-design-system/core-web/commit/95a7569121ccf0fef318df4f23941c3f48a4a074)

## 4.2.0

### Minor Changes

- feat(DBHeader): Passthrough property `closeButtonText` for the close button within the inner `DBDrawer`. - [see commit 211cf1d](https://github.com/db-ux-design-system/core-web/commit/211cf1d1fa98938d5bce732863da8bb3f7b75f98)

## 4.1.0

### Minor Changes

- refactor(notification): update and simplify grid layout for block link variant - [see commit cb83f96](https://github.com/db-ux-design-system/core-web/commit/cb83f966eaf29c85b4cf0079750bdd563f216d6e)

- fix(DBCustomSelect): properly announce selected options - [see commit 773edeb](https://github.com/db-ux-design-system/core-web/commit/773edeb943a085eb79e1c8d59059137b2830fbf0):
  - feat(DBCustomSelect): introduce new property `selectedPrefix`

### Patch Changes

- fix(DBCustomSelect): automatically handle form reset events - [see commit 6af5246](https://github.com/db-ux-design-system/core-web/commit/6af5246b3b2e6febdc6ff6342ba1a8eb10184d14):
  - An event listener is now added for every form component (input, custom-select, etc.) when a `form` property is passed.
  - This listener detects form resets and updates the component's internal value/checked state accordingly.
  - > **Note**: This does not work for `ngModel` in Angular.

- fix(button): Replace fixed height with min-height for buttons to allow dynamic height adjustment when text wraps - [see commit d1fd2c4](https://github.com/db-ux-design-system/core-web/commit/d1fd2c4e58a5ed6f75fab44700cd2d93c7232474)

- fix(input): Date or time types – initial value gets displayed as placeholder [see commit e3c7ce7](e3c7ce7718803624557bc8fc66f7b662b42ff0be)

## 4.0.4

### Patch Changes

- fix: hide-animation for drawer - [see commit d4a73fa](https://github.com/db-ux-design-system/core-web/commit/d4a73fa9faba38b6f20fda6f7c85d5c6617793fe)

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

- fix: color mode for textarea resizer control set by color-mode-switch documentation UI component - [see commit 354e270](https://github.com/db-ux-design-system/core-web/commit/354e27029a4378288a97ed5e31b75c11758f0c01)
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
