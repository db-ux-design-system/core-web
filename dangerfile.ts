/**
 * Danger JS configuration for DB UX Design System core-web
 * 
 * This provides minimal, targeted checks that complement existing automation
 * rather than duplicating lint, CI/CD, and pre-commit hook functionality.
 * 
 * Focus areas:
 * 1. Monorepo package consistency
 * 2. Release management practices
 * 3. Documentation freshness
 */

import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';
import { packageConsistencyCheck } from './.danger/package-consistency-check';
import { releaseManagementCheck } from './.danger/release-management-check';
import { documentationFreshnessCheck } from './.danger/documentation-freshness-check';

declare const danger: DangerDSLType;
declare function message(message: string): void;
declare function warn(message: string): void;
declare function fail(message: string): void;

// eslint-disable-next-line import/no-default-export
export default async (): Promise<void> => {
  // Skip Danger checks for dependabot PRs to avoid noise
  if (danger.github.pr.user.login === 'dependabot[bot]') {
    message('⚡ Skipping Danger checks for dependabot PR');
    return;
  }

  // Provide context about what Danger is checking
  message(`
🤖 **Danger JS Checks**: This PR is being validated for:
- **Package Consistency**: Ensuring dependency alignment across framework packages
- **Release Management**: Validating semantic commit practices and release readiness  
- **Documentation**: Checking if changes require documentation updates

*These checks complement our existing linting, CI/CD, and pre-commit automation.*
  `);

  try {
    // 1. Package Consistency Validation
    await packageConsistencyCheck();

    // 2. Release Management Enforcement  
    await releaseManagementCheck();

    // 3. Documentation Freshness Alerts
    await documentationFreshnessCheck();

  } catch (error) {
    fail(`❌ Danger JS encountered an error: ${error instanceof Error ? error.message : String(error)}`);
  }
};