#!/usr/bin/env node
/* =============================================================================
 * build-runtime.cjs — produce the size-optimized runtimes for use_figma.
 * -----------------------------------------------------------------------------
 * WHY: the authored, heavily-commented source exceeds the Figma `use_figma`
 * 50 000-char `code` limit, and the runtime must be pasted verbatim in ONE call
 * (globalThis does not persist between calls). Every byte of the build is a byte
 * the model must re-emit as OUTPUT on every render, so smaller = faster + cheaper.
 *
 * ONE bundle is produced:
 *   src/*.js (concatenated, in filename order) + registry-injected maps
 *     -> db-figma-runtime.min.js   (renderPlan + applyEdits + renderNode)
 * There is deliberately NO separate edit-only bundle: `applyEdits` ships INSIDE
 * the one runtime. Its `appendLike` op needs `renderNode` and `auditTree` is shared
 * by both entry points, so an "edit-only" split cannot be lean anyway — it would only
 * duplicate the shared half and invite drift. Iterations go through the store-once
 * loader (below), which exposes `applyEdits` for ~0 extra output tokens once the file
 * is bootstrapped — so the old 8 KB edit bundle no longer buys anything.
 *
 * PLUS the store-once bootstrap assets (assets/bootstrap/), generated from the
 * runtime build: store-<i>.js / store-meta.js (paste once per file to stash
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
const { injectMaps } = require('./build-registry-maps.cjs');

/* -----------------------------------------------------------------------------
 * --check mode (CI guard).
 * -----------------------------------------------------------------------------
 * The unit tests load the BUILT bundle, and Figma is bootstrapped from the
 * generated bootstrap/ snippets — so an edit to src/ that was never rebuilt
 * passes every test while the fix never reaches a rendered screen. `--check`
 * runs the identical pipeline, writes NOTHING, and fails when what is on disk
 * differs from what src/ + the registries produce. Wired into CI next to the
 * registry contract check.
 * Every generated file therefore goes through `emit()` instead of writeFileSync.
 * -------------------------------------------------------------------------- */
const CHECK_ONLY = process.argv.includes('--check');
const emitted = new Map(); // absolute path -> content
const drift = [];
function emit(filePath, content) {
	emitted.set(filePath, content);
	if (!CHECK_ONLY) {
		fs.mkdirSync(path.dirname(filePath), { recursive: true });
		fs.writeFileSync(filePath, content);
		return;
	}
	const rel = path.relative(__dirname, filePath);
	if (!fs.existsSync(filePath)) {
		drift.push(`${rel} is MISSING`);
		return;
	}
	if (fs.readFileSync(filePath, 'utf8') !== content)
		drift.push(`${rel} is STALE`);
}

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
 * Integrity is checked on BOTH sides: store-meta.js refuses to write the record
 * unless every chunk matches its length AND its content checksum, and check.js
 * re-verifies those checksums before reporting `ready`. The sha alone cannot do
 * this — it is a label store-meta.js writes, not a digest of what is stored.
 *
 * Generated files (assets/bootstrap/):
 *   store-<i>.js  paste-ready: writes chunk i into shared plugin data
 *   store-meta.js paste-ready: verifies all chunks, then writes {count, sha, ...}
 *   check.js      paste-ready: verifies the store by content; returns ready + gate
 *   render.js     paste-ready loader; append the PLAN + renderPlan(PLAN) call
 *   manifest.json machine-readable {namespace, version_sha, chunkCount, ...}
 * -------------------------------------------------------------------------- */
/* MODEL CAPABILITY GATE — embedded verbatim into the generated check.js /
 * store-meta.js / render.js messages, so the warning reaches the agent exactly
 * where it is about to go wrong (in the tool result), not only in SKILL.md.
 * WHY: the bootstrap requires emitting ~7 000 characters of minified JS
 * byte-for-byte, eight times. Smaller models truncate, paraphrase or "repair"
 * chunks and then improvise imperative Figma code — which damages the file.
 * Bootstrapping is a one-time-per-file job, so handing it to a large model is
 * cheap; every later render works with any model.
 * MUST stay a single line of plain text with no double quotes and no backslashes:
 * it is interpolated into double-quoted JS string literals. */
