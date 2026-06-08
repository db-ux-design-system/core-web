---
inclusion: manual
---

# Backlog Reorder Steering

Reorder the `UX Engineering Team Backlog` project (https://github.com/orgs/db-ux-design-system/projects/6/views/1) for the `db-ux-design-system/core-web` repository based on community feedback priority and effort.

## Project Context

- **Owner**: `db-ux-design-system`
- **Repo**: `core-web`
- **Project Number**: `6`
- **Project ID**: `PVT_kwDOC6qtR84Ay9u1`
- **Project Title**: `UX Engineering Team Backlog`

## Project Fields

### Status (Project Field - Single Select)

| Option ID | Name                    |
| --------- | ----------------------- |
| eddf8fe8  | Backlog                 |
| c2179bcd  | 🏗 In progress          |
| c82ba31f  | 🎁 Ready for review     |
| c42c5623  | 👀 Actively In Review   |
| 830d17a3  | 🎶 Waiting for feedback |
| fc33faff  | ⏰ready for release     |
| 2c95c020  | ✅ Done                 |

### Priority (Org-Level Issue Field - ID: 32123222)

| Option Name | Sort Order (1 = highest) |
| ----------- | ------------------------ |
| Urgent      | 1                        |
| High        | 2                        |
| Medium      | 3                        |
| Low         | 4                        |

### Effort (Org-Level Issue Field - ID: 32123225)

| Option Name | Sort Order (1 = lowest effort) |
| ----------- | ------------------------------ |
| Low         | 1                              |
| Medium      | 2                              |
| High        | 3                              |

### Community Feedback Label

- **Label**: `👩‍👧‍👦communityFeedback`

## Sorting Rules

The backlog should be sorted in the following order (top = highest priority):

### 1. Community Feedback Issues (sorted first)

Issues with the `👩‍👧‍👦communityFeedback` label, sorted by:

1. **Priority** (ascending: Urgent → High → Medium → Low)
2. **Effort** (ascending: Low → Medium → High) — within same priority, lowest effort first

### 2. Non-Community Issues (sorted after community issues)

All other issues (without the `👩‍👧‍👦communityFeedback` label), sorted by:

1. **Priority** (ascending: Urgent → High → Medium → Low)
2. **Effort** (ascending: Low → Medium → High) — within same priority, lowest effort first

### 3. Unconnected / No Status / Backlog Issues (at the end)

Issues that are:

- Not connected to the project, OR
- Have `No Status` (status field is empty), OR
- Have status `Backlog`

These should be moved to the **Backlog** status (if not already) and placed at the **end** of the list.

## IMPORTANT: Do NOT Move These Statuses

**Never reorder or change the status of issues that are in:**

- `🏗 In progress`
- `🎶 Waiting for feedback`
- `🎁 Ready for review`
- `👀 Actively In Review`
- `⏰ready for release`
- `✅ Done`

These issues stay exactly where they are. Only reorder issues in the `Backlog` status.

## Workflow

Run the reorder script:

```bash
npx tsx scripts/github/reorder-backlog.ts --dry-run  # Preview changes
npx tsx scripts/github/reorder-backlog.ts            # Apply changes
```

The script handles the full workflow automatically:

### What it does

1. Fetches all project items from project #6
2. Filters to `Backlog` or no-status issues from `core-web` (skips protected statuses)
3. Fetches Priority & Effort for each issue via REST API (`issue_field_values`)
4. Splits into community feedback vs non-community groups
5. Sorts each group by Priority (highest first), then Effort (lowest first)
6. Reorders via `updateProjectV2ItemPosition` GraphQL mutation

### Manual alternative (step by step)

Use `gh project item-list` to fetch all items in the project with status `Backlog`:

```bash
gh project item-list 6 --owner db-ux-design-system --limit 500 --format json
```

Filter the results to only include items where:

- `status` equals `Backlog`
- `content.type` equals `Issue` (skip PRs and draft issues)
- `content.repository` equals `db-ux-design-system/core-web`

### Step 2: Fetch Issue Field Values (Priority & Effort)

For each issue in the backlog, fetch its Priority and Effort using the REST API:

```bash
gh api repos/db-ux-design-system/core-web/issues/<NUMBER>
```

Extract `issue_field_values` from the response:

- Field ID `32123222` → Priority (Urgent/High/Medium/Low)
- Field ID `32123225` → Effort (High/Medium/Low)

**Optimization**: Batch multiple issue fetches or use pagination to reduce API calls.

### Step 3: Categorize and Sort

Split backlog issues into two groups:

**Group A — Community Feedback**:

- Issues with `👩‍👧‍👦communityFeedback` in their labels

**Group B — Non-Community**:

- All other backlog issues

Sort each group by:

1. Priority rank: Urgent=1, High=2, Medium=3, Low=4, None/unset=5
2. Effort rank (tiebreaker): Low=1, Medium=2, High=3, None/unset=4

Final order: `[Group A sorted] → [Group B sorted]`

### Step 4: Check for Unconnected Issues

Use the GitHub CLI to find open issues in `core-web` that are NOT in the project:

```bash
gh issue list --repo db-ux-design-system/core-web --state open --limit 500 --json number,title,labels
```

Compare against the project item list. For any issue not in the project:

1. Add it to the project: `gh project item-add 6 --owner db-ux-design-system --url <issue-url>`
2. Set its status to `Backlog`

Include these newly added issues at the end of the sorted list (after Group B).

### Step 5: Reorder Using GraphQL Mutation

Use the `updateProjectV2ItemPosition` GraphQL mutation to reorder items:

```graphql
mutation {
	updateProjectV2ItemPosition(
		input: {
			projectId: "PVT_kwDOC6qtR84Ay9u1"
			itemId: "<ITEM_ID_TO_MOVE>"
			afterId: "<ITEM_ID_TO_PLACE_AFTER>"
		}
	) {
		items {
			nodes {
				id
			}
		}
	}
}
```

To place an item at the very top (first position), omit `afterId`:

```graphql
mutation {
	updateProjectV2ItemPosition(
		input: {
			projectId: "PVT_kwDOC6qtR84Ay9u1"
			itemId: "<ITEM_ID_TO_MOVE>"
		}
	) {
		items {
			nodes {
				id
			}
		}
	}
}
```

Execute mutations sequentially from the first item to the last in the desired sort order.

**Rate Limiting**: Add a small delay between mutations if you encounter rate limit errors. The GitHub API allows ~5000 requests per hour.

### Step 6: Report Results

After reordering, provide a summary:

```markdown
## Backlog Reorder Complete

### Community Feedback Issues (sorted first)

| #   | Title | Priority | Effort |
| --- | ----- | -------- | ------ |
| ... | ...   | ...      | ...    |

### Non-Community Issues

| #   | Title | Priority | Effort |
| --- | ----- | -------- | ------ |
| ... | ...   | ...      | ...    |

### Newly Added to Project

| #   | Title |
| --- | ----- |
| ... | ...   |

### Skipped (active status — not moved)

- X issues in "In progress"
- X issues in "Waiting for feedback"
- X issues in "Ready for review"
- etc.
```

## Technical Notes

### Running GraphQL Mutations via CLI

Save the mutation to a temporary file and execute:

```bash
# Write mutation to file
# Then execute:
gh api graphql -F query=@tmp-mutation.graphql
```

**Important**: PowerShell has quoting issues with inline GraphQL. Always use file-based queries (`-F query=@file.graphql`).

### Fetching Issue Field Values in Bulk

To reduce API calls, you can fetch multiple issues at once using the search endpoint or paginate through issues. Each REST API call to `/repos/{owner}/{repo}/issues/{number}` includes `issue_field_values`.

### Setting Status to Backlog

If an item needs its status changed to Backlog:

```bash
gh project item-edit --project-id PVT_kwDOC6qtR84Ay9u1 --id <ITEM_ID> --field-id PVTSSF_lADOC6qtR84Ay9u1zgo1SA0 --single-select-option-id eddf8fe8
```

- Status field ID: `PVTSSF_lADOC6qtR84Ay9u1zgo1SA0`
- Backlog option ID: `eddf8fe8`

## Error Handling

- If `updateProjectV2ItemPosition` fails with a permission error, check `gh auth status` and ensure the token has the `project` scope. Refresh with: `gh auth refresh -s project`
- If the project has more than 500 items, use pagination (run `item-list` multiple times with cursor)
- If an issue cannot be found in the REST API, it may have been deleted or transferred — skip it

## Cleanup

After the workflow completes, delete any temporary GraphQL files:

```bash
del tmp-query.graphql
del tmp-mutation.graphql
```
