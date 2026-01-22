#!/usr/bin/env node
// Test runner for sanitizeName function
import { sanitizeName } from './extract-name-and-base-url.js';

const testName = process.argv[2];
const result = sanitizeName(testName);
console.log(result);
