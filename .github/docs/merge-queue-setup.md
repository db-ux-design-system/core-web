# Merge Queue Setup Guide

This guide provides step-by-step instructions for enabling and configuring the GitHub Merge Queue on the `main` branch of the `core-web` repository.

## Overview

The Merge Queue sequences PRs into a queue, validates each against the latest base branch state, and merges automatically when the `checks-done` status check passes. This prevents merge parties, catches integration conflicts early, and ensures `main` stays green.

## Prerequisites

- Repository admin access to `db-ux-design-system/core-web`
- The `merge_group` trigger must already be added to `.github/workflows/default.yml` (see the corresponding workflow changes)

## Step-by-Step Configuration

### 1. Navigate to Branch Protection Rules

1. Go to the repository on GitHub: `db-ux-design-system/core-web`
2. Click **Settings** → **Branches** (under "Code and automation")
3. Find the branch protection rule for `main` (or create one if it doesn't exist)
4. Click **Edit** on the `main` branch rule

### 2. Enable Merge Queue

1. Check **Require merge queue**
2. Configure the following settings:

| Setting                          | Value     | Notes                                 |
| -------------------------------- | --------- | ------------------------------------- |
| **Merge method**                 | Squash    | All PRs merged via squash merge       |
| **Build concurrency**            | 5         | Default; max parallel validation runs |
| **Maximum entries**              | 100       | Default; max PRs that can be queued   |
| **Minimum entries before merge** | 0         | Merge immediately when checks pass    |
| **Wait time**                    | 0 minutes | No delay before starting validation   |

### 3. Configure Required Status Checks

1. Under **Require status checks to pass before merging**, ensure this is enabled
2. Add `checks-done` as a required status check
3. This is the single gate that the Merge Queue uses to decide whether a PR can be merged

### 4. Save Changes

Click **Save changes** to apply the branch protection rule.

## Scope

- **Applies to:** `main` branch only
- **Other branches:** Retain their current merge behavior without requiring the Merge Queue

## How It Works

### Normal PR Flow

1. Developer creates a PR targeting `main`
2. The Default Pipeline (`default.yml`) runs on the `pull_request` event
3. PR is reviewed and approved
4. Once all required checks pass, the PR enters the Merge Queue
5. The Merge Queue fires a `merge_group` event → Default Pipeline runs again to validate against the latest base
6. If `checks-done` succeeds → the PR is squash-merged into `main`
7. If `checks-done` fails → the PR is removed from the queue (see Failure Handling below)

### Dependabot PRs

- Dependabot PRs enter the Merge Queue like any other PR — no bypass or special priority
- The Auto-Merge workflow (`99-auto-merge.yml`) uses `gh pr merge --auto --squash`, which automatically routes through the Merge Queue when it is enabled
- The full `checks-done` gate runs for Dependabot PRs during queue validation

## Failure Handling

When `checks-done` fails during a `merge_group` validation run:

1. **Removal:** GitHub automatically removes the failing PR from the queue
2. **Re-validation:** Remaining queued PRs are re-validated against the updated base branch state
3. **Notification:** The failure status is reported on the originating PR, so the author can investigate

This ensures a single failing PR does not block other queued PRs from merging.

## Rollback

If issues arise after enabling the Merge Queue:

1. Navigate to **Settings** → **Branches** → Edit `main` rule
2. Uncheck **Require merge queue**
3. Save changes

The `merge_group` trigger in `default.yml` is harmless when the Merge Queue is disabled — it simply never fires. The Dependabot sequential concurrency workaround can be re-added to the workflow if needed.

## Related Files

| File                                  | Role                                                |
| ------------------------------------- | --------------------------------------------------- |
| `.github/workflows/default.yml`       | Main pipeline; includes `merge_group` trigger       |
| `.github/workflows/pull-request.yml`  | PR-specific jobs (auto-merge, labeler) — unchanged  |
| `.github/workflows/99-auto-merge.yml` | Dependabot auto-merge — unchanged, routes via queue |
