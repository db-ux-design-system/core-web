import type { React, ReactElement } from 'react';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from './default-component-data';

export type ReactDefaultComponentVariants = DefaultComponentVariants & {
	SlotCode?: React.ComponentType<any>;
};

export type ReactDefaultComponentProps = DefaultComponentProps & {
	variants: ReactDefaultComponentVariants[];
	isSubComponent?: boolean;
	subComponent?: ReactElement;
	componentName?: string;
};
