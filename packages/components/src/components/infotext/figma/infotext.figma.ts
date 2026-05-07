import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaInfotextProps = {
	semantic?: string;
	size?: string;
};

export const infotexts: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4357',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4430'
	],
	props: {
		semantic: {
			type: 'enum',
			key: 'Semantic',
			value: {
				'(Def) Adaptive': 'adaptive',
				Critical: 'critical',
				Informational: 'informational',
				Neutral: 'neutral',
				Successful: 'successful',
				Warning: 'warning'
			}
		},
		size: {
			type: 'enum',
			key: 'Size',
			value: {
				'(Def) Medium': 'medium',
				Small: 'small'
			}
		}
	}
};
