const unionSeperator = ' | ';

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
			const resolvedType = `${foundType.values.join(unionSeperator)}`;

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
 * @param name {string}
 * @param type {string}
 * @return {{resolvedType, name, type}}
 */
const resolveProp = (resolvedData, name, type) => {
	if (type !== type?.toLowerCase()) {
		// This isn't a primitive like string, boolean, etc.
		const foundData = resolvedData[type];
		let resolvedType = type;
		if (foundData) {
			resolvedType = foundData.resolvedType;
		} else {
			warn('resolveProp', `Cannot find ${type}`);
		}

		return { name, type, resolvedType };
	} else {
		return { name, type, resolvedType: type };
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
			values: obj.values.map(({ name, type }) => {
				if (type instanceof Object) {
					// In this case we have a literal or union
					return {
						name,
						type,
						resolvedType: type.values
							.map((val) => {
								return resolveProp(resolvedData, '', val)
									.resolvedType;
							})
							.join(unionSeperator)
					};
				} else {
					return resolveProp(resolvedData, name, type);
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
		obj.values.forEach((type) => {
			const foundProp = resolvedProps[type];
			if (foundProp) {
				resolvedValues = resolvedValues.concat(foundProp.values);
			} else {
				const foundData = resolvedData[type];
				if (foundData) {
					resolvedValues.push({ ...foundData, name: type });
				} else {
					unresolvedUnions.push(type);
				}
			}
		});

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
	manifestValues.map((manifestValue) => {
		if (!manifestValue.type) {
			// those are methods
			return manifestValue;
		}

		let text = manifestValue.type.text;
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
		return { ...manifestValue, type: { text } };
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
		.filter(
			// We just need the .tsx files for elements
			(module) => module.path.endsWith('.tsx')
		)
		.map((module) => {
			const declarations = module.declarations.map((declaration) => {
				const members = resolveManifestTypes(
					resolvedUnions,
					declaration.members
				);
				const attributes = resolveManifestTypes(
					resolvedUnions,
					declaration.attributes
				);

				return { ...declaration, members, attributes };
			});

			return { ...module, declarations };
		});

	if (postFn) {
		postFn({ customElementsManifest, context });
	}
};
