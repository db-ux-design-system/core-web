import { describe, expect, test } from 'vitest';

import { loadDefaultWorkflow } from './workflow-types.js';

const workflow = loadDefaultWorkflow(import.meta.dirname);

describe('default.yml workflow structure', () => {
	describe('triggers', () => {
		test('merge_group is present in on: trigger configuration', () => {
			const triggers = Object.keys(workflow.on);
			expect(triggers).toContain('merge_group');
		});
	});

	describe('concurrency', () => {
		test('concurrency group expression contains merge_group handling', () => {
			const { group } = workflow.concurrency;
			expect(group).toContain('merge_group');
		});

		test('cancel-in-progress expression references merge_group', () => {
			const cancelInProgress = workflow.concurrency['cancel-in-progress'];
			expect(cancelInProgress).toContain('merge_group');
		});
	});

	describe('PR-only jobs have appropriate conditions', () => {
		const prOnlyJobs = [
			'regenerate-snapshots-components',
			'regenerate-snapshots-foundations',
			'regenerate-snapshots-patternhub',
			'regenerate-snapshots',
			'commit-regenerated-snapshots'
		];

		test.each(prOnlyJobs)(
			'%s has condition requiring github.event_name == pull_request',
			(jobName) => {
				const job = workflow.jobs[jobName];
				expect(job).toBeDefined();
				expect(job.if).toContain("github.event_name == 'pull_request'");
			}
		);

		test('preview-url-pr-description has condition with github.event.pull_request != null', () => {
			const job = workflow.jobs['preview-url-pr-description'];
			expect(job).toBeDefined();
			expect(job.if).toContain('github.event.pull_request != null');
		});
	});

	describe('checks-done job', () => {
		test('checks-done job uses !cancelled() in its condition', () => {
			const job = workflow.jobs['checks-done'];
			expect(job).toBeDefined();
			expect(job.if).toContain('!cancelled()');
		});
	});
});
