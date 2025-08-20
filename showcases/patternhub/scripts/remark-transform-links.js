import { visit } from 'unist-util-visit';

export default function transformLinks() {
	return (tree) => {
		visit(tree, 'link', (node) => {
			// Skip external links (https:// and http://)
			if (node.url.startsWith('https://') || node.url.startsWith('http://')) {
				return;
			}

			// Transform .md links to kebab-case without extension
			if (node.url.endsWith('.md')) {
				// Handle relative paths with ./ prefix
				if (node.url.startsWith('./')) {
					node.url = './' + node.url
						.slice(2) // Remove './'
						.replace(/\.md$/, '') // Remove .md extension
						.replaceAll(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
						.toLowerCase();
				} else {
					// Handle simple .md files and other relative paths
					node.url = node.url
						.replace(/\.md$/, '') // Remove .md extension
						.replaceAll(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
						.toLowerCase();
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
