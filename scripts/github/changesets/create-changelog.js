/**
 @type {import('@changesets/types').GetReleaseLine}
 */
const getReleaseLine = async (changeset, _type, options) => {
	const [firstLine, ...futureLines] = changeset.summary
		.split('\n')
		.map((l) => l.trimEnd());

	let returnValue = `- ${firstLine}`;

	// Options are coming from .changeset/config.json, they can be null
	if (changeset.commit && options?.owner && options?.repo) {
		const link = `https://github.com/${options.owner}/${options.repo}/commit/${changeset.commit}`;
		returnValue += ` - [see commit ${changeset.commit.slice(0, 7)}](${link})`;
	}

	if (futureLines.length > 0) {
		returnValue += ':\n\n';
		// Every non-empty line after the first becomes a single list sub-item at
		// one level of nesting (rendered as four spaces by prettier). An author
		// may write the lines as plain prose or as a Markdown bullet list - we
		// strip any leading `-`/`*`/`+` marker so both styles render identically
		// and a hand-written bullet never ends up at the deeper code-style
		// (eight-space) indentation.
		returnValue += `\n${futureLines
			.filter((l) => l.length)
			.map((l) => `\t- ${l.trim().replace(/^[-*+]\s+/, '')}`)
			.join('\n')}`;
	}

	returnValue += '\n';

	return returnValue;
};

/**
 @type {import('@changesets/types').GetDependencyReleaseLine}
 */
const getDependencyReleaseLine = async () =>
	// We don't want dependencies to show in the changelog, because we align the version anyway
	'';
/**
 @type {import('@changesets/types').ChangelogFunctions}
 */
const functions = {
	getReleaseLine,
	getDependencyReleaseLine
};

export default functions;
