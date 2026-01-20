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
 * Generates render function based on target framework
 * @param {string} target - Target framework (react, angular, vue)
 * @param {string} componentName - Component name
 * @param {string} componentNameLowercase - Lowercase component name
 * @returns {string} Render function code
 */
const getRenderFunction = (target, componentName, componentNameLowercase) => {
	if (target === 'react') {
		return `render: (properties) => (
		<${componentName} {...properties}>{properties.children}</${componentName}>
	),`;
	}

	if (target === 'angular') {
		const argsToTemplateString = '${argsToTemplate(args)}';
		const childrenString = '${children}';
		return `
	render: ({ children, ...args }) => ({
		props: args,
		template: \`<db-${componentNameLowercase} ${argsToTemplateString}>${childrenString}</db-${componentNameLowercase}>\`
	}),`;
	}

	if (target === 'vue') {
		const childrenString = '${args.default}';
		return `
		render: (args) => ({
		components: { ${componentName} },
		setup() {
			return { args };
		},
		template: \`
      <${componentName} v-bind="args">
      ${childrenString}
      </${componentName}>
    \`,
	}),`;
	}
};

/**
 * Generates the Storybook meta object for a component
 * @param {Object} params - Parameters object
 * @param {string} params.target - Target framework (react, angular, vue)
 * @param {string} params.componentNameLowercase - Lowercase component name
 * @param {string} params.componentName - Component name
 * @param {string} params.name - Story name
 * @param {Object} params.meta - Metadata object
 * @returns {string} Generated meta object code
 */
const getMetaObject = ({
	target,
	componentNameLowercase,
	componentName,
	name,
	meta
}) => {
	const { title, argTypes } = extractMetadata(target, name, meta);

	const render = getRenderFunction(
		target,
		componentName,
		componentNameLowercase
	);

	const metaType =
		target === 'angular'
			? `${componentName}Props`
			: `typeof ${componentName}`;

	return `
const meta: Meta<${metaType}> = {
	title: 'Components/${componentName}/${title}',
	component: ${componentName},
	${render}
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
