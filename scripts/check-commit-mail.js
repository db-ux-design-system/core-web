#!/usr/bin/env node

// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import * as ChildProcess from 'node:child_process';
import * as process from 'node:process';
import * as dotenv from 'dotenv';

dotenv.config();

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
