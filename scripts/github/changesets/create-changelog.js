/**
 * @type {import('@changesets/types/dist/declarations/src').GetReleaseLine}
 */
const getReleaseLine = async (changeset, _type, options) => {
	const [firstLine, ...futureLines] = changeset.summary
		.split('\n')
		.map((l) => l.trimEnd());

	let returnValue = `#### ${firstLine}\n\n`;

	// Options are coming from .changeset/config.json
	if (changeset.commit && options.owner && options.repo) {
		const link = `https://github.com/${options.owner}/${options.repo}/commit/${changeset.commit}`;
		returnValue += `- For more information checkout this [commit](${link}). - \n\n`;
	}

	if (futureLines.length > 0) {
		returnValue += `\n${futureLines.map((l) => `  ${l}`).join('\n')}`;
	}

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
