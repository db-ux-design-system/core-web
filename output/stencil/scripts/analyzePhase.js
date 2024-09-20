const getPrimitive = (ts, kind) =>
	ts.SyntaxKind[kind.toString()].replace('Keyword', '').toLowerCase();

/**
 * Get string arrays like: export const LinkCurrentList = (['time', 'true', 'false', 'date', 'page', 'step', 'location'] as const)
 * @param initializer {object}
 */
const getStringArrayConst = (initializer) => {
	const texts = initializer.expression?.expression?.elements?.map(
		(elemNode) => `"${elemNode.text}"`
	);
	if (texts) {
		return {
			values: texts,
			type: 'literal'
		};
	}

	return undefined;
};

/**
 * Get literals or type unions like: export const Test = "a" | "b";
 * @param ts {object} Typescript ast
 * @param types {object[]}
 */
const getUnions = (ts, types) => {
	// For literals or type unions
	let typeUnions = false;
	const values = types.map((innerType) => {
		if (innerType.typeName) {
			typeUnions = true;
			return innerType.typeName?.escapedText;
		} else if (innerType.literal) {
			return `'${innerType.literal?.text}'`;
		} else if (innerType.kind) {
			return getPrimitive(ts, innerType.kind);
		}

		return 'ERROR';
	});
	return {
		values,
		type: typeUnions ? 'union' : 'literal'
	};
};

/**
 * Get typeof list like: export type LinkCurrentType = (typeof LinkCurrentList)[number];

 * @param type {object}
 */
const getTypeOfList = (type) => {
	const resolvedType = type.objectType?.type?.exprName?.escapedText;
	if (resolvedType) {
		return {
			type: resolvedType
		};
	}

	return undefined;
};

/**
 * Get primitives like: string, boolean, etc.
 * @param ts {object} Typescript ast
 * @param members {object[]}
 */
const getMembers = (ts, members) => {
	return {
		values: members.map((member) => {
			const memberType = member.type;
			let type;

			if (memberType.typeName) {
				type = memberType?.typeName?.escapedText;
			} else if (memberType.types) {
				type = getUnions(ts, memberType.types);
			} else {
				type = getPrimitive(ts, memberType.kind);
			}

			return {
				name: member.name.escapedText,
				type
			};
		}),
		type: 'props'
	};
};

export const analyzePhase = ({ ts, node, moduleDoc, context }) => {
	if (!context.data) {
		context.data = {};
	}

	// ts.SyntaxKind.Bundle
	if (node.kind === 312) {
		if (node.symbol.exports) {
			node.symbol.exports.forEach((localExport) => {
				const name = localExport.escapedName;
				const declarations =
					localExport.value?.declarations ?? localExport.declarations;

				if (declarations) {
					declarations.forEach(({ initializer, type }) => {
						if (initializer) {
							const stringArray =
								getStringArrayConst(initializer);
							if (stringArray) {
								context.data[name] = stringArray;
							}
						} else if (type) {
							if (type.types) {
								context.data[name] = getUnions(ts, type.types);
							} else if (type.members) {
								context.data[name] = getMembers(
									ts,
									type.members
								);
							} else {
								const typeOfList = getTypeOfList(type);
								if (typeOfList) {
									context.data[name] = typeOfList;
								}
							}
						}
					});
				}
			});
		}
	}
};
