// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { onMount, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBNavigationProps, DBNavigationState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

export default function DBNavigation(props: DBNavigationProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBNavigationState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'navigation-' + uuid();
	});

	// jscpd:ignore-end

	return (
		<nav
			ref={ref}
			id={state._id}
			aria-labelledby={props.labelledBy}
			class={cls('db-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
