# Dependency Update Strategy

This document explains the rationale behind our Dependabot configuration and GitHub Actions pinning strategy. The decision for Dependabot itself is documented in the [Dependency automation ADR](adr/adr-03-dependency-automation.md).

## Renovate for pnpm and the DB theme packages

Dependabot handles everything **except** two cases, which are covered by a self-hosted Renovate run ([`.github/workflows/99-renovate.yml`](../.github/workflows/99-renovate.yml), scope in [`.github/renovate.json`](../.github/renovate.json)):

| Covered by Renovate                            | Why not Dependabot                                                                                                                                                                                                                                                                      |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packageManager` (the pnpm version + its hash) | Dependabot does not update the `packageManager` field, so the pnpm version used by CI and Corepack drifts and has to be bumped by hand                                                                                                                                                  |
| `@db-ux/db-theme*`                             | Theme releases should land as one reviewable PR across all manifests (including the vite-plugin test fixture, which is outside the pnpm workspace and therefore invisible to Dependabot); plus we'd like to trigger this manually, without the need to check for all other dependencies |

The latter is ignored in `.github/dependabot.yml` so the two bots never open competing PRs (`pnpm` version isn't even supported by `dependabot`). Everything else is disabled in the Renovate config (`matchPackageNames: ["*"], enabled: false`) — if you want a new dependency automated, add it to Dependabot, not to Renovate.

### Scheduling

The workflow runs daily at **22:30 Europe/Berlin**, ahead of the Dependabot window at 23:00, so a pnpm lands first and Dependabot's PRs are rebased onto it instead of the other way around. It can also be started manually via _Run workflow_ (`workflow_dispatch`). GitHub cron expressions are UTC-only, so the workflow triggers at both possible offsets (20:30 and 21:30 UTC) and Renovate's own `schedule` — evaluated in `Europe/Berlin` — discards the run that is not 22:30 local time. A manual run bypasses that gate through `RENOVATE_FORCE`.

### Branches, commits and PRs

- Branches use the `renovate-` prefix (never `renovate/`) because slashes break our preview URLs. The prefix is part of the `validate-branch-name` pattern in `package.json`.
- Renovate authenticates through the same GitHub App as our other automation (`AUTO_MERGE_CLIENT_ID` / `AUTO_MERGE_PRIVATE_KEY`) instead of `GITHUB_TOKEN`, otherwise the pipeline would not run on the created PRs.
- The approving review for auto-merge comes from the `renovate` job in [`.github/workflows/99-auto-handle-bot-prs.yml`](../.github/workflows/99-auto-handle-bot-prs.yml), next to the Dependabot job — see below.

### Auto-merge: pnpm patch releases only

The work is split between the two sides along a security boundary:

| Side                         | Decides                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| `.github/renovate.json`      | **which** updates may merge unattended — `automerge: true` scoped to pnpm `patch`            |
| `99-auto-handle-bot-prs.yml` | **whether** the required approving review is granted — only for a pure `packageManager` diff |

Renovate switches on GitHub's native auto-merge for the PRs matching its rule, so the patch/minor/major differentiation lives in the Renovate config where it belongs. Auto-merge alone can never merge anything: it waits for all required status checks **and** the required approval.

That approval is the actual gate, which is why the workflow does not take anybody's word for what a PR contains. Labels, PR titles, branch names and even "auto-merge is enabled" can all be set by anyone with write access — approving on such a signal would hand out a bypass of the review requirement. Instead the job compares base and head:

```bash
[[ "$(git diff --name-only "$BASE_SHA" "$HEAD_SHA")" == "package.json" ]] &&
  diff -q <(git show "$BASE_SHA:package.json" | jq -S "del(.packageManager)") \
          <(git show "$HEAD_SHA:package.json" | jq -S "del(.packageManager)")
