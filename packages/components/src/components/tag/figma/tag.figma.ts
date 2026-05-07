import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTagProps = {
	semantic?: string;
	disabled?: boolean;
	checked?: boolean;
};

const semanticOnlyProps: Record<string, FigmaProp> = {
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
	}
};

const semanticDisabledProps: Record<string, FigmaProp> = {
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
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	}
};

const semanticDisabledCheckedProps: Record<string, FigmaProp> = {
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
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	checked: {
		type: 'enum',
		key: 'Checked',
		value: {
			False: false,
			True: true
		}
	}
};

// weak × static — text
export const weakStaticTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:18427'],
	props: semanticOnlyProps
};

// weak × static — icon-only / noText
export const weakStaticIconTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:18483'],
	props: semanticOnlyProps
};

// weak × interactive — text
export const weakInteractiveTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=15754:26043'],
	props: semanticDisabledProps
};

// weak × interactive — icon-only / noText
export const weakInteractiveIconTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=15754:26350'],
	props: semanticDisabledProps
};

// weak × interactive-toggle — text
export const weakInteractiveToggleTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:18526'],
	props: semanticDisabledCheckedProps
};

// weak × interactive-toggle — icon-only / noText
export const weakInteractiveToggleIconTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:18803'],
	props: semanticDisabledCheckedProps
};

// weak × removable — text
export const weakRemovableTag: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19514',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19950'
	],
	props: semanticOnlyProps
};

// strong × interactive-toggle — text
export const strongInteractiveToggleTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:19673'],
	props: semanticDisabledCheckedProps
};

// strong × interactive — text
export const strongInteractiveTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=15767:31246'],
	props: semanticDisabledProps
};

// strong × interactive — icon-only / noText
export const strongInteractiveIconTag: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=15767:31553'],
	props: semanticDisabledProps
};

// strong × static / interactive
export const strongStaticTag: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19575',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19630',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:20661'
	],
	props: semanticOnlyProps
};
