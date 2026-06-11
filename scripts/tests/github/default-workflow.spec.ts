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
			'%s has condition gated to pull-request / changeset-release variants',
			(jobName) => {
				const job = workflow.jobs[jobName];
				expect(job).toBeDefined();
				expect(job.if).toContain(
					"needs.init.outputs.eventVariant == 'pull-request'"
				);
				expect(job.if).toContain(
					"needs.init.outputs.eventVariant == 'changeset-release'"
				);
			}
		);

		test('preview-url-pr-description is gated to pull-request / changeset-release variants', () => {
			const job = workflow.jobs['preview-url-pr-description'];
			expect(job).toBeDefined();
			expect(job.if).toContain(
				"needs.init.outputs.eventVariant == 'pull-request'"
			);
			expect(job.if).toContain(
				"needs.init.outputs.eventVariant == 'changeset-release'"
			);
		});
	});

	describe('checks-done job', () => {
		test('checks-done job uses !cancelled() in its condition', () => {
			const job = workflow.jobs['checks-done'];
			expect(job).toBeDefined();
			expect(job.if).toContain('!cancelled()');
		});
	});

	describe('init dependency integrity', () => {
		// Any job that reads needs.init.outputs.* must list `init` as a direct
		// dependency — the needs context only exposes direct dependencies, so a
		// missing `init` would silently resolve those outputs to empty strings.
		const jobsReferencingInit = Object.entries(workflow.jobs).filter(
			([, job]) => {
				const serialized = JSON.stringify(job);
				return serialized.includes('needs.init.outputs.');
			}
		);

		test('there is at least one job referencing init outputs', () => {
			expect(jobsReferencingInit.length).toBeGreaterThan(0);
		});

		test.each(jobsReferencingInit.map(([name]) => name))(
			'%s lists init as a direct dependency',
			(jobName) => {
				const job = workflow.jobs[jobName];
				expect(job.needs).toBeDefined();
				expect(job.needs).toContain('init');
			}
		);
	});
});
