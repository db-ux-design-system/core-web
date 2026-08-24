---
"@db-ux/agent-cli": patch
---

fix: make the repo lint gate pass again and stop it from corrupting the Figma runtime

`pnpm run lint` and the CI orchestrator had been failing on this repo for reasons that had nothing to
do with the code being wrong, and one of them was actively dangerous. Because `run-p` kills its
sibling tasks as soon as one fails, only the first failure was ever visible — so fixing one uncovered
the next. All 14 orchestrator checks pass now.

**xo must not lint the runtime source.** `assets/src/*.js` are concatenated modules that share their
globals, so linting them standalone produced 447 `no-undef` and 48 `no-unused-vars` findings —
exactly what `packages/agent-cli/AGENTS.md` already said not to do, except nothing enforced it. Worse,
the orchestrator runs `xo --fix` and auto-commits: `unicorn/prefer-dom-node-append` would have
rewritten 27 `parent.appendChild()` calls into `.append()`, and those are the FIGMA PLUGIN API, not
the DOM. That autofix would have broken every render, in a bot commit nobody reviews. The folder is
now in the xo ignore list next to the generated bundle; the build scripts beside it (`*.cjs`) stay
linted.

**Two real defects the linter found once it could run.** `build-runtime.cjs` interpolated an
undefined `last` into its doc-drift notice, so the guard would have thrown a `ReferenceError` the
first time the docs actually drifted — the message was left behind when the last-chunk check was
dropped. And `build-from-kb.cjs` assigned a `brand` token map that was never used; the comment
explaining that brand colors need their own mapping is kept, the dead binding is gone.

**Two autofix false positives are now documented at the site instead of applied.** In
`validate-registries.cjs` the `[...reachable]` snapshot is required — `mark()` adds to the Set inside
the loop, so `unicorn/no-useless-spread` would have made it mutate a Set while iterating it. And
`new Function` in `build-runtime.cjs` / `validate-plan.cjs` is the point of those functions: one is
the build's only parse gate, the other guarantees the plan CLI and the render runtime evaluate the
same source instead of a Node-specific copy. The remaining intentional patterns (bitwise FNV-1a,
`charCodeAt` for the sandbox twin, the `version_sha` manifest field) are an xo override with reasons.

**The spell checker learns German.** `@cspell/dict-de-de` is pinned as a devDependency, because the
DB UX guidelines and the designer power's context are authored in German and an English-only checker
reported ~4 000 ordinary words as typos, all inside one bundle. Ignoring those paths instead would
have taken the runtime source with them — including the audit's violation messages, the one place a
typo actually costs something. That brought 4 090 findings down to 67, each reviewed rather than
bulk-listed: three were genuine content fixes (two British spellings in an otherwise en-US repo, one
German compound broken by parentheses), the minified bundle and bootstrap snippets are excluded like
they are for Prettier and xo, and the rest is domain vocabulary in `cspellignorewords.txt`.

**The captured registry data leaves `jscpd`.** The icon name lists are generated from the Knowledge
Database and the block fragments are 1:1 catalog captures, so repetition there is inherent to data,
not copy-pasted code. The four genuine code clones it found are fixed, not ignored (see the audit
changeset).
