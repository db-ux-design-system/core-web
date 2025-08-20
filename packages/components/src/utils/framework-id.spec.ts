import { expect, test } from '@playwright/test';
import { readFileSync } from 'fs';
import { globSync } from 'glob';

/**
 * Test suite to verify that framework-specific useId hooks are properly
 * integrated for SSR compatibility
 */

test.describe('Framework-specific useId integration', () => {
	test('React components should use useId instead of uuid for ID generation', () => {
		const reactFiles = globSync('../../output/react/src/components/**/*.tsx');
		
		// Check that components with ID generation use useId
		const filesWithIdGeneration = reactFiles.filter(file => {
			const content = readFileSync(file, 'utf8');
			return content.includes('-${useId()}') || content.includes('-${uuid()}');
		});
		
		expect(filesWithIdGeneration.length).toBeGreaterThan(0);
		
		// Verify that React components use useId, not uuid
		filesWithIdGeneration.forEach(file => {
			const content = readFileSync(file, 'utf8');
			
			if (content.includes('-${')) {
				// Should use useId, not uuid
				expect(content).toContain('useId()');
				expect(content).toContain('import { useId } from "react"');
				
				// Should not use uuid for ID generation patterns
				expect(content).not.toMatch(/`[^`]*-\${uuid\(\)}`/);
			}
		});
	});

	test('Vue components should use useId instead of uuid for ID generation', () => {
		const vueFiles = globSync('../../output/vue/src/components/**/*.vue');
		
		// Check that components with ID generation use useId
		const filesWithIdGeneration = vueFiles.filter(file => {
			const content = readFileSync(file, 'utf8');
			return content.includes('-${useId()}') || content.includes('-${uuid()}');
		});
		
		expect(filesWithIdGeneration.length).toBeGreaterThan(0);
		
		// Verify that Vue components use useId, not uuid
		filesWithIdGeneration.forEach(file => {
			const content = readFileSync(file, 'utf8');
			
			if (content.includes('-${')) {
				// Should use useId, not uuid
				expect(content).toContain('useId()');
				expect(content).toContain('import { useId } from "vue"');
				
				// Should not use uuid for ID generation patterns
				expect(content).not.toMatch(/`[^`]*-\${uuid\(\)}`/);
			}
		});
	});

	test('Angular and Stencil components should still use uuid for ID generation', () => {
		const angularFiles = globSync('../../output/angular/src/**/*.ts');
		const stencilFiles = globSync('../../output/stencil/src/**/*.tsx');
		
		[...angularFiles, ...stencilFiles].forEach(file => {
			const content = readFileSync(file, 'utf8');
			
			if (content.includes('-${') && content.includes('uuid')) {
				// Should still use uuid, not useId (since these frameworks don't have useId)
				expect(content).toContain('uuid()');
				expect(content).not.toContain('useId()');
			}
		});
	});

	test('Specific components should have correct ID generation patterns', () => {
		// Test textarea component specifically
		const reactTextarea = readFileSync('../../output/react/src/components/textarea/textarea.tsx', 'utf8');
		expect(reactTextarea).toContain('`textarea-${useId()}`');
		expect(reactTextarea).toContain('import { useId } from "react"');
		
		const vueTextarea = readFileSync('../../output/vue/src/components/textarea/textarea.vue', 'utf8');
		expect(vueTextarea).toContain('`textarea-${useId()}`');
		expect(vueTextarea).toContain('import { useId } from "vue"');
	});
});