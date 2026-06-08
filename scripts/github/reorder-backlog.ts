#!/usr/bin/env node
/**
 * Reorder the "UX Engineering Team Backlog" project (#6)
 * for db-ux-design-system/core-web issues.
 *
 * Sorting rules:
 * 1. Community feedback issues first (highest priority, lowest effort)
 * 2. Non-community issues second (highest priority, lowest effort)
 * 3. Issues with no status or "Backlog" status go to the end
 *
 * Never moves issues that are "In progress" or "Waiting for feedback".
 *
 * Usage: npx tsx scripts/github/reorder-backlog.ts [--dry-run]
 * Requires: gh CLI authenticated with `project` scope
 */

import { execSync } from 'node:child_process';
import { unlinkSync, writeFileSync } from 'node:fs';

const owner = 'db-ux-design-system';
const repo = 'core-web';
const projectNumber = 6;
const projectId = 'PVT_kwDOC6qtR84Ay9u1';

const priorityFieldId = 32_123_222;
const effortFieldId = 32_123_225;

const priorityRank: Record<string, number> = {
	/* eslint-disable @typescript-eslint/naming-convention */
	Urgent: 1,
	High: 2,
	Medium: 3,
	Low: 4
	/* eslint-enable @typescript-eslint/naming-convention */
};
const defaultPriorityRank = 5;

const effortRank: Record<string, number> = {
	/* eslint-disable @typescript-eslint/naming-convention */
	Low: 1,
	Medium: 2,
	High: 3
	/* eslint-enable @typescript-eslint/naming-convention */
};
const defaultEffortRank = 4;

const protectedStatuses = new Set([
	'🏗 In progress',
	'🎶 Waiting for feedback',
	'🎁 Ready for review',
	'👀 Actively In Review',
	'⏰ready for release',
	'✅ Done'
]);

// --- Types ---

type ProjectItemContent = {
	number: number;
	repository: string;
	title: string;
	type: 'Issue' | 'PullRequest' | 'DraftIssue';
};

type ProjectItem = {
	id: string;
	content: ProjectItemContent;
	labels?: string[];
	status?: string;
};

type ProjectItemList = {
	items: ProjectItem[];
	totalCount: number;
};

type IssueFieldValue = {
	issue_field_id: number;
	single_select_option?: {
		name: string;
	};
};

type IssueApiResponse = {
	issue_field_values?: IssueFieldValue[];
};

type SortableItem = {
	number: number;
	title: string;
	itemId: string;
	isCommunity: boolean;
	priority: string;
	priorityRank: number;
	effort: string;
	effortRank: number;
};

// --- Helpers ---

const gh = (args: string): string => {
	try {
		return execSync(`gh ${args}`, {
			encoding: 'utf8',
			maxBuffer: 50 * 1024 * 1024
		}).trim();
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(`gh command failed: gh ${args}`);
		console.error(message);
		process.exit(1);
	}
};

const sleep = async (ms: number): Promise<void> =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const extractFieldValues = (
	issueData: IssueApiResponse
): { priority: string; effort: string } => {
	let priority = '';
	let effort = '';

	if (issueData.issue_field_values) {
		for (const fv of issueData.issue_field_values) {
			if (
				fv.issue_field_id === priorityFieldId &&
				fv.single_select_option
			) {
				priority = fv.single_select_option.name;
			}

			if (
				fv.issue_field_id === effortFieldId &&
				fv.single_select_option
			) {
				effort = fv.single_select_option.name;
			}
		}
	}

	return { priority, effort };
};

const executeMutation = (mutation: string): void => {
	const temporaryFile = 'tmp-mutation.graphql';
	writeFileSync(temporaryFile, mutation);
	try {
		gh(`api graphql -F query=@${temporaryFile}`);
	} finally {
		unlinkSync(temporaryFile);
	}
};

const fetchIssueFields = async (
	items: ProjectItem[]
): Promise<SortableItem[]> => {
	const sortableItems: SortableItem[] = [];

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const { number } = item.content;
		process.stdout.write(
			`   [${String(i + 1)}/${String(items.length)}] #${String(number)}...\r`
		);

		let priority = '';
		let effort = '';

		try {
			const issueJson = gh(
				`api repos/${owner}/${repo}/issues/${String(number)}`
			);
			const issueData = JSON.parse(issueJson) as IssueApiResponse;
			const fields = extractFieldValues(issueData);
			priority = fields.priority;
			effort = fields.effort;
		} catch {
			console.warn(
				`\n   ⚠️  Could not fetch fields for #${String(number)}`
			);
		}

		const isCommunity =
			item.labels?.some((label) =>
				label.toLowerCase().includes('communityfeedback')
			) ?? false;

		sortableItems.push({
			number,
			title: item.content.title,
			itemId: item.id,
			isCommunity,
			priority: priority || '(none)',
			priorityRank: priorityRank[priority] ?? defaultPriorityRank,
			effort: effort || '(none)',
			effortRank: effortRank[effort] ?? defaultEffortRank
		});

		// Small delay every 10 items to avoid rate limiting
		if (i % 10 === 9) {
			// eslint-disable-next-line no-await-in-loop
			await sleep(500);
		}
	}

	console.log(''); // Clear the \r line
	return sortableItems;
};

