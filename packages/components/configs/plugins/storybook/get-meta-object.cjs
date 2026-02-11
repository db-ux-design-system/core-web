/**
 * Extracts and processes metadata for Storybook
 * @param {string} target - Target framework
 * @param {string} name - Story name
 * @param {Object} meta - Metadata object
 * @returns {{title: string, argTypes: Object}} Processed title and argTypes
 */
const extractMetadata = (target, name, meta) => {
	let title = name;
	let argTypes = {};

	if (meta?.useMetadata) {
		const metadata = meta.useMetadata;
		if (metadata.storybookTitle) {
			title = metadata.storybookTitle;
		}
		if (metadata.storybookArgTypes) {
			// Transform argTypes for Angular (convert event handlers)
			if (target === 'angular') {
				Object.entries(metadata.storybookArgTypes).forEach(
					([key, value]) => {
						if (key.startsWith('on') && value?.action) {
							const newKey = key.slice(2).toLowerCase();
							argTypes[newKey] = { ...value, action: newKey };
						} else {
							argTypes[key] = value;
						}
					}
				);
			} else {
				argTypes = metadata.storybookArgTypes;
			}
		}
	}

	return { title, argTypes };
};

/**
 * Generates the Storybook meta object for a component
 * @param {Object} params - Parameters object
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.componentName - Component name
 * @param {string} params.name - Story name
 * @param {Object} params.meta - Metadata object
 * @param {Array<string>} params.allImports - All imports
 * @returns {string} Generated meta object code
 */
const getMetaObject = ({ target, componentName, name, meta, allImports }) => {
	const { title, argTypes } = extractMetadata(target, name, meta);
	const filteredImports = allImports?.filter((imp) => imp !== componentName);

	const metaType =
		target === 'angular'
			? `${componentName}Props`
			: `typeof ${componentName}`;

	let decorators = '';

	if (target === 'angular' && filteredImports.length) {
		decorators = `
	decorators: [
		moduleMetadata({
			imports: [${filteredImports.join(',')}],
		}),
	],`;
	}

	return `
const meta: Meta<${metaType}> = {
	title: 'Components/${componentName}/${title}',
	component: ${componentName},
	${decorators}
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: ${JSON.stringify(argTypes)}
} satisfies Meta<${metaType}>;

export default meta;
type Story = StoryObj;`;
};

module.exports = { getMetaObject };
