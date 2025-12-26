#!/usr/bin/env node

/**
 * Simple verification script to ensure useId integration is working correctly
 */

import { readFileSync } from 'fs';
import { globSync } from 'glob';

console.log('🧪 Verifying useId integration...\n');

// Test 1: Verify React components have useId
console.log('📋 React Components:');
const reactFiles = globSync('../../output/react/src/components/**/*.tsx');
let reactProcessed = 0;

reactFiles.forEach(file => {
  const content = readFileSync(file, 'utf8');
  if (content.includes('-${useId()}')) {
    const componentName = file.split('/').pop()?.replace('.tsx', '');
    console.log(`  ✅ ${componentName} - uses useId()`);
    reactProcessed++;
  }
});

console.log(`  📊 Total React components using useId: ${reactProcessed}\n`);

// Test 2: Verify Vue components have useId
console.log('📋 Vue Components:');
const vueFiles = globSync('../../output/vue/src/components/**/*.vue');
let vueProcessed = 0;

vueFiles.forEach(file => {
  const content = readFileSync(file, 'utf8');
  if (content.includes('-${useId()}')) {
    const componentName = file.split('/').pop()?.replace('.vue', '');
    console.log(`  ✅ ${componentName} - uses useId()`);
    vueProcessed++;
  }
});

console.log(`  📊 Total Vue components using useId: ${vueProcessed}\n`);

// Test 3: Verify no React/Vue components still use uuid for ID generation
console.log('🔍 Checking for remaining uuid usage in ID patterns...');
let issuesFound = 0;

[...reactFiles, ...vueFiles].forEach(file => {
  const content = readFileSync(file, 'utf8');
  const hasUuidIdPattern = content.match(/`[^`]*-\${uuid\(\)}`/);
  
  if (hasUuidIdPattern) {
    console.log(`  ⚠️  ${file} still uses uuid() for ID generation`);
    issuesFound++;
  }
});

if (issuesFound === 0) {
  console.log('  ✅ No uuid-based ID patterns found in React/Vue components\n');
} else {
  console.log(`  ❌ Found ${issuesFound} components still using uuid for IDs\n`);
}

// Test 4: Verify imports are correctly added
console.log('🔍 Checking import statements...');
let importIssues = 0;

reactFiles.forEach(file => {
  const content = readFileSync(file, 'utf8');
  if (content.includes('useId()') && !content.includes('import { useId } from "react"')) {
    console.log(`  ⚠️  ${file} uses useId() but missing import`);
    importIssues++;
  }
});

vueFiles.forEach(file => {
  const content = readFileSync(file, 'utf8');
  if (content.includes('useId()') && !content.includes('import { useId } from "vue"')) {
    console.log(`  ⚠️  ${file} uses useId() but missing import`);
    importIssues++;
  }
});

if (importIssues === 0) {
  console.log('  ✅ All useId imports are correctly added\n');
} else {
  console.log(`  ❌ Found ${importIssues} missing import statements\n`);
}

// Summary
console.log('📋 Summary:');
console.log(`✅ React components processed: ${reactProcessed}`);
console.log(`✅ Vue components processed: ${vueProcessed}`);
console.log(`✅ Components with SSR-compatible IDs: ${reactProcessed + vueProcessed}`);
console.log(`✅ Import issues: ${importIssues}`);
console.log(`✅ UUID pattern issues: ${issuesFound}`);

if (reactProcessed > 0 && vueProcessed > 0 && issuesFound === 0 && importIssues === 0) {
  console.log('\n🎉 All tests passed! SSR-compatible ID generation is working correctly.');
} else {
  console.log('\n❌ Some issues found. Please review the output above.');
  process.exit(1);
}