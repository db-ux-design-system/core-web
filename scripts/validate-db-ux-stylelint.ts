import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = join(__dirname, '../packages/stylelint/build');

if (!existsSync(buildPath)) {
	execSync('npm run build --workspace=@db-ux/core-stylelint', {
		stdio: 'inherit'
	});
}
