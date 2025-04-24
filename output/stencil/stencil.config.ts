import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'DB-UX',
	srcDir: 'src',
	outputTargets: [
		{
			type: 'dist'
		},
		{
			type: 'dist-hydrate-script',
			dir: 'hydrate',
		},
	]
};
