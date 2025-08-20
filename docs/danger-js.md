# Danger JS Integration

This repository uses [Danger JS](https://danger.systems/js/) for automated code review checks that complement our existing linting, CI/CD, and pre-commit automation.

## What Danger JS Does

Danger JS provides **contextual feedback on pull requests** through automated comments and status checks. It focuses on **business logic and repository-specific validations** that cannot be easily handled by traditional linters.

## Our Implementation Scope

We use a **minimal, selective implementation** that focuses on three key areas:

### 1. 📦 Package Consistency Validation
- Ensures dependency versions are aligned across framework packages (Angular, React, Vue, Web Components)
- Validates that foundation updates consider dependent package impacts
- Checks for consistent peer dependency declarations across the monorepo

### 2. 🚀 Release Management Enforcement
- Reminds about PR title conventions (feat:, fix:, etc.) for semantic versioning
- Flags when changes to core packages might need release coordination
- Validates that breaking changes include migration documentation
- Provides guidance on release readiness and scope

### 3. 📖 Documentation Freshness Alerts
- Reminds when component changes should update documentation
- Flags when new packages are added without proper README files
- Suggests documentation updates for API changes
- Alerts for foundation-level changes that might need broader documentation

## When to Use Danger JS vs Other Tools

| Use Case | Tool | Why |
|----------|------|-----|
| **Code formatting** | Prettier (pre-commit) | Fast, consistent formatting |
| **Code quality/linting** | XO/ESLint, stylelint | Established patterns, IDE integration |
| **Build validation** | CI/CD workflows | Comprehensive testing environment |
| **Commit message format** | commitlint (pre-commit) | Real-time feedback during commit |
| **Security scanning** | GitHub Security, npm audit | Specialized security tools |
| **Monorepo consistency** | **Danger JS** | Complex business logic across packages |
| **Release management** | **Danger JS** | Context-aware release guidance |
| **Documentation alignment** | **Danger JS** | Intelligent change detection |

## Configuration

### Main Configuration
- **Main file**: `dangerfile.ts` - Entry point and orchestration
- **Check modules**: `.danger/` directory contains individual check implementations

### Workflow Integration
- **Trigger**: Pull requests to main branch (internal PRs only)
- **Permissions**: Can comment on PRs, access repository content
- **Workflow**: `.github/workflows/99-danger.yml`

## Development

### Running Locally
```bash
# Test against current PR (requires GITHUB_TOKEN)
npm run danger:ci

# Test against local changes (simulated)
npm run danger:local
```

### Adding New Checks
1. Create a new module in `.danger/` directory
2. Export an async function for the check
3. Import and call in `dangerfile.ts`
4. Follow the pattern of existing checks for consistency

### Best Practices
- **Provide context**: Explain why a check is useful
- **Be informative**: Use `message()` for info, `warn()` for recommendations, `fail()` for blockers
- **Avoid noise**: Only alert when action is needed
- **Link to documentation**: Help developers understand next steps

## Examples

### Package Consistency Alert
```
⚠️ Inconsistent @db-ux/core-foundations versions across framework packages:
  - @db-ux/ngx-core-components: ^2.1.0
  - @db-ux/react-core-components: ^2.0.0

Please ensure all framework packages use the same version of foundation dependencies.
```

### Release Management Guidance
```
🚀 FEAT PR Detected: This appears to be a feature.

Please ensure:
- If this includes breaking changes, consider using `BREAKING CHANGE:` in the commit message
- Update relevant documentation and migration guides if needed
- Consider impact on all framework packages (Angular, React, Vue, Web Components)
```

### Documentation Reminder
```
📚 Documentation Reminder: Component changes detected but no documentation updates.

Changed components: button, input

Consider updating:
- Component documentation in `docs/`
- API documentation if interfaces changed  
- Usage examples if behavior changed
- Migration guides if breaking changes introduced
```

## Maintenance

### Monitoring
- Review Danger JS feedback in PRs to identify false positives
- Monitor for noisy or unhelpful warnings
- Collect team feedback on usefulness of checks

### Refinement
- Adjust check sensitivity based on team feedback
- Add new checks for recurring manual review comments
- Remove or modify checks that generate too many false positives

### Updates
- Keep Danger JS dependency updated
- Review and update check logic as repository practices evolve
- Maintain alignment with documented processes in `docs/`

## Rationale

See [ADR-05: Danger JS Evaluation](./adr/adr-05-danger-js-evaluation.md) for the full decision rationale and evaluation of alternatives.

## Examples

See [Danger JS Example Scenarios](./danger-js-examples.md) for detailed examples of how Danger JS responds to different types of pull requests.