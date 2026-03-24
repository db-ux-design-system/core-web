export const TOOL_TIMEOUT_MS = 10000;

export async function withTimeout<T>(
	operation: Promise<T>,
	timeoutMessage: string
): Promise<T | { content: { type: 'text'; text: string }[]; isError: boolean }> {
	let timer: ReturnType<typeof setTimeout> | undefined;
	const timeoutPromise = new Promise<any>((resolve) => {
		timer = setTimeout(() => {
			resolve({ content: [{ type: 'text', text: timeoutMessage }], isError: true });
		}, TOOL_TIMEOUT_MS);
	});
	const result = await Promise.race([operation, timeoutPromise]);
	if (timer) clearTimeout(timer);
	return result;
}
