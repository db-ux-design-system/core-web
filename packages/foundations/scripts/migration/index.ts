import { globSync } from 'glob';
import {
	ReplaceInFileConfig,
	replaceInFileSync,
	type ReplaceResult
} from 'replace-in-file';
import { type OptionsType } from '../types';
import { migrationTypes } from '../data';

export const migrate = (
	options?: OptionsType,
	cli?: boolean
): ReplaceResult[] | undefined => {
	if (options) {
		const { src, type, dryRun } = options;
		const dry = Boolean(dryRun);
		const paths = `${src}/**`;

		const globPaths: string[] = globSync(paths, {
			nodir: true
		}).map((path) => path.replaceAll('\\', '/'));

		const replacements: ReplaceInFileConfig[] = Object.entries(
			migrationTypes
		).reduce(
			(previousReplacements, [currentKey, currentReplacements]) =>
				type.includes(currentKey)
					? [...previousReplacements, ...currentReplacements]
					: previousReplacements,
			[]
		);

		for (const update of replacements) {
			const option = {
				...update,
				files: globPaths,
				dry
			};
			const result: ReplaceResult[] = replaceInFileSync(option);
			if (dry) {
				if (cli) {
					console.log(result);
				}
				return result;
			}
		}
	}

	return undefined;
};

export default { migrate };
