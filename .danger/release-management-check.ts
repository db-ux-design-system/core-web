/**
 * Release Management Check
 * 
 * Enforces documented release management practices from docs/release-management.md
 * and validates semantic commit conventions.
 */

import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';

declare const danger: DangerDSLType;
declare function message(message: string): void;
declare function warn(message: string): void;
declare function fail(message: string): void;

/**
 * Check if PR title follows semantic commit convention
 */
function validatePRTitle(): void {
  const title = danger.github.pr.title;
  const semanticPattern = /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build)(\(.+\))?: .+/;
  
  if (!semanticPattern.test(title)) {
    warn(`
⚠️ **PR Title Format**: Consider using semantic commit convention for better release management:

**Current title**: "${title}"

**Suggested format**: \`type(scope?): description\`

**Examples**:
- \`feat: add new button component variant\`
- \`fix(angular): resolve component import issue\`
- \`docs: update installation guide\`

**Valid types**: feat, fix, docs, style, refactor, perf, test, chore, ci, build

This helps with automated changelog generation and release categorization.
    `);
  } else {
    const [, type] = title.match(semanticPattern) || [];
    
    // Provide guidance for breaking changes
    if (type === 'feat' || type === 'refactor') {
      message(`
🔄 **${type.toUpperCase()} PR Detected**: This appears to be a feature or refactor.

**Please ensure**:
- If this includes breaking changes, consider using \`BREAKING CHANGE:\` in the commit message
- Update relevant documentation and migration guides if needed
- Consider impact on all framework packages (Angular, React, Vue, Web Components)
      `);
    }
  }
}

/**
 * Check for breaking changes and migration guide requirements
 */
function checkBreakingChanges(): void {
  const prBody = danger.github.pr.body || '';
  const title = danger.github.pr.title;
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  
  // Look for indicators of breaking changes
  const breakingIndicators = [
    'BREAKING CHANGE',
    'breaking change',
    'major version',
    'API change',
    'breaking:',
    'major:'
  ];
  
  const hasBreakingIndicator = breakingIndicators.some(indicator => 
    title.toLowerCase().includes(indicator.toLowerCase()) ||
    prBody.toLowerCase().includes(indicator.toLowerCase())
  );
  
  // Check for core API changes that might be breaking
  const coreApiChanges = modifiedFiles.some(file => 
    file.includes('/src/') && 
    (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.scss')) &&
    (file.startsWith('packages/foundations/') || file.startsWith('packages/components/'))
  );
  
  if (hasBreakingIndicator || coreApiChanges) {
    const migrationDocs = modifiedFiles.filter(file => 
      file.includes('migration') || 
      file.includes('MIGRATION') ||
      file.includes('docs/migration')
    );
    
    if (migrationDocs.length === 0 && hasBreakingIndicator) {
      warn(`
⚠️ **Breaking Change Documentation**: This PR appears to introduce breaking changes.

**Please consider**:
- Adding or updating migration documentation in \`docs/migration/\`
- Following the migration template: \`docs/migration-template.md\`
- Documenting the upgrade path for consumers

**Modified core files**: ${coreApiChanges ? 'Yes' : 'No'}
**Breaking change keywords detected**: ${hasBreakingIndicator ? 'Yes' : 'No'}
      `);
    } else if (migrationDocs.length > 0) {
      message(`
✅ **Migration Documentation**: Great! This PR includes migration documentation:
${migrationDocs.map(file => `- ${file}`).join('\n')}
      `);
    }
  }
}

/**
 * Check release readiness based on PR labels and scope
 */
function checkReleaseReadiness(): void {
  const labels = danger.github.issue.labels;
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  
  // Check for release-related labels
  const releaseLabels = labels.filter(label => 
    label.name.includes('release') || 
    label.name.includes('ready') ||
    label.name.includes('version')
  );
  
  // Check if this affects multiple packages (might need coordinated release)
  const affectedPackages = new Set();
  modifiedFiles.forEach(file => {
    const packageMatch = file.match(/^packages\/([^/]+)\//);
    if (packageMatch) {
      affectedPackages.add(packageMatch[1]);
    }
  });
  
  if (affectedPackages.size > 2) {
    message(`
📦 **Multi-Package Changes**: This PR affects ${affectedPackages.size} packages:
${[...affectedPackages].map(pkg => `- ${pkg}`).join('\n')}

**Consider**:
- Whether this needs coordinated release management
- Impact on downstream consumers
- Release sequencing if packages have dependencies

See [Release Management Documentation](./docs/release-management.md) for guidance.
    `);
  }
  
  // Remind about setting PR to ready for release when appropriate
  if (danger.github.pr.draft === false && releaseLabels.length === 0) {
    const isFeatureOrFix = danger.github.pr.title.match(/^(feat|fix)(\(.+\))?: .+/);
    if (isFeatureOrFix && affectedPackages.size > 0) {
      message(`
🏷️ **Release Management**: This appears to be a feature/fix affecting package code.

**After review approval**, consider:
- Setting the PR status to "ready for release" in the UX Engineering Team Backlog board
- Ensuring all issues are ready for release scope validation
- Following the release management process documented in \`docs/release-management.md\`
      `);
    }
  }
}

/**
 * Main release management check function
 */
export async function releaseManagementCheck(): Promise<void> {
  message('🚀 **Release Management Check**: Validating semantic commit practices and release readiness');
  
  validatePRTitle();
  checkBreakingChanges();
  checkReleaseReadiness();
}