#!/usr/bin/env node

/**
 * Migration script to convert traditional SCSS imports to pkg: importers
 * Usage: node migrate-to-pkg-importers.js [files...]
 */

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const DRY_RUN = process.argv.includes('--dry-run');
const VERBOSE = process.argv.includes('--verbose');

// Pattern to match @db-ux package imports
const DB_UX_IMPORT_PATTERN = /@(use|forward|import)\s+"(@db-ux\/[^"]+)"/g;

/**
 * Convert traditional imports to pkg: importers
 */
function convertToPkgImporters(content) {
  return content.replace(DB_UX_IMPORT_PATTERN, (match, directive, packagePath) => {
    const newImport = `@${directive} "pkg:${packagePath}"`;
    if (VERBOSE) {
      console.log(`  ${match} → ${newImport}`);
    }
    return newImport;
  });
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    const originalContent = readFileSync(filePath, 'utf8');
    const convertedContent = convertToPkgImporters(originalContent);
    
    if (originalContent === convertedContent) {
      if (VERBOSE) {
        console.log(`⏭️  ${filePath} - no changes needed`);
      }
      return false;
    }
    
    console.log(`✅ ${filePath} - converted ${(originalContent.match(DB_UX_IMPORT_PATTERN) || []).length} imports`);
    
    if (!DRY_RUN) {
      writeFileSync(filePath, convertedContent, 'utf8');
    }
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
  
  if (args.length === 0) {
    console.log(`
Migration Script: Traditional SCSS Imports → Pkg: Importers

Usage:
  node migrate-to-pkg-importers.js [files...] [options]

Options:
  --dry-run     Show what would be changed without modifying files
  --verbose     Show detailed conversion information

Examples:
  # Convert specific files
  node migrate-to-pkg-importers.js styles.scss components/*.scss

  # Preview changes without modifying files
  node migrate-to-pkg-importers.js --dry-run "src/**/*.scss"

  # Convert all SCSS files in current directory
  node migrate-to-pkg-importers.js "**/*.scss"

What it does:
  @use "@db-ux/core-foundations/build/styles/variables";
  ↓
  @use "pkg:@db-ux/core-foundations/build/styles/variables";

Note: After conversion, update your build command to use --pkg-importer=node
`);
    process.exit(0);
  }
  
  if (DRY_RUN) {
    console.log('🔍 DRY RUN - No files will be modified\n');
  }
  
  let totalFiles = 0;
  let changedFiles = 0;
  
  for (const pattern of args) {
    const files = await glob(pattern);
    
    if (files.length === 0) {
      console.log(`⚠️  No files found matching: ${pattern}`);
      continue;
    }
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        changedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary: ${changedFiles}/${totalFiles} files converted`);
  
  if (changedFiles > 0 && !DRY_RUN) {
    console.log(`
🔧 Next steps:
1. Update your build configuration to use --pkg-importer=node
2. Test your build to ensure everything works correctly
3. Consider updating your documentation

Example build command:
  sass --pkg-importer=node input.scss output.css
`);
  }
}

main().catch(console.error);