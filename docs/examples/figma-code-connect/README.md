# Figma Code Connect Examples

This directory contains example Code Connect configurations for different frameworks.

## Usage

These examples show how to connect Figma designs to our component implementations:

1. **Copy the relevant example** to your framework's output directory (e.g., `output/react/src/`)
2. **Replace placeholder URLs** with actual Figma component URLs
3. **Adjust prop mappings** to match your specific Figma component properties
4. **Run publish command**: `npm run figma:connect:publish`

## Framework Support

- **React**: `button-react.figma.ts` - Shows React-specific implementation
- **Vue**: `button-vue.figma.ts` - Shows Vue 3 with composition API
- **Angular**: Similar pattern with Angular decorators (example coming soon)
- **Stencil**: Web Components pattern (example coming soon)

## Getting Component URLs

To get Figma component URLs:
1. Open your Figma file
2. Select the component in the canvas
3. Right-click and choose "Copy link to selection"
4. Use this URL in your Code Connect configuration

## Best Practices

- Keep `.figma.ts` files next to component implementations
- Use descriptive prop mappings that match Figma property names
- Test connections after publishing to ensure they work correctly
- Update connections when component APIs change