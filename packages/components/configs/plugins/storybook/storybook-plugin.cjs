const targetMapping = {
	react: {
		storyBookLib: 'react-vite'
	},
	angular: {
		storyBookLib: 'angular'
	},
	vue: {
		storyBookLib: 'vue3-vite'
	}
};

const getMetaObject = ({
	target,
	componentNameLowercase,
	componentName,
	name,
	meta
}) => {
	let title = name;
	let argTypes = {};

	if (meta?.useMetadata) {
		const metadata = meta.useMetadata;
		if (metadata.storybookTitle) {
			title = metadata.storybookTitle;
		}
		if (metadata.storybookArgTypes) {
			if (target === 'react') {
				argTypes = metadata.storybookArgTypes;
			} else {
				argTypes = Object.fromEntries(
					Object.entries(argTypes).map(([key, value]) => {
						if (key.startsWith('on') && value?.action) {
							const newKey = key.slice(2).toLowerCase();
							return [newKey, { ...value, action: newKey }];
						}
						return [key, value];
					})
				);
			}
		}
	}

	let render;

	if (target === 'react') {
		render = `render: (properties) => (
		<${componentName} {...properties}>{properties.children}</${componentName}>
	),`;
	} else if (target === 'angular') {
		const argsToTemplateString = '${argsToTemplate(args)}';
		const childrenString = '${children}';
		render = `	component: ${componentName},
	render: ({ children, ...args }) => ({
		props: args,
		template: \`<db-${componentNameLowercase} ${argsToTemplateString}>${childrenString}</db-${componentNameLowercase}>\`
	}),`;
	} else if (target === 'vue') {
		const childrenString = '${args.children}';
		render = `render: (args) => ({
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

	return `
const meta: Meta = {
	title: 'Components/${componentName}/${title}',
	${render}
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: ${JSON.stringify(argTypes)}
};

export default meta;
type Story = StoryObj;`;
};

const resolveImports = (imports, componentNameLowercase) => {
	let componentName;
	let allImports;

	if (imports.length > 0) {
		const componentImports = imports.filter((imp) =>
			imp.path.endsWith(`.lite`)
		);
		if (componentImports.length > 0) {
			const exampleComponentImport = imports.find((imp) =>
				imp.path.includes(componentNameLowercase)
			);
			const exampleComponentImports = Object.keys(
				exampleComponentImport.imports
			);
			if (exampleComponentImports.length > 0) {
				componentName = exampleComponentImports[0];
			}

			allImports = componentImports.map(
				(imp) => Object.keys(imp.imports)[0]
			);
		}
	}

	return { componentName, allImports };
};

const getStories = ({ target, name, fragment, meta }) => {
	const { children: examples } = fragment;

	let exampleNames;

	if (meta?.useMetadata?.storybookNames) {
		exampleNames = meta.useMetadata.storybookNames;
	}

	return examples
		.map((example, index) => {
			const exampleName =
				(exampleNames && exampleNames[index]) || `${name}${index}`;
			let args = [];

			// Add text child
			if (example.children.length === 1) {
				const textChild = example.children[0];
				if (textChild.name === 'div' && textChild.properties['_text']) {
					args.push(
						`children: "${textChild.properties['_text'].trim()}"`
					);
				}
			}

			// Add onClick etc. as property
			if (example.bindings) {
				for (const key of Object.keys(example.bindings)) {
					if (key.startsWith('on')) {
						let bindingKey = key;
						if (target === 'angular') {
							const keyLowercase = key
								.replace('on', '')
								.toLowerCase();
							{
								bindingKey = keyLowercase;
							}
						}
						args.push(`"${bindingKey}": fn()`);
					} else {
						// TODO: Handle bindings like disabled|style etc.
					}
				}
			}

			// Add other properties
			for (const [key, value] of Object.entries(example.properties)) {
				args.push(`"${key}": "${value}"`);
			}

			return `export const ${exampleName}: Story = {
	args: {
	${args.join(',\n')}
	}
};`;
		})
		.join('\n');
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'storybook-plugin',
	code: {
		post: (code, json) => {
			const { imports, pluginData, name, children, meta } = json;
			const { target, path } = pluginData;
			const targetMapItem = targetMapping[target].storyBookLib;

			const componentNameLowercase = path.split('/')[2];

			const { componentName, allImports } = resolveImports(
				imports,
				componentNameLowercase
			);

			if (!componentName)
				return `Miss component with ../${componentNameLowercase}.lite inside example`;

			if (children.length !== 1 || children[0].name !== 'Fragment') {
				return `You need to wrap your example with a mitosis <Fragment>`;
			}

			return [
				`import type { Meta, StoryObj } from '@storybook/${targetMapItem}';`,
				target === 'angular'
					? `import { argsToTemplate } from '@storybook/${targetMapItem}';`
					: '',
				`import { ${allImports.join(',')} } from '@components';`,
				"import { fn } from 'storybook/test';",
				getMetaObject({
					target,
					componentNameLowercase,
					componentName,
					name,
					meta
				}),
				getStories({
					target,
					fragment: children[0],
					meta,
					name
				})
			].join('\n');
		}
	}
});
