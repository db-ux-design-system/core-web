const Replace = require('replace-in-file');
const Components = require('./components');

module.exports = () => {
	for (const component of Components) {
		try {
			const cleanName = component.name
				.split('-')
				.map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
				.join('');
			const stateName = `DB${cleanName}State`;

			const tsxFile = `../../output/react/src/components/${component.name}/${component.name}.tsx`;

			let replacements = [
				{ from: `${stateName}, `, to: '' },
				{ from: `, ${stateName}`, to: '' },
				{
					from: /= useState/g,
					to: '= useState<any>'
				}
			];

			if (component?.overwrites?.react) {
				replacements = [...replacements, ...component.overwrites.react];
			}

			if (component?.overwrites?.global) {
				replacements = [
					...replacements,
					...component.overwrites.global
				];
			}

			for (const replacement of replacements) {
				const option = {
					files: tsxFile,
					from: replacement.from,
					to: replacement.to
				};
				Replace.replaceInFileSync(option);
			}
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
