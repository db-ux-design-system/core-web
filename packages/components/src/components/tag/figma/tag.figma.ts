import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTagProps = {
	semantic?: string;
	disabled?: boolean;
	checked?: boolean;
};

const FIGMA_FILE = 'mlJ6R0GkfR15a93KSlqXtB';

const semanticProp: FigmaProp = {
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
};

const disabledProp: FigmaProp = {
	type: 'enum',
	key: 'Disabled',
	value: {
		False: false,
		True: true
	}
};

const checkedProp: FigmaProp = {
	type: 'enum',
	key: 'Checked',
	value: {
		False: false,
		True: true
	}
};

// weak × static — text  (14442-18427)
export const weakStaticTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-18427`],
	props: { semantic: semanticProp }
};

// weak × static — icon-only / noText  (14442-18483)
export const weakStaticIconTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-18483`],
	props: { semantic: semanticProp }
};

// weak × interactive — text  (15754-26043)
export const weakInteractiveTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=15754-26043`],
	props: { semantic: semanticProp, disabled: disabledProp }
};

// weak × interactive — icon-only / noText  (15754-26350)
export const weakInteractiveIconTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=15754-26350`],
	props: { semantic: semanticProp, disabled: disabledProp }
};

// weak × interactive-toggle — text  (14442-18526)
export const weakInteractiveToggleTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-18526`],
	props: {
		semantic: semanticProp,
		disabled: disabledProp,
		checked: checkedProp
	}
};

// weak × interactive-toggle — icon-only / noText  (14442-18803)
export const weakInteractiveToggleIconTag: FigmaCodeConnect = {
	urls: [
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-18803`,
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=15767-31246`,
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=15767-31553`
	],
	props: {
		semantic: semanticProp,
		disabled: disabledProp,
		checked: checkedProp
	}
};

// weak × removable — text  (14442-19514)
export const weakRemovableTag: FigmaCodeConnect = {
	urls: [
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-19514`,
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-19950`
	],
	props: { semantic: semanticProp }
};

// strong × interactive-toggle — text  (14442-19673)
// strong × interactive-toggle — text checked  (14442-19950)
// strong × static  (14442-20661)
export const strongInteractiveToggleTag: FigmaCodeConnect = {
	urls: [`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-19673`],
	props: {
		semantic: semanticProp,
		disabled: disabledProp,
		checked: checkedProp
	}
};

export const strongStaticTag: FigmaCodeConnect = {
	urls: [
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-19575`,
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-19630`,
		`https://www.figma.com/design/${FIGMA_FILE}?node-id=14442-20661`
	],
	props: { semantic: semanticProp }
};
