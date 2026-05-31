import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTagProps = {
	label?: string;
	semantic?: string;
	behavior?: string;
	emphasis?: string;
	noText?: boolean;
	overflow?: boolean;
	disabled?: boolean;
	checked?: boolean;
	showCheckState?: boolean;
	showIcon?: boolean;
	icon?: string;
};

const sharedProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: 'Text' },
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
	icon: {
		type: 'conditionalProp',
		key: 'Icon',
		guardKey: 'Show Icon',
		attrName: 'icon'
	},
	emphasis: {
		type: 'enum',
		key: 'Emphasis',
		value: { weak: 'weak', strong: 'strong' }
	},
	noText: { type: 'boolean', key: 'No Text' },
	overflow: { type: 'boolean', key: 'Overflow' }
};

const staticProps: Record<string, FigmaProp> = {
	...sharedProps,
	behavior: {
		type: 'enum',
		key: 'Behavior',
		value: {
			static: 'static',
			removable: 'removable'
		}
	}
};

const interactiveProps: Record<string, FigmaProp> = {
	...sharedProps,
	disabled: { type: 'boolean', key: 'Disabled' }
};

const interactiveToggleProps: Record<string, FigmaProp> = {
	...sharedProps,
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
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442-19514',
		// strong static
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19575',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:19630',
		// strong removable
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
