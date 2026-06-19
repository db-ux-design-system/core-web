# Dependency Update Strategy

This document explains the rationale behind our Dependabot configuration and GitHub Actions pinning strategy. The decision for Dependabot itself is documented in the [Dependency automation ADR](adr/adr-03-dependency-automation.md).

## Why only patch updates are auto-merged

We deliberately only auto-merge **patch** version bumps (via `.github/workflows/99-auto-handle-dependabot.yml`). Minor and major updates require manual review.

### Minor updates as an RSS feed for improvements

A minor version often introduces new features, optimizations, or deprecation notices. The moment a Dependabot PR arrives is the best time to read the changelog and evaluate whether we want to adapt our code to leverage new APIs, adopt performance improvements, or address deprecations.

If we auto-merged these, we would lose this natural trigger to review and optimize — experience shows it simply won't happen later. The PR serves as a lightweight notification system: "something changed, now is the time to look."

### Conscious adoption over passive consumption

We want to actively decide when to adopt new capabilities rather than silently absorbing them. A grouped, reviewed PR gives the team visibility into what changed and an opportunity to make intentional improvements alongside the version bump.

### Risk profile

Patch versions are bug fixes and security patches with minimal behavioral changes. Minor versions can alter behavior in subtle ways — new defaults, new warnings, new peer dependency requirements — that deserve a human judgement.

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
