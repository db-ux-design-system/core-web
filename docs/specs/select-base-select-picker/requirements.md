# Requirements: Customizable picker for `DBSelect`

Related issue: [#3654](https://github.com/db-ux-design-system/core-web/issues/3654)

## Introduction

The options list of the native `select` in `DBSelect` is rendered by the browser. On macOS it is placed relative to the outer frame of the control and looks misaligned. We can't change that with regular CSS.

`appearance: base-select` lets us style the native picker with CSS. It is supported in Chrome and Edge 135+ and in Safari 27+. Firefox doesn't support it yet. Edge and Safari cover all DB users, so a progressive enhancement is enough.

`DBCustomSelect` already has a styled dropdown. Instead of copying those styles into `DBSelect`, both components share one set of dropdown styles.

## Glossary

- **Picker**: the popup with the options. For `DBSelect` this is `::picker(select)`, for `DBCustomSelect` it's `.db-custom-select-dropdown`.
- **Option**: one entry in the picker. Native `option` for `DBSelect`, `.db-custom-select-list-item` for `DBCustomSelect`.
- **Supporting browser**: a browser that matches `@supports (appearance: base-select)`.

## Requirements

### 1. Picker position

**User story:** As a user, I want the options list to open directly below the select field, so that it's clearly connected to the field.

1. WHEN the picker opens in a supporting browser, THE picker SHALL be aligned with the inline start edge of the `select` element, not with the label or focus frame.
2. WHEN there isn't enough space below the field, THE picker SHALL open above the field.
3. THE picker SHALL be at least as wide as the `select` element.
4. THE gap between field and picker SHALL match `DBCustomSelect`.

### 2. Shared visual styles

**User story:** As a design system maintainer, I want the picker styles of `DBSelect` and `DBCustomSelect` to come from one source, so that we don't maintain them twice.

1. THE picker surface (background, border radius, elevation, padding, max block size, scrolling) SHALL be defined once in `styles/internal/_select-components.scss` and used by both components.
2. THE option styles (padding, border radius, hover and pressed background, selected state, disabled state, focus state) SHALL be defined once and used by both components.
3. THE group label styles SHALL be defined once and used by both components.
4. AFTER the refactoring, `DBCustomSelect` SHALL look the same as before (no visual regression).
5. WHEN a browser doesn't support `::picker(select)`, THE `DBCustomSelect` styles SHALL still apply. Shared styles must not end up in the same selector list as `::picker(select)`.
6. THE shared styles SHALL NOT duplicate the `DBCustomSelect` component styles into `select.scss`.

### 3. Option states in `DBSelect`

**User story:** As a user, I want the options to look and behave like in `DBCustomSelect`, so that both selects feel consistent.

1. WHEN an option is hovered or pressed, THE option SHALL show the same interaction background as in `DBCustomSelect`.
2. WHEN an option is selected, THE option SHALL be bold and show a trailing check icon, like a single-select `DBCustomSelect`.
3. WHEN an option has focus via keyboard, THE option SHALL show the design system focus style.
4. WHEN an option is disabled, THE option SHALL use the disabled style of the design system.
5. WHEN options are grouped with `optgroup`, THE group label SHALL be visually distinct from the options, like in `DBCustomSelect`.

### 4. Existing `DBSelect` features

**User story:** As a developer, I want all existing `DBSelect` features to keep working, so that the enhancement doesn't break my forms.

1. THE trailing chevron icon SHALL stay the design system icon. The browser's default `::picker-icon` SHALL NOT be shown in addition.
2. THE leading icon (`icon` property) SHALL keep its position.
3. THE placeholder and the empty option (`placeholder`, `showEmptyOption`) SHALL keep their current behavior.
4. THE floating label variant SHALL keep its current behavior.
5. THE validation states and messages SHALL keep their current behavior.
6. THE density variants SHALL apply to the picker and its options.
7. WHEN `multiple` is set or `size` is greater than 1, THE `select` SHALL keep its current rendering. These cases are out of scope.

### 5. Fallback

**User story:** As a user of a browser without `base-select` support, I want the select to keep working as before.

1. WHEN the browser doesn't support `appearance: base-select`, THE `select` SHALL look and behave exactly as today.
2. THE enhancement SHALL be CSS only. No JavaScript is added for positioning.
3. THE component markup and public API (`model.ts`) SHALL NOT change.

### 6. Theming and accessibility

1. THE picker SHALL use the adaptive color tokens, so that light mode, dark mode and color variants work.
2. THE picker SHALL work in forced colors (high contrast) mode.
3. THE keyboard behavior and screen reader output SHALL stay the native `select` behavior. This must be verified with VoiceOver and NVDA.
4. THE picker SHALL respect `prefers-reduced-motion` for any transition.

### 7. Release

1. THE change SHALL include a changeset for all packages of the `packages/components/src` row in `AGENTS.md` (`minor`, because the visual behavior changes).
2. THE `DBSelect` documentation SHALL mention that the styled picker is a progressive enhancement and which browsers show it.
