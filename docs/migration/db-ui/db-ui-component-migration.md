# DB-UI to DB-UX Design System v3 Component Migration Guide

> **Note**
> This document provides migration guidance for DB-UI components that don't have direct equivalents in DB UX Design System.

## Overview

The DB UX Design System v3 is based on a completely new approach to component architecture, focusing on atomic design principles, accessibility and modern web standards. Some DB UI components have been redesigned or consolidated, with more planned for future releases.

## Components with Direct Equivalents

### accordion

New Component 🥳

### accordion-item

#### class

| Before          | Status | After               | Description                                                                                                                      |
| --------------- | :----: | ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cmp-accordion` |   🔁   | `db-accordion-item` | The old accordion was just 1 item, we split it to combine multiple accordion-items into 1 accordion (which is another component) |

#### props

| Before     | Status | After      | Description                                                 |
| ---------- | :----: | ---------- | ----------------------------------------------------------- |
| `summary`  |   🔁   | `headline` | The title/summary of the details element.                   |
| `emphasis` |   ❌   | ❌         | There is no emphasis anymore.                               |
| `size`     |   ❌   | ❌         | Controlled by the density.                                  |
|            |   🆕   | `disabled` | Disable the component.                                      |
|            |   🆕   | `content`  | Pass in a simple string as fallback to normal children/slot |

### badge

New Component 🥳

### brand

#### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `cmp-brand` |   🔁   | `db-brand` |             |

#### properties

> **Note**
> We removed all old properties, because brand hasn't a wrapping anchor tag (`<a>`) anymore.
> If you want to use a link around `db-brand`, do it by yourself.

| Before           | Status | After | Description                                                                                           |
| ---------------- | :----: | :---: | ----------------------------------------------------------------------------------------------------- |
| `siteNameLink`   |   ❌   |  ❌   | see Note                                                                                              |
| `alt`            |   ❌   |  ❌   | see Note                                                                                              |
| `anchorRef`      |   ❌   |  ❌   | see Note                                                                                              |
| `anchorTitle`    |   ❌   |  ❌   | see Note                                                                                              |
| `anchorRelation` |   ❌   |  ❌   | see Note                                                                                              |
| `src`            |   ❌   |  ❌   | see Note                                                                                              |
| `hideLogo`       |   🆕   |  ❌   | If you want a custom image, you can hide the default one and pass anything into the `children`/`slot` |

### button

#### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `elm-button` |   🔁   | `db-button` |             |

#### sizes

| Before    | Status | After | Description                                                                                                                                                                                   |
| --------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `large`   |   ❌   |  ❌   | it became obsolete mainly due to our [density](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/principles/densities) introduction |
| `regular` |   ❌   |  ❌   | there is a default (`medium`) now                                                                                                                                                             |

#### variants

| Before              | Status | After      | Description                                                  |
| ------------------- | :----: | ---------- | ------------------------------------------------------------ |
| `primary`           |   ❌   | ❌         | not valid anymore, use `outlined` buttons for those purposes |
| `brand-primary`     |   🔁   | `primary`  |                                                              |
| `secondary-outline` |   🔁   | `outlined` |                                                              |
| `secondary-solid`   |   🔁   | `solid`    |                                                              |
| `tertiary-plain`    |   🔁   | `text`     |                                                              |

#### icons

| Before         | Status | After    | Description                                                       |
| -------------- | :----: | -------- | ----------------------------------------------------------------- |
| `iconTrailing` |   ❌   | ❌       | not valid anymore, for buttons only icons before text are allowed |
| `iconOnly`     |   🔁   | `noText` |                                                                   |

### card

#### class

| Before     | Status | After     | Description |
| ---------- | :----: | --------- | ----------- |
| `cmp-card` |   🔁   | `db-card` |             |

#### variant

| Before    | Status |   After   | Description                                                                                                                    |
| --------- | :----: | :-------: | ------------------------------------------------------------------------------------------------------------------------------ |
| `variant` |   🔁   | `variant` | There is no default `header`/`content` anymore. Now you can change the card with `variant="interactive"` to act like a button. |
| `header`  |   ❌   |    ❌     | Add your own content via children/slot.                                                                                        |
| `content` |   ❌   |    ❌     | Add your own content via children/slot.                                                                                        |

#### image

| Before                   | Status | After       | Description |
| ------------------------ | :----: | ----------- | ----------- |
| `alt`                    |   🔁   | `imgAlt`    |             |
| `image`                  |   🔁   | `imgSrc`    |             |
|                          |   🆕   | `imgWidth`  |             |
|                          |   🆕   | `imgHeight` |             |
| `illustration`           |   ❌   | ❌          |             |
| `uiCoreIllustrationPath` |   ❌   | ❌          |             |

### checkbox

#### class

| Before         | Status | After         | Description |
| -------------- | :----: | ------------- | ----------- |
| `elm-checkbox` |   🔁   | `db-checkbox` |             |

#### id

| Before     | Status | After | Description |
| ---------- | :----: | ----- | ----------- |
| `input_id` |   🔁   | `id`  |             |

### divider

New Component 🥳

### drawer

New Component 🥳

### header

#### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `rea-header` |   🔁   | `db-header` |             |

#### mobile

| Before   | Status | After         | Description                        |
| -------- | :----: | ------------- | ---------------------------------- |
| `mobile` |   🔁   | `forceMobile` | forces the burger menu for desktop |

### icon

#### class

| Before | Status | After     | Description |
| ------ | :----: | --------- | ----------- |
|        |   🔁   | `db-icon` |             |

#### variant

| Before    | Status | After | Description                                                                                                             |
| --------- | :----: | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| `variant` |   🔁   | ❌    | icon variants are controlled by `font-family:var(--db-icon-font-family)` and `font-weight: var(--db-icon-font-weight);` |

### infotext

New Component 🥳

### input

#### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `elm-input` |   🔁   | `db-input` |             |

#### variants

| Before            | Status | After           | Description                                                                                          |
| ----------------- | :----: | --------------- | ---------------------------------------------------------------------------------------------------- |
| `semitransparent` |   ❌   | ❌              | old variants are removed a semi-transparent look is the default, new variants are changing the color |
| `white`           |   ❌   | ❌              |                                                                                                      |
| `solid`           |   ❌   | ❌              |                                                                                                      |
| `outline`         |   ❌   | ❌              |                                                                                                      |
|                   |   🆕   | `adaptive`      |                                                                                                      |
|                   |   🆕   | `neutral`       |                                                                                                      |
|                   |   🆕   | `critical`      |                                                                                                      |
|                   |   🆕   | `informational` |                                                                                                      |
|                   |   🆕   | `warning`       |                                                                                                      |
|                   |   🆕   | `successful`    |                                                                                                      |

### link

#### class

| Before     | Status | After     | Description |
| ---------- | :----: | --------- | ----------- |
| `elm-link` |   🔁   | `db-link` |             |

#### icons

| Before        | Status | After | Description                                                             |
| ------------- | :----: | ----- | ----------------------------------------------------------------------- |
| `icon`        |   ❌   | ❌    | not valid anymore use `content` to show internal or external arrow icon |
| `icononly`    |   ❌   | ❌    |                                                                         |
| `iconVariant` |   ❌   | ❌    |                                                                         |

### navigation

#### class

| Before               | Status | After           | Description |
| -------------------- | :----: | --------------- | ----------- |
| `cmp-mainnavigation` |   🔁   | `db-navigation` |             |

#### children

| Before     | Status | After | Description                                                                   |
| ---------- | :----: | ----- | ----------------------------------------------------------------------------- |
| `data`     |   ❌   | ❌    | pass data via `children` / `slot`, moved a lot of the features to `db-header` |
| `siteName` |   ❌   | ❌    |                                                                               |

### navigation-item

New Component 🥳

### notification

#### class

| Before             | Status | After             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | :----: | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `elm-notification` |   🔁   | `db-notification` | The old notification component has been split into 2 different components [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) and [Notification](https://marketingportal.extranet.deutschebahn.com/marketingportal/Design-Anwendungen/db-ux-design-system-v3/components/feedback/notification) for more information (when and how to use it). |

#### variant ➡ type

| Before         | Status | After          | Description                                             |
| -------------- | :----: | -------------- | ------------------------------------------------------- |
| `notification` |   🔁   | `notification` | Default notification with different look                |
| `status`       |   ❌   | ❌             | Status can be changed by `variants`                     |
|                |   🆕   | `inline`       | New styling with shadow and rounded corners (like card) |

#### type ➡ variants

| Before        | Status | After           | Description                                              |
| ------------- | :----: | --------------- | -------------------------------------------------------- |
|               |   🆕   | `adaptive`      | Default: change colors based on background               |
| `error`       |   🔁   | `critical`      | 'Red' colored notification to show error messages        |
| `informative` |   🔁   | `informational` | 'Blue' colored notification to show information messages |
| `warning`     |   🔁   | `warning`       | 'Yellow' colored notification to show warning messages   |
| `success`     |   🔁   | `successful`    | 'Green' colored notification to show success messages    |

### page

#### class

| Before     | Status | After     | Description |
| ---------- | :----: | --------- | ----------- |
| `rea-page` |   🔁   | `db-page` |             |

### popover

New Component 🥳

### radio

#### class

| Before      | Status | After      | Description |
| ----------- | :----: | ---------- | ----------- |
| `elm-radio` |   🔁   | `db-radio` |             |

#### id

| Before     | Status | After | Description |
| ---------- | :----: | ----- | ----------- |
| `input_id` |   🔁   | `id`  |             |

### section

New Component 🥳

### select

#### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `elm-select` |   🔁   | `db-select` |             |

#### select

| Before     | Status | After | Description                                                                      |
| ---------- | :----: | ----- | -------------------------------------------------------------------------------- |
| `multiple` |   ❌   |       | We removed this attribute for now, there are no valid designs for this use case. |
| `size`     |   ❌   |       | We removed this attribute for now, there are no valid designs for this use case. |

### stack

New Component 🥳

### switch

#### class

| Before       | Status | After       | Description |
| ------------ | :----: | ----------- | ----------- |
| `elm-toggle` |   🔁   | `db-switch` |             |

#### id

| Before   | Status | After | Description |
| -------- | :----: | :---: | ----------- |
| `htmlid` |   🔁   | `id`  |             |

### tab-item

#### class

| Before       | Status | After         | Description |
| ------------ | :----: | ------------- | ----------- |
| `cmp-db-tab` |   🔁   | `db-tab-item` |             |

#### name

| Before | Status | After | Description                                                                                         |
| ------ | :----: | :---: | --------------------------------------------------------------------------------------------------- |
| `name` |   ❌   |  ❌   | It should be used with `db-tabs` which will add a the `name` from `db-tabs` to all tabs all at one. |

### tab-list

New Component 🥳

### tab-panel

New Component 🥳

### tabs

#### class

| Before        | Status | After     | Description |
| ------------- | :----: | --------- | ----------- |
| `cmp-tab-bar` |   🔁   | `db-tabs` |             |

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

| Before    | Status | After    | Description |
| --------- | :----: | -------- | ----------- |
| `elm-tag` |   🔁   | `db-tag` |             |

#### sizes

| Before  | Status | After | Description                                                                                                                             |
| ------- | :----: | :---: | --------------------------------------------------------------------------------------------------------------------------------------- |
| `small` |   ❌   |  ❌   | We removed small tags because of density. But you can use `type` property with value `strong` to emphasize a tag for a differentiation. |

#### variants

| Before        | Status | After           | Description                                      |
| ------------- | :----: | --------------- | ------------------------------------------------ |
| `poi-*`       |   ❌   | ❌              | We removed all point of interest colors for now. |
| `track`       |   ❌   | ❌              | We removed track for now.                        |
| `error`       |   🔁   | `critical`      |                                                  |
| `informative` |   🔁   | `informational` |                                                  |
| `success`     |   🔁   | `successful`    |                                                  |

#### icons

| Before      | Status | After | Description                                                    |
| ----------- | :----: | ----- | -------------------------------------------------------------- |
| `iconAfter` |   ❌   | ❌    | not valid anymore, for tags only icons before text are allowed |

### textarea

#### class

| Before         | Status | After         | Description |
| -------------- | :----: | ------------- | ----------- |
| `elm-textarea` |   🔁   | `db-textarea` |             |

#### variants

| Before            | Status | After           | Description |
| ----------------- | :----: | --------------- | ----------- |
| `semitransparent` |   ❌   |                 |             |
| `white`           |   ❌   |                 |             |
| `solid`           |   ❌   |                 |             |
| `outline`         |   ❌   |                 |             |
|                   |   🆕   | `adaptive`      |             |
|                   |   🆕   | `critical`      |             |
|                   |   🆕   | `informational` |             |
|                   |   🆕   | `warning`       |             |
|                   |   🆕   | `successful`    |             |

#### other

| Before        | Status | After     | Description |
| ------------- | :----: | --------- | ----------- |
| `description` |   🔁   | `message` |             |

### tooltip

New Component 🥳

---

## Components without Direct Equivalents

| Component                   | Status | Recommendation                                               | Description                                                                                                                                                                       |
| --------------------------- | :----: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rea-main`                  |   ❌   | Use `db-page` with custom layout                             | The `db-page` component provides basic page structure. It already includes `<main>`                                                                                               |
| `rea-grid`                  |   ❌   | Use CSS Grid or `db-stack` component                         | Replace with modern CSS Grid for complex layouts, or use `db-stack` for simple spacing. See [CSS Grid examples](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) |
| `rea-footer`                |   🔄   | Under research - build custom for now ,Planned for Q4/2025   | Footer component is being researched. Use semantic `<footer>` element with `db-link` components and custom styling. [Research document](../research/footer.md)                    |
| `elm-headline`              |   🔁   | Use heading elements with `db-infotext`, Planned for Q4/2025 | Replace with semantic heading tags (`<h1>`, `<h2>`, etc.) styled with CSS. For subtitle functionality, combine with `db-infotext`                                                 |
| `elm-headline` (with pulse) |   ❌   | Use heading + CSS animation, Planned for Q4/2025             | Implement pulse animation using CSS animations or transitions on heading elements. Pulse animations should be used sparingly for accessibility                                    |
| `elm-loadingindicator`      |   🔄   | Planned for Q4/2025                                          | Loading indicator component is planned. Use CSS spinners or skeleton screens temporarily. Consider accessibility with `aria-live` regions                                         |
| `elm-progress`              |   🔄   | Planned for Q4/2025                                          | Progress component in development. Use HTML5 `<progress>` element with custom styling or build custom solution                                                                    |
| `elm-chip`                  |   🔁   | Use `db-tag` with interactive elements                       | Replace with `db-tag` containing `db-button`, `db-checkbox`, or `db-radio` for interactive functionality. See [tag migration guide](#tag)                                         |
| `cmp-breadcrumb`            |   🔄   | Planned for Q4/2025                                          | Breadcrumb component planned for future release. Use `db-link` components with `aria-label="Breadcrumb"` navigation wrapper                                                       |
| `cmp-pagination`            |   🔄   | Planned for Q4/2025                                          | Pagination component in development. Build custom solution with `db-button` components and proper ARIA labels                                                                     |
| `cmp-table`                 |   🔄   | Under active research                                        | Table component being researched with comprehensive roadmap. Use semantic HTML tables with custom styling. [Research document](../research/table.md)                              |
| `cmp-sidenavi`              |   🔁   | Use `db-navigation` in `db-drawer`                           | Combine `db-navigation` component within `db-drawer` for side navigation functionality. Configure drawer with appropriate width and positioning                                   |
| `cmp-dialog`                |   🔁   | Use `db-drawer` or custom modal, Planned for Q4/2025         | Use `db-drawer` for side panels, or build custom modal dialog with proper focus management and ARIA attributes                                                                    |

## Legend

| Symbol | Meaning                                                               |
| :----: | --------------------------------------------------------------------- |
|   🔁   | **Available replacement** - Use suggested alternative component(s)    |
|   🔄   | **Planned for future** - Component in roadmap, use temporary solution |
|   ❌   | **Not planned** - Use alternative approach or build custom solution   |
|   🆕   | **New in DB UX Design System v3** - Enhanced or new functionality available       |

## Migration Strategies

### 1. Layout Components Migration

#### From `rea-main` to `db-page` + Custom Layout

```html
<!-- DB-UI -->
<div class="rea-main">
	<main>Content</main>
</div>

<!-- DB-UX-DSv3 -->
<db-page> Content </db-page>
```

#### From `rea-grid` to CSS Grid

```css
/* DB-UI grid replacement */
.custom-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: var(--db-spacing-fixed-md);
}
```

### 2. Interactive Elements Migration

#### From `elm-chip` to `db-tag`

```html
<!-- DB-UI -->
<div class="elm-chip" data-variant="primary">Chip Text</div>

<!-- DB-UX-DSv3 -->
<db-tag>
	<db-button variant="ghost">Chip Text</db-button>
</db-tag>
```

#### From `elm-headline` to Semantic Headings

```html
<!-- DB-UI -->
<div class="elm-headline" data-size="h1">Main Title</div>

<!-- DB-UX-DSv3 -->
<h1 class="custom-headline">Main Title</h1>
<!-- Optional subtitle -->
<db-infotext>Subtitle text</db-infotext>
```

### 3. Navigation Migration

#### From `cmp-sidenavi` to `db-navigation` + `db-drawer`

```html
<!-- DB-UX-DSv3 -->
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

- **Documentation**: [Component documentation](https://www.npmjs.com/package/@db-ux/core-components)
- **Migration CLI**: Use `npx @db-ux/core-migration --type=v007_v100 --src=./src` for automated migration
- **Research Updates**: Check [research documents](../research/) for component development status
- **Community**: Join discussions about missing components in GitHub issues

## Future Roadmap

Check the [project board](https://github.com/orgs/db-ux-design-system/projects/4/views/1) for current status and release planning.

---

_This migration guide is maintained by the DB-UX Design System team. For specific component requests or migration assistance, please open an [issue on GitHub](https://github.com/db-ux-design-system/core-web/issues)._
