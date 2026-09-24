/**
 * Convert a px value to a rem string on a 16px base (matches the foundation's
 * px-to-rem helper: px * 0.0625). Rounds to 4 decimals to keep fractional
 * values (e.g. 10.67px -> 0.6669rem) precise without noise. `0` stays `0`.
 */
export const formatRemValue = (value: number): string => {
	if (value === 0) return '0';
	const rem = Math.round((value / 16) * 10000) / 10000;
	return `${rem}rem`;
};
