# Danger JS Example Scenarios

This document provides examples of how Danger JS would respond to different types of pull requests in this repository.

## Example 1: Package Dependency Inconsistency

**Scenario**: A PR updates `@db-ux/core-foundations` dependency in React package but not in Angular package.

**Files Changed**:
- `packages/react-core-components/package.json` (updated `@db-ux/core-foundations` to v2.1.0)

**Danger JS Response**:
```
⚠️ Inconsistent @db-ux/core-foundations versions across framework packages:
  - @db-ux/react-core-components: ^2.1.0
  - @db-ux/ngx-core-components: ^2.0.0
  - @db-ux/v-core-components: ^2.0.0

Please ensure all framework packages use the same version of foundation dependencies.
```

## Example 2: Feature Addition with Good Practices

**Scenario**: A PR adds a new component with proper documentation and semantic commit title.

**PR Title**: `feat(components): add notification banner component`

**Files Changed**:
- `packages/components/src/notification-banner/` (new component files)
- `docs/components/notification-banner.md` (new documentation)

**Danger JS Response**:
```
🔄 FEAT PR Detected: This appears to be a feature.

Please ensure:
- If this includes breaking changes, consider using `BREAKING CHANGE:` in the commit message
- Update relevant documentation and migration guides if needed
- Consider impact on all framework packages (Angular, React, Vue, Web Components)

✅ Documentation included: Great! This PR includes documentation:
- docs/components/notification-banner.md
```

## Example 3: Foundation Changes Without Documentation

**Scenario**: A PR updates color tokens but doesn't update documentation.

**PR Title**: `Update primary color tokens for accessibility`

**Files Changed**:
- `packages/foundations/scss/colors/speaking-colors/primary.scss`
- `packages/foundations/tokens/colors.json`

**Danger JS Response**:
```
⚠️ PR Title Format: Consider using semantic commit convention for better release management:

Current title: "Update primary color tokens for accessibility"

Suggested format: `type(scope?): description`

Examples:
- `feat: add new button component variant`
- `fix(angular): resolve component import issue`  
- `docs: update installation guide`

🎨 Foundation Token Changes: Detected changes to design tokens or foundation variables.

Changed areas:
- packages/foundations/scss/colors/speaking-colors/primary.scss
- packages/foundations/tokens/colors.json

Consider documenting:
- Updated design token values
- Migration guide for token changes
- Impact on component styling
- Framework-specific implementation notes

Token changes often affect multiple components and framework implementations.
```

## Example 4: Breaking Change with Migration Guide

**Scenario**: A PR introduces breaking changes with proper migration documentation.

**PR Title**: `feat!: update button API for improved accessibility`

**Files Changed**:
- `packages/components/src/button/` (API changes)
- `docs/migration/v3-to-v4-button-changes.md` (new migration guide)

**Danger JS Response**:
```
🔄 FEAT PR Detected: This appears to be a feature.

Please ensure:
- If this includes breaking changes, consider using `BREAKING CHANGE:` in the commit message
- Update relevant documentation and migration guides if needed
- Consider impact on all framework packages (Angular, React, Vue, Web Components)

✅ Migration Documentation: Great! This PR includes migration documentation:
- docs/migration/v3-to-v4-button-changes.md
```

## Example 5: Multi-Package Changes

**Scenario**: A PR affects multiple packages across the monorepo.

**Files Changed**:
- `packages/foundations/` (foundation changes)
- `packages/components/` (component updates)  
- `packages/react-core-components/` (React implementation)
- `packages/ngx-core-components/` (Angular implementation)

**Danger JS Response**:
```
📦 Multi-Package Changes: This PR affects 4 packages:
- foundations
- components
- react-core-components  
- ngx-core-components

Consider:
- Whether this needs coordinated release management
- Impact on downstream consumers
- Release sequencing if packages have dependencies

See Release Management Documentation for guidance.

🏷️ Release Management: This appears to be a feature/fix affecting package code.

After review approval, consider:
- Setting the PR status to "ready for release" in the UX Engineering Team Backlog board
- Ensuring all issues are ready for release scope validation
- Following the release management process documented in `docs/release-management.md`
```

## Example 6: New Package Without README

**Scenario**: A PR adds a new package but forgets to include a README.

**Files Changed**:
- `packages/new-utility-package/package.json` (new package)
- `packages/new-utility-package/src/index.ts` (source code)

**Danger JS Response**:
```
⚠️ Missing README: New package detected without README documentation.

Package: `packages/new-utility-package`

Please add:
- `packages/new-utility-package/README.md` with package description
- Installation instructions
- Basic usage examples
- API documentation links

See existing package READMEs for examples and format consistency.
```

## Example 7: Dependabot PR (Skipped)

**Scenario**: A dependabot PR updates dependencies.

**PR Author**: `dependabot[bot]`

**Danger JS Response**:
```
⚡ Skipping Danger checks for dependabot PR
```

## Benefits Demonstrated

These examples show how Danger JS provides:

1. **Context-Aware Feedback**: Goes beyond simple pass/fail to provide actionable guidance
2. **Monorepo Intelligence**: Understands package relationships and consistency requirements  
3. **Release Management**: Enforces documented practices for semantic versioning and coordination
4. **Documentation Alignment**: Ensures code changes are accompanied by appropriate documentation
5. **Noise Reduction**: Skips checks for automated PRs where feedback isn't needed

## Integration with Existing Tools

Note that these Danger JS checks **complement** rather than replace:
- ✅ **Linting** still catches syntax and style issues
- ✅ **CI/CD** still validates builds and tests
- ✅ **Pre-commit hooks** still format code and check commit messages
- ✅ **Security scanning** still identifies vulnerabilities

Danger JS adds the **business logic layer** that understands repository-specific practices and provides contextual guidance for better pull requests.