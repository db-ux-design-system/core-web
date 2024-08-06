import { globSync } from 'glob';
import { replaceInFileSync, type ReplaceResult } from 'replace-in-file';
import { type OptionsType } from '../types';
import { colorUpdateQ32024 } from './color-update';

export const migrate = (options?: OptionsType) => {
	if (options) {
		const { src, dryRun } = options;
		const dry = Boolean(dryRun);
		const paths = `${src}/**`;

		const globPaths: string[] = globSync(paths, {
			nodir: true
		}).map((path) => path.replaceAll('\\', '/'));

		for (const update of colorUpdateQ32024) {
			const option = {
				...update,
				files: globPaths,
				dry
			};
			const result: ReplaceResult[] = replaceInFileSync(option);
			if (dry) {
				console.log(result);
			}
		}
	}
};

export default { migrate };
