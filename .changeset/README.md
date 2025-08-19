# 🚢 Release Workflow with Changesets

This document describes how we use [Changesets](https://github.com/changesets/changesets) in our daily development workflow to manage versions, changelogs, and releases in this monorepo.

---

## 📖 What are Changesets?

A **changeset** is a small Markdown file committed alongside your code changes. It records:

- Which packages are affected
- What type of version bump they require (`patch`, `minor`, `major`)
- A short description that will appear in the changelog

By collecting these small pieces of information, we can automatically generate:

- Version bumps in `package.json`
- Updated `CHANGELOG.md` entries
- Release PRs and npm publishes

---

## 🛠 Workflow

### 1. After making a change → add a changeset

Run:

```bash
npx changeset
```

You’ll be prompted to:

- Select affected packages
- Choose the bump type (patch, minor, major)
- Provide a short summary for the changelog

This creates a file like `.changeset/abcd123.md.`
👉 Commit this file as part of your PR.

### 2. Open a Pull Request

- Every PR that changes published code must include a changeset file.
- CI will check that at least one changeset exists when relevant.
- If your PR introduces a minor or major change, you may need to add the release:approved label to satisfy the approval gate.

### 3. Release PRs

When PRs are merged into main, the Release workflow will:

- Collect pending changesets
- Open (or update) a Release PR called “Version Packages”
- Run changeset version to bump versions and update changelogs

This PR should be reviewed like any other:

- Check the versions are correct
- Review the generated changelogs

Once everything looks good, merge the Release PR.

### 4. Publishing

After the Release PR is merged into main:

- CI will build the packages (build-outputs)
- Run the publish script (scripts/github/publish-npm.js)
- Publish new versions to npm with the tag latest (or next for pre-releases)
- Push git tags

You don’t have to run anything manually, it’s handled by CI.

---

## ✅ Best Practices

- **Always add a changeset**

    If your code change affects published packages, create a changeset.

    No changeset → no version bump → no release.

- **Choose the correct bump type**
    - patch: bugfix, no API or HTML changes
    - minor: new features, changes in markup or behavior, backwards-compatible
    - major: breaking changes (removed props, changed APIs)

- **Write user-friendly summaries**

    The text you provide will be copied into the CHANGELOG.md. Keep it concise and helpful.

- **One changeset per PR**

    Usually you only need one. If a PR touches multiple packages with different bump types, a single changeset can cover them all.

- **Approval for larger changes**

    If you mark something as minor or major, make sure the PR gets the release:approved label before merge.

- **Baseline snapshots**

    HTML snapshots help detect markup changes. If they change, prefer minor instead of patch.

- **Avoid manual version bumps**

    Never edit package.json versions by hand. Changesets handles this automatically.

---

## 🚧 Pre-Releases

For pre-releases (tagged next):

```bash
npx changeset pre enter next
# work as usual, add changesets, publish...
npx changeset pre exit
```

CI will publish with tag next. Useful for testing before a stable release.

---

## 📸 Snapshot Checks

- CI monitors changes in snapshot files (`__snapshots__/**/*.png`, `__snapshots__/**/*.yml`).
- If snapshots are changed, the pipeline enforces at least a minor or major bump in your changeset.
    - Snapshot changes usually mean visual or markup changes, these should never be published as just a patch.
- If only a patch bump is detected, the PR will be blocked with an error:

    “PNG/YML snapshots changed. Please bump at least MINOR in your changeset.”

## ✅ How to handle this

1. If the snapshot changes are intentional (e.g. new component, markup updates, visual updates):

- Run npx changeset
- Select at least minor or major
- Commit the changes

2. If the snapshot changes are unintentional (e.g. test noise, local mismatches):

- Revert or update the snapshots correctly
- Commit the fixed snapshots, the pipeline should pass afterwards

## 🔒 Approval Gate

- For PRs containing any minor or major bumps (patch, minor, major), the PR requires explicit approval (as all other PRs).

---

## 🔑 Cheatsheet

```bash
# Initialize Changesets (only once per repo)
npx changeset init

# Create a new changeset
npx changeset

# Show pending releases
npx changeset status --verbose

# Apply version bumps and changelogs
npm run release:version

# Publish (if you want to do it locally, not in CI)
npm run release:publish

# Pre-release mode
npx changeset pre enter next # enter prerelease
npx changeset pre exit # exit prerelease
```

---

## 📂 File Overview

- .changeset/ → contains pending changesets (.md files)
- package.json → versions are updated here automatically
- CHANGELOG.md → updated by changeset version
- .github/workflows/changesets-release-pr.yml → automation for Release PRs & publishing
- .github/workflows/pull-request-snapshot-diff.yml → validates changes in PNG/YML snapshots and enforces at least a MINOR bump
- scripts/github/publish-npm.js → custom publish script (packs & publishes built outputs)
