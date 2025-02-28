// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

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
