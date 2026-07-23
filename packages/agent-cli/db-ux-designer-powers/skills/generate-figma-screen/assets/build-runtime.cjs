#!/usr/bin/env node
/* =============================================================================
 * build-runtime.cjs — produce the size-optimized runtimes for use_figma.
 * -----------------------------------------------------------------------------
 * WHY: the authored, heavily-commented sources exceed the Figma `use_figma`
 * 50 000-char `code` limit, and the runtime must be pasted verbatim in ONE call
 * (globalThis does not persist between calls). Every byte of the build is a byte
 * the model must re-emit as OUTPUT on every render, so smaller = faster + cheaper.
 *
 * Two bundles are produced:
 *   db-figma-runtime.js  -> db-figma-runtime.min.js   (FULL: renderPlan + applyEdits)
 *   db-figma-edit.js     -> db-figma-edit.min.js      (COMPACT: applyEdits only)
 * Paste the FULL bundle for first-time creation (renderPlan) or the structural
 * `appendLike` edit; paste the COMPACT edit bundle for all other iterations — it
 * is a few KB instead of ~33 KB, which is the biggest cost lever per iteration.
 *
 * PLUS the store-once bootstrap assets (assets/bootstrap/), generated from the
 * FULL runtime build: store-<i>.js / store-meta.js (paste once per file to stash
 * the runtime in figma.root shared plugin data), check.js (is it bootstrapped?),
 * render.js (tiny loader that rehydrates the runtime from the document) and
 * manifest.json. This is the PREFERRED render path — after a one-time bootstrap,
 * each render only emits ~6–7 KB (loader + plan) instead of the full ~33 KB, so
 * a large render no longer risks output-budget truncation. See SKILL.md Phase 4a.
 *
 * MINIFICATION — two strategies, chosen automatically:
 *   1. esbuild (preferred): full minify incl. identifier mangling. esbuild treats
 *      these files as SCRIPTS (no import/export), so top-level names — the public
 *      entry points renderPlan / applyEdits / renderNode — are PRESERVED, while
 *      function-local identifiers are shortened. This yields ~20-25% smaller
 *      output than comment-stripping alone. esbuild@0.28.1 is already a pinned
 *      devDependency of @db-ux/agent-cli, so it resolves in the normal repo flow.
 *   2. tokenizer fallback (portable, zero-dep): if esbuild cannot be resolved
 *      (e.g. the power runs standalone from ~/.kiro with no node_modules), we fall
 *      back to a comment/whitespace stripper. It removes `//` and block comments
 *      while preserving string/template/regex literals, strips indentation, and
 *      collapses blank lines. Same public output contract, just larger.
 *
 * A guard test asserts renderPlan / applyEdits survive whichever path ran.
 *
 * USAGE (run whenever either source changes):  node build-runtime.cjs
 * Note: the repo is "type":"module", so this build uses .cjs to run as CommonJS.
 * ========================================================================== */
const fs = require('fs');
const path = require('path');

// Preferred minifier: esbuild (optional). Resolve lazily so a standalone run
// without node_modules cleanly falls back to the tokenizer below.
let esbuild = null;
try {
	esbuild = require('esbuild');
} catch {
	/* fall back to tokenizer */
}

/**
 * Full minify via esbuild. Input is treated as a script (default for transform
 * with no export), so top-level declarations are kept verbatim while locals are
 * mangled — exactly what we need since renderPlan/applyEdits are called by name.
 */
function minifyWithEsbuild(src) {
	const { code } = esbuild.transformSync(src, {
		loader: 'js',
		minify: true,
		target: 'es2020',
		legalComments: 'none'
	});
	return code.trim() + '\n';
}

const REGEX_PRECEDERS = new Set([
	'',
	'(',
	',',
	'=',
	':',
	'[',
	'!',
	'&',
	'|',
	'?',
	'{',
	'}',
	';',
	'+',
	'-',
	'*',
	'/',
	'%',
	'<',
	'>',
	'^',
	'~'
]);
const KW_BEFORE_REGEX =
	/(?:^|[^.\w$])(return|typeof|instanceof|in|of|new|delete|void|do|else|case|yield|await)$/;

