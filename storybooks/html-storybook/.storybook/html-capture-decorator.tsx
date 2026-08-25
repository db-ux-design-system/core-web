import type { Decorator } from '@storybook/react-vite';
import { useEffect, useRef } from 'react';

/**
 * Global map storing captured innerHTML for each story.
 * Keyed by Storybook story ID (e.g., "components-button--primary").
 */
export const htmlSourceMap = new Map<string, string>();

export const htmlCaptureDecorator: Decorator = (Story, context) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const html = containerRef.current.innerHTML;
			htmlSourceMap.set(context.id, html);
		}
	}, [context.id]);

	return (
		<div ref={containerRef} style={{ display: 'contents' }}>
			<Story />
		</div>
	);
};
