const outputFolder = 'output';
const astroDirPath = `../../${outputFolder}/astro`;
const astroStylesDirPath = `${astroDirPath}/styles`;

const findAllSlots = (nodes) => {
	const result = [];

	const traverse = (currentNode) => {
		if (
			currentNode.name === 'Slot' &&
			currentNode.properties.name &&
			!result.includes(currentNode.properties.name)
		) {
			result.push(currentNode.properties.name);
		}
		if (currentNode.children) {
			currentNode.children.forEach(traverse);
			if (currentNode.meta.else) {
				traverse(currentNode.meta.else);
			}
		}
	};

	for (const node of nodes) {
		traverse(node);
	}
	return result;
};

const getRootProps = (props) => {
	return props?.length ? '{...Astro.props}' : '';
};

const isEvent = (prop) =>
	prop.length > 2 &&
	prop.startsWith('on') &&
	prop[2] === prop[2].toUpperCase();

module.exports = {
	outputFolder,
	astroDirPath,
	astroStylesDirPath,
	findAllSlots,
	getRootProps,
	isEvent
};
