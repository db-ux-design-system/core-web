// The theme contains all prop required for components like spacings, colors, ...
import '@db-ui/foundations/build/css/default-theme.css';
// The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup)
import '@db-ui/foundations/build/css/fonts/include-rollup.css';
// The required styles will normalize css and add focus and default font to body
import '@db-ui/foundations/build/css/init/required.css';
// The default root adds a default color space (neutral) and a density (regular)
import '@db-ui/foundations/build/css/init/default-root.css';

// Optional: Add animations / transitions for components
import '@db-ui/components/build/styles/component-animations.css';
// Optional: Add data-icon/data-icon-after to global attributes to enable icons for components
import '@db-ui/foundations/build/css/icons/include-rollup.css';

// Optional: Add components
import '@db-ui/components/build/components/button/button.css';
import '@db-ui/components/build/components/input/input.css';
