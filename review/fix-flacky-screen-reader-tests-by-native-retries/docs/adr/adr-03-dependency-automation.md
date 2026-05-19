# ADR-03 - Dependency automation

## Decision and Rationale

To reduce the amount of time spent updating dependencies we want to use an automated process inside the CI/CD to update our dependencies with new versions, to reduce security issues.

We pick [dependabot](https://github.com/dependabot) because it is the default for open-source GitHub projects.

## Problem description and context

If dependencies are not updated automatically, packages can outdated and provide security issues for consumers.

## General conditions and decision criteria

### General conditions

- Dependencies should be updated inside a monorepo
- Tool should be easy to maintain
- Support should be backed up by a company

### Decision Criteria

- Dependabot maintained by GitHub
- Lot of community features
- Free usage of runners for open-source projects

## Alternatives

### A - Dependabot

#### Evaluation

- provided by GitHub directly
- easier to maintain and with meaningful defaults

### B - Renovate

#### Evaluation

- Get automated Pull Requests to update your dependencies
- Reduce noise by running Renovate on a schedule
- Relevant package files are discovered automatically
- Supports monorepo architectures like Lerna or Yarn workspaces with no extra configuration
- Bot behavior is customizable via configuration files (config as code)
- Use ESLint-like shared config presets for ease of use and simplifying configuration (JSON format only)
- Lock files are supported and updated in the same commit, including immediately resolving conflicts whenever PRs are merged
- Get replacement PRs to migrate from a deprecated dependency to the community suggested replacement (npm packages only)
- Open source (installable via npm/Yarn or Docker Hub) so can be self-hosted or used via GitHub App

## Links

- [Dependabot](https://github.com/dependabot)
- [Renovate](https://github.com/renovatebot/renovate)

## Implementation Details

### Current Configuration

The repository uses Dependabot with the following strategy:

#### Version Pinning Strategy

- **All dependencies are pinned to exact versions** (no `^` or `~` prefixes) to ensure reproducible builds
- **Peer dependencies** maintain ranges for compatibility (e.g., `"stylelint": "^14.0.0 || ^15.0.0 || ^16.0.0"`)
- **Internal workspace dependencies** use `"*"` for monorepo flexibility
- **Versioning strategy**: `increase` ensures all updates generate pull requests

#### Automation Levels

1. **Patch updates**: Automatically approved and merged via GitHub Actions
2. **Minor updates**: Grouped by technology/framework, require manual review
3. **Major updates**: Blocked for critical dependencies (Angular, React, TypeScript) requiring manual coordination

#### Dependency Grouping

Dependencies are logically grouped to reduce PR noise:

- **Framework groups**: Angular, React, Next.js
- **Tool groups**: ESLint, Stylelint, Prettier, TypeScript, Vite
- **Testing groups**: Playwright, Vitest
- **Development tools**: Commitlint
- **Patch group**: All patch updates bundled together

#### Schedule and Timing

- **Daily runs at 23:00 Europe/Berlin timezone**
- **Pull request limit**: 10 concurrent PRs to avoid overwhelming maintainers

#### Ignored Dependencies

Certain dependencies are intentionally ignored for manual control:

- Angular major versions (coordinated framework updates)
- React major versions (coordinated framework updates)
- TypeScript major versions (requires codebase compatibility review)
- Sass (temporary due to compatibility issues)
- ESLint v9 major (pending migration planning)
- Zone.js minor versions (Angular LTS compatibility)
