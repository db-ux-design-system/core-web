# DB UI to DB UX Design System v3 Component Migration Guide

> **Note**
> This document provides migration guidance for DB UI components that don't have direct equivalents in DB UX Design System.

## Overview

The DB UX Design System v3 is based on a completely new approach to component architecture, focusing on atomic design principles, accessibility and modern web standards. Some DB UI components have been redesigned or consolidated, with more planned for future releases.

## Components with Direct Equivalents

### accordion

New Component (new component)

### accordion-item

#### class

| Before          |    Status     | After               | Description                                                                                                                      |
| --------------- | :-----------: | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cmp-accordion` | [replacement] | `db-accordion-item` | The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component) |

#### props

| Before     |    Status     | After      | Description                                                 |
| ---------- | :-----------: | ---------- | ----------------------------------------------------------- |
| `summary`  | [replacement] | `headline` | The title/summary of the details element.                   |
| `emphasis` |   [removed]   | [removed]  | There is no emphasis anymore.                               |
| `size`     |   [removed]   | [removed]  | Controlled by the density.                                  |
|            |     [new]     | `disabled` | Disable the component.                                      |
|            |     [new]     | `content`  | Pass in a simple string as fallback to normal children/slot |

### badge

New Component (new component)

### brand

#### class

| Before      |    Status     | After      | Description |
| ----------- | :-----------: | ---------- | ----------- |
| `cmp-brand` | [replacement] | `db-brand` |             |

#### properties

> **Note**
> We removed all old properties, because brand hasn't a wrapping anchor tag (`<a>`) anymore.
> If you want to use a link around `db-brand`, do it by yourself.

| Before           |  Status   |   After   | Description                                                                                           |
| ---------------- | :-------: | :-------: | ----------------------------------------------------------------------------------------------------- |
| `siteNameLink`   | [removed] | [removed] | see Note                                                                                              |
| `alt`            | [removed] | [removed] | see Note                                                                                              |
| `anchorRef`      | [removed] | [removed] | see Note                                                                                              |
| `anchorTitle`    | [removed] | [removed] | see Note                                                                                              |
| `anchorRelation` | [removed] | [removed] | see Note                                                                                              |
| `src`            | [removed] | [removed] | see Note                                                                                              |
| `hideLogo`       |   [new]   | [removed] | If you want a custom image, you can hide the default one and pass anything into the `children`/`slot` |

### button

#### class

| Before       |    Status     | After       | Description |
| ------------ | :-----------: | ----------- | ----------- |
| `elm-button` | [replacement] | `db-button` |             |

#### sizes

| Before    |  Status   |   After   | Description                                                                                                                                                                                     |
| --------- | :-------: | :-------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `large`   | [removed] | [removed] | it became obsolete mainly due to our [density](<https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB> UX-design-system-v3/principles/densities) introduction |
| `regular` | [removed] | [removed] | there is a default (`medium`) now                                                                                                                                                               |

#### variants

| Before              |    Status     | After      | Description                                                  |
| ------------------- | :-----------: | ---------- | ------------------------------------------------------------ |
| `primary`           |   [removed]   | [removed]  | not valid anymore, use `outlined` buttons for those purposes |
| `brand-primary`     | [replacement] | `primary`  |                                                              |
| `secondary-outline` | [replacement] | `outlined` |                                                              |
| `secondary-solid`   | [replacement] | `solid`    |                                                              |
| `tertiary-plain`    | [replacement] | `text`     |                                                              |

#### icons

| Before         |    Status     | After     | Description                                                       |
| -------------- | :-----------: | --------- | ----------------------------------------------------------------- |
| `iconTrailing` |   [removed]   | [removed] | not valid anymore, for buttons only icons before text are allowed |
| `iconOnly`     | [replacement] | `noText`  |                                                                   |

### card

#### class

| Before     |    Status     | After     | Description |
| ---------- | :-----------: | --------- | ----------- |
| `cmp-card` | [replacement] | `db-card` |             |

#### variant

| Before    |    Status     |   After   | Description                                                                                                                    |
| --------- | :-----------: | :-------: | ------------------------------------------------------------------------------------------------------------------------------ |
| `variant` | [replacement] | `variant` | There is no default `header`/`content` anymore. Now you can change the card with `variant="interactive"` to act like a button. |
| `header`  |   [removed]   | [removed] | Add your own content via children/slot.                                                                                        |
| `content` |   [removed]   | [removed] | Add your own content via children/slot.                                                                                        |

#### image

| Before                   |    Status     | After       | Description |
| ------------------------ | :-----------: | ----------- | ----------- |
| `alt`                    | [replacement] | `imgAlt`    |             |
| `image`                  | [replacement] | `imgSrc`    |             |
|                          |     [new]     | `imgWidth`  |             |
|                          |     [new]     | `imgHeight` |             |
| `illustration`           |   [removed]   | [removed]   |             |
| `uiCoreIllustrationPath` |   [removed]   | [removed]   |             |

### checkbox

#### class

| Before         |    Status     | After         | Description |
| -------------- | :-----------: | ------------- | ----------- |
| `elm-checkbox` | [replacement] | `db-checkbox` |             |

#### id

| Before     |    Status     | After              | Description |
| ---------- | :-----------: | ------------------ | ----------- |
| `input_id` | [replacement] | `propOverrides.id` |             |

### divider

New Component (new component)

### drawer

New Component (new component)

### header

#### class

| Before       |    Status     | After       | Description |
| ------------ | :-----------: | ----------- | ----------- |
| `rea-header` | [replacement] | `db-header` |             |

#### mobile

| Before   |    Status     | After         | Description                        |
| -------- | :-----------: | ------------- | ---------------------------------- |
| `mobile` | [replacement] | `forceMobile` | forces the burger menu for desktop |

### icon

#### class

| Before |    Status     | After     | Description |
| ------ | :-----------: | --------- | ----------- |
|        | [replacement] | `db-icon` |             |

#### variant

| Before    |    Status     | After     | Description                                                                                                             |
| --------- | :-----------: | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `variant` | [replacement] | [removed] | icon variants are controlled by `font-family:var(--db-icon-font-family)` and `font-weight: var(--db-icon-font-weight);` |

### infotext

New Component (new component)

### input

#### class

| Before      |    Status     | After      | Description |
| ----------- | :-----------: | ---------- | ----------- |
| `elm-input` | [replacement] | `db-input` |             |

#### variants

| Before            |  Status   | After           | Description                                                                                          |
| ----------------- | :-------: | --------------- | ---------------------------------------------------------------------------------------------------- |
| `semitransparent` | [removed] | [removed]       | old variants are removed a semi-transparent look is the default, new variants are changing the color |
| `white`           | [removed] | [removed]       |                                                                                                      |
| `solid`           | [removed] | [removed]       |                                                                                                      |
| `outline`         | [removed] | [removed]       |                                                                                                      |
|                   |   [new]   | `adaptive`      |                                                                                                      |
|                   |   [new]   | `neutral`       |                                                                                                      |
|                   |   [new]   | `critical`      |                                                                                                      |
|                   |   [new]   | `informational` |                                                                                                      |
|                   |   [new]   | `warning`       |                                                                                                      |
|                   |   [new]   | `successful`    |                                                                                                      |

### link

#### class

| Before     |    Status     | After     | Description |
| ---------- | :-----------: | --------- | ----------- |
| `elm-link` | [replacement] | `db-link` |             |

#### icons

| Before        |  Status   | After     | Description                                                             |
| ------------- | :-------: | --------- | ----------------------------------------------------------------------- |
| `icon`        | [removed] | [removed] | not valid anymore use `content` to show internal or external arrow icon |
| `icononly`    | [removed] | [removed] |                                                                         |
| `iconVariant` | [removed] | [removed] |                                                                         |

### navigation

#### class

| Before               |    Status     | After           | Description |
| -------------------- | :-----------: | --------------- | ----------- |
| `cmp-mainnavigation` | [replacement] | `db-navigation` |             |

#### children

| Before     |  Status   | After     | Description                                                                   |
| ---------- | :-------: | --------- | ----------------------------------------------------------------------------- |
| `data`     | [removed] | [removed] | pass data via `children` / `slot`, moved a lot of the features to `db-header` |
| `siteName` | [removed] | [removed] |                                                                               |

### navigation-item

New Component (new component)

### notification

#### class

| Before             |    Status     | After             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | :-----------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `elm-notification` | [replacement] | `db-notification` | The old notification component has been split into 2 different components [Notification](<https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB> UX-design-system-v3/components/feedback/notification) and [Notification](<https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/DB> UX-design-system-v3/components/feedback/notification) for more information (when and how to use it). |

#### variant -> type

| Before         |    Status     | After          | Description                                             |
| -------------- | :-----------: | -------------- | ------------------------------------------------------- |
| `notification` | [replacement] | `notification` | Default notification with different look                |
| `status`       |   [removed]   | [removed]      | Status can be changed by `variants`                     |
|                |     [new]     | `inline`       | New styling with shadow and rounded corners (like card) |

#### type -> variants

| Before        |    Status     | After           | Description                                              |
| ------------- | :-----------: | --------------- | -------------------------------------------------------- |
|               |     [new]     | `adaptive`      | Default: change colors based on background               |
| `error`       | [replacement] | `critical`      | 'Red' colored notification to show error messages        |
| `informative` | [replacement] | `informational` | 'Blue' colored notification to show information messages |
| `warning`     | [replacement] | `warning`       | 'Yellow' colored notification to show warning messages   |
| `success`     | [replacement] | `successful`    | 'Green' colored notification to show success messages    |

### page

#### class

| Before     |    Status     | After     | Description |
| ---------- | :-----------: | --------- | ----------- |
| `rea-page` | [replacement] | `db-page` |             |

### popover

New Component (new component)

### radio

#### class

| Before      |    Status     | After      | Description |
| ----------- | :-----------: | ---------- | ----------- |
| `elm-radio` | [replacement] | `db-radio` |             |

#### id

| Before     |    Status     | After              | Description |
| ---------- | :-----------: | ------------------ | ----------- |
| `input_id` | [replacement] | `propOverrides.id` |             |

### section

New Component (new component)

### select

#### class

| Before       |    Status     | After       | Description |
| ------------ | :-----------: | ----------- | ----------- |
| `elm-select` | [replacement] | `db-select` |             |

#### select

| Before     |  Status   | After | Description                                                                      |
| ---------- | :-------: | ----- | -------------------------------------------------------------------------------- |
| `multiple` | [removed] |       | We removed this attribute for now, there are no valid designs for this use case. |
| `size`     | [removed] |       | We removed this attribute for now, there are no valid designs for this use case. |

### stack

New Component (new component)

### switch

#### class

| Before       |    Status     | After       | Description |
| ------------ | :-----------: | ----------- | ----------- |
| `elm-toggle` | [replacement] | `db-switch` |             |

#### id

| Before   |    Status     | After | Description |
| -------- | :-----------: | :---: | ----------- |
| `htmlid` | [replacement] | `id`  |             |

### tab-item

#### class

| Before       |    Status     | After         | Description |
| ------------ | :-----------: | ------------- | ----------- |
| `cmp-db-tab` | [replacement] | `db-tab-item` |             |

#### name

| Before |  Status   |   After   | Description                                                                                         |
| ------ | :-------: | :-------: | --------------------------------------------------------------------------------------------------- |
| `name` | [removed] | [removed] | It should be used with `db-tabs` which will add a the `name` from `db-tabs` to all tabs all at one. |

### tab-list

New Component (new component)

### tab-panel

New Component (new component)

### tabs

#### class

| Before        |    Status     | After     | Description |
| ------------- | :-----------: | --------- | ----------- |
| `cmp-tab-bar` | [replacement] | `db-tabs` |             |

### tag

#### tag vs. chip

We simplified the components by reducing the amount from tag + chip to only tag.

You can use different types of tags by adding another component into it:

```html
<db-tag><db-button>Tag as Button</db-button></db-tag>
<db-tag><db-link>Tag as Link</db-link></db-tag>
<db-tag><db-checkbox>Tag as Checkbox</db-checkbox></db-tag>
<db-tag><db-radio>Tag as Radio</db-radio></db-tag>
<db-tag>Static Tag</db-tag>
```

#### class

| Before    |    Status     | After    | Description |
| --------- | :-----------: | -------- | ----------- |
| `elm-tag` | [replacement] | `db-tag` |             |

#### sizes

| Before  |  Status   |   After   | Description                                                                                                                             |
| ------- | :-------: | :-------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| `small` | [removed] | [removed] | We removed small tags because of density. But you can use `type` property with value `strong` to emphasize a tag for a differentiation. |

#### variants

| Before        |    Status     | After           | Description                                      |
| ------------- | :-----------: | --------------- | ------------------------------------------------ |
| `poi-*`       |   [removed]   | [removed]       | We removed all point of interest colors for now. |
| `track`       |   [removed]   | [removed]       | We removed track for now.                        |
| `error`       | [replacement] | `critical`      |                                                  |
| `informative` | [replacement] | `informational` |                                                  |
| `success`     | [replacement] | `successful`    |                                                  |

#### icons

| Before      |  Status   | After     | Description                                                    |
| ----------- | :-------: | --------- | -------------------------------------------------------------- |
| `iconAfter` | [removed] | [removed] | not valid anymore, for tags only icons before text are allowed |

### textarea

#### class

| Before         |    Status     | After         | Description |
| -------------- | :-----------: | ------------- | ----------- |
| `elm-textarea` | [replacement] | `db-textarea` |             |

#### variants

| Before            |  Status   | After           | Description |
| ----------------- | :-------: | --------------- | ----------- |
| `semitransparent` | [removed] |                 |             |
| `white`           | [removed] |                 |             |
| `solid`           | [removed] |                 |             |
| `outline`         | [removed] |                 |             |
|                   |   [new]   | `adaptive`      |             |
|                   |   [new]   | `critical`      |             |
|                   |   [new]   | `informational` |             |
|                   |   [new]   | `warning`       |             |
|                   |   [new]   | `successful`    |             |

#### other

| Before        |    Status     | After     | Description |
| ------------- | :-----------: | --------- | ----------- |
| `description` | [replacement] | `message` |             |

### tooltip

New Component (new component)

---

## Components without Direct Equivalents

| Component                   |    Status     | Recommendation                                               | Description                                                                                                                                                                       |
| --------------------------- | :-----------: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rea-main`                  |   [removed]   | Use `db-page` with custom layout                             | The `db-page` component provides basic page structure. It already includes `<main>`                                                                                               |
| `rea-grid`                  |   [removed]   | Use CSS Grid or `db-stack` component                         | Replace with modern CSS Grid for complex layouts, or use `db-stack` for simple spacing. See [CSS Grid examples](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) |
| `rea-footer`                |   [planned]   | Under research - build custom for now ,Planned for Q4/2025   | Footer component is being researched. Use semantic `<footer>` element with `db-link` components and custom styling. [Research document](../research/footer.md)                    |
| `elm-headline`              | [replacement] | Use heading elements with `db-infotext`, Planned for Q4/2025 | Replace with semantic heading tags (`<h1>`, `<h2>`, etc.) styled with CSS. For subtitle functionality, combine with `db-infotext`                                                 |
| `elm-headline` (with pulse) |   [removed]   | Use heading + CSS animation, Planned for Q4/2025             | Implement pulse animation using CSS animations or transitions on heading elements. Pulse animations should be used sparingly for accessibility                                    |
| `elm-loadingindicator`      |   [planned]   | Planned for Q4/2025                                          | Loading indicator component is planned. Use CSS spinners or skeleton screens temporarily. Consider accessibility with `aria-live` regions                                         |
| `elm-progress`              |   [planned]   | Planned for Q4/2025                                          | Progress component in development. Use HTML5 `<progress>` element with custom styling or build custom solution                                                                    |
| `elm-chip`                  | [replacement] | Use `db-tag` with interactive elements                       | Replace with `db-tag` containing `db-button`, `db-checkbox`, or `db-radio` for interactive functionality. See [tag migration guide](#tag)                                         |
| `cmp-breadcrumb`            |   [planned]   | Planned for Q4/2025                                          | Breadcrumb component planned for future release. Use `db-link` components with `aria-label="Breadcrumb"` navigation wrapper                                                       |
| `cmp-pagination`            |   [planned]   | Planned for Q4/2025                                          | Pagination component in development. Build custom solution with `db-button` components and proper ARIA labels                                                                     |
| `cmp-table`                 |   [planned]   | Under active research                                        | Table component being researched with comprehensive roadmap. Use semantic HTML tables with custom styling. [Research document](../research/table.md)                              |
| `cmp-sidenavi`              | [replacement] | Use `db-navigation` in `db-drawer`                           | Combine `db-navigation` component within `db-drawer` for side navigation functionality. Configure drawer with appropriate width and positioning                                   |
| `cmp-dialog`                | [replacement] | Use `db-drawer` or custom modal, Planned for Q4/2025         | Use `db-drawer` for side panels, or build custom modal dialog with proper focus management and ARIA attributes                                                                    |

## Legend

|    Symbol     | Meaning                                                                     |
| :-----------: | --------------------------------------------------------------------------- |
| [replacement] | **Available replacement** - Use suggested alternative component(s)          |
|   [planned]   | **Planned for future** - Component in roadmap, use temporary solution       |
|   [removed]   | **Not planned** - Use alternative approach or build custom solution         |
|     [new]     | **New in DB UX Design System v3** - Enhanced or new functionality available |

## Migration Strategies

### 1. Layout Components Migration

#### From `rea-main` to `db-page` + Custom Layout

```html
<!-- DB UI -->
<div class="rea-main">
	<main>Content</main>
</div>

<!-- DB UX-DSv3 -->
<db-page> Content </db-page>
```

#### From `rea-grid` to CSS Grid

```css
/* DB UI grid replacement */
.custom-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: var(--db-spacing-fixed-md);
}
```

### 2. Interactive Elements Migration

#### From `elm-chip` to `db-tag`

```html
<!-- DB UI -->
<div class="elm-chip" data-variant="primary">Chip Text</div>

<!-- DB UX-DSv3 -->
<db-tag>
	<db-button variant="ghost">Chip Text</db-button>
</db-tag>
```

#### From `elm-headline` to Semantic Headings

```html
<!-- DB UI -->
<div class="elm-headline" data-size="h1">Main Title</div>

<!-- DB UX-DSv3 -->
<h1 class="custom-headline">Main Title</h1>
<!-- Optional subtitle -->
<db-infotext>Subtitle text</db-infotext>
```

### 3. Navigation Migration

#### From `cmp-sidenavi` to `db-navigation` + `db-drawer`

```html
<!-- DB UX-DSv3 -->
<db-drawer>
	<db-navigation>
		<db-navigation-item>
			<db-link href="/page1">Navigation Item 1</db-link>
		</db-navigation-item>
		<db-navigation-item>
			<db-link href="/page2">Navigation Item 2</db-link>
		</db-navigation-item>
	</db-navigation>
</db-drawer>
```

## Accessibility Considerations

When building custom solutions for missing components:

1. **Use semantic HTML** - Always start with appropriate HTML elements
2. **ARIA attributes** - Add proper ARIA labels, roles, and states
3. **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
4. **Focus management** - Handle focus properly in dynamic content
5. **Screen reader support** - Test with screen readers and provide meaningful announcements

## Temporary Solutions & Best Practices

### Loading States

```html
<!-- Temporary loading indicator -->
<div class="custom-loading" role="status">
	<div class="spinner"></div>
	<span class="visually-hidden">Loading...</span>
</div>
```

### Progress Indicators

```html
<!-- HTML5 progress element -->
<progress value="70" max="100" aria-label="Upload progress: 70%">70%</progress>
```

### Breadcrumb Navigation

```html
<!-- Semantic breadcrumb structure -->
<nav aria-label="Breadcrumb">
	<ol class="breadcrumb-list">
		<li><db-link href="/">Home</db-link></li>
		<li><db-link href="/category">Category</db-link></li>
		<li aria-current="page">Current Page</li>
	</ol>
</nav>
```

## Getting Help

- **Documentation**: [Component documentation](<https://www.npmjs.com/package/@DB> UX/core-components)
- **Migration CLI**: Use `npx @DB UX/core-migration --type=v007_v100 --src=./src` for automated migration
- **Research Updates**: Check [research documents](../research/) for component development status
- **Community**: Join discussions about missing components in GitHub issues

## Future Roadmap

Check the [project board](<https://github.com/orgs/DB> UX-design-system/projects/4/views/1) for current status and release planning.

---

_This migration guide is maintained by the DB UX Design System team. For specific component requests or migration assistance, please open an [issue on GitHub](<https://github.com/DB> UX-design-system/core-web/issues)._
