import { execSync } from 'node:child_process';

export const checkSnapshotChanges = (aria = true, branch = ''): boolean => {
	try {
		// Run the Git command to check for changes compared to the main branch
		const changedFiles = execSync(`git diff ${branch} --name-only`, {
			encoding: 'utf8'
		})
			.split('\n')
			.filter(Boolean);

		console.log(`Changed files:`, changedFiles);

		// Check if any file in __snapshots__ with the name *-aria-snapshot.yml has changed
		const ariaSnapshots = changedFiles.some(
			(file) =>
				file.startsWith('__snapshots__') &&
				file.endsWith(aria ? '-aria-snapshot.yaml' : '-screenshot.png')
		);

		console.log(`ariaSnapshots changed`, ariaSnapshots);

		return ariaSnapshots;
	} catch (error) {
		console.error('Error while checking for changes:', error.message);
		return false;
	}
};
