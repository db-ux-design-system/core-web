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
