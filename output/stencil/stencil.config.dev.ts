import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	tsconfig: "./tsconfig.dev.json",
	outputTargets: [
		{
			type: 'dist'
		}
	]
};
