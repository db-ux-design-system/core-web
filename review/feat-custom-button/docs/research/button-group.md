# DEV Research `button-group`

## Overview 🔍

| Design System                                 | Repos / Docs                                     | Notes (separate-actions button groups)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Atlassian Design System**                   | Docs: “Button group” in Button component section | Defines a Button group as a way to “give users access to frequently performed, related actions”. It is a wrapper around individual Button components, typically used in toolbars or near a controlled object. Supports mixing appearances (primary, subtle, danger) within one group to express hierarchy. Group itself has no selection state; each button triggers its own action. Recommended for small, focused sets of actions.                                                            |
| **Atlassian Forge UI Kit**                    | Repo/docs for `ButtonGroup` React component      | Simple `ButtonGroup` component that renders multiple Buttons together. Designed for dialogs and inline action areas where each button executes an independent operation. API mainly controls layout (spacing, alignment); there is no built-in toggle/segmented behavior.                                                                                                                                                                                                                       |
| **USWDS – U.S. Web Design System**            | `button-group` component docs                    | The Button group “collects similar or related actions”. Examples show primary/secondary pairs such as “Back / Continue” or “Submit application / Save draft”. Default layout is horizontal with gaps; on small screens the group stacks vertically (each button full-width). Emphasis on WCAG-compliant tap targets and keyboard access. Each button is a standard action button; the group does not track a selected state.                                                                    |
| **VA.gov Design System** (USWDS derivative)   | Button group in component library                | Reuses USWDS’ Button group, sometimes called “button pair”. Encourages use in flows and wizards with one primary and one or two secondary actions. Strong guidance for responsive stacking (buttons become full-width on mobile) and for keeping the group small.                                                                                                                                                                                                                               |
| **Other US government DS (e.g. NCI / NCIDS)** | Repositories built on USWDS                      | Many USWDS-based design systems adopt the same Button group: horizontal layout for desktop, vertical on mobile; buttons are independent actions with primary/secondary styling. Typically limited to 2–3 buttons plus a link-style action if needed.                                                                                                                                                                                                                                            |
| **GitLab Pajamas**                            | Docs: `Button group`                             | Distinguishes two conceptual types: (1) **related action buttons** and (2) **related option buttons**. For **related actions**, each button performs an immediate action such as “Edit”, “Delete”, “Move”. The group may visually emphasize one button as primary. There is an optional “selected on load” state to reflect an existing context, but it is not a persistent segmented control. Guidance recommends keeping groups compact and contextual.                                       |
| **GitLab Pajamas – Usage examples**           | Pajamas Storybook / examples                     | Shows action button groups in table rows, toolbars, and card headers. Buttons are mostly tertiary/secondary style or icon-only, with tooltips where labels are not visible. No built-in roving tabindex; focus moves between buttons in DOM order.                                                                                                                                                                                                                                              |
| **MUI – Material UI (React)**                 | Repo: `@mui/material/ButtonGroup`                | `ButtonGroup` wraps multiple `Button` components and can propagate `variant`, `color`, `size`, and `orientation` to children. Default use is multiple related actions (e.g., text formatting buttons, grouped submit/cancel actions). Also used as a building block for split buttons. Disables all children when the group is disabled. Can be horizontal or vertical; supports fullWidth. Immediate action behavior; any “selected” appearance is managed externally by setting button props. |
| **Joy UI (MUI)**                              | Repo: `@mui/joy/ButtonGroup`                     | Similar concept as MUI core but with Joy’s visual language. `ButtonGroup` enforces consistent radius, variant (`solid`, `outlined`, `soft`, `plain`) and size across child Buttons. Recommended for short sets of related actions and simple view filters. Segmented / toggle behavior is handled elsewhere (e.g., by ToggleButtonGroup); by default ButtonGroup is just layout + styling for independent actions.                                                                              |
| **Material Design 3**                         | M3 “Button groups” guidelines                    | M3 describes “standard button groups” (separate actions) and “segmented button groups” (options). Standard groups are used in toolbars, dialog footers, and cards “to organize related actions in a single horizontal surface”. M3 explicitly notes that standard button groups fire actions immediately, whereas segmented groups represent a selected state. Visual guidance covers spacing, grouping with rounded corners, and alignment.                                                    |
| **Bootstrap**                                 | Repo: `twbs/bootstrap`, component “Button group” | `.btn-group` is a pure CSS layout utility that groups `.btn` elements on a single line. Used for toolbars and grouped actions. Each button is a regular clickable button or link; Bootstrap does not add selection logic by default (except when used together with JS plugins for toggles). Supports `.btn-group-vertical` and `.btn-toolbar` (multiple groups combined). Examples include icon-only groups and small action clusters.                                                         |
| **Lightning Design System (Salesforce)**      | “Button groups” and “Button icons”               | Uses Button groups for contextual actions associated with records, views, or toolbars. Often combines icon buttons and text buttons. The group is mainly a layout and styling construct; click behavior is handled on each button. Segmented / stateful behavior is delegated to other components (e.g., tabs, pills). Accessibility guidance recommends `role="group"` and a label to describe the action area.                                                                                |
| **IBM Carbon**                                | Button / Overflow / Toolbar patterns             | Carbon does not expose a dedicated “ButtonGroup” React component but shows “Button sets” in forms and “toolbars” in tables. These are essentially button groups for separate actions (primary and secondary buttons) plus overflow menus. The pattern recommends keeping the main actions visible and grouping no more than a handful of buttons together to avoid overwhelming users.                                                                                                          |
| **Telerik / Kendo UI**                        | `ButtonGroup` for React / Angular / jQuery       | `ButtonGroup` is described as a collection of buttons that act as a single UI element. It supports text-only, icon-only and icon-with-text items. Can be configured for selection modes, but also used as a simple action group where clicking a button invokes a bound handler. Properties include orientation, size, and theme.                                                                                                                                                               |
| **Untitled UI (Figma library)**               | Button group variants                            | Treats Button groups mainly as a **layout / composition pattern**: primary + secondary pairs, sets of equally sized buttons, icon-only action groups. Focus is on hierarchy (one primary button per group), spacing tokens, and responsive wrapping. Recommended size is small groups; larger sets should move to segmented controls, menus, or toolbars with overflow.                                                                                                                         |
| **Component Gallery (meta index)**            | Entry: `Button group`                            | Defines a Button group generically as “a wrapper for related buttons, useful when you want to display multiple related actions together.” Lists many design systems that implement this pattern with small variations. Recommends using `role="group"` or `role="toolbar"` and providing a label that describes the group’s purpose. Notes that for view selection and persistent states, segmented controls or tabs are better suited.                                                         |

