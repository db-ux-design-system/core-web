# DB-UI to DB-UX Design System v3 Component Migration Guide

> **Note**
> This document provides migration guidance for DB-UI components that don't have direct equivalents in DB-UX Design System v3. For package name changes and general migration information, see [v0.7.x-to-v1.0.0.md](./v0.7.x-to-v1.0.0.md).

## Overview

DB-UX Design System v3 represents a complete rethinking of the component architecture with a focus on atomic design principles, accessibility, and modern web standards. Some DB-UI components have been redesigned, consolidated, or are planned for future releases.

## Components without Direct Equivalents

| Component                   | Status | Recommendation                                               | Description                                                                                                                                                                                         |
| --------------------------- | :----: | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rea-main`                  |   ❌   | Use `db-page` with custom layout                             | The `db-page` component provides basic page structure. It already includes `<main>`                                                                                                                 |
| `rea-grid`                  |   ❌   | Use CSS Grid or `db-stack` component                         | Replace with modern CSS Grid for complex layouts, or use `db-stack` for simple spacing. See [CSS Grid examples](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)                   |
| `rea-footer`                |   🔄   | Under research - build custom for now ,Planned for Q4/2025   | Footer component is being researched. Use semantic `<footer>` element with `db-link` components and custom styling. [Research document](../research/footer.md)                                      |
| `elm-headline`              |   🔁   | Use heading elements with `db-infotext`, Planned for Q4/2025 | Replace with semantic heading tags (`<h1>`, `<h2>`, etc.) styled with CSS. For subtitle functionality, combine with `db-infotext`                                                                   |
| `elm-headline` (with pulse) |   ❌   | Use heading + CSS animation, Planned for Q4/2025             | Implement pulse animation using CSS animations or transitions on heading elements. Pulse animations should be used sparingly for accessibility                                                      |
| `elm-loadingindicator`      |   🔄   | Planned for Q4/2025                                          | Loading indicator component is planned. Use CSS spinners or skeleton screens temporarily. Consider accessibility with `aria-live` regions                                                           |
| `elm-progress`              |   🔄   | Planned for Q4/2025                                          | Progress component in development. Use HTML5 `<progress>` element with custom styling or build custom solution                                                                                      |
| `elm-chip`                  |   🔁   | Use `db-tag` with interactive elements                       | Replace with `db-tag` containing `db-button`, `db-checkbox`, or `db-radio` for interactive functionality. See [tag migration guide](../../packages/components/src/components/tag/docs/Migration.md) |
| `cmp-breadcrumb`            |   🔄   | Planned for Q4/2025                                          | Breadcrumb component planned for future release. Use `db-link` components with `aria-label="Breadcrumb"` navigation wrapper                                                                         |
| `cmp-pagination`            |   🔄   | Planned for Q4/2025                                          | Pagination component in development. Build custom solution with `db-button` components and proper ARIA labels                                                                                       |
| `cmp-table`                 |   🔄   | Under active research                                        | Table component being researched with comprehensive roadmap. Use semantic HTML tables with custom styling. [Research document](../research/table.md)                                                |
| `cmp-sidenavi`              |   🔁   | Use `db-navigation` in `db-drawer`                           | Combine `db-navigation` component within `db-drawer` for side navigation functionality. Configure drawer with appropriate width and positioning                                                     |
| `cmp-dialog`                |   🔁   | Use `db-drawer` or custom modal, Planned for Q4/2025         | Use `db-drawer` for side panels, or build custom modal dialog with proper focus management and ARIA attributes                                                                                      |

## Legend

| Symbol | Meaning                                                               |
| :----: | --------------------------------------------------------------------- |
|   🔁   | **Available replacement** - Use suggested alternative component(s)    |
|   🔄   | **Planned for future** - Component in roadmap, use temporary solution |
|   ❌   | **Not planned** - Use alternative approach or build custom solution   |
|   🆕   | **New in DB-UX-DSv3** - Enhanced or new functionality available       |

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
<div class="custom-loading" aria-live="polite" aria-label="Loading content">
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

_This migration guide is maintained by the DB-UX Design System team. For specific component requests or migration assistance, please open an issue on GitHub._
