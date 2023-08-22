/*
 * Fetches all branches and deletes all review-branches in github pages
 */
import FS from 'node:fs';

const TAG = 'cleanup-gh-pages:';

const removeOldFromPath = (isTag, data) => {
	const path = `public/${isTag ? 'version' : 'review'}`;
	if (FS.existsSync(path) && data?.length > 0) {
		const dirsToDelete = FS.readdirSync(path)
			.filter((file) => !data.find((branch) => branch.name === file))
			.filter((file) => file !== 'main');
		if (dirsToDelete?.length > 0) {
			console.log(
				TAG,
				`Start removing ${isTag ? 'tags' : 'branches'} from gh-pages`
			);
			console.log(TAG, dirsToDelete);
			dirsToDelete.forEach((dir) => {
				FS.rmSync(`${path}/${dir}`, {
					recursive: true,
					force: true
				});
				console.log(TAG, `deleted  ${isTag ? 'tag' : 'branch'} ${dir}`);
			});
			return true;
		} else {
			console.log(
				TAG,
				`All ${isTag ? 'tags' : 'branches'} are up to date`
			);
		}
	}

	return false;
};

const cleanUpPages = async ({ github, context }) => {
	const { repo, owner } = context.repo;
	const branches = await github.rest.repos.listBranches({
		owner,
		repo
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
