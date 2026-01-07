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

	let render;

	if (target === 'react') {
		render = `render: (properties) => (
		<${componentName} {...properties}>{properties.children}</${componentName}>
	),`;
	} else if (target === 'angular') {
		const argsToTemplateString = '${argsToTemplate(args)}';
		const childrenString = '${children}';
		render = `
	render: ({ children, ...args }) => ({
		props: args,
		template: \`<db-${componentNameLowercase} ${argsToTemplateString}>${childrenString}</db-${componentNameLowercase}>\`
	}),`;
	} else if (target === 'vue') {
		const childrenString = '${args.default}';
		render = `
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

	let docs = '';

	if (target === 'vue') {
		docs = `
		docs: {
			source: {
				transform: (code:string) => {
					return code
						.replace(/<(\\w+)/g, (match, tag) =>
							tag === 'template' || tag === 'script' ? match : '<${componentName}'
						)
						.replace(/<\\/(\\w+)>/g, (match, tag) =>
							tag === 'template' || tag === 'script' ? match : '</${componentName}>'
						);
				},
			},
		},`;
	}

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
		layout: 'centered',
		${docs}
	},
	tags: ['autodocs'],
	argTypes: ${JSON.stringify(argTypes)}
} satisfies Meta<${metaType}>;

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

const getStories = ({ target, name, fragment, meta, componentName }) => {
	const { children: examples } = fragment;

	let exampleNames;

	if (meta?.useMetadata?.storybookNames) {
		exampleNames = meta.useMetadata.storybookNames.map((name) =>
			name.replace(/[^a-zA-Z0-9]/g, '')
		);
	}

	return examples
		.map((example, index) => {
			const exampleName =
				(exampleNames && exampleNames[index]) || `${name}${index}`;
			let args = [];
			let decorators = '';
			// Add text child
			if (example.children.length === 1) {
				let firstChild = example.children[0];
				if (firstChild.name === componentName) {
					// We have a wrapper like a div around the component
					if (example.bindings?.style) {
						const nonReactStyles = example.bindings?.style?.code
							.replaceAll('{', '')
							.replaceAll('}', '')
							.replaceAll("'", '')
							.replaceAll('\n', '');
						if (target === 'vue') {
							decorators = `decorators: [() => ({ template: \`<div style="${nonReactStyles}"><story /></div>\` })],`;
						} else if (target === 'angular') {
							const storyString = '${story}';
							decorators = `decorators: [componentWrapperDecorator((story) => \`<div style="${nonReactStyles}">${storyString}</div>\`)]`;
						} else if (target === 'react') {
							decorators = `decorators:[ (Story) => (
      <div style={${example.bindings?.style?.code}}>
        <Story />
      </div>
    )]`;
						}
					}

					example = firstChild;
					firstChild = firstChild.children[0];
				}

				if (
					firstChild.name === 'div' &&
					firstChild.properties['_text']
				) {
					const key = target === 'vue' ? 'default' : 'children';
					args.push(
						`${key}: "${firstChild.properties['_text'].trim()}"`
					);
				}
			}

			// Add onClick etc. as property
			if (example.bindings) {
				for (const [key, value] of Object.entries(example.bindings)) {
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
						args.push(`"${key}": ${value.code}`);
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
	},
	${decorators}
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
					? `import { argsToTemplate, componentWrapperDecorator } from '@storybook/${targetMapItem}';`
					: '',
				`import { ${allImports.join(',')}, type ${componentName}Props } from '@components';`,
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
					name,
					componentName
				})
			].join('\n');
		}
	}
});
