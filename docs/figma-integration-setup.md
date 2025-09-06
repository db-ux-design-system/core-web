# Figma Integration Setup Guide

This guide provides step-by-step instructions for setting up and using Figma's developer tools with the DB UX Design System.

## Prerequisites

- Figma account with access to the DB UX Design System files
- VS Code (recommended IDE)
- Node.js and npm installed
- Repository cloned and dependencies installed

## Setup Instructions

### 1. VS Code Figma Extension

The Figma VS Code extension is automatically included in our recommended extensions.

#### Installation
```bash
# The extension will be suggested when opening the project
# Or install manually:
code --install-extension figma.figma-vscode-extension
```

#### Configuration
The extension is pre-configured in `.vscode/settings.json`:
- Code Connect integration enabled
- Inline comments display enabled

### 2. Figma Code Connect

Code Connect links our component implementations to Figma designs.

#### Installation
Code Connect is included as a dev dependency. Install it by running:
```bash
npm install
```

#### Configuration
The configuration is defined in `figma.config.json`:
- Includes component files with `.figma.ts` extension
- Supports all framework outputs (React, Vue, Angular, Stencil)
- Excludes test files and node_modules

## Usage

### Publishing Component Connections

1. **Create Code Connect files** for your components (see examples in `docs/examples/figma-code-connect/`)

2. **Set up Figma URLs** in your `.figma.ts` files:
   ```typescript
   figma.connect(Component, 'figma://file-key/component-id', {
     // configuration
   });
   ```

3. **Authenticate with Figma**:
   ```bash
   # Login to Figma (required once)
   npx figma connect auth
   ```

4. **Publish connections**:
   ```bash
   npm run figma:connect:publish
   ```

### Working with Code Connect

#### Basic Component Connection
```typescript
import figma from '@figma/code-connect';
import { DBButton } from './Button';

figma.connect(DBButton, 'figma://component-url', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'brand',
      Secondary: 'outlined'
    }),
    disabled: figma.boolean('Disabled'),
    children: figma.string('Label')
  },
  example: (props) => <DBButton {...props} />
});
```

#### Advanced Prop Mapping
```typescript
// Map complex props
props: {
  size: figma.enum('Size', {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
  }),
  
  // Conditional props
  icon: figma.boolean('Has Icon') ? figma.string('Icon Name') : undefined,
  
  // Nested properties
  theme: figma.nestedProps('Theme', {
    primary: figma.string('Primary Color'),
    secondary: figma.string('Secondary Color')
  })
}
```

### VS Code Integration

With the Figma extension installed:

1. **View designs** directly in VS Code
2. **Access design tokens** and copy values
3. **Export assets** without leaving the IDE
4. **See live updates** from design changes

#### Useful Commands
- `Figma: Open File` - Open Figma file in VS Code
- `Figma: Export Selection` - Export selected design elements
- `Figma: Copy Design Token` - Copy design token values

## Best Practices

### 1. Component Organization
- Keep `.figma.ts` files next to component implementations
- Use descriptive names for prop mappings
- Group related components in the same Code Connect file

### 2. Prop Mapping
- Map Figma properties to exact prop names in code
- Use enum mappings for variant properties
- Provide fallback values for optional props

### 3. Documentation
- Add comments explaining complex mappings
- Document any custom logic or transformations
- Keep examples simple and focused

### 4. Maintenance
- Update Code Connect files when component APIs change
- Re-publish connections after significant updates
- Test connections in Figma after publishing

## Troubleshooting

### Common Issues

#### Authentication Problems
```bash
# Clear auth and re-login
npx figma connect auth --logout
npx figma connect auth
```

#### Publishing Failures
- Check Figma file permissions
- Verify component URLs are correct
- Ensure proper team access

#### VS Code Extension Issues
- Restart VS Code
- Check extension settings
- Verify Figma file access

### Error Messages

#### "Component not found"
- Verify the Figma component URL
- Check if component exists and is accessible
- Ensure proper authentication

#### "Invalid props mapping"
- Check prop names match component interface
- Verify enum values are correct
- Test with simplified prop mapping

## Advanced Configuration

### Multi-Framework Support
```typescript
// React implementation
figma.connect(ReactButton, 'figma://url', {
  props: { /* React props */ },
  example: (props) => <ReactButton {...props} />
});

// Vue implementation
figma.connect(VueButton, 'figma://url', {
  props: { /* Vue props */ },
  example: (props) => h(VueButton, props)
});
```

### Custom Transformations
```typescript
figma.connect(Component, 'figma://url', {
  props: {
    customProp: figma.transform(figma.string('Input'), (value) => {
      // Custom transformation logic
      return processValue(value);
    })
  }
});
```

### Conditional Examples
```typescript
figma.connect(Component, 'figma://url', {
  variant: { 'Loading': true },
  example: () => <Component loading={true} />
});
```

## Team Workflow

### For Designers
1. Create components in Figma with consistent naming
2. Use clear property names for variants and states
3. Communicate changes to developers
4. Test Code Connect examples in Figma

### For Developers
1. Create Code Connect files for new components
2. Map props accurately to Figma properties
3. Publish connections after implementation
4. Keep connections updated with code changes

### For Design System Maintainers
1. Establish conventions for prop naming
2. Review Code Connect configurations
3. Ensure consistent mapping across frameworks
4. Monitor and maintain authentication

## Resources

- [Figma Code Connect Documentation](https://github.com/figma/code-connect)
- [Figma VS Code Extension](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension)
- [DB UX Design System Figma Files](https://www.figma.com/files/team/TEAM_ID)
- [Component Development Guide](/docs/how-to-develop-a-component.md)