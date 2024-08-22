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
