/**
 * @param options {string[]}
 * @param elements {{name:string, value?:string, elements?:any[]}[]}
 */
const getUnionElements = (options, elements) => {
	if (elements) {
		for (const element of elements) {
			options.push(
				element.name === 'literal'
					? element.value
					: getUnionElements(options, element.elements)
			);
		}
	}
};

export default getUnionElements;
