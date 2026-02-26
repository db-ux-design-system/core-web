import { useCallback, useEffect, useMemo, useRef } from 'react';

export function useSkipper() {
	const shouldSkipRef = useRef<boolean | null>(true);
	const shouldSkip = shouldSkipRef.current;

	// Wrap a function with this to skip a pagination reset temporarily
	const skip = useCallback(() => {
		shouldSkipRef.current = false;
	}, []);

	useEffect(() => {
		shouldSkipRef.current = true;
	});

	const result = useMemo(
		() => [Boolean(shouldSkip), skip] as const,
		[shouldSkip, skip]
	);

	return result;
}
