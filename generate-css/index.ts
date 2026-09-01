import { writeFileSync } from 'fs';
import { generateMaterialsCss } from './materials/index.ts';
import { generateSizesCss } from './sizes/index.ts';

// --- Generate CSS ---

let css = '';

css += generateMaterialsCss();

css += '\n';
css += '@layer size {\n\n';
css += generateSizesCss();
css += '} /* @layer size */\n';

writeFileSync(new URL('../generated-colors.css', import.meta.url), css);
console.log('Generated generated-colors.css');
