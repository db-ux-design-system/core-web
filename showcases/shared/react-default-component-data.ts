import type { FunctionComponent } from 'react';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from './default-component-data';

export type ReactDefaultComponentVariants = DefaultComponentVariants & {
	SlotCode?: FunctionComponent;
};

export type ReactDefaultComponentProps = DefaultComponentProps & {
	variants: ReactDefaultComponentVariants[];
	isSubComponent?: boolean;
	subComponent?: any;
	componentName?: string;
};