const MODEL_GATE_JS =
	'If you cannot reproduce each chunk byte-for-byte, STOP NOW, change nothing, and tell the user: ' +
	'Runtime-Bootstrap erforderlich — bitte auf ein großes Modell wechseln (z. B. Claude Opus 5) und den Auftrag erneut senden. ' +
	'The bootstrap is needed once per Figma file; afterwards every model can render. ' +
	'Never shorten, merge, split, guess or hand-repair a chunk, never write the meta record yourself, ' +
	'and never fall back to hand-written Figma node code.';

/* Per-chunk content checksum (FNV-1a over UTF-16 code units, 8 hex chars).
 * WHY NOT sha256: the same function has to run inside the use_figma sandbox,
 * which has no crypto API (verified: no fetch/XHR/TextDecoder either). FNV-1a
 * needs only charCodeAt + Math.imul, both available there, and it is not a
 * security boundary — it guards against a model substituting characters, not
 * against an attacker. 8 hex chars keep the snippets small.
 * WHY AT ALL: length alone cannot see a SAME-LENGTH substitution, and that is
 * exactly how models corrupt a chunk — a \\uXXXX escape emitted as the literal
 * character, a straight quote turned typographic, a minified !0 "fixed" to !1.
 * Such a chunk passes a length gate, meta gets written, check.js reports
 * ready:true, and the damage only surfaces as odd renders much later.
 * MUST stay byte-identical to the copy generated into the snippets below. */
function fnv1a(s) {
	let v = 0x81_1c_9d_c5;
	for (let i = 0; i < s.length; i++) {
		v ^= s.charCodeAt(i);
		v = Math.imul(v, 0x01_00_01_93) >>> 0;
	}
	return v.toString(16).padStart(8, '0');
}

/* The in-sandbox twin of fnv1a(), as a one-line arrow for the generated
 * snippets. Kept next to the original so the two cannot drift apart
 * unnoticed; verifyChecksumTwin() below proves they agree on every build. */
const FNV_JS =
	'const _h=s=>{let v=0x811c9dc5;for(let i=0;i<s.length;i++){v^=s.charCodeAt(i);' +
	'v=Math.imul(v,0x01000193)>>>0}return v.toString(16).padStart(8,"0")};';

/* Guard: the generated one-liner must compute exactly what the build computed.
 * If someone edits one copy and not the other, fail the build here rather than
 * ship snippets that reject every correctly pasted chunk. */
