import { visit } from 'unist-util-visit';

export default function transformLinks() {
	return (tree) => {
		visit(tree, 'link', (node) => {
			// Skip external links (https:// and http://)
			if (
				node.url.startsWith('https://') ||
				node.url.startsWith('http://')
			) {
				return;
			}

			// Transform .md links to kebab-case without extension
			if (node.url.includes('.md')) {
				// Split URL into parts (path, fragment, query)
				const hashIndex = node.url.indexOf('#');
				const queryIndex = node.url.indexOf('?');

				let basePath = node.url;
				let fragment = '';
				let query = '';

				// Extract fragment if present
				if (hashIndex !== -1) {
					fragment = node.url.slice(Math.max(0, hashIndex));
					basePath = node.url.slice(0, Math.max(0, hashIndex));
				}

				// Extract query if present (and not after fragment)
				if (
					queryIndex !== -1 &&
					(hashIndex === -1 || queryIndex < hashIndex)
				) {
					query = node.url.slice(
						queryIndex,
						Math.max(hashIndex === -1 ? undefined : hashIndex)
					);
					basePath = node.url.slice(0, Math.max(0, queryIndex));
				}

				// Only transform if basePath ends with .md
				if (basePath.endsWith('.md')) {
					// Handle relative paths with ./ prefix
					if (basePath.startsWith('./')) {
						basePath =
							'./' +
							basePath
								.slice(2) // Remove './'
								.replace(/\.md$/, '') // Remove .md extension
								.replaceAll(/([a-z])([A-Z])/g, '$1-$2') // CamelCase to kebab-case
								.toLowerCase();
					} else {
						// Handle simple .md files and other relative paths
						basePath = basePath
							.replace(/\.md$/, '') // Remove .md extension
							.replaceAll(/([a-z])([A-Z])/g, '$1-$2') // CamelCase to kebab-case
							.toLowerCase();
					}

					// Reconstruct URL with query and fragment
					node.url = basePath + query + fragment;
				}
			}

			// Transform specific relative paths to keep users within the patternhub context
			// This prevents users from being kicked out of their context when clicking links
			if (node.url.startsWith('../')) {
				// Transform ../../components/readme to the components section in patternhub
				if (node.url === '../../components/readme') {
					node.url = '/components';
				}
				// Transform ../../foundations/readme to the foundations section in patternhub
				else if (node.url === '../../foundations/readme') {
					node.url = '/foundations';
				}
				// Other relative paths can be mapped here as needed
				// For now, we preserve other ../ paths to maintain existing functionality
			}
		});
	};
}
