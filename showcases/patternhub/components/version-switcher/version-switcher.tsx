import { DBSelect } from '@db-ux/react-core-components/src';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { type BranchGroup, type GithubResponse } from './data';

const fetchFromGitHubApi = async (url: string): Promise<GithubResponse[]> => {
	try {
		const response = await fetch(url);
		return (await response.json()) as GithubResponse[];
	} catch (error) {
		console.error(error);
	}

	return [];
};

const owner = 'db-ux-design-system';
const repo = 'core-web';

const VersionSwitcher = () => {
	const router = useRouter();
	const [group, setGroup] = useState<BranchGroup | undefined>();
	const [currentBranch, setBranch] = useState<string>();

	const setCurrentBranch = (branchNames: string[]) => {
		const currentUrl = router.basePath;
		const foundBranch = branchNames.find((branch) =>
			currentUrl.includes(branch)
		);
		if (foundBranch) {
			setBranch(foundBranch);
		}
	};

	const setGroupByTagsBranches = (tags: string[], branches: string[]) => {
		const others: string[] = [];
		const features: string[] = [];
		const bugfixes: string[] = [];
		const refactors: string[] = [];
		const issues: string[] = [];
		const docs: string[] = [];

		for (const branch of branches) {
			if (branch.startsWith('feat') || branch.startsWith('feature')) {
				features.push(branch);
			} else if (
				branch.startsWith('fix') ||
				branch.startsWith('bugfix')
			) {
				bugfixes.push(branch);
			} else if (branch.startsWith('refactor')) {
				refactors.push(branch);
			} else if (/^\d*-/.test(branch)) {
				issues.push(branch);
			} else if (branch.startsWith('docs')) {
				docs.push(branch);
			} else {
				others.push(branch);
			}
		}

		setGroup({
			others,
			features,
			docs,
			refactors,
			issues,
			bugfixes,
			versions: tags
		});
	};

	useEffect(() => {
		const runAsync = async () => {
			try {
				const branchesResponse = await fetchFromGitHubApi(
					`https://api.github.com/repos/${owner}/${repo}/branches`
				);
				const tagsResponse = await fetchFromGitHubApi(
					`https://api.github.com/repos/${owner}/${repo}/tags`
				);
				const tags: string[] = tagsResponse.map(
					(tag: GithubResponse) => tag.name
				);
				const branches: string[] = branchesResponse
					.map((branch: GithubResponse) => branch.name)
					.filter(
						(branch) =>
							branch !== 'gh-pages' &&
							!branch.includes('dependabot')
					);

				// `latest` isn't a branch, but only existing within gh-pages
				tags.unshift('latest');

				setCurrentBranch(branches);
				setCurrentBranch(tags);
				setGroupByTagsBranches(tags, branches);
			} catch (error: any) {
				console.error(error);
			}
		};

		void runAsync();
	}, []);

	const handleChange = (branch: string) => {
		const lastPath = router.asPath.replace('core-web/version/latest/', ''); // We need to handle the version/latest differently, as this is a redirect we're generating server-side, and it's not a regular route
		const isTag =
			(branch.split('.').length === 3 && branch.startsWith('v')) ||
			branch === 'latest';
		globalThis.location.assign(
			DOMPurify.sanitize(
				`https://${owner}.github.io/${repo}${isTag ? '/version' : '/review'}/${branch}${lastPath}`
			)
		);
	};

	if (!group) {
		return null;
	}

	return (
		<DBSelect
			className="version-switcher"
			label="Version switcher"
			variant="floating"
			value={currentBranch}
			onChange={(event) => {
				handleChange(event.target.value);
			}}>
			{Object.entries(group)
				.filter(([name, group]) => group?.length > 0)
				.map(([name, group]) => (
					<optgroup key={name} label={name}>
						{group
							.slice(0, 15)
							.map((branch: string, index: number) => (
								<option
									key={`${name}-${branch}-${index}`}
									value={branch}>
									{branch}
								</option>
							))}
					</optgroup>
				))}
		</DBSelect>
	);
};

export default VersionSwitcher;
