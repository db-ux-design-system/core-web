import fc from 'fast-check';
import { describe, expect, test } from 'vitest';

/**
 * Evaluates the cancel-in-progress expression from default.yml:
 *
 * ${{
 *   github.event_name != 'release' &&
 *   github.event_name != 'merge_group' &&
 *   github.ref != 'refs/heads/main'
 * }}
 *
 * Returns true only when the event is NOT release, NOT merge_group,
 * and the ref is NOT refs/heads/main.
 */
function evaluateCancelInProgress(context: {
	eventName: string;
	ref: string;
}): boolean {
	return (
		context.eventName !== 'release' &&
		context.eventName !== 'merge_group' &&
		context.ref !== 'refs/heads/main'
	);
}

/** Arbitrary for generating random git ref strings */
const arbRef = fc.oneof(
	fc.constant('refs/heads/main'),
	fc.constant('refs/heads/develop'),
	fc.constant('refs/heads/feature/some-feature'),
	fc
		.string({ minLength: 1, maxLength: 30 })
		.map((s) => `refs/heads/${s.replaceAll(/\s/g, '-')}`),
	fc
		.string({ minLength: 1, maxLength: 30 })
		.map((s) => `refs/pull/${s.replaceAll(/\s/g, '-')}/merge`)
);

/** Arbitrary for generating random event names */
const arbEventName = fc.oneof(
	fc.constant('pull_request'),
	fc.constant('push'),
	fc.constant('merge_group'),
	fc.constant('release'),
	fc.constant('workflow_dispatch'),
	fc
		.string({ minLength: 1, maxLength: 20 })
		.map((s) => s.replaceAll(/\s/g, ''))
);

/** Arbitrary for non-main refs (never produces 'refs/heads/main') */
const arbNonMainRef = fc.oneof(
	fc.constant('refs/heads/develop'),
	fc.constant('refs/heads/feature/some-feature'),
	fc
		.string({ minLength: 1, maxLength: 30 })
		.filter((s) => s !== 'main')
		.map((s) => `refs/heads/${s.replaceAll(/\s/g, '-')}`),
	fc
		.string({ minLength: 1, maxLength: 30 })
		.map((s) => `refs/pull/${s.replaceAll(/\s/g, '-')}/merge`)
);

/** Arbitrary for non-release, non-merge_group event names */
const arbNonProtectedEventName = fc.oneof(
	fc.constant('pull_request'),
	fc.constant('push'),
	fc.constant('workflow_dispatch'),
	fc
		.string({ minLength: 1, maxLength: 20 })
		.filter((s) => s !== 'release' && s !== 'merge_group')
		.map((s) => s.replaceAll(/\s/g, ''))
);

describe('cancel-in-progress expression property tests', () => {
	/**
	 * **Validates: Requirements 3.2**
	 *
	 * Property 4: Cancel-in-progress is false for merge_group events
	 *
	 * For any event context where event_name is 'merge_group',
	 * cancel-in-progress is always false (regardless of ref).
	 */
	test('Property 4: merge_group events always produce cancel-in-progress = false', () => {
		fc.assert(
			fc.property(arbRef, (ref) => {
				const result = evaluateCancelInProgress({
					eventName: 'merge_group',
					ref
				});
				expect(result).toBe(false);
			}),
			{ numRuns: 200 }
		);
	});

	/**
	 * **Validates: Requirements 3.3**
	 *
	 * Property 5: Existing concurrency behavior preserved (cancel-in-progress aspect)
	 *
	 * For any event context where event_name is 'release',
	 * cancel-in-progress is always false (regardless of ref).
	 */
	test('Property 5a: release events always produce cancel-in-progress = false', () => {
		fc.assert(
			fc.property(arbRef, (ref) => {
				const result = evaluateCancelInProgress({
					eventName: 'release',
					ref
				});
				expect(result).toBe(false);
			}),
			{ numRuns: 200 }
		);
	});

	/**
	 * **Validates: Requirements 3.3**
	 *
	 * Property 5: Existing concurrency behavior preserved (cancel-in-progress aspect)
	 *
	 * For any event where ref is 'refs/heads/main',
	 * cancel-in-progress is always false (regardless of event_name).
	 */
	test('Property 5b: main branch pushes always produce cancel-in-progress = false', () => {
		fc.assert(
			fc.property(arbEventName, (eventName) => {
				const result = evaluateCancelInProgress({
					eventName,
					ref: 'refs/heads/main'
				});
				expect(result).toBe(false);
			}),
			{ numRuns: 200 }
		);
	});

	/**
	 * **Validates: Requirements 3.3**
	 *
	 * Property 5: Existing concurrency behavior preserved (cancel-in-progress aspect)
	 *
	 * For non-main, non-release, non-merge_group events (e.g., pull_request
	 * with a non-main ref), cancel-in-progress is true.
	 */
	test('Property 5c: non-main PR pushes produce cancel-in-progress = true', () => {
		fc.assert(
			fc.property(
				arbNonProtectedEventName,
				arbNonMainRef,
				(eventName, ref) => {
					const result = evaluateCancelInProgress({
						eventName,
						ref
					});
					expect(result).toBe(true);
				}
			),
			{ numRuns: 200 }
		);
	});
});
