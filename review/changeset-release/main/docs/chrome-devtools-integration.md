# Chrome DevTools Integration

## Overview

The DB UX Design System now includes enhanced Chrome DevTools integration via the [`vite-plugin-devtools-json`](https://www.npmjs.com/package/vite-plugin-devtools-json) plugin. This provides improved debugging capabilities during development.

## What's Included

The plugin is automatically enabled in all Vite-based development environments:
- React showcase (`/showcases/react-showcase/`)
- Vue showcase (`/showcases/vue-showcase/`)

## Enhanced Features

### 1. DevTools JSON Generation
The plugin automatically generates a `com.chrome.devtools.json` file that provides metadata about the running application to Chrome DevTools.

### 2. Better Debugging Experience
- Enhanced source mapping
- Improved component inspection
- Better performance profiling
- More detailed error reporting

## How to Use

### Prerequisites
- Google Chrome or Chromium-based browser
- Chrome DevTools (built-in)

### Steps
1. Start any Vite development server:
   ```bash
   # React showcase
   cd showcases/react-showcase && npm run dev

   # Vue showcase
   cd showcases/vue-showcase && npm run dev
   ```

2. Open Chrome DevTools (F12)

3. The enhanced debugging features will be automatically available in:
   - **Sources** tab - Better source mapping
   - **Elements** tab - Enhanced component inspection
   - **Performance** tab - More detailed profiling
   - **Console** tab - Improved error reporting

### Verifying the Integration

When the development server starts, you should see the Vite server output without any plugin errors. The DevTools JSON file is generated automatically and served by the development server.

## Development Workflow

### Component Development
- Use the **Elements** tab to inspect component structures
- Leverage enhanced source maps for debugging
- Utilize improved error reporting in the **Console**

### Performance Analysis
- Use the **Performance** tab for detailed profiling
- Monitor component rendering performance
- Analyze bundle loading characteristics

### Source Code Navigation
- Enhanced source mapping makes debugging easier
- Better stack traces for error resolution
- Improved breakpoint debugging experience

## Configuration

The plugin is configured with default settings in all Vite configurations:

```typescript
import devtoolsJson from 'vite-plugin-devtools-json';

// In vite.config.ts
plugins: [
  // ... other plugins
  devtoolsJson() // Enable Chrome DevTools JSON generation
]
```

## Browser Compatibility

- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge (Chromium-based)
- ✅ Opera (Chromium-based)
- ❌ Firefox (limited support)
- ❌ Safari (not supported)

## Troubleshooting

### Plugin Not Loading
If you see errors related to the DevTools plugin:
1. Ensure you're using a Chromium-based browser
2. Clear browser cache and restart the development server
3. Check console for specific error messages

### Missing DevTools Features
If enhanced features aren't visible:
1. Verify the development server started without errors
2. Open DevTools before navigating to the application
3. Refresh the page with DevTools open

## Production Impact

The `vite-plugin-devtools-json` only affects development builds. Production builds are not impacted:
- No additional bundle size
- No runtime performance impact
- No security concerns

## More Information

For detailed information about the plugin, visit:
- [Plugin Repository](https://github.com/ChromeDevTools/vite-plugin-devtools-json)
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
