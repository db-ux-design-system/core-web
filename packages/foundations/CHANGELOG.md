# @db-ux/core-foundations

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
