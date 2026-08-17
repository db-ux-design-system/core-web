import type { JSX } from '@db-ux/wc-core-components';

export const validCustomHeadingProps: JSX.DbCustomHeading = {
	semanticLevel: 2
};
// @ts-expect-error semanticLevel is required for custom headings.
export const invalidCustomHeadingProps: JSX.DbCustomHeading = {};
export const validHeadingH1Props: JSX.DbHeadingH1 = {};
export const validHeadingH2Props: JSX.DbHeadingH2 = {};
export const validHeadingH3Props: JSX.DbHeadingH3 = {};
export const validHeadingH4Props: JSX.DbHeadingH4 = {};
export const validHeadingH5Props: JSX.DbHeadingH5 = {};
export const validHeadingH6Props: JSX.DbHeadingH6 = {};
