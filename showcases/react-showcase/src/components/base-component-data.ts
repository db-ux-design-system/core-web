// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { type FunctionComponent, type ReactElement } from 'react';

export type BaseComponentProps = {
	slotCode?: Record<string, FunctionComponent>;
	subComponent?: ReactElement;
	isSubComponent?: boolean;
	componentName?: string;
};
