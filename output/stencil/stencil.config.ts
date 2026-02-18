import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	outputTargets: [
		{
			type: 'dist-custom-elements',
			"dir": 'bundle',
			externalRuntime: false,
			customElementsExportBehavior: "bundle"
		},
		{
			type: 'dist'
		}
	]
};
