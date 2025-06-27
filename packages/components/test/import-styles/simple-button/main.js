// The theme contains all prop required for components like spacings, colors, ...
import '@db-ux/core-foundations/build/styles/default-theme.css';
// The font include uses default font families based on your bundling paths (relative, absolute, webpack, rollup)
import '@db-ux/core-foundations/build/styles/fonts/include-rollup.css';
// The required styles will normalize css and add focus and default font to body
import '@db-ux/core-foundations/build/styles/init/required.css';
// The default root adds a default color space (neutral) and a density (regular)
import '@db-ux/core-foundations/build/styles/init/default-root.css';

// Optional: Add animations / transitions for components
import '@db-ux/core-components/build/styles/component-animations.css';
// Optional: Add data-icon/data-icon-after to global attributes to enable icons for components
import '@db-ux/core-foundations/build/styles/icons/include-rollup.css';

// Optional: Add components
import '@db-ux/core-components/build/components/button/button.css';
import '@db-ux/core-components/build/components/input/input.css';
