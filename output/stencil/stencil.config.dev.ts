import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	tsconfig: './tsconfig.dev.json',
	extras: {
		experimentalSlotFixes: true
	},
	outputTargets: [
		{
			type: 'dist-custom-elements',
			dir: 'bundle',
			externalRuntime: false,
			customElementsExportBehavior: 'bundle'
		},
		{
			type: 'dist'
		}
	]
};
