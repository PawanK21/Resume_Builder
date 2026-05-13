#!/usr/bin/env node

/**
 * Resume Builder - GitHub Actions Setup Verification Script
 * This script verifies that all GitHub Actions configurations are properly set up
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const REQUIRED_FILES = [
  '.github/workflows/deploy.yml',
  '.github/workflows/security.yml',
  '.github/workflows/quality.yml',
  '.github/pull_request_template.md',
  '.github/ISSUE_TEMPLATE/bug_report.md',
  '.github/ISSUE_TEMPLATE/feature_request.md',
  'package.json',
  'vite.config.js',
  'DEPLOYMENT.md'
];

const REQUIRED_SCRIPTS = ['dev', 'build', 'preview'];

console.log('🔍 GitHub Actions Setup Verification\n');
console.log('=' .repeat(50) + '\n');

// Check files
console.log('📁 Checking configuration files...\n');
let filesOk = true;

REQUIRED_FILES.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING`);
    filesOk = false;
  }
});

// Check package.json scripts
console.log('\n📋 Checking npm scripts...\n');
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  let scriptsOk = true;
  
  REQUIRED_SCRIPTS.forEach(script => {
    if (pkg.scripts && pkg.scripts[script]) {
      console.log(`  ✅ ${script}`);
    } else {
      console.log(`  ❌ ${script} - MISSING`);
      scriptsOk = false;
    }
  });
  
  if (scriptsOk && filesOk) {
    console.log('\n' + '=' .repeat(50));
    console.log('✅ All GitHub Actions configurations are ready!\n');
    console.log('📝 Next steps:');
    console.log('  1. Create a GitHub repository');
    console.log('  2. Push your code: git push -u origin main');
    console.log('  3. Enable GitHub Pages in Settings');
    console.log('  4. Configure branch protection rules\n');
    process.exit(0);
  }
} catch (error) {
  console.log('❌ Error reading package.json:', error.message);
  process.exit(1);
}

if (!filesOk) {
  console.log('\n' + '=' .repeat(50));
  console.log('❌ Some configuration files are missing!\n');
  console.log('Please ensure all required files are created.');
  process.exit(1);
}
