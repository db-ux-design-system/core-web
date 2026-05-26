import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaInfotextProps = {
	semantic?: string;
	size?: string;
	showIcon?: boolean;
};

const infotextProps: Record<string, FigmaProp> = {
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
	showIcon: { type: 'boolean', key: 'Show Icon' },
	size: {
		type: 'enum',
		key: 'Size',
		value: { '(Def) Medium': 'medium', Small: 'small' }
	}
};

export const infotexts: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4357',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4430'
	],
	props: infotextProps
};
