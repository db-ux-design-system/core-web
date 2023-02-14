/**
 * @param options {string[]}
 * @param elements {{name:string, value?:string, elements?:any[]}[]}
 */
const getUnionElements = (options, elements) => {
	if (elements) {
		elements.forEach((elem) => {
			options.push(
				elem.name === 'literal'
					? elem.value
					: getUnionElements(options, elem.elements)
			);
		});
	}
};

export default getUnionElements;
