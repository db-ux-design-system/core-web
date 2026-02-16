import type { CSSProperties } from 'react';

declare module './src/shared/model' {
	export interface GlobalProps {
		/**
		 * React inline styles for the component (development only).
		 */
		style?: CSSProperties;
	}
}
