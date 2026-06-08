import fc from 'fast-check';
import { describe, expect, test } from 'vitest';

/**
 * Pure function that mirrors the GitHub Actions concurrency group expression
 * from default.yml:
 *
 * ${{
 *   github.event_name == 'release' &&
 *   format('release-{0}', github.ref) ||
 *   github.event_name == 'merge_group' &&
 *   format('merge-queue-{0}', github.ref) ||
 *   format('{0}-{1}', github.workflow, github.ref)
 * }}
 */
interface EventContext {
	event_name: string;
	ref: string;
	workflow: string;
}

const WORKFLOW_NAME = 'Default Pipeline';

function evaluateConcurrencyGroup(context: EventContext): string {
	if (context.event_name === 'release') {
		return `release-${context.ref}`;
	}
	if (context.event_name === 'merge_group') {
		return `merge-queue-${context.ref}`;
	}
	return `${context.workflow}-${context.ref}`;
}

/**
 * Validates: Requirements 3.1, 3.3, 6.3
 */
describe('default.yml concurrency group expression - property tests', () => {
	/**
	 * **Validates: Requirements 3.1**
	 *
	 * Property 3: Merge group concurrency group uniqueness
	 *
	 * For any two distinct merge_group events with different github.ref values,
	 * the concurrency group expression SHALL produce different group identifiers,
	 * ensuring the runs do not cancel each other.
	 */
	describe('Property 3: Merge group concurrency group uniqueness', () => {
		test('two distinct merge_group events with different refs produce different group identifiers', () => {
			fc.assert(
				fc.property(
					fc.string({ minLength: 1 }),
					fc.string({ minLength: 1 }),
					(ref1, ref2) => {
						fc.pre(ref1 !== ref2);

						const group1 = evaluateConcurrencyGroup({
							event_name: 'merge_group',
							ref: ref1,
							workflow: WORKFLOW_NAME
						});
						const group2 = evaluateConcurrencyGroup({
							event_name: 'merge_group',
							ref: ref2,
							workflow: WORKFLOW_NAME
						});

						expect(group1).not.toBe(group2);
					}
				),
				{ numRuns: 200 }
			);
		});

		test('merge_group events produce groups with merge-queue- prefix', () => {
			fc.assert(
				fc.property(fc.string({ minLength: 1 }), (ref) => {
					const group = evaluateConcurrencyGroup({
						event_name: 'merge_group',
						ref,
						workflow: WORKFLOW_NAME
					});

					expect(group).toBe(`merge-queue-${ref}`);
					expect(group.startsWith('merge-queue-')).toBe(true);
				}),
				{ numRuns: 200 }
			);
		});
	});

	/**
	 * **Validates: Requirements 3.3, 6.3**
	 *
	 * Property 5: Existing concurrency behavior preserved for non-merge_group events
	 *
	 * For any event context where event_name is one of pull_request, push, release,
	 * or workflow_dispatch, the concurrency group expression SHALL produce the expected
	 * results: release events get unique release-{ref} groups, and non-release,
	 * non-merge_group events get {workflow}-{ref} groups.
	 */
	describe('Property 5: Existing concurrency behavior preserved for non-merge_group events', () => {
		test('release events always get release-{ref} groups', () => {
			fc.assert(
				fc.property(fc.string({ minLength: 1 }), (ref) => {
					const group = evaluateConcurrencyGroup({
						event_name: 'release',
						ref,
						workflow: WORKFLOW_NAME
					});

					expect(group).toBe(`release-${ref}`);
				}),
				{ numRuns: 200 }
			);
		});

		test('non-release, non-merge_group events get {workflow}-{ref} groups', () => {
			const nonSpecialEvents = fc.constantFrom(
				'pull_request',
				'push',
				'workflow_dispatch'
			);

			fc.assert(
				fc.property(
					nonSpecialEvents,
					fc.string({ minLength: 1 }),
					fc.string({ minLength: 1 }),
					(eventName, ref, workflow) => {
						const group = evaluateConcurrencyGroup({
							event_name: eventName,
							ref,
							workflow
						});

						expect(group).toBe(`${workflow}-${ref}`);
					}
				),
				{ numRuns: 200 }
			);
		});

		test('non-main PR pushes get {workflow}-{ref} groups using Default Pipeline workflow name', () => {
			fc.assert(
				fc.property(
					fc
						.string({ minLength: 1 })
						.filter((ref) => ref !== 'refs/heads/main'),
					(ref) => {
						const group = evaluateConcurrencyGroup({
							event_name: 'pull_request',
							ref,
							workflow: WORKFLOW_NAME
						});

						expect(group).toBe(`${WORKFLOW_NAME}-${ref}`);
					}
				),
				{ numRuns: 200 }
			);
		});

		test('release events produce groups distinct from workflow-ref pattern', () => {
			fc.assert(
				fc.property(
					fc.string({ minLength: 1 }),
					fc.string({ minLength: 1 }),
					(ref, workflow) => {
						const releaseGroup = evaluateConcurrencyGroup({
							event_name: 'release',
							ref,
							workflow
						});
						const pushGroup = evaluateConcurrencyGroup({
							event_name: 'push',
							ref,
							workflow
						});

						// Release groups use release-{ref} prefix, not workflow-ref
						expect(releaseGroup).toBe(`release-${ref}`);
						expect(releaseGroup).not.toBe(pushGroup);
					}
				),
				{ numRuns: 200 }
			);
		});
	});
});
