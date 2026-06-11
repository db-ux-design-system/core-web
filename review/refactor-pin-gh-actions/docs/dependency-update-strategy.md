# Dependency Update Strategy

This document explains the rationale behind our Dependabot configuration and GitHub Actions pinning strategy. The decision for Dependabot itself is documented in the [Dependency automation ADR](adr/adr-03-dependency-automation.md).

## Why only patch updates are auto-merged

We deliberately only auto-merge **patch** version bumps (via `.github/workflows/99-auto-merge.yml`). Minor and major updates require manual review.

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
