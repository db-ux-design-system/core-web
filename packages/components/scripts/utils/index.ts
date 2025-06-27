import { replaceInFileSync } from 'replace-in-file';
import { Component, Overwrite } from '../post-build/components';

export const transformToUpperComponentName = (componentName: string) =>
	componentName
		.split('-')
		.map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
		.join('');

export const runReplacements = (
	replacements: Overwrite[],
	component: Component,
	framework: string,
	file: string
) => {
	if (component?.overwrites?.[framework]) {
		replacements = [...replacements, ...component.overwrites[framework]];
	}

	if (component?.overwrites?.global) {
		replacements = [...replacements, ...component.overwrites.global];
	}

	replacements.push({
		from: ',\n' + ',',
		to: ','
	});

	for (const replacement of replacements) {
		const option = {
			files: file,
			from: replacement.from,
			to: replacement.to
		};
		replaceInFileSync(option);
	}
};

export default { transformToUpperComponentName, runReplacements };
