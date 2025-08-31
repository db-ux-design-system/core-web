# Automated Version Updates

This repository now includes automated workflows to keep Node.js and npm versions up to date.

## Overview

Since dependabot cannot update version definitions in `.nvmrc` files and `packageManager` fields, we've implemented custom GitHub Actions workflows to handle these updates automatically.

## Workflows

### 🟢 Node.js Version Updates
**File:** `.github/workflows/update-nodejs-version.yml`

- **Purpose:** Automatically updates the Node.js version in `.nvmrc` to the latest LTS version
- **Technology:** Uses `actions-tools/update-nvmrc-action` from GitHub marketplace
- **Schedule:** Weekly on Monday at 9:00 AM UTC
- **Trigger:** Can also be triggered manually via GitHub Actions UI
- **Behavior:** 
  - Detects new Node.js LTS releases
  - Creates PR with branch name `dependabot/nodejs/update-to-{version}`
  - Adds `dependencies` and `nodejs` labels
  - Provides detailed PR description with change summary

### 🔵 npm Version Updates  
**File:** `.github/workflows/update-npm-version.yml`

- **Purpose:** Automatically updates the npm version in `package.json`'s `packageManager` field
- **Technology:** Custom logic using npm registry API
- **Schedule:** Weekly on Tuesday at 9:00 AM UTC (day after Node.js updates)
- **Trigger:** Can also be triggered manually via GitHub Actions UI
- **Behavior:**
  - Checks npm registry for latest version using `npm view npm version`
  - Compares with current version in `packageManager` field
  - Updates `package.json` using `npm pkg set packageManager="npm@{version}"`
  - Creates PR with branch name `dependabot/npm/update-to-{version}`
  - Adds `dependencies` and `npm` labels

## Manual Triggering

Both workflows can be manually triggered:

1. Go to **Actions** tab in GitHub
2. Select the workflow you want to run
3. Click **Run workflow** button
4. Choose the branch (usually `main`) and click **Run workflow**

## Integration with Existing Automation

These workflows are designed to integrate seamlessly with the existing automation infrastructure:

- **Branch naming:** Follows dependabot convention (`dependabot/...`)
- **PR labels:** Consistent with dependabot (`dependencies`)
- **Auto-merge:** Compatible with existing auto-merge rules for patch updates
- **Scheduling:** Runs weekly to avoid excessive automation noise

## Current Versions

As of the last update:
- **Node.js:** 24 (LTS)
- **npm:** 11.5.2

## Troubleshooting

### Workflow Failures
- Check the Actions tab for detailed logs
- Verify that the repository has proper permissions for creating PRs
- Ensure the workflows have access to `GITHUB_TOKEN`

### Version Format Issues
- Node.js versions should follow format: `24` or `24.1` or `24.1.0`
- npm versions should follow format: `11.5.2` (semantic versioning)

### Manual Updates
If automatic updates fail, you can manually update:

```bash
# Update Node.js version
echo "24" > .nvmrc

# Update npm version
npm pkg set packageManager="npm@11.5.2"
```

## Related Documentation

- [ADR-03: Dependency Automation](./adr/adr-03-dependency-automation.md)
- [Release Management](./release-management.md)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)