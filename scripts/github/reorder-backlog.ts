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
 * Additionally archives "Done" items older than 1 month.
 *
 * Never moves issues that are "In progress" or "Waiting for feedback".
 *
 * Usage: node scripts/github/reorder-backlog.ts [--dry-run]
 * Requires: gh CLI authenticated with `project` scope
 */

import { execSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const owner = 'db-ux-design-system';
const repo = 'core-web';
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

// Max age for Done items before archiving (in milliseconds)
const archiveThresholdMs = 30 * 24 * 60 * 60 * 1000; // 1 month

// --- Types ---

type ProjectItemNode = {
	id: string;
	updatedAt: string;
	fieldValues: {
		nodes: Array<{
			__typename: string;
			field?: { name: string };
			name?: string;
		}>;
	};
	content:
		| {
				__typename: string;
				number?: number;
				title?: string;
				repository?: { nameWithOwner: string };
				labels?: { nodes: Array<{ name: string }> };
				closedAt?: string | undefined;
		  }
		| undefined;
};

type PageInfo = {
	hasNextPage: boolean;
	endCursor: string | undefined;
};

type ProjectItemsResponse = {
	data: {
		node: {
			items: {
				nodes: ProjectItemNode[];
				pageInfo: PageInfo;
			};
		};
	};
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

const ghGraphql = (query: string): string => {
	const temporaryFile = join(tmpdir(), `gh-query-${randomUUID()}.graphql`);
	writeFileSync(temporaryFile, query);
	try {
		const result = execSync(`gh api graphql -F query=@${temporaryFile}`, {
			encoding: 'utf8',
			maxBuffer: 50 * 1024 * 1024
		}).trim();
		return result;
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		if (message.includes('rate limit')) {
			console.error('\n❌ GraphQL rate limit exceeded. Try again later.');
			process.exit(1);
		}

		throw error;
	} finally {
		try {
			unlinkSync(temporaryFile);
		} catch {
			// File already removed
		}
	}
};

const ghRest = (endpoint: string): string => {
	try {
		return execSync(`gh api ${endpoint}`, {
			encoding: 'utf8',
			maxBuffer: 10 * 1024 * 1024
		}).trim();
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(`gh api failed: ${endpoint}`);
		console.error(message);
		throw error;
	}
};

const sleep = async (ms: number): Promise<void> =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, ms);
	});

const getItemStatus = (item: ProjectItemNode): string | undefined => {
	for (const fv of item.fieldValues.nodes) {
		if (
			fv.__typename === 'ProjectV2ItemFieldSingleSelectValue' &&
			fv.field?.name === 'Status'
		) {
			return fv.name;
		}
	}

	return undefined;
};

// --- Paginated project item fetcher ---

const fetchProjectItems = async (
	filter: (node: ProjectItemNode) => boolean,
	progressLabel: string,
	includeLabels = false
): Promise<ProjectItemNode[]> => {
	const allItems: ProjectItemNode[] = [];
	let cursor: string | undefined;
	let page = 0;

	while (true) {
		page++;
		const afterClause = cursor ? `, after: "${cursor}"` : '';
		const labelsFragment = includeLabels
			? 'labels(first: 20) { nodes { name } }'
			: '';

		const query = `{
  node(id: "${projectId}") {
    ... on ProjectV2 {
      items(first: 100${afterClause}) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          updatedAt
          fieldValues(first: 10) {
            nodes {
              __typename
              ... on ProjectV2ItemFieldSingleSelectValue {
                field { ... on ProjectV2SingleSelectField { name } }
                name
              }
            }
          }
          content {
            __typename
            ... on Issue {
              number
              title
              closedAt
              repository { nameWithOwner }
              ${labelsFragment}
            }
          }
        }
      }
    }
  }
}`;

		process.stdout.write(`   ${progressLabel}, page ${String(page)}...\r`);
		const raw = ghGraphql(query);
		const response = JSON.parse(raw) as ProjectItemsResponse;
		const { nodes, pageInfo } = response.data.node.items;

		for (const node of nodes) {
			if (filter(node)) {
				allItems.push(node);
			}
		}

		if (!pageInfo.hasNextPage) break;
		cursor = pageInfo.endCursor;

		// eslint-disable-next-line no-await-in-loop
		await sleep(200);
	}

	console.log('');
	return allItems;
};

// --- Archive old Done items ---

