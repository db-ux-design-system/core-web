// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import type { FunctionComponent, ReactElement } from 'react';
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
	subComponent?: ReactElement;
	componentName?: string;
};
