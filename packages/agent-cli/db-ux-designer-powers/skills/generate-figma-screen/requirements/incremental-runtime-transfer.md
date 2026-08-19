# Requirement — Incremental runtime transfer

**Status:** open (not started) · **Owner:** unassigned · **Raised:** 2026-08-19
**Scope:** `assets/build-runtime.cjs`, `assets/bootstrap/*`, `assets/src/*`, SKILL.md Phase 4a

> This is a planning document. It is deliberately NOT listed in the SKILL's `requires:` block, so
> it never loads into an agent's context during a normal render. Read it only when working ON the
> runtime transfer mechanism.

## Problem

A re-bootstrap costs the agent ~66 KB of verbatim model output and needs a large model (4a-gate).
Today that price is paid in full for changes that are objectively tiny, because the stored runtime
is ONE concatenated blob sliced at fixed 7 000-byte offsets: any change in LENGTH shifts every
byte after it, so all following chunks differ even where no logic changed.

The cost therefore scales with the POSITION of a change, not its size (measured against
`db-figma-runtime.min.js`, sha `bdace0b962c9`, 65 801 bytes / 10 chunks):

| Module                  | Minified | Chunks invalidated by an edit |
| ----------------------- | -------- | ----------------------------- |
| `10-figma-helpers`      | 3.9 KB   | **10 of 10**                  |
| `20-component-resolver` | 1.1 KB   | **10 of 10**                  |
| `30-text-and-props`     | 8.2 KB   | **10 of 10**                  |
| `40-layout-builders`    | 9.7 KB   | 9 of 10                       |
| `50-plan-renderer`      | 12.1 KB  | 7 of 10                       |
| `60-compliance-audit`   | 12.4 KB  | 5 of 10                       |
| `70-edit-engine`        | 6.3 KB   | 4 of 10                       |

Worst case is the injected registry DATA. `TEXT_STYLE_KEYS`, `CONCEPT_KEYS`, `ICON_KEYS`,
`IMAGE_RATIOS` and `COMPONENTS` sit at offsets 1 925–4 212 — all inside chunk `c0`, together
~10 KB (≈15 % of the bundle). So adding ONE icon or refreshing ONE component key is a pure data
change with zero logic impact and still forces a full 10-chunk re-transfer.

Reference incident: the `placeholder-text` fix (changeset `db-ux-designer-placeholder-copy`)
touched `30-text-and-props.js` and `60-compliance-audit.js`. Chunks `c0`/`c1` happened to keep
their checksums and were skipped MANUALLY after comparing `check.js` output against
`manifest.json` — saving 14 KB by luck of noticing, not because the tooling said so.

## Requirements

### R1 — `check.js` reports exactly which chunks are stale

`check.js` already carries every expected per-chunk checksum, but on a version mismatch it
returns a wholesale `BOOTSTRAP REQUIRED`. It MUST instead always compare chunk by chunk and
return the precise set to re-paste:

```jsonc
{
	"ready": false,
	"staleChunks": ["c2", "c3", "c4"],
	"gate": "PARTIAL BOOTSTRAP — re-paste …"
}
```

- Re-pasting only `staleChunks` + `store-meta.js` MUST leave the store verified
  (`store-meta.js` already re-checks all lengths AND checksums, so a missed chunk still fails
  loudly — the optimisation cannot silently corrupt the store).
- The 4a-gate stays in force for the chunks that ARE transferred.
- Independent of R2 and worth doing first: it is a change to one snippet plus SKILL.md Phase 4a.

**Acceptance:** given a build where only later modules changed, `check.js` names only those
chunks, and a bootstrap limited to them ends with `ready: true`.

### R2 — Split the store into independently versioned records

Replace fixed-offset slicing of one blob with one record per unit of change:

- one **data** record for the injected registry maps (`COMPONENTS`, `ICON_KEYS`, `CONCEPT_KEYS`,
  `TEXT_STYLE_KEYS`, `IMAGE_RATIOS`, token/style keys),
