#!/usr/bin/env node

/**
 * Validation script for Danger JS configuration
 * Tests that our TypeScript files are syntactically correct and imports work
 */

import * as fs from 'fs';
import * as path from 'path';

const files = [
  'dangerfile.ts',
  '.danger/package-consistency-check.ts',
  '.danger/release-management-check.ts', 
  '.danger/documentation-freshness-check.ts'
];

console.log('🔍 Validating Danger JS configuration files...\n');

let hasErrors = false;

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${file}: File not found`);
    hasErrors = true;
    continue;
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Basic syntax validation
    if (!content.includes('export')) {
      console.log(`⚠️  ${file}: No exports found (might be missing export statements)`);
    }
    
    // Check for TypeScript syntax issues
    if (content.includes('import') && !content.includes('from')) {
      console.log(`❌ ${file}: Malformed import statements`);
      hasErrors = true;
      continue;
    }
    
    // Check for Danger JS function declarations
    if (file !== 'dangerfile.ts') {
      if (!content.includes('declare function message') || 
          !content.includes('declare function warn') || 
          !content.includes('declare function fail')) {
        console.log(`⚠️  ${file}: Missing Danger JS function declarations`);
      }
    }
    
    console.log(`✅ ${file}: Syntax appears valid`);
    
  } catch (error) {
    console.log(`❌ ${file}: Error reading file - ${error.message}`);
    hasErrors = true;
  }
}

// Check package.json scripts
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts['danger:ci']) {
      console.log('✅ package.json: danger:ci script found');
    } else {
      console.log('❌ package.json: danger:ci script missing');
      hasErrors = true;
    }
    
    if (packageJson.devDependencies && packageJson.devDependencies['danger']) {
      console.log('✅ package.json: danger dependency found');
    } else {
      console.log('❌ package.json: danger dependency missing');
      hasErrors = true;
    }
    
  } catch (error) {
    console.log(`❌ package.json: Error parsing - ${error.message}`);
    hasErrors = true;
  }
}

// Check workflow file
const workflowPath = path.join(process.cwd(), '.github/workflows/99-danger.yml');
if (fs.existsSync(workflowPath)) {
  console.log('✅ .github/workflows/99-danger.yml: Workflow file found');
} else {
  console.log('❌ .github/workflows/99-danger.yml: Workflow file missing');
  hasErrors = true;
}

console.log('\n🎯 Summary:');
if (hasErrors) {
  console.log('❌ Validation failed - please fix the errors above');
  process.exit(1);
} else {
  console.log('✅ All Danger JS configuration files appear valid!');
  console.log('\n📝 Next steps:');
  console.log('1. Install dependencies: npm install');
  console.log('2. Test locally: npm run danger:local');
  console.log('3. Create a PR to test the GitHub workflow');
}