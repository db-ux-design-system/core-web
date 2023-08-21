const { components } = require('./components');
const { getComponentName, runReplacements } = require('../utils');

module.exports = (tmp) => {
	for (const component of components) {
		try {
			const upperComponentName = getComponentName(component.name);

			const tsxFile = `../../${
				tmp ? 'output/tmp' : 'output'
			}/react/src/components/${component.name}/${component.name}.tsx`;

			let replacements = [
				{
					from: /= useState/g,
					to: '= useState<any>'
				},
				{ from: ` } from "react"`, to: `, forwardRef } from "react"` },
				{
					from: `function DB${upperComponentName}(props: DB${upperComponentName}Props) {`,
					to: `function DB${upperComponentName}Fn(props: DB${upperComponentName}Props, component: any) {`
				},
				{
					from: `export default DB${upperComponentName};`,
					to: `const DB${upperComponentName} = forwardRef(DB${upperComponentName}Fn);\nexport default DB${upperComponentName};`
				},
				{
					from: 'if (ref.current)',
					to: 'if (ref?.current)'
				},
				{
					from: '[ref.current]',
					to: '[ref]'
				}
			];

			runReplacements(replacements, component, 'react', tsxFile);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
