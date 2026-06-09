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

// GitHub context shape mirrors the GitHub Actions expression context.
// Property names use underscores to match GitHub's API naming (e.g., event_name, pull_request).
type GitHubContext = {
	event_name: string;
	ref: string;
	actor: string;
	repository_owner: string;
	event: {
		pull_request: Record<string, unknown> | undefined;
	};
};

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
	let expression = condition.trim();
	if (expression.startsWith('${{') && expression.endsWith('}}')) {
		expression = expression.slice(3, -2).trim();
	}

	return evaluateExpression(expression, context, needsOutputs);
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
		const leftValue = resolveValue(left, context, needsOutputs);
		const rightValue = resolveValue(right, context, needsOutputs);
		return leftValue === rightValue;
	}

	// Handle inequality comparisons
	if (expr.includes('!=')) {
		const [left, right] = expr.split('!=').map((s) => s.trim());
		const leftValue = resolveValue(left, context, needsOutputs);
		const rightValue = resolveValue(right, context, needsOutputs);
		return leftValue !== rightValue;
	}

	// Handle !cancelled() within more complex expressions
	if (expr.includes('!cancelled()')) {
		// Replace !cancelled() with true for evaluation
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

// eslint-disable-next-line complexity
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
	if (expr === 'github.event.pull_request')
		return context.event.pull_request ?? null;
	if (expr === 'github.event.pull_request.head.repo.owner.login') {
		return context.event.pull_request ? context.repository_owner : null;
	}

	// Needs outputs
	const needsMatch = /^needs\.([^.]+)\.outputs\.([^.]+)$/.exec(expr);
	if (needsMatch) {
		const [, jobName, outputName] = needsMatch;
		return needsOutputs[jobName]?.[outputName] ?? '';
	}

	// Needs result
	const needsResultMatch = /^needs\.([^.]+)\.result$/.exec(expr);
	if (needsResultMatch) {
		// Assume success for property testing
		return 'success';
	}

	// Contains() function
	const containsMatch = /^contains\((.+),\s*(.+)\)$/.exec(expr);
	if (containsMatch) {
		const [, haystack, needle] = containsMatch;
		const haystackValue = String(
			resolveValue(haystack, context, needsOutputs)
		);
		const needleValue = String(resolveValue(needle, context, needsOutputs));
		return haystackValue.includes(needleValue) ? 'true' : null;
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

/* eslint-disable @typescript-eslint/naming-convention */
const mergeGroupContextArbitrary: fc.Arbitrary<GitHubContext> = fc.record({
	event_name: fc.constant('merge_group'),
	ref: fc.oneof(
		fc
			.string({ minLength: 1, maxLength: 50 })
			.map((s) => `refs/heads/gh-readonly-queue/main/pr-${s}`),
		fc
			.tuple(fc.nat({ max: 9999 }), fc.nat({ max: 0xff_ff_ff_ff }))
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
	event: fc.constant({ pull_request: undefined })
});

const pullRequestContextArbitrary: fc.Arbitrary<GitHubContext> = fc.record({
	event_name: fc.constant('pull_request'),
	ref: fc.constant('refs/pull/123/merge'),
	actor: fc.oneof(
		fc.constant('developer'),
		fc.constant('dependabot[bot]'),
		fc.string({ minLength: 1, maxLength: 20 })
	),
	repository_owner: fc.constant('db-ux-design-system'),
	event: fc.constant({ pull_request: { number: 123 } })
});
/* eslint-enable @typescript-eslint/naming-convention */

// --- Job classification ---

const prOnlyJobs = [
	'regenerate-snapshots-components',
	'regenerate-snapshots-foundations',
	'regenerate-snapshots-patternhub',
	'regenerate-snapshots',
	'commit-regenerated-snapshots',
	'preview-url-pr-description'
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
										// eslint-disable-next-line @typescript-eslint/naming-convention
										repository_owner: 'db-ux-design-system'
									}
								: context;

						// Provide default needs outputs (non-changeset-release)
						const needsOutputs: Record<
							string,
							Record<string, string>
						> = {
							init: {
								playwrightVersion: '1.60.0',
								baseUrl: '/core-web/review/test',
								release: 'false',
								preRelease: 'false',
								branchName: 'test-branch',
								repoName: 'core-web',
								repoOwner: 'db-ux-design-system',
								eventVariant: 'merge-queue'
							}
						};

						const result = evaluateCondition(
							condition,
							testContext,
							needsOutputs
						);

						return result;
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
								playwrightVersion: '1.60.0',
								baseUrl: '/core-web/review/test',
								eventVariant: 'merge-queue'
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

						return !result;
					}),
					{ numRuns: 100 }
				);
			}
		);
	});

	/**
	 * Property 3: Screen-reader test runs only in the merge queue
	 *
	 * The costly guidepup/VoiceOver screen-reader tests are gated to the
	 * merge_group event. On pull_request events the job SHALL be skipped,
	 * and on merge_group events it SHALL run when relevant changes are present.
	 */
	describe('Property 3: Screen-reader test is merge-queue only', () => {
		test('test-screen-reader skips on pull_request events', () => {
			const job = workflow.jobs['test-screen-reader'];
			expect(job).toBeDefined();

			const condition: string | undefined = job.if;
			expect(condition).toBeDefined();

			fc.assert(
				fc.property(pullRequestContextArbitrary, (context) => {
					// Even when changes that would otherwise trigger it are present
					const needsOutputs: Record<
						string,
						Record<string, string>
					> = {
						init: {
							eventVariant: 'pull-request',
							docsOnly: 'false',
							changesAria: 'true',
							changesComponents: 'true',
							changesShowcases: 'true',
							needsFullPipeline: 'true',
							playwrightVersion: '1.60.0'
						}
					};

					const result = evaluateCondition(
						condition!,
						context,
						needsOutputs
					);

					return !result;
				}),
				{ numRuns: 50 }
			);
		});

		test('test-screen-reader runs on merge_group when aria snapshots changed', () => {
			const job = workflow.jobs['test-screen-reader'];
			expect(job).toBeDefined();

			const condition: string = job.if;

			fc.assert(
				fc.property(mergeGroupContextArbitrary, (context) => {
					const needsOutputs: Record<
						string,
						Record<string, string>
					> = {
						init: {
							eventVariant: 'merge-queue',
							docsOnly: 'false',
							changesAria: 'true',
							changesComponents: 'false',
							changesShowcases: 'false',
							needsFullPipeline: 'false',
							playwrightVersion: '1.60.0'
						}
					};

					const result = evaluateCondition(
						condition,
						context,
						needsOutputs
					);

					return result;
				}),
				{ numRuns: 50 }
			);
		});

		test('test-screen-reader skips on merge_group when only docs changed', () => {
			const job = workflow.jobs['test-screen-reader'];
			expect(job).toBeDefined();

			const condition: string = job.if;

			fc.assert(
				fc.property(mergeGroupContextArbitrary, (context) => {
					const needsOutputs: Record<
						string,
						Record<string, string>
					> = {
						init: {
							eventVariant: 'merge-queue',
							docsOnly: 'true',
							changesAria: 'false',
							changesComponents: 'false',
							changesShowcases: 'false',
							needsFullPipeline: 'false',
							playwrightVersion: '1.60.0'
						}
					};

					const result = evaluateCondition(
						condition,
						context,
						needsOutputs
					);

					return !result;
				}),
				{ numRuns: 50 }
			);
		});

		test('test-screen-reader skips on merge_group when only non-component changes (e.g. lint-only)', () => {
			const job = workflow.jobs['test-screen-reader'];
			expect(job).toBeDefined();

			const condition: string = job.if;

			fc.assert(
				fc.property(mergeGroupContextArbitrary, (context) => {
					// Not docs-only, but none of the component-affecting flags set
					const needsOutputs: Record<
						string,
						Record<string, string>
					> = {
						init: {
							eventVariant: 'merge-queue',
							docsOnly: 'false',
							changesAria: 'false',
							changesComponents: 'false',
							changesShowcases: 'false',
							needsFullPipeline: 'false',
							playwrightVersion: '1.60.0'
						}
					};

					const result = evaluateCondition(
						condition,
						context,
						needsOutputs
					);

					return !result;
				}),
				{ numRuns: 50 }
			);
		});
	});
});
