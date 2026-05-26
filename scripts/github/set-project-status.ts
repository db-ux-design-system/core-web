#!/usr/bin/env node
import { execSync } from 'node:child_process';

const exec = (command: string): string =>
	execSync(command, { encoding: 'utf8' }).trim();

const setProjectStatus = () => {
	const projectNumber = process.env.PROJECT_NUMBER;
	const prUrl = process.env.PR_URL;
	const eventAction = process.env.EVENT_ACTION;
	const isDraft = process.env.IS_DRAFT === 'true';

	if (!projectNumber) {
		console.error('Missing required env var: PROJECT_NUMBER');
		process.exit(1);
	}
	if (!prUrl) {
		console.error('Missing required env var: PR_URL');
		process.exit(1);
	}
	if (!eventAction) {
		console.error('Missing required env var: EVENT_ACTION');
		process.exit(1);
	}

	const projectId = exec(
		`gh project list --owner db-ux-design-system --format json | jq -r --arg num "${projectNumber}" '.projects[] | select(.number == ($num | tonumber)) | .id'`
	);
	const itemId = exec(
		`gh project item-list "${projectNumber}" --owner db-ux-design-system --limit 5000 --format json | jq -r --arg pr_url "${prUrl}" '.items[] | select(.content.url == $pr_url) | .id'`
	);
	const fieldId = exec(
		`gh project field-list "${projectNumber}" --owner db-ux-design-system --format json | jq -r '.fields[] | select(.name == "Status") | .id'`
	);

	console.log(`PROJECT_ID: ${projectId}`);
	console.log(`ITEM_ID: ${itemId}`);
	console.log(`FIELD_ID: ${fieldId}`);

	if (!projectId || !itemId || !fieldId) {
		console.error(
			`Lookup failed — projectId: "${projectId}", itemId: "${itemId}", fieldId: "${fieldId}". Skipping item-edit.`
		);
		return;
	}

	// Determine the project board status based on the event type:
	// - review_requested: a reviewer was added, move to active review
	// - converted_to_draft: PR was explicitly converted to draft
	// - ready_for_review / opened (non-draft): PR is ready for review
	// - all other events (closed, assigned, edited, etc.): no status change needed
	let statusName: string | undefined;
	if (eventAction === 'review_requested') {
		statusName = '👀 Actively In Review';
	} else if (eventAction === 'converted_to_draft') {
		statusName = '🏗️ In progress';
	} else if (
		(eventAction === 'ready_for_review' ||
			eventAction === 'opened' ||
			eventAction === 'reopened') &&
		!isDraft
	) {
		statusName = '🎁 Ready for review';
	}

	if (!statusName) {
		console.log(
			`No status change needed for event "${eventAction}" (draft: ${isDraft})`
		);
		return;
	}

	const optionId = exec(
		`gh project field-list "${projectNumber}" --owner db-ux-design-system --format json | jq -r --arg name "${statusName}" '.fields[] | select(.name == "Status") | .options[] | select(.name == $name) | .id'`
	);

	console.log(`OPTION_ID: ${optionId}`);

	if (!optionId) {
		console.error(
			`Status option "${statusName}" not found in project field. Skipping item-edit.`
		);
		return;
	}

	exec(
		`gh project item-edit --project-id "${projectId}" --id "${itemId}" --field-id "${fieldId}" --single-select-option-id "${optionId}"`
	);

	// Only remove reviewers when a PR is explicitly converted to draft,
	// not on every event where the PR happens to be a draft
	if (eventAction === 'converted_to_draft') {
		exec(`gh pr edit "${prUrl}" --remove-reviewer @*`);
	}
};

setProjectStatus();
