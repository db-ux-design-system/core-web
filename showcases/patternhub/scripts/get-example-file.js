const getOption = (optionName, prop) => {
	// TODO: Add other types as well
	// TODO: Add faker.js
	if (prop.tsType.name === 'boolean') {
		return `${optionName}="true"`;
	}

	return `${optionName}="account"`;
};

/**
 * @param componentName {string}
 * @param componentValue {{description: string, methods: any[], displayName: string, props:any}}
 * @returns {string}
 */
const getExampleFile = (componentName, { displayName, props }) => {
	let variants = '';
	const optionArrays = [];

	const propKeys = Object.keys(props).filter(
		(key) =>
			key !== 'className' && key !== 'children' && key !== 'stylePath'
	);
	for (const [index, key] of propKeys.entries()) {
		optionArrays.push([key]);
		let start = index;
		while (start < propKeys.length) {
			const additionalOptions = [];
			for (let i = start; i < propKeys.length; i++) {
				additionalOptions.push(propKeys[i]);
			}

			optionArrays.push(additionalOptions);
			start++;
		}
	}

	// TODO: Filter unique
	for (const optionArray of optionArrays) {
		variants += `${optionArray.join(', ')}: <${displayName} ${optionArray
			.map((opt) => getOption(opt, props[opt]))
			.join(' ')}>Test</${displayName}>\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";
import ${displayName} from "../../../components/src/components/${componentName}/${componentName}";

# ${displayName} Examples

<div class="example-list">
Default: <${displayName}>Test</${displayName}>
${variants}
</div>

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;
	`;
};

export default getExampleFile;
