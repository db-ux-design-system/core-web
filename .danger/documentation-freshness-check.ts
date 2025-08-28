/**
 * Documentation Freshness Check
 * 
 * Alerts when code changes should trigger documentation updates,
 * ensures new packages have proper README files, and suggests
 * documentation improvements based on changed files.
 */

import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';
import * as fs from 'fs';
import * as path from 'path';

declare const danger: DangerDSLType;
declare function message(message: string): void;
declare function warn(message: string): void;
declare function fail(message: string): void;

/**
 * Check if component changes should update documentation
 */
function checkComponentDocumentationNeeds(): void {
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  
  // Look for component source file changes
  const componentChanges = modifiedFiles.filter(file => 
    file.includes('/components/') && 
    (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.scss')) &&
    !file.includes('.spec.') &&
    !file.includes('.test.')
  );
  
  if (componentChanges.length === 0) return;
  
  const docChanges = modifiedFiles.filter(file => 
    file.endsWith('.md') || 
    file.endsWith('.mdx') ||
    file.includes('/docs/')
  );
  
  if (componentChanges.length > 0 && docChanges.length === 0) {
    const changedComponents = [...new Set(componentChanges.map(file => {
      const match = file.match(/\/components\/([^/]+)\//);
      return match ? match[1] : null;
    }).filter(Boolean))];
    
    message(`
📚 **Documentation Reminder**: Component changes detected but no documentation updates.

**Changed components**: ${changedComponents.join(', ')}

**Consider updating**:
- Component documentation in \`docs/\`
- API documentation if interfaces changed  
- Usage examples if behavior changed
- Migration guides if breaking changes introduced

*This is a reminder - not all component changes require documentation updates.*
    `);
  }
}

/**
 * Check for new packages that might need README files
 */
function checkNewPackageDocumentation(): void {
  const createdFiles = danger.git.created_files;
  
  // Look for new package.json files (indicating new packages)
  const newPackageJsons = createdFiles.filter(file => 
    file.includes('/packages/') && 
    file.endsWith('/package.json')
  );
  
  for (const packageJsonPath of newPackageJsons) {
    const packageDir = path.dirname(packageJsonPath);
    const readmePath = path.join(packageDir, 'README.md');
    
    const hasReadme = createdFiles.some(file => file === readmePath) ||
                     fs.existsSync(path.join(process.cwd(), readmePath));
    
    if (!hasReadme) {
      warn(`
⚠️ **Missing README**: New package detected without README documentation.

**Package**: \`${packageDir}\`

**Please add**:
- \`${readmePath}\` with package description
- Installation instructions
- Basic usage examples
- API documentation links

See existing package READMEs for examples and format consistency.
      `);
    }
  }
}

/**
 * Check if API changes need documentation updates
 */
function checkAPIDocumentationNeeds(): void {
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  
  // Look for TypeScript definition changes that might affect public APIs
  const apiChanges = modifiedFiles.filter(file => 
    (file.endsWith('.d.ts') || 
     (file.endsWith('.ts') && file.includes('/src/') && !file.includes('.spec.') && !file.includes('.test.'))) &&
    (file.includes('/packages/foundations/') || 
     file.includes('/packages/components/'))
  );
  
  if (apiChanges.length === 0) return;
  
  const hasDocChanges = modifiedFiles.some(file => 
    file.includes('/docs/') || 
    file.endsWith('.md') ||
    file.endsWith('.mdx')
  );
  
  if (!hasDocChanges) {
    message(`
🔧 **API Documentation Check**: Detected changes to TypeScript definitions or source files.

**Files with potential API changes**: ${apiChanges.length}

**Consider reviewing**:
- Whether public APIs have changed
- If type definitions need documentation updates
- Whether usage examples need updates
- If migration guides are needed for breaking changes

**API files changed**:
${apiChanges.slice(0, 5).map(file => `- ${file}`).join('\n')}
${apiChanges.length > 5 ? `- ... and ${apiChanges.length - 5} more` : ''}
    `);
  }
}

/**
 * Check if foundational changes need broader documentation updates
 */
function checkFoundationDocumentationNeeds(): void {
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  
  // Look for foundation-level changes
  const foundationChanges = modifiedFiles.filter(file =>
    file.startsWith('packages/foundations/') &&
    (file.endsWith('.scss') || file.endsWith('.ts') || file.endsWith('.js'))
  );
  
  if (foundationChanges.length === 0) return;
  
  // Check for token/variable changes that might affect multiple components
  const tokenChanges = foundationChanges.filter(file =>
    file.includes('/colors/') ||
    file.includes('/spacing/') ||
    file.includes('/typography/') ||
    file.includes('/tokens/') ||
    file.includes('variables')
  );
  
  if (tokenChanges.length > 0) {
    message(`
🎨 **Foundation Token Changes**: Detected changes to design tokens or foundation variables.

**Changed areas**:
${tokenChanges.map(file => `- ${file}`).join('\n')}

**Consider documenting**:
- Updated design token values
- Migration guide for token changes
- Impact on component styling
- Framework-specific implementation notes

Token changes often affect multiple components and framework implementations.
    `);
  }
}

/**
 * Main documentation freshness check function
 */
export async function documentationFreshnessCheck(): Promise<void> {
  message('📖 **Documentation Freshness Check**: Validating documentation alignment with code changes');
  
  checkComponentDocumentationNeeds();
  checkNewPackageDocumentation();
  checkAPIDocumentationNeeds();
  checkFoundationDocumentationNeeds();
}