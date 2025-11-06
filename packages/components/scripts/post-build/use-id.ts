import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import path from 'path';

/**
 * Post-build script to replace uuid() calls with framework-specific useId() hooks
 * for SSR compatibility in React and Vue components.
 */

const processReactFiles = () => {
	const files = globSync('../../output/react/src/**/*.tsx');
	console.log(`Found ${files.length} React files to process`);
	
	files.forEach(filePath => {
		let content = readFileSync(filePath, 'utf8');
		let modified = false;
		
		// Check if file uses uuid for ID generation
		if (content.includes('uuid()') && content.includes('-${uuid()}')) {
			console.log(`Processing file: ${filePath}`);
			
			// Add useId import if not already present
			if (!content.includes('useId') && !content.includes('import { useId }')) {
				console.log('Adding useId import');
				content = content.replace(
					/import \* as React from "react";/,
					'import * as React from "react";\nimport { useId } from "react";'
				);
				modified = true;
			}
			
			// Replace uuid() calls with useId() in ID generation patterns
			const beforeReplace = content;
			content = content.replace(
				/`([^`]*)-\$\{uuid\(\)\}`/g,
				'`$1-${useId()}`'
			);
			if (content !== beforeReplace) {
				console.log('Replaced uuid() with useId()');
				modified = true;
			}
		}
		
		if (modified) {
			writeFileSync(filePath, content);
			console.log(`Updated React file: ${path.relative(process.cwd(), filePath)}`);
		}
	});
};

const processVueFiles = () => {
	const files = globSync('../../output/vue/src/**/*.vue');
	
	files.forEach(filePath => {
		let content = readFileSync(filePath, 'utf8');
		let modified = false;
		
		// Check if file uses uuid for ID generation
		if (content.includes('uuid()') && content.includes('-${uuid()}')) {
			// Add useId import if not already present
			if (!content.includes('useId')) {
				// Find existing imports and add useId
				content = content.replace(
					/(import.*from.*vue.*)/,
					'$1\nimport { useId } from "vue";'
				);
				modified = true;
			}
			
			// Replace uuid() calls with useId() in ID generation patterns
			content = content.replace(
				/`([^`]*)-\$\{uuid\(\)\}`/g,
				'`$1-${useId()}`'
			);
			modified = true;
		}
		
		if (modified) {
			writeFileSync(filePath, content);
			console.log(`Updated Vue file: ${path.relative(process.cwd(), filePath)}`);
		}
	});
};

export default function UseId() {
	// Run the post-processing
	console.log('🔄 Processing React files for useId integration...');
	try {
		processReactFiles();
	} catch (error) {
		console.error('Error processing React files:', error);
	}

	console.log('🔄 Processing Vue files for useId integration...');
	try {
		processVueFiles();
	} catch (error) {
		console.error('Error processing Vue files:', error);
	}

	console.log('✅ Post-build useId processing completed!');
}