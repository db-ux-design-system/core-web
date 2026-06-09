# DEV Research `table`

## Overview 🔍

| Design System                                                                           |                                                     Component                                                      | Comment                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Atlassian Design System](https://bitbucket.org/atlassian/atlaskit/src/master/)         | [table](https://atlassian.design/components/table) / [table-tree](https://atlassian.design/components/table-tree/) | _Table_: interactive data table with built-in pagination, sorting, and column reordering.<br />_Table Tree_: hierarchical table with expandable, nested rows.                                                                                                                                                    |
| [Bootstrap](https://github.com/twbs/bootstrap)                                          |                             [table](https://getbootstrap.com/docs/4.3/content/tables/)                             | Static tables styled via CSS classes (striped rows, borders). Responsive behavior via `.table-responsive wrapper` for horizontal scrolling. No built-in interactivity (sorting, etc. requires custom scripts).                                                                                                   |
| [GitHub Primer](https://github.com/primer/css)                                          |                         [data-table](https://primer.style/product/components/data-table/)                          | React component with column definitions and custom cells. Advanced features like sorting, selectable rows, sticky headers, etc. Currently no built-in pagination.                                                                                                                                                |
| [GitLab Pajamas](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com)       |                                [table](https://design.gitlab.com/components/table)                                 | Table with Basic, Striped, Condensed variants, sortable columns, pagination, responsive scroll. Underlying implementation in Vue/Rails (`<gl-table-lite>`) using Bootstrap-Vue.                                                                                                                                  |
| [HP Enterprise Grommet](https://github.com/grommet/grommet)                             |                                        [table](https://v2.grommet.io/table)                                        | Offers table for dynamic data: sorting, multi-select (onSelect, allowSelectAll), pagination/infinite scroll (onMore), grouping (groupBy), icons/buttons in cells, styling options.                                                                                                                               |
| [IBM Carbon](https://github.com/carbon-design-system/carbon)                            |                     [data-table](https://carbondesignsystem.com/components/data-table/usage/)                      | Three main variants: Default, with selection (single/multi-row selection + bulk actions), with expansion (expandable detail panels). Optional sorting, filtering/search in a toolbar and pagination .                                                                                                            |
| [Material UI](https://github.com/mui/material-ui)                                       |                                 [table](https://mui.com/material-ui/react-table/)                                  | Table with subcomponents for static display. TablePagination for paging controls. The basic Table has no sticky headers or interactive Features. DataGrid provides sticky header, column grouping, expandable rows, sorting, filtering and selection.                                                            |
| [MongoDB.design](https://github.com/mongodb/design)                                     |                          [table](https://www.mongodb.design/component/table/live-example)                          | Static table by default. Hook [useLeafyGreenTable](https://www.npmjs.com/package/@leafygreen-ui/table) integrates TanStack/React-Table for sorting, expansion, selection, sticky headers and large-data loading.                                                                                                 |
| [Porsche Design System](https://github.com/porsche-design-system/porsche-design-system) |                    [table](https://designsystem.porsche.com/v3/components/table/configurator/)                     | Web Component `<p-table>` with `<p-table-head>`, `<p-table-row>`, etc. Focus on responsiveness and consistency. Supports fixed or percentage column widths. Advanced table can have inline icons/buttons and checkbox selection. Sorting indicator rendered but data reordering done by developer.               |
| [SBB Lyne](https://github.com/lyne-design-system/lyne-components)                       |                     [table](https://lyne-storybook.app.sbb.ch/?path=/docs/styles-table--docs)                      | No custom table markup, they use native table, but [wrap it for enhancements](https://lyne-storybook.app.sbb.ch/?path=/docs/elements-sbb-table-sbb-table-wrapper--docs): horizontal scroll with buttons, optional sticky header, fixed height and focusable attribute to jump to scroll container.               |
| [Shopify Polaris](https://github.com/Shopify/polaris)                                   |                               [table](https://polaris.shopify.com/components/tables)                               | DataTable with column definitions with type (text/numeric), right-align numeric. Sortable columns (header buttons manage sort state), footer row for totals. Sticky header and fixed first column. Pagination separate via [Pagination component](https://polaris.shopify.com/components/navigation/pagination). |
| [SNCF Design System](https://gitlab.com/SNCF/wcs)                                       |                      [table](https://designmetier-bootstrap.sncf.fr/docs/4.3/content/tables/)                      | Native table or a wrapper component with scroll-buttons below the table for wide content. Supports fixed headers and responsive swipe on mobile.                                                                                                                                                                 |
| [Telefonica Mistica](https://github.com/Telefonica/mistica-web)                         |                 [table](https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/table)                  | Simple table component for static data. Renders native table with responsive container. Interactive features (sorting/filtering) not provided out-of-the-box in initial release.                                                                                                                                 |
| [Telekom Scale](https://github.com/telekom/scale)                                       |                  [table](https://telekom.github.io/scale/?path=/docs/components-table--standard)                   | Simple native table with a wrapper. Supports sorting for columns and striped rows.                                                                                                                                                                                                                               |
| [Washington Post Design System](https://build.washingtonpost.com/)                      |                   [table (coming soon)](https://build.washingtonpost.com/components/table) / ❌                    | --                                                                                                                                                                                                                                                                                                               |

## Conclusion 🏁

The design systems we reviewed tend to follow two approaches based on their technological foundations: framework-oriented systems (e.g. React/Angular) often encapsulate table logic in sophisticated components, whereas technology-agnostic solutions (Web Components or pure HTML/CSS libraries) primarily supply styles and structure and leave the interactive logic to implementers.

Across the surveyed design systems, there is a kind of pattern for tables:

1. **Native HTML Tables as the Foundation**

    Nearly every system relies on the browser’s built-in `<table>` semantics, often wrapped in a lightweight component or CSS utility (e.g. Bootstrap, SBB Lyne, SNCF).
    This ensures maximum accessibility out of the box, since screen readers and keyboard users already understand native table structures.

2. **Progressive Enhancement of Interactivity**
    - **Static by Default**: Some systems stick to purely static tables with CSS-based styling (striped rows, borders) and responsive wrappers for horizontal scrolling. Those have no built-in interactivity (sorting, pagination, etc.).
    - **Developer-Driven Features**: Several systems provide core table markup plus optional wrappers or slots for sorting, sticky headers, and scroll controls, leaving the actual user-driven logic to the implementer.
    - **Built-in Data Tables**: Other systems offer rich, pre-wired data table components with pagination, sorting, row selection, expandable rows, and more. These components manage state, callbacks, and ARIA attributes internally.

3. **Accessibility as a First Principle**

    All systems emphasize semantic markup (`<caption>`, `<th scope="…">`, native roles) and appropriate ARIA attributes (`aria-sort`, `aria-expanded`, live regions for announcements).

    Many provide built-in helper props or methods to automatically generate accessible labels (e.g. Primer’s `<Table.Title>` or Carbon’s keyboard focus patterns).
    So every system uses the native a11y features of the browser and adds ARIA attributes where necessary.

4. **Responsive and Theming Considerations**

    A common requirement is horizontal scrolling on narrow viewports, mostly achieved via wrappers, CSS overflow, or built-in scroll buttons. Systems also offer scoped styling variables or props to adjust row density, header stickiness, and column widths.

## Possible roadmap based on implementation complexity 📍

### 🟢 V1 - Simple and basic features

Version 1 delivers a fully functional static table component that renders data in rows and columns using semantic HTML markup, basic styling, lightweight responsive enhancements and optional CSS sticky headers, but excludes any dynamic interactions.
This provides an immediately usable, accessible foundation consistent with the initial table offerings of many design systems.

- **Static table rendering**

    Display data in rows and columns without any dynamic interaction.

- **Semantic HTML markup**

    Use `<table>`, `<thead>`, `<tr>`, `<th>` and `<td>` appropriately.

    Header cells must be `<th>` with the correct `scope="col"` or `scope="row"` so that screen readers understand the table structure.

- **Table caption**

    Provide a visible `<caption>` or at least an `aria-label` / `aria-labelledby` on the `<table>` element to communicate the table’s title.

- **Responsive layout**

    Allow horizontal scrolling on narrow viewports (e.g. via an overflow wrapper or a CSS class).

    Ensure the header either scrolls with the body or remains fixed.

- **Basic styling**

    Optional visual enhancements that don’t affect interactivity (zebra-striping for rows, condensed row spacing, row hover highlights).

- **Alignment and formatting**

    Left-align text, right-align numbers (as recommended by many design systems).

    Consistent formatting (e.g. date formats) should also be part of the basic features.

- **Focus indicators**

    When a cell is focusable, it should show a visible focus outline (typically handled by the browser).

- **Handle empty table (no data)**

    The table should handle the case that no dat is available and show an appropriate message (e.g. "No data available") and use an `aria-live` region to announce the empty state.

### 🔵 V2 - Intermediate features

Version 2 introduces the essential interactive capabilities expected in modern data tables.
These enhancements align the component with the intermediate offerings of established design systems, transforming it from a static display into a dynamic data grid for common data exploration tasks.

- **Sortable columns**

    Let users sort by any column. Requires header buttons, sorting logic in code, `aria-sort="ascending"` / `"descending"` on the active header and [a description within caption, that any header is sortable](https://www.w3.org/WAI/ARIA/apg/patterns/table/examples/sortable-table/).

- **Pagination**

    For large data sets, show pages with “Previous” / “Next” or page numbers. Requires page-state management and a separate pagination UI.

    Buttons need `aria-label` (e.g. “Next page”).

- **Filtering / Search**

    Provide filter inputs or a search box to hide rows client-side.

    Filter field needs a label and (optionally) a live region announcing “10 of 50 rows shown.”

- **Sticky header**

    Keep the header row visible on scroll using CSS (`position: sticky; top: 0;`).

- **Row selection**

    Allow selecting rows via checkboxes or click for bulk actions.

    Needs a checkbox column and an optional “Select All” header checkbox.
    `aria-checked`for a11y (including mixed state) and support for spacebar toggling.

- **Inline row actions**

    Buttons in each row (e.g. “Edit”, “Delete”).

    Each action button should include row context in its `aria-label` (e.g. `aria-label="Edit order #12345"`).

- **Grouped column headers**

    Combine multiple columns under a shared header using `<th colspan="…">`.

    May require correct DOM hierarchy. Screen readers handle proper HTML automatically.

- **Advanced responsive behavior**

    On mobile, transform rows into card-like stacks (label-value blocks) instead of scrolling.

- **Loading States**

    Show a loading indicator or skeleton rows when data is being fetched asynchronously, ensuring users receive visual feedback during pagination or lazy-loading. Needs a label and (optionally) a live region announcing the loading state.

- **Customization APIs**

    Expose hooks and props that let developers tailor cell rendering, styling, and event handling without patching the component’s internals:

    **Cell Templates**: Allow custom render functions or slots so any cell can display content (e.g. badges, links, nested components).

    **Event Callbacks**: Provide clear callbacks for all user actions (onSort, onFilter, onSelect, onPageChange, etc.), enabling seamless integration with application logic.

    **Styling/Theming**: Offer density, color, and layout overrides (e.g. a compact mode prop or CSS variables) to align with different brand themes.

- **Aggregations / Footer Rows**

    Support an optional footer row for totals, averages, or summary data, enabling built-in aggregation without extra markup.

### 🔴 V3 - Advanced features

Version 3 adds advanced, power-user functionality. These sophisticated features elevate the component into a comprehensive data grid suitable for complex, enterprise-grade applications.

- **Inline cell editing**

    Let users edit cells directly (like Excel). Requires `contenteditable` or input fields, focus management, validation, and WAI-ARIA grid patterns (`role="grid"` with focused cells).

- **Complex keyboard navigation (grid pattern)**

    Arrow-key movement between cells in a fully interactive grid. Needs `role="grid"`, `role="row"` / `role="gridcell"`, and extensive JavaScript for key handling.

    (Implementation only if really necessary; native `<table>` support is usually sufficient.)

- **Hierarchical tables (treegrid)**

    Parent–child rows that expand/collapse. Use `aria-expanded` on toggles and optionally `role="rowgroup"` for nested groups.

- **Column settings (Show/Hide/Reorder)**

    Let users toggle column visibility and reorder via drag-and-drop. Requires a UI for column checkboxes, drag handles, and state management.

    Drag & drop must be keyboard-accessible (ARIA Drag-and-Drop or alternative UI).

- **Virtual scrolling for large datasets**

    Render only visible rows and load more on scroll. Transparent to users but technically intricate.

    Must ensure screen readers can still access all content.

- **Column Resizing**

    Enable users to adjust column widths via drag handles, with keyboard-accessible alternatives, for a fully flexible grid layout.

- **Row Drag-and-Drop**

    Allow reordering of rows through drag-and-drop (and keyboard equivalents), exposing ARIA drag-and-drop attributes.

- **Export / Import functionality**

    Buttons to export the table as CSV/Excel or import data.
