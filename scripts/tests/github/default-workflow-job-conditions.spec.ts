import fc from 'fast-check';
import { describe, expect, test } from 'vitest';

import { loadDefaultWorkflow } from './workflow-types.js';

/**
 * Validates: Requirements 2.2, 5.1, 5.2, 5.3
 *
 * Property 1: Build and test jobs execute on merge_group events
 * Property 2: PR-only jobs skip on merge_group events
 */

const workflow = loadDefaultWorkflow(import.meta.dirname);

// --- GitHub Actions condition evaluator ---

interface GitHubContext {
	event_name: string;
	ref: string;
	actor: string;
	repository_owner: string;
	event: {
		pull_request: object | null;
	};
}

/**
 * Simplified evaluator for GitHub Actions `if:` expressions.
 * Handles the subset of expression syntax used in default.yml job conditions.
 */
function evaluateCondition(
	condition: string,
	context: GitHubContext,
	needsOutputs: Record<string, Record<string, string>> = {}
): boolean {
	// Strip surrounding ${{ }} if present
	let expr = condition.trim();
	if (expr.startsWith('${{') && expr.endsWith('}}')) {
		expr = expr.slice(3, -2).trim();
	}

	return evaluateExpression(expr, context, needsOutputs);
}

function evaluateExpression(
	expr: string,
	context: GitHubContext,
	needsOutputs: Record<string, Record<string, string>>
): boolean {
	expr = expr.trim();

	// Handle !cancelled() - always true for our purposes (job is running)
	if (expr === '!cancelled()') {
		return true;
	}

	// Handle negation
	if (expr.startsWith('!') && !expr.startsWith('!cancelled')) {
		const inner = expr.slice(1).trim();
		return !evaluateExpression(inner, context, needsOutputs);
	}

	// Handle && (logical AND) - split on && respecting parentheses
	const andParts = splitLogicalOperator(expr, '&&');
	if (andParts.length > 1) {
		return andParts.every((part) =>
			evaluateExpression(part, context, needsOutputs)
		);
	}

	// Handle || (logical OR) - split on || respecting parentheses
	const orParts = splitLogicalOperator(expr, '||');
	if (orParts.length > 1) {
		return orParts.some((part) =>
			evaluateExpression(part, context, needsOutputs)
		);
	}

	// Handle parenthesized expression
	if (expr.startsWith('(') && expr.endsWith(')')) {
		return evaluateExpression(expr.slice(1, -1), context, needsOutputs);
	}

	// Handle equality comparisons
	if (expr.includes('==')) {
		const [left, right] = expr.split('==').map((s) => s.trim());
		const leftVal = resolveValue(left, context, needsOutputs);
		const rightVal = resolveValue(right, context, needsOutputs);
		return leftVal === rightVal;
	}

	// Handle inequality comparisons
	if (expr.includes('!=')) {
		const [left, right] = expr.split('!=').map((s) => s.trim());
		const leftVal = resolveValue(left, context, needsOutputs);
		const rightVal = resolveValue(right, context, needsOutputs);
		return leftVal !== rightVal;
	}

	// Handle !cancelled() within more complex expressions
	if (expr.includes('!cancelled()')) {
		// For expressions containing !cancelled(), replace it with true
		const replaced = expr.replace('!cancelled()', 'true');
		return evaluateExpression(replaced, context, needsOutputs);
	}

	// Handle boolean literals
	if (expr === 'true') return true;
	if (expr === 'false') return false;

	// Handle null checks (value resolves to truthy/falsy)
	const resolved = resolveValue(expr, context, needsOutputs);
	return resolved !== null && resolved !== undefined && resolved !== 'null';
}

function resolveValue(
	expr: string,
	context: GitHubContext,
	needsOutputs: Record<string, Record<string, string>>
): unknown {
	expr = expr.trim();

	// String literals
	if (
		(expr.startsWith("'") && expr.endsWith("'")) ||
		(expr.startsWith('"') && expr.endsWith('"'))
	) {
		return expr.slice(1, -1);
	}

	// Null literal
	if (expr === 'null') return null;

	// Boolean literals
	if (expr === 'true') return 'true';
	if (expr === 'false') return 'false';

	// GitHub context references
	if (expr === 'github.event_name') return context.event_name;
	if (expr === 'github.ref') return context.ref;
	if (expr === 'github.actor') return context.actor;
	if (expr === 'github.repository_owner') return context.repository_owner;
	if (expr === 'github.event.pull_request') return context.event.pull_request;
	if (expr === 'github.event.pull_request.head.repo.owner.login') {
		return context.event.pull_request ? context.repository_owner : null;
	}

	// Needs outputs
	const needsMatch = expr.match(/^needs\.([^.]+)\.outputs\.([^.]+)$/);
	if (needsMatch) {
		const [, jobName, outputName] = needsMatch;
		return needsOutputs[jobName]?.[outputName] ?? '';
	}

	// Needs result
	const needsResultMatch = expr.match(/^needs\.([^.]+)\.result$/);
	if (needsResultMatch) {
		return 'success'; // Assume success for property testing
	}

	// contains() function
	const containsMatch = expr.match(/^contains\((.+),\s*(.+)\)$/);
	if (containsMatch) {
		const [, haystack, needle] = containsMatch;
		const haystackVal = String(
			resolveValue(haystack, context, needsOutputs)
		);
		const needleVal = String(resolveValue(needle, context, needsOutputs));
		return haystackVal.includes(needleVal) ? 'true' : null;
	}

	return expr;
}

/**
 * Split an expression by a logical operator (&& or ||),
 * respecting parentheses and function calls.
 */
