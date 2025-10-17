import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read package.json to get version
const packageJsonPath = join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
const version = packageJson.version;

// Update version.ts with the current version
const versionTsPath = join(__dirname, '..', 'src', 'version.ts');
const versionContent = `// Export package version
// This file is generated/updated at build time
export const version: string = '${version}';
`;

writeFileSync(versionTsPath, versionContent, 'utf-8');
console.log(`Updated version.ts with version ${version}`);
