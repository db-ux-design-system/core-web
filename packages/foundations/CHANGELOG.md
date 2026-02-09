# @db-ux/core-foundations

## 4.4.1

### Patch Changes

- fix: issue with tailwind not reflecting adaptive color changes with `[data-color="xxx"]` - [see commit 936638d](https://github.com/db-ux-design-system/core-web/commit/936638d672bbb6c0f8a0ecf77bf41fafa0e31656)

## 4.4.0

_version bump_

## 4.3.2

_version bump_

## 4.3.1

_version bump_

## 4.3.0

### Minor Changes

- _version bump_ (staying in sync with the Figma library) - [see commit 9e03702](https://github.com/db-ux-design-system/core-web/commit/9e0370266511fa99085ff837e430ad83f28856ec)

## 4.2.6

_version bump_

## 4.2.5

_version bump_

## 4.2.4

### Patch Changes

- refactor(Open Sans): added missing Ukrainian glyph - [see commit d6c15a7](https://github.com/db-ux-design-system/core-web/commit/d6c15a72759ad2c076eb2dc0b4de1e2d75e63a68)

## 4.2.3

### Patch Changes

- fix(SASS): return typed values from scss functions `px-to-rem` and `px-to-em` instead of strings - [see commit e1be60a](https://github.com/db-ux-design-system/core-web/commit/e1be60a871596107d8026390b194f0730c84a8ad)

- refactor(css): replacing slow selector - [see commit 1133c21](https://github.com/db-ux-design-system/core-web/commit/1133c216ab5ec802241c6986fc9287ff22a287b0)

## 4.2.2

_version bump_

## 4.2.1

_version bump_

## 4.2.0

_version bump_

## 4.1.0

_version bump_

## 4.0.4

_version bump_

## 4.0.3

_version bump_

## 4.0.2

### Patch Changes

- chore: update instructions files for better copilot outputs - [see commit e4bc905](https://github.com/db-ux-design-system/core-web/commit/e4bc90508479387371d816d5776f9f568aa5fb82):
  - fix: add some missing variables

- fix(tailwind): add individual color theme files for all color variants - [see commit e8d58bd](https://github.com/db-ux-design-system/core-web/commit/e8d58bde01039a3d233105c2c72efa71c619c4b4):
  - Create separate CSS files for each color
  - Move colors.css to colors/ subdirectory with adaptive theme
  - Add colors/index.css that imports all color variants
  - Update theme/index.css to import from colors/index.css
    - burgundy
    - critical
    - cyan
    - green
    - informational
    - light-green
    - neutral
    - orange
    - pink
    - red
    - successful
    - turquoise
    - violet
    - warning
    - yellow

## 4.0.1

### Patch Changes

- fix: prevent cropped icons in webkit - [see commit 76c3459](https://github.com/db-ux-design-system/core-web/commit/76c3459d8a043f0320ec8d6bc3b520d3f69f055b)

## 4.0.0

_version bump_

## 3.1.20

_version bump_

## 3.1.19

### Patch Changes

- fix: added icon fallback font - [see commit 9643085](https://github.com/db-ux-design-system/core-web/commit/964308522935db01b220c681b47960b8191c74a6)

## 3.1.18

### Patch Changes

- enabled [`@db-ux/agent-cli`](https://www.npmjs.com/package/@db-ux/agent-cli) for every package - [see commit 0233048](https://github.com/db-ux-design-system/core-web/commit/023304869e61f5a506dca66a22d69e5f3d70f4d0):
  - auto-generate/auto-update `.github/copilot-instructions.md`, to ensure GitHub Copilot uses DB UX Components for code generation

## 3.1.17

_version bump_

## 3.1.16

_version bump_

## 3.1.15