function verifyChecksumTwin(samples) {
	// eslint-disable-next-line no-new-func
	const twin = new Function(`${FNV_JS}return _h;`)();
	for (const s of samples)
		if (twin(s) !== fnv1a(s))
			throw new Error(
				'build-runtime: FNV_JS and fnv1a() disagree — the generated checksum ' +
					'twin drifted from the build-side function. Fix both copies.'
			);
}

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
	const sums = chunks.map((c) => fnv1a(c));
	verifyChecksumTwin(chunks);
	const sumsJs = JSON.stringify(sums);

	const dir = path.join(__dirname, 'bootstrap');
	if (!CHECK_ONLY) fs.mkdirSync(dir, { recursive: true });
	// Chunk snippets from a previous (possibly LARGER) build must not linger: in write mode they
	// are removed, in --check mode a leftover counts as drift like any other.
	for (const f of fs.existsSync(dir) ? fs.readdirSync(dir) : []) {
		const match = /^store-(\d+)\.js$/.exec(f);
		if (!match) continue;
		if (!CHECK_ONLY) fs.unlinkSync(path.join(dir, f));
		else if (Number(match[1]) >= chunks.length)
			drift.push(`bootstrap/${f} is LEFTOVER from a larger build`);
	}

	const q = JSON.stringify(NS);
	// One paste-ready snippet per chunk. Each returns the stored length so the
	// agent can integrity-check the write against manifest.json.
	chunks.forEach((c, i) => {
		const body =
			`figma.root.setSharedPluginData(${q},"c${i}",${JSON.stringify(c)});\n` +
			`return "c${i}:"+figma.root.getSharedPluginData(${q},"c${i}").length;\n`;
		emit(path.join(dir, `store-${i}.js`), body);
	});

	// Meta record — write LAST during bootstrap so a partial run has no meta.
	// INTEGRITY-GATED: the snippet verifies every chunk's exact length AND its
	// content checksum first, and REFUSES to write meta when anything is off.
	// Without meta the stored chunks are inert (the loader stops), so a
	// half-finished, truncated or silently altered bootstrap can never be
	// mistaken for a working runtime — it fails loudly, naming the exact chunk
	// to re-paste, instead of producing weird render errors later.
	// The checksum is what catches a SAME-LENGTH substitution; see fnv1a() above
	// for why a length gate alone is not enough. See MODEL_GATE below.
	const meta = {
		count: chunks.length,
		sha,
		chunk: CHUNK,
		bytes: runtimeMin.length
	};
	emit(
		path.join(dir, 'store-meta.js'),
		`/* DB UX runtime meta — run AFTER store-0.js .. store-${chunks.length - 1}.js.\n` +
			` * Verifies every chunk (length + content checksum) and writes the "ready"\n` +
			` * record ONLY if all of them are intact. */\n` +
			`const NS=${q},COUNT=${chunks.length},CHUNK=${CHUNK},BYTES=${runtimeMin.length};\n` +
			`const SUM=${sumsJs};\n` +
			`${FNV_JS}\n` +
			`const bad=[];let total=0;\n` +
			`for(let i=0;i<COUNT;i++){const s=figma.root.getSharedPluginData(NS,"c"+i),len=s.length;\n` +
			`const want=i<COUNT-1?CHUNK:BYTES-CHUNK*(COUNT-1);total+=len;\n` +
			`if(len!==want){bad.push("c"+i+" is "+len+" chars, expected "+want);continue}\n` +
			`const got=_h(s);\n` +
			`if(got!==SUM[i])bad.push("c"+i+" has the right length but WRONG CONTENT (checksum "+got+", expected "+SUM[i]+") — one or more characters were altered, typically a \\\\uXXXX escape emitted as the literal character, a straight quote turned typographic, or a minified !0/!1 boolean changed");}\n` +
			`if(bad.length||total!==BYTES)throw new Error("[STOP] Bootstrap incomplete or corrupt — meta was NOT written, so the stored chunks stay inert and nothing in this file is broken. "+(bad.join("; ")||("total "+total+" != "+BYTES))+". Re-paste EXACTLY the listed store-<i>.js file(s) VERBATIM, then run this snippet again. ${MODEL_GATE_JS}");\n` +
			`figma.root.setSharedPluginData(NS,"meta",${JSON.stringify(
				JSON.stringify(meta)
			)});\n` +
			`return figma.root.getSharedPluginData(NS,"meta");\n`
	);

	// Check snippet + MODEL CAPABILITY GATE. Self-contained: it knows the expected
	// sha/size/checksums, so it decides `ready` itself (no manifest comparison to
	// get wrong) and verifies the stored chunks by CONTENT, not just by length and
	// the sha. That matters because the sha in the meta record is a version LABEL
	// written by store-meta.js, never derived from what is actually stored — so a
	// store that was altered after (or during) a bootstrap could claim to be
	// current. With per-chunk checksums such a file reports ready:false and gets
	// re-bootstrapped instead of rendering from subtly wrong code. Cost is one
	// pass over ~63 KB inside the sandbox: no measurable overhead, zero model
	// output tokens. When a bootstrap IS needed, the returned `gate` string tells
	// the agent to stop and hand over to a large model rather than improvise.
	emit(
		path.join(dir, 'check.js'),
		`/* DB UX runtime check + model gate. ready:true → paste render.js and render.\n` +
			` * ready:false → BOOTSTRAP REQUIRED: follow \`gate\` EXACTLY, do not improvise. */\n` +
			`const NS=${q},SHA=${JSON.stringify(sha)},COUNT=${chunks.length},BYTES=${runtimeMin.length};\n` +
			`const SUM=${sumsJs};\n` +
			`${FNV_JS}\n` +
			`const m=JSON.parse(figma.root.getSharedPluginData(NS,"meta")||"{}");\n` +
			`let stored=0;const bad=[];\n` +
			`for(let i=0;i<(m.count||0);i++){const s=figma.root.getSharedPluginData(NS,"c"+i);stored+=s.length;\n` +
			`if(i<COUNT&&_h(s)!==SUM[i])bad.push("c"+i);}\n` +
			`const ready=m.sha===SHA&&m.count===COUNT&&stored===BYTES&&bad.length===0;\n` +
			`return JSON.stringify({ready,storedSha:m.sha||null,expectedSha:SHA,storedBytes:stored,expectedBytes:BYTES,chunks:COUNT,corruptChunks:bad,\n` +
			`gate:ready?"OK — runtime is current. Do NOT bootstrap. Paste bootstrap/render.js plus the plan.":(bad.length?"CORRUPT STORE — chunk(s) "+bad.join(", ")+" have the right length but altered content, so the stored runtime is NOT the built one. Do NOT patch chunks and do NOT hand-roll a renderer: re-paste those store-<i>.js file(s) VERBATIM and run store-meta.js again. ":"")+"BOOTSTRAP REQUIRED — "+COUNT+" chunks of up to "+${CHUNK}+" chars must be pasted VERBATIM (~"+BYTES+" chars total). ${MODEL_GATE_JS}"});\n`
	);

	// Render loader: reconstruct the API from the store; agent appends the PLAN.
	const loader =
		`/* DB UX store-once loader — reconstructs the runtime from the Figma\n` +
		` * document (bootstrapped once). AFTER this snippet, append e.g.:\n` +
		` *   const PLAN = { screen, targetNodeId, layout, variables };\n` +
		` *   const res = await renderPlan(PLAN); return JSON.stringify(res.audit);\n` +
		` * For edits: const res = await applyEdits({ ... }); return JSON.stringify(res);\n` +
		` * FALLBACK (no prepared op fits): use the hardened helper toolkit \`api\` for a\n` +
		` * direct edit, then re-validate — e.g.:\n` +
		` *   const f = figma.currentPage.findOne(n => n.name === "My Screen");\n` +
		` *   await api.bindFill(f, "color.background.elevated");\n` +
		` *   return JSON.stringify(await api.auditTree(f));\n` +
		` * (\`api\` is the SAME primitives renderPlan/applyEdits use — fills bound on the\n` +
		` *  paint, slots re-fetched fresh, tokens validated — so fallbacks stay compliant.)\n` +
		` */\n` +
		`const _m = JSON.parse(figma.root.getSharedPluginData(${q}, "meta") || "{}");\n` +
		`if (!_m.count) throw new Error("[STOP] runtime not bootstrapped in this file — run bootstrap/check.js, then follow its gate. ${MODEL_GATE_JS}");\n` +
		`let _src = "";\n` +
		`for (let i = 0; i < _m.count; i++) _src += figma.root.getSharedPluginData(${q}, "c" + i);\n` +
		`if (_src.length !== _m.bytes) throw new Error("[STOP] stored runtime is corrupt (" + _src.length + " of " + _m.bytes + " chars) — do NOT patch chunks or hand-roll a renderer. Clear the dbuxRuntime data and re-bootstrap (SKILL.md 4a-recovery). ${MODEL_GATE_JS}");\n` +
		`const _api = new Function(_src + ";return {renderPlan,applyEdits,renderNode,api:EDIT_API};")();\n` +
		`const renderPlan = _api.renderPlan, applyEdits = _api.applyEdits, api = _api.api;\n`;
	emit(path.join(dir, 'render.js'), loader);

	emit(
		path.join(dir, 'manifest.json'),
		JSON.stringify(
			{
				namespace: NS,
				version_sha: sha,
				chunkCount: chunks.length,
				chunkSize: CHUNK,
				runtimeBytes: runtimeMin.length,
				// FNV-1a per chunk, same order as store-<i>.js. store-meta.js and
				// check.js embed these; listed here so tooling can verify a store
				// without parsing the snippets.
				chunkChecksums: sums,
				// Bootstrapping means re-emitting the chunks verbatim — a job only a
				// large model does reliably. check.js enforces this at runtime.
				bootstrapRequiresLargeModel: true,
				modelGate: MODEL_GATE_JS
			},
			null,
			2
		) + '\n'
	);
	console.log(
		`${CHECK_ONLY ? 'Checked' : 'Wrote'} bootstrap/ (${chunks.length} store snippets + loader, sha ${sha}).`
	);
	checkDocDrift(chunks.length, CHUNK, runtimeMin.length);
}

