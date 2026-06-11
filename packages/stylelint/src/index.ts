import useBorderColor from './rules/use-border-color.js';
import useBorderRadius from './rules/use-border-radius.js';
import useBorderWidth from './rules/use-border-width.js';
import useSizing from './rules/use-sizing.js';
import useSpacings from './rules/use-spacings.js';

const allRules = [
	useSpacings,
	useBorderRadius,
	useBorderWidth,
	useBorderColor,
	useSizing
];

export default allRules;
