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
- [GitHub Releases](https://github.com/db-ux-design-system/core-web/releases)

---

## 🛠 Workflow

### 1. After making a change → add a changeset

Run:

```bash
npx changeset
```

You’ll be prompted to:

- Select affected packages
- Choose the bump/release type (patch, minor, major)
- Provide a short summary for the changelog

This creates a file like `.changeset/abcd123.md`.
👉 Commit this file as part of your PR.

### 2. Open a Pull Request

- Every PR that changes published code must include a changeset file.
- CI will verify the existence of at least one changeset when necessary.

### 3. Release PRs

When PRs are merged into `main` branch, the Release workflow will:

- Collect pending changesets
- Open (or update) a Release PR called “Version Packages”
- Run `changeset version` to bump versions and update changelogs

This PR should be reviewed like any other:

- Check the versions are correct
- Review the generated changelogs

Once everything looks good, merge the Release PR.

### 4. Publishing

After the Release PR is merged into `main` branch:

- CI will build the packages (`./packages/`)
- Publish new versions to npm with the tag `latest`
- Create a [GitHub Release](https://github.com/db-ux-design-system/core-web/releases)

You don’t have to run anything manually, it’s handled by CI.

### 5. Re-start a release (optional)

In case that the pipeline has been failing and you need to re-start the release process via changesets, you would need to do the following steps:

- Remove the [release](https://github.com/db-ux-design-system/core-web/releases) and afterwards the [tag](https://github.com/db-ux-design-system/core-web/tags) that have been created
- Revert the commit out of the PR that has triggered the changesets release process.
- Afterwards proceed by reviewing and approving the "chore(release): version packages" Pull request as usual. And you would need to check for the commit hashes that are included in the PR, as those refer to the reverted commit now, and change them according to the original PR.

---

## ✅ Best Practices

- **Always add a changeset**

    If your code change affects published packages, create a changeset.

    No changeset → no version bump → no release.

- **Choose the correct bump type**
    - patch: bugfix, no API or HTML changes
    - minor: new features, changes in inner component markup or behavior, backwards-compatible
    - major: breaking changes (e.g. removed props, changed APIs)

- **Write user-friendly summaries**

    The text you provide will be copied into the `CHANGELOG.md`. Keep it concise and helpful.

- **One changeset per PR**

    Usually you only need one. If a PR touches multiple packages with different bump types, a single changeset can cover them all.

- **Baseline snapshots**

    ARIA snapshots by Playwright help detect markup changes. If they change, prefer minor instead of patch.
    And please mention those HTML changes within the `CHANGELOG.md` or of necessary (like bigger changes) in a [migration guide](https://github.com/db-ux-design-system/core-web/tree/main/docs/migration).

- **Avoid manual version bumps**

    Never edit `package.json` `version` field by hand. Changesets handles this automatically.

---

## 🚧 Pre-Releases

We handle pre-releases without changesets.
Instead, create a new [GitHub release](https://github.com/db-ux-design-system/core-web/releases/new)
with a tag like `1.2.3-next0` and the CI will pick it up and publish it to npm with the tag `next`.

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
npx changeset version

# Pre-release mode
npx changeset pre enter next # enter prerelease
npx changeset pre exit # exit prerelease
```

---

## 📂 File Overview

- `.changeset/` → contains pending changesets (`.md` files)
- `package.json` → versions are updated automatically in this file
- `CHANGELOG.md` → updated by changeset version
- `.github/workflows/changesets-release-pr.yml` → automation for Release PRs & publishing
- `.github/workflows/pull-request-snapshot-diff.yml` → validates changes in PNG/YML snapshots and enforces at least a MINOR bump
- `scripts/github/publish-npm.js` → custom publish script (packs & publishes built outputs)