const archiveDoneItems = async (dryRun: boolean): Promise<number> => {
	console.log(
		'\n🗄️  Checking for Done items to archive (older than 1 month)...'
	);

	const doneItems = await fetchProjectItems(
		(node) => getItemStatus(node) === '✅ Done',
		'Scanning for Done items'
	);

	console.log(`   Found ${String(doneItems.length)} items in Done status`);

	const now = Date.now();
	const toArchive = doneItems.filter((item) => {
		const dateString = item.content?.closedAt ?? item.updatedAt;
		const itemDate = new Date(dateString).getTime();
		return now - itemDate > archiveThresholdMs;
	});

	console.log(`   ${String(toArchive.length)} items are older than 1 month`);

	if (toArchive.length === 0 || dryRun) {
		if (dryRun && toArchive.length > 0) {
			console.log('   🏜️  DRY RUN — would archive these items:');
			for (const item of toArchive.slice(0, 10)) {
				const title = item.content?.title ?? '(unknown)';
				console.log(`      - ${title}`);
			}

			if (toArchive.length > 10) {
				console.log(
					`      ... and ${String(toArchive.length - 10)} more`
				);
			}
		}

		return 0;
	}

	console.log(`   Archiving ${String(toArchive.length)} items...`);

	for (let i = 0; i < toArchive.length; i++) {
		const item = toArchive[i];
		process.stdout.write(
			`   [${String(i + 1)}/${String(toArchive.length)}] Archiving...\r`
		);

		const mutation = `mutation {
  archiveProjectV2Item(input: {
    projectId: "${projectId}"
    itemId: "${item.id}"
  }) {
    item { id }
  }
}`;

		try {
			ghGraphql(mutation);
		} catch (error: unknown) {
			const message =
				error instanceof Error ? error.message : String(error);
			if (message.includes('required scopes')) {
				console.error(
					'\n   ❌ Token lacks `project` write scope. Archiving requires a token with the `project` scope.'
				);
				console.error(
					'      Skipping archive step. This will work in CI with the GitHub App token.'
				);
				return 0;
			}

			console.warn(`\n   ⚠️  Failed to archive item ${item.id}`);
		}

		if (i % 5 === 4) {
			// eslint-disable-next-line no-await-in-loop
			await sleep(300);
		}
	}

	console.log(`\n   ✅ Archived ${String(toArchive.length)} Done items`);
	return toArchive.length;
};

// --- Fetch issue fields and build sortable list ---

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

const fetchIssueFields = async (
	items: ProjectItemNode[]
): Promise<SortableItem[]> => {
	const sortableItems: SortableItem[] = [];

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		const number = item.content?.number;
		if (!number) continue;

		process.stdout.write(
			`   [${String(i + 1)}/${String(items.length)}] #${String(number)}...\r`
		);

		let priority = '';
		let effort = '';

		try {
			const issueJson = ghRest(
				`repos/${owner}/${repo}/issues/${String(number)}`
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

		const labels = item.content?.labels?.nodes ?? [];
		const isCommunity = labels.some((label) =>
			label.name.toLowerCase().includes('communityfeedback')
		);

		sortableItems.push({
			number,
			title: item.content?.title ?? '',
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

	console.log('');
	return sortableItems;
};

// --- Reorder items via GraphQL ---

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
    clientMutationId
  }
}`;

		ghGraphql(mutation);
		previousItemId = item.itemId;

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

	// Step 0: Archive old Done items
	const archived = await archiveDoneItems(dryRun);
	if (archived > 0) {
		console.log(`   (freed ${String(archived)} items from the project)`);
	}

	// Step 1: Fetch backlog items via targeted GraphQL query
	console.log('\n📦 Fetching backlog items from core-web...');
	const backlogItems = await fetchProjectItems(
		(node) => {
			if (node.content?.__typename !== 'Issue') return false;
			if (node.content.repository?.nameWithOwner !== `${owner}/${repo}`)
				return false;
			const status = getItemStatus(node);
			return status === 'Backlog' || !status;
		},
		'Fetching',
		true
	);

	console.log(
		`   Found ${String(backlogItems.length)} backlog/no-status issues`
	);

	if (backlogItems.length === 0) {
		console.log('✅ Nothing to reorder.');
		return;
	}

	// Step 1b: Set status to "Backlog" for items with no status
	const noStatusItems = backlogItems.filter((item) => !getItemStatus(item));

	if (noStatusItems.length > 0 && !dryRun) {
		console.log(
			`\n📌 Setting ${String(noStatusItems.length)} no-status items to "Backlog"...`
		);
		for (let i = 0; i < noStatusItems.length; i++) {
			const item = noStatusItems[i];
			process.stdout.write(
				`   [${String(i + 1)}/${String(noStatusItems.length)}] Setting status...\r`
			);

			const mutation = `mutation {
  updateProjectV2ItemFieldValue(input: {
    projectId: "${projectId}"
    itemId: "${item.id}"
    fieldId: "PVTSSF_lADOC6qtR84Ay9u1zgo1SA0"
    value: { singleSelectOptionId: "eddf8fe8" }
  }) {
    projectV2Item { id }
  }
}`;

			try {
				ghGraphql(mutation);
			} catch {
				console.warn(
					`\n   ⚠️  Failed to set status for item ${item.id}`
				);
			}

			if (i % 5 === 4) {
				// eslint-disable-next-line no-await-in-loop
				await sleep(300);
			}
		}

		console.log('');
	} else if (noStatusItems.length > 0) {
		console.log(
			`\n   🏜️  DRY RUN — would set ${String(noStatusItems.length)} items to "Backlog" status`
		);
	}

	// Step 2: Fetch Priority & Effort for each issue
	console.log('\n🔍 Fetching issue fields (Priority & Effort)...');
	const sortableItems = await fetchIssueFields(backlogItems);

	// Step 3: Sort
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

	// Step 4: Print sorted order
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

	// Step 5: Reorder via GraphQL mutations
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
