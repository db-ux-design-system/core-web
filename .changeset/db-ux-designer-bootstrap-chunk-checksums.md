---
"@db-ux/agent-cli": patch
---

fix: verify db-ux-designer runtime chunks by content, not just by length

The store-once bootstrap only checked each chunk's exact LENGTH, and the `sha` in the stored
`meta` record is a version label written by `store-meta.js` — never a digest of what is actually
stored. A same-length character substitution therefore passed every gate: `store-meta.js` wrote
the record, `check.js` reported `ready: true`, and the file rendered from a runtime that was not
the built one. That is precisely how a model corrupts a chunk — a `\uXXXX` escape emitted as the
literal character, a straight quote turned typographic, a minified `!0` "corrected" to `!1` — and
the damage only surfaced later as inexplicable render results, in the one place nobody inspects.

Each chunk now carries an FNV-1a content checksum, verified when the store is written AND when it
is read:

- **`build-runtime.cjs`** computes a checksum per chunk and embeds it into `store-meta.js`,
  `check.js` and `manifest.json` (`chunkChecksums`). FNV-1a rather than sha256 because the same
  function has to run inside the `use_figma` sandbox, which has no crypto API — verified: no
  `fetch`, `XMLHttpRequest` or `TextDecoder` either, only `charCodeAt` and `Math.imul`. It guards
  against a model altering characters, not against an attacker. The in-sandbox one-liner is held
  next to the build-side function and `verifyChecksumTwin()` fails the build if the two drift
  apart.
- **`bootstrap/store-meta.js`** checks length AND checksum per chunk and still refuses to write
  the record on any mismatch, now reporting whether a chunk is the wrong size or the right size
  with altered content, and naming the likely cause.
- **`bootstrap/check.js`** re-verifies the checksums before reporting `ready` and returns the
  offending chunks in `corruptChunks`, so an altered store is re-bootstrapped instead of trusted.
- **SKILL.md** documents both nets in `4a-gate`, splits Phase 4a so that `check.js`, the final
  verification and `4a-recovery` are explicitly open to any model while only the verbatim store
  loop is gated, and adds a mandatory post-bootstrap step that loads the store via `render.js` and
  asserts the entry points — the one thing neither `check.js` nor `store-meta.js` proves is that
  the reassembled source actually parses.
- **POWER.md** and `AGENTS.md` record the contract.

The runtime bundle is untouched, so the `sha` does not move and already-bootstrapped Figma files
stay valid — no re-transfer of the 63 KB payload is required anywhere.
