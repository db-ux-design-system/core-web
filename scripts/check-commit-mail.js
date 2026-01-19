#!/usr/bin/env node
import * as ChildProcess from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as process from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env');

try {
	process.loadEnvFile(envPath);
} catch {
	// .env file doesn't exist, which is ok - we'll check for required vars below
}

const checkCommitMail = () => {
	console.warn(`Check COMMIT_MAIL`);
	if (!process.env.COMMIT_MAIL) {
		console.error(
			`No COMMIT_MAIL set in .env, please take a look at the file '.env.template'`
		);
		process.exit(1);
	}

	const currentMail = ChildProcess.execSync('git config user.email')
		.toString()
		.trim()
		.toLowerCase();
	const commitMail = process.env.COMMIT_MAIL.trim().toLowerCase();
	if (currentMail !== commitMail) {
		console.error(
			`currentMail: ${currentMail} !== initialMail: ${commitMail}`
		);
		console.error(
			`Please set your commit user mail for this project like: 'git config user.email '${commitMail}''`
		);
		process.exit(1);
	}
};

checkCommitMail();
