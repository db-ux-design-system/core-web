// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBIconProps, DBIconState } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBIconProps>({});

export default function DBIcon(props: DBIconProps) {
	const _ref = useRef<HTMLSpanElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBIconState>({});

	// jscpd:ignore-end

	return (
		<span
			ref={_ref}
			id={props.id}
			class={cls('db-icon', props.className)}
			data-icon={props.icon}
			data-icon-weight={props.weight}
			data-icon-variant={props.variant}
			aria-hidden="true">
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</span>
	);
}
