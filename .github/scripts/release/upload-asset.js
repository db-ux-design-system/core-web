/*
 * Uploads a file to a release
 */
import FS from 'node:fs';

const uploadAsset = async ({
	github,
	context,
	release_id,
	assetName,
	assetPath
}) => {
	const { repo, owner } = context.repo;

	const uploadRelease = await github.rest.repos.getRelease({
		owner,
		repo,
		release_id
	});

	const foundAsset = uploadRelease?.assets?.find(
		(asset) => asset.name === assetName
	);

	if (foundAsset) {
		await github.rest.repos.deleteReleaseAsset({
			owner,
			repo,
			asset_id: foundAsset.id
		});
	}

	return await github.rest.repos.uploadReleaseAsset({
		owner,
		repo,
		release_id,
		name: assetName,
		data: FS.readFileSync(assetPath)
	});
};

export default uploadAsset;
