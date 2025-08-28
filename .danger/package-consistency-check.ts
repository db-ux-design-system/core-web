/**
 * Package Consistency Check
 * 
 * Validates dependency version alignment across monorepo packages,
 * particularly for framework-specific packages (Angular, React, Vue, Web Components)
 * that should maintain consistent foundation dependencies.
 */

import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';
import * as fs from 'fs';
import * as path from 'path';

declare const danger: DangerDSLType;
declare function message(message: string): void;
declare function warn(message: string): void;
declare function fail(message: string): void;

interface PackageJson {
  name: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

/**
 * Get all package.json files that were modified in this PR
 */
function getModifiedPackageJsonFiles(): string[] {
  const allFiles = [...danger.git.modified_files, ...danger.git.created_files];
  return allFiles.filter(file => file.endsWith('package.json'));
}

/**
 * Read and parse a package.json file
 */
function readPackageJson(filePath: string): PackageJson | null {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.warn(`Could not read package.json at ${filePath}:`, error);
  }
  return null;
}

/**
 * Get all framework package directories
 */
function getFrameworkPackages(): string[] {
  const packagesDir = 'packages';
  try {
    const packages = fs.readdirSync(packagesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => ['ngx-core-components', 'react-core-components', 'v-core-components', 'wc-core-components'].includes(name));
    
    return packages.map(pkg => `${packagesDir}/${pkg}/package.json`);
  } catch (error) {
    console.warn('Could not read packages directory:', error);
    return [];
  }
}

/**
 * Check for foundation dependency consistency across framework packages
 */
function checkFoundationDependencyConsistency(): void {
  const frameworkPackages = getFrameworkPackages();
  const foundationDeps = ['@db-ux/core-foundations', '@db-ux/core-components'];
  
  const dependencyVersions: Record<string, Record<string, string>> = {};
  
  for (const packagePath of frameworkPackages) {
    const packageJson = readPackageJson(packagePath);
    if (!packageJson) continue;
    
    for (const depName of foundationDeps) {
      const version = packageJson.dependencies?.[depName] || 
                     packageJson.devDependencies?.[depName] ||
                     packageJson.peerDependencies?.[depName];
      
      if (version) {
        if (!dependencyVersions[depName]) {
          dependencyVersions[depName] = {};
        }
        dependencyVersions[depName][packageJson.name] = version;
      }
    }
  }
  
  // Check for version mismatches
  for (const [depName, packageVersions] of Object.entries(dependencyVersions)) {
    const versions = Object.values(packageVersions);
    const uniqueVersions = [...new Set(versions)];
    
    if (uniqueVersions.length > 1) {
      const versionDetails = Object.entries(packageVersions)
        .map(([pkg, version]) => `  - ${pkg}: ${version}`)
        .join('\n');
      
      warn(`
⚠️ **Inconsistent ${depName} versions** across framework packages:
${versionDetails}

Please ensure all framework packages use the same version of foundation dependencies.
      `);
    }
  }
}

/**
 * Check if foundation package changes should trigger dependent package updates
 */
function checkFoundationChangeImpact(): void {
  const modifiedFiles = [...danger.git.modified_files, ...danger.git.created_files];
  const foundationChanged = modifiedFiles.some(file => 
    file.startsWith('packages/foundations/') || 
    file.startsWith('packages/components/')
  );
  
  if (foundationChanged) {
    const frameworkFileChanges = modifiedFiles.filter(file =>
      file.startsWith('packages/ngx-core-components/') ||
      file.startsWith('packages/react-core-components/') ||
      file.startsWith('packages/v-core-components/') ||
      file.startsWith('packages/wc-core-components/')
    );
    
    if (frameworkFileChanges.length === 0) {
      message(`
📦 **Foundation Changes Detected**: This PR modifies foundation or core components.

Consider whether framework-specific packages need updates:
- Angular (`packages/ngx-core-components`)
- React (`packages/react-core-components`) 
- Vue (`packages/v-core-components`)
- Web Components (`packages/wc-core-components`)

*This is informational - not all foundation changes require framework updates.*
      `);
    }
  }
}

/**
 * Main package consistency check function
 */
export async function packageConsistencyCheck(): Promise<void> {
  const modifiedPackageFiles = getModifiedPackageJsonFiles();
  
  if (modifiedPackageFiles.length === 0) {
    return; // No package.json files modified
  }
  
  message(`📋 **Package Consistency Check**: Validating ${modifiedPackageFiles.length} modified package.json file(s)`);
  
  checkFoundationDependencyConsistency();
  checkFoundationChangeImpact();
}