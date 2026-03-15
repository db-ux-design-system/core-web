const unionSeparator = ' | ';

const warn = (fnName, message) => {
	console.warn('packageLinkPhase', fnName, message);
};

/**
 * Filters collected data by 3 types to resolve them later on
 * @param data
 * @return {{resolvedUnions: {}, resolvedData: {}, resolvedProps: {}}}
 */
const getFilteredContextData = (data) => {
	const resolvedData = {};
	const resolvedUnions = {};
	const resolvedProps = {};

	for (const [key, obj] of Object.entries(data)) {
		// We don't care about the state
		if (!key.endsWith('State')) {
			let currentType = obj.type;
			if (currentType === 'props') {
				resolvedProps[key] = { ...obj };
				continue;
			}
			if (currentType === 'union') {
				resolvedUnions[key] = { ...obj };
				continue;
			}

			let foundType = obj;
			if (currentType !== 'literal') {
				foundType = data[currentType];
			}
			let resolvedType;
			try {
				resolvedType = `${foundType.values.join(unionSeparator)}`;
			} catch (e) {
				console.error(key, obj);
				throw e;
			}

			resolvedData[key] = {
				...obj,
				resolvedType
			};
		}
	}

	return { resolvedData, resolvedProps, resolvedUnions };
};

/**
 * Resolves props by data
 * @param resolvedData {object}
 * @param value {object|string}
 * @return {{resolvedType, name, type}}
 */
const resolveProp = (resolvedData, value) => {
	let type = value.type ?? value;
	if (type !== type?.toLowerCase()) {
		// This isn't a primitive like string, boolean, etc.
		const foundData = resolvedData[type];
		let resolvedType = type;
		if (foundData) {
			resolvedType = foundData.resolvedType;
		} else {
			warn('resolveProp', `Cannot find ${type}`);
		}

		return { ...value, resolvedType };
	} else {
		return { ...value, resolvedType: type };
	}
};

/**
 * Iterates through all props and resolves them with data
 * @param resolvedData
 * @param resolvedProps
 */
const resolveAllProps = (resolvedData, resolvedProps) => {
	for (const [key, obj] of Object.entries(resolvedProps)) {
		resolvedProps[key] = {
			...obj,
			values: obj.values.map((value) => {
				const { name, type } = value;
				if (type instanceof Object) {
					// In this case we have a literal or union
					const resolvedType = type.values
						.map((val) => {
							return resolveProp(resolvedData, val).resolvedType;
						})
						.join(unionSeparator);
					return {
						...value,
						resolvedType
					};
				} else {
					return resolveProp(resolvedData, value);
				}
			})
		};
	}
};

/**
 * Iterates through all unions and resolves them with props and data
 * @param resolvedData
 * @param resolvedProps
 * @param resolvedUnions
 */
const resolveAllUnions = (resolvedData, resolvedProps, resolvedUnions) => {
	for (const [key, obj] of Object.entries(resolvedUnions)) {
		let resolvedValues = [];
		const unresolvedUnions = [];
		for (const type of obj.values) {
			if (type.type) {
				resolvedValues.push(type);
				continue;
			}

			const foundProp = resolvedProps[type];
			if (foundProp) {
				resolvedValues = resolvedValues.concat(foundProp.values);
			} else {
				const foundData = resolvedData[type];
				if (foundData) {
					resolvedValues.push({ ...foundData, name: type });
				} else if (type !== 'Omit') {
					unresolvedUnions.push(type);
				}
			}
		}

		resolvedUnions[key] = {
			...obj,
			resolvedValues,
			unresolvedUnions
		};
	}

	// after we resolve them we need to cross resolve the unions
	for (const [key, obj] of Object.entries(resolvedUnions)) {
		let resolvedValues = [...obj.resolvedValues];
		let unresolvedUnions = [...obj.unresolvedUnions];
		obj.unresolvedUnions.forEach((type) => {
			const foundUnion = resolvedUnions[type];
			if (foundUnion) {
				unresolvedUnions = unresolvedUnions.filter(
					(union) => union !== type
				);
				resolvedValues = resolvedValues.concat(
					foundUnion.resolvedValues
				);
			} else {
				warn('resolveAllUnions', `Cannot find type ${type}`);
			}
		});

		resolvedUnions[key] = {
			...obj,
			unresolvedUnions,
			resolvedValues
		};
	}
};

const resolveManifestTypes = (resolvedUnions, manifestValues) =>
	manifestValues?.map((manifestValue) => {
		if (!manifestValue.type) {
			// those are methods
			return manifestValue;
		}

		let text = manifestValue.type.text;
		let resolvedValue;
		if (text.includes('[')) {
			const splitText = text.includes("'")
				? text.split("'")
				: text.split('"');
			if (splitText.length === 3) {
				const type = splitText[0].replace('[', '');
				const prop = splitText[1];
				const foundUnion = resolvedUnions[type];
				if (foundUnion) {
					const foundResolvedValue = foundUnion.resolvedValues.find(
						(rValue) => rValue.name === prop
					);
					if (foundResolvedValue) {
						text = foundResolvedValue.resolvedType;
						resolvedValue = foundResolvedValue;
					} else {
						warn(
							'resolveManifestTypes',
							`Cannot find prop ${prop} for type ${type}`
						);
					}
				} else {
					warn('resolveManifestTypes', `Cannot find union ${type}`);
				}
			}
		}
		return {
			...manifestValue,
			type: { text },
			description: resolvedValue?.comment,
			resolvedValue
		};
	});

export const packageLinkPhase = (
	{ customElementsManifest, context },
	postFn
) => {
	const { resolvedProps, resolvedUnions, resolvedData } =
		getFilteredContextData(context.data);

	resolveAllProps(resolvedData, resolvedProps);
	resolveAllUnions(resolvedData, resolvedProps, resolvedUnions);

	customElementsManifest.modules = customElementsManifest.modules
		?.filter(
			// We just need the .tsx files for elements
			(module) => module.path.endsWith('.tsx')
		)
		.map((module) => {
			const declarations = module.declarations?.map((declaration) => {
				const members = resolveManifestTypes(
					resolvedUnions,
					declaration.members
				);
				const attributes = resolveManifestTypes(
					resolvedUnions,
					declaration.attributes
				);

				const slots = declaration.slots?.map((slot) => ({
					name: slot.name,
					description:
						resolvedUnions[
							`${declaration.name}Props`
						]?.resolvedValues.find(
							(value) => value.name === slot.name
						)?.comment || slot.description
				}));

				return { ...declaration, members, attributes, slots };
			});
			const path = module.path.split('/').at(-1);

			return { ...module, path, declarations };
		});

	if (postFn) {
		postFn({ customElementsManifest, context });
	}
};