---

## Conclusion 🏁

### What a ButtonGroup is

Across the surveyed design systems, a **ButtonGroup** for separate actions is consistently understood as:

- A **visual and semantic grouping** of multiple, closely related actions in a shared context (dialog footer, toolbar, card header, table row, etc.).
- Each button behaves as a **normal action button**: clicking it immediately performs its action.
- The group itself **does not own a persistent selection state**. If one button appears highlighted (e.g., “current view” or “default format”), this is usually controlled externally and should not be confused with a segmented control pattern.

For your design system, this suggests that the first ButtonGroup variant should be positioned as:

> “A container for 2–7 related actions, allowing designers and developers to place multiple buttons together while enforcing consistent spacing, alignment, hierarchy and accessibility.”

---

### Behavior & sizing

- **Immediate, single actions:** Every button has its own click handler. The group is not a radio/segmented control and is not used for persistent choices or navigation.
- **Small sets only:** Most systems implicitly or explicitly expect **2–5 buttons**, sometimes up to ~7 for dense toolbars. Larger sets are usually transformed into menus, segmented controls, or toolbars with overflow.
- **No built-in selection:** If one button is styled differently (e.g., “primary” vs “secondary”), this expresses **hierarchy**, not selection.

---

### Layout & responsive patterns

Common layout expectations:

