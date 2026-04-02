import type { ColorPalette } from './color.ts';

export type MaterialName =
	| 'filled'
	| 'vibrant'
	| 'origin'
	| 'inverted'
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

export const containerPropToCss = (
	prefix = ''
): Record<ContainerProp, string> => ({
	border: `--db-${prefix}border`,
	bgDefault: `--db-${prefix}bg-default`,
	bgHovered: `--db-${prefix}bg-hovered`,
	bgPressed: `--db-${prefix}bg-pressed`
});

export const contentPropToCss = (prefix = ''): Record<ContentProp, string> => ({
	textDefault: `--db-${prefix}text-default`,
	textHovered: `--db-${prefix}text-hovered`,
	textPressed: `--db-${prefix}text-pressed`,
	visualDefault: `--db-${prefix}visual-default`,
	visualHovered: `--db-${prefix}visual-hovered`,
	visualPressed: `--db-${prefix}visual-pressed`
});

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
	inverted: {
		container: {
			max: {
				border: 4,
				bgDefault: 1,
				bgHovered: 5,
				bgPressed: 1
			},
			min: {
				border: 7,
				bgDefault: 5,
				bgHovered: 4,
				bgPressed: 5
			}
		},
		content: {
			max: {
				textDefault: 14,
				textHovered: 11,
				textPressed: 14,
				visualDefault: 14,
				visualHovered: 11,
				visualPressed: 14
			},
			min: {
				textDefault: 10,
				textHovered: 7,
				textPressed: 10,
				visualDefault: 9,
				visualHovered: 6,
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
