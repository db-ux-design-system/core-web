/*
 * Fetches all branches and deletes all review-branches in github pages
 */
import FS from 'node:fs';
import { sanitizeName } from './extract-name-and-base-url.js';

const TAG = 'cleanup-gh-pages:';

const removeOldFromPath = (isTag, data) => {
	const path = `public/${isTag ? 'version' : 'review'}`;
	if (
		FS.existsSync(path) &&
		data?.filter((branch) => branch.name).length > 0
	) {
		const dirsToDelete = FS.readdirSync(path)
			.filter(
				(file) =>
					// eslint-disable-next-line unicorn/prefer-array-some
					!data.find((branch) => sanitizeName(branch.name) === file)
			)
			// Let's not clean up specific folders
			.filter((file) => !['main', 'latest'].includes(file));
		if (dirsToDelete?.length > 0) {
			console.log(
				TAG,
				`Start removing ${isTag ? 'tags' : 'branches'} from gh-pages`
			);
			console.log(TAG, dirsToDelete);
			for (const dir of dirsToDelete) {
				FS.rmSync(`${path}/${dir}`, {
					recursive: true,
					force: true
				});
				console.log(TAG, `deleted  ${isTag ? 'tag' : 'branch'} ${dir}`);
			}

			return true;
		}

		console.log(TAG, `All ${isTag ? 'tags' : 'branches'} are up to date`);
	}

	return false;
};

const cleanUpPages = async ({ github, context }) => {
	const { repo, owner } = context.repo;
	const branches = await github.rest.repos.listBranches({
		owner,
		repo,
		// eslint-disable-next-line camelcase
		per_page: 100
	});
	const tags = await github.rest.repos.listTags({
		owner,
		repo
	});

	return {
		deploy:
			removeOldFromPath(false, branches.data) ||
			removeOldFromPath(true, tags.data)
	};
};

export default cleanUpPages;
