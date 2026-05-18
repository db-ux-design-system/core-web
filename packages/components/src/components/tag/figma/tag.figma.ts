import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTagProps = {
	label?: string;
	semantic?: string;
	disabled?: boolean;
	checked?: boolean;
	showCheckState?: boolean;
	showIcon?: boolean;
	icon?: string;
};

const semanticProp: Record<string, FigmaProp> = {
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

const labelProp: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: 'Text' }
};

const iconProps: Record<string, FigmaProp> = {
	showIcon: { type: 'boolean', key: 'Show Icon' },
	icon: {
		type: 'conditionalProp',
		key: 'Icon',
		guardKey: 'Show Icon',
		attrName: 'icon'
	}
};

const staticProps: Record<string, FigmaProp> = {
	...labelProp,
	...semanticProp,
	...iconProps
};

const interactiveProps: Record<string, FigmaProp> = {
	...labelProp,
	...semanticProp,
	...iconProps,
	disabled: { type: 'boolean', key: 'Disabled' }
};

const interactiveToggleProps: Record<string, FigmaProp> = {
	...labelProp,
	...semanticProp,
	...iconProps,
	disabled: { type: 'boolean', key: 'Disabled' },
	checked: { type: 'boolean', key: 'Checked' },
	showCheckState: { type: 'boolean', key: 'Show Check State' }
};

// static + removable (both weak and strong)
export const staticTag: FigmaCodeConnect = {
	urls: [
		// weak static text
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:18427',
		// weak static icon
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:18483',
		// weak removable
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19514',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19950',
		// strong static
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19575',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19630',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:20661'
	],
	props: staticProps
};

// interactive (both weak and strong, text and icon)
export const interactiveTag: FigmaCodeConnect = {
	urls: [
		// weak interactive text
		'https://www.figma.com/design/FIGMA_FILE?node-id=15754:26043',
		// weak interactive icon
		'https://www.figma.com/design/FIGMA_FILE?node-id=15754:26350',
		// strong interactive text
		'https://www.figma.com/design/FIGMA_FILE?node-id=15767:31246',
		// strong interactive icon
		'https://www.figma.com/design/FIGMA_FILE?node-id=15767:31553'
	],
	props: interactiveProps
};

// interactive-toggle (both weak and strong, text and icon)
export const interactiveToggleTag: FigmaCodeConnect = {
	urls: [
		// weak interactive-toggle text
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:18526',
		// weak interactive-toggle icon
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:18803',
		// strong interactive-toggle text
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19673'
	],
	props: interactiveToggleProps
};
