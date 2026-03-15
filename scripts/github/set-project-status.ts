#!/usr/bin/env node
import { execSync } from 'node:child_process';

const exec = (command: string): string =>
	execSync(command, { encoding: 'utf8' }).trim();

const setProjectStatus = () => {
	const projectNumber = process.env.PROJECT_NUMBER ?? '6';
	const prUrl = process.env.PR_URL;
	const eventAction = process.env.EVENT_ACTION;
	const isDraft = process.env.IS_DRAFT === 'true';

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

	let statusName: string;
	if (eventAction === 'review_requested') {
		statusName = '👀 Actively In Review';
	} else if (isDraft) {
		statusName = '🏗️ In progress';
	} else {
		statusName = '🎁 Ready for review';
	}

	const optionId = exec(
		`gh project field-list "${projectNumber}" --owner db-ux-design-system --format json | jq -r --arg name "${statusName}" '.fields[] | select(.name == "Status") | .options[] | select(.name == $name) | .id'`
	);

	console.log(`OPTION_ID: ${optionId}`);

	exec(
		`gh project item-edit --project-id "${projectId}" --id "${itemId}" --field-id "${fieldId}" --single-select-option-id "${optionId}"`
	);

	if (isDraft) {
		exec(`gh pr edit "${prUrl}" --remove-reviewer @*`);
	}
};

setProjectStatus();
