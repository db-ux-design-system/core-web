// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

declare global {
	let process:
		| {
				env?: {
					NEXT_PUBLIC_BASE_PATH?: string;
					NEXT_SHOWCASE_VARIANT?: string;
				};
		  }
		| undefined;
}

export {};
