---
"@db-ux/agent-cli": patch
---

fix: gate the db-ux-designer runtime bootstrap behind a large-model check

The one-time store-once bootstrap requires re-emitting 8 chunks of ~7 000 characters of minified
JS byte-for-byte. Smaller models truncate or paraphrase a chunk and then improvise imperative
Figma code, which leaves a damaged file and a runtime that fails confusingly on later renders.
The bootstrap is now guarded so a failed attempt is harmless and the user is told to switch models
instead:

- **`bootstrap/check.js`** is self-contained: it knows the expected sha, chunk count and byte
  size, verifies the STORED chunk bytes (not just the sha, so a corrupt store is caught even when
  the meta record claims otherwise) and returns `{ ready, storedSha, expectedSha, storedBytes,
expectedBytes, chunks, gate }`. When a bootstrap is required, `gate` instructs the agent to stop
  and ask the user to switch to a large model (e.g. Claude Opus 5). No manual `manifest.json`
  comparison is needed anymore.
- **`bootstrap/store-meta.js`** verifies every chunk's exact length before writing the meta record
  and refuses to write it on any mismatch, naming the bad chunk. Without meta the stored chunks
  are inert, so a truncated bootstrap leaves the file untouched instead of half-broken.
- **`bootstrap/render.js`** re-checks the assembled runtime size and stops instead of evaluating a
  truncated runtime; both loader errors carry the switch-model instruction.
- **SKILL.md** gains section `4a-gate` (model capability gate) with the verbatim message to send
  the user, wires the gate into `4a-recovery`, and adds matching Red Flags ("I'll paste a shortened
  chunk / write the meta myself / patch the stored chunks"). Stale chunk figures (6 chunks / ~42 KB
  / `chunkCount = 7`) corrected to the current 8 chunks / ~51 KB.
- **`build-runtime.cjs`** owns the gate text in one place (`MODEL_GATE_JS`), embeds it into the
  generated snippets and `manifest.json` (`bootstrapRequiresLargeModel`, `modelGate`), and warns
  when SKILL.md / POWER.md quote stale chunk counts or sizes after a rebuild.
- **POWER.md** and the docs page document the one-time model requirement for end users.
