# ADR-05 - Danger JS for Automated Code Review

## Decision and justification

After evaluation, we implement a **minimal, selective adoption** of Danger JS with specific checks that complement our existing automation rather than replacing it. Danger JS will focus on monorepo-specific validations and release management practices that cannot be effectively handled by our current linting and CI/CD tools.

## Problem description and context

The repository was asked to evaluate [Danger JS](https://danger.systems/js/) for automated code review processes. Danger JS runs during CI and provides automated feedback on pull requests through comments and status checks.

Currently, the repository has extensive automation:
- Pre-commit hooks with husky and lint-staged
- Comprehensive linting (xo/ESLint, stylelint, markdownlint)
- Complex CI/CD pipeline with visual regression testing
- Automated dependency management with dependabot
- Custom release management processes

The question is whether Danger JS would add meaningful value or create redundant tooling overhead.

## General conditions and decision criteria

### General conditions

- Must not duplicate existing automation capabilities
- Should integrate seamlessly with current CI/CD workflow
- Must provide clear, measurable value for development workflow
- Should be maintainable with minimal ongoing effort
- Must respect the team's concern about tool proliferation

### Decision criteria

- **Value Addition**: Provides capabilities not covered by existing tools
- **Monorepo Relevance**: Addresses specific challenges of our monorepo structure
- **Release Management**: Enforces documented release management practices
- **Developer Experience**: Improves PR review process without noise
- **Maintenance Overhead**: Low configuration and maintenance burden

## Alternatives

### A - No Adoption (Status Quo)

#### Evaluation

**Pros:**
- No additional tooling complexity
- Existing automation already covers basic linting and validation
- GitHub native features (PR templates, required checks) handle many use cases
- Avoids potential redundancy with existing CI/CD checks

**Cons:**
- Misses opportunities for monorepo-specific validations
- Cannot provide contextual PR comments beyond simple pass/fail
- Release management practices are documented but not enforced
- Complex business rules difficult to encode in simple linters

### B - Full Danger JS Adoption (Like Twilio Paste)

#### Evaluation

**Pros:**
- Comprehensive automated review capabilities
- Proven implementation example exists
- Could handle package.json validation, changeset checking, etc.

**Cons:**
- High overlap with existing tooling
- This repository doesn't use changesets (primary value of Twilio example)
- Significant configuration overhead
- May create redundant checks and notification noise

### C - Minimal, Selective Implementation (Chosen)

#### Evaluation

**Pros:**
- Addresses specific gaps in current automation
- Focuses on monorepo and release management needs
- Low maintenance overhead
- Can be incrementally expanded if valuable
- Complements rather than duplicates existing tools

**Cons:**
- May not realize full potential of Danger JS
- Requires careful scoping to avoid redundancy
- Initial implementation effort still required

## Specific Implementation Scope

The minimal implementation includes:

1. **Package Consistency Validation**
   - Ensure dependency versions are aligned across framework packages (Angular, React, Vue, Web Components)
   - Validate that foundation updates trigger appropriate dependent package updates
   - Check for consistent peer dependency declarations

2. **Release Management Enforcement**
   - Remind about PR title conventions (feat:, fix:, etc.) when not following semantic commit standards
   - Flag when changes to core packages might need release coordination
   - Validate that breaking changes include migration documentation

3. **Documentation Freshness Alerts**
   - Remind when component changes should update documentation
   - Flag when new packages are added without proper README files
   - Suggest documentation updates for API changes

## Consequences

**Positive:**
- Provides targeted automation for monorepo-specific challenges
- Enforces documented release management practices
- Improves consistency across packages
- Gives contextual feedback in PR comments
- Can be incrementally improved based on team feedback

**Negative:**
- Adds another tool to the development stack
- Requires initial configuration and learning curve
- Potential for false positives or noisy feedback
- Must be maintained alongside other automation tools

**Mitigation Strategies:**
- Start with minimal, well-scoped checks
- Provide clear documentation on when Danger JS is used vs other tools
- Regular review and refinement of rules based on team feedback
- Clear ownership and maintenance responsibilities

## Links

- [Danger JS Documentation](https://danger.systems/js/)
- [Twilio Paste Implementation](https://github.com/twilio-labs/paste/tree/main/.danger)
- [Repository Release Management Documentation](../release-management.md)
- [Repository Conventions Documentation](../conventions.md)