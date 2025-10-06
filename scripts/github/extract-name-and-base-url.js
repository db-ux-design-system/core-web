// This script extracts the branch or tag name for GitHub Actions workflows.
// Usage: Pass in the context objects It returns the name based on RELEASE/PRE_RELEASE env vars.

/**
 * Extracts the branch or tag name for workflow output and constructs the BASE_URL.
 * @param {object} context - The GitHub Actions context object
 * @returns {{ name: string, baseUrl: string }}
 */
function extractNameAndBaseUrl(context) {
	// Extract branch name from context
	const branchName = (
		context?.payload?.pull_request?.head?.ref ||
		context?.payload?.ref ||
		''
	).replace('refs/heads/', '');

	// Check environment variables
	const isRelease = process.env.RELEASE === 'true';
	const isPreRelease = process.env.PRE_RELEASE === 'true';

	let name;
	if (isRelease || isPreRelease) {
		// Use tag name from GITHUB_REF (remove refs/tags/ prefix)
		const githubRef = process.env.GITHUB_REF || '';
		name = githubRef.replace(/^refs\/tags\//, '');
	} else {
		// Use extracted branch name
		name = branchName;
	}

	// Construct BASE_URL
	let path = 'review';
	if (isRelease || isPreRelease) {
		path = 'version';
	}

	const repoName = context?.payload?.repository?.name || '';
	const ownerName = process.env.GITHUB_REPOSITORY_OWNER || '';
	const baseUrl = `/${repoName}/${path}/${process.env.NAME}`;

	return { name, baseUrl, repo: repoName, owner: ownerName };
}

export default extractNameAndBaseUrl;
