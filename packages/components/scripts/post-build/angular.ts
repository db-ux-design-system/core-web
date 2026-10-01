import { replaceInFileSync } from 'replace-in-file';

import { writeFileSync } from 'node:fs';

import components, { Overwrite } from './components.js';

import { runReplacements, transformToUpperComponentName } from '../utils';

/**
 * It's not possible to use <ng-content> multiple times in a component.
 * In Angular, you have to use a directive for this...
 * This is a workaround to replace it in the file.
 */
const setDirectiveReplacements = (
	replacements: Overwrite[],
	outputFolder: string,
	componentName: string,
	upperComponentName: string,
	directives: { name: string; ngContentName?: string }[]
) => {
	for (const directive of directives) {
		// Add ng-content multiple times to overwrite all
		for (let i = 0; i < 4; i++) {
			replacements.push({
				from: `<ng-content${directive.ngContentName ? ` select="[${directive.ngContentName}]"` : ''}>`,
				to: `<ng-content *ngTemplateOutlet="db${directive.name}">`
			});
		}

		replacements.push({
			from: `export class ${upperComponentName} implements AfterViewInit, OnDestroy {\n`,
			to:
				`export class ${upperComponentName} implements AfterViewInit, OnDestroy {\n` +
				`\t@ContentChild(${directive.name}Directive, { read: TemplateRef }) db${directive.name}: any;\n`
		});

		replacements.push({
			from: '@Component({',
			to:
				`import { ${directive.name}Directive } from './${directive.name}.directive';\n\n` +
				'@Component({'
		});

		writeFileSync(
			`../../${outputFolder}/angular/src/components/${componentName}/${directive.name}.directive.ts`,
			'/* Angular cannot handle multiple slots with the same name, we need to use Directives for this. */\n' +
				"import { Directive } from '@angular/core';" +
				`
@Directive({
\tselector: '[db${directive.name}]',
\tstandalone: true
})
export class ${directive.name}Directive {}
`
		);
	}

	replacements.push({
		from: '} from "@angular/core";',
		to: 'ContentChild, TemplateRef } from  "@angular/core";'
	});

	const directiveExports = directives
		.map(
			(directive) =>
				`export * from './components/${componentName}/${directive.name}.directive';`
		)
		.join('\n');
	replaceInFileSync({
		files: `../../${outputFolder}/angular/src/index.ts`,
		from: `export * from './components/${componentName}';`,
		to: `export * from './components/${componentName}';\n${directiveExports}`
	});
};

export default (tmp?: boolean) => {
	const outputFolder = `${tmp ? 'output/tmp' : 'output'}`;

	for (const component of components) {
		const componentName = component.name;
		const upperComponentName = `DB${transformToUpperComponentName(component.name)}`;
		const componentFolder = component.folder ?? componentName;
		const file = `../../${outputFolder}/angular/src/components/${componentFolder}/${componentName}.ts`;
		const indexFile = `../../${outputFolder}/angular/src/components/${componentFolder}/index.ts`;

		replaceInFileSync({
			files: indexFile,
			from: 'default as ',
			to: ''
		});

		const replacements: Overwrite[] = [];

		if (
			component.config?.angular?.directives &&
			component.config.angular.directives.length > 0
		) {
			setDirectiveReplacements(
				replacements,
				outputFolder,
				componentName,
				upperComponentName,
				component.config.angular.directives
			);
		}

		try {
			runReplacements(replacements, component, 'angular', file);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