function stripComments(src) {
	let out = '';
	let i = 0;
	const n = src.length;
	let prevSig = '';
	while (i < n) {
		const c = src[i];
		const c2 = src[i + 1];
		if (c === '/' && c2 === '/') {
			i += 2;
			while (i < n && src[i] !== '\n') i++;
			continue;
		}
		if (c === '/' && c2 === '*') {
			i += 2;
			while (i < n && !(src[i] === '*' && src[i + 1] === '/')) i++;
			i += 2;
			continue;
		}
		if (c === "'" || c === '"') {
			const q = c;
			out += c;
			i++;
			while (i < n) {
				out += src[i];
				if (src[i] === '\\') {
					out += src[i + 1] ?? '';
					i += 2;
					continue;
				}
				if (src[i] === q) {
					i++;
					break;
				}
				i++;
			}
			prevSig = q;
			continue;
		}
		if (c === '`') {
			out += c;
			i++;
			while (i < n) {
				if (src[i] === '\\') {
					out += src[i] + (src[i + 1] ?? '');
					i += 2;
					continue;
				}
				if (src[i] === '`') {
					out += src[i];
					i++;
					break;
				}
				out += src[i];
				i++;
			}
			prevSig = '`';
			continue;
		}
		if (c === '/') {
			const isRegex =
				REGEX_PRECEDERS.has(prevSig) ||
				KW_BEFORE_REGEX.test(out.slice(-12));
			if (isRegex) {
				out += c;
				i++;
				let inClass = false;
				while (i < n) {
					const ch = src[i];
					out += ch;
					if (ch === '\\') {
						out += src[i + 1] ?? '';
						i += 2;
						continue;
					}
					if (ch === '[') inClass = true;
					else if (ch === ']') inClass = false;
					else if (ch === '/' && !inClass) {
						i++;
						break;
					}
					i++;
				}
				while (i < n && /[a-z]/i.test(src[i])) {
					out += src[i];
					i++;
				}
				prevSig = '/';
				continue;
			}
		}
		out += c;
		if (!/\s/.test(c)) prevSig = c;
		i++;
	}
	// Strip LEADING + trailing indentation (JS ignores it) and collapse blank lines.
	return (
		out
			.split('\n')
			.map((l) => l.replace(/^[ \t]+/, '').replace(/\s+$/, ''))
			.filter((l, idx, arr) => !(l === '' && arr[idx - 1] === ''))
			.join('\n')
			.replace(/\n{2,}/g, '\n')
			.trim() + '\n'
	);
}

/* -----------------------------------------------------------------------------
 * Store-once bootstrap assets.
 * WHY: even the minified runtime (~33 KB) must be re-emitted by the model on
 * EVERY render, which blows smaller per-turn output budgets (the reason a large
 * one-shot render can truncate). Instead we store the runtime ONCE in the Figma
 * document — `figma.root` shared plugin data persists across use_figma calls,
 * unlike globalThis — split into small chunks. After that, every render/edit
 * only pastes a tiny loader (~0.5 KB) plus the Composition Plan (~6 KB): the
 * loader reads the chunks back inside the sandbox, rehydrates the runtime via
 * `new Function`, and calls renderPlan/applyEdits. The runtime read costs ZERO
 * model output tokens.
 *
 * All snippets below are generated from the freshly-built FULL runtime, so they
 * can never drift from it. Chunks are stored as raw JS (JSON.stringify handles
 * exact escaping); the meta record is written LAST so a partial/aborted
 * bootstrap is detectable (no meta => not ready). A short sha lets the agent
 * detect a stale/old runtime in a file and re-bootstrap only when needed.
 *
 * Generated files (assets/bootstrap/):
 *   store-<i>.js  paste-ready: writes chunk i into shared plugin data
 *   store-meta.js paste-ready: writes {count, sha, ...} (run AFTER all chunks)
 *   check.js      paste-ready: returns stored meta (compare .sha to manifest)
 *   render.js     paste-ready loader; append the PLAN + renderPlan(PLAN) call
 *   manifest.json machine-readable {namespace, version_sha, chunkCount, ...}
 * -------------------------------------------------------------------------- */