const reorderItems = async (sortedItems: SortableItem[]): Promise<void> => {
	let previousItemId: string | undefined;

	for (let i = 0; i < sortedItems.length; i++) {
		const item = sortedItems[i];
		process.stdout.write(
			`   [${String(i + 1)}/${String(sortedItems.length)}] Moving #${String(item.number)}...\r`
		);

		const afterClause = previousItemId
			? `afterId: "${previousItemId}"`
			: '';

		const mutation = `mutation {
  updateProjectV2ItemPosition(input: {
    projectId: "${projectId}"
    itemId: "${item.itemId}"
    ${afterClause}
  }) {
    items {
      nodes {
        id
      }
    }
  }
}`;

		executeMutation(mutation);
		previousItemId = item.itemId;

		// Rate limit protection
		if (i % 5 === 4) {
			// eslint-disable-next-line no-await-in-loop
			await sleep(300);
		}
	}
};

// --- Main ---

const reorderBacklog = async () => {
	const dryRun = process.argv.includes('--dry-run');

	if (dryRun) {
		console.log('🏜️  DRY RUN — no mutations will be executed\n');
	}

	// Step 1: Fetch all project items
	console.log('📦 Fetching project items...');
	const rawItems = gh(
		`project item-list ${String(projectNumber)} --owner ${owner} --limit 2000 --format json`
	);
	const projectData = JSON.parse(rawItems) as ProjectItemList;
	console.log(`   Total items in project: ${String(projectData.totalCount)}`);

	// Step 2: Filter to backlog issues from core-web
	const targetItems = projectData.items.filter(
		(item) =>
			item.content?.type === 'Issue' &&
			item.content.repository === `${owner}/${repo}` &&
			!protectedStatuses.has(item.status ?? '') &&
			(item.status === 'Backlog' || !item.status)
	);

	console.log(
		`   Backlog/no-status issues from ${repo}: ${String(targetItems.length)}`
	);

	if (targetItems.length === 0) {
		console.log('✅ Nothing to reorder.');
		return;
	}

	// Step 3: Fetch Priority & Effort for each issue
	console.log('\n🔍 Fetching issue fields (Priority & Effort)...');
	const sortableItems = await fetchIssueFields(targetItems);

	// Step 4: Sort
	const communityItems = sortableItems
		.filter((item) => item.isCommunity)
		.toSorted(
			(a, b) =>
				a.priorityRank - b.priorityRank || a.effortRank - b.effortRank
		);

	const nonCommunityItems = sortableItems
		.filter((item) => !item.isCommunity)
		.toSorted(
			(a, b) =>
				a.priorityRank - b.priorityRank || a.effortRank - b.effortRank
		);

	const sortedItems = [...communityItems, ...nonCommunityItems];

	// Step 5: Print sorted order
	console.log('\n📋 Sorted order:');
	if (communityItems.length > 0) {
		console.log(
			`\n   👩‍👧‍👦 Community Feedback (${String(communityItems.length)}):`
		);
		for (const item of communityItems) {
			console.log(
				`      #${String(item.number)} | ${item.priority} | ${item.effort} | ${item.title.slice(0, 55)}`
			);
		}
	}

	console.log(`\n   📝 Non-Community (${String(nonCommunityItems.length)}):`);
	for (const item of nonCommunityItems) {
		console.log(
			`      #${String(item.number)} | ${item.priority} | ${item.effort} | ${item.title.slice(0, 55)}`
		);
	}

	// Step 6: Reorder via GraphQL mutations
	if (dryRun) {
		console.log(
			'\n🏜️  DRY RUN complete. No changes were made to the project.'
		);
		return;
	}

	console.log(
		`\n🔀 Reordering ${String(sortedItems.length)} items in project...`
	);
	await reorderItems(sortedItems);

	console.log(
		`\n\n✅ Done! Reordered ${String(sortedItems.length)} items in the backlog.`
	);
	console.log(
		`   ${String(communityItems.length)} community items at the top, ${String(nonCommunityItems.length)} non-community items below.`
	);
};

void reorderBacklog();
