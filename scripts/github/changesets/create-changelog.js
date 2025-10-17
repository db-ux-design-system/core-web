/**
 * @type {import('@changesets/types/dist/declarations/src').GetReleaseLine}
 */
const getReleaseLine = async (changeset, _type, options) => {
	const [firstLine, ...futureLines] = changeset.summary
		.split('\n')
		.map((l) => l.trimEnd());

	let returnValue = `- ${firstLine}`;

	// Options are coming from .changeset/config.json
	if (changeset.commit && options.owner && options.repo) {
		const link = `https://github.com/${options.owner}/${options.repo}/commit/${changeset.commit}`;
		returnValue += ` - [see commit ${changeset.commit.slice(0, 7)}](${link})`;
	}

	if (futureLines.length > 0) {
		returnValue += `:\n\n`;
		returnValue += `\n${futureLines
			.filter((l) => l.length)
			.map((l) =>
				l.trim().startsWith('* ') ||
				l.trim().startsWith('- ') ||
				l.trim().startsWith('+ ')
					? `\t${l}`
					: `\t- ${l}`
			)
			.join('\n')}`;
	}

	returnValue += `\n`;

	return returnValue;
};

/**
 * @type {import('@changesets/types/dist/declarations/src').GetDependencyReleaseLine}
 */
const getDependencyReleaseLine = async () =>
	// We don't want dependencies to show in the changelog, because we align the version anyway
	'';
/**
 * @type {import('@changesets/types/dist/declarations/src').ChangelogFunctions}
 */
const functions = {
	getReleaseLine,
	getDependencyReleaseLine
};

export default functions;
