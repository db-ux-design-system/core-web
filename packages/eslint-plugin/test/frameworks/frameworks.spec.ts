import { ESLint } from 'eslint';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('Framework ESLint Integration', { timeout: 30000 }, () => {
	const eslint = new ESLint({
		overrideConfigFile: join(__dirname, 'eslint.config.js'),
		fix: true
	});

	it('should lint React test file', async () => {
		const results = await eslint.lintFiles([
			join(__dirname, 'react-test.tsx')
		]);
		expect(results[0].messages).toMatchSnapshot('react-errors');
		expect(results[0].output).toMatchSnapshot('react-fixed');
	});

	it('should lint Angular test file', async () => {
		const results = await eslint.lintFiles([
			join(__dirname, 'angular-test.html')
		]);
		expect(results[0].messages).toMatchSnapshot('angular-errors');
		expect(results[0].output).toMatchSnapshot('angular-fixed');
	});

	it('should lint Vue test file', async () => {
		const results = await eslint.lintFiles([
			join(__dirname, 'vue-test.vue')
		]);
		expect(results[0].messages).toMatchSnapshot('vue-errors');
		expect(results[0].output).toMatchSnapshot('vue-fixed');
	});
});