- **Horizontal by default** on desktop. Buttons appear in a single row, with consistent horizontal gaps or shared borders.
- **Vertical stacking on small screens**: USWDS explicitly recommend stacking buttons full-width on small viewports to improve tap targets and readability. Other systems show similar behavior in examples even when not mandated.
- **Orientation control:** API-level support for `horizontal` vs `vertical` orientation is common in component libraries (MUI, Joy, Telerik). Vertical groups are used for side toolbars or when space is constrained.
- **Equal vs content width:** Design libraries show both content-width buttons and “equal width” buttons. Equal width is often used when all actions should appear equally important or when the group fills a container.

---

### Visual styling & hierarchy

Patterns that repeat across systems:

- The group enforces **consistent size and variant** among children (e.g. all small outlined buttons) but may allow **one primary action** to stand out.
- Primary/secondary hierarchy is often encoded by mixing variants within the same group: e.g. primary filled button + secondary ghost button + tertiary text link.
- Icon-only buttons are common in **toolbars** but typically require tooltips and/or accessible labels.

This implies that your ButtonGroup should:

- Reuse existing **Button variants, sizes and tokens**, rather than introducing new unique styles.
- Define **rules for mixing** (e.g. “at most one primary per group”, “icon-only buttons must have tooltips and aria-labels”).

---

### Accessibility & semantics

The accessibility model is relatively simple and consistent:

- Group container uses `role="group"` for generic clusters of buttons, or `role="toolbar"` when the group is acting as a toolbar controlling another surface.
- The group must have an accessible label, via:
    - `aria-label` (for icon-only groups), or
    - `aria-labelledby` referencing nearby visible text.
- Focus stays on individual buttons; **no roving tabindex** is needed. Tab navigation follows DOM order; Space/Enter activates each button as usual.
- When stacked vertically on mobile, minimum tap target size and contrast rules still apply.

---

### Relationship to segmented controls & navigation

Several systems use the same or similar components for both **action groups** and **segmented controls**, but most of them draw a conceptual line:

- Button groups for **actions**: immediate operations; no persistent selection; used around forms, cards, dialogs, and tools.
- Segmented controls / toggle groups: represent **mutually exclusive or multi-select options**, often changing views or filters; implement radio/tab/checkbox patterns with persistent visual states.

It is important to:

- Clearly scope this initial ButtonGroup research and implementation to **separate actions only**.
- Plan **segmented / toggle variants** as either:
    - a separate “SegmentedControl” component, or
    - a later extension of ButtonGroup with different semantics and ARIA patterns.

---

## Possible roadmap based on implementation complexity 📍

### Phase 1 – Basic action ButtonGroup (current story scope)

**Goal:** Provide a compositional component to group 2–7 related action buttons, with minimal API and solid accessibility.

- Implement `<ButtonGroup>` that:
    - Renders a semantic container with `role="group"` by default.
    - Accepts an accessible label (`aria-label` / `aria-labelledby`).
    - Takes existing Button components as children.
- Layout & styling:
    - Horizontal layout with DS spacing tokens.
    - Optional `orientation="vertical"` for side usage.
    - Optional `fullWidth` / `equalWidth` behavior, if consistent with your layout system.
- Behavior:
    - No built-in selection logic; each child button handles its own click.
    - Group-level `disabled` prop that disables all children (for loading or unavailable states).
- Documentation:
    - Definition, anatomy, basic examples (dialog footer, card actions, inline toolbar).
    - Clear distinction from segmented controls and tabs.

### Phase 2 – Toolbar / icon-heavy groups

**Goal:** Extend ButtonGroup for toolbar-like use cases with icons, compact spacing and more responsive behavior.

- Add `role="toolbar"` option and usage guidelines (must have label).
- Define recommended patterns for icon-only buttons (tooltips, focus styles, minimum size).
- Introduce patterns for:
    - Multiple groups inside a toolbar (e.g., alignment left/right).
    - Optional overflow pattern when there are more than 5–7 actions.

### Phase 3 – Relationship to advanced patterns (out of current scope)

**Goal:** Use ButtonGroup as the foundation for more complex components.

- **Split Button**: One primary action + dropdown trigger button; visually and structurally a special case of ButtonGroup with exactly two children.
- **Segmented / toggle groups**: Single- or multi-select option groups based on radio/checkbox/tab patterns.
- **View switchers & filters**: Higher-level patterns that may be implemented on top of ButtonGroup but with distinct semantics.