```

`package.json` must be the only changed file, and removing `packageManager` from both sides must leave two identical files. A pnpm bump is the only thing that passes; a `scripts` entry or a lockfile edit smuggled alongside it does not. No version parsing is needed here, because a pnpm minor or major bump that gets pre-approved simply has no auto-merge and still waits for a human. The check fails closed and keeps the job green, so a PR that does not qualify (theme updates, pnpm minor/major) shows no red X.

Two details worth knowing:

- **Renovate cannot approve its own PR.** GitHub forbids approving a pull request you opened, and Renovate has no self-approval for the GitHub platform. The workflow reviews with `GITHUB_TOKEN`, i.e. as `github-actions[bot]`, which is a different identity than the App that opened the PR — the same mechanism the Dependabot job uses. If branch protection ever requires a review from `CODEOWNERS`, a bot review no longer satisfies it and these PRs will stall one approval short.
- **The theme packages are excluded on purpose**, on both sides: no `automerge` in the Renovate rule, and their diff never passes the approval check. A theme bump changes colors, icons and fonts, so it lands in the visual snapshots and triggers the `regenerate-snapshots*` jobs. What needs reviewing there is the image diff, which no status check can judge. pnpm is the opposite case: install, build, outputs, showcases and E2E all run on the new pnpm binary before the merge, so a broken release cannot slip through unnoticed.

## Auto-merge for all Dependabot PRs

All Dependabot PRs have auto-merge enabled (via the `dependabot` job in `.github/workflows/99-auto-handle-bot-prs.yml`). Auto-merge only triggers once all required status checks **and** the required approval pass — so a human reviewer still gates every merge.

### Only patch updates are auto-approved

While auto-merge is enabled for all Dependabot PRs, only **patch** version bumps are automatically _approved_. Minor and major updates still require manual approval before they can merge.

### Minor updates as an RSS feed for improvements

A minor version often introduces new features, optimizations, or deprecation notices. The moment a Dependabot PR arrives is the best time to read the changelog and evaluate whether we want to adapt our code to leverage new APIs, adopt performance improvements, or address deprecations.

If we auto-approved these, we would lose this natural trigger to review and optimize — experience shows it simply won't happen later. The PR serves as a lightweight notification system: "something changed, now is the time to look."

### Conscious adoption over passive consumption

We want to actively decide when to adopt new capabilities rather than silently absorbing them. A grouped, reviewed PR gives the team visibility into what changed and an opportunity to make intentional improvements alongside the version bump.

### Risk profile

Patch versions are bug fixes and security patches with minimal behavioral changes — hence they are auto-approved. Minor versions can alter behavior in subtle ways — new defaults, new warnings, new peer dependency requirements — that deserve human judgement before approval.

## Why GitHub Actions are pinned to commit SHAs

All third-party GitHub Actions in our workflows are pinned to their **full commit SHA** rather than a mutable tag (e.g., `v4`). A version comment is added for human readability:

```yaml
uses: actions/checkout@df4cb1c069e1874edd31b4311f1884172cec0e10 # v6.0.3
```

This is a **supply-chain security measure**.

### Tags are mutable

A tag like `v4` or `v4.1.0` can be force-pushed to point to a completely different commit at any time. If an action maintainer's account is compromised, an attacker could silently replace the action code behind the same tag, and every repository referencing that tag would execute the malicious code on the next workflow run — without any PR, review, or notification.

### SHAs are immutable

A commit SHA is a cryptographic hash of the exact content. It cannot be changed without producing a different hash. Pinning to a SHA guarantees that the code running in our pipeline is always the code we reviewed and approved.

### Dependabot keeps us up-to-date

Because we [configure Dependabot](../.github/dependabot.yml) for the `github-actions` package ecosystem, we still get automated PRs when new action versions are published. Dependabot resolves the new version's SHA for us, so we review the version bump (with its changelog) in a PR — the same workflow as our npm dependencies. This gives us the security of immutable references without the maintenance burden of manually tracking SHAs.

### Industry best practice

GitHub's own [security hardening guide](https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions) recommends pinning to full-length commit SHAs as the most secure option for third-party actions.

### In short

Pinning to SHAs turns a mutable, trust-based reference into an auditable, immutable one — while Dependabot ensures we still stay up-to-date with new releases through reviewable pull requests.

## Why npm dependencies use exact versions

All npm packages in our `package.json` files are pinned to **exact versions** (no `^` or `~` range prefixes). Combined with our lockfile (`pnpm-lock.yaml`), this ensures every install resolves to the identical dependency tree. The rare places in the code places in which we don't follow this rule, are specific exceptions.

### Supply-chain security

The npm ecosystem has seen repeated incidents where compromised packages delivered malicious code through patch or minor releases (e.g., `event-stream`, `ua-parser-js`, `colors`). Exact pinning ensures that a newly published version — whether legitimate or malicious — never enters our dependency tree without an explicit, reviewable update.

With range specifiers like `^1.2.3`, running `pnpm install` on a fresh checkout (or in CI without a lockfile cache) could silently pull in a compromised `1.2.4` or `1.3.0`. Exact versions eliminate this class of risk entirely.

### Reproducibility

Every developer, CI runner, and deployment environment installs the **same bytes**. There is no ambiguity about which version is active, regardless of when or where `pnpm install` runs. This removes an entire category of "works on my machine" issues caused by slightly different transitive dependency resolutions.

### Deterministic builds

Build output should be a pure function of source code and dependencies. Exact versions guarantee that two builds from the same commit produce identical artifacts — a requirement for meaningful caching, reliable rollbacks, and trustworthy audit trails.

### Intentional, reviewable upgrades

Every version change — no matter how small — appears as an explicit diff in a pull request. This gives reviewers full visibility into what changed and why, rather than letting version drift accumulate silently. Changelogs can be consulted at the time of the upgrade, not retroactively after something breaks.

### Reduced debugging surface

When a bug appears, the dependency tree is a known constant. There is no need to question whether a transitive dependency resolved differently between environments or between yesterday and today.

### `pnpm exec` over `npx`

We use `pnpm exec` to run CLI tools (e.g., `pnpm exec changeset`) instead of `npx`. The two behave very differently:

| Command                         | Behavior                                                                                                        | Our stance    |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------- |
| `pnpm exec <bin>`               | Runs the binary from **locally installed** packages only. Equivalent to `npx --no`.                             | ✅ Use this   |
| `pnpm dlx <pkg>`                | Fetches the **latest** version from the registry and executes it without installing. Equivalent to `npx --yes`. | ❌ Do not use |
| `npx <bin>` / `npx --yes <bin>` | Same as `pnpm dlx` — fetches and executes the latest version from the registry if not installed locally.        | ❌ Do not use |

`pnpm dlx` and `npx --yes` are the exact opposite of our pinning strategy: they bypass the lockfile, ignore the reviewed version, and run whatever the registry currently publishes. This re-introduces every risk we eliminate by pinning — supply-chain attacks, non-reproducible environments, and invisible version drift.

By enforcing `pnpm exec`, every tool invocation is bound to the same audited, pinned dependency tree as the rest of the project. No network fetch, no surprise version, no implicit trust in "latest."

### Dependabot keeps us current

Just like with GitHub Actions, Dependabot opens PRs for new versions of our npm dependencies. We get the security and stability benefits of pinning without falling behind on updates — each upgrade is reviewed, tested in CI, and merged deliberately.

## Dependabot grouping

Related dependencies are grouped in `.github/dependabot.yml` so Dependabot updates them together in a single PR. This avoids broken intermediate states where one package in a tightly coupled set is updated without the others.

**When to add a new group:** whenever you introduce dependencies that belong together — update one without the others would likely break the build or cause version mismatches. Common patterns:

- Dependencies from the same npm org (e.g. `@tanstack/*`, `@inquirer/*`, `@mdx-js/*`)
- A main package together with its plugins/addons (e.g. `storybook`, `@storybook*`, `*-storybook`)
- Dependencies that were added together and are tightly coupled (e.g. `react` + `react-dom`)

Add the group to the `groups:` section of the npm ecosystem entry in `.github/dependabot.yml`:

```yaml
groups:
    acme:
        patterns:
            - "@acme/*"
```

See the existing groups in that file for more examples (scoped orgs, main+plugins, framework sets).

## Resolving type-incompatible duplicate dependencies (catalog + override)

Some packages — notably PostCSS — ship breaking `.d.ts` changes in patch releases. Because pnpm's strict isolation gives each resolution its own physical copy under `.pnpm/`, TypeScript treats two patch versions (e.g. `8.5.25` and `8.5.26`) as fundamentally different types, causing compilation failures like:

```text
Type 'Node' from '.pnpm/postcss@8.5.25/...' is not assignable to type 'Node' from '.pnpm/postcss@8.5.26/...'
```

This happens when a workspace package pins one version (via exact `devDependencies`) while a transitive consumer (e.g. `stylelint` declaring `postcss: "^8.5.16"`) resolves to a different patch.

### Diagnosis

```bash
pnpm why <package> --filter <failing-workspace-package>
```

If the output reports "Found 2 versions", the problem is confirmed.

### Fix — catalog + override

We use a **pnpm catalog** combined with an **override** to force the entire dependency graph onto a single version, defined in one place:

```yaml
# pnpm-workspace.yaml
overrides:
    postcss: "catalog:"

catalog:
    postcss: 8.5.26
```

Workspace packages reference the catalog in their `devDependencies`:

```json
"postcss": "catalog:"
```

### Why this approach

- **Single source of truth:** bumping the version requires changing exactly one line (the catalog entry). The override, all workspace packages, and transitives follow automatically.
- **Dependabot-compatible:** Dependabot supports pnpm catalogs since February 2025 and will open PRs updating the catalog entry directly.
- **No preemptive use:** only apply this pattern when a build actually breaks with the dual-path type error. Most packages don't break type compatibility between patches, and unnecessary overrides constrain the resolver.

### When this is NOT needed

- **Peer dependencies** are not affected — they resolve from the consumer's context, so there's only one copy for type purposes.
- **Runtime-only duplicates** (e.g. two copies of `chalk`) are harmless — they cost a few extra KB but don't cause type errors.

### After applying the fix

1. Run `pnpm install` to regenerate the lockfile.
2. Delete stale `tsconfig.tsbuildinfo` files in the affected package.
3. Verify with `pnpm --filter <package> run build`.