/* Doc-drift guard. SKILL.md's model-capability gate (4a-gate) and POWER.md quote
 * the CONCRETE chunk count and the last chunk's exact length, because concrete
 * numbers are what stop an agent from improvising a bootstrap. Those numbers move
 * whenever the runtime grows past a chunk boundary, so warn instead of silently
 * leaving stale guidance behind. NOTICE only — never fails the build. */
function checkDocDrift(chunkCount, chunkSize, bytes) {
	const last = bytes - chunkSize * (chunkCount - 1);
	// A figure may be written 2277 / 2 277 / 2.277 / 2,277 in prose.
	const numRe = (n) =>
		new RegExp(
			`\\b${String(n).replace(/\B(?=(\d{3})+$)/g, '[ .,\\u00a0]?')}\\b`
		);
	const countRe = new RegExp(`\\b${chunkCount}\\s+chunks\\b`, 'i');
	const stale = [];
	const check = (rel, tests) => {
		const p = path.join(__dirname, rel);
		if (!fs.existsSync(p)) return;
		const md = fs.readFileSync(p, 'utf8');
		const name = path.basename(p);
		for (const [ok, what] of tests(md))
			if (!ok) stale.push(`${name}: ${what}`);
	};
	check('../SKILL.md', (md) => [
		[
			countRe.test(md),
			`no "${chunkCount} chunks" statement — update 4a-gate + the COST RULE`
		],
		[
			md.includes(`store-${chunkCount - 1}.js`),
			`highest chunk file referenced is not store-${chunkCount - 1}.js`
		],
		[numRe(chunkSize).test(md), `chunk size ${chunkSize} not mentioned`],
		[
			numRe(last).test(md),
			`last-chunk length ${last} not mentioned (4a-gate step 2)`
		]
	]);
	check('../../../POWER.md', (md) => [
		[
			countRe.test(md),
			`no "${chunkCount} chunks" statement in Runtime Architecture`
		]
	]);
	if (stale.length)
		console.log(
			`NOTICE: bootstrap docs may be stale — now ${chunkCount} chunks, ` +
				`${chunkSize} chars each, last ${last}, total ${bytes}:\n  - ` +
				stale.join('\n  - ')
		);
}

