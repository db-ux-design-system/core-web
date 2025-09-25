# Framework-Specific ID Generation

This document explains how component ID generation works across different frameworks for SSR compatibility.

## Overview

Components in this design system that need to generate unique IDs (such as form components) now use framework-specific approaches to ensure SSR (Server-Side Rendering) compatibility.

## Implementation

### Before
All frameworks used a custom `uuid()` function which could cause hydration mismatches in SSR scenarios:
```javascript
const id = `component-${uuid()}`;
```

### After
Framework-specific ID generation is implemented through a post-build script:

#### React Components
- Use React's `useId()` hook
- Import: `import { useId } from "react"`
- Usage: `const id = \`component-\${useId()}\``

#### Vue Components  
- Use Vue's `useId()` hook
- Import: `import { useId } from "vue"`
- Usage: `const id = \`component-\${useId()}\``

#### Angular & Stencil Components
- Continue using `uuid()` function (fallback)
- Usage: `const id = \`component-\${uuid()}\``

## Benefits

1. **SSR Compatibility**: React and Vue components now generate consistent IDs between server and client
2. **Hydration Safety**: Eliminates hydration mismatches in SSR applications
3. **Framework-Appropriate**: Uses each framework's recommended approach for ID generation
4. **Backward Compatibility**: Frameworks without native `useId()` support continue to work

## Affected Components

The following components have been updated to use framework-specific ID generation:
- textarea
- switch  
- select
- radio
- input
- custom-select-list-item
- custom-select
- checkbox

## Technical Details

### Post-Build Processing
A post-build script (`scripts/post-build/use-id.ts`) automatically:
1. Scans generated React and Vue components
2. Adds appropriate `useId` imports
3. Replaces `uuid()` calls with `useId()` calls in ID generation patterns
4. Leaves Angular and Stencil components unchanged

### Pattern Recognition
The script identifies ID generation patterns like:
```javascript
`component-${uuid()}`
```

And transforms them to:
```javascript
`component-${useId()}`  // React/Vue only
```

## Testing

Run the verification script to ensure proper integration:
```bash
npx tsx scripts/verify-use-id.ts
```

This verifies:
- Correct `useId` usage in React/Vue components
- Proper import statements
- No remaining `uuid()` patterns in ID generation
- Angular/Stencil components still use `uuid()`