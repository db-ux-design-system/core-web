#!/usr/bin/env node
/* =============================================================================
 * validate-plan.cjs — lint a Composition Plan BEFORE it is pasted into use_figma.
 * -----------------------------------------------------------------------------
 * WHY: a plan used to be validated only by the Figma sandbox, which means every
 * mistake cost a full round trip of model output — and a JS syntax error in the
 * payload produced nothing but "SyntaxError: expecting ']'", with no hint where.
 * Loading the plan here surfaces the syntax error with file and line, and the
 * shared validator then reports every registry/shape violation at once, for free.
 *
 * ONE SOURCE OF TRUTH: the rules live in src/45-plan-validation.js, the module the
 * RUNTIME also calls at the top of renderPlan. This file only supplies the
 * registry data (via build-registry-maps.cjs) and prints the result — it must
 * never grow rules of its own, or the two surfaces would drift.
 *
 * USAGE
 *   pnpm --filter @db-ux/agent-cli run plan:lint <plan-file> [more files…]
 *
 *   A plan file is either
 *     *.json         the plan object itself, or
 *     *.cjs          module.exports = { PLAN } | PLAN  (CommonJS), or
 *     *.mjs / *.js   export const PLAN = … | export default …  (ESM).
 *   Authoring the plan as a .cjs/.mjs module is the recommended flow: helper
 *   functions stay allowed, and the file is parsed locally before it is pasted.
 *
 * EXIT CODES: 0 = every plan valid, 1 = at least one finding or unreadable file.
 * ========================================================================== */
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { buildMaps } = require('./build-registry-maps.cjs');

const VALIDATOR_SRC = path.join(__dirname, 'src', '45-plan-validation.js');
const REGISTRIES = path.join(__dirname, 'registries');

/* Load the shared validator the same way build-runtime.cjs verifies its checksum
 * twin: the module is a PURE plain script (no `figma`, no imports), so it can be
 * evaluated as-is instead of being duplicated for Node. */
function loadValidator() {
	const src = fs.readFileSync(VALIDATOR_SRC, 'utf8');

	// Deliberate: evaluating the ONE shared source is what guarantees the CLI and the render
	// runtime cannot drift. A Node-specific copy would be the actual risk here.
	// eslint-disable-next-line no-new-func
	return new Function(`${src}\nreturn validatePlanStatic;`)();
}

/** Unwrap the plan from whatever a plan file exports. */
function unwrap(mod) {
	for (const candidate of [
		mod && mod.PLAN,
		mod && mod.default && mod.default.PLAN,
		mod && mod.default,
		mod
	])
		if (
			candidate &&
			typeof candidate === 'object' &&
			!Array.isArray(candidate) &&
			(candidate.layout || candidate.screen)
		)
			return candidate;
	return mod && mod.default ? mod.default : mod;
}

async function loadPlan(file) {
	const ext = path.extname(file).toLowerCase();
	if (ext === '.json') return JSON.parse(fs.readFileSync(file, 'utf8'));
	if (ext === '.cjs') return unwrap(require(file));
	return unwrap(await import(pathToFileURL(file).href));
}

async function main() {
	const files = process.argv.slice(2).filter((a) => !a.startsWith('-'));
	if (files.length === 0) {
		console.error(
			'Usage: node validate-plan.cjs <plan-file.(json|cjs|mjs)> [more…]\n' +
				'       A plan file exports the Composition Plan (PLAN) or is the plan JSON itself.'
		);
		process.exit(1);
	}

	const validatePlanStatic = loadValidator();
	const maps = buildMaps(REGISTRIES);
	let failed = false;

	for (const file of files) {
		const abs = path.resolve(file);
		const rel = path.relative(process.cwd(), abs);
		let plan;
		try {
			// Sequential on purpose: every plan gets its own verdict block in file order, and a
			// file that fails to load must not disturb the others. Parallel loading would
			// interleave the output that a developer reads top to bottom.
			// eslint-disable-next-line no-await-in-loop
			plan = await loadPlan(abs);
		} catch (error) {
			// This is where a bracket/shorthand slip in the payload is caught —
			// with the file and line the Figma sandbox could never report.
			failed = true;
			console.error(
				`❌ ${rel} could not be loaded:\n   ${error.message}\n`
			);
			continue;
		}

		const { valid, errors } = validatePlanStatic(plan, maps);
		if (valid) {
			console.log(
				`✅ ${rel} — plan is statically valid (screen "${
					plan && plan.screen ? plan.screen : '?'
				}"). Instance-level rules still run in the render audit.`
			);
			continue;
		}

		failed = true;
		console.error(
			`❌ ${rel} — ${errors.length} problem${errors.length > 1 ? 's' : ''}:\n  - ${errors.join('\n  - ')}\n`
		);
	}

	if (failed) {
		console.error(
			'Fix the PLAN and re-run. Do NOT paste a plan that fails here: the runtime ' +
				'runs the identical check and will refuse it.'
		);
		process.exit(1);
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
