/* eslint-disable camelcase */
// Usage: node update-pr-description.js <owner> <repo> <pull_number> <head_ref>
// Requires: GITHUB_TOKEN in env

/**
 * Update PR description with a test URL section.
 * @param {import('@actions/github').GitHub} github - Octokit client from actions/github-script
 * @param {object} context - GitHub Actions context
 */
async function previewUrlPrDescription({ github, context }) {
	const { owner, repo } = context.repo;
	const pullNumber = context.payload.pull_request.number;
	const headRef = context.payload.pull_request.head.ref;

	// Get the configured custom domain for GitHub Pages
	let baseUrl;
	try {
		const pagesResponse = await github.rest.repos.getPages({
			owner,
			repo
		});
		
		// Use custom domain if available, otherwise fall back to github.io
		baseUrl = pagesResponse.data.html_url ?? `https://${owner}.github.io/${repo}/`;
		// Ensure baseUrl ends with a single trailing slash
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
	} catch (error) {
		console.warn(
			'Could not fetch GitHub Pages configuration, using default domain:',
			error.message
		);
		baseUrl = `https://${owner}.github.io/${repo}/`;
		// Ensure baseUrl ends with a single trailing slash
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
	}

	// Fetch current PR
	const pr = await github.rest.pulls.get({
		owner,
		repo,
		pull_number: pullNumber
	});
	const urlSectionStart = '\n<!-- DBUX-TEST-URL-START -->';
	const urlSectionEnd = '\n<!-- DBUX-TEST-URL-END -->';
	const testUrl = `\n\n🔭🐙🐈 Test this branch here: <${baseUrl}review/${headRef}>\n`;
	let body = pr.data.body || '';
	// Remove any existing test URL section
	const startIdx = body.indexOf(urlSectionStart);
	const endIdx = body.lastIndexOf(urlSectionEnd);
	if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
		body =
			body.slice(0, startIdx) + body.slice(endIdx + urlSectionEnd.length);
	}

	// Add the new test URL section at the end
	body = body.trim() + `${urlSectionStart}\n${testUrl}${urlSectionEnd}`;
	await github.rest.pulls.update({
		owner,
		repo,
		pull_number: pullNumber,
		body
	});
}

export default previewUrlPrDescription;
