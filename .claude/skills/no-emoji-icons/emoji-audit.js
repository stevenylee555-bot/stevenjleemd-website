#!/usr/bin/env node
/**
 * emoji-audit.js
 *
 * Scans a project directory for emoji characters in JSX/TSX/HTML/JS files
 * and reports each occurrence with file path, line number, and context.
 *
 * Usage:
 *   node emoji-audit.js [directory]
 *
 * If no directory provided, scans current working directory.
 */

const fs = require('fs');
const path = require('path');

// Comprehensive emoji regex covering most Unicode emoji blocks
const EMOJI_REGEX = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F000}-\u{1F02F}]|[\u{1F0A0}-\u{1F0FF}]|[\u{1F100}-\u{1F64F}]|[\u{1F910}-\u{1F96B}]|[\u{1F980}-\u{1F9E0}]|[\u{1FA70}-\u{1FAFF}]|[\u{200D}]|[\u{2300}-\u{23FF}]|[\u{2B00}-\u{2BFF}]|[\u{3030}]|[\u{303D}]|[\u{3297}]|[\u{3299}]/gu;

const EXTENSIONS = ['.jsx', '.tsx', '.js', '.ts', '.html', '.htm', '.vue', '.svelte', '.astro'];
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'dist', 'build', '.cache', 'out', '.turbo'];

function walkDir(dir, fileList = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    return fileList;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name) && !entry.name.startsWith('.')) {
        walkDir(fullPath, fileList);
      }
    } else if (EXTENSIONS.includes(path.extname(entry.name))) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function auditFile(filePath) {
  const findings = [];
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return findings;
  }

  const lines = content.split('\n');
  lines.forEach((line, index) => {
    const matches = [...line.matchAll(EMOJI_REGEX)];
    if (matches.length > 0) {
      const emojis = [...new Set(matches.map(m => m[0]))];
      findings.push({
        file: filePath,
        line: index + 1,
        emojis,
        context: line.trim().slice(0, 120),
      });
    }
  });

  return findings;
}

function main() {
  const targetDir = process.argv[2] || process.cwd();
  console.log(`\nScanning for emojis in: ${targetDir}\n`);

  const files = walkDir(targetDir);
  console.log(`Checking ${files.length} files...\n`);

  const allFindings = [];
  for (const file of files) {
    const findings = auditFile(file);
    allFindings.push(...findings);
  }

  if (allFindings.length === 0) {
    console.log('No emojis found. Project is clean.');
    return;
  }

  // Group by file
  const byFile = {};
  for (const finding of allFindings) {
    if (!byFile[finding.file]) byFile[finding.file] = [];
    byFile[finding.file].push(finding);
  }

  console.log(`Found ${allFindings.length} emoji occurrence(s) in ${Object.keys(byFile).length} file(s):\n`);
  console.log('='.repeat(80));

  for (const [file, findings] of Object.entries(byFile)) {
    const relPath = path.relative(process.cwd(), file);
    console.log(`\n${relPath}`);
    console.log('-'.repeat(80));
    for (const f of findings) {
      console.log(`  Line ${f.line}: ${f.emojis.join(' ')}`);
      console.log(`    > ${f.context}`);
    }
  }

  console.log('\n' + '='.repeat(80));
  console.log(`\nUnique emojis found: ${[...new Set(allFindings.flatMap(f => f.emojis))].join(' ')}`);
  console.log(`\nNext step: map each emoji to a Lucide icon or remove if decorative.`);
}

main();