const BUNDLES = [
	// `mustExport`: public names that MUST survive minification (called by the
	// model / by other ops after the paste). Guarded below.
	{
		// Source is the src/ folder: plain-script modules concatenated in filename order.
		srcDir: 'src',
		out: 'db-figma-runtime.min.js',
		// Maps (VAR_KEYS/COMPONENTS/…) are injected from the registries at build time.
		injectMaps: true,
		// EDIT_API must survive minification too — the store-once loader returns it as `api`.
		mustExport: ['renderPlan', 'applyEdits', 'renderNode', 'EDIT_API']
	}
];

/** Read a bundle's source: either a single file (`src`) or a concatenated src/ folder (`srcDir`). */
function readBundleSource(b) {
	if (b.srcDir) {
		const dir = path.join(__dirname, b.srcDir);
		const files = fs
			.readdirSync(dir)
			.filter((f) => f.endsWith('.js'))
			.sort();
		if (files.length === 0)
			throw new Error(`no .js modules in ${b.srcDir}/`);
		return files
			.map((f) => fs.readFileSync(path.join(dir, f), 'utf8'))
			.join('\n\n');
	}
	return fs.readFileSync(path.join(__dirname, b.src), 'utf8');
}

const method = esbuild
	? `esbuild@${esbuild.version} (full minify)`
	: 'tokenizer fallback (esbuild not resolved)';
