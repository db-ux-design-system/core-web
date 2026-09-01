import { execSync } from 'node:child_process';

export const hasSnapshotChanges = (isAria = true, branch = ''): boolean => {
	try {
		// Run the Git command to check for changes compared to the main branch
		const changedFiles = execSync(`git diff ${branch} --name-only`, {
			encoding: 'utf8'
		})
			.split('\n')
			.filter(Boolean);

		// Check if any file in __snapshots__ with the name *-aria-snapshot.yml has changed
		return changedFiles.some(
			(file) =>
				file.startsWith('__snapshots__') &&
				file.endsWith(
					isAria ? '-aria-snapshot.yaml' : '-screenshot.png'
				)
		);
	} catch (error: unknown) {
		console.error(
			'Error while checking for changes:',
			error instanceof Error ? error.message : String(error)
		);
		return false;
	}
};