function buildBootstrap(runtimeMin) {
	const NS = 'dbuxRuntime';
	const CHUNK = 7000; // raw chars/chunk; keeps each store snippet well under budget
	const crypto = require('crypto');
	const sha = crypto
		.createHash('sha256')
		.update(runtimeMin)
		.digest('hex')
		.slice(0, 12);
	const chunks = [];
	for (let i = 0; i < runtimeMin.length; i += CHUNK)
		chunks.push(runtimeMin.slice(i, i + CHUNK));

	const dir = path.join(__dirname, 'bootstrap');
	fs.mkdirSync(dir, { recursive: true });
	// Remove stale chunk snippets from a previous (possibly larger) build.
	for (const f of fs.readdirSync(dir)) {
		if (/^store-\d+\.js$/.test(f)) fs.unlinkSync(path.join(dir, f));
	}

	const q = JSON.stringify(NS);
	// One paste-ready snippet per chunk. Each returns the stored length so the
	// agent can integrity-check the write against manifest.json.
	chunks.forEach((c, i) => {
		const body =
			`figma.root.setSharedPluginData(${q},"c${i}",${JSON.stringify(c)});\n` +
			`return "c${i}:"+figma.root.getSharedPluginData(${q},"c${i}").length;\n`;
		fs.writeFileSync(path.join(dir, `store-${i}.js`), body);
	});

	// Meta record — write LAST during bootstrap so a partial run has no meta.
	const meta = {
		count: chunks.length,
		sha,
		chunk: CHUNK,
		bytes: runtimeMin.length
	};
	fs.writeFileSync(
		path.join(dir, 'store-meta.js'),
		`figma.root.setSharedPluginData(${q},"meta",${JSON.stringify(
			JSON.stringify(meta)
		)});\n` + `return figma.root.getSharedPluginData(${q},"meta");\n`
	);

	// Check snippet: returns stored meta so the agent can decide bootstrap-needed.
	fs.writeFileSync(
		path.join(dir, 'check.js'),
		`return figma.root.getSharedPluginData(${q},"meta")||"{}";\n`
	);

	// Render loader: reconstruct the API from the store; agent appends the PLAN.
	const loader =
		`/* DB UX store-once loader — reconstructs the runtime from the Figma\n` +
		` * document (bootstrapped once). AFTER this snippet, append e.g.:\n` +
		` *   const PLAN = { screen, targetNodeId, layout, variables };\n` +
		` *   const res = await renderPlan(PLAN); return JSON.stringify(res.audit);\n` +
		` * For edits: const res = await applyEdits({ ... }); return JSON.stringify(res);\n` +
		` */\n` +
		`const _m = JSON.parse(figma.root.getSharedPluginData(${q}, "meta") || "{}");\n` +
		`if (!_m.count) throw new Error("[STOP] runtime not bootstrapped in this file — run bootstrap/store-*.js then store-meta.js first");\n` +
		`let _src = "";\n` +
		`for (let i = 0; i < _m.count; i++) _src += figma.root.getSharedPluginData(${q}, "c" + i);\n` +
		`const _api = new Function(_src + ";return {renderPlan,applyEdits,renderNode};")();\n` +
		`const renderPlan = _api.renderPlan, applyEdits = _api.applyEdits;\n`;
	fs.writeFileSync(path.join(dir, 'render.js'), loader);

	fs.writeFileSync(
		path.join(dir, 'manifest.json'),
		JSON.stringify(
			{
				namespace: NS,
				version_sha: sha,
				chunkCount: chunks.length,
				chunkSize: CHUNK,
				runtimeBytes: runtimeMin.length
			},
			null,
			2
		) + '\n'
	);
	console.log(
		`Wrote bootstrap/ (${chunks.length} store snippets + loader, sha ${sha}).`
	);
}

const BUNDLES = [
	// `mustExport`: public names that MUST survive minification (called by the
	// model / by other ops after the paste). Guarded below.
	{
		src: 'db-figma-runtime.js',
		out: 'db-figma-runtime.min.js',
		mustExport: ['renderPlan', 'applyEdits', 'renderNode']
	},
	{
		src: 'db-figma-edit.js',
		out: 'db-figma-edit.min.js',
		mustExport: ['applyEdits', 'renderNode']
	}
];

const method = esbuild
	? `esbuild@${esbuild.version} (full minify)`
	: 'tokenizer fallback (esbuild not resolved)';
console.log(`Minifier: ${method}\n`);

let failed = false;
for (const b of BUNDLES) {
	const srcPath = path.join(__dirname, b.src);
	if (!fs.existsSync(srcPath)) {
		console.error(`SKIP: ${b.src} not found.`);
		continue;
	}
	const src = fs.readFileSync(srcPath, 'utf8');

	let out;
	try {
		out = esbuild ? minifyWithEsbuild(src) : stripComments(src);
	} catch (err) {
		console.error(`ERROR: ${b.out} minify failed:`, err.message);
		failed = true;
		continue;
	}

	// Syntax-validate without executing (no figma calls run at define time).
	try {
		new Function(out);
	} catch (err) {
		console.error(`ERROR: ${b.out} failed to parse:`, err.message);
		failed = true;
		continue;
	}

	// Guard: the public entry points must not have been mangled away.
	const missing = b.mustExport.filter(
		(name) => !new RegExp(`\\b${name}\\b`).test(out)
	);
	if (missing.length) {
		console.error(
			`ERROR: ${b.out} is missing public name(s): ${missing.join(', ')}`
		);
		failed = true;
		continue;
	}

	fs.writeFileSync(path.join(__dirname, b.out), out);
	const bytes = Buffer.byteLength(out, 'utf8');
	const saved = Buffer.byteLength(src, 'utf8') - bytes;
	console.log(
		`Wrote ${b.out} (${bytes} bytes, -${saved} vs source, limit 50000).`
	);
	if (bytes > 50000) {
		console.error(
			`ERROR: ${b.out} exceeds the 50000-char use_figma limit.`
		);
		failed = true;
	}
}
// Generate the store-once bootstrap assets from the FULL runtime build so they
// never drift from db-figma-runtime.min.js.
if (!failed) {
	const fullMinPath = path.join(__dirname, 'db-figma-runtime.min.js');
	if (fs.existsSync(fullMinPath)) {
		try {
			buildBootstrap(fs.readFileSync(fullMinPath, 'utf8'));
		} catch (err) {
			console.error('ERROR: bootstrap generation failed:', err.message);
			failed = true;
		}
	} else {
		console.error(
			'ERROR: db-figma-runtime.min.js not found; cannot build bootstrap.'
		);
		failed = true;
	}
}

if (failed) process.exit(1);
