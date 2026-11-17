# Design: Customizable picker for `DBSelect`

See [requirements.md](./requirements.md).

## Overview

We add `appearance: base-select` to `DBSelect` behind `@supports`. The visual styles of the picker and its options move from the `DBCustomSelect` sub-components into shared mixins in `_select-components.scss`. Both components include these mixins with their own selectors.

The change is CSS only. Markup, `model.ts` and framework outputs stay the same.

## Current state

| Part             | `DBCustomSelect`                                                               | `DBSelect`                                            |
| ---------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Picker surface   | `.db-custom-select-dropdown` + `.db-card` (background, radius), elevation `md` | Browser default                                       |
| Picker position  | JavaScript (`handleFixedDropdown`), fixed dialog on tablet and smaller         | Browser default                                       |
| Scroll container | `.db-custom-select-list` (padding, max block size for 5.5 items)               | Browser default                                       |
| Option           | `.db-custom-select-list-item` (padding, radius, hover/pressed, check icon)     | Only `background-color` and `color`, ignored on macOS |
| Group label      | `span` in list item, `emphasis-80`, font size `md`                             | `optgroup` with `level-3` background                  |
| Shared already   | `%select-icon`, `%select-placeholder`, `$select-icon-padding`                  | same                                                  |

## Architecture

```text
styles/internal/_select-components.scss
├── %select-icon                     (exists)
├── %select-placeholder              (exists)
├── @mixin select-picker-surface     (new) background, radius, elevation, neutral variables
├── @mixin select-picker-list        (new) padding, max block size, scrolling
├── @mixin select-picker-option      (new) padding, radius, hover/pressed, checked, disabled
└── @mixin select-picker-group-label (new) font size, color

custom-select-dropdown.scss   .db-custom-select-dropdown   @include select-picker-surface
custom-select-list.scss       .db-custom-select-list       @include select-picker-list
custom-select-list-item.scss  .db-custom-select-list-item  @include select-picker-option
select.scss                   @supports (appearance: base-select) { ... @include ... }
```

### Why mixins and not placeholders

The existing shared parts use placeholders (`%select-icon`). For the picker this doesn't work:

- Sass doesn't allow `@extend` of an outer selector from inside a CSS at-rule like `@supports`.
- Extending would merge `.db-custom-select-dropdown` and `.db-select select::picker(select)` into one selector list. Browsers that don't know `::picker()` drop the whole rule, so `DBCustomSelect` would lose its styles in Firefox.

Mixins output separate rules per selector. The source stays single, the compiled CSS is per component.

Mixins that need state selectors (hover, pressed, checked, disabled) take them as parameters or use `@content`, because the selectors differ: `:has(> label > input:checked)` in `DBCustomSelect`, `:checked` on native `option`.

The `%db-neutral-variables` placeholder has the same `@extend` problem. We need a mixin version of it or set the neutral variables outside of `@supports`. To be decided during implementation.

## `DBSelect` in supporting browsers

Sketch, not final code:

```scss
@supports (appearance: base-select) {
	.db-select select:not([multiple], [size]:not([size="1"])) {
		&,
		&::picker(select) {
			appearance: base-select;
		}

		// We keep our own chevron from %select-icon
		&::picker-icon {
			display: none;
		}

		&::picker(select) {
			@include select-components.select-picker-surface;
			@include select-components.select-picker-list;

			position-area: block-end span-inline-end;
			position-try-fallbacks: flip-block;
			min-inline-size: anchor-size(self-inline);
			margin-block: variables.$db-spacing-fixed-xs;
		}

		option {
			@include select-components.select-picker-option(
				$checked: ":checked",
				$disabled: ":disabled"
			);
		}

		// Replaced by the trailing check icon from the option mixin
		option::checkmark {
			display: none;
		}
	}
}
```

### Picker icon and open state

`%select-icon` renders the chevron on the wrapper. Rotating it on open needs a selector on the wrapper, for example `.db-select:has(select:open)`. `DBCustomSelect` already rotates its icon with `$dropdown-icon-transform`. We reuse the same transform.

### Selected option

`DBCustomSelect` uses `--db-icon-trailing: "check"` on the checked radio label. For native options we set the icon with `icons.set-icon("check", "after")` on `option:checked` and hide `::checkmark`. Using `::checkmark` with our icon font is an alternative, see open questions.

### Inherited tokens

The picker is rendered in the top layer, but it's still a pseudo-element of `select`. Custom properties are inherited from `select`, so the adaptive color tokens work.

## Refactoring of `DBCustomSelect`

1. Move surface, list and option declarations that don't depend on custom-select markup into the new mixins.
2. Keep markup-specific selectors in the component files, for example `> label > input`, the web component workarounds, the search input and the action button area.
3. Keep JavaScript positioning and the tablet dialog layout in `DBCustomSelect`. This spec doesn't change them.
4. Visual snapshots of `DBCustomSelect` must not change. If they do, the refactoring has changed behavior.

## Testing

- Playwright visual snapshots for `DBSelect` with an open picker in Chromium and WebKit. Firefox snapshots must not change.
- Existing `DBCustomSelect` snapshots as regression check.
- Screen reader tests in `showcases/screen-reader/tests/select.spec.ts` for VoiceOver and NVDA.
- Manual check: density, floating label, leading icon, placeholder, `showEmptyOption`, `optgroup`, disabled options, dark mode, forced colors, long option texts, many options (scrolling).

## Open questions

1. **Mobile:** How do Chrome on Android and Safari on iOS render `base-select`? If they show the in-page picker, do we want that, or do we limit the enhancement to `(hover: hover) and (pointer: fine)` and keep the native mobile picker?
2. **Check icon:** `option:checked::after` with our icon font, or `::checkmark` with `content`? Depends on how both browsers lay out `::checkmark`.
3. **Optgroup label:** Chrome and Safari may render the label differently (`legend` child vs. `label` attribute). This needs a check in both browsers.
4. **Picker width:** Should `DBSelect` get the same `fixed`/`auto`/`full` width options as `DBCustomSelect`? Proposal: no, `min-inline-size: anchor-size(self-inline)` only. A width option would be a new API.
5. **Browser differences:** Do Chrome and Safari 27 support `position-area`, `position-try-fallbacks` and `anchor-size()` on `::picker(select)` in the same way?
6. **Bump type:** `minor` (visible new behavior) or `patch` (fix for #3654)?
