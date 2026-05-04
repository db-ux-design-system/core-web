import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaInfotextProps = {
	semantic?: string;
	size?: string;
};

export const infotexts: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4358',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4364',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4370',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4376',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4382',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4388',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4394',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4400',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4406',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4412',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4418',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4424',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4431',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4437',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4443',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4449',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4455',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4461',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4467',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4473',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4479',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4485',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4491',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:4497'
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
