const targetMapping = [
	{ name: 'react', lib: 'react', mdExtension: 'tsx' },
	{ name: 'vue', lib: 'v', mdExtension: 'vue' },
	{ name: 'angular', lib: 'ngx', mdExtension: 'ts' },
	{ name: 'stencil', lib: 'wc', mdExtension: 'html' }
];

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	name: 'agent-plugin',
	json: {
		post: (json) => {
			const target = json.pluginData.target;
			const targetMapItem = targetMapping.find(
				({ name }) => name === target
			);

			return {
				...json,
				imports: json.imports.map((importLine) => {
					if (
						Object.keys(importLine.imports).find((key) =>
							key.startsWith('DB')
						)
					) {
						return {
							...importLine,
							path: `@db-ux/${targetMapItem.lib}-core-components`
						};
					}

					return importLine;
				})
			};
		}
	},
	code: {
		post: (code, json) => {
			const target = json.pluginData.target;
			const targetMapItem = targetMapping.find(
				({ name }) => name === target
			);
			const displayName = json.name.replace(/Docs$/, '');

			let changedCode = code.trim();

			if (json?.meta?.useMetadata?.slots) {
				let replacement = '';
				for (const [key, value] of Object.entries(
					json.meta.useMetadata.slots
				)) {
					const component = value[target];
					if (target === 'react') {
						replacement = replacement + `${key}={${component}}\n `;
					} else if (target === 'vue') {
						replacement =
							replacement +
							`<template v-slot:${key}>${component}</template>\n`;
					} else {
						replacement = replacement + `${component}\n`;
					}
				}

				if (target === 'react') {
					changedCode = changedCode.replaceAll(
						`>__slots__ `,
						` ${replacement}>`
					);
					changedCode = changedCode.replaceAll(
						'>\n' + '        __slots__',
						` ${replacement}>`
					);
				} else {
					changedCode = changedCode.replaceAll(
						`__slots__`,
						`${replacement}`
					);
				}
			}

			if (target === 'stencil') {
				// Remove everything before the first `<Fragment>` and after the last `</Fragment>`
				const match = /<Fragment>([\s\S]*?)<\/Fragment>/g.exec(
					changedCode
				);
				if (match) {
					changedCode = match[1].trim();
				}
			}

			return [
				`# ${displayName} Examples (${target})`,
				'',
				'```' + targetMapItem.mdExtension,
				changedCode,
				'```'
			].join('\n');
		}
	}
});
