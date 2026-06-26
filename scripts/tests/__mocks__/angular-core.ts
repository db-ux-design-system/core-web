/**
 * Mock for @angular/core used in version-detection tests.
 * The VERSION.major value can be controlled via setMockAngularVersion().
 */

let mockMajor = '21';
let shouldThrow = false;

export function setMockAngularVersion(major: string): void {
	mockMajor = major;
	shouldThrow = false;
}

export function setMockAngularVersionThrows(): void {
	shouldThrow = true;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const VERSION = {
	get major(): string {
		if (shouldThrow) {
			throw new Error('VERSION not available');
		}

		return mockMajor;
	}
};
