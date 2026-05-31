// This script extracts the branch or tag name for GitHub Actions workflows.
// Usage: Pass in the context objects It returns the name based on RELEASE/PRE_RELEASE env vars.

/**
 * Extracts the branch or tag name for workflow output and constructs the BASE_URL.
 * @param {object} context - The GitHub Actions context object
 * @returns {{ name: string, baseUrl: string, repo: string, owner: string }}
 */
function extractNameAndBaseUrl(context) {
	console.log('Starting extractNameAndBaseUrl...');
	// Extract branch name from context
	const branchName = (
		context?.payload?.pull_request?.head?.ref ||
		context?.payload?.ref ||
		''
	).replace('refs/heads/', '');
	console.log('Extracted branchName:', branchName);

	// Check environment variables
	const isRelease = process.env.RELEASE === 'true';
	console.log('isRelease:', isRelease);

	let name;
	if (isRelease) {
		// Use tag name from GITHUB_REF (remove refs/tags/ prefix)
		const githubRef = process.env.GITHUB_REF || '';
		name = githubRef.replace(/^refs\/tags\//, '');
		console.log('Using tag name from GITHUB_REF:', name);
	} else {
		// Use extracted branch name
		name = branchName;
		console.log('Using branch name:', name);
	}

	// Construct BASE_URL
	let path = 'review';
	if (isRelease) {
		path = 'version';
	}

	console.log('Selected path:', path);

	const repoName = context?.payload?.repository?.name || '';
	const ownerName = process.env.GITHUB_REPOSITORY_OWNER || '';
	console.log('repoName:', repoName, 'ownerName:', ownerName);

	const baseUrl = `/${repoName}/${path}/${name}`;
	console.log('Constructed baseUrl:', baseUrl);

	const result = { name, baseUrl, repo: repoName, owner: ownerName };
	console.log('Result:', result);

	return result;
}

export default extractNameAndBaseUrl;
