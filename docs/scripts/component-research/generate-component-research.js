/* eslint-disable unicorn/prefer-top-level-await */

import FS from 'node:fs';
import inquirer from 'inquirer';
import designSystems from './design-systems.js';

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter the name of the component',
			name: 'name',
			validate(answer) {
				if (answer.length === 0) {
					return 'Please provide a valid name';
				}

				return true;
			}
		}
	])

	.then(({ name }) => {
		const path = `./research/${name}.md`;
		let fileContent = `# DEV Research ${name}

## Overview

| Design System | Component |  Comment |
| ------------- | :-------: |  ------- |
`;

		for (const designSystem of designSystems) {
			fileContent += `| [${designSystem.name}](${designSystem.url}) |`;
			fileContent += ` [${name}](${designSystem.componentUrl}) / ❌ | -- |\n`;
		}

		fileContent += `## Conclusion

		TODO: Add your findings here
		`;

		if (!FS.existsSync(path)) {
			FS.writeFileSync(path, fileContent);
		}
	});
