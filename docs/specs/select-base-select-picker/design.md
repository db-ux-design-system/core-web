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
├── @mixin select-picker-group-label (new) font size, color
└── @mixin select-picker-checkmark   (new) check icon on ::checkmark (DBSelect only)

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
// Touch devices keep the native OS picker, see "Mobile devices"
@supports (appearance: base-select) {
	@media (hover: hover) and (pointer: fine) {
		.db-select select:not([multiple], [size]:not([size="1"])) {
			&,
			&::picker(select) {
				appearance: base-select;
			}

			// We keep our own chevron from %select-icon
			&::picker-icon {
				display: none;
			}

			// Position, min width and flip fallbacks come from the
			// UA defaults, see "Anchor positioning"
			&::picker(select) {
				@include select-components.select-picker-surface;
				@include select-components.select-picker-list;

				margin-block: variables.$db-spacing-fixed-xs;
			}

			option {
				@include select-components.select-picker-option(
					$checked: ":checked",
					$disabled: ":disabled"
				);
			}

			// Trailing check icon like in DBCustomSelect
			option::checkmark {
				@include select-components.select-picker-checkmark;

				order: 1;
				margin-inline-start: auto;
			}
		}
	}
}
```

### Picker icon and open state

`%select-icon` renders the chevron on the wrapper. Rotating it on open needs a selector on the wrapper, for example `.db-select:has(select:open)`. `DBCustomSelect` already rotates its icon with `$dropdown-icon-transform`. We reuse the same transform.

### Selected option

We use `::checkmark` and fill it with our `check` icon:

- Chrome (133+) and Safari (27+) support `::checkmark`. Both render a default checkmark, so we have to override it anyway.
- The option is a flex container. `order: 1` and `margin-inline-start: auto` move the checkmark to the inline end, like the trailing check icon in `DBCustomSelect`.
- `::before` and `::after` stay free, for example for icons inside options.
- `::checkmark` isn't part of the accessibility tree. That's fine, because the selected state is announced natively.

`icons.set-icon` only targets `::before` or `::after`. We need a small mixin (`select-picker-checkmark`) that sets the icon font and `content` directly on `::checkmark`.

### Inherited tokens

The picker is rendered in the top layer, but it's still a pseudo-element of `select`. Custom properties are inherited from `select`, so the adaptive color tokens work.

## Browser behavior

Based on documentation and release notes, not yet verified on devices.

### Mobile devices

- With `base-select`, the browser doesn't open the OS picker anymore. The in-page picker is used on mobile as well ([Chrome blog](https://developer.chrome.com/blog/a-customizable-select)).
- Chrome on Android 135+ and Safari on iOS 27+ support `base-select` ([MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)).
- For Safari on iOS we found no explicit statement that the iOS picker wheel is replaced. It's very likely, because the spec defines it that way. This needs a check on a device.

Proposal: limit the enhancement to `(hover: hover) and (pointer: fine)`. Touch devices keep the native OS picker. #3654 only affects macOS, and `DBCustomSelect` needs a separate dialog layout on small screens for good usability. We don't want to rebuild that for `DBSelect`.

### Anchor positioning

Chrome and Safari 27 anchor the picker to the `select` implicitly and use the same UA defaults ([MDN `::picker()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::picker)):

- `position-area: block-end span-inline-end`: below the field, aligned with its inline start edge.
- `min-inline-size: anchor-size(self-inline)`: at least as wide as the field.
- `position-try-fallbacks`: above, or aligned with the inline end, when there isn't enough space.

These defaults already cover requirement 1. We only set the gap to the field. Anchor positioning has been supported since Chrome 125 and Safari 26. Safari 27 fixed several picker positioning bugs and changed the default of `position-anchor` from `auto` to `normal` ([WebKit](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/)). The implicit anchor isn't affected by that.

### UA default styles

Safari 27 ships different default styles than Chrome on purpose: drop shadow, 4px radius, its own chevron and checkmark, and its own `optgroup` styling. A shared baseline is being discussed in the CSS Working Group ([WebKit](https://webkit.org/blog/18325/webkit-features-for-safari-27-0/)).

Consequence: we set every visible property of the picker, the options and the group labels explicitly. We don't rely on UA defaults for anything we want to look the same.

### Group labels

- In a customizable select, `optgroup` may contain a `<legend>`. It replaces the `label` attribute and can be styled like any element ([MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)).
- `DBSelect` renders `<optgroup label="…">` only. The label generated from the attribute can't be targeted reliably, and Chrome and Safari style it differently.
- For consistent group labels we'd have to render a `<legend>` in addition to the `label` attribute. Browsers without support would drop the `<legend>` and keep using the attribute. This is not verified yet.

Rendering a `<legend>` is a markup change and conflicts with requirement 5.3. See open questions.

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

1. **Mobile scope:** Do we agree to keep the native OS picker on touch devices (`(hover: hover) and (pointer: fine)`)? See "Mobile devices".
2. **Group labels:** Do we render a `<legend>` inside `optgroup` for consistent styling? That's a markup change in all frameworks and needs an exception from requirement 5.3. Without it, group labels may look different in Chrome and Safari.
3. **Picker width:** Should `DBSelect` get the same `fixed`/`auto`/`full` width options as `DBCustomSelect`? Proposal: no, the UA default `min-inline-size: anchor-size(self-inline)` only. A width option would be a new API.
4. **Bump type:** `minor` (visible new behavior) or `patch` (fix for #3654)?

### Resolved

- **Check icon:** `::checkmark` with our icon font, see "Selected option".
- **Positioning in Chrome and Safari:** both use the same implicit anchor and UA defaults, see "Anchor positioning".

### To verify on devices

- Safari on iOS 27 with `base-select`: is the OS picker wheel replaced?
- `<legend>` in `optgroup`: is it dropped cleanly in Firefox, with the `label` attribute still shown?
