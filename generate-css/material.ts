import type { ColorPalette } from './color.ts';

export type MaterialName =
	| 'filled'
	| 'vibrant'
	| 'origin'
	| 'semi-transparent'
	| 'transparent';

export type ContrastLevel = 'min' | 'max';

export type ContainerProp = 'border' | 'bgDefault' | 'bgHovered' | 'bgPressed';

export type ContentProp =
	| 'textDefault'
	| 'textHovered'
	| 'textPressed'
	| 'visualDefault'
	| 'visualHovered'
	| 'visualPressed';

export type ContainerContrastProps = Record<ContainerProp, keyof ColorPalette>;
export type ContentContrastProps = Record<ContentProp, keyof ColorPalette>;

export type MaterialConfig = {
	container:
		| Record<ContrastLevel, ContainerContrastProps>
		| ContainerContrastProps;
	content: Record<ContrastLevel, ContentContrastProps> | ContentContrastProps;
	highContrast?: Partial<{
		container: Partial<
			Record<ContrastLevel, Partial<ContainerContrastProps>>
		>;
		content: Partial<Record<ContrastLevel, Partial<ContentContrastProps>>>;
	}>;
};

export const containerPropToCss: Record<ContainerProp, string> = {
	border: '--db-border',
	bgDefault: '--db-bg-default',
	bgHovered: '--db-bg-hovered',
	bgPressed: '--db-bg-pressed'
};

export const contentPropToCss: Record<ContentProp, string> = {
	textDefault: '--db-text-default',
	textHovered: '--db-text-hovered',
	textPressed: '--db-text-pressed',
	visualDefault: '--db-visual-default',
	visualHovered: '--db-visual-hovered',
	visualPressed: '--db-visual-pressed'
};

const filledContent: Record<ContrastLevel, ContentContrastProps> = {
	max: {
		textDefault: 1,
		textHovered: 5,
		textPressed: 1,
		visualDefault: 1,
		visualHovered: 5,
		visualPressed: 1
	},
	min: {
		textDefault: 6,
		textHovered: 3,
		textPressed: 6,
		visualDefault: 7,
		visualHovered: 4,
		visualPressed: 7
	}
};

export const materials: Record<MaterialName, MaterialConfig> = {
	filled: {
		container: {
			max: {
				border: 1,
				bgDefault: 14,
				bgHovered: 11,
				bgPressed: 14
			},
			min: {
				border: 11,
				bgDefault: 14,
				bgHovered: 11,
				bgPressed: 14
			}
		},
		highContrast: {
			container: {
				min: { border: 6 }
			}
		},
		content: filledContent
	},
	'semi-transparent': {
		container: {
			border: 'transparent-full-default',
			bgDefault: 'transparent-semi-default',
			bgHovered: 'transparent-semi-hovered',
			bgPressed: 'transparent-semi-pressed'
		},
		highContrast: {
			container: {
				min: { border: 6 }
			}
		},
		content: filledContent
	},
	transparent: {
		container: {
			border: 'transparent-full-default',
			bgDefault: 'transparent-full-default',
			bgHovered: 'transparent-full-hovered',
			bgPressed: 'transparent-full-pressed'
		},
		highContrast: {
			container: {
				min: { border: 6 }
			}
		},
		content: filledContent
	},
	vibrant: {
		container: {
			max: {
				border: 1,
				bgDefault: 9,
				bgHovered: 12,
				bgPressed: 9
			},
			min: {
				border: 7,
				bgDefault: 9,
				bgHovered: 12,
				bgPressed: 9
			}
		},
		highContrast: {
			container: {
				min: { border: 6 }
			}
		},
		content: {
			max: {
				textDefault: 6,
				textHovered: 1,
				textPressed: 6,
				visualDefault: 6,
				visualHovered: 1,
				visualPressed: 6
			},
			min: {
				textDefault: 8,
				textHovered: 5,
				textPressed: 8,
				visualDefault: 9,
				visualHovered: 5,
				visualPressed: 9
			}
		}
	},
	origin: {
		container: {
			border: 'on-origin-default',
			bgDefault: 'origin-default',
			bgHovered: 'origin-hovered',
			bgPressed: 'origin-pressed'
		},
		content: {
			textDefault: 'on-origin-default',
			textHovered: 'on-origin-hovered',
			textPressed: 'on-origin-pressed',
			visualDefault: 'on-origin-default',
			visualHovered: 'on-origin-hovered',
			visualPressed: 'on-origin-pressed'
		}
	}
};
