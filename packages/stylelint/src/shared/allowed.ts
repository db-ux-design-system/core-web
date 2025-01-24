export type AllowedType = {
	includes?: string[];
	exact?: string[];
	startsWith?: string[];
};

export const isAllowed = (
	value: string | string[],
	allowedValues: AllowedType
): boolean => {
	const splitValue = value instanceof Array ? value : value.split(' ');

	const allowMap = splitValue.map(
		(val) =>
			allowedValues.exact?.includes(val) ||
			!!allowedValues.startsWith?.find((sw) => val.startsWith(sw)) ||
			!!allowedValues.includes?.find((include) => val.includes(include))
	);

	return allowMap.every((val) => val);
};
