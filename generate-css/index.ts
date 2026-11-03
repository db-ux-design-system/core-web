import { writeFileSync } from 'node:fs';
import { generateMaterialsCss } from './materials/index.ts';

// --- Generate CSS ---

let css = '';

css += generateMaterialsCss();

writeFileSync(new URL('../generated-colors.css', import.meta.url), css);
console.log('Generated generated-colors.css');
