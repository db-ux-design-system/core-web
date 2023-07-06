/* eslint-disable no-console */
import ChildProcess from 'node:child_process';

const runPrettierStage = () => {
	console.log(`Prettify changed files ️`);

	const modifiedFilesString = ChildProcess.execSync(
		'git ls-files --other --modified --exclude-standard'
	).toString();

	if (modifiedFilesString) {
		const modifiedFiles = modifiedFilesString
			.split('\n')
			.filter((file) => file.length > 0);
		for (const file of modifiedFiles) {
			ChildProcess.execSync(`prettier --write ${file}`).toString();
		}

		console.log(`Run prettier for${modifiedFiles.length} files`);
	} else {
		console.log('No files found');
	}
};

runPrettierStage();