console.log(`Minifier: ${method}\n`);

let failed = false;
for (const b of BUNDLES) {
	let src;
	try {
		src = readBundleSource(b);
	} catch (err) {
		console.error(`SKIP: ${b.out} — ${err.message}`);
		failed = true;
		continue;
	}
	if (b.injectMaps) {
		try {
			src = injectMaps(src, path.join(__dirname, 'registries'));
		} catch (err) {
			console.error(`ERROR: ${b.out} map injection failed:`, err.message);
			failed = true;
			continue;
		}
	}

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

	emit(path.join(__dirname, b.out), out);
	const bytes = Buffer.byteLength(out, 'utf8');
	const saved = Buffer.byteLength(src, 'utf8') - bytes;
	console.log(
		`${CHECK_ONLY ? 'Checked' : 'Wrote'} ${b.out} (${bytes} bytes, -${saved} vs source).`
	);
	/* The 50 000-char `use_figma` cap only constrains the SINGLE-PASTE path, which needs the
	 * runtime AND a Composition Plan in one call. The runtime passed that budget long ago, so
	 * the supported path is the store-once bootstrap below: it writes the runtime into the
	 * document in ~7 kB chunks and every later render pastes a ~0.5 kB loader plus the plan.
	 * Exceeding the cap is therefore a NOTICE, not a build failure — but it does mean the
	 * verbatim-paste fallback is unavailable, so say so plainly. */
	if (bytes > 50000)
		console.log(
			`NOTICE: ${b.out} is ${bytes - 50000} chars over the 50000-char use_figma cap. ` +
				`The single-paste fallback is NOT available; render via the store-once bootstrap.`
		);
	else if (bytes > 44000)
		console.log(
			`NOTICE: only ${50000 - bytes} chars headroom under the use_figma cap — too little for a real plan. Use the store-once bootstrap.`
		);
}
// Generate the store-once bootstrap assets from the FULL runtime build so they
// never drift from db-figma-runtime.min.js.
if (!failed) {
	const fullMinPath = path.join(__dirname, 'db-figma-runtime.min.js');
	// Always the FRESHLY built bundle, never what happens to be on disk — otherwise --check would
	// compare the bootstrap snippets against a stale runtime and call the pair consistent.
	const fullMin = emitted.get(fullMinPath);
	if (fullMin) {
		try {
			buildBootstrap(fullMin);
		} catch (err) {
			console.error('ERROR: bootstrap generation failed:', err.message);
			failed = true;
		}
	} else {
		console.error(
			'ERROR: db-figma-runtime.min.js was not produced; cannot build bootstrap.'
		);
		failed = true;
	}
}

if (CHECK_ONLY) {
	if (drift.length) {
		console.error(
			`\n❌ The committed runtime does not match assets/src/ + the registries:\n  - ${drift.join(
				'\n  - '
			)}\n\nThe unit tests load the BUILT bundle and Figma is bootstrapped from bootstrap/, so an ` +
				`unbuilt source edit passes every test while the fix never reaches a rendered screen.\n` +
				`Run: node ${path.relative(process.cwd(), __filename)}\n`
		);
		process.exit(1);
	}
	console.log(
		`✅ Runtime and bootstrap assets are in sync with src/ (${emitted.size} generated files checked).`
	);
}

if (failed) process.exit(1);
