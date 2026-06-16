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
 *   REMINDER_BOT_LOGIN, FEEDBACK_CODEOWNERS
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

// Codeowners are the people who request feedback on an issue (see
// .github/CODEOWNERS). A "Waiting for feedback" item is only considered to be
// waiting on its author once one of these has asked a question, and the author
// is only treated as having responded when they comment *after* that request.
// Overridable via the comma-separated FEEDBACK_CODEOWNERS variable.
const codeowners = new Set(
	envString('FEEDBACK_CODEOWNERS', 'mfranzke,nmerget,michaelmkraus,bruno-sch')
		.split(',')
		.map((login) => login.trim().replace(/^@/, '').toLowerCase())
		.filter((login) => login.length > 0)
);

const isCodeowner = (login: string | undefined): boolean =>
	login !== undefined && codeowners.has(login.toLowerCase());

// --- Types ---

type FieldValueNode = {
	__typename: string;
	field?: { id?: string; name?: string };
	name?: string;
	optionId?: string;
};

type ProjectItemNode = {
	id: string;
	fieldValues: {
		nodes: FieldValueNode[];
		pageInfo?: PageInfo;
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

// Paginated REST helper. `gh api --paginate` follows every `Link` header, but
// without `--slurp` each page is emitted as a *separate* top-level JSON array,
// so an endpoint that spans more than one page produces invalid JSON that
// `JSON.parse` rejects. `--slurp` wraps every page into one outer array (an
// array of arrays for array endpoints), which we flatten back into a single
// array so the caller always receives one valid JSON document.
const ghRestPaginated = (endpoint: string): string => {
	const separator = endpoint.includes('?') ? '&' : '?';
	const paged = `${endpoint}${separator}per_page=100`;
	try {
		const raw = execSync(`gh api --paginate --slurp "${paged}"`, {
			encoding: 'utf8',
			maxBuffer: 10 * 1024 * 1024
		}).trim();
		const pages = JSON.parse(raw) as unknown[];
		const flattened = pages.flatMap((page) =>
			Array.isArray(page) ? (page as unknown[]) : [page]
		);
		return JSON.stringify(flattened);
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

// Validate that the configured Status field actually exists in the project
// before any filtering happens. If `STATUS_FIELD_ID` is stale or mistyped,
// `getStatusOptionId()` returns undefined for *every* item and `isBacklogItem`
// would then treat active "In progress" / "Waiting for feedback" / review
// items as "no status" and reposition them. Fail closed instead of silently
// interpreting an unresolved field as "no status".
const assertStatusFieldExists = (): void => {
	const query = `{
  node(id: "${statusFieldId}") {
    __typename
    ... on ProjectV2SingleSelectField {
      id
      project { id }
      options { id }
    }
  }
}`;

	let resolvedId: string | undefined;
	let resolvedProjectId: string | undefined;
	let optionIds: string[] = [];
	try {
		const raw = ghGraphql(query);
		const parsed = JSON.parse(raw) as {
			data?: {
				node?:
					| {
							__typename?: string;
							id?: string;
							project?: { id?: string };
							options?: Array<{ id?: string }>;
					  }
					| undefined;
			};
		};
		const node = parsed.data?.node;
		if (node?.__typename === 'ProjectV2SingleSelectField') {
			resolvedId = node.id;
			resolvedProjectId = node.project?.id;
			optionIds = (node.options ?? [])
				.map((option) => option.id)
				.filter((id): id is string => typeof id === 'string');
		}
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(
			`Could not resolve the configured Status field (${statusFieldId}): ${message}. ` +
				'Refusing to run so active items are not misclassified as "no status".',
			{ cause: error }
		);
	}

	if (resolvedId !== statusFieldId) {
		throw new Error(
			`Configured Status field (${statusFieldId}) was not found as a single-select ` +
				`field in project ${projectId}. Refusing to run so active items are not ` +
				'misclassified as "no status". Check the STATUS_FIELD_ID / ' +
				'BACKLOG_STATUS_FIELD_ID configuration.'
		);
	}

	if (resolvedProjectId !== projectId) {
		throw new Error(
			`Configured Status field (${statusFieldId}) belongs to project ` +
				`${resolvedProjectId ?? 'unknown'}, not the configured project ${projectId}. ` +
				'Refusing to run so active items are not misclassified as "no status" ' +
				'(none of the fetched field values would match a field from another ' +
				'project). Check the STATUS_FIELD_ID / BACKLOG_STATUS_FIELD_ID and ' +
				'PROJECT_ID configuration.'
		);
	}

	// Validate the configured single-select option IDs against the field's
	// actual options. A mistyped/deleted Backlog option passes the field check
	// above but then never equals any real item's optionId: every genuine
	// Backlog item is silently dropped from reordering, and moveItemToBacklog()
	// fails with a swallowed error. Fail closed instead.
	const optionSet = new Set(optionIds);

	if (!optionSet.has(backlogOptionId)) {
		throw new Error(
			`Configured Backlog option (${backlogOptionId}) was not found among the ` +
				`Status field options [${optionIds.join(', ')}]. Refusing to run so ` +
				'Backlog items are not silently omitted from reordering and ' +
				'author-response transitions do not fail. Check the BACKLOG_OPTION_ID / ' +
				'BACKLOG_STATUS_BACKLOG_OPTION_ID configuration.'
		);
	}

	// The Waiting-for-feedback option ID is optional (the script falls back to
	// matching the display name). Only validate it when it has been configured.
	if (
		waitingForFeedbackOptionId &&
		!optionSet.has(waitingForFeedbackOptionId)
	) {
		throw new Error(
			`Configured "Waiting for feedback" option (${waitingForFeedbackOptionId}) ` +
				`was not found among the Status field options [${optionIds.join(', ')}]. ` +
				'Refusing to run so waiting items are not misclassified. Check the ' +
				'WAITING_FOR_FEEDBACK_OPTION_ID / BACKLOG_WAITING_FOR_FEEDBACK_OPTION_ID ' +
				'configuration.'
		);
	}
};

// --- Paginated project item fetcher ---

// Fetch any remaining pages of an item's `fieldValues` connection and append
// them to `node.fieldValues.nodes`. The items query requests the first page
// (100 values); the vast majority of items fit in one page, so this issues a
// follow-up request only for the rare item that overflows. Without it, a Status
// value sitting on a later page would be invisible to getStatusOptionId() and
// the active item would be wrongly treated as "no status".
const ensureAllFieldValues = async (node: ProjectItemNode): Promise<void> => {
	let { pageInfo } = node.fieldValues;
	let cursor = pageInfo?.endCursor;

	while (pageInfo?.hasNextPage && cursor) {
		const query = `{
  node(id: "${node.id}") {
    ... on ProjectV2Item {
      fieldValues(first: 100, after: "${cursor}") {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          __typename
          ... on ProjectV2ItemFieldSingleSelectValue {
            field { ... on ProjectV2SingleSelectField { id name } }
            optionId
            name
          }
        }
      }
    }
  }
}`;

		const raw = ghGraphql(query);
		const parsed = JSON.parse(raw) as {
			data?: {
				node?: {
					fieldValues?: {
						nodes?: FieldValueNode[];
						pageInfo?: PageInfo;
					};
				};
			};
		};
		const fieldValues = parsed.data?.node?.fieldValues;
		if (!fieldValues) break;

		node.fieldValues.nodes.push(...(fieldValues.nodes ?? []));
		pageInfo = fieldValues.pageInfo;
		cursor = pageInfo?.endCursor;

		// eslint-disable-next-line no-await-in-loop
		await sleep(200);
	}
};

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
          fieldValues(first: 100) {
            pageInfo {
              hasNextPage
              endCursor
            }
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
			// The fieldValues connection is itself paginated. An item with more
			// than one page of populated fields could carry its Status value on
			// a later page; without fetching the rest, getStatusOptionId() would
			// return undefined and an active item would be misclassified as "no
			// status" and reordered into the backlog. Pull the remaining pages
			// before filtering so classification always sees every field value.
			// eslint-disable-next-line no-await-in-loop
			await ensureAllFieldValues(node);

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

// Re-fetch a single project item's current state and Status immediately before
// repositioning it. `sortedItems` is a snapshot taken earlier in the run, so an
// issue may have been closed or moved to an active status (In progress, review,
// etc.) in the meantime. Repositioning it then would violate the invariant that
// active and closed issues are never moved, dropping a freshly active item into
// the backlog ordering. Returns true only when the item is still an open,
// backlog/no-status issue and is therefore safe to move.
const isStillBacklogItem = async (itemId: string): Promise<boolean> => {
	const query = `{
  node(id: "${itemId}") {
    ... on ProjectV2Item {
      id
      fieldValues(first: 100) {
        pageInfo { hasNextPage endCursor }
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
        ... on Issue { number title state author { login } }
      }
    }
  }
}`;

	const raw = ghGraphql(query);
	const parsed = JSON.parse(raw) as {
		data?: { node?: ProjectItemNode | undefined };
	};
	const node = parsed.data?.node;
	if (!node) return false;

	// The Status value could sit on a later fieldValues page; pull the rest
	// before classifying so we don't misread an active item as "no status".
	await ensureAllFieldValues(node);

	return isOpenIssue(node) && isBacklogItem(node);
};

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

		// Revalidate against the live project state. If the item was closed or
		// moved to an active status since the snapshot was taken, skip it (and
		// keep the previous anchor) so we never reposition an active/closed
		// issue into the backlog ordering.
		// eslint-disable-next-line no-await-in-loop
		const stillBacklog = await isStillBacklogItem(item.itemId);
		if (!stillBacklog) {
			console.log(
				`\n   ⏭️  #${String(item.number)} is no longer an open backlog item — skipping`
			);
			// eslint-disable-next-line no-await-in-loop
			await sleep(200);
			continue;
		}

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

type IssueComment = {
	author: string | undefined;
	createdAt: string | undefined;
};

// Fetch the most recent comments (newest last). The REST "list issue comments"
// endpoint is ordered by ascending id and ignores sort/direction, so we use
// GraphQL `comments(last: N)` to reliably get the newest ones. We need more
// than the single latest comment so we can tell whether the issue author
// responded *after* feedback was requested, rather than only inspecting who
// commented last.
const fetchRecentComments = (number: number): IssueComment[] => {
	const query = `{
  repository(owner: "${owner}", name: "${repo}") {
    issue(number: ${String(number)}) {
      comments(last: 30) {
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
	const nodes = parsed.data?.repository?.issue?.comments?.nodes ?? [];
	return nodes.map((node) => ({
		author: node.author?.login,
		createdAt: node.createdAt
	}));
};

const timeOf = (comment: IssueComment | undefined): number =>
	comment?.createdAt ? new Date(comment.createdAt).getTime() : 0;

// Returns the most recent comment whose author satisfies `predicate`.
const lastCommentBy = (
	comments: IssueComment[],
	predicate: (author: string) => boolean
): IssueComment | undefined => {
	for (let i = comments.length - 1; i >= 0; i--) {
		const { author } = comments[i];
		if (author && predicate(author)) {
			return comments[i];
		}
	}

	return undefined;
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

	let comments: IssueComment[];
	try {
		comments = fetchRecentComments(number);
	} catch {
		console.warn(
			`\n   ⚠️  Could not fetch comments for #${String(number)}`
		);
		return;
	}

	if (comments.length === 0) return;

	// The feedback request is the latest comment from a codeowner *other than
	// the issue author* — that is the point in time the issue started waiting on
	// its author. Maintainers can open their own issues, so an author who is
	// also a codeowner must be excluded here; otherwise their own reply would
	// be picked as the "request", can never be later than itself, and the item
	// would stay in "Waiting for feedback" and eventually get a stale reminder.
	// Without such a request there is nothing to chase, so we leave it untouched.
	const feedbackRequest = lastCommentBy(
		comments,
		(author) => author !== issueAuthor && isCodeowner(author)
	);
	if (!feedbackRequest) return;
	const feedbackRequestTime = timeOf(feedbackRequest);

	// Did the author respond *after* the feedback was requested? Comparing
	// timestamps (rather than just "is the latest commenter the author")
	// avoids treating an old author comment followed by a manual status change
	// as a fresh response.
	const lastAuthorComment = lastCommentBy(
		comments,
		(author) => author === issueAuthor
	);
	const authorResponded =
		lastAuthorComment !== undefined &&
		timeOf(lastAuthorComment) > feedbackRequestTime;

	if (authorResponded) {
		// Creator responded → move back to Backlog (codeowners need to act).
		console.log(
			`   📥 #${String(number)}: creator @${issueAuthor} responded → moving to Backlog`
		);
		if (!dryRun) {
			moveItemToBacklog(item.id, number);
		}

		return;
	}

	// Author has not responded since the feedback request. If the bot already
	// reminded *after* that request, don't remind again (prevents weekly
	// repeats). A later third-party comment doesn't reset this, since we only
	// look at codeowner requests, author responses and bot reminders.
	const lastBotReminder = lastCommentBy(
		comments,
		(author) => author === botLogin
	);
	if (lastBotReminder && timeOf(lastBotReminder) > feedbackRequestTime) {
		return;
	}

	// Only remind once the feedback request itself is old enough.
	if (Date.now() - feedbackRequestTime < staleThresholdMs) {
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

	// Fail closed if the configured Status field cannot be resolved, otherwise
	// every item would look like "no status" and active items would be moved.
	assertStatusFieldExists();

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
