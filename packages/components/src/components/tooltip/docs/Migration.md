## General

> **Note**
> For a general installation or migration process check out this [documentation](https://www.npmjs.com/package/@db-ux/core-components).

## DB UI Core ➡ DB UX Design System Core components

New Component 🥳

## Content Usage

**Important:** The tooltip content should be passed as children/slot content, **not** as a `content` prop. 

```tsx
// ✅ Correct - content as children
<DBTooltip>Your tooltip text here</DBTooltip>

// ❌ Incorrect - there is no content prop
<DBTooltip content="Your tooltip text here" />
```
