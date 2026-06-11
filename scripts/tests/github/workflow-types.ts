import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parse } from 'yaml';

export type WorkflowJob = {
	[key: string]: unknown;
	if?: string;
	needs?: string[];
	uses?: string;
};

export type Workflow = {
	on: Record<string, unknown>;
	concurrency: {
		group: string;
		'cancel-in-progress': string;
	};
	jobs: Record<string, WorkflowJob>;
};

export function loadDefaultWorkflow(dirname: string): Workflow {
	const workflowPath = resolve(
		dirname,
		'../../../.github/workflows/default.yml'
	);
	const workflowContent = readFileSync(workflowPath, 'utf8');
	return parse(workflowContent) as Workflow;
}
