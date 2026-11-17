# Tasks: Customizable picker for `DBSelect`

See [requirements.md](./requirements.md) and [design.md](./design.md).

- [ ] 1. Clarify open questions
    - Check mobile rendering of `base-select` in Chrome on Android and Safari on iOS
    - Compare `::checkmark`, `optgroup` label and anchor positioning in Chrome and Safari 27
    - Decide on bump type and on mobile scope with the team
    - _Requirements: 1, 3.2, 3.5, 7.1_

- [ ] 2. Extract shared picker mixins
    - [ ] 2.1 Add `select-picker-surface`, `select-picker-list`, `select-picker-option` and `select-picker-group-label` mixins to `styles/internal/_select-components.scss`
    - [ ] 2.2 Provide neutral variables as a mixin or outside of `@supports` (see design, "Why mixins and not placeholders")
    - [ ] 2.3 Use the mixins in `custom-select-dropdown.scss`, `custom-select-list.scss` and `custom-select-list-item.scss`. Keep markup-specific selectors in the component files
    - [ ] 2.4 Verify that the compiled `DBCustomSelect` CSS has no visual changes (snapshots in CI)
    - _Requirements: 2.1–2.6_

- [ ] 3. Enable `base-select` in `DBSelect`
    - [ ] 3.1 Add the `@supports (appearance: base-select)` block in `select.scss`, scoped to `select` without `multiple` and `size > 1`
    - [ ] 3.2 Position the picker below the field with flip to above, minimum width of the field
    - [ ] 3.3 Hide `::picker-icon` and rotate the existing chevron on `:open`
    - [ ] 3.4 Style options: hover, pressed, checked with check icon, disabled, focus
    - [ ] 3.5 Style `optgroup` labels
    - [ ] 3.6 Check placeholder, `showEmptyOption`, floating label, leading icon, density and validation
    - _Requirements: 1, 3, 4_

- [ ] 4. Theming and accessibility
    - [ ] 4.1 Check light mode, dark mode and color variants
    - [ ] 4.2 Check forced colors mode
    - [ ] 4.3 Respect `prefers-reduced-motion`
    - [ ] 4.4 Run the screen reader tests for `select` with VoiceOver and NVDA
    - _Requirements: 6_

- [ ] 5. Tests
    - [ ] 5.1 Add a Playwright test with an open `DBSelect` picker (Chromium, WebKit)
    - [ ] 5.2 Make sure Firefox snapshots for `DBSelect` stay unchanged
    - _Requirements: 1, 3, 5.1_

- [ ] 6. Documentation and release
    - [ ] 6.1 Mention the progressive enhancement and supported browsers in the `DBSelect` docs
    - [ ] 6.2 Add a changeset for all packages of the `packages/components/src` row
    - _Requirements: 7_
