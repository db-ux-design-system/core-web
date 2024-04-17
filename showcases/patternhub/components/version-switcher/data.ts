export type BranchGroup = {
	others: string[];
	features: string[];
	bugfixes: string[];
	refactors: string[];
	issues: string[];
	docs: string[];
	versions: string[];
};

export type GithubResponse = {
	name: string;
};