function splitLogicalOperator(expr: string, operator: string): string[] {
	const parts: string[] = [];
	let depth = 0;
	let current = '';

	for (let i = 0; i < expr.length; i++) {
		const char = expr[i];
		if (char === '(' || char === '{') depth++;
		else if (char === ')' || char === '}') depth--;

		if (depth === 0 && expr.slice(i, i + operator.length) === operator) {
			parts.push(current.trim());
			current = '';
			i += operator.length - 1;
		} else {
			current += char;
		}
	}

	parts.push(current.trim());
	return parts.length > 1 ? parts : [expr];
}

// --- Arbitraries for generating random merge_group contexts ---

const mergeGroupContextArbitrary: fc.Arbitrary<GitHubContext> = fc.record({
	event_name: fc.constant('merge_group'),
	ref: fc.oneof(
		fc
			.string({ minLength: 1, maxLength: 50 })
			.map((s) => `refs/heads/gh-readonly-queue/main/pr-${s}`),
		fc
			.tuple(fc.nat({ max: 9999 }), fc.nat({ max: 0xffffffff }))
			.map(
				([n, hex]) =>
					`refs/heads/gh-readonly-queue/main/pr-${n}-${hex.toString(16).padStart(8, '0')}`
			)
	),
	actor: fc.oneof(
		fc.constant('developer'),
		fc.constant('dependabot[bot]'),
		fc.string({ minLength: 1, maxLength: 20 })
	),
	repository_owner: fc.oneof(
		fc.constant('db-ux-design-system'),
		fc.string({ minLength: 1, maxLength: 30 })
	),
	event: fc.constant({ pull_request: null })
});

// --- Job classification ---

const prOnlyJobs = [
	'regenerate-snapshots-components',
	'regenerate-snapshots-foundations',
	'regenerate-snapshots-patternhub',
	'regenerate-snapshots',
	'commit-regenerated-snapshots',
	'preview-url-pr-description',
	'test-screen-reader'
];

const buildTestJobs = ['init', 'checks-done'];

// --- Property Tests ---

describe('default.yml job condition evaluation (property-based)', () => {
	/**
	 * **Validates: Requirements 2.2, 5.2**
	 *
	 * Property 1: Build and test jobs execute on merge_group events
	 *
	 * For any job classified as a build or test job in the Default Pipeline,
	 * when the event_name is 'merge_group', the job's `if` condition
	 * (if present) SHALL evaluate to true (or be absent), allowing the job to execute.
	 */
	describe('Property 1: Build and test jobs execute on merge_group events', () => {
		test.each(buildTestJobs)(
			'%s condition evaluates to true (or is absent) on merge_group events',
			(jobName) => {
				const job = workflow.jobs[jobName];
				expect(job).toBeDefined();

				const condition: string | undefined = job.if;

				fc.assert(
					fc.property(mergeGroupContextArbitrary, (context) => {
						if (!condition) {
							// No condition means job always runs
							return true;
						}

						// For jobs that check repository_owner, use the matching owner
						const testContext =
							condition.includes('repository_owner') &&
							condition.includes('db-ux-design-system')
								? {
										...context,
										repository_owner: 'db-ux-design-system'
									}
								: context;

						// Provide default needs outputs (non-changeset-release)
						const needsOutputs: Record<
							string,
							Record<string, string>
						> = {
							init: {
								isChangesetRelease: 'false',
								playwrightVersion: '1.60.0',
								baseUrl: '/core-web/review/test',
								release: 'false',
								preRelease: 'false',
								branchName: 'test-branch',
								repoName: 'core-web',
								repoOwner: 'db-ux-design-system',
								'test-ally': 'false'
							}
						};

						const result = evaluateCondition(
							condition,
							testContext,
							needsOutputs
						);
						return result === true;
					}),
					{ numRuns: 100 }
				);
			}
		);
	});

	/**
	 * **Validates: Requirements 5.1, 5.3**
	 *
	 * Property 2: PR-only jobs skip on merge_group events
	 *
	 * For any job whose execution depends on github.event.pull_request or
	 * github.event_name == 'pull_request', when the event_name is 'merge_group',
	 * the job's condition SHALL evaluate to false, causing the job to be skipped.
	 */
	describe('Property 2: PR-only jobs skip on merge_group events', () => {
		test.each(prOnlyJobs)(
			'%s condition evaluates to false on merge_group events',
			(jobName) => {
				const job = workflow.jobs[jobName];
				expect(job).toBeDefined();

				const condition: string | undefined = job.if;
				expect(condition).toBeDefined();

				fc.assert(
					fc.property(mergeGroupContextArbitrary, (context) => {
						// Provide needs outputs that would make jobs "want" to run
						// (e.g., test failures that would trigger snapshot regeneration)
						const needsOutputs: Record<
							string,
							Record<string, string>
						> = {
							init: {
								isChangesetRelease: 'false',
								playwrightVersion: '1.60.0',
								baseUrl: '/core-web/review/test',
								'test-ally': 'false'
							},
							'test-components': { result: 'failure' },
							'test-foundations': { result: 'failure' },
							'test-showcase-patternhub': {
								result: 'failure'
							},
							'test-showcase-angular': {
								result: 'failure'
							},
							'test-showcase-react': { result: 'failure' },
							'test-showcase-vue': { result: 'failure' },
							'test-showcase-stencil': {
								result: 'failure'
							},
							'regenerate-snapshots-components': {
								result: 'success'
							},
							'regenerate-snapshots-foundations': {
								result: 'success'
							},
							'regenerate-snapshots-patternhub': {
								result: 'success'
							},
							'regenerate-snapshots': { result: 'success' }
						};

						const result = evaluateCondition(
							condition!,
							context,
							needsOutputs
						);
						return result === false;
					}),
					{ numRuns: 100 }
				);
			}
		);
	});
});
