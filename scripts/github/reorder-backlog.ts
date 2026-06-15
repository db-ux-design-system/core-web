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
 * Usage: node scripts/github/reorder-backlog.ts [--dry-run]
 * Requires: gh CLI authenticated with `project` scope
 *
 * Configuration via environment variables (all optional, fall back to the
 * defaults below). These can be provided as GitHub repository/organization
 * variables so the IDs don't have to live in the source:
 *   PROJECT_OWNER, PROJECT_REPO, PROJECT_ID, PROJECT_NUMBER,
 *   PRIORITY_FIELD_ID, EFFORT_FIELD_ID, STATUS_FIELD_ID,
 *   BACKLOG_OPTION_ID, IN_PROGRESS_OPTION_ID, COMMUNITY_FEEDBACK_LABEL,
 *   WAITING_FOR_FEEDBACK_STATUS, WAITING_FOR_FEEDBACK_OPTION_ID,
 *   REMINDER_BOT_LOGIN
 */

import { execSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Small helpers to read configuration from the environment while keeping a
// sensible default. Empty strings (e.g. an unset GitHub variable) fall back too.
const envString = (name: string, fallback: string): string => {
	const value = process.env[name];
	return value && value.length > 0 ? value : fallback;
};

const envNumber = (name: string, fallback: number): number => {
	const value = process.env[name];
	return value && value.length > 0 ? Number(value) : fallback;
};

const owner = envString('PROJECT_OWNER', 'db-ux-design-system');
const repo = envString('PROJECT_REPO', 'core-web');
const projectId = envString('PROJECT_ID', 'PVT_kwDOC6qtR84Ay9u1');

const priorityFieldId = envNumber('PRIORITY_FIELD_ID', 32_123_222);
const effortFieldId = envNumber('EFFORT_FIELD_ID', 32_123_225);

// Project field IDs
const statusFieldId = envString(
	'STATUS_FIELD_ID',
	'PVTSSF_lADOC6qtR84Ay9u1zgo1SA0'
);
const backlogOptionId = envString('BACKLOG_OPTION_ID', 'eddf8fe8');

// Label used to flag community feedback issues
const communityFeedbackLabel = envString(
	'COMMUNITY_FEEDBACK_LABEL',
	'communityFeedback'
);

// Status for items waiting on the issue author. Single-select option labels
// are editable, so prefer matching the stable option ID when it is configured
// and only fall back to the display name otherwise.
const waitingForFeedbackStatus = envString(
	'WAITING_FOR_FEEDBACK_STATUS',
	'🎶 Waiting for feedback'
);
const waitingForFeedbackOptionId = envString(
	'WAITING_FOR_FEEDBACK_OPTION_ID',
	''
);

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

// Stale threshold for "Waiting for Feedback" reminders (14 days)
const staleThresholdMs = 14 * 24 * 60 * 60 * 1000;

// Bot login used for posting reminders. This script is authenticated with the
// AUTO_MERGE GitHub App, whose bot identity in this repository is
// `dbux-auto-merge-pr[bot]`.
const botLogin = envString('REMINDER_BOT_LOGIN', 'dbux-auto-merge-pr[bot]');

// --- Types ---

type ProjectItemNode = {
	id: string;
	fieldValues: {
		nodes: Array<{
			__typename: string;
			field?: { id?: string; name?: string };
			name?: string;
			optionId?: string;
		}>;
	};
	content:
		| {
				__typename: string;
				number?: number;
				title?: string;
				state?: string;
				repository?: { nameWithOwner: string };
				labels?: { nodes: Array<{ name: string }> };
				author?: { login: string };
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

// Paginated REST helper. `gh api --paginate` follows every `Link` header and
// concatenates array responses into a single JSON array, so endpoints whose
// results span multiple pages (default 30 per page) are fully retrieved.
const ghRestPaginated = (endpoint: string): string => {
	const separator = endpoint.includes('?') ? '&' : '?';
	const paged = `${endpoint}${separator}per_page=100`;
	try {
		return execSync(`gh api --paginate "${paged}"`, {
			encoding: 'utf8',
			maxBuffer: 10 * 1024 * 1024
		}).trim();
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(`gh api failed: ${paged}`);
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
			fv.field?.id === statusFieldId
		) {
			return fv.name;
		}
	}

	return undefined;
};

// Returns the configured Status option ID for an item. Comparing option IDs is
// robust against field/option renames (GitHub allows both), whereas matching
// display names would silently break and misclassify items.
const getStatusOptionId = (item: ProjectItemNode): string | undefined => {
	for (const fv of item.fieldValues.nodes) {
		if (
			fv.__typename === 'ProjectV2ItemFieldSingleSelectValue' &&
			fv.field?.id === statusFieldId
		) {
			return fv.optionId;
		}
	}

	return undefined;
};

// An item belongs to the backlog ordering when it has the Backlog status or no
// status at all (compared by the stable option ID).
const isBacklogItem = (item: ProjectItemNode): boolean => {
	const optionId = getStatusOptionId(item);
	return optionId === backlogOptionId || !optionId;
};

// Matches "Waiting for feedback" by the stable option ID when configured,
// otherwise falls back to the (editable) display name.
const isWaitingForFeedback = (item: ProjectItemNode): boolean => {
	if (waitingForFeedbackOptionId) {
		return getStatusOptionId(item) === waitingForFeedbackOptionId;
	}

	return getItemStatus(item) === waitingForFeedbackStatus;
};

// Only OPEN issues take part in the active-status automation. A closed issue
// whose project status was not updated must not be reminded, demoted, or
// reordered.
const isOpenIssue = (item: ProjectItemNode): boolean =>
	item.content?.__typename === 'Issue' && item.content.state === 'OPEN';

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
			? 'labels(first: 100) { nodes { name } }'
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
          fieldValues(first: 50) {
            nodes {
              __typename
              ... on ProjectV2ItemFieldSingleSelectValue {
                field { ... on ProjectV2SingleSelectField { id name } }
                optionId
                name
              }
            }
          }
          content {
            __typename
            ... on Issue {
              number
              title
              state
              author { login }
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

// --- Fetch issue fields and build sortable list ---

const extractFieldValues = (
	fieldValues: IssueFieldValue[]
): { priority: string; effort: string } => {
	let priority = '';
	let effort = '';

	for (const fv of fieldValues) {
		if (fv.issue_field_id === priorityFieldId && fv.single_select_option) {
			priority = fv.single_select_option.name;
		}

		if (fv.issue_field_id === effortFieldId && fv.single_select_option) {
			effort = fv.single_select_option.name;
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
			const issueJson = ghRestPaginated(
				`repos/${owner}/${repo}/issues/${String(number)}/issue-field-values`
			);
			const fieldValues = JSON.parse(issueJson) as IssueFieldValue[];
			const fields = extractFieldValues(fieldValues);
			priority = fields.priority;
			effort = fields.effort;
		} catch (error: unknown) {
			// A failed read (rate limit, transient API error, missing scope)
			// must not be silently treated as "no priority/effort", otherwise
			// the whole backlog would be reordered based on incomplete data.
			// Abort the run instead. Genuinely absent values returned by a
			// successful request are fine and handled via the default ranks.
			const message =
				error instanceof Error ? error.message : String(error);
			throw new Error(
				`Failed to fetch issue fields for #${String(number)}: ${message}`,
				{ cause: error }
			);
		}

		const labels = item.content?.labels?.nodes ?? [];
		const isCommunity = labels.some((label) =>
			label.name
				.toLowerCase()
				.includes(communityFeedbackLabel.toLowerCase())
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

const reorderItems = async (
	sortedItems: SortableItem[],
	anchorItemId: string | undefined
): Promise<void> => {
	// Seed the chain with the last project item that is NOT part of the
	// backlog. Omitting afterId would move the first backlog item to the very
	// top of the whole project (GitHub treats a missing afterId as "top"),
	// pushing the entire backlog ahead of In Progress / Ready for Review items.
	// Anchoring after the last non-backlog item keeps the backlog at the end.
	let previousItemId: string | undefined = anchorItemId;

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

		// Pace writes well under GitHub's secondary rate limit (~80 content-
		// generating requests per minute). One mutation roughly every 800ms
		// keeps us around ~75/min even in the worst case, so a large backlog
		// does not abort mid-run with a partial order.
		// eslint-disable-next-line no-await-in-loop
		await sleep(800);
	}
};

// --- Process "Waiting for Feedback" items ---

// Fetch the actual latest comment. The REST "list issue comments" endpoint is
// ordered by ascending id and ignores sort/direction, so we use GraphQL
// `comments(last: 1)` to reliably get the newest one.
const fetchLatestComment = (
	number: number
): { author: string | undefined; createdAt: string | undefined } => {
	const query = `{
  repository(owner: "${owner}", name: "${repo}") {
    issue(number: ${String(number)}) {
      comments(last: 1) {
        nodes {
          author { login }
          createdAt
        }
      }
    }
  }
}`;
	const raw = ghGraphql(query);
	const parsed = JSON.parse(raw) as {
		data?: {
			repository?: {
				issue?: {
					comments?: {
						nodes?: Array<{
							author?: { login?: string };
							createdAt?: string;
						}>;
					};
				};
			};
		};
	};
	const latest = parsed.data?.repository?.issue?.comments?.nodes?.[0];
	return { author: latest?.author?.login, createdAt: latest?.createdAt };
};

const moveItemToBacklog = (itemId: string, number: number): void => {
	const mutation = `mutation {
  updateProjectV2ItemFieldValue(input: {
    projectId: "${projectId}"
    itemId: "${itemId}"
    fieldId: "${statusFieldId}"
    value: { singleSelectOptionId: "${backlogOptionId}" }
  }) {
    projectV2Item { id }
  }
}`;
	try {
		ghGraphql(mutation);
	} catch {
		console.warn(`\n   ⚠️  Failed to move #${String(number)} to Backlog`);
	}
};

const postStaleReminder = (issueAuthor: string, number: number): void => {
	try {
		const body =
			'👋 @' +
			issueAuthor +
			' — This issue has been waiting for feedback for a while. Is this still an issue for you? If so, please let us know and we will prioritize accordingly. If not, feel free to close it. Thanks!';
		execSync(
			`gh issue comment ${String(number)} --repo ${owner}/${repo} --body "${body}"`,
			{ encoding: 'utf8' }
		);
	} catch {
		console.warn(`\n   ⚠️  Failed to post comment on #${String(number)}`);
	}
};

const processWaitingItem = (item: ProjectItemNode, dryRun: boolean): void => {
	const number = item.content?.number;
	if (!number) return;

	const issueAuthor = item.content?.author?.login;
	if (!issueAuthor) return;

	let lastCommentAuthor: string | undefined;
	let lastCommentCreatedAt: string | undefined;
	try {
		const latest = fetchLatestComment(number);
		lastCommentAuthor = latest.author;
		lastCommentCreatedAt = latest.createdAt;
	} catch {
		console.warn(
			`\n   ⚠️  Could not fetch comments for #${String(number)}`
		);
		return;
	}

	if (!lastCommentAuthor) return;

	// Skip if the last comment is from our reminder bot (already reminded).
	if (lastCommentAuthor === botLogin) return;

	if (lastCommentAuthor === issueAuthor) {
		// Creator responded → move back to Backlog (codeowners need to act)
		console.log(
			`   📥 #${String(number)}: creator @${issueAuthor} responded → moving to Backlog`
		);
		if (!dryRun) {
			moveItemToBacklog(item.id, number);
		}

		return;
	}

	// Latest comment is from someone other than the creator and the bot —
	// either a codeowner who asked the author a question, or another
	// contributor. In both cases the issue is waiting on the author, so we
	// remind them once the comment is old enough (staleness threshold).
	const commentAge = lastCommentCreatedAt
		? Date.now() - new Date(lastCommentCreatedAt).getTime()
		: 0;

	if (commentAge < staleThresholdMs) {
		// Not stale yet, skip.
		return;
	}

	console.log(
		`   💬 #${String(number)}: still waiting → posting stale reminder`
	);
	if (!dryRun) {
		postStaleReminder(issueAuthor, number);
	}
};

const processWaitingForFeedback = async (
	items: ProjectItemNode[],
	dryRun: boolean
): Promise<void> => {
	console.log('\n⏳ Processing "Waiting for Feedback" items...');
	const waitingItems = items.filter(
		(item) => isOpenIssue(item) && isWaitingForFeedback(item)
	);

	if (waitingItems.length === 0) {
		console.log('   ✅ No items waiting for feedback');
		return;
	}

	console.log(
		`   Found ${String(waitingItems.length)} items waiting for feedback`
	);

	for (const item of waitingItems) {
		processWaitingItem(item, dryRun);
		// eslint-disable-next-line no-await-in-loop
		await sleep(200);
	}
};

// --- Main ---

const reorderBacklog = async () => {
	const dryRun = process.argv.includes('--dry-run');

	if (dryRun) {
		console.log('🏜️  DRY RUN — no mutations will be executed\n');
	}

	// Step 0: Sync status based on linked PRs
	console.log('\n🔄 Syncing status based on linked pull requests...');
	const allCoreWebItems = await fetchProjectItems(
		(node) => {
			if (node.content?.__typename !== 'Issue') return false;
			return (
				node.content.repository?.nameWithOwner === `${owner}/${repo}`
			);
		},
		'Scanning',
		true
	);

	// Step 0b: Process "Waiting for Feedback" items
	await processWaitingForFeedback(allCoreWebItems, dryRun);

	// Step 1: Fetch backlog items via targeted GraphQL query
	console.log(`\n📦 Fetching backlog items from ${repo}...`);
	const backlogItems = await fetchProjectItems(
		(node) => {
			if (!isOpenIssue(node)) return false;
			if (node.content?.repository?.nameWithOwner !== `${owner}/${repo}`)
				return false;
			return isBacklogItem(node);
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

	// Determine the anchor: the last project item (any repo / status) that is
	// not part of the backlog we're about to reorder. The backlog is chained
	// after it so it always sits below the In Progress / Ready for Review etc.
	// items instead of jumping to the top of the project.
	const backlogItemIds = new Set(sortedItems.map((item) => item.itemId));
	const allProjectItems = await fetchProjectItems(
		() => true,
		'Locating backlog anchor',
		false
	);
	let anchorItemId: string | undefined;
	for (const projectItem of allProjectItems) {
		if (!backlogItemIds.has(projectItem.id)) {
			anchorItemId = projectItem.id;
		}
	}

	await reorderItems(sortedItems, anchorItemId);

	console.log(
		`\n\n✅ Done! Reordered ${String(sortedItems.length)} items in the backlog.`
	);
	console.log(
		`   ${String(communityItems.length)} community items at the top, ${String(nonCommunityItems.length)} non-community items below.`
	);
};

void reorderBacklog();
