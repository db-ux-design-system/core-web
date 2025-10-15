import { globSync } from 'glob';
import type { ReplaceInFileConfig, ReplaceResult } from 'replace-in-file';
import { replaceInFileSync } from 'replace-in-file';
import { migrationTypes } from '../data';
import type { OptionsType } from '../types';
import { AdditionalInformation } from './additional-information';

export const migrate = (
	options?: OptionsType,
	cli?: boolean
): ReplaceResult[] | undefined => {
	if (options) {
		const { src, type, dryRun } = options;
		const dry = Boolean(dryRun);
		const paths = `${src}/**`;

		const globPaths: string[] = globSync(paths, {
			nodir: true,
			ignore: ['node_modules', '**/*.zip']
		})
			.map((path) => path.replaceAll('\\', '/'))
			.filter((path) => path.includes('.'));

		const replacements: ReplaceInFileConfig[] = Object.entries(
			migrationTypes
		).reduce(
			(
				previousReplacements: ReplaceInFileConfig[],
				[currentKey, currentReplacements]
			) =>
				type.includes(currentKey)
					? [...previousReplacements, ...currentReplacements]
					: previousReplacements,
			[]
		);

		for (const t of type) {
			const additionalInfo = AdditionalInformation[t];
			if (additionalInfo) {
				console.log(`Find more information here: ${additionalInfo}`);
			}
		}

		for (const update of replacements) {
			const option = {
				...update,
				files: globPaths,
				dry
			};
			const result: ReplaceResult[] = replaceInFileSync(option);
			if (dry) {
				if (cli) {
					console.log(result.filter((res) => res.hasChanged));
				}
				return result;
			}
		}
	}

	return undefined;
};

export default { migrate };
