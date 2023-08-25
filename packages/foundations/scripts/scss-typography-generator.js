const prefix = 'db';

const fileHeader = `
@use "variables" as *;
@use "icon/icons.helpers" as icon-helper;
@use "helpers/functions" as functions;
// Do not edit directly
// Generated on
// ${new Date().toString()}
`;

const getShortSize = (size) => {
	if (size === '3xlarge') {
		return '3xl';
	}

	if (size === '2xlarge') {
		return '2xl';
	}

	if (size === 'xlarge') {
		return 'xl';
	}

	if (size === 'large') {
		return 'lg';
	}

	if (size === 'medium') {
		return 'md';
	}

	if (size === 'small') {
		return 'sm';
	}

	if (size === 'xsmall') {
		return 'xs';
	}

	if (size === '2xsmall') {
		return '2xs';
	}

	if (size === '3xsmall') {
		return '3xs';
	}

	return size;
};

/**
 *
 * @param properties {{scale: string, textType:string, size:string, sSize:string, isHeadline:boolean, mQuery: string}}
 */
const getMediaQueryProperties = (properties) => {
	const { textType, sSize, scale, size, isHeadline, mQuery } = properties;
	let result = `--db-type-${textType}-font-size-${sSize}: #{$${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-font-size};
	--db-type-${textType}-line-height-${sSize}: #{$${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-line-height};
	`;

	if (!isHeadline) {
		result += `
	--db-base-icon-size-${sSize}: "#{icon-helper.get-icon-size(icon-helper.get-icon-font-size($${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-font-size,
	$${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-line-height))}";
	--db-base-icon-font-size-${sSize}: #{functions.to-rem(icon-helper.get-icon-font-size($${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-font-size,
	$${prefix}-typography-${scale}-${mQuery}-${textType}-${size}-line-height))};
		`;
	}

	return result;
};

const getSizeProperties = (scale, textType, size, mQuery) => {
	const isHeadline = textType === 'headline';
	const sSize = getShortSize(size);
	return getMediaQueryProperties({
		scale,
		size,
		textType,
		sSize,
		isHeadline,
		mQuery
	});
};

const generateTypography = (typography) => {
	let allClasses = fileHeader;

	// ScaleTypeKey = [regular, functional, expressive]
	for (const scaleTypeKey of Object.keys(typography)) {
		const scaleObject = typography[scaleTypeKey];
		const mediaQueryKeys = Object.keys(scaleObject);
		if (mediaQueryKeys.length > 0) {
			// Desktop
			const firstMediaQueryKey = mediaQueryKeys[0];
			const firstMediaQueryObject = scaleObject[firstMediaQueryKey];
			// TextTypeKey = [headline, body]
			for (const textTypeKey of Object.keys(firstMediaQueryObject)) {
				const textTypeObject = firstMediaQueryObject[textTypeKey];
				// SizeKey = [3xlarge - 3xsmall]
				allClasses += `
%${prefix}-typography-${textTypeKey}-${scaleTypeKey}{
	`;
				for (const mQuery of ['mobile', 'tablet', 'desktop']) {
					if (mQuery !== 'mobile') {
						allClasses += `@media only screen and (min-width: ${
							mQuery === 'tablet'
								? '#{$db-screens-s}'
								: '#{$db-screens-m}'
						}) {
	`;
					}

					for (const sizeKey of Object.keys(textTypeObject)) {
						allClasses += getSizeProperties(
							scaleTypeKey,
							textTypeKey,
							sizeKey,
							mQuery
						);
					}

					if (mQuery !== 'mobile') {
						allClasses += `}

	`;
					}
				}

				allClasses += `
}
`;
			}
		}
	}

	return allClasses;
};

module.exports = generateTypography;
