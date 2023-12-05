/*
 * Handles full release process for all assets
 */

import uploadAsset from './upload-asset.js';
import zipFolder from './zip-folder.js';

const release = async ({ github, context, workspace, iconReleaseId }) => {
	const { id: release_id } = context.payload.release;

	// 3. Upload latest icon assets
	const iconsName = 'icons.zip';
	const iconsPath = `${workspace}/packages/foundations/assets`;
	await zipFolder(iconsName, iconsPath, `${iconsPath}/icons`);

	// 3.1 Upload to current release
	await uploadAsset({
		github,
		context,
		release_id,
		assetName: iconsName,
		assetPath: `${iconsPath}/${iconsName}`
	});

	//if (!context.payload.release.prerelease) {
	// 3.2 Upload to iconRelease -> will overwrite "latest" icons
	await uploadAsset({
		github,
		context,
		release_id: iconReleaseId,
		assetName: iconsName,
		assetPath: `${iconsPath}/${iconsName}`
	});
	//}
};

export default release;
