import fs from 'fs';
import path from 'path';
import { describe, expect, test } from 'vitest';
import { copyDocs } from '../src/copy-docs';

describe('default', () => {
	test('check if docs are created', async () => {
		const outputPath = path.resolve('test/_db-ux-docs');
		copyDocs('test');

		const folders = fs
			.readdirSync(outputPath, { withFileTypes: true })
			.filter((entry) => entry.isDirectory());
		for (const folder of folders) {
			const folderPath = path.join(outputPath, folder.name);
			const files = fs.readdirSync(folderPath);
			expect(files.length).toBe(2);
		}
	});
});
