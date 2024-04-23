declare global {
	let process: { env?: { NEXT_PUBLIC_BASE_PATH?: string } } | undefined;
}

export {};
