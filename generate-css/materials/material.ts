import type { ColorPalette } from './color.ts';

export type MaterialName =
	| 'filled'
	| 'filled-1'
	| 'filled-2'
	| 'filled-3'
	| 'vibrant'
	| 'origin'
	| 'inverted'
	| 'semi-transparent'
	| 'transparent';

export type ContainerProp =
	| 'border'
	| 'borderVibrant'
	| 'borderDecorative'
	| 'bgDefault'
	| 'bgHovered'
	| 'bgPressed';

// Base text/visual colors are identical, so they share a single `on-bg` role.
// The "vibrant" text and visual roles are distinct and kept separate.
export type ContentProp =
	| 'onBgDefault'
	| 'onBgHovered'
	| 'onBgPressed'
	| 'textVibrant'
	| 'visualVibrant';

export type ContainerContrastProps = Record<ContainerProp, keyof ColorPalette>;
export type ContentContrastProps = Record<ContentProp, keyof ColorPalette>;

export type MaterialConfig = {
	container: ContainerContrastProps;
	content: ContentContrastProps;
	highContrast?: Partial<{
		container: Partial<ContainerContrastProps>;
		content: Partial<ContentContrastProps>;
	}>;
};

export const containerPropToCss = (
	prefix = ''
): Record<ContainerProp, string> => ({
	border: `--db-${prefix}border`,
	borderVibrant: `--db-${prefix}border-vibrant`,
	borderDecorative: `--db-${prefix}border-decorative`,
	bgDefault: `--db-${prefix}bg-default`,
	bgHovered: `--db-${prefix}bg-hovered`,
	bgPressed: `--db-${prefix}bg-pressed`
});

export const contentPropToCss = (prefix = ''): Record<ContentProp, string> => ({
	onBgDefault: `--db-${prefix}on-bg-default`,
	onBgHovered: `--db-${prefix}on-bg-hovered`,
	onBgPressed: `--db-${prefix}on-bg-pressed`,
	textVibrant: `--db-${prefix}text-vibrant`,
	visualVibrant: `--db-${prefix}visual-vibrant`
});

// Shared "vibrant"/"decorative" roles are global (identical across every
// material and color). Base values follow WCAG AA; the Max (data-contrast=more)
// values are applied via each material's highContrast overrides below.
const sharedContainerRoles: Pick<
	ContainerContrastProps,
	'borderVibrant' | 'borderDecorative'
> = {
	borderVibrant: 7,
	borderDecorative: 11
};

// text-vibrant (WCAG text/vibrant, darker than visual-vibrant) and
// visual-vibrant (WCAG visual/vibrant) are distinct roles.
const sharedContentRoles: Pick<
	ContentContrastProps,
	'textVibrant' | 'visualVibrant'
> = {
	textVibrant: 6,
	visualVibrant: 7
};

// High-contrast (WCAG Max) overrides for the shared roles.
const sharedContainerRolesHc: Partial<ContainerContrastProps> = {
	borderVibrant: 5,
	borderDecorative: 1
};

const sharedContentRolesHc: Partial<ContentContrastProps> = {
	textVibrant: 4,
	visualVibrant: 5
};

// on-bg/basic token: default palette/1, hovered palette/5, pressed palette/2.
const filledContent: ContentContrastProps = {
	onBgDefault: 1,
	onBgHovered: 5,
	onBgPressed: 2,
	...sharedContentRoles
};

export const materials: Record<MaterialName, MaterialConfig> = {
	filled: {
		container: {
			// bg/basic/level-1 token: default palette/14, hovered palette/11,
			// pressed palette/10.
			border: 1,
			bgDefault: 14,
			bgHovered: 11,
			bgPressed: 10,
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	'filled-1': {
		container: {
			border: 11,
			bgDefault: 14,
			bgHovered: 11,
			bgPressed: 10,
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	'filled-2': {
		container: {
			border: 11,
			bgDefault: 13,
			bgHovered: 12,
			bgPressed: 11,
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	'filled-3': {
		container: {
			border: 11,
			bgDefault: 12,
			bgHovered: 11,
			bgPressed: 10,
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	'semi-transparent': {
		container: {
			border: 'transparent-full-default',
			bgDefault: 'transparent-semi-default',
			bgHovered: 'transparent-semi-hovered',
			bgPressed: 'transparent-semi-pressed',
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	transparent: {
		container: {
			border: 'transparent-full-default',
			bgDefault: 'transparent-full-default',
			bgHovered: 'transparent-full-hovered',
			bgPressed: 'transparent-full-pressed',
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: filledContent
	},
	vibrant: {
		container: {
			// bg/vibrant token: default palette/9, hovered palette/12,
			// pressed palette/10.
			border: 1,
			bgDefault: 9,
			bgHovered: 12,
			bgPressed: 10,
			...sharedContainerRoles
		},
		highContrast: {
			container: { border: 6, ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: {
			// on-bg/vibrant token: default palette/1, hovered palette/4,
			// pressed palette/2.
			onBgDefault: 1,
			onBgHovered: 4,
			onBgPressed: 2,
			...sharedContentRoles
		}
	},
	inverted: {
		container: {
			// bg/inverted token: default palette/1, hovered palette/5,
			// pressed palette/2.
			border: 4,
			bgDefault: 1,
			bgHovered: 5,
			bgPressed: 2,
			...sharedContainerRoles
		},
		highContrast: {
			container: { ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: {
			// on-bg/inverted token: default palette/14, hovered palette/11,
			// pressed palette/13.
			onBgDefault: 14,
			onBgHovered: 11,
			onBgPressed: 13,
			...sharedContentRoles
		}
	},
	origin: {
		container: {
			border: 'on-origin-default',
			bgDefault: 'origin-default',
			bgHovered: 'origin-hovered',
			bgPressed: 'origin-pressed',
			...sharedContainerRoles
		},
		highContrast: {
			container: { ...sharedContainerRolesHc },
			content: { ...sharedContentRolesHc }
		},
		content: {
			onBgDefault: 'on-origin-default',
			onBgHovered: 'on-origin-hovered',
			onBgPressed: 'on-origin-pressed',
			...sharedContentRoles
		}
	}
};
