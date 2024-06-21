import { type FunctionComponent, type ReactElement } from 'react';

export type BaseComponentProps = {
	slotCode?: Record<string, FunctionComponent>;
	subComponent?: ReactElement;
	isSubComponent?: boolean;
	componentName?: string;
};