- one **code** record per source module (`10-…` … `70-…`), sub-chunked only where a module
  exceeds the 7 000-char record cap, with boundaries local to that module.

The loader concatenates data + modules in filename order and hands the result to `new Function`
exactly as today, so everything stays in ONE lexical scope and runtime behaviour is unchanged.
`manifest.json` becomes a list of records, each with its own checksum and byte count.

Expected effect: registry-only change ≈ 10 KB instead of 66 KB; an audit-rule change ≈ 12 KB
(module 60 only); a helper change no longer invalidates the modules that follow it.

**Acceptance:** editing `60-compliance-audit.js` alone marks only that module's record(s) stale;
adding an icon to the registry marks only the data record stale; `runtime:check` still fails on
any un-built source edit; the existing unit suites pass unchanged against the reassembled bundle.

### R3 — Move audit POLICY out of the runtime into data

The requirement that actually removes the trigger rather than lowering its price. Most changes to
this skill are policy, not engine: a new audit predicate, a changed threshold, a reworded message.
Those do not need to live in the stored runtime at all.

Keep the ENGINE in the runtime (guarded tree walk, geometry measurement, instance/prop reads) and
let it execute a declarative rule table supplied with the plan:

```jsonc
{
	"id": "placeholder-text",
	"when": {
		"nodeType": "TEXT",
		"visible": true,
		"charactersOneOf": ["headline", "text", "label", "placeholder", "…"]
	},
	"message": "…"
}
```

Then a new or adjusted simple rule needs no build and no bootstrap.

Constraints:

- **The matcher MUST stay declarative — never `eval`/`new Function` on rule data.** Rules arrive
  as plan input; executing them as code would turn data into an injection vector and make the
  audit unauditable.
- Structural checks stay CODED and are explicitly out of scope for the table: `chart-baseline`
  and `chart-not-bottom-anchored` (cross-row grouping plus card-floor geometry),
  `table-columns-misaligned` (cell-edge drift across rows), `content-overflow`,
  `collapsed-fill-height`. The outcome is a hybrid by design, not a full migration.
- Migrate opportunistically: move an existing check into the table when it is being touched
  anyway, not in one sweep.

**Acceptance:** at least the simple predicate rules (`placeholder-text`, `uppercase-text`,
`unresolved-icon`, `filter-tag-emphasis`, `empty-grid-cell`) are expressible as data; adding a
placeholder word or a semantic-tag rule requires no runtime rebuild; every migrated rule keeps its
unit test and its violation `type` string so existing tests and docs stay valid.

### R4 — Re-evaluate the single-paste path once R2 and R3 land

R2 moves ~10 KB of registry data and R3 moves the guidance messages (~6 KB of literals ≥100 chars)
out of the bundle, which puts it near the 50 000-character `use_figma` cap that killed the
single-paste path (SKILL.md §4b).

If the bundle fits with real headroom, chunking, the meta record and the 4a model gate collapse
into a single paste — the largest simplification available here. Treat this as a MEASUREMENT to
repeat after R2/R3, not as a goal to chase by cutting runtime features: §4b's warning stands, do
not "optimise" capabilities away to resurrect the path.

**Acceptance:** `build-runtime.cjs` reports the post-R2/R3 size and headroom; a decision is
recorded in this file (either re-enable §4b with the measured margin, or state why not).

## Sequencing

R1 → R2 → R3, with R4 as a measurement after R2/R3. R1 is independent and pays off immediately.
R3 changes the audit interface, so it should be planned as its own change rather than bundled
with R2.

## Non-goals

- Fetching the runtime over the network. The `use_figma` sandbox is the plugin main thread; it
  has no `fetch` (the same reason `figma.createImageAsync` is unavailable). The runtime has to
  arrive as model output or live in the file.
- Weakening the bootstrap integrity contract. Per-record checksums, the `store-meta.js` gate and
  the "never shorten/merge/guess a chunk" rule apply unchanged to every record.
- Hand-editing `db-figma-runtime.min.js` or `assets/bootstrap/*`; these stay generated.
