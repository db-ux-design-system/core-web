const getPrimitive = (ts, kind) =>
	ts.SyntaxKind[kind.toString()].replace('Keyword', '').toLowerCase();

const getElementsRecursive = (node) => {
	if (node.expression) {
		return getElementsRecursive(node.expression);
	}

	return node.elements;
};

/**
 * Get string arrays like: export const LinkCurrentList = (['time', 'true', 'false', 'date', 'page', 'step', 'location'] as const)
 * @param initializer {object}
 */
const getStringArrayConst = (initializer) => {
	const elements = getElementsRecursive(initializer);
	const texts = elements?.map((elemNode) => `"${elemNode.text}"`);
	if (texts) {
		return {
			values: texts,
			type: 'literal'
		};
	}

	return undefined;
};

const getArrayType = (ts, type) => {
	try {
		let array;
		if (type.elementType.typeName) {
			array = type.elementType.typeName.escapedText;
		} else {
			array = getPrimitive(ts, type.elementType.kind);
		}
		return `${array}[]`;
	}catch (error) {
		console.error(error)
		return  "ERROR";
	}
};

/**
 * Get literals or type unions like: export const Test = "a" | "b";
 * @param ts {object} TypeScript ast
 * @param types {object[]}
 */
const getUnions = (ts, types) => {
	// For literals or type unions
	let typeUnions = false;
	let values = [];
	for (const innerType of types) {
		if (innerType.typeName) {
			typeUnions = true;
			values.push(innerType.typeName?.escapedText)
		} else if (innerType.literal) {
			values.push(`'${innerType.literal?.text}'`);
		} else if (innerType.elementType) {
			// Arrays
			values.push(getArrayType(ts, innerType));
		} else if (innerType.members) {
			const members = getMembers(ts, innerType.members);
			values = values.concat(members.values);
		} else if (innerType.kind) {
			values.push(getPrimitive(ts, innerType.kind));
		}else{
			values.push('ERROR');
		}
	}

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
 * @param ts {object} TypeScript ast
 * @param members {object[]}
 */
const getMembers = (ts, members) => {
	try {
		return ({
			values: members.map((member) => {
				const memberType = member.type;
				const comment = member.jsDoc?.map((doc) => doc.comment).join('\n');
				let type;

				if (memberType.typeName) {
					type = memberType?.typeName?.escapedText;
				} else if (memberType.types) {
					type = getUnions(ts, memberType.types);
				} else if (memberType.elementType) {
					type = getArrayType(ts, memberType);
				} else {
					type = getPrimitive(ts, memberType.kind);
				}

				let name = member.name?.escapedText;
				if (!name) {
					const keys = Array.from(member.locals.keys());
					name = keys.join(",")
				}

				return {
					name,
					type,
					comment
				};
			}),
			type: 'props'
		})
	}catch (error) {
		console.error(error);
		return {
			values: ['ERROR'],
			type: 'props'
		}
	}
};

export const analyzePhase = ({ ts, node, context }) => {
	if (!context.data) {
		context.data = {};
	}

	const sourceFile = ts.SyntaxKind['SourceFile'];

	if (node.kind === sourceFile) {
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
