# DEV Research pagination

The following investigation analyzes the implementation strategies of different design systems. The goal of this document is to formulate architectural patterns, technical specifications, and UX best practices to develop a scalable and accessible roadmap for a pagination component within our design system.

## Foundation and UX Principles of Pagination

The primary function of a pagination is to reduce the user's cognitive load and optimize system performance by segmenting huge amounts of data into smaller performant units. In contrast to infinite scrolling, which is primarily designed for explorative, aimless discovery in highly visual environments, pagination aims at targeted navigation, retrievability (deep linking), and indexability by search engines.

## Overview 🔍

The following overview consolidates the basic data of the 15 design systems. It specifies the exact naming of the pagination component in the respective system, documents the underlying technological basis, and list the most important architectural findings.

| Design System | Component Name | Tech Stack | Link                                                                                                   | Comments / Key Infos                                                                                                                                                                                     |
| --- | --- | --- |--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Atlassian Design System** | `Pagination` | React | [Atlassian](https://atlassian.design/components/pagination)                                            | Uses an array of page numbers (`pages` prop). Supports automatic truncation.                                                                                                                             |
| **Bootstrap** | `Pagination` | HTML/CSS, SCSS | [Bootstrap](https://getbootstrap.com/docs/5.3/components/pagination/)                                  | Strictly based on semantic `<nav>` and `<ul>` HTML elements. Relies on SCSS variables and CSS classes (`.active`, `.disabled`).                                                                          |
| **GitHub Primer** | `Pagination` | React | [Primer](https://primer.style/brand/components/Pagination/)                                            | Focuses on SSR and SEO through an `hrefBuilder` function. Offers props for margins (`marginPageCount`) and surrounding pages to control truncation.                                                      |
| **GitLab Pajamas** | `Pagination` | Vue.js / Rails | [Pajamas](https://design.gitlab.com/components/pagination)                                             | Offers compact and standardized layouts. Strictly uses the `aria-current="page"` attribute and defined alignments (`align`).                                                                             |
| **HPE Grommet** | `Pagination` | React | [Grommet](https://v2.grommet.io/pagination)                                                            | The React component serves as a direct abstraction of a regular `<nav>` DOM element, keeping all native DOM events (`onClick`, `onFocus`) accessible.                                                    |
| **IBM Carbon** | `Pagination` / `Pagination nav` | React, Web Components, Angular, Vue | [Carbon](https://carbondesignsystem.com/components/pagination/usage/)                                  | Architecturally differentiates between table pagination (with integrated dropdown for items per page) and generic page navigation. Defines precise spacing tokens.                                       |
| **Material UI (MUI)** | `Pagination` / `TablePagination` | React | [MUI](https://mui.com/material-ui/react-pagination/)                                                   | Highly flexible with a `renderItem` prop for injecting custom slots (e.g., for React Router). `TablePagination` uses zero-based indexing; `Pagination` uses one-based indexing.                          |
| **MongoDB LeafyGreen** | `Pagination` | React / TypeScript | [LeafyGreen](https://mongodb.design/)                                                                  | Offers `itemsPerPageOptions` and is explicitly tailored for managing complex data views in a database context through strongly typed React props and select handlers.                                    |
| **Porsche Design System** | `Pagination` | Web Components (`<p-pagination>`) | [Porsche](https://designsystem.porsche.com/v3/components/pagination/configurator/)                     | Implements deterministic, hard-coded responsive rules: it always renders exactly 7 visible elements on desktop viewports and 5 on mobile devices to prevent layout breaks.                               |
| **SBB Lyne** | `sbb-paginator` | Web Components (Lit) / Angular | [SBB Lyne](https://digital.sbb.ch/en/design-system/lyne/components/)                                   | Manages `pageIndex` (zero-based) and `pageSize`. The documentation handles complex keyboard focus during DOM changes.                                                                                    |
| **Shopify Polaris** | `Pagination` | Web Components / React | [Polaris](https://shopify.dev/docs/api/hydrogen/latest/components/pagination)                          | Specifically optimized for cursor-based pagination (Storefront API). Omits absolute page numbers in favor of `hasNext` / `hasPrevious` props for maximum database performance. Integrates keyboard shortcuts. |
| **SNCF WCS** | `Pagination` | Web Components (StencilJS), Angular, React | ([https://wcs.dev.sncf/](https://wcs.dev.sncf/))                                                       | Relies on standardized design tokens for consistent group styling across different frameworks. Separates visual representation from data state.                                                          |
| **Telefonica Mistica** | `Pagination` | React | [Mistica](https://github.com/Telefonica/mistica-web)                                                   | Deep theming support (e.g., Movistar Skin). As a purely presentational component, it relies on external state management in the parent container.                                                        |
| **Telekom Scale** | `scale-pagination` | Web Components (StencilJS) | ([https://telekom.github.io/scale/](https://telekom.github.io/scale/))                                 | Implements specific micro-interactions (1.05x hover scale) as well as detailed, integrated event tracking (`pagination.next_click`).                                                                |
| **Washington Post WPDS** | `Pagination` | React | ([https://build.washingtonpost.com/](https://www.google.com/search?q=https://build.washingtonpost.com/)) | Limits visual slots to a maximum of 7 elements. Designed for content-heavy environments (article archives, search results) to avoid visual overload with infinite search results.                   |

---

## Cross-Sectional Analysis and Identified Best Practices

Several abstract architectural patterns can be derived and considered as practices for developing a scalable pagination component.

### State Management

Pagination components must be designed as *controlled components*. The component itself must never hold the control over the active page's state. The "source of truth" must be anchored in the parent application logic or in best case in the browser's URL (query parameters like `?page=3&limit=50`). As shown by GitHub Primer and Shopify Polaris, strict binding to the URL guarantees that users can generate deep links, share them, and land on the same pagination page of the list. Any deviation from this leads to user frustration and breaks in the user journey.

### Truncation and Responsive Collapsing

A pagination requires an algorithm to calculate visible elements to prevent the list from breaking the application's layout at very large page numbers. We need typically `currentPage`, `totalCount`, `siblingCount` (the number of visible pages immediately left and right of the current page), and `boundaryCount` (the number of permanently visible first and last pages at the edges).
On mobile devices, this must be adjusted. As the Porsche Design System (reduction from 7 to 5 elements) or GitHub Primer show, horizontal scrolling *within* a pagination is considered a huge UX problem. The layout must collapse before it breaks.

### Accessibility

While the implementation of a navigation landmark (`<nav aria-label="Pagination">`) and marking the current page (`aria-current="page"`) is considered as standard, practice shows more extensive and often neglected requirements.
If pagination is triggered and the website does *not* perform a full reload, the screen reader's focus remains on the clicked pagination button at the bottom of the DOM structure. If the layout then changes (e.g., because the button is removed from the DOM due to a recalculation of truncation), focus is completely lost, which is disorienting for users of assistive technologies. It requires programmatically setting focus to the top of the new data table after an asynchronous page change. In addition, asynchronous loading states must be communicated via `aria-live="polite"` regions to signal the arrival of new data to the user.

---

## Conclusion 🏁

Implementing pagination is more than visually rendering a numeric HTML list. It represents a critical interface between backend, frontend routing architecture, and cognitive ergonomics. The 15 examined design systems provide a consistent picture of standards, which can be summarized in three main point:

**Technical architecture:** Examined systems abstract pagination from actual data storage. They act as strictly controlled, stateless components and primarily support native server-side routing and search engine optimization.

**Accessibility:** Semantically correct use of `<nav>` and `<ul>`, suppressing keyboard focus for disabled links (via `tabindex="-1"`), and marking the active page using `aria-current="page"` are prerequisites.

**Responsive and interactive behavior:** Responsively and automatically reducing visible elements (sibling counts) on narrow viewports ensures that touch targets remain consistently large enough without breaking the page layout.

---

## Possible roadmap based on implementation complexity 📍

To transfer an enterprise-level pagination component into a custom design system, a step-by-step rollout increasing in complexity is recommended. This roadmap is oriented towards the iterative methodology of agile product development.

### 🟢 V1 - Simple and basic features

The first phase focuses on establishing a static, semantic, and accessible pagination.

* **Structure and Semantics:** Implementation as a `<nav>` element with a configurable, dynamic `aria-label`. Internal use of an unordered list (`<ul>` / `<li>`) for the semantic grouping of navigation items.
* **Stateless Base Props:** Implementation of minimal parameters `currentPage`, `totalCount`, and `pageSize`. The component independently calculates the total number of buttons from these without relying on complex array passing.
* **Visual States and Accessibility:** Explicit styling of the active page (identified by `aria-current="page"`) as well as disabled buttons at the edge boundaries. Disabled elements must have the `disabled` attribute (for `<button>`) or `tabindex="-1"` combined with `pointer-events: none` (for `<a>` tags).
* **Event Handling:** Integration of a simple, typed `onPageChange(pageNumber: number)` callback to inform the parent container.
* **Touch-Optimized Layout:** Horizontal alignment with sufficient spacing.
* **Micro-Interactions:** Implementation of subtle hover transitions (e.g., background color change) and focus indicators for keyboard use.
* **Reactive Responsive Design:** Automatic reduction of `siblingCount` to 0 on mobile viewports to prevent horizontal scrolling (collapsing the layout from `< 1... 4 5 6... 9 >` to `< 1... 5... 9 >`).
* **Truncation (Ellipsis):** Implementation of robust logic for omission marks (`...`). Introduction of flexible props `siblingCount` (pages next to the current page) and `boundaryCount` (pages at the outer edges).

### 🔵 V2 - Intermediate features

The second phase transforms the base component into a responsive pagination, optimized for use in complex single-page applications.

* **Items per Page Control:** Optional addition of a native select dropdown at the component's edge to control data density (`pageSize`). This requires an `onPageSizeChange` callback and localizable text labels (e.g., "Showing 1-10 of 100 results").
* **Routing and Framework Integration:** Introduction of slots. This allows consuming developers to inject framework-specific link components for SEO-friendly, server-side rendered URLs without breaking CSS.

### 🔴 V3 - Advanced features

The final phase targets power-user functionality, and the management of huge datasets.

* **Cursor-Based Architecture:** Native support for performance-critical datasets through a dedicated mode (`variant="cursor"`). This mode completely hides numeric buttons and relies purely on `hasNextPage`, `hasPreviousPage`, and the passing of cursor strings.
* **Automated Focus Management:** Built-in mechanisms to automatically return keyboard focus to the table header after an asynchronous rendering of the parent table.
* **Keyboard Shortcuts:** Integration of global hotkeys (e.g., `Ctrl + ArrowRight` for the next page) with dedicated `nextKeys`/`previousKeys` props. This requires the use of robust keypress listeners that avoid conflicts with browser shortcuts.
* **Full Internationalization (i18n):** Architecture for seamless translatability of all screen reader texts and text nodes (e.g., "Next Page", "Page 4 of 10").
